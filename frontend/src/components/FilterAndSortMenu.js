import React from 'react'
import { Menu } from 'semantic-ui-react'

import FilterSubMenu from './FilterSubMenu'
import SortSubMenu from './SortSubMenu'

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
