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


test('onPointerUp event fires', () => {
  const fn = jest.fn()

  //fireEvent(node, myEvent)
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onPointerUp={fn}
      row={2}
      column={3}
    />
  )

  fireEvent.pointerUp(screen.getByRole('gridcell'))

  expect(fn).toHaveBeenCalled()
})

test('onPointerDown event fires', () => {
  const fn = jest.fn()

  //fireEvent(node, myEvent)
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onPointerDown={fn}
      row={2}
      column={3}
    />
  )

  fireEvent.pointerDown(screen.getByRole('gridcell'))

  expect(fn).toHaveBeenCalled()
})

test('onPointerMove event fires', () => {
  const fn = jest.fn()


  //fireEvent(node, myEvent)
  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onPointerMove={fn}

      row={2}
      column={3}
    />
  )

  fireEvent.pointerMove(screen.getByRole('gridcell'))

  expect(fn).toHaveBeenCalled()
})

test('onPointerOver event fires', () => {
  const fn = jest.fn()
  const fn2 = jest.fn()

  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onPointerOver={fn}
      onPointerEnter={fn2}
      row={2}
      column={3}
    />
  )

  fireEvent.pointerOver(screen.getByRole('gridcell'))

  expect(fn).toHaveBeenCalled()
  expect(fn2).toHaveBeenCalled()

})

test('onPointerOut event fires', () => {
  const fn = jest.fn()
  const fn2 = jest.fn()

  render(
    <Cell
      style={{ pointerEvents: 'auto' }}
      dimension='20'
      onPointerOut={fn}
      onPointerLeave={fn2}
      row={2}
      column={3}
    />
  )

  fireEvent.pointerOut(screen.getByRole('gridcell'))

  expect(fn).toHaveBeenCalled()
  expect(fn2).toHaveBeenCalled()
  

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
