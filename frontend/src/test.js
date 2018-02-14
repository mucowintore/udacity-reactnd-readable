

const getVisiblePosts = (activeFilterCategory, activeSortProperty, posts) => {
  return Object.keys(posts)
    .filter(id => !posts[id].deleted)
    .filter(id => activeFilterCategory === 'all' || posts[id].category === activeFilterCategory)
    .sort((idA, idB) => posts[idB][activeSortProperty] - posts[idA][activeSortProperty])
    .map(id => posts[id])
}
const activeFilterCategory = 'all'
const activeSortProperty = 'voteScore'

const samplePosts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: true,
    commentCount: 4
  },
  "6ni6ok3ym7mf1p33lnWz": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1516435222489,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
    author: 'thingone',
    category: 'redux',
    voteScore: 4,
    deleted: false,
    commentCount: 0
  }
}

console.log(activeFilterCategory, activeSortProperty)
console.log(getVisiblePosts(activeFilterCategory, activeSortProperty, samplePosts))

// const toIdTable = (objArray) => {
//   return objArray.reduce((result, elt) => {
//     result[elt.id] = elt
//     return result
//   }, {})
// }
//
// const comments = [
//     {
//         "id": "894tuq4ut84ut8v4t8wun89g",
//         "parentId": "8xf0y6ziyjabvozdd253nd",
//         "timestamp": 1468166872634,
//         "body": "Hi there! I am a COMMENT.",
//         "author": "thingtwo",
//         "voteScore": 6,
//         "deleted": false,
//         "parentDeleted": false
//     },
//     {
//         "id": "8tu4bsun805n8un48ve89",
//         "parentId": "8xf0y6ziyjabvozdd253nd",
//         "timestamp": 1469479767190,
//         "body": "Comments. Are. Cool.",
//         "author": "thingone",
//         "voteScore": -5,
//         "deleted": false,
//         "parentDeleted": false
//     }
// ]
// console.log(comments)
// console.log(toIdTable(comments));
