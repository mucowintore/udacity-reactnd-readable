import React from 'react'
import { Menu } from 'semantic-ui-react'

import FilterSubMenu from './FilterSubMenu'
import SortSubMenu from './SortSubMenu'

// const categoryOptions = [
//   {
//     text: 'All Categories',
//     value: 'all',
//   },
//   {
//     text: 'React',
//     value: 'react'
//   },
//   {
//     text: 'Redux',
//     value: 'redux',
//   },
// ]

class FilterAndSortMenu extends React.Component {
  render() {
    return (
        <Menu text>
          <FilterSubMenu />
          <SortSubMenu />
        </Menu>
      )
  }
}

export default FilterAndSortMenu
