import {
  SET_FILTER_CATEGORY,
  SET_SORT_PROPERTY,
  CLEAR_FILTER_AND_SORT,
} from '../actions'

const initialUi = {
  activeFilterCategory: 'all',
  activeSortProperty: 'timestamp',
}

const ui = (ui = initialUi, action) => {
  switch(action.type) {
    case SET_FILTER_CATEGORY:
      const { newFilterCategory } = action
      return {
        ...ui,
        activeFilterCategory: newFilterCategory,
      }

    case SET_SORT_PROPERTY:
      const { newSortProperty } = action
      return {
        ...ui,
        activeSortProperty: newSortProperty,
      }

    case CLEAR_FILTER_AND_SORT:
      return {
        activeFilterCategory: 'all',
        activeSortProperty: 'timestamp',
      }

    default:
      return ui
  }
}

export default ui
