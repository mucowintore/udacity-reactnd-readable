import React from 'react'
import { Divider } from 'semantic-ui-react'
import AddPostModal from './AddPostModal'
import PostList from './PostList'

const PostDashboard = () => (
  <div>
    <AddPostModal />
    <Divider hidden clearing />
    <PostList />
  </div>
)

export default PostDashboard
