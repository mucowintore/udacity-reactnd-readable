import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'


const categoryOptions = [
  {
    text: 'All Categories',
    value: 'all',
  },
  {
    text: 'Redux',
    value: 'redux',
  },
  {
    text: 'React',
    value: 'react',
  }
]
class FilterSubMenu extends React.Component {
  state = {
    activeFilterCategory: 'all'
  }

  /* TODO */
  handleChange = (e, { value }) => {
    // dispatch FILTER_DISPLAYED_POSTS action
  }

  /* TODO */
  handleClick = () => {
    // dispatch FETCH_CATEGORIES thunk
  }

  render() {
    const { activeFilterCategory } = this.state
    return (
      <Menu.Menu position='left'>
        <Menu.Item header>Category</Menu.Item>
        <Menu.Item>
          <Dropdown
            selection
            // onClick={this.handleClick}
            // onChange={this.handleChange}
            options= {categoryOptions}// {this.props.categories} TODO get just category names from mapStateToProps
            defaultValue = {categoryOptions[0].value}
          />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}

/* TODO */
function mapStateToProps(state) {
  return { }
}


/* TODO */
function mapDispatchToProps(dispatch) {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSubMenu)
