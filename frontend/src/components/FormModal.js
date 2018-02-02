import React from 'react'
import { Dimmer, Button, Icon, Grid, Header, Divider, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'


class FormModal extends React.Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state
    return (
      <div>
        {/* Render a placeholder button with its onClick property set to this.handleOpen */}
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
                {/* Render a form with its handleCloseModal property set to this.handleClose */}
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
      </div>
    )
  }
}

FormModal.propTypes = {
  placeholderButton: PropTypes.element,
  formColor: PropTypes.string,
  formTitle: PropTypes.string,
  form: PropTypes.element,
}

export default FormModal