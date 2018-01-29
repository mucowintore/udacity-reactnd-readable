import React from 'react'

import { Card, Label, Icon } from 'semantic-ui-react'
import { timeElapsed, trim } from '../utils.js'

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

const { title, timestamp, author, body, category, commentCount, voteScore } = samplePost

const PostDetail = () => (
  <div>
    <Card fluid raised as='a'>
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
      {/* <Card.Content extra>
        {props.commentCount &&
          <CommentList parentId={props.id} />
        }
      </Card.Content> */}
    </Card>
  </div>
)

export default PostDetail
