import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
// import * as ReadableAPI from '../ReadableAPI'
import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'


const App = () => (
      <Container>
        {/* <Segment basic textAlign='center'>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Segment> */}
        <Banner />

        <Divider hidden />

        <FilterAndSortMenu />

        <PostDashboard />
      </Container>
  )

export default App
