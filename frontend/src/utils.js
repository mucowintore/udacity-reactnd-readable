import _ from 'lodash'
// import uuid from 'js-uuid'

// TODO DRY the implementation
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

const trim = (str) => {
  const trimLength = 300
  return str.length > trimLength ? `${str.substr(0, trimLength)}...` : str
}

const descendingSortBy = (ids, sortProperty, table) => {
  return _.chain(ids)
            .sortBy(id => table[id][sortProperty])
            .reverse()
            .value()
}

const capitalize = (str) => {
  return _.capitalize(str)
}

// TODO implement generatePostId, a function that generates a v4 UUID
// const generatePostId = () => {
//   return uuid.v4()
// }

export {
  timeElapsed,
  trim,
  descendingSortBy,
  capitalize,
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
//     timestamp: Date.now(),
//     title: 'Learn Redux in 10 minutes!',
//     body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
//     author: 'thingone',
//     category: 'redux',
//     voteScore: 4,
//     deleted: false,
//     commentCount: 0
//   }
// }
//
// // const ids: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p33lnWz"]
// // console.log(descendingSortBy(ids, 'timestamp', posts))
