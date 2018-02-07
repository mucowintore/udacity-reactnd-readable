import {
  SET_SORT_PROPERTY,
} from '../actions'

const initialUi = {
  activeSortProperty: 'timestamp',
}

const ui = (ui = initialUi, action) => {
  switch(action.type) {
    case SET_SORT_PROPERTY:
      const { newSortProperty } = action
      return {
        ...ui,
        activeSortProperty: newSortProperty,
      }

    default:
      return ui
  }
}

export default ui
