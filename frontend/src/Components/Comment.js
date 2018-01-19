import React from 'react'
import { connect } from 'react-redux'
import { Comment as CommentUI, Header, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'


const Comment = (props) => {
  const { author, timestamp, body } = props

  return (
      <CommentUI>
        <CommentUI.Content>
          <CommentUI.Author as='a' size='big'>{author}</CommentUI.Author>
          <CommentUI.Metadata>
            <div>{timestamp}</div>
            <div>
              <Icon name='star' /> 5 Faves
            </div>
          </CommentUI.Metadata>
          <CommentUI.Text>{body}</CommentUI.Text>
        </CommentUI.Content>
      </CommentUI>
  )
}

Comment.propTypes = {
  // id: PropTypes.string.isRequired
  // parentId: PropTypes.string.isRequired
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  // voteScore: PropTypes.number.isRequired
  // deleted: PropTypes.boolean.isRequired
  // parentDeleted: PropTypes.boolean.isRequired
}

function mapStateToProps({ comments }, { id }) {
  return comments[id]
}

export default connect(mapStateToProps)(Comment)
