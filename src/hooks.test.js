import { useArrFunc, useFunction } from './hooks'
import React from 'react'

import { render } from '@testing-library/react'

function myadd(add1, add2) {
  return add1 + add2
}

function JustFunc() {
  const result = useFunction(myadd, 2, 3)

  return (
    <div className='App'>
      <h1>{result}</h1>
    </div>
  )
}

function ProblemFunction() {
  const result = useFunction('sd')

  return (
    <div className='App'>
      <h1>{result}</h1>
    </div>
  )
}

function ArrFunc() {
  const result = useArrFunc(myadd, 8, 3)
  const result2 = useArrFunc(['s'])
  const result3 = useArrFunc('sd')
  const result4 = useFunction(myadd, 2, 3)

  return (
    <div className='App'>
      <h1>{result}</h1>
      <h1>{result2}</h1>
      <h1>{result4}</h1>
      <h1>{result3.length === 0 ? 'empty' : 'oops'}</h1>
    </div>
  )
}

describe('useArrFunc', function () {
  it('When its given a function', () => {
    const { getByText } = render(<ArrFunc />)

    expect(getByText('11')).toBeDefined()
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

const test = () => render(<ProblemFunction />)
describe('useFunction ', function () {
  it('When its given a function', () => {
    const { getByText } = render(<JustFunc />)

    expect(getByText('5')).toBeDefined()
  })

  it('When its given anything else', () => {
    expect(test).toThrow('useFunction takes first argument as a function')
  })
})
