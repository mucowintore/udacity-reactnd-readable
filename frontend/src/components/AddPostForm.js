import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Button, Grid, Header, Divider, Segment } from 'semantic-ui-react'

import { capitalize, generateId } from '../utils'
import { addPost } from '../actions'


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
    }

    this.props.addPost(post)
    this.props.handleCloseModal()
    e.preventDefault()
  }

  handleCancel = (e) => {
    this.props.handleCloseModal()
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
                <Form.Select fluid label='Category' name='category' options={this.props.categories} placeholder='Pick a category' onChange={this.handleChange} />
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

function mapStateToProps ({ categories }) {
  return {
    categories: categories.map(({ name }) => ({ key: name, text: capitalize(name), value: name }))
  }
}


export default connect(mapStateToProps, { addPost })(AddPostForm)
