import checkCollision, {
  checkHasCollisionObject,
  collided,
  removeCollision
} from './collision'
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
  const bars = [
    { id: 'first', column: 0, row: 0, length: 4 },
    { id: 'second', column: 1, row: 1, length: 3 },
    { id: 'third', column: 2, row: 1, length: 5 },
    { id: 'fourth', column: 4, row: 1, length: 3 },
    { id: 'fifth', column: 1, row: 1, length: 3 }
  ]

  const otherbar = { id: 'other', column: 1, row: 1, length: 2 }
  // let otherbar2 = { id: "other2", column: 1, row: 1, length: 2 }

  const [bs, obs] = checkCollision(bars, otherbar)
  // const [bs2, obs2] = checkCollision(bars, otherbar2);

  expect(bs[0].collisions).toMatchObject({})
  expect(bs[1].collisions).toMatchObject({ other: '' })
  //  expect(bs2[2].collisions).toMatchObject({ other: '' })

  expect(obs.collisions).toMatchObject({ second: '' })
})
