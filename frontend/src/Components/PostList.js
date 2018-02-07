import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Post from './Post'
import { getVisiblePostIds } from '../reducers/posts'


const PostList = ({ postIds }) => (
      <div>
        { postIds.map((postId) =>
          <Post key={postId} id={postId} />
        )}
      </div>
    )

function mapStateToProps({ posts, ui }, { match }) {
  return {
    postIds: getVisiblePostIds(match.params.category || 'all', ui.activeSortProperty, posts),
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
