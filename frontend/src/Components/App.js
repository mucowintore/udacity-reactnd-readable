import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'
import PostDetail from './PostDetail'

const postDetailView = true

const App = () => (
      postDetailView
        ? <Container>
            <Banner />
            <Divider hidden />
            <PostDetail />
          </Container>
        : <Container>
            <Banner />
            <Divider hidden />
            <FilterAndSortMenu />
            <PostDashboard />
          </Container>
)

export default App
