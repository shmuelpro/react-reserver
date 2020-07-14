import React, { useEffect, useState } from 'react'
import styles from './style.css'
export default function Head(props) {
  const [headRow, setHeadRow] = useState([])

  useEffect(() => {
    if (typeof props.headRow === 'function') {
      setHeadRow(props.headRow(props.columnCount))
    } else if (Array.isArray(props.headRow)) {
      setHeadRow(props.headRow)
    }
  }, [props.headRow, props.columnCount])

  return (
    <div
      role='columnheader'
      style={{ height: props.dimension, display: 'flex' }}
    >
      <div
        className={styles.row_cell}
        style={{ width: props.rowTitleWidth, height: props.dimension + 'px' }}
      />
      {headRow.map((headitem, i) => {
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
