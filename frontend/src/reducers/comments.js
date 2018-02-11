import {
  FETCH_COMMENTS_SUCCESS
} from '../actions/comments'

import { toIdDictionary } from '../utils'

const comments = (comments = {}, action) => {
  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS:
      const { fetchedComments, parentId } = action
      return {
        ...comments,
        [parentId]: toIdDictionary(fetchedComments)
      }

    default:
      return comments
  }
}

// console.log(comments(
//   {},
//   {
//     type: FETCH_COMMENTS_SUCCESS,
//     fetchedComments: [
//         {
//             "id": "894tuq4ut84ut8v4t8wun89g",
//             "parentId": "8xf0y6ziyjabvozdd253nd",
//             "timestamp": 1468166872634,
//             "body": "Hi there! I am a COMMENT.",
//             "author": "thingtwo",
//             "voteScore": 6,
//             "deleted": false,
//             "parentDeleted": false
//         },
//         {
//             "id": "8tu4bsun805n8un48ve89",
//             "parentId": "8xf0y6ziyjabvozdd253nd",
//             "timestamp": 1469479767190,
//             "body": "Comments. Are. Cool.",
//             "author": "thingone",
//             "voteScore": -5,
//             "deleted": false,
//             "parentDeleted": false
//         }
//     ],
//     parentId: "8xf0y6ziyjabvozdd253nd",
//   }
// ))

export default comments
