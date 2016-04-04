import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

const Component = require('../components/comment_list.coffee');

export const composer = ({context, clearErrors, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({postId}, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
