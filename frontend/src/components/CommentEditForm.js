import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Button } from 'semantic-ui-react'

import { editComment } from '../actions/comments'

class CommentEditForm extends React.Component {
  state = {
    author: this.props.author,
    body: this.props.body,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleCancel = (e) => {
    this.props.handleCloseModal()
    e.preventDefault()
  }

  handleSubmit = (e) => {
    const editedComment = {
      ...this.state
    }
    this.props.editComment(this.props.id, editedComment)
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
          value={author}
          onChange={this.handleChange}
        />
        <Form.TextArea
          label='Content'
          name='body'
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

function mapStateToProps ({ comments }, { commentId }) {
  return comments[commentId]
}

export default connect(mapStateToProps, { editComment })(CommentEditForm)
