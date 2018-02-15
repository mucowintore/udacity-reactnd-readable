import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Card, Label, Icon, Grid } from 'semantic-ui-react'

import FormModal from './FormModal'
import PostEditForm from './PostEditForm'
import { timeElapsed } from '../utils'
import { deletePost, votePost } from '../actions/posts'

class Post extends React.Component {
  handleUpVote = () => {
    this.props.votePost(this.props.post.id, 'upVote')
  }
  handleDownVote = () => {
    this.props.votePost(this.props.post.id, 'downVote')
  }
  handleDelete = () => {
    this.props.deletePost(this.props.post.id)
    // TODO redirect only in Post Detail view
    this.props.history.push('/')
  }

  render() {
    const { detailed } = this.props
    const {
      id,
      title,
      timestamp,
      author,
      body,
      category,
      commentCount,
      voteScore,
    } = this.props.post

    const postBodyStyle = (detailed)
      ? {
        wordWrap: 'break-word',
      } : {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid>
              <Grid.Column width={12}>
                <Link to={`/${category}/${id}`} style={{color: 'inherit'}}>
                  {title}
                </Link>
              </Grid.Column>
              <Grid.Column width={4} textAlign='right'>
                <FormModal
                  title='Edit Post'
                  color='green'
                  form={<PostEditForm postId={id}/>}
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
          <Card.Description style={postBodyStyle}>
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
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: (ownProps.detailed)
            ? posts[ownProps.match.params.postId] // post is rendered in post detail view and therefore can grab its id from the url
            : posts[ownProps.id], // post is rendered in post list view and therefore had its id passed to it from PostList when it was instantiated
    detailed: ownProps.detailed,
    history: ownProps.history, // to be used in post detail view to redirect back to the post list view if this post is deleted (see handleDelete above)
  }
}

export default withRouter(connect(mapStateToProps, { deletePost, votePost })(Post))
