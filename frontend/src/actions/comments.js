import * as ReadableAPI from '../ReadableAPI'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE'

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
