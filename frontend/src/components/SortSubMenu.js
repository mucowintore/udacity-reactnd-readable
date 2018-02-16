import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { setSortProperty } from '../actions/ui'

class SortSubMenu extends React.Component {
  handleClick = (e, { value }) => {
    if(value !== this.props.activeSortProperty){
      this.props.setSortProperty(value)
    }
  }

  render() {
    const { activeSortProperty } = this.props

    return (
      <Menu.Menu position='right'>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='mostRecent'
          value='timestamp'
          active={activeSortProperty === 'timestamp'}
          onClick={this.handleClick} />
        <Menu.Item
          name='mostPopular'
          value='voteScore'
          active={activeSortProperty === 'voteScore'}
          onClick={this.handleClick} />
        <Menu.Item
          name='mostComments'
          value='commentCount'
          active={activeSortProperty === 'commentCount'}
          onClick={this.handleClick} />
      </Menu.Menu>
    )
  }
}


function mapStateToProps({ ui }) {
  return {
    activeSortProperty: ui.activeSortProperty,
  }
}

export default connect(mapStateToProps, { setSortProperty })(SortSubMenu)
