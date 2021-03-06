import {
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/categories'

const categories = (categories = [], action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.fetchedCategories

    default:
      return categories
  }
}

export default categories
