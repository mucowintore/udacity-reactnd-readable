import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import PostList from './PostList'


class PostDashboard extends React.Component {
  render() {
    return (
      <div>
        <Button icon floated='right' color='teal'>
          <Icon name='add' />
          Add Post
        </Button>

        <Divider hidden clearing />

        <PostList />
      </div>
    )
  }
}

export default PostDashboard
