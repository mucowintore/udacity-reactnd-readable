import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Button } from 'semantic-ui-react'

import { getDropdownCategories } from '../reducers/categories'

class EditPostForm extends React.Component {
  state = {
    title: this.props.post.title,
    author: this.props.post.author,
    category: this.props.post.category,
    body: this.props.post.body,
  }

  /**
   * TODO handleChange
   * TODO handleSubmit
   * TODO handleCancel
   */

  render() {
    const { title, author, body, category } = this.state
    const { categories } = this.props.categories

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
            value={category}
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

// TODO Fetch categories from the store
// TODO Fetch the detailed post's info from the store
function mapStateToProps({ categories, posts, ui }) {
  const { title, author, body, category } = posts[ui.currentDetailedPostId]
  return {
    post: {
      title,
      author,
      body,
      category,
    },
    categories: getDropdownCategories(categories)
  }
}

// TODO Fetch the editPost action creator
// function mapDispatchToProps() {
//
// }

export default connect(mapStateToProps)(EditPostForm)
