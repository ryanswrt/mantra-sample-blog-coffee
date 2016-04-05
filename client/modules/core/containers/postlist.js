let PostList = require('../components/postlist.coffee');
import {useDeps,compose, composeAll} from 'mantra-core';


//Not used, from example here https://github.com/kadirahq/mantra/issues/101
export const graphbinder = GraphQL.bindData((params, onData) => {
    BlogSchema = GraphQL.createLokkaClient('Blog')
    PostList.fragment = BlogSchema.createFragment(`
     fragment on BlogPost {
      _id,
      title     
     }
    `)
    
    const query = `
    {posts 
        {
            _id
            title 
        }
    }
    `;

    return BlogSchema.watchQuery(query, onData);
})(PostList);

const composer = ({context}, onData) =>{
  const {BlogSchema} = context();
  BlogSchema.query('{posts{_id,title}}')
  .then(posts=>{
      onData(null,posts);
  })
}


let composed = composeAll(
        compose(composer),
        useDeps()
        )(PostList);


export default composed;//composed; 
