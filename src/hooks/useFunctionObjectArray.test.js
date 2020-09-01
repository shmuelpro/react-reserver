import useFunctionObjectArray from './useFunctionObjectArray'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

function FuncObj() {
  const func = useFunctionObjectArray((item) => {
    return [item]
  }, 'func')

  const funcobj = useFunctionObjectArray(
    {
      func: (item) => {
        return [item]
      }
    },
    'funcobj'
  )

  const nofuncobj = useFunctionObjectArray({ canrun: true }, 'nofuncobj')

  const none = useFunctionObjectArray('asd')

  const arr = useFunctionObjectArray(['array'])

  return (
    <div className='App'>
      <div data-testid='func'>{func[0]}</div>
      <div data-testid='arr'>{arr[0]}</div>
      <div data-testid='funcobj'>{funcobj[0]}</div>
      <div data-testid='nofuncobj'>{JSON.stringify(nofuncobj)}</div>
      <div data-testid='none'>{JSON.stringify(none)}</div>
    </div>
  )
}

it('Check useFunctionObjectArray ', () => {
  render(<FuncObj />)
  const func = screen.getByTestId('func')
  const arr = screen.getByTestId('arr')
  const funcobj = screen.getByTestId('funcobj')
  const nofuncobj = screen.getByTestId('nofuncobj')
  const none = screen.getByTestId('none')

  expect(func).toHaveTextContent('func')
  expect(arr).toHaveTextContent('arr')
  expect(funcobj).toHaveTextContent('funcobj')
  expect(none).toHaveTextContent('[]')
  expect(nofuncobj).toHaveTextContent('[]')
})
