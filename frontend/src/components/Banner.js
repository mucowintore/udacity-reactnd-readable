import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'


const Banner = () => (
  <Segment basic textAlign='center'>
    <Header as='h1' icon>
      <Icon name='book'/>
      Readable
    </Header>
  </Segment>
)

export default Banner
