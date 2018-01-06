import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'


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
  const {title, timestamp, author, body, category, voteScore, commentCount} = props
  return (
    <Card
      fluid
      header={title}
      meta={`Created at ${timestamp} by ${author}`}
      description={body}
      extra= {
        <div>
          {category}  {voteScore} votes  {commentCount} comments
        </div>
      }
    />
  )
}
