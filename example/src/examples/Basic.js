import React from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars
} from 'react-reserver'
import styles from './basicexamples.module.css'
export default function BasicBar(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )

  return (
    <Reserver
      mouseDownCell={(props) => {
        const newbar = createBar(props.dimension, props.cell)
        addBar(newbar)
        setIsEditing(true)
      }}
      mouseEnterCell={(props) => {
        if (isEditing) {
          const nBars = resizeBars(bars, props)
          setBars(nBars)
        }
      }}
      mouseUpCell={() => {
        const dBars = finishEditingBars(bars)
        setBars(dBars)
        setIsEditing(false)
      }}
      cellClassName={styles.row_cell}
    >
      {() => {
        return bars.map((bar) => {
          return (
            <Bar
              key={bar.id}
              {...bar}
              style={{
                ...bar.style,
                ...getPosition(bar.row, bar.column, bar.dimension)
              }}
            />
          )
        })
      }}
    </Reserver>
  )
}
