import React from 'react'
import styles from './style.css'

export default function Cell(props) {
  return (
    <div
      role='gridcell'
      aria-colindex={props.column}
      onDragOver={(e) => {
        e.preventDefault()
        props.onDragOver({ cell: { row: props.row, column: props.column } }, e)
      }}
      className={styles.row_cell}
      onMouseEnter={(e) => {
        props.onMouseEnter(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onMouseDown={(e) => {
        props.onMouseDown(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onMouseUp={(e) => {
        props.onMouseUp({ cell: { row: props.row, column: props.column } }, e)
      }}
      onDrop={(e) => {
        props.onDrop({ cell: { row: props.row, column: props.column } }, e)
      }}
      style={{
        width: props.dimension + 'px',
        height: props.dimension + 'px'
      }}
    >
      {props.children}
    </div>
  )
}
