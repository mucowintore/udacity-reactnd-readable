import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Menu, Dropdown } from 'semantic-ui-react'
import { getDropdownCategories } from '../reducers/categories'

class FilterSubMenu extends React.Component {
  handleChange = (e, { value }) => {
    if(value !== this.props.activeFilterCategory){
      this.props.history.push(`/${value}`)
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
            options={this.props.categories}
            placeholder='Pick a Category'
            value={this.props.activeFilterCategory}
          />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}


function mapStateToProps({ ui, categories }, { history, match }) {
  return {
    categories: getDropdownCategories(categories),
    activeFilterCategory: match.params.category || 'all',
    history,
  }
}

export default withRouter(connect(mapStateToProps)(FilterSubMenu))
