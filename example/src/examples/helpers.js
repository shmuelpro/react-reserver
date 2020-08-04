import moment from 'moment'

export function dateRange(start, length, unit, format = 'D') {
  return [...Array(length)].map((nu, i) => {
    return resolveDate(start, i, unit, format)
  })
}

export function resolveDate(start, count, unit, format) {
  return moment(start).add(count, unit).format(format)
}


export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}