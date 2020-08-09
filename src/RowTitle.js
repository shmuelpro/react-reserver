import React from 'react'
import styles from './style.css'
export default function RowTitle(props) {
    return (<div
        className={
            props.isVisible
                ? styles.row_cell
                : styles.row_cell_invisible
        }

        style={{
            width: props.width,
            height: props.dimension + 'px',
            overflow: "hidden"

        }}
    >
        {props.children}
    </div>)
}
