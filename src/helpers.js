export function makeId(length = 15) {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
export const isBetween = (min, max, num) => {
  const states = num >= min && max >= num;
  if(states){
    console.log(min,max,num);
  }
  return states;
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

  return {
    row: firstPosition.row,
    column: firstPosition.column,
    length: secondPosition.column - firstPosition.column + 1
  }
}

export function getPosition(titleWidth, row, column, dimension) {
  return { left: titleWidth + column * dimension, top: (row + 1) * dimension }
}

export function getColumnCount(dimension, width, rowTitleWidth) {
  return Math.floor((width - rowTitleWidth) / dimension)
}

export function getRowCount(dimension, height) {
  return Math.floor(height / dimension)
}

export function resizeBar(bars, newLocation) {
  const editing = bars.filter((bar) => {
    return bar.editing
  })

  const newBars = editing.map((bar) => {
    const nPosition = evaluatePosition(
      { column: bar.column, row: bar.row },
      newLocation.cell
    )
    return { ...bar, ...nPosition }
  })

  return newBars
}


export const collision = (bar1, bar2) => {

  bar1 = checkObjCollision(bar1);
  bar1.collisions[bar2.id] = '';

  bar2 = checkObjCollision(bar2);
  bar2.collisions[bar1.id] = '';




  return [bar1, bar2];
}


const checkObjCollision = (bar) => {

  if (!bar.collisions) {
      bar.collisions = {};
  }

  return bar;
}


export const removeCollision = (bar1,bar2)=>{

  console.log(bar2.id)
  bar1 = checkObjCollision(bar1);
  delete bar1.collisions[bar2.id];
  console.log(bar1)

  bar2 = checkObjCollision(bar2);
  delete bar2.collisions[bar1.id];
  return [bar1, bar2];

}