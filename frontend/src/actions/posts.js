import * as ReadableAPI from '../ReadableAPI'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const EDIT_POST = 'EDIT_POST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'

export const VOTE_POST = 'VOTE_POST'

export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export function fetchPosts () {
  return (dispatch) =>
    ReadableAPI.getPosts().then(
      posts => dispatch(fetchPostsSuccess(posts)),
      error => dispatch(fetchPostsFailure(error))
    )
}
export function fetchPostsSuccess (fetchedPosts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    fetchedPosts,
  }
}
export function fetchPostsFailure (error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error,
  }
}

export function addPost (postData) {
  return (dispatch) =>
    ReadableAPI.addPost(postData).then(
      post => dispatch(addPostSuccess(post)),
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
      post => dispatch(editPostSuccess(post)),
      error => dispatch(editPostFailure(error))
    )
  }
}
export function editPostSuccess(editedPost) {
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

export function votePost (option) {
  return (dispatch) =>
    ReadableAPI.votePost(option).then(
      post => dispatch(editPostSuccess(post)),
      error => dispatch(editPostFailure(error))
    )
}

export function deletePost(postId) {
  return (dispatch) =>
    ReadableAPI.deletePost(postId).then(
      post => dispatch(deletePostSuccess(postId)),
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
