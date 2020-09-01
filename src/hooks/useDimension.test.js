import useDimension from './useDimension'
import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

function Dimension() {
  const single = useDimension(10)
  const none = useDimension()
  const dif = useDimension({ width: 9, height: 11 })

  return (
    <div className='App'>
      <h1>
        <div data-testid='width-single'>{single.width}</div>{' '}
        <div data-testid='height-single'>{single.height}</div>
      </h1>
      <h1>
        <div data-testid='width-dif'>{dif.width}</div>{' '}
        <div data-testid='height-dif'>{dif.height}</div>
      </h1>
      <h1>
        <div data-testid='width-none'>{none.width}</div>{' '}
        <div data-testid='height-none'>{none.height}</div>
      </h1>
    </div>
  )
}

it('Check useDimension', () => {
  render(<Dimension />)
  const widthSingle = screen.getByTestId('width-single')
  const heightSingle = screen.getByTestId('height-single')

  expect(widthSingle).toHaveTextContent(10)
  expect(heightSingle).toHaveTextContent(10)

  const widthDif = screen.getByTestId('width-dif')
  const heightDif = screen.getByTestId('height-dif')
  expect(widthDif).toHaveTextContent(9)
  expect(heightDif).toHaveTextContent(11)

  const widthnone = screen.getByTestId('width-none')
  const heightnone = screen.getByTestId('height-none')
  expect(widthnone).toHaveTextContent(-1)
  expect(heightnone).toHaveTextContent(-1)
})
