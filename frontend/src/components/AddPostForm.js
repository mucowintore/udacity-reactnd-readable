import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Button, Grid, Header, Divider, Segment } from 'semantic-ui-react'

import {
  addPost,
  sortDisplayedPosts,
  filterDisplayedPosts
} from '../actions'

import { generateId } from '../utils'

const categories = ['React', 'Redux', 'Udacity', 'Asana']
const options = categories.sort().map(cat => ({ key: cat.toLowerCase(), text: cat, value: cat.toLowerCase() }))

class AddPostForm extends React.Component {
  state = {
    title: '',
    author: '',
    category: '',
    body:'',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (e) => {
    const post = {
      id: generateId(),
      timestamp: Date.now(),
      ...this.state,
      // data to be supplied from the server once I connect the app to the server
      voteScore: 0,
      commentCount: 0,
     }

     this.props.addPost(post)
     this.props.sortDisplayedPosts('timestamp')
     this.props.filterDisplayedPosts('all')

     this.props.closePostModal()

     e.preventDefault()

    // 0. Check that the state is filled with the form values when the submit button is clicked
    // 1. Generate the rest of the necessary post attributes (id, timestamp)
    // 2. Send an ADD_POST action to the store with 'post' as the payload
    // 3. Close the Add Post Modal
  }

  handleCancel = (e) => {
    this.props.closePostModal()
    e.preventDefault()
  }

  render() {
    const { title, author, body } = this.state
    return (
      <Grid centered>
        <Grid.Column width={6}>
          <Segment raised color='green'>
            <Header as='h1' content='Add a Post' />
            <Divider hidden />
            <Form>
              <Form.Input label='Post Title' name='title' placeholder='Enter the post title' value={title} onChange={this.handleChange} />
              <Form.Group widths='equal'>
                <Form.Input fluid label='Author' name='author' placeholder='Enter your name' value={author} onChange={this.handleChange} />
                <Form.Select fluid label='Category' name='category' options={options} placeholder='Pick a category' onChange={this.handleChange} />
              </Form.Group>
              <Form.TextArea label='Post Content' name='body' placeholder='Type here...' value={body} onChange={this.handleChange} />
              <Form.Group>
                    <Form.Button icon color='green' onClick={this.handleSubmit}>
                      <Icon name='checkmark' /> Submit
                    </Form.Button>
                    <Button basic compact color='red' onClick={this.handleCancel}>
                      <Icon name='remove'/> Cancel
                    </Button>
              </Form.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default connect(null, { addPost, sortDisplayedPosts, filterDisplayedPosts })(AddPostForm)
