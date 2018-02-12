import {
  SET_SORT_PROPERTY,
  RESET_SORT_PROPERTY,
} from '../actions/ui'

const initialUi = {
  activeSortProperty: 'timestamp',
}

const ui = (ui = initialUi, action) => {
  switch(action.type) {
    case SET_SORT_PROPERTY:
      const { newSortProperty } = action
      return {
        activeSortProperty: newSortProperty,
      }

    case RESET_SORT_PROPERTY:
      return {
        activeSortProperty: 'timestamp'
      }

    default:
      return ui
  }
}

export default ui
