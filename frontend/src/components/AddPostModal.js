import React from 'react'
// import { connect } from 'react-redux'
// import { addPost } from '../actions'
import { Modal, Button, Icon } from 'semantic-ui-react'

/**
 *
 *  STATE
 *    from the store: NONE
 *    from 'PostDashboard'
 *      closeModal
 *    Own state: NONE
 *
 *  STATE UPDATERS
 *    UI UPDATERS
 *      closeModal > PostDashboard's isModalOpen
 *    DATA UPDATERS
 *      submitPost(formData)
 *
 *
*/

class AddPostModal extends React.Component {
  state = {
    isModalOpen: false
  }
  // const submitPost = (formData) => {
  //   this.props.addPost({
  //     formData,
  //     id: Math.random().toString(36).substr(-8),
  //     timestamp: Date.now(),
  //   })
  // }

  handleOpen = () => this.setState({ isModalOpen: true })
  handleClose = () => this.setState({ isModalOpen: false })

  render(){
    const addPostButton = (
      <Button
        icon floated='right' color='teal'
        onClick={this.handleOpen}
      >
        <Icon name='add' />
        Add Post
      </Button>
    )

    return (
      <div>
        <Modal
          basic
          dimmer='inverted'
          trigger={addPostButton}
          open={this.state.isModalOpen}
          onClose={this.handleClose}

        >
          <Modal.Header>This is a modal header</Modal.Header>
          <Modal.Content>
            This is the modal's contents
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default AddPostModal
// function mapDispatchToProps(dispatch) {
//   return {
//     addPost: (postData) => dispatch(addPost(postData))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddPostModal)
