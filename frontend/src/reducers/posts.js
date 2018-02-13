import {
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  INCREMENT_COMMENT_COUNT,
  DECREMENT_COMMENT_COUNT,
} from '../actions/posts'

import { toIdDictionary } from '../utils'

export const getVisiblePostsIds = (activeFilterCategory, activeSortProperty, posts) => {
  return Object.keys(posts)
    .filter(id => !posts[id].deleted)
    .filter(id => activeFilterCategory === 'all' || posts[id].category === activeFilterCategory)
    .sort((idA, idB) => posts[idB][activeSortProperty] - posts[idA][activeSortProperty])
}

const posts = (posts = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS: {
      const { fetchedPosts } = action

      return {
        ...posts,
        ...toIdDictionary(fetchedPosts),
      }
    }

    case ADD_POST_SUCCESS: {
      const { addedPost } = action
      return {
        ...posts,
        [addedPost.id]: addedPost,
      }
    }

    case EDIT_POST_SUCCESS: {
      const { editedPost } = action
      return {
        ...posts,
        [editedPost.id]: editedPost,
      }
    }

    case VOTE_POST_SUCCESS: {
      const { votedPost } = action
      return {
        ...posts,
        [votedPost.id]: votedPost,
      }
    }

    case DELETE_POST_SUCCESS: {
      const { deletedPostId } = action
      return {
        ...posts,
        [deletedPostId]: {
          ...posts[deletedPostId],
          deleted: true,
        }
      }
    }

    case INCREMENT_COMMENT_COUNT: {
      const { postId } = action
      return {
        ...posts,
        [postId]: {
          ...posts[postId],
          commentCount: posts[postId].commentCount + 1,
        }
      }
    }

    case DECREMENT_COMMENT_COUNT: {
      const { postId } = action
      return {
        ...posts,
        [postId]: {
          ...posts[postId],
          commentCount: posts[postId].commentCount - 1,
        }
      }
    }

    default:
      return posts
  }
}

export default posts
