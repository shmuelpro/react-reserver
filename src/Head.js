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
      {props.dir === 'ltr' && (
        <RowTitle
          isVisible={props.showCanton}
          width={props.rowTitleWidth}
          dimension={props.dimension}
        />
      )}
      {props.columnTitles.map((headitem, i) => {
        return (
          <div
            aria-colindex={i}
            key={i}
            style={{
              width: props.dimension + 'px',
              height: props.dimension + 'px'
            }}
            className={props.headCellClassName  || styles.row_cell}
            onMouseOver={(e)=>{props.onMouseOverCell(e,i)}} 
          >
            {headitem}
          </div>
        )
      })}

      {props.dir === 'rtl' && (
        <RowTitle
          isVisible={props.showCanton}
          width={props.rowTitleWidth}
          dimension={props.dimension}
        />
      )}
    </div>
  )
}

Head.defaultProps = {
  onMouseOverCell:()=>{}
}