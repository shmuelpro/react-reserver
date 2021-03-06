import React, { useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars
} from 'react-reserver'
import styles from './basicexamples.module.css'
import { hebnames } from './testdata'
import { dateRange } from './helpers'

export default function RightToLeft(props) {
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
        cellClassName={styles.row_cell}
        columnTitleClassName={styles.row}
        dir='rtl'
        columnTitles={(columnCount) => {
          return dateRange(new Date(), columnCount, 'days').map(
            (val, index) => {
              return (
                <div
                  key={index}
                  style={{
                    background: '#12D3CF',
                    height: '100%',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  {val}
                </div>
              )
            }
          )
        }}
        rowTitles={() => {
          return hebnames.map((val, index) => {
            return (
              <div
                key={val}
                className={styles.simple_cell}
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
            const nBars = resizeBars(bars, props)
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
