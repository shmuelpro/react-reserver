export const isBetween = (min, max, num) => {
  const states = num >= min && max >= num
  return states
}

function numToObj(item) {
  if (!isNaN(item)) {
    return { width: item, height: item }
  }

  return item
}

export function validForBar(number) {
  return !(!Number.isInteger(number) || number < 0)
}

export function getPosition(
  row,
  column,
  dimension,
  rowTitleWidth = 0,
  columnTitleHeight = 0
) {
  dimension = numToObj(dimension)

  return {
    left: rowTitleWidth + column * dimension.width,
    top: row * dimension.height + columnTitleHeight
  }
}

export function getColumnCount(dimension, width, rowTitleWidth) {
  dimension = numToObj(dimension)
  return Math.floor((width - rowTitleWidth) / dimension.width)
}

export function getRowCount(dimension, height) {
  dimension = numToObj(dimension)
  return Math.floor(height / dimension.height)
}

export function resizeBars(bars, newLocation, resolver) {
  return bars.map((bar) => {
    if (bar.editing) {
      let nBar = evaluatePosition(bar, newLocation.cell)

      if (typeof resolver === 'function') {
        nBar = resolver(nBar)
      }

      return nBar
    }
    return bar
  })
}

export function finishEditingBars(bars) {
  return bars.map((bar) => {
    if (bar.editing) {
      return {
        ...bar,
        editing: false
      }
    }
    return bar
  })
}

export function evaluatePosition(bar, newLocation) {
  // We check stick right if there is a resizing after originally done.
  // The greater than length 1 is to allow resizing to other direction
  if (
    bar.column > newLocation.column ||
    (bar.stick === 'right' && bar.length > 1)
  ) {
    bar.stick = 'right'
    const locationForRight = {
      row: bar.row,
      column: newLocation.column,
      length: bar.column - newLocation.column + bar.length
    }
    return { ...bar, ...locationForRight }
  }

  bar.stick = 'left'
  const locationForLeft = {
    row: bar.row,
    column: bar.column,
    length: newLocation.column - bar.column + 1
  }
  return { ...bar, ...locationForLeft }
}

export function isObjectEmpty(obj) {
  for (var i in obj) return false
  return true
}
