import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

// TODO rename component to SortSubMenu to make it clear it is a submenu of the main menu below the app header
class SortSubMenu extends React.Component {

  state = {
    activeSortItem: 'mostRecent'
  }

  /* TODO */
  handleClick = (e, { name }) => {
    // dispatch SORT_DISPLAYED_POSTS action with appropriate sortKey
  }

  render() {
    const { activeSortItem } = this.state

    return (
      <Menu.Menu position='right'>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='mostRecent'
          active={activeSortItem === 'mostRecent'}
          onClick={this.handleSortClick} />
        <Menu.Item
          name='mostPopular'
          active={activeSortItem === 'mostPopular'}
          onClick={this.handleSortClick} />
        <Menu.Item
          name='mostComments'
          active={activeSortItem === 'mostComments'}
          onClick={this.handleSortClick} />
      </Menu.Menu>
    )
  }
}


  /* TODO */
  function mapStateToProps(state) {
    return { }
  }

  /* TODO */
  function mapDispatchToProps(dispatch){
    return { }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SortSubMenu)
