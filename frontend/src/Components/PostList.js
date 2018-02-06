import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import { getVisiblePostIds } from '../reducers/posts'


const PostList = ({ postIds }) => (
      <div>
        { postIds.map((postId) =>
          <Post key={postId} id={postId} />
        )}
      </div>
    )

function mapStateToProps({ posts, ui }) {
  return {
    postIds: getVisiblePostIds(ui.activeFilterCategory, ui.activeSortProperty, posts),
  }
}

export default connect(mapStateToProps)(PostList)
