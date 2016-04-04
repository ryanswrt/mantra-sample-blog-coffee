React = require('react')
{cond} = require('react-coffee-utils')
{div, form, h2, p, input, textarea, button, br} = React.DOM


NewPost =  React.createClass
    render: ->
        {error} = @props
        form {className:"new-post", onSubmit:@createPost},
            h2 "Add New Post"
            input {ref:"titleRef", type:"Text", placeholder:"Enter your post title"}
            cond error,
                p({style:{color:'red'}}, error)
            br {}
            textarea {ref:"contentRef", placeholder:"Enter your post content"}
            br {}
            button {type:"submit"},
                "Add New Post"
    createPost: (event)->
        if event and event.preventDefault
            event.preventDefault()

        {create} = @props
        {titleRef, contentRef} = @refs

        create(titleRef.value, contentRef.value)

module.exports = NewPost:NewPost
