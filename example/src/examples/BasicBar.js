import React from 'react'
import Reserver, {
  Tag,
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import { getRandomColor } from './helpers'
export default function BasicPlusPlus(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )
  return (
    <Reserver
      mouseDownCell={(props) => {
        const newbar = createBar(props.dimension, props.cell)
        newbar.style = { background: getRandomColor() }
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
    >
      {({ dimension }) => {
        return bars.map((bar) => {
          console.log(
            <Tag style={{ color: '#fff', width: dimension * bar.length }}>
              {bar.length} Days
            </Tag>
          )
          return (
            <Bar
              key={bar.id}
              {...bar}
              style={{
                ...bar.style,

                ...getPosition(bar.row, bar.column, bar.dimension)
              }}
            >
              <Tag style={{ color: '#fff', width: dimension * bar.length }}>
                {bar.length} Days
              </Tag>
            </Bar>
          )
        })
      }}
    </Reserver>
  )
}
