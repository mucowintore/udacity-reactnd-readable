import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'

import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'
import PostDetail from './PostDetail'

const App = () => (
  <Container>
    <Banner />
    <Divider hidden />
    <Route exact path='/:category?' render={() => (
      <div>
        <FilterAndSortMenu />
        <PostDashboard />
      </div>
    )}/>
    <Route path='/:category/:postId' render={() => (
      <PostDetail />
    )}/>
  </Container>
)

export default App
