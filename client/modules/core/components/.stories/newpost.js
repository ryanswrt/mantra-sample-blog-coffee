import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
const NewPost = require('../newpost.coffee').NewPost ;
console.log(NewPost)
storiesOf('core.NewPost', module)
  .add('default view', () => {
    return (
      <NewPost create={action('create post')} />
    );
  })
  .add('with error', () => {
    const error = 'This is the error message';
    return (
      <NewPost error={error} create={action('create post')} />
    );
  });
