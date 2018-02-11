export const SET_SORT_PROPERTY = 'SET_SORT_PROPERTY'

export function setSortProperty (newSortProperty) {
  return {
    type: SET_SORT_PROPERTY,
    newSortProperty,
  }
}
