import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { filterDisplayedPosts } from '../actions'


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

  /* OK */
  handleChange = (e, { value }) => {
    this.props.filterDisplayedPosts(value)
  }

  /* TODO Fetch categories from the backend using a thunk on dropdown click - or maybe not, depending on how I hydrate the Redux store with the backend data */
  handleClick = () => {
    // dispatch FETCH_CATEGORIES thunk
  }

  render() {
    return (
      <Menu.Menu position='left'>
        <Menu.Item header>Category</Menu.Item>
        <Menu.Item>
          <Dropdown
            selection
            // onClick={this.handleClick}
            onChange={this.handleChange}
            options= {categoryOptions} // TODO get just category names from mapStateToProps
            defaultValue = {categoryOptions[0].value} // TODO how to ensure that categoryOptions[0].value is 'all'
          />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}


function mapStateToProps({ posts }) {
  return {
    activeFilterCategory: posts.activeFilterCategory,
  }
}


/* TODO */
// function mapDispatchToProps(dispatch) {
//   return { }
// }

export default connect(
  mapStateToProps,
  { filterDisplayedPosts }
)(FilterSubMenu)
