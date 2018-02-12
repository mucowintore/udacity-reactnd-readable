import * as ReadableAPI from '../ReadableAPI'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE'

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const EDIT_COMMENT = 'EDIT_COMMENT'
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS'
export const EDIT_COMMENT_FAILURE = 'EDIT_COMMENT_FAILURE'

export const VOTE_COMMENT = 'VOTE_COMMENT'
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE'
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS'

export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

export function fetchComments (parentId) {
  return (dispatch) => {
    ReadableAPI.getComments(parentId).then(
      comments => dispatch(fetchCommentsSuccess(comments)),
      error => dispatch(fetchCommentsFailure(error))
    )
  }
}
export function fetchCommentsSuccess (fetchedComments) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    fetchedComments,
  }
}
export function fetchCommentsFailure (error) {
  return {
    type: FETCH_COMMENTS_FAILURE,
    error,
  }
}

export function addComment (commentData) {
  return (dispatch) => {
    ReadableAPI.addComment(commentData).then(
      addedComment => dispatch(addCommentSuccess(addedComment)),
      error => dispatch(addCommentFailure(error))
    )
  }
}
export function addCommentSuccess (addedComment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    addedComment,
  }
}
export function addCommentFailure (error) {
  return {
    type: ADD_COMMENT_FAILURE,
    error,
  }
}

export function editComment (commentId, comment) {
  return (dispatch) => {
    ReadableAPI.editComment(commentId, comment).then(
      editedComment => dispatch(editCommentSuccess(editedComment)),
      error => dispatch(editCommentFailure(error))
    )
  }
}
export function editCommentSuccess (editedComment) {
  return {
    type:EDIT_COMMENT_SUCCESS,
    editedComment,
  }
}
export function editCommentFailure (error) {
  return {
    type: EDIT_COMMENT_FAILURE,
    error,
  }
}

export function voteComment (commentId, option) {
  return (dispatch) => {
    ReadableAPI.voteComment(commentId, option).then(
      votedComment => dispatch(editCommentSuccess(votedComment)),
      error => dispatch(voteCommentFailure(error))
    )
  }
}
export function voteCommentSuccess (votedComment) {
  return {
    type: VOTE_COMMENT_SUCCESS,
    votedComment,
  }
}
export function voteCommentFailure (error) {
  return {
    type: VOTE_COMMENT_FAILURE,
    error,
  }
}

export function deleteComment (commentId) {
  return (dispatch) => {
    ReadableAPI.deleteComment(commentId).then(
      success => dispatch(deleteCommentSuccess(commentId)),
      error => dispatch(deleteCommentFailure(error))
    )
  }
}
export function deleteCommentSuccess (deletedCommentId) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    deletedCommentId,
  }
}
export function deleteCommentFailure (error) {
  return {
    type: DELETE_COMMENT_FAILURE,
    error,
  }
}
