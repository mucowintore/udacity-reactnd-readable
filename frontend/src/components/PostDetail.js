import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'

// TODO Replace PostB with Post once I make PostDetail stateful and dynamic
import PostB from './PostB'
import CommentDashboard from './CommentDashboard'


const PostDetail = () => (
  <div>
    <Icon link name='angle left' size='big'/>
    <Divider hidden />
    <PostB />
    <Divider hidden />
    <CommentDashboard />
  </div>
)

export default PostDetail
