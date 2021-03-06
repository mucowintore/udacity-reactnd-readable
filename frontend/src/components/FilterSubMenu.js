import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Menu, Dropdown } from 'semantic-ui-react'

import { capitalize } from '../utils'

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
            options={this.props.categories}
            value={this.props.activeFilterCategory}
            onChange={this.handleChange}
          />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}


function mapStateToProps({ categories }, { history, match }) {
  return {
    categories: [
      {
        key: 'all',
        text: 'All Categories',
        value: 'all'
      },
      ...categories.map(({ name }) => ({ key: name, text: capitalize(name), value: name }))
    ],
    activeFilterCategory: match.params.category || 'all',
    history,
  }
}

export default withRouter(connect(mapStateToProps)(FilterSubMenu))
