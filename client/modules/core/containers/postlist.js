let PostList = require('../components/postlist.coffee');
import {useDeps,compose, composeAll} from 'mantra-core';



export const composer = GraphQL.bindData((params, onData) => {
    console.log(params); 
    BlogSchema = GraphQL.createLokkaClient('Blog')
    //const {BlogSchema} = context();
    PostList.fragment = BlogSchema.createFragment(`
     fragment on BlogPost {
      _id,
      title     
     }
    `)
    //
    //        ...${PostList.fragment}
    const query = `
    {posts 
        {
            _id
            title 
        }
    }
    `;

    console.log(onData)
    return BlogSchema.watchQuery(query, onData);
})(PostList);

//console.log(composer);

//let composed = composeAll(
//        compose(composer),
//        useDeps()
//        )(PostList);

//console.log(composed)

export default composer;//composed; 
