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


/**
* [trim] trims a string to 300 characters
* @param {string} str the string to be trimmed
* @return {string} the trimmed version of str with length <= 300
*/
const trim = (str) => {
  const trimLength = 300
  return str.length > trimLength ? `${str.substr(0, trimLength)}...` : str
}

// const sortComparator = (table, property) => {
//   return (id1, id2) => table[id2][property] - table[id1][property]
// }


export {
  timeElapsed,
  trim,
}
