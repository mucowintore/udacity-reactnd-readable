import { combineReducers } from 'redux'
import {
  SORT_DISPLAYED_POSTS,
  FILTER_DISPLAYED_POSTS,
  RECEIVE_CATEGORIES,
} from '../actions'
import { descendingSortBy } from '../utils'



const initialPosts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 4
  },
  "6ni6ok3ym7mf1p33lnWz": {
    id: '6ni6ok3ym7mf1p33lnWz',
    timestamp: Date.now(),
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
    author: 'thingone',
    category: 'redux',
    voteScore: 4,
    deleted: false,
    commentCount: 0
  },
  allIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p33lnWz"],
  displayedIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p33lnWz"],
  activeFilterCategory: 'all',
  activeSortProperty: 'timestamp',
}

function posts(posts = initialPosts, action) {
  switch(action.type) {
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
    // TODO Create and implement an ADD_POST case in the "posts" reducer
    // case ADD_POST_SUCCESS:

    default:
      return posts
  }
}

function comments(comments = { }, action) {
  // For now, don't handle any actions
  // Just return the state given to us
  return comments
}

function categories(categories = [], action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
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
