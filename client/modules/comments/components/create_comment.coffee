React = require('react')
{cond} = require('react-coffee-utils')
{div, textarea, br, button} = React.DOM


CreateComment = React.createClass
    render: ->
        {error} = @props
        div {},
            cond error, @_renderError(error) 
            textarea ref:'text', placeholder:'Enter your comment here.'
            br {}
            button onClick:@_create.bind(@), "Add Comment"

    _create: ->
        text = this.refs.text.value;
        {create, postId} = this.props;
        create(postId, text);
        this.refs.text.value = '';

    _renderError: (error)->
        div className:'error', error

module.exports = CreateComment
