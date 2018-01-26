import React from 'react'
import { Divider } from 'semantic-ui-react'
import AddPost from './AddPost'
import PostList from './PostList'

const PostDashboard = () => (
  <div>
    <AddPost />
    <Divider hidden clearing />
    <PostList />
  </div>
)

export default PostDashboard
