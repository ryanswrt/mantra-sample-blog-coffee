export default {
  create({Meteor, LocalState, FlowRouter, BlogSchema}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
//    Meteor.call('posts.create', id, title, content, (err) => {
//      if (err) {
//        return LocalState.set('SAVING_ERROR', err.message);
//      }
//    });
    const bs = `

        `
    BlogSchema.mutate(`
        {
            post: addPost(
                _id: "${id}",
                title: "${title}"
                content: "${content}"
                author: "The User"
            ){
                _id,
                title,
                content,
                author
            }
        }
    `)
    .then((payload)=> {
      //  BlogSchema.cache.setItemPayload(
      //      bs,
      //            
      //  )
    })
    .then(()=>{
        BlogSchema.refetchQuery('{posts{title,_id}}')
    })
    ;
    FlowRouter.go('/');//`/post/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
