import React from 'react'
import { connect } from 'react-redux'
import { Comment as CommentUI, Header } from 'semantic-ui-react'
import Comment from './Comment'


const CommentList = ({ commentIds }) => (
  <CommentUI.Group textAlign='right'>
      {/* <Header as='h3' dividing>Comments</Header> */}
      { commentIds.map((commentId) =>
        <Comment key={commentId} id={commentId} />
      )}
  </CommentUI.Group>

)

function mapStateToProps({ comments }, { parentId }) {
  const commentIds = Object.keys(comments)
                      .filter(key => comments[key].parentId === parentId && !comments[key].deleted)

  return {
    commentIds
  }
}

export default connect(mapStateToProps)(CommentList)
