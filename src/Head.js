import React, { useEffect, useState } from 'react'
import styles from './style.css'
export default function Head(props) {
  const [columnTitleRow, setcolumnTitleRow] = useState([])

  useEffect(() => {
    if (typeof props.columnTitleRow === 'function') {
      setcolumnTitleRow(props.columnTitleRow(props.columnCount))
    } else if (Array.isArray(props.columnTitleRow)) {
      setcolumnTitleRow(props.columnTitleRow)
    }
  }, [props.columnTitleRow, props.columnCount])

  return (
    <div
      role='columnheader'
      className={columnTitleRow.length > 0 ? styles.row : styles.row_invisible}
      style={{ height: props.dimension }}
    >
      <div
        className={styles.row_cell}
        style={{ width: props.rowTitleWidth, height: props.dimension + 'px' }}
      />
      {columnTitleRow.map((headitem, i) => {
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
