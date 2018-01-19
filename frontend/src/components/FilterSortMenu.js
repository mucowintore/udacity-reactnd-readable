import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const categoryOptions = [
  {
    text: 'All Categories',
    value: 'all',
  },
  {
    text: 'React',
    value: 'react'
  },
  {
    text: 'Redux',
    value: 'redux',
  },
]

class FilterSortMenu extends React.Component {
  render() {
    return (
        <Menu text>
          <Menu.Menu position='left'>
            <Menu.Item header>Category</Menu.Item>
            <Menu.Item>
              <Dropdown
                placeholder='All Categories'
                options={categoryOptions}
                // defaultValue={categoryOptions[0].text}
              />
            </Menu.Item>

          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item header>Sort By</Menu.Item>
            <Menu.Item name='Most Recent' />
            <Menu.Item name='Most Popular' />
            <Menu.Item name='Most Comments' />
          </Menu.Menu>
        </Menu>
    )
  }
}

export default FilterSortMenu
