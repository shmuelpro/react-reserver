import React, { useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBar
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import { names } from './testdata'

export default function RowTitle(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )

  const [selectedWorker, setSelectedWorker] = useState('')
  return (
    <>
      {selectedWorker !== '' && (
        <div className='alert alert--success' role='alert'>
          <strong>{selectedWorker}'s</strong> Card
        </div>
      )}
      <Reserver
        rowTitles={() => {
          return names.map((val, index) => {
            return (
              <div
                style={{
                  background: '#12D3CF',
                  height: '100%',
                  textAlign: 'center'
                }}
                onClick={() => {
                  setSelectedWorker(val)
                }}
              >
                {val}
              </div>
            )
          })
        }}

        rowTitleWidth={140}
        
        mouseDownCell={(props) => {
          const newbar = createBar(props.dimension, props.cell)
          addBar(newbar)
          setIsEditing(true)
        }}

        mouseEnterCell={(props) => {
          if (isEditing) {
            const nBars = resizeBar(bars, props)
            setBars(nBars)
          }
        }}
        
        mouseUpCell={() => {
          const dBars = bars.map((bar) => {
            if (bar.editing) {
              return {
                ...bar,
                editing: false,
                style: { ...bar.style, pointerEvents: 'auto' }
              }
            }
            return bar
          })

          setBars(dBars)
          setIsEditing(false)
        }}
      >
        {({ columnTitleHeight, rowTitleWidth }) => {
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
                    rowTitleWidth,
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
