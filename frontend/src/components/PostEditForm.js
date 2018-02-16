import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Form, Icon, Button } from 'semantic-ui-react'

import { editPost } from '../actions/posts'

class PostEditForm extends React.Component {
  state = {
    title: this.props.title,
    body: this.props.body,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value})

  handleSubmit = (e) => {
    const { id } = this.props
    const { title, body } = this.state

    this.props.editPost(id, title, body)
    this.props.handleCloseModal()
    e.preventDefault()
  }

  handleCancel = (e) => {
    this.props.handleCloseModal()
    e.preventDefault()
  }

  render() {
    const { title, body } = this.state
    const { author, category } = this.props

    return (
      <Form>
        <Form.Input
          label='Post Title'
          name='title'
          placeholder='Enter the post title'
          value={title}
          onChange={this.handleChange}
        />
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            readOnly
            label='Author'
            name='author'
            placeholder={author}
          />
          <Form.Input
            fluid
            readOnly
            label='Category'
            name='category'
            placeholder={category}
          />
        </Form.Group>
        <Form.TextArea
          label='Post Content'
          name='body'
          placeholder='Type here...'
          value={body}
          onChange={this.handleChange}
        />
        <Form.Group>
          <Form.Button
            icon
            color='green'
            onClick={this.handleSubmit}
            >
            <Icon name='checkmark' /> Submit
          </Form.Button>
          <Button
            basic
            compact
            color='red'
            onClick={this.handleCancel}
           >
            <Icon name='remove'/> Cancel
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

function mapStateToProps({ posts }, { postId }) {
  return posts[postId]
}

export default withRouter(connect(mapStateToProps, { editPost })(PostEditForm))
