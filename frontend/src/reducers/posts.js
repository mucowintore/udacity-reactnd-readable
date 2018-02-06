import {
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
} from '../actions'

export const getVisiblePostIds = (activeFilterCategory, activeSortProperty, posts) => {
  return Object.keys(posts)
    .filter(id => activeFilterCategory === 'all' || posts[id].category === activeFilterCategory)
    .sort((idA, idB) => posts[idB][activeSortProperty] - posts[idA][activeSortProperty])
}

const posts = (posts = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS:
      let { fetchedPosts } = action

      // Build the data portion of the posts object
      fetchedPosts = fetchedPosts.reduce((posts, post) => {
          posts[post.id] = post
          return posts
        }, {})

      return {
        ...posts,
        ...fetchedPosts,
      }

    case ADD_POST_SUCCESS:
      const { post } = action
      return {
        ...posts,
        [post.id]: post,
      }

    default:
      return posts
  }
}

export default posts
