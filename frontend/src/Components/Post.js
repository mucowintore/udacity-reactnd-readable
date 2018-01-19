import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card as CardUI, Label, Icon } from 'semantic-ui-react'
import CommentList from './CommentList'


const Post = (props) => (
    <CardUI fluid raised as='a'>
      <CardUI.Content>
        <CardUI.Header>{props.title}</CardUI.Header>
        <CardUI.Meta>{`created at ${props.timestamp} by`} <b>{props.author}</b> </CardUI.Meta>
        <CardUI.Description>{props.body}</CardUI.Description>
      </CardUI.Content>
      <CardUI.Content extra>
        <Label tag color='teal'>{props.category}</Label>
        <Label color='orange'>
          <Icon name='comments'/> {props.commentCount}
        </Label>
        <Label color='yellow'>
          <Icon name='star'/> {props.voteScore}
        </Label>
      </CardUI.Content>
      {/* <CardUI.Content extra>
        {props.commentCount &&
          <CommentList parentId={props.id} />
        }
      </CardUI.Content> */}
    </CardUI>
  )

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
}

function mapStateToProps({ posts }, { id }) {
  return posts[id]
}

export default connect(mapStateToProps)(Post)
