import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import FormModal from './FormModal'
import AddCommentForm from './AddCommentForm'


const isOpen = false

const placeholder = (
  <Button icon compact color='green'>
    <Icon name='add' /> Add Comment
  </Button>
)

const AddCommentModal = () => (
  <FormModal
    title='Add Comment'
    color='green'
    form={<AddCommentForm/>}
    placeholder={placeholder}
  />
)

export default AddCommentModal
