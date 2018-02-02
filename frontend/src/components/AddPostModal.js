import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import AddPostForm from './AddPostForm'
import FormModal from './FormModal'

const placeholder = (
  <Button
    icon
    floated='right'
    color='green'
  >
    <Icon name='add' /> Add Post
  </Button>
)

const AddPostModal = () => (
  <FormModal
    title='Add a Post'
    color='green'
    form={<AddPostForm/>}
    placeholder={placeholder}
  />
)


export default AddPostModal
