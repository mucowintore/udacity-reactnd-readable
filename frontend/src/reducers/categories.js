import {
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/categories'

import { capitalize } from '../utils'

// Returns a categories array in a format suitable for the FilterSubMenu dropdown
export function getDropdownCategories (categories) {
  return  [
            {
              key: 'all',
              text: 'All Categories',
              value: 'all'
            },
            ...categories.map(({ name }) => ({ key: name, text: capitalize(name), value: name }))
          ]
}
const categories = (categories = [], action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.fetchedCategories

    default:
      return categories
  }
}

export default categories
