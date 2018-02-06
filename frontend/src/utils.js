import _ from 'lodash'
import uuid from 'js-uuid'

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


const capitalize = (str) => {
  return _.capitalize(str)
}

const generateId = () => {
  return uuid.v4()
}

export {
  timeElapsed,
  trim,
  capitalize,
  generateId,
}
