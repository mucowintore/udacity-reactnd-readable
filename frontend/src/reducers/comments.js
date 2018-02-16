import {
  ADD_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
} from '../actions/comments'


export const getCommentIdsByParent = (parentId, comments) => {
  return Object.keys(comments)
          .filter(id => comments[id].parentId === parentId && !comments[id].deleted)
}

const comments = (comments = {}, action) => {
  switch(action.type) {
    case ADD_COMMENT_SUCCESS: {
      const { addedComment } = action
      return {
        ...comments,
        [addedComment.id]: addedComment,
      }
    }
    case EDIT_COMMENT_SUCCESS: {
      const { editedComment } = action
      return {
        ...comments,
        [editedComment.id]: editedComment,
      }
    }
    case VOTE_COMMENT_SUCCESS: {
      const { votedComment } = action
      return {
        ...comments,
        [votedComment.id]: votedComment,
      }
    }
    case DELETE_COMMENT_SUCCESS: {
      const { deletedCommentId } = action
      return {
        ...comments,
        [deletedCommentId]: {
          ...comments[deletedCommentId],
          deleted: true,
        }
      }
    }
    default:
      return comments
  }
}

export default comments
