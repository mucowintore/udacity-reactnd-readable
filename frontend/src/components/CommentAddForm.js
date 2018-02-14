import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Form, Icon, Button } from 'semantic-ui-react'

import { generateId } from '../utils'
import { addComment } from '../actions/comments'
import { incrementCommentCount } from '../actions/posts'

class CommentAddForm extends React.Component {
  state = {
    author: '',
    body: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    const parentId = this.props.match.params.postId
    const comment = {
      id: generateId(),
      timestamp: Date.now(),
      parentId,
      ...this.state,
    }

    this.props.addComment(comment)
    this.props.incrementCommentCount(parentId)
    this.props.handleCloseModal()

    e.preventDefault()
  }

  handleCancel = (e) => {
    this.props.handleCloseModal()
    e.preventDefault()
  }

  render() {
    const { author, body } = this.state

    return (
      <Form>
        <Form.Input
          fluid
          label='Author'
          name='author'
          placeholder='Enter your name'
          value={author}
          onChange={this.handleChange}
        />
        <Form.TextArea
          label='Content'
          name='body'
          placeholder='Type here...'
          value={body}
          onChange={this.handleChange}
        />
        <Form.Group>
          <Form.Button icon color='green' onClick={this.handleSubmit}>
            <Icon name='checkmark' /> Submit
          </Form.Button>
          <Button basic compact color='red' onClick={this.handleCancel}>
            <Icon name='remove'/> Cancel
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default withRouter(connect(null, { addComment, incrementCommentCount })(CommentAddForm))
