import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Form, Icon, Button } from 'semantic-ui-react'

import { capitalize, generateId } from '../utils'
import { addPost } from '../actions/posts'
import { resetSortProperty } from '../actions/ui'


class PostAddForm extends React.Component {
  state = {
    title: '',
    author: '',
    category: '',
    body: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    const post = {
      id: generateId(),
      timestamp: Date.now(),
      ...this.state,
    }

    this.props.addPost(post)
    this.props.handleCloseModal()

    // reset filter and sort parameters
    this.props.history.push('/')
    this.props.resetSortProperty()

    e.preventDefault()
  }

  handleCancel = (e) => {
    this.props.handleCloseModal()
    e.preventDefault()
  }

  render() {
    const { title, author, body } = this.state
    const { categories } = this.props
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
            label='Author'
            name='author'
            placeholder='Enter your name'
            value={author}
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            label='Category'
            name='category'
            placeholder='Pick a category'
            options={categories}
            onChange={this.handleChange}
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

function mapStateToProps ({ categories }, { history }) {
  return {
    categories: categories.map(({ name }) => ({ key: name, text: capitalize(name), value: name })),
    history,
  }
}

export default withRouter(connect(mapStateToProps, { addPost, resetSortProperty })(PostAddForm))
