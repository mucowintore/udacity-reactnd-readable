import React from 'react'
import { connect } from 'react-redux'
import { Comment as CommentUI, Icon } from 'semantic-ui-react'

import FormModal from './FormModal'
import EditCommentForm from './EditCommentForm'
import { timeElapsed } from '../utils'


// const sampleComments = {
//   "894tuq4ut84ut8v4t8wun89g": {
//     id: '894tuq4ut84ut8v4t8wun89g',
//     parentId: "8xf0y6ziyjabvozdd253nd",
//     timestamp: 1468166872634,
//     body: 'Hi there! I am a COMMENT.',
//     author: 'thingtwo',
//     voteScore: 6,
//     deleted: false,
//     parentDeleted: false
//   },
//   "8tu4bsun805n8un48ve89": {
//     id: '8tu4bsun805n8un48ve89',
//     parentId: "8xf0y6ziyjabvozdd253nd",
//     timestamp: 1469479767190,
//     body: 'Comments. Are. Cool.',
//     author: 'thingone',
//     voteScore: -5,
//     deleted: false,
//     parentDeleted: false
//   }
// }

const Comment = (props) => {
  const {
    author,
    timestamp,
    body,
    voteScore
  } = props

  return (
    <CommentUI>
      <CommentUI.Content>
        <CommentUI.Author as='a' size='big'>{author}</CommentUI.Author>
        <CommentUI.Metadata>
          <div>{timeElapsed(timestamp)}</div>
          <div>
            <Icon link name='angle down'/><Icon name='star' color='yellow' />{voteScore} <Icon link name='angle up' />
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

function mapStateToProps({ comments }, { id }) {
  return comments[id]
}


export default connect(mapStateToProps)(Comment)
