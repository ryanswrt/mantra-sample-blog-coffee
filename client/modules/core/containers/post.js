const Post = require('../components/post.coffee');
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {
  console.log(postId)
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
    const post = Collections.Posts.findOne(postId);
    if (post) {
      onData(null, {post});
    } else {
      onData();
    }
  }
};

//console.log(composer(Post))

let composed = composeAll(
  composeWithTracker(composer),
  useDeps()
)(Post);

console.log(composed)

export default composed;
