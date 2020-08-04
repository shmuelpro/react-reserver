import React, { useEffect } from 'react'
import { useArrFunc, useFunction } from './hooks'
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
  const rowCount = useFunction(getRowCount, props.dimension, props.height)
  const columnCount =useFunction(
    getColumnCount,
    props.dimension,
    props.width,
    props.rowTitleWidth
  )
 
  const rowTitles = useArrFunc(props.rowTitles)
  const columnTitles = useArrFunc(props.columnTitles, columnCount)

  return (
    <div
      id={props.id}
      className={props.className}
      role='grid'
      onMouseLeave={props.mouseLeaveGrid}
      style={{ ...props.style, position: 'relative' }}
    >
      <Head
        columnTitles={columnTitles}
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
                height: props.dimension + 'px',
                overflow:"hidden"
                
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
                  className={props.cellClassName}
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
            columnTitleHeight: columnTitles.length > 0 ? props.dimension : 0
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

const Tag = (props)=><span style={props.style} className={styles.tag_content}>{props.children}</span>
export {
  Tag,
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
  columnTitles: [],
  rowTitles: [],
  content: {},
  dimension: 20,
  width: 500,
  height: 500,
  rowTitleWidth: 0,
  mouseEnterCell: () => { },
  mouseDownCell: () => { },
  mouseUpCell: () => { },
  mouseDragOverCell: () => { },
  mouseDropCell: () => { },
  mouseLeaveGrid: () => { }
}
