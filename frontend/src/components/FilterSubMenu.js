import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { setFilterCategory } from '../actions'
import { capitalize } from '../utils'

class FilterSubMenu extends React.Component {

  handleChange = (e, { value }) => {
    if(value !== this.props.activeFilterCategory){
      this.props.setFilterCategory(value)
    }
  }

  render() {
    return (
      <Menu.Menu position='left'>
        <Menu.Item header>Category</Menu.Item>
        <Menu.Item>
          <Dropdown
            selection
            onChange={this.handleChange}
            options= {this.props.categories}
            value={this.props.activeFilterCategory}
          />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}


function mapStateToProps({ ui, categories }) {
  return {
    activeFilterCategory: ui.activeFilterCategory,
    categories: [
                  {
                    key: 'all',
                    text: 'All Categories',
                    value: 'all'
                  },
                  ...categories.map(({ name }) => ({ key: name, text: capitalize(name), value: name }))
                ],
  }
}

export default connect(mapStateToProps, { setFilterCategory })(FilterSubMenu)
