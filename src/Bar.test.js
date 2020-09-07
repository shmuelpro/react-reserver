import React from 'react'
import Bar from './Bar'
import { render, fireEvent, screen } from '@testing-library/react'
import {
  toBeInTheDocument,
  toHaveStyle
} from '@testing-library/jest-dom/matchers'
import renderer from 'react-test-renderer'

expect.extend({ toBeInTheDocument, toHaveStyle })

test('Bar props changes color ', () => {
  render(<Bar dimension={{ width: 20, height: 20 }} background='red' />)

  expect(screen.getByRole('listitem')).toHaveStyle(
    'background:rgb(14, 107, 168)'
  )

  // screen.getByText('1')
})

test('onClick event fires', () => {
  const onClick = jest.fn()
  render(<Bar dimension={{ width: 20, height: 20 }} onClick={onClick} />)
  fireEvent.click(screen.getByRole('listitem'))

  expect(onClick).toHaveBeenCalled()
})

test('onContextMenu event fires', () => {
  const onClick = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onContextMenu={onClick}
    />
  )
  fireEvent.contextMenu(screen.getByRole('listitem'))

  expect(onClick).toHaveBeenCalled()
})

test('onContextMenu event fires', () => {
  const onClick = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onPointerDown={onClick}
    />
  )
  fireEvent.pointerDown(screen.getByRole('listitem'))

  expect(onClick).toHaveBeenCalled()
})

test('onDragStart event fires', () => {
  const dragMe = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onDragStart={dragMe}
    />
  )
  fireEvent.dragStart(screen.getByRole('listitem'))

  expect(dragMe).toHaveBeenCalled()
})

test('onDragEnd event fires', () => {
  const dragMe = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onDragEnd={dragMe}
    />
  )
  fireEvent.dragEnd(screen.getByRole('listitem'))

  expect(dragMe).toHaveBeenCalled()
})

test('onMouseMove event fires', () => {
  const dragMe = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onMouseMove={dragMe}
    />
  )
  fireEvent.mouseMove(screen.getByRole('listitem'))

  expect(dragMe).toHaveBeenCalled()
})

test('onMouseDown event fires', () => {
  const dragMe = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onMouseDown={dragMe}
    />
  )
  fireEvent.mouseDown(screen.getByRole('listitem'))

  expect(dragMe).toHaveBeenCalled()
})

test('onMouseUp event fires', () => {
  const dragMe = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onMouseUp={dragMe}
    />
  )
  fireEvent.mouseUp(screen.getByRole('listitem'))

  expect(dragMe).toHaveBeenCalled()
})
test('onContextMenu event fires', () => {
  const onClick = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onContextMenu={onClick}
    />
  )
  fireEvent.contextMenu(screen.getByRole('listitem'))

  expect(onClick).toHaveBeenCalled()
})

test('onMouseOver event fires', () => {
  const onClick = jest.fn()
  render(
    <Bar
      style={{ pointerEvents: 'auto' }}
      dimension={{ width: 20, height: 20 }}
      onMouseOver={onClick}
    />
  )
  fireEvent.mouseOver(screen.getByRole('listitem'))

  expect(onClick).toHaveBeenCalled()
})

test('should have default onDragStart', () => {
  expect(Bar.defaultProps.onDragStart).toBeDefined()
})

test('should have default onClick', () => {
  expect(Bar.defaultProps.onClick).toBeDefined()
})

test('renders content', () => {
  const myComp = (props) => (
    <div style={{ background: 'green' }}>{props.children || 'compy'} </div>
  )
  const bar = renderer
    .create(
      <Bar
        style={{ pointerEvents: 'auto' }}
        dimension={{ width: 20, height: 20 }}
        length={4}
        content={{ 2: <div>cool</div> }}
        firstContent={<myComp />}
        lastContent={<myComp>hobo</myComp>}
      />
    )
    .toJSON()
  expect(bar).toMatchSnapshot()
})

test('renders content only body', () => {
  const bar = renderer
    .create(
      <Bar
        style={{ pointerEvents: 'auto' }}
        dimension={{ width: 20, height: 20 }}
        length={4}
        content={{ 0: <div>great</div>, 2: <div>cool</div>, 3: <div>meh</div> }}
      />
    )
    .toJSON()
  expect(bar).toMatchSnapshot()
})

test('renders content only last ', () => {
  const bar = renderer
    .create(
      <Bar
        style={{ pointerEvents: 'auto' }}
        dimension={{ width: 20, height: 20 }}
        length={4}
        content={{ 2: <div>horror</div> }}
      />
    )
    .toJSON()
  expect(bar).toMatchSnapshot()
})

test('make sure default prop didnt change', () => {
  expect(Bar.defaultProps.style).toMatchObject({})
  expect(Bar.defaultProps.content).toMatchObject({})
  expect(Bar.defaultProps.dimension).toMatchObject({ width: 20, height: 20 })
  expect(Bar.defaultProps.length).toBe(1)
  ;[
    'onClick',
    'onDragStart',
    'onDragEnd',
    'onMouseOver',
    'onContextMenu',
    'onMouseDown',
    'onMouseUp',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove'
  ].forEach((name) => {
    const func = jest.spyOn(Bar.defaultProps, name)
    Bar.defaultProps[name]()
    expect(func).toHaveBeenCalled()
  })
})
