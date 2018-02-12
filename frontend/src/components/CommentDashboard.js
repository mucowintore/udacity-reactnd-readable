import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Header, Icon, Segment } from 'semantic-ui-react'

import CommentList from './CommentList'
import AddCommentModal from './AddCommentModal'
import { getCommentIdsByParent } from '../reducers/comments'

class CommentDashboard extends React.Component {
  render() {
    const { commentIds } = this.props

    return (
      <Segment basic>
        <Header dividing as='h3'>
          <Icon name='comments' />Comments
        </Header>
        <CommentList commentIds={commentIds}/>
        <AddCommentModal />
      </Segment>
    )
  }
}

function mapStateToProps ({ comments }, { match }) {
  return {
    commentIds: getCommentIdsByParent(match.params.postId, comments)
  }
}

export default withRouter(connect(mapStateToProps)(CommentDashboard))
