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
Resize bar if at end of visible area
drag backwards
build resolver for date and time
Test accessibility
Assign content to top left area
make dimention of grid not necessarily square
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
      id={props.id}
      className={props.className}
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
              className={
                rowTitles.length > 0
                  ? styles.row_cell
                  : styles.row_cell_invisible
              }
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
                    props.mouseDragOverCell({ cell: { row: r, column: c } }, e)
                  }}
                  className={styles.row_cell}
                  onMouseEnter={(e) => {
                    props.mouseEnterCell(
                      {
                        dimension: props.dimension,
                        cell: { row: r, column: c }
                      },
                      e
                    )
                  }}
                  onMouseDown={(e) => {
                    props.mouseDownCell(
                      {
                        dimension: props.dimension,
                        cell: { row: r, column: c }
                      },
                      e
                    )
                  }}
                  onMouseUp={(e) => {
                    props.mouseUpCell({ cell: { row: r, column: c } }, e)
                  }}
                  onDrop={(e) => {
                    props.mouseCellDrop({ cell: { row: r, column: c } }, e)
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
        {typeof props.children === 'function' &&
          props.children({
            rowCount: rowCount,
            columnCount: columnCount,
            rowTitleWidth: props.rowTitleWidth,
            dimension: props.dimension,
            rowTitleHeight: rowTitles.length > 0 ? props.dimension : 0
          })}
        {Array.isArray(props.children) && props.children}
      </div>
    </div>
  )
}
function createBar(dimension, startLocation) {
  return {
    id: makeId(),
    dimension: dimension,

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
