import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Card, Label, Icon, Grid } from 'semantic-ui-react'

import FormModal from './FormModal'
import EditPostForm from './EditPostForm'
import { timeElapsed, trim } from '../utils'

class DetailedPost extends React.Component {
  render() {
    console.log('received props', this.props)
    const {
      title,
      timestamp,
      author,
      body,
      category,
      commentCount,
      voteScore,
    } = this.props.post

    return (
      <div>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <Grid>
                <Grid.Column width={12}>
                  {title}
                </Grid.Column>
                <Grid.Column width={4} textAlign='right'>
                  <FormModal
                    title='Edit Post'
                    color='green'
                    form={<EditPostForm/>}
                    placeholder={
                      <Icon link name='pencil' color='green'/>
                    }
                  />
                  <Icon link name='trash' color='red'/>
                </Grid.Column>
              </Grid>
            </Card.Header>
            <Card.Meta>created {timeElapsed(timestamp)} by <b>{author}</b></Card.Meta>
            <Card.Description>{trim(body)}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon link name='angle down' size='large'/>
            <Icon name='star' color='yellow'/>{voteScore}
            <Icon link name='angle up'size='large'/>
            <span>{' '}</span>
            <Label tag color='teal'>{category}</Label>
            <Label color='orange'>
              <Icon name='comments'/> {commentCount}
            </Label>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: posts[match.params.postId]
  }
}

export default withRouter(connect(mapStateToProps)(DetailedPost))
