import React from 'react'
import renderer from 'react-test-renderer'
import {
  render,
  screen,
  fireEvent,
  getAllByRole,
  act,
  prettyDOM
} from '@testing-library/react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBar
} from './index'
describe('Reserver', () => {
  test('"Reserver runs', () => {
    render(<Reserver />)
  })
})

function Basic(props) {
  const {
    bars,
    isEditing,
    setIsEditing,
    addBar,
    setBars,
    editBar,
    deleteBar
  } = useReserver(reserverReducer, [])

  return (
    <Reserver
      width={150}
      height={50}
      id='reserver'
      mouseDownCell={(props) => {
        const newbar = createBar(props.dimension, props.cell)
        addBar(newbar)
      }}
      mouseEnterCell={(props) => {
        if (isEditing) {
          const nBars = resizeBar(bars, props)
          setBars(nBars)
        }
      }}
      mouseUpCell={() => {
        const dBars = bars.map((bar) => {
          if (bar.editing) {
            return {
              ...bar,
              editing: false,
              style: { ...bar.style, pointerEvents: 'auto' }
            }
          }
          return bar
        })

        setBars(dBars)
        setIsEditing(false)
      }}
    >
      {bars.map((bar) => {
        return (
          <Bar
            onMouseLeave={(e, props) => {
              editBar({
                ...props,
                style: { ...props.style, background: 'red' }
              })
            }}
            onContextMenu={(e, props) => {
              deleteBar(props)
            }}
            key={bar.id}
            {...bar}
            style={{
              ...bar.style,
              ...getPosition(bar.row, bar.column, bar.dimension)
            }}
          >
            Test
          </Bar>
        )
      })}
    </Reserver>
  )
}

/*
Need to add this to tests
test('headrow receives function ', () => {
  render(
    <Head
      dimension={{width:20,height:20}}
      rowTitleWidth='20px'
      columnTitles={(c) => {
        return [...Array(c)].map((x, i) => {
          return <div key={i}>{i}</div>
        })
      }}
      columnCount={4}
    />
  )
  screen.getByText('1')
})
*/

test('Reserver adds, removes, edits and setsBars', () => {
  const dom = render(<Basic />)

  const square = getAllByRole(dom.container, 'gridcell')

  act(() => {
    fireEvent.mouseDown(square[0])
  })

  const bar = screen.getByText('Test')
  expect(bar).toBeTruthy()

  act(() => {
    fireEvent.mouseOver(square[4])
  })

  const barComp = renderer.create(prettyDOM(bar)).toJSON()
  expect(barComp).toMatchSnapshot()

  const newBar = screen.getByText('Test')
  act(() => {
    fireEvent.mouseUp(square[4])
  })
  const barwithauto = renderer.create(prettyDOM(newBar)).toJSON()
  expect(barwithauto).toMatchSnapshot()

  act(() => {
    fireEvent.mouseEnter(bar)
    fireEvent.mouseLeave(bar)
  })
  const redBar = screen.getByText('Test')

  act(() => {
    fireEvent.contextMenu(bar)
  })

  const redbarsnap = renderer.create(prettyDOM(redBar)).toJSON()
  expect(redbarsnap).toMatchSnapshot()

  const nobar = screen.queryAllByText('Test')
  expect(nobar).toEqual([])

  // screen.debug(nobar);
})
