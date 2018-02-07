import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'

import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'

const App = () => (
  <Container>
    <Banner />
    <Divider hidden />
    <Route path='/:category?' render={() => (
      <div>
        <FilterAndSortMenu />
        <PostDashboard />
      </div>
    )}/>

  </Container>
)

export default App
