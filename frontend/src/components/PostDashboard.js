import React from 'react'
import { Divider } from 'semantic-ui-react'
import AddPostDimmer from './AddPostDimmer'
import PostList from './PostList'

const PostDashboard = () => (
  <div>
    <AddPostDimmer />
    <Divider hidden clearing />
    <PostList />
  </div>
)

export default PostDashboard
