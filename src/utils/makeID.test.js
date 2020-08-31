import makeID from './makeID'

test('makeid returns 15 characters', () => {
    const newid = makeID()
    expect(newid.length).toBe(15)
  })