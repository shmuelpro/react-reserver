import React from 'react'
import Cell from './Cell'
export default function Head(props) {
  return (
    <div
      role='columnheader'
      className={props.rowTitleClassName}
      style={{
        display: props.isVisible ? 'flex' : 'none',
        height: props.dimension.height
      }}
    >
      {props.dir === 'ltr' && (
        <Cell
          dimension={{
            height: props.dimension.height,
            width: props.rowTitleWidth
          }}
          className={props.cantonClassName}
        >
          {props.canton}
        </Cell>
      )}
      {props.columnTitles.map((headitem, i) => {
        return (
          <Cell
            aria-colindex={i}
            key={i}
            onMouseOver={props.onMouseOverCell}
            dimension={props.dimension}
            column={i}
            row={-1}
            className={props.columnTitleClassName}
          >
            {headitem}
          </Cell>
        )
      })}
      {props.dir === 'rtl' && (
        <Cell
          dimension={{
            height: props.dimension.height,
            width: props.rowTitleWidth
          }}
          className={props.cantonClassName}
        >
          {props.canton}
        </Cell>
      )}
    </div>
  )
}

Head.defaultProps = {
  onMouseOverCell: () => {}
}
