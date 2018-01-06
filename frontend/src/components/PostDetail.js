import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'


class PostDetail extends React.Component {
  
}

PostDetails.propTypes = {
  id: PropTypes.id.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  deleted: PropTypes.boolean.isRequired,
}
