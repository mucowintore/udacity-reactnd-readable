import React from 'react'
import { Card, Label, Icon, Grid } from 'semantic-ui-react'
import { timeElapsed, trim } from '../utils'

const samplePost = {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Udacity is the best place to learn React',
  body: 'Everyone says so after all.',
  author: 'thingtwo',
  category: 'react',
  voteScore: 6,
  deleted: false,
  commentCount: 2,
}

// TODO Get props from the Redux store
// TODO Add edit and delete icons in the right corner of the post header section
// TODO Left align the vote button and right align the post category and comment count
const PostB = () => {
  const {
    title,
    timestamp,
    author,
    body,
    category,
    commentCount,
    voteScore,
  } = samplePost

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid>
              <Grid.Column width={14}>
                {title}
              </Grid.Column>
              <Grid.Column width={2} textAlign='right'>
                <Icon link name='pencil' color='green'/>
                <Icon link name='trash' color='red'/>
              </Grid.Column>
            </Grid></Card.Header>
          <Card.Meta>created {timeElapsed(timestamp)} by <b>{author}</b> </Card.Meta>
          <Card.Description>{trim(body)}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon link name='angle down' size='large'/>
          <Icon name='star' color='yellow'/>{voteScore}
          <Icon link name='angle up'size='large'/>
          <span>{' '}</span>
          <Label tag color='teal'>{category}</Label>
          <Label color='orange'>
            <Icon name='comments'/> {commentCount}
          </Label>
        </Card.Content>
      </Card>
    </div>
  )
}

export default PostB
