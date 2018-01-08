import React from 'react'
import PostDetail from './PostDetail'
import Comment from './Comment'
import Test from './Test'
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Segment basic textAlign='center'>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Segment>
        <Divider hidden />
        <div className='postDashboard'>
          <PostDetail
            title='Post Title'
            timestamp={Date.now()}
            author='Post Author'
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            category='Post Category'
            voteScore={23}
            commentCount={45}
          />
          <PostDetail
            title='Post Title'
            timestamp={Date.now()}
            author='Post Author'
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            category='Post Category'
            voteScore={23}
            commentCount={45}
          />
          <PostDetail
            title='Post Title'
            timestamp={Date.now()}
            author='Post Author'
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            category='Post Category'
            voteScore={23}
            commentCount={45}
          />
          <Comment
            timestamp={Date.now()}
            body='Awesome work dude'
            author='Muco'
          />
          <Test />
        </div>
      </Container>
    )
  }
}

export default App
