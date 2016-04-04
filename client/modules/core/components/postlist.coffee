React = require 'react'
{div, ul, li, a} = React.DOM

PostList = ({posts}) =>
  div className:'postlist',
    ul {}, (posts.map (post)->
      li key:post._id,
        a href:"/post/#{post._id}", post.title
    )

module.exports = PostList
