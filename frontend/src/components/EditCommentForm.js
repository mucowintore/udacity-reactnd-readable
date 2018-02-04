import React from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'

const EditCommentForm = () => (
  <Form>
    <Form.Input
      fluid
      label='Author'
      name='author'
      placeholder='Enter your name'
    />
    <Form.TextArea
      label='Content'
      name='body'
      placeholder='Type here...'
    />
    <Form.Group>
          <Form.Button icon color='green'>
            <Icon name='checkmark' /> Submit
          </Form.Button>
          <Button basic compact color='red'>
            <Icon name='remove'/> Cancel
          </Button>
    </Form.Group>
  </Form>
)

export default EditCommentForm
