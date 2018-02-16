import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Header, Icon } from 'semantic-ui-react'

import { resetSortProperty } from '../actions/ui'

class Banner extends React.Component {
  handleClick = () => {
    this.props.resetSortProperty()
  }

  render() {
    return (
      <Segment basic textAlign='center'>
        <Link to='/' onClick={this.handleClick}>
          <Header as='h1' icon>
            <Icon name='book'/>
            Readable
          </Header>
        </Link>
      </Segment>
    )
  }
}

export default connect(null, { resetSortProperty })(Banner)
