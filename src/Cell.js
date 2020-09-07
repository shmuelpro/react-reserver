import React from 'react'
export default function Cell(props) {
  return (
    <div
      role='gridcell'
      aria-colindex={props.column}
      onDragStart={(e) => {
        e.preventDefault()
        console.log("here")
      }}
      onDragOver={(e) => {
        e.preventDefault()
        console.log("there")
        props.onDragOver({ cell: { row: props.row, column: props.column } }, e)
      }}
      className={props.className}
      onMouseOver={(e) => {
        props.onMouseOver(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onMouseEnter={(e) => {
        props.onMouseEnter(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onPointerEnter={
        (e) => {
          typeof props.onPointerEnter === "function" && props.onPointerEnter(
            {
              dimension: props.dimension,
              cell: { row: props.row, column: props.column }
            },
            e
          )
        }
      }
      onPointerLeave={
        (e) => {
          typeof props. onPointerLeave === "function" && props.onPointerLeave(
            {
              dimension: props.dimension,
              cell: { row: props.row, column: props.column }
            },
            e
          )
        }
      }
      onPointerMove={
        (e) => {
          typeof props.onPointerMove === "function" && props.onPointerMove(
            {
              dimension: props.dimension,
              cell: { row: props.row, column: props.column }
            },
            e
          )
        }
      }
      onMouseDown={(e) => {
        props.onMouseDown(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onPointerDown={(e) => {
        typeof props.onPointerDown === "function" && props.onPointerDown(
          {
            dimension: props.dimension,
            cell: { row: props.row, column: props.column }
          },
          e
        )
      }}
      onPointerUp={(e) => {
        typeof props.onPointerUp === "function" && props.onPointerUp(
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
        overflow: 'hidden',
        width: props.dimension.width,
        height: props.dimension.height,
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}

Cell.defaultProps = {
  onMouseEnter: () => { },
  onMouseDown: () => { },
  onMouseUp: () => { },
  onMouseOver: () => { },
  onDrop: () => { }
}
