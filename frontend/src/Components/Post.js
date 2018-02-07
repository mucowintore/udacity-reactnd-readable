import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'
// import CommentList from './CommentList'
import { timeElapsed, trim } from '../utils.js'


const Post = (props) => (
    <Card fluid raised as={Link} to={`/${props.category}/${props.id}`}>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>created {timeElapsed(props.timestamp)} by <b>{props.author}</b> </Card.Meta>
        <Card.Description>{trim(props.body)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label tag color='teal'>{props.category}</Label>
        <Label color='orange'>
          <Icon name='comments'/> {props.commentCount}
        </Label>
        <Label color='yellow'>
          <Icon name='star'/> {props.voteScore}
        </Label>
      </Card.Content>
      {/* <Card.Content extra>
        {props.commentCount &&
          <CommentList parentId={props.id} />
        }
      </Card.Content> */}
    </Card>
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
