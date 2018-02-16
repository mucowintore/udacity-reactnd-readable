export const SET_SORT_PROPERTY = 'SET_SORT_PROPERTY'
export const RESET_SORT_PROPERTY = 'RESET_SORT_PROPERTY'

export function setSortProperty (newSortProperty) {
  return {
    type: SET_SORT_PROPERTY,
    newSortProperty,
  }
}

export function resetSortProperty () {
  return {
    type: RESET_SORT_PROPERTY,
  }
}
