import {
  checkCollisions,
  reviewBars,
  checkHasCollisionObject,
  collided,
  removeCollision
} from './collision'

const bars = [
  { id: 'first', column: 0, row: 0, length: 4 },
  { id: 'second', column: 1, row: 1, length: 3 },
  { id: 'third', column: 2, row: 1, length: 5 },
  { id: 'fourth', column: 4, row: 1, length: 3 },
  { id: 'fifth', column: 1, row: 1, length: 3 },
  { id: 'other', column: 1, row: 1, length: 2, editing: true }
]

test('does bar have collision object', () => {
  const otherbar = { id: 'other', column: 1, row: 1, length: 2 }

  expect(otherbar).not.toMatchObject({ collisions: {} })
  expect(checkHasCollisionObject(otherbar)).toEqual(
    expect.objectContaining({ collisions: {} })
  )
})

test('collision added keys to collision object', () => {
  const firstbar = { id: 'first' }
  const otherbar = { id: 'other' }

  const [f, o] = collided(firstbar, otherbar)
  expect(f.collisions).toMatchObject({ other: '' })
  expect(o.collisions).toMatchObject({ first: '' })
})

test('no collision remove keys from collision object', () => {
  const firstbar = { id: 'first', collision: { other: '' } }
  const otherbar = { id: 'other', collision: { first: '' } }

  const [f, o] = removeCollision(firstbar, otherbar)
  expect(f.collisions).toMatchObject({})
  expect(o.collisions).toMatchObject({})
})

test('does bar have collision object', () => {
  const otherbar = { id: 'other', column: 1, row: 1, length: 2 }

  const [bs, obs] = reviewBars(bars, otherbar)

  expect(bs[0].collisions).toMatchObject({})
  expect(bs[1].collisions).toMatchObject({ other: '' })

  expect(obs.collisions).toMatchObject({ second: '' })
})

test('collisionTest', () => {
  const result = [
    { id: 'first', column: 0, row: 0, length: 4, collisions: {} },
    {
      id: 'second',
      column: 1,
      row: 1,
      length: 3,
      collisions: { other: '' }
    },
    {
      id: 'third',
      column: 2,
      row: 1,
      length: 5,
      collisions: { other: '' }
    },
    { id: 'fourth', column: 4, row: 1, length: 3, collisions: {} },
    {
      id: 'fifth',
      column: 1,
      row: 1,
      length: 3,
      collisions: { other: '' }
    },
    {
      id: 'other',
      column: 1,
      row: 1,
      length: 2,
      editing: true,
      collisions: { second: '', third: '' }
    }
  ]
  const checkedBars = checkCollisions(bars)

  expect(checkedBars).toMatchObject(result)
})
