import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import PostList from './PostList'
import AddPostModal from './AddPostModal'

// class PostDashboard extends React.Component {
//   render() {
//     return (
//       <div>
//         <AddPostModal />
//         <Divider hidden clearing />
//         <PostList />
//       </div>
//     )
//   }
// }

const PostDashboard = () => (
  <div>
    <AddPostModal />
    <Divider hidden clearing />
    <PostList />
  </div>
)

export default PostDashboard
