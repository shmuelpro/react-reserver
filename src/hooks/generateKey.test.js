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
  
  expect(2).toBe(2)
})
