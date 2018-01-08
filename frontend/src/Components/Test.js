import React from 'react'
import { Comment as CommentUI } from 'semantic-ui-react'

export default function Test() {
  return (
    <CommentUI>
      <CommentUI.Content>
        <CommentUI.Author as='a'>Matt</CommentUI.Author>
        <CommentUI.Metadata>
          <div>Today at 5:42PM</div>
        </CommentUI.Metadata>
        <CommentUI.Text>How artistic!</CommentUI.Text>
        <CommentUI.Actions>
          <CommentUI.Action>Reply</CommentUI.Action>
        </CommentUI.Actions>
      </CommentUI.Content>
    </CommentUI>
  )
}
