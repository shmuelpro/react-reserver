import React, { useEffect, useState } from 'react'
import styles from './style.css'
import {
  makeId,
  getPosition,
  getColumnCount,
  getRowCount,
  evaluatePosition,
  resizeBar
} from './helpers'
import reserverReducer from './reserverReducer'
import useReserver from './useReserver'
import actionTypes from './actionTypes'
import Bar from './Bar'
import Head from './Head'

/* TODO:

Temp item while dragging
Collision detection
Test accessibility
*/

export default function Reserver(props) {
  const [rowTitles, setRowTitles] = useState([])

  const [rowCount, setRowCount] = useState(0)
  const [columnCount, setColumnCount] = useState(0)

  useEffect(() => {
    setColumnCount(
      getColumnCount(props.dimension, props.width, props.rowTitleWidth)
    )
  }, [props.width, props.dimension])

  useEffect(() => {
    setRowCount(getRowCount(props.dimension, props.height))
  }, [props.height, props.dimension])

  useEffect(() => {
    if (typeof props.rowTitles === 'function') {
      setRowTitles(props.rowTitles())
    } else if (Array.isArray(props.rowTitles)) {
      setRowTitles(props.rowTitles)
    }
  }, [props.rowTitles])

  return (
    <div
      role='grid'
      onMouseLeave={props.mouseLeaveGrid}
      style={{ ...props.style, position: 'relative' }}
    >
      <Head
        headRow={props.headRow}
        columnCount={columnCount}
        rowTitleWidth={props.rowTitleWidth}
        dimension={props.dimension}
      />
      {[...Array(rowCount)].map((x, r) => {
        return (
          <div
            role='rowgroup'
            className={styles.row}
            key={r}
            style={{ height: props.dimension, display: 'flex' }}
          >
            <div
              className={styles.row_cell}
              style={{
                width: props.rowTitleWidth,
                height: props.dimension + 'px'
              }}
            >
              {rowTitles[r]}
            </div>
            {[...Array(columnCount)].map((x, c) => {
              return (
                <div
                  role='gridcell'
                  aria-colindex={c}
                  onDragOver={(e) => {
                    e.preventDefault()
                    props.mouseDragOverCell({ cell: { row: r, column: c } })
                  }}
                  className={styles.row_cell}
                  onMouseEnter={() => {
                    props.mouseEnterCell({
                      dimension: props.dimension,
                      cell: { row: r, column: c }
                    })
                  }}
                  onMouseDown={() => {
                    props.mouseDownCell({
                      dimension: props.dimension,
                      cell: { row: r, column: c }
                    })
                  }}
                  onMouseUp={() => {
                    console.log('mouseup')
                    props.mouseUpCell({ cell: { row: r, column: c } })
                  }}
                  onDrop={() => {
                    props.mouseCellDrop({ cell: { row: r, column: c } })
                  }}
                  style={{
                    width: props.dimension + 'px',
                    height: props.dimension + 'px'
                  }}
                  key={c}
                >
                  {props.content[`r${r}c${c}`]}
                </div>
              )
            })}
          </div>
        )
      })}

      <div role='list'>
        {' '}
        {typeof props.children === 'function' &&
          props.children({
            rowCount: rowCount,
            columnCount: columnCount,
            rowTitleWidth: props.rowTitleWidth,
            dimension: props.dimension
          })}
      </div>
    </div>
  )
}
function createBar(dimension, startLocation) {
  return {
    id: makeId(),
    dimension: dimension,
    style: { background: 'orange', pointerEvents: 'none' },
    editing: true,
    ...startLocation,
    length: 1
  }
}
export {
  Bar,
  reserverReducer,
  actionTypes,
  makeId,
  useReserver,
  getPosition,
  evaluatePosition,
  createBar,
  resizeBar
}

Reserver.defaultProps = {
  initBars: [],
  bars: [],
  tags: [],
  headRow: [],
  rowTitles: [],
  content: {},
  dimension: 20,
  width: 500,
  height: 500,
  rowTitleWidth: 0,
  mouseEnterCell: () => {},
  mouseDownCell: () => {},
  mouseUpCell: () => {},
  mouseDragOverCell: () => {},
  mouseCellDrop: () => {},
  mouseLeaveGrid: () => {}
}
