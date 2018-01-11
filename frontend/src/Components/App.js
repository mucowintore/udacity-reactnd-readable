import React from 'react'
import PostDetail from './PostDetail'
import Comment from './Comment'
import Test from './Test'
import * as ReadableAPI from '../ReadableAPI'
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    const post = {
      id: Math.random().toString(36).substr(-8),
      timestamp: Date.now(),
      title: 'Awesome Post Title',
      body: 'Hey there, just busy writing some awesome stuff',
      author: 'Muco, the one and only',
      category: 'react',
    }

    const comment = {
      id: Math.random().toString(36).substr(8),
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: Date.now(),
      author: 'Mucowintore',
      body: 'Man, I love your post. Great stuff!',
    }


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
