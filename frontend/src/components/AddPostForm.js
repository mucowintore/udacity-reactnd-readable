import React from 'react'
import { Form, Icon, Button, Grid, Header, Divider, Segment } from 'semantic-ui-react'

const categories = ['React', 'Redux', 'Udacity']
const options = categories.map(cat => ({ key: cat.toLowerCase(), text: cat, value: cat.toLowerCase() }))

const AddPostForm = () => (
  <Grid centered>
    <Grid.Column width={6}>
      <Segment raised color='green'>
        <Header as='h1' content='Add a Post' />
        <Divider hidden />
        <Form>
          <Form.Input label='Post Title' placeholder='Enter the post title' />
          <Form.Group widths='equal'>
            <Form.Input fluid label='Author' placeholder='Enter your name' />
            <Form.Select fluid label='Category' options={options} placeholder='Pick a category' />
          </Form.Group>
          <Form.TextArea label='Post Content' placeholder='Type here...' />
          <Form.Group>
                <Form.Button icon color='green'>
                  <Icon name='checkmark' /> Submit
                </Form.Button>
                <Button basic compact color='red'>
                  <Icon name='remove'/> Cancel
                </Button>
          </Form.Group>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default AddPostForm
