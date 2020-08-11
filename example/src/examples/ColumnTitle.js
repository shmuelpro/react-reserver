import React, { useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars
} from 'react-reserver'
import 'react-reserver/dist/index.css'

import { resolveDate, dateRange } from './helpers'

export default function ColumnTitle(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )
  const [selectedDate, setSelectedDate] = useState('')
  return (
    <>
      {selectedDate !== '' && (
        <div className='alert alert--success' role='alert'>
          You selected <strong>{selectedDate}</strong>
        </div>
      )}
      <Reserver
        columnTitles={(columnCount) => {
          return dateRange(new Date(), columnCount, 'days').map(
            (val, index) => {
              return (
                <div
                  key={val}
                  style={{
                    background: '#12D3CF',
                    height: '100%',
                    textAlign: 'center'
                  }}
                  onClick={() => {
                    setSelectedDate(
                      resolveDate(
                        new Date(),
                        index,
                        'days',
                        'dddd, MMMM Do YYYY, h:mm:ss a'
                      )
                    )
                  }}
                >
                  {val}
                </div>
              )
            }
          )
        }}
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
      >
        {({ columnTitleHeight }) => {
          return bars.map((bar) => {
            return (
              <Bar
                key={bar.id}
                {...bar}
                style={{
                  ...bar.style,
                  ...getPosition(
                    bar.row,
                    bar.column,
                    bar.dimension,
                    0,
                    columnTitleHeight
                  )
                }}
              />
            )
          })
        }}
      </Reserver>
    </>
  )
}
