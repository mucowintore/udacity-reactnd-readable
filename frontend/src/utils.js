/**
 * [timeElapsed] provides a user-readable representation of timestamps
 * @param {number} timestamp number of milliseconds elapsed since the UNIX epoch
 * @return {string} A user-friendly string representation of the timestamp (e.g. '5 minutes ago')
*/
const timeElapsed = (timestamp) => {
  const MILLISECONDS_IN_MINUTE = 60 * 1000
  const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE
  const MILLISECONDS_IN_DAY = 24 * MILLISECONDS_IN_HOUR
  const MILLISECONDS_IN_MONTH = 30 * MILLISECONDS_IN_DAY
  const MILLISECONDS_IN_YEAR = 12 * MILLISECONDS_IN_MONTH

  const timeElapsed = Date.now() - timestamp

  const yearsElapsed = Math.floor(timeElapsed / MILLISECONDS_IN_YEAR)
  const monthsElapsed = Math.floor(timeElapsed / MILLISECONDS_IN_MONTH)
  const daysElapsed = Math.floor(timeElapsed / MILLISECONDS_IN_DAY)
  const hoursElapsed = Math.floor(timeElapsed / MILLISECONDS_IN_HOUR)
  const minutesElapsed = Math.floor(timeElapsed / MILLISECONDS_IN_MINUTE)

  if (yearsElapsed) {
    return `${yearsElapsed} ${yearsElapsed === 1 ? 'year' : 'years'} ago`
  } else if (monthsElapsed) {
    return `${monthsElapsed} ${monthsElapsed === 1 ? 'month' : 'months'} ago`
  } else if (daysElapsed) {
    return `${daysElapsed} ${daysElapsed === 1 ? 'day' : 'days'} ago`
  } else if (hoursElapsed) {
    return `${hoursElapsed} ${hoursElapsed === 1 ? 'hour' : 'hours'} ago`
  } else if (minutesElapsed) {
    return `${minutesElapsed} ${minutesElapsed === 1 ? 'minute' : 'minutes'} ago`
  } else {
    return `just now`
  }
}


// /**
//  * [trim] trims a string to 300 characters
//  * @param {string} str the string to be trimmed
//  * @return {string} the trimmed version of str with length <= 300
//  */
const trim = (str) => {
  const trimLength = 300
  return str.length > trimLength ? `${str.substr(0, trimLength)}...` : str
}

// const posts = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1467166872634,
//     title: 'Udacity is the best place to learn React',
//     body: 'Everyone says so after all.',
//     author: 'thingtwo',
//     category: 'react',
//     voteScore: 6,
//     deleted: false,
//     commentCount: 2
//   },
//   "6ni6ok3ym7mf1p33lnez": {
//     id: '6ni6ok3ym7mf1p33lnez',
//     timestamp: 1468479767190,
//     title: 'Learn Redux in 10 minutes!',
//     body: 'Just kidding. It takes more than 10 minutes to learn technology.',
//     author: 'thingone',
//     category: 'redux',
//     voteScore: -5,
//     deleted: false,
//     commentCount: 4
//   },
//   "6ni6ok3ym7mf1p33lnWz": {
//     id: '6ni6ok3ym7mf1p33lnWz',
//     timestamp: 1516435222489,
//     title: 'Learn Redux in 10 minutes!',
//     body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
//     author: 'thingone',
//     category: 'redux',
//     voteScore: 4,
//     deleted: false,
//     commentCount: 0
//   }
// }

// const postIds = Object.keys(posts)
// const filter_category = 'react-redux'
// const sort_key = ['voteScore', 'commentCount', 'timestamp']
// console.log(postIds.filter(id => posts[id].category === filter_category))
// const sorted_posts = sort_key.map( key => [ key ].concat(postIds.sort((idA, idB) => posts[idB][key] - posts[idA][key])) )
// console.log(postIds.sort( (idA, idB) => posts[idB].voteScore - posts[idA].voteScore ))



export {
  timeElapsed,
  trim,
}
