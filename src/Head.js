import React from 'react'
import styles from './style.css'
import RowTitle from './RowTitle'
export default function Head(props) {
  return (
    <div
      role='columnheader'
      className={props.rowTitleClassName}
    >
        dimension={{ height: props.dimension.height, width: props.rowTitleWidth }}
      )}
      {props.columnTitles.map((headitem, i) => {
        return (
          <div
            aria-colindex={i}
            key={i}
            dimension={props.dimension}
          >
            {headitem}
          </div>
        )
      })}

      {props.dir === 'rtl' && (
          dimension={{ height: props.dimension.height, width: props.rowTitleWidth }}
      )}
    </div>
  )
}

Head.defaultProps = {
  onMouseOverCell:()=>{}
}