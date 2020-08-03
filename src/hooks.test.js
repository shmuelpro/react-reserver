import { useArrFunc } from './hooks'
import React from 'react'

import { render } from '@testing-library/react'
function ArrFunc() {
  function myadd(add1, add2) {
    return add1 + add2
  }
  const result = useArrFunc(myadd, 2, 3)
  const result2 = useArrFunc(['s'])
  const result3 = useArrFunc('sd')

  return (
    <div className='App'>
      <h1>{result}</h1>
      <h1>{result2}</h1>
      <h1>{result3.length === 0 ? 'empty' : 'oops'}</h1>
    </div>
  )
}

describe('useArrFunc', function () {
  it('When its given a function', () => {
    const { getByText } = render(<ArrFunc />)
    expect(getByText('5')).toBeDefined()
  })

  it('When its given an array', () => {
    const { getByText } = render(<ArrFunc />)
    expect(getByText('s')).toBeDefined()
  })

  it('When its given something else', () => {
    const { getByText } = render(<ArrFunc />)
    expect(getByText('empty')).toBeDefined()
  })
})
