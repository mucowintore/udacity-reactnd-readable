// import React from 'react'
// import { Form } from 'semantic-ui-react'
//
// /**
//  *
//  *  STATE
//  *    from the store
//  *      categories
//  *    from 'AddPostModal'
//  *      closeModal
//  *      submitPost
//  *    Own state:
//  *      { title, body, author, category }
//  *
//  *  STATE UPDATERS
//  *    UI UPDATERS
//  *      closeModal > sets PostDashboard's isModalOpen to false
//  *    DATA UPDATERS
//  *      submitForm(postData) > AddPostModal's post
//  *
//  *
// */
//
// class AddPostForm extends React.Component {
//   state = {
//     author: '',
//     title: '',
//     body: '',
//     category: '',
//   }
//
//   submitForm = () => {
//     this.props.submitPost(state)
//   }
//
//   render() {
//     return <div>AddPostForm</div>
//   }
// }
//
// function mapStateToProps({ categories }) {
//   return {
//     categories
//   }
// }
//
// connect(mapStateToProps)(AddPostForm)
