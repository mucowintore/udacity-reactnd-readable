import * as ReadableAPI from '../ReadableAPI'

export const SORT_DISPLAYED_POSTS = 'SORT_DISPLAYED_POSTS'
export const FILTER_DISPLAYED_POSTS = 'FILTER_DISPLAYED_POSTS'
export const ORGANIZE_DISPLAYED_POSTS = 'ORGANIZE_DISPLAYED_POSTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'


export function sortDisplayedPosts (newSortProperty) {
  return {
    type: SORT_DISPLAYED_POSTS,
    newSortProperty,
  }
}

export function filterDisplayedPosts(newFilterCategory) {
  return {
    type: FILTER_DISPLAYED_POSTS,
    newFilterCategory
  }
}

export function fetchCategories () {
  return (dispatch) =>
    ReadableAPI.getCategories().then(
    categories => dispatch(fetchCategoriesSuccess(categories)),
    error => dispatch(fetchCategoriesFailure(error)))
}


export function fetchCategoriesSuccess (categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

export function fetchCategoriesFailure (error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error
  }
}
