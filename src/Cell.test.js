import React from 'react'
import Cell from './Cell'
import { render, fireEvent, screen } from '@testing-library/react'

test('onDragStart event fires', () => {
  const dragMe = jest.fn()
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onDragStart={dragMe}
      row={2}
      column={3}
    />
  )
  fireEvent.dragStart(screen.getByRole('gridcell'))

  expect(dragMe).not.toHaveBeenCalled()
})

test('onDragOver event fires', () => {
  let cell = {}
  const dragMe = (props) => {
    cell = props.cell
  }
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onDragOver={dragMe}
      row={2}
      column={3}
    />
  )
  fireEvent.dragOver(screen.getByRole('gridcell'))

  expect(cell.row).toBe(2)
  expect(cell.column).toBe(3)
})

test('onDragDrop event fires', () => {
  let cell = {}
  const dragMe = (props) => {
    cell = props.cell
  }
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onDrop={dragMe}
      row={2}
      column={3}
    />
  )
  fireEvent.drop(screen.getByRole('gridcell'))

  expect(cell.row).toBe(2)
  expect(cell.column).toBe(3)
})

test('make sure default prop didnt change', () => {
  ;[
    'onMouseEnter',
    'onMouseDown',
    'onMouseUp',
    'onDrop',
    'onMouseOver'
  ].forEach((name) => {
    const func = jest.spyOn(Cell.defaultProps, name)
    Cell.defaultProps[name]()
    expect(func).toHaveBeenCalled()
  })
})
