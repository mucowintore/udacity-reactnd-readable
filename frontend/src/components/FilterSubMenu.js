import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Menu, Dropdown } from 'semantic-ui-react'
import { getDropdownCategories } from '../reducers/categories'

class FilterSubMenu extends React.Component {
  redirect = (destination) => {
    this.props.history.push({ pathname: `/${destination}`})
  }
  handleChange = (e, { value }) => {
    if(value !== this.props.activeFilterCategory){
      this.redirect(value)
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
