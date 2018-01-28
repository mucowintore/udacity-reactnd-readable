import * as ReadableAPI from '../ReadableAPI'

export const SORT_DISPLAYED_POSTS = 'SORT_DISPLAYED_POSTS'
export const FILTER_DISPLAYED_POSTS = 'FILTER_DISPLAYED_POSTS'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'




export function sortDisplayedPosts (newSortProperty) {
  return {
    type: SORT_DISPLAYED_POSTS,
    newSortProperty,
  }
}

export function filterDisplayedPosts(newFilterCategory) {
  return {
    type: FILTER_DISPLAYED_POSTS,
    newFilterCategory,
  }
}


export function fetchCategories () {
  return (dispatch) =>
    ReadableAPI.getCategories().then(
      categories => dispatch(fetchCategoriesSuccess(categories)),
      error => dispatch(fetchCategoriesFailure(error))
    )
}
export function fetchCategoriesSuccess (categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  }
}
// TODO Handle the FETCH_CATEGORIES_FAILURE action in the categories reducer
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
export function fetchPostsSuccess (posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  }
}
export function fetchPostsFailure (error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error,
  }
}

// Add a post to the local backend server
export function addPost (postData) {
  return (dispatch) =>
    ReadableAPI.addPost(postData).then(
      post => {
        dispatch(addPostSuccess(post))
        // reset the sort and filter parameters to show all the posts, including the newly created post
        dispatch(sortDisplayedPosts('timestamp'))
        dispatch(filterDisplayedPosts('all'))
      },
      error => dispatch(addPostFailure(error))
    )
}
export function addPostSuccess (post) {
  return {
    type: ADD_POST_SUCCESS,
    post,
  }
}
// TODO Handle ADD_POST_FAILURE action in the posts reducer
export function addPostFailure (error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error,
  }
}
