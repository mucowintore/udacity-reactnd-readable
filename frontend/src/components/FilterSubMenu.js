import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { setFilterCategory } from '../actions'
import { getDropdownCategories } from '../reducers/categories'

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
    categories: getDropdownCategories(categories)
  }
}

export default connect(mapStateToProps, { setFilterCategory })(FilterSubMenu)
