import React from 'react'
import styles from './style.css'
import RowTitle from './RowTitle'
export default function Head(props) {
  return (
    <div
      role='columnheader'
      className={
        props.columnTitles.length > 0 ? styles.row : styles.row_invisible
      }
      style={{ height: props.dimension }}
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