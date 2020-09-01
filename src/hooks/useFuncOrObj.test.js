import useFuncOrObj from './useFuncOrObj'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

function FuncObj() {
  const func = useFuncOrObj((item) => {
    return { display: item }
  }, 'func')
  const none = useFuncOrObj('asd')

  const obj = useFuncOrObj({ display: 'obj' })

  return (
    <div className='App'>
      <div data-testid='func'>{func.display}</div>
      <div data-testid='obj'>{obj.display}</div>
      <div data-testid='none'>{JSON.stringify(none)}</div>
    </div>
  )
}

it('Check useFuncOrObj ', () => {
  render(<FuncObj />)
  const func = screen.getByTestId('func')
  const obj = screen.getByTestId('obj')
  const none = screen.getByTestId('none')

  expect(func).toHaveTextContent('func')
  expect(obj).toHaveTextContent('obj')
  expect(none).toHaveTextContent('{}')
})
