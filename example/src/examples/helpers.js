import moment from 'moment'

export function dateRange(start, length, unit, format = 'D') {
  return [...Array(length)].map((nu, i) => {
    return resolveDate(start, i, unit, format)
  })
}

export function resolveDate(start, count, unit, format) {
  return moment(start).add(count, unit).format(format)
}
