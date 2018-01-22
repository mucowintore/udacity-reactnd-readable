export const SORT_DISPLAYED_POSTS = 'SORT_DISPLAYED_POSTS'
export const FILTER_DISPLAYED_POSTS = 'FILTER_DISPLAYED_POSTS'
export const ORGANIZE_DISPLAYED_POSTS = 'ORGANIZE_DISPLAYED_POSTS'

// TODO Unify the sort and filter actions
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
