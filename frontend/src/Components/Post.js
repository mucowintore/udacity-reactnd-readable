import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'
import { timeElapsed } from '../utils.js'


const Post = (props) => {
  const {
    id,
    timestamp,
    title,
    author,
    body,
    category,
    commentCount,
    voteScore,
  } = props

  // CSS style to prevent the post body from overflowing
  const ellipsisStyle = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }
  return (
    <Card fluid raised as={Link} to={`/${category}/${id}`}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          created {timeElapsed(timestamp)} by <b>{author}</b>
        </Card.Meta>
        <Card.Description style={ellipsisStyle}>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label tag color='teal'>
          {category}
        </Label>
        <Label color='orange'>
          <Icon name='comments'/> {commentCount}
        </Label>
        <Label color='yellow'>
          <Icon name='star'/> {voteScore}
        </Label>
      </Card.Content>
    </Card>
  )
}

function mapStateToProps({ posts }, { id }) {
  return posts[id]
}

export default connect(mapStateToProps)(Post)
