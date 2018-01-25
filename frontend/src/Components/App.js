import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'


const App = () => (
      <Container>
        <Banner />
        <Divider hidden />
        <FilterAndSortMenu />
        <PostDashboard />
      </Container>
  )

export default App
