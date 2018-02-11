import * as ReadableAPI from '../ReadableAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

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
