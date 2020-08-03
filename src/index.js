import React, { useEffect, useState } from 'react'
import { useArrFunc } from './hooks'
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
import Cell from './Cell'

/* TODO:
Resize bar if at end of visible area
drag backwards
build resolver for date and time
Test accessibility
Assign content to top left area
make dimention of grid not necessarily square
*/

export default function Reserver(props) {
  const [rowCount, setRowCount] = useState(0)
  const [columnCount, setColumnCount] = useState(0)
  const rowTitles = useArrFunc(props.rowTitles)
  const columnTitleRow = useArrFunc(props.columnTitleRow, columnCount)

  useEffect(() => {
    setColumnCount(
      getColumnCount(props.dimension, props.width, props.rowTitleWidth)
    )
  }, [props.width, props.dimension])

  useEffect(() => {
    setRowCount(getRowCount(props.dimension, props.height))
  }, [props.height, props.dimension])

  return (
    <div
      id={props.id}
      className={props.className}
      role='grid'
      onMouseLeave={props.mouseLeaveGrid}
      style={{ ...props.style, position: 'relative' }}
    >
      <Head
        columnTitleRow={columnTitleRow}
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
                <Cell
                  key={`r${r}c${c}`}
                  onMouseDown={props.mouseDownCell}
                  onMouseEnter={props.mouseEnterCell}
                  onMouseUp={props.mouseUpCell}
                  onDrop={props.mouseDropCell}
                  onDragOver={props.mouseDragOverCell}
                  dimension={props.dimension}
                  column={c}
                  row={r}
                >
                  {props.content[`r${r}c${c}`]}
                </Cell>
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
            columnTitleHeight: columnTitleRow.length > 0 ? props.dimension : 0
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
    ...startLocation
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
  resizeBar,
  Reserver
}

Reserver.defaultProps = {
  columnTitleRow: [],
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
