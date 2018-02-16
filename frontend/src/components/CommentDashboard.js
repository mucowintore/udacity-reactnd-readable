import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Header, Icon, Segment, Button } from 'semantic-ui-react'

import CommentList from './CommentList'
import FormModal from './FormModal'
import CommentAddForm from './CommentAddForm'
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
        <FormModal
          title='Add Comment'
          color='green'
          form={<CommentAddForm/>}
          placeholder={
              <Button icon compact color='green'>
                <Icon name='add' /> Add Comment
              </Button>
          }
        />
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
