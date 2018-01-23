import React from 'react'
import { Container, Segment, Header, Icon, Divider } from 'semantic-ui-react'
// import * as ReadableAPI from '../ReadableAPI'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'


const App = () => (
      <Container>
        <Segment basic textAlign='center'>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Segment>

        <Divider hidden />

        <FilterAndSortMenu />

        <PostDashboard />
      </Container>
  )

export default App
