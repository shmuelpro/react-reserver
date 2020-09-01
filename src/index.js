import React from 'react'
import { useFunction } from './hooks'
import {
  getPosition,
  getColumnCount,
  getRowCount,
  evaluatePosition,
  resizeBars,
  finishEditingBars
} from './helpers'
import { checkCollisions } from './collision'
import reserverReducer from './reserverReducer'
import useReserver from './useReserver'
import actionTypes from './actionTypes'
import Bar from './Bar'
import Head from './Head'
import Cell from './Cell'
import Peg from './Peg'
import Tag from './Tag'
import createBar from './utils/createBar'
import useFuncOrObj from './hooks/useFuncOrObj'
import useDimension from './hooks/useDimension'
import useFunctionObjectArray from './hooks/useFunctionObjectArray'

/* TODO:
Test accessibility
*/

const Reserver = React.forwardRef((props, ref) => {
  const rowCount = useFunction(getRowCount, props.dimension, props.height)
  const columnCount = useFunction(
    getColumnCount,
    props.dimension,
    props.width,
    props.rowTitleWidth
  )

  const rowTitles = useFunctionObjectArray(props.rowTitles, rowCount)
  const columnTitles = useFunctionObjectArray(props.columnTitles, columnCount)
  const content = useFuncOrObj(props.content, columnCount, rowCount)
  const dimension = useDimension(props.dimension)

  return (
    <div
      ref={ref}
      id={props.id}
      className={props.className}
      role='grid'
      onMouseLeave={props.mouseLeaveGrid}
      onMouseMove={props.mouseMoveGrid}
      style={{ ...props.style, position: 'relative' }}
    >
      <Head
        columnTitles={columnTitles}
        columnCount={columnCount}
        height={props.columnTitleHeight}
        rowTitleWidth={props.rowTitleWidth}
        dimension={dimension}
        isVisible={columnTitles.length > 0}
        columnTitleClassName={props.columnTitleClassName}
        dir={props.dir}
        onMouseOverCell={props.mouseOverCellHead}
        cantonClassName={props.cantonClassName}
      />
      {[...Array(rowCount)].map((x, r) => {
        return (
          <div
            role='rowgroup'
            key={r}
            style={{ height: dimension.height, display: 'flex' }}
          >
            {props.dir === 'ltr' && (
              <Cell
                style={{ display: rowTitles.length > 0 ? 'initial' : 'none' }}
                dimension={{
                  height: dimension.height,
                  width: props.rowTitleWidth
                }}
                className={props.rowTitleClassName}
              >
                {rowTitles[r]}
              </Cell>
            )}
            {[...Array(columnCount)].map((x, c) => {
              return (
                <Cell
                  key={`r${r}c${c}`}
                  onMouseDown={props.mouseDownCell}
                  onMouseEnter={props.mouseEnterCell}
                  onMouseUp={props.mouseUpCell}
                  onDrop={props.mouseDropCell}
                  onDragOver={props.mouseDragOverCell}
                  dimension={dimension}
                  className={props.cellClassName}
                  column={c}
                  row={r}
                >
                  {content[`r${r}c${c}`]}
                </Cell>
              )
            })}
            {props.dir === 'rtl' && (
              <Cell
                style={{ display: rowTitles.length > 0 ? 'initial' : 'none' }}
                dimension={{
                  height: dimension.height,
                  width: props.rowTitleWidth
                }}
                className={props.rowTitleClassName}
              >
                {rowTitles[r]}
              </Cell>
            )}
          </div>
        )
      })}

      <div role='list'>
        {typeof props.children === 'function' &&
          props.children({
            rowCount: rowCount,
            columnCount: columnCount,
            rowTitleWidth: props.rowTitleWidth,
            dimension: dimension,
            columnTitleHeight:
              columnTitles.length > 0
                ? props.columnTitleHeight > 0
                  ? props.columnTitleHeight
                  : dimension.height
                : 0
          })}
        {Array.isArray(props.children) && props.children}
      </div>
    </div>
  )
})

export default Reserver

export {
  Tag,
  Bar,
  Peg,
  reserverReducer,
  actionTypes,
  useReserver,
  getPosition,
  evaluatePosition,
  createBar,
  resizeBars,
  Reserver,
  finishEditingBars,
  checkCollisions
}

Reserver.defaultProps = {
  columnTitles: [],
  rowTitles: [],
  content: {},
  dimension: 20,
  width: 500,
  height: 500,
  rowTitleWidth: 0,
  columnTitleHeight: 0,
  dir: 'ltr',
  mouseEnterCell: () => {},
  mouseDownCell: () => {},
  mouseUpCell: () => {},
  mouseDragOverCell: () => {},
  mouseDropCell: () => {},
  mouseLeaveGrid: () => {},
  mouseMoveGrid: () => {}
}
