import React from 'react'
import { Dimmer, Button, Icon } from 'semantic-ui-react'
import AddPostForm from './AddPostForm'

class AddPostModal extends React.Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state
    return (
      <div>
        <Button
          icon floated='right' color='green'
          onClick={this.handleOpen}
        >
          <Icon name='add' /> Add Post
        </Button>

        <Dimmer
          page
          active={isOpen}
          inverted={true}
        >
          <AddPostForm closePostModal={this.handleClose} />
        </Dimmer>
      </div>
    )
  }
}


export default AddPostModal
