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
      <div
        className={`${
          props.rowTitleWidth > 0 ? styles.row_cell : styles.row_invisible
        }`}
        style={{ width: props.rowTitleWidth, height: props.dimension + 'px' }}
      />
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
    </div>
  )
}
