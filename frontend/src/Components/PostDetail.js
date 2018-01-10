import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI, Label, Icon } from 'semantic-ui-react'


PostDetail.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
}

export default function PostDetail (props) {
  const {
    title,
    timestamp,
    author,
    body,
    category,
    voteScore,
    commentCount,
  } = props

  return (
    <CardUI fluid raised as='a'>
      <CardUI.Content>
        <CardUI.Header>{title}</CardUI.Header>
        <CardUI.Meta>{`Created at ${timestamp} by ${author}`}</CardUI.Meta>
        <CardUI.Description>{body}</CardUI.Description>
      </CardUI.Content>
      <CardUI.Content extra>
        <Label tag>{category}</Label>
        <Label>
          <Icon name='comments'/> {commentCount}
        </Label>
        <Label>
          <Icon name='star'/> {voteScore}
        </Label>
      </CardUI.Content>
    </CardUI>
  )
}
