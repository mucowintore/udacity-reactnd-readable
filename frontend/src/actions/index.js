export const SORT_DISPLAYED_POSTS = 'SORT_DISPLAYED_POSTS'
export const FILTER_DISPLAYED_POSTS = 'FILTER_DISPLAYED_POSTS'

// TODO Unify the sort and filter actions
export function sortDisplayedPosts (property) {
  return {
    type: SORT_DISPLAYED_POSTS,
    property,
  }
}

export function filterDisplayedPosts(filterCategory) {
  return {
    type: FILTER_DISPLAYED_POSTS,
    filterCategory
  }
}
