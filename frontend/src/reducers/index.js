import { combineReducers } from 'redux'
import {
  SORT_DISPLAYED_POSTS,
  FILTER_DISPLAYED_POSTS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
} from '../actions'

import { descendingSortBy } from '../utils'

// TODO split the data and UI state of posts
const initialPosts = {
  allIds: [],
  displayedIds: [],
  activeFilterCategory: 'all',
  activeSortProperty: 'timestamp'
}

function posts(posts = initialPosts, action) {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts: serverPosts } = action

      // Build the data portion of the posts object
      const properPosts =
        serverPosts.reduce((result, post) => {
          result[post.id] = post
          return result
        }, {})

      return {
        ...posts,
        ...properPosts,
        allIds: posts.map(post => post.id),
        displayedIds: posts.map(post => post.id),
      }

    // FIXME the list of displayed posts is simply reversed when all the posts have the same value for newSortProperty
    // IDEA by implementing an inverse sort function instead of just reversing the list of posts
    case SORT_DISPLAYED_POSTS:
      const { newSortProperty } = action
      return {
        ...posts,
        displayedIds: descendingSortBy(posts.displayedIds, newSortProperty, posts),
        activeSortProperty: newSortProperty,
      }

    case FILTER_DISPLAYED_POSTS:
      const { newFilterCategory } = action
      return {
        ...posts,
        displayedIds: (newFilterCategory === 'all')
                        ? descendingSortBy(posts.allIds, posts.activeSortProperty, posts)
                        : descendingSortBy(posts.allIds.filter(id => posts[id].category === newFilterCategory), posts.activeSortProperty, posts),

        activeFilterCategory: newFilterCategory,
      }

    case ADD_POST_SUCCESS:
      const { post } = action
      return {
        ...posts,
        [post.id]: post,
        // reset the filter and sort parameters to display all the posts
        allIds: [...posts.allIds, post.id],
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
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories

    default:
      return categories
  }
}

export default combineReducers ({
  categories,
  posts,
  comments,
})
