import React from 'react'
import { Dimmer, Button, Icon, Grid, Header, Divider, Segment } from 'semantic-ui-react'
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
          <Grid centered>
            <Grid.Column width={6}>
              <Segment raised color='green'>
                <Header as='h1' content='Add a Post' />
                <Divider hidden />
                <AddPostForm handleCloseModal={this.handleClose} />
              </Segment>
            </Grid.Column>
          </Grid>
        </Dimmer>
      </div>
    )
  }
}


export default AddPostModal
