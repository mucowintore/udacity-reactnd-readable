import React from 'react'
import PostList from './PostList'
import PostDashboard from './PostDashboard'
import Comment from './Comment'
import Test from './Test'
import * as ReadableAPI from '../ReadableAPI'
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react'

const App = () => (
      <Container>
        {/* App Title */}
        <Segment basic textAlign='center'>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Segment>

        <Divider hidden />
        <PostDashboard />
        {/* <div className='postDashboard'>
          <PostList />
        </div> */}
      </Container>
  )

export default App
