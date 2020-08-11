import {
  makeId,
  getColumnCount,
  evaluatePosition,
  validForBar,
  getRowCount,
  isBetween,
  getPosition,
  resizeBars,
  finishEditingBars,
  isObjectEmpty
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

describe('evaluatePosition ', () => {
  test('moving right (stick:left) ', () => {
    const fPosition = { row: 3, column: 3 }
    const sPosition = { row: 4, column: 6 }

    const position = evaluatePosition(fPosition, sPosition)

    expect(position.column).toBe(3)
    expect(position.row).toBe(3)
    expect(position.length).toBe(4)
  })

  test('moving left ', () => {
    const bar = { row: 4, column: 6, length: 1 }
    const newLoc = { row: 3, column: 5 }

    const position = evaluatePosition(bar, newLoc)
    expect(position.column).toBe(5)
    expect(position.row).toBe(4)
    expect(position.length).toBe(2)
  })

  test('moving left with stick right ', () => {
    const bar = { row: 4, column: 6, length: 2, stick: 'right' }
    const newLoc = { row: 3, column: 5 }

    const position = evaluatePosition(bar, newLoc)
    expect(position.column).toBe(5)
    expect(position.row).toBe(4)
    expect(position.length).toBe(3)
  })

  test('moving left with stick right ', () => {
    const bar = { row: 4, column: 6, length: 2, stick: 'right' }
    const newLoc = { row: 3, column: 5 }

    const position = evaluatePosition(bar, newLoc)
    expect(position.column).toBe(5)
    expect(position.row).toBe(4)
    expect(position.length).toBe(3)
  })

  test('moving right with stick right ', () => {
    const bar = { row: 4, column: 6, length: 1, stick: 'right' }
    const newLoc = { row: 3, column: 7 }

    const position = evaluatePosition(bar, newLoc)
    expect(position.column).toBe(6)
    expect(position.row).toBe(4)
    expect(position.length).toBe(2)
  })
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
  const secondpos = getPosition(0, 2, 20, 40)
  expect(secondpos).toMatchObject({ left: 80, top: 0 })
  const thirdpos = getPosition(0, 2, 20, 40, 23)
  expect(thirdpos).toMatchObject({ left: 80, top: 23 })
})

describe('resizeBars', () => {
  test('without resolver', () => {
    const bars = [
      { row: 3, column: 3, editing: true, length: 2 },
      { row: 4, column: 3, length: 6 }
    ]
    const changedBars = resizeBars(bars, { cell: { row: 3, column: 6 } })
    expect(changedBars[0]).toMatchObject({
      row: 3,
      column: 3,
      editing: true,
      length: 4
    })
    expect(changedBars[1]).toMatchObject({ row: 4, column: 3, length: 6 })
  })

  test('with resolver', () => {
    const bars = [
      { row: 3, column: 3, editing: true, length: 2 },
      { row: 4, column: 3, length: 6 }
    ]
    const changedBars = resizeBars(
      bars,
      { cell: { row: 3, column: 6 } },
      (props) => {
        props.name = 'dave'
        return props
      }
    )
    expect(changedBars[0]).toMatchObject({
      row: 3,
      column: 3,
      editing: true,
      length: 4,
      name: 'dave'
    })
    expect(changedBars[1]).toMatchObject({ row: 4, column: 3, length: 6 })
  })
})

test('finishEditingBars', () => {
  const bars = [
    { id: 1, editing: true },
    { id: 2, editing: false }
  ]

  const ebars = finishEditingBars(bars)

  expect(ebars[0].editing).toBe(false)
  expect(ebars[0].id).toBe(1)
  expect(ebars[1].editing).toBe(false)
  expect(ebars[1].id).toBe(2)
})

test('isObjectEmpty', () => {
  expect(isObjectEmpty({ hello: 'yest' })).toBe(false)
  expect(isObjectEmpty({})).toBe(true)
})
