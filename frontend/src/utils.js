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
// const MILLISECONDS_IN_MINUTE = 60 * 1000
// const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE
// const MILLISECONDS_IN_DAY = 24 * MILLISECONDS_IN_HOUR
// const MILLISECONDS_IN_MONTH = 30 * MILLISECONDS_IN_DAY
// const MILLISECONDS_IN_YEAR = 12 * MILLISECONDS_IN_MONTH
//
// const justNow = Date.now()
// const minutesAgo = justNow - 1 *  MILLISECONDS_IN_MINUTE
// const hoursAgo = justNow - 1 * MILLISECONDS_IN_HOUR
// const daysAgo = justNow - 1 * MILLISECONDS_IN_DAY
// const monthsAgo = justNow - 1 * MILLISECONDS_IN_MONTH
// const yearsAgo = justNow - 1 * MILLISECONDS_IN_YEAR
//
// console.log(timeElapsed(1467166872634))
// console.log(timeElapsed(1468479767190))
// console.log(timeElapsed(justNow))
// console.log(timeElapsed(minutesAgo))
// console.log(timeElapsed(hoursAgo))
// console.log(timeElapsed(daysAgo))
// console.log(timeElapsed(monthsAgo))
// console.log(timeElapsed(yearsAgo))

// const trim = (str) => {
//
// }
// 
