import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Icon } from 'semantic-ui-react'

import PostDetail from './PostDetail'
import CommentDashboard from './CommentDashboard'


const PostDetailView = () => (
  <div>
    <Link to='/'>
      <Icon name='angle left' size='big' color='black'/>
    </Link>
    <Divider hidden />
    <PostDetail />
    <Divider hidden />
    <CommentDashboard />
  </div>
)

export default PostDetailView
