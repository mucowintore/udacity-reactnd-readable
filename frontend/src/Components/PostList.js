import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'


const PostList = ({ postIds }) => (
      <div>
        { postIds.map((postId) =>
          <Post key={postId} id={postId} />
        )}
      </div>
    )

function mapStateToProps({ posts }) {
  return {
    postIds: Object.keys(posts)
  }
}

export default connect(mapStateToProps)(PostList)