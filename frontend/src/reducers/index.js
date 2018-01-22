import { combineReducers } from 'redux'
import {
  SORT_DISPLAYED_POSTS,
  FILTER_DISPLAYED_POSTS,
} from '../actions'


function posts(posts = {}, action) {
  switch(action.type) {
    case SORT_DISPLAYED_POSTS:
      const { property } = action
      return {
        ...posts,
        displayedIds: [...posts.displayedIds]
                      .sort((idA, idB) => posts[idB][property] - posts[idA][property])
      }

    case FILTER_DISPLAYED_POSTS:
      const { filterCategory } = action
      return {
        ...posts,
        displayedIds: filterCategory === 'all'
                        ? Object.keys(posts)
                        : posts.displayedIds.filter(id => posts[id].category === filterCategory)
      }

    default:
      return posts
  }
}

function comments(comments = {}, action) {
  // For now, don't handle any actions
  // Just return the state given to us
  return comments
}

function categories(categories = [], action) {
  // For now, don't handle any actions
  // Just return the state given to us
  return categories
}

export default combineReducers ({
  categories,
  posts,
  comments,
})
