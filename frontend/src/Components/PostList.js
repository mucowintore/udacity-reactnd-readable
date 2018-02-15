import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Post from './Post'
import { getVisiblePostsIds } from '../reducers/posts'


const PostList = ({ postIds }) => (
      <div>
        { postIds.map((postId) =>
          <Post key={postId} detailed={false} id={postId}/>
        )}
      </div>
    )

function mapStateToProps({ posts, ui }, { match }) {
  return {
    postIds: getVisiblePostsIds(match.params.category || 'all', ui.activeSortProperty, posts),
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
