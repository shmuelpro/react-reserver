import moment from 'moment'

export function dateRange(start, length, unit, format = 'D') {
  return [...Array(length)].map((nu, i) => {
    return resolveDate(start, i, unit, format)
  })
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

export function resolveDate(start, count, unit, format) {
  return moment(start).add(count, unit).format(format)
}

export function resolveDateDiff(startDate, date, format = 'DD-MM-YYYY') {
  const a = moment(startDate, format).startOf('day')
  const b = moment(date, format).startOf('day')
  return b.diff(a, 'days')
}

export function resolveRow(rooms, roomId) {
  return rooms[roomId].row
}

export function positionToDate(
  bar,
  startDate,
  unit = 'unit',
  format = 'DD-MM-YYYY'
) {
  bar.start = startDate.clone().add(bar.column, unit).format(format)
  bar.end = startDate
    .clone()
    .add(bar.column + bar.length, unit)
    .format(format)
  return bar
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function isObjectEmpty(obj) {
  for (const i in obj) return false
  return true
}
