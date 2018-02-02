import React from 'react'
import { Divider, Button, Icon } from 'semantic-ui-react'

import PostList from './PostList'
import FormModal from './FormModal'
import AddPostForm from './AddPostForm'

const PostDashboard = () => (
  <div>
    <FormModal
      title='Add a Post'
      color='green'
      form={<AddPostForm/>}
      placeholder={
        <Button icon floated='right' color='green'>
          <Icon name='add' /> Add Post
        </Button>
      }
    />
    <Divider hidden clearing />
    <PostList />
  </div>
)

export default PostDashboard
