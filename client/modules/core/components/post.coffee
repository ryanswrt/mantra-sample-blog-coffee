React = require 'react'
CommentList = require '../../comments/containers/comment_list'
{cond} = require 'react-coffee-utils'
{div, h2, p, h4} = React.DOM
Post = ({post}) =>
  {saving, title, content, _id} = post
  div {},
    cond saving, p {}, "Saving..."
    h2 {}, title
    p {}, content
    
    div {},
      h4 "Comments"
      React.createFactory(CommentList.default) postId:_id

module.exports = Post
