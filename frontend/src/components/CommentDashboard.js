import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

import CommentList from './CommentList'
import AddCommentModal from './AddCommentModal'

const CommentDashboard = () => (
  <Segment basic>
    <Header dividing as='h3'>
      <Icon name='comments' />Comments
    </Header>
    <CommentList />
    <AddCommentModal />
  </Segment>
)

export default CommentDashboard
