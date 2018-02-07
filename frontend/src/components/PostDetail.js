import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Icon } from 'semantic-ui-react'

// TODO Replace PostB with Post once I make PostDetail stateful and dynamic
import DetailedPost from './DetailedPost'
import CommentDashboard from './CommentDashboard'


const PostDetail = () => (
  <div>
    <Link to='/'>
      <Icon name='angle left' size='big' color='black'/>
    </Link>
    <Divider hidden />
    <DetailedPost />
    <Divider hidden />
    <CommentDashboard />
  </div>
)

export default PostDetail
