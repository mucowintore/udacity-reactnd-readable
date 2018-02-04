import React from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'

class EditPostForm extends React.Component {
  state = {
    title: '',
    author: '',
    category: '',
    body: '',
  }

  /**
   * TODO handleChange
   * TODO handleSubmit
   * TODO handleCancel
   */
   
  render() {
    const { title, author, body } = this.state

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
            options={this.props.categories}
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
// function mapStateToProps() {
//
// }

// TODO Fetch the editPost action creator
// function mapDispatchToProps() {
//
// }

export default EditPostForm
