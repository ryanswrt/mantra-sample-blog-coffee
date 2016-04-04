React = require 'react'
{div, a, b} = React.DOM

Navigation = ()->
  div {},
    b {}, "Navigation: "
    a href:"/", "Home"
    " | "
    a href:"/new-post", "New Post"

module.exports = Navigation
