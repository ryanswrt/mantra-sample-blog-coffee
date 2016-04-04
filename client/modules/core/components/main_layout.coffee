React = require 'react'
Navigation = require './navigation.coffee'

{div,header,a, footer, small, form, h1, h2, p, input, textarea, button, br} = React.DOM

Layout = ({content}={content:(a)->a}) ->
  if !content?() then content = -> content 
  div {},
    header {},
        h1 {}, "Mantra Voice"
        Navigation {}
    div {}
        content()
    footer {},
        small {},
            "Built with", a(href:'https://github.com/kadirahq/mantra', "Mantra  & Meteor")

module.exports = Layout
