import React from 'react'
import Head from './Head'
import { render, screen, fireEvent } from '@testing-library/react'

test('columnTitles receives array ', () => {
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitles={[1, 2, 3, 4]}
      columnCount={4}
      dir='ltr'
      isVisible
    />
  )
  screen.getByText('1')
})

test('columnTitles receives array righttoleft', () => {
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitles={[1, 2, 3, 4]}
      columnCount={4}
      dir='rtl'
    />
  )
  screen.getByText('1')
})

test('onMouseOver event fires', () => {
  const fn = jest.fn()
  render(
    <Head
      dimension='20'
      rowTitleWidth='20px'
      columnTitles={[1, 2, 3, 4]}
      columnCount={4}
      dir='rtl'
      onMouseOverCell={fn}
    />
  )

  fireEvent.mouseOver(screen.getAllByRole('gridcell', { hidden: true })[0])

  expect(fn).toHaveBeenCalled()
})

test('make sure default prop didnt change', () => {
  ;['onMouseOverCell'].forEach((name) => {
    const func = jest.spyOn(Head.defaultProps, name)
    Head.defaultProps[name]()
    expect(func).toHaveBeenCalled()
  })
})
