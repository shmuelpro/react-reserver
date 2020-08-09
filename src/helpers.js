export function makeId(length = 15) {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
export const isBetween = (min, max, num) => {
  const states = num >= min && max >= num
  return states
}

export function validForBar(number) {
  return !(!Number.isInteger(number) || number < 0)
}

export function evaluatePosition(firstPosition, secondPosition) {
  if (!validForBar(firstPosition.column)) {
    throw new Error(
      `firstPosition.column expected an integer received ${firstPosition.column}`
    )
  }

  if (!validForBar(firstPosition.row)) {
    throw new Error(
      `firstPosition.row expected an integer received ${firstPosition.row}`
    )
  }

  if (!validForBar(secondPosition.column)) {
    throw new Error(
      `secondPosition.column expected an integer received ${secondPosition.column}`
    )
  }
  console.log("firstPosition", firstPosition)
  console.log("secondPosition", secondPosition)
  if (firstPosition.column > secondPosition.column) {
    return {
      row: secondPosition.row,
      column: secondPosition.column,
      length: firstPosition.column - secondPosition.column + 1
    }
  }


  return {
    row: firstPosition.row,
    column: firstPosition.column,
    length: secondPosition.column - firstPosition.column + 1
  }
}

export function getPosition(
  row,
  column,
  dimension,
  rowTitleWidth = 0,
  columnTitleHeight = 0
) {
  return {
    left: rowTitleWidth + column * dimension,
    top: row * dimension + columnTitleHeight
  }
}

export function getColumnCount(dimension, width, rowTitleWidth) {
  return Math.floor((width - rowTitleWidth) / dimension)
}

export function getRowCount(dimension, height) {
  return Math.floor(height / dimension)
}

export function resizeBar(bars, newLocation, resolver) {
  return bars.map((bar) => {
    if (bar.editing) {

      let nBar = evaluatePositionWithBar(
        bar,
        newLocation.cell
      )
      if (typeof resolver === "function") {
        nBar = resolver(nBar)
      }




      return nBar;
    }
    return bar
  })
}

export function evaluatePositionWithBar(bar, newLocation) {



  if (bar.column > newLocation.column || bar.stick === "right" && bar.length > 1) {
    bar.stick = "right"
    const locationForRight = {
      row: bar.row,
      column: newLocation.column,
      length: bar.column - newLocation.column + bar.length
    }



    return { ...bar, ...locationForRight }
  }

  bar.stick = "left"
  const locationForLeft = {

    row: bar.row,
    column: bar.column,
    length: newLocation.column - bar.column + 1
  }
  return { ...bar, ...locationForLeft}
}


