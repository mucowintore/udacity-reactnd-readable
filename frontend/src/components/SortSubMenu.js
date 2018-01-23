import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { sortDisplayedPosts } from '../actions'

// TODO rename component to SortSubMenu to make it clear it is a submenu of the main menu below the app header
class SortSubMenu extends React.Component {

  /* TODO */
  handleClick = (e, { value }) => {
    if(value !== this.props.activeSortProperty){
      this.props.sortDisplayedPosts(value)
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


  /* TODO */
  function mapStateToProps({ posts }) {
    return {
      activeSortProperty: posts.activeSortProperty,
    }
  }

  export default connect(
    mapStateToProps,
    { sortDisplayedPosts }
  )(SortSubMenu)
