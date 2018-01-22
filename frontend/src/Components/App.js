import React from 'react'
import { Container, Segment, Header, Icon, Divider } from 'semantic-ui-react'
// import * as ReadableAPI from '../ReadableAPI'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'



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

        {/* Need a FilterSortMenu in order for it to be hidden in the PostDetail view - or maybe not, depending on how I use React Router */}
        <FilterAndSortMenu />

        <PostDashboard />
      </Container>
  )

export default App
