import * as ReadableAPI from '../ReadableAPI'

export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const EDIT_POST = 'EDIT_POST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'

export const INCREMENT_COMMENT_COUNT = 'INCREMENT_COMMENT_COUNT'
export const DECREMENT_COMMENT_COUNT = 'DECREMENT_COMMENT_COUNT'

export const VOTE_POST = 'VOTE_POST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'

export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export function addPost (postData) {
  return (dispatch) =>
    ReadableAPI.addPost(postData).then(
      addedPost => dispatch(addPostSuccess(addedPost)),
      error => dispatch(addPostFailure(error))
    )
}
export function addPostSuccess (addedPost) {
  return {
    type: ADD_POST_SUCCESS,
    addedPost,
  }
}
export function addPostFailure (error) {
  return {
    type: ADD_POST_FAILURE,
    error,
  }
}

export function editPost (postId, title, body) {
  return (dispatch) => {
    ReadableAPI.editPost(postId, title, body).then(
      editedPost => dispatch(editPostSuccess(editedPost)),
      error => dispatch(editPostFailure(error))
    )
  }
}
export function editPostSuccess (editedPost) {
  return {
    type: EDIT_POST_SUCCESS,
    editedPost,
  }
}
export function editPostFailure (error) {
  return {
    type: EDIT_POST_FAILURE,
    error,
  }
}

export function votePost (postId, option) {
  return (dispatch) =>
    ReadableAPI.votePost(postId, option).then(
      votedPost => dispatch(votePostSuccess(votedPost)),
      error => dispatch(votePostFailure(error))
    )
}
export function votePostSuccess (votedPost) {
  return {
    type: VOTE_POST_SUCCESS,
    votedPost,
  }
}
export function votePostFailure (error) {
  return {
    type: VOTE_POST_FAILURE,
    error
  }
}

export function deletePost(postId) {
  return (dispatch) =>
    ReadableAPI.deletePost(postId).then(
      success => dispatch(deletePostSuccess(postId)),
      error => dispatch(deletePostFailure(error))
    )
}
export function deletePostSuccess (deletedPostId) {
  return {
    type: DELETE_POST_SUCCESS,
    deletedPostId,
  }
}
export function deletePostFailure (error) {
  return {
    type: DELETE_POST_FAILURE,
    error,
  }
}

export function incrementCommentCount (postId) {
  return {
    type: INCREMENT_COMMENT_COUNT,
    postId,
  }
}
export function decrementCommentCount (postId) {
  return {
    type: DECREMENT_COMMENT_COUNT,
    postId,
  }
}
