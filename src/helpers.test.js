import {
  makeId,
  getColumnCount,
  evaluatePosition,
  validForBar,
  getRowCount,
  isBetween,
  getPosition,
  resizeBar
} from './helpers'

test('calculate number of columns based on width ', () => {
  expect(getColumnCount(20, 500, 80)).toBe(21)
})

test('number should be in between two other numbers ', () => {
  expect(isBetween(20, 500, 80)).toBe(true)
  expect(isBetween(20, 30, 280)).toBe(false)
})

test('makeid returns 15 characters', () => {
  const newid = makeId()
  expect(newid.length).toBe(15)
})

test('make sure the position is correct', () => {
  const fPosition = { row: 3, column: 3 }
  const sPosition = { row: 4, column: 6 }
  const badPos = { row: "f", column: 5 }
  const secbadPos = { row: 1, column: 3.2 }

  const position = evaluatePosition(fPosition, sPosition)
  expect(() => evaluatePosition(badPos, sPosition)).toThrow()
  expect(() => evaluatePosition(secbadPos, sPosition)).toThrow()
  expect(() => evaluatePosition(fPosition, secbadPos)).toThrow()
  expect(position.column).toBe(3)
  expect(position.row).toBe(3)
  expect(position.length).toBe(4)
})

test('number needs to be valid for bar', () => {
  expect(validForBar(-1)).toBe(false)
  expect(validForBar(3)).toBe(true)
})

test('get correct number of rows', () => {
  expect(getRowCount(20, 300)).toBe(15)
})


test('Calculate position using getPosition', () => {
  const firstpos = getPosition(0, 2, 20)
  expect(firstpos).toMatchObject({ left: 40, top: 0 })
  const secondpos = getPosition(0, 2, 20,40)
  expect(secondpos).toMatchObject({ left: 80, top: 0 })
  const thirdpos = getPosition(0, 2, 20,40,23)
  expect(thirdpos).toMatchObject({ left: 80, top: 23 })
 
})

test('resizeBars', () => {
  const bars = [{ row: 3, column: 3,editing:true,length:2 },{ row: 4, column: 3,length:6 }]
  const changedBars = resizeBar(bars,{cell:{row:3,column:6}})
  expect(changedBars[0]).toMatchObject({ row: 3, column: 3, editing: true, length: 4 })
  expect(changedBars[1]).toMatchObject({ row: 4, column: 3, length: 6 })
  
 
})
