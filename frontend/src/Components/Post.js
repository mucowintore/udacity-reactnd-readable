import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'
import { timeElapsed, trim } from '../utils.js'


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

  return (
    <Card fluid raised as={Link} to={`/${category}/${id}`}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>created {timeElapsed(timestamp)} by <b>{author}</b> </Card.Meta>
        <Card.Description>{trim(body)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label tag color='teal'>{category}</Label>
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
