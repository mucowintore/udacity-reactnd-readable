import * as ReadableAPI from '../ReadableAPI'

export const SET_SORT_PROPERTY = 'SET_SORT_PROPERTY'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'


export function setSortProperty (newSortProperty) {
  return {
    type: SET_SORT_PROPERTY,
    newSortProperty,
  }
}


export function fetchCategories () {
  return (dispatch) =>
    ReadableAPI.getCategories().then(
      categories => dispatch(fetchCategoriesSuccess(categories)),
      error => dispatch(fetchCategoriesFailure(error))
    )
}
export function fetchCategoriesSuccess (fetchedCategories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    fetchedCategories,
  }
}
export function fetchCategoriesFailure (error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error,
  }
}


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
export function addPostSuccess (post) {
  return {
    type: ADD_POST_SUCCESS,
    post,
  }
}
export function addPostFailure (error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error,
  }
}
