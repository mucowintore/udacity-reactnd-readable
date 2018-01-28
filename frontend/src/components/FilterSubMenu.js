import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { filterDisplayedPosts } from '../actions'
import { capitalize } from '../utils'

class FilterSubMenu extends React.Component {

  handleChange = (e, { value }) => {
    if(value !== this.props.activeFilterCategory){
      this.props.filterDisplayedPosts(value)
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


function mapStateToProps({ posts, categories }) {
  return {
    activeFilterCategory: posts.activeFilterCategory,
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

export default connect(mapStateToProps, { filterDisplayedPosts })(FilterSubMenu)
