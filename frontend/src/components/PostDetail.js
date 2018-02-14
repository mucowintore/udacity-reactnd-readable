import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Card, Label, Icon, Grid } from 'semantic-ui-react'

import FormModal from './FormModal'
import PostEditForm from './PostEditForm'
import { timeElapsed } from '../utils'
import { deletePost, votePost } from '../actions/posts'

class PostDetail extends React.Component {
  handleUpVote = () => {
    this.props.votePost(this.props.post.id, 'upVote')
  }

  handleDownVote = () => {
    this.props.votePost(this.props.post.id, 'downVote')
  }

  handleDelete = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {
    const {
      title,
      timestamp,
      author,
      body,
      category,
      commentCount,
      voteScore,
    } = this.props.post

    // A CSS style that prevents the post body text in Card.Description below
    // from overflowing on a single line
    const wordWrapStyle = {
      wordWrap: 'break-word',
    }

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
                    form={<PostEditForm/>}
                    placeholder={
                      <Icon link name='pencil' color='green'/>
                    }
                  />
                  <Icon link name='trash' color='red' onClick={this.handleDelete}/>
                </Grid.Column>
              </Grid>
            </Card.Header>
            <Card.Meta>
              created {timeElapsed(timestamp)} by <b>{author}</b>
            </Card.Meta>
            <Card.Description style={wordWrapStyle}>
              {body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon link name='angle down' size='large' onClick={this.handleDownVote}/>
            <Icon name='star' color='yellow'/>{voteScore}
            <span>{' '}</span>
            <Icon link name='angle up'size='large' onClick={this.handleUpVote}/>
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

function mapStateToProps({ posts }, { match, history }) {
  return {
    post: posts[match.params.postId],
    history,
  }
}

export default withRouter(connect(mapStateToProps, { deletePost, votePost })(PostDetail))
