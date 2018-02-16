import React from 'react'
import { Comment as CommentUI } from 'semantic-ui-react'

import Comment from './Comment'


const CommentList = ({ commentIds }) => (
  <CommentUI.Group>
      { commentIds.map((commentId) =>
        <Comment key={commentId} id={commentId} />
      )}
  </CommentUI.Group>

)

export default CommentList
