import React from 'react'
import { connect } from 'react-redux'
import { Comment as CommentUI, Icon } from 'semantic-ui-react'

import FormModal from './FormModal'
import EditCommentForm from './EditCommentForm'
import { timeElapsed } from '../utils'
import { voteComment } from '../actions/comments'



class Comment extends React.Component {
  handleUpVote = () => {
    this.props.voteComment(this.props.id, 'upVote')
  }

  handleDownVote = () => {
    this.props.voteComment(this.props.id, 'downVote')
  }

  render() {
    const {
      author,
      timestamp,
      body,
      voteScore
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
              form={<EditCommentForm/>}
              placeholder={
                <Icon link name='pencil' color='green' />
              }
            />
            <Icon link name='trash outline' color='red' />
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


export default connect(mapStateToProps, { voteComment })(Comment)
