import React from 'react'
import { Dimmer, Grid, Header, Divider, Segment } from 'semantic-ui-react'

class FormModal extends React.Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state
    return (
      <span>
        {/* Render the placeholder element (the element to be rendered when
          the modal is not open) with its onClick property set to this.handleOpen */}
        {
          React.cloneElement(
            this.props.placeholder,
            { onClick: this.handleOpen}
          )
        }

        <Dimmer
          page
          active={isOpen}
          inverted={true}
        >
          <Grid centered>
            <Grid.Column width={6}>
              <Segment raised color={this.props.color}>
                <Header as='h1' content={this.props.title} />
                <Divider hidden />
                {/* Render the form to be rendered when the modal is open
                    with an added handleCloseModal property set to this.handleClose */}
                {
                  React.cloneElement(
                    this.props.form,
                    { handleCloseModal: this.handleClose }
                  )
                }
              </Segment>
            </Grid.Column>
          </Grid>
        </Dimmer>
      </span>
    )
  }
}

export default FormModal
