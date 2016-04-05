export default {
  create({Meteor, LocalState, FlowRouter, BlogSchema}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
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

    FlowRouter.go('/');//`/post/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
