import React from 'react'
import { Dimmer, Button, Icon, Grid, Header, Divider, Segment } from 'semantic-ui-react'

const isOpen = false

const AddCommentModal = () => (
  <div>
    <Button icon compact color='green'>
      <Icon name='add' /> Add Comment
    </Button>

    <Dimmer
      page
      active={isOpen}
      inverted={true}
    >
      <Grid centered>
        <Grid.Column width={6}>
          <Segment raised color='green'>
            <Header as='h1' content='Add a Comment' />
            <Divider hidden />
          </Segment>
        </Grid.Column>
      </Grid>
    </Dimmer>
  </div>
)

export default AddCommentModal
