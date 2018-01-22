import { combineReducers } from 'redux'
import {
  SORT_DISPLAYED_POSTS,
  FILTER_DISPLAYED_POSTS,
} from '../actions'
import _ from 'lodash'


function posts(posts, action) {
  switch(action.type) {
    case SORT_DISPLAYED_POSTS:
      const { newSortProperty } = action
      return {
        ...posts,
        displayedIds: _.sortBy(posts.displayedIds, id => posts[id][newSortProperty]),
        activeSortProperty: newSortProperty,
      }

    case FILTER_DISPLAYED_POSTS:
      const { newFilterCategory } = action
      return {
        ...posts,
        displayedIds: (newFilterCategory === 'all')
                        ? _.sortBy(posts.allIds, id => posts[id][posts.activeSortProperty])
                        : _.chain(posts.allIds)
                              .filter(id => posts[id].category === newFilterCategory)
                              .sortBy(id => posts[id][newSortProperty]),

        activeFilterCategory: newFilterCategory,
      }

    default:
      return posts
  }
}

function comments(comments, action) {
  // For now, don't handle any actions
  // Just return the state given to us
  return comments
}

function categories(categories, action) {
  // For now, don't handle any actions
  // Just return the state given to us
  return categories
}

export default combineReducers ({
  categories,
  posts,
  comments,
})
