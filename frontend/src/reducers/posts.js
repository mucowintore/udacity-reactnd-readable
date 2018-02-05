import {
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  SORT_DISPLAYED_POSTS,
  FILTER_DISPLAYED_POSTS,
} from '../actions'

import { descendingSortBy } from '../utils'

const initialPosts = {
  allIds: [],
  displayedIds: [],
  activeFilterCategory: 'all',
  activeSortProperty: 'timestamp',
}

const posts = (posts = initialPosts, action) => {
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

export default posts
