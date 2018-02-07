import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Icon } from 'semantic-ui-react'


const Banner = () => (
    <Segment basic textAlign='center' >
      <Link to='/'>
        <Header as='h1' icon>
          <Icon name='book'/>
          Readable
        </Header>
      </Link>
    </Segment>
)

export default Banner
