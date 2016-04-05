import React from 'react';
import {mount} from 'react-mounter';

const MainLayout = require('./components/main_layout.coffee');
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      let toBeMounted =  () => <PostList/>
      console.log(toBeMounted())
      mount(MainLayoutCtx, {
        content: toBeMounted
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      let toBeMounted = () => <Post postId={postId}/> 
      console.log(toBeMounted())
      mount(MainLayoutCtx, {
        content: toBeMounted
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
