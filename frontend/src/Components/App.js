import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Container, Divider, Icon } from 'semantic-ui-react'

import Banner from './Banner'
import FilterAndSortMenu from './FilterAndSortMenu'
import PostDashboard from './PostDashboard'
import Post from './Post'
import CommentDashboard from './CommentDashboard'

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
    <Route path='/:category/:postId' render={(match) => (
      <div>
        <Link to='/'>
          <Icon name='angle left' size='big' color='black'/>
        </Link>
        <Divider hidden />
        <Post detailed={true}/>
        <Divider hidden />
        <CommentDashboard />
      </div>
    )}/>
  </Container>
)

export default App
