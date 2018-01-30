import React from 'react'
import { Comment as CommentUI } from 'semantic-ui-react'

import Comment from './Comment'

const sampleCommentIds = ['894tuq4ut84ut8v4t8wun89g', '8tu4bsun805n8un48ve89']

const CommentList = () => (
  <CommentUI.Group>
      { sampleCommentIds.map((commentId) =>
        <Comment key={commentId} id={commentId} />
      )}
  </CommentUI.Group>

)

export default CommentList
