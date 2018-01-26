import React from 'react'
import { Dimmer, Button, Icon } from 'semantic-ui-react'
import AddPostForm from './AddPostForm'

class AddPost extends React.Component {
  state = {
    active: true,
  }

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    return (
      <div>
        <Button
          icon floated='right' color='teal'
          onClick={this.handleOpen}
        >
          <Icon name='add' /> Add Post
        </Button>

        <Dimmer
          page
          active={active}
          inverted={true}
        >
          <AddPostForm />
        </Dimmer>
      </div>
    )
  }
}


export default AddPost
