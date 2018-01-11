import React from 'react'
import PostList from './PostList'
import Comment from './Comment'
import Test from './Test'
import * as ReadableAPI from '../ReadableAPI'
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react'

const App = () => (
      <Container>
        <Segment basic textAlign='center'>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Segment>

        <Divider hidden />

        <div className='postDashboard'>
          <PostList />
        </div>
      </Container>
  )
}

export default App
