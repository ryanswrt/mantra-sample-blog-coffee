React = require 'react'
CreateComment = require('../containers/create_comment.js').default
{cond} = require 'react-coffee-utils'

{div, p, b} = React.DOM

CommentList = ({comments, postId, passedAction} = {comments:[],postId:'',passedAction:''}) =>
  div className:"comments",
    div {},
      React.createFactory(CreateComment) postId:postId, create:passedAction
    div className:"comment-list",
      cond comments.length == 0,
        p "No Comments Yet!"
      comments.map (comment)=>
        div key:comment._id, className:"comment",
          b {}, comment.author, ":"
          
          comment.text
          cond comment.saving, '...'


module.exports = CommentList
