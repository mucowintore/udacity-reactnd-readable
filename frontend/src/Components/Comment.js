import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Comment as CommentUI, Icon } from 'semantic-ui-react'

import FormModal from './FormModal'
import EditCommentForm from './EditCommentForm'
import { timeElapsed } from '../utils'
import {
  voteComment,
  deleteComment,
  decrementCommentCount,
} from '../actions'



class Comment extends React.Component {
  handleUpVote = () => {
    this.props.voteComment(this.props.id, 'upVote')
  }

  handleDownVote = () => {
    this.props.voteComment(this.props.id, 'downVote')
  }

  handleDelete = () => {
    const parentId = this.props.match.params.postId
    this.props.deleteComment(this.props.id)
    this.props.decrementCommentCount(parentId)
  }

  render() {
    const {
      author,
      timestamp,
      body,
      voteScore,
      id,
    } = this.props

    return (
      <CommentUI>
        <CommentUI.Content>
          <CommentUI.Author as='a' size='big'>{author}</CommentUI.Author>
          <CommentUI.Metadata>
            <div>{timeElapsed(timestamp)}</div>
            <div>
              <Icon link name='angle down' onClick={this.handleDownVote}/>
              <Icon name='star' color='yellow' />
              {voteScore}{' '}
              <Icon link name='angle up' onClick={this.handleUpVote}/>
            </div>
            <FormModal
              title='Edit Comment'
              color='green'
              form={<EditCommentForm commentId={id}/>}
              placeholder={
                <Icon link name='pencil' color='green' />
              }
            />
            <Icon link name='trash outline' color='red' onClick={this.handleDelete}/>
          </CommentUI.Metadata>
          <CommentUI.Text>{body}</CommentUI.Text>
        </CommentUI.Content>
      </CommentUI>
    )
  }
}

function mapStateToProps({ comments }, { id }) {
  return comments[id]
}


export default withRouter(connect(
  mapStateToProps,
  { voteComment, deleteComment, decrementCommentCount }
)(Comment))
