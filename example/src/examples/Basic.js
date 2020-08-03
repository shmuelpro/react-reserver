import React from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBar
} from 'react-reserver'
import 'react-reserver/dist/index.css'
export default function Basic(props) {
  const {
    bars,
    isEditing,
    setIsEditing,
    addBar,
    setBars,
    editBar
  } = useReserver(reserverReducer, [])
  return (
    <Reserver
      mouseDownCell={(props) => {
        const newbar = createBar(props.dimension, props.cell)
        addBar(newbar)
      }}
      mouseEnterCell={(props) => {
        const nBars = resizeBar(bars, props)
        setBars(nBars)
      }}
      mouseUpCell={() => {
        const dBars = bars.map((bar) => {
          if (bar.editing) {
            return {
              ...bar,
              editing: false,
              style: { pointerEvents: 'auto' }
            }
          }
          return bar
        })

        setBars(dBars)
        setIsEditing(false)
      }}
    >
      {bars.map((bar) => {
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
      })}
    </Reserver>
  )
}
