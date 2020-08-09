import React from 'react'
import styles from './style.css'
export default function Head(props) {
  return (
    <div
      role='columnheader'
      className={
        props.columnTitles.length > 0 ? styles.row : styles.row_invisible
      }
      style={{ height: props.dimension }}
    >
      {props.dir === "ltr" && <RowTitle
        isVisible={rowTitles.length > 0}
        width={props.rowTitleWidth}
        dimension={props.dimension}
      >
      </RowTitle>}
      {props.columnTitles.map((headitem, i) => {
        return (
          <div
            aria-colindex={i}
            key={i}
            style={{
              width: props.dimension + 'px',
              height: props.dimension + 'px'
            }}
            className={styles.row_cell}
          >
            {headitem}
          </div>
        )
      })}

      {props.dir === "rtl" && <RowTitle
        isVisible={rowTitles.length > 0}
        width={props.rowTitleWidth}
        dimension={props.dimension}
      >
      </RowTitle>}
    </div>
  )
}
