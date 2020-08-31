import generateKey from './generateKey'

test('it', () => {
  const obj = {
    Test: 'test',
    sa: {
      la: {
        da: () => {
          return 'Asd'
        }
      }
    }
  }

  obj.is = obj
  console.log(JSON.stringify(generateKey(obj)))
  expect(2).toBe(2)
})
