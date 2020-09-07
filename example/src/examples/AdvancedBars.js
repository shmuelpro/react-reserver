import React, { useState, useEffect } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars,
  Tag,
  checkCollisions
} from 'react-reserver'

import { resolveDateDiff, resolveRow, positionToDate } from './helpers'
import { rooms, preMadeReservations } from './testdata'
import moment from 'moment'
import styles from './basicexamples.module.css'
import './example.css'

const LastContent = (props) => {
  return (
    <div
      onMouseDown={() => {
        props.editBar({ ...props.bar, stick: 'left', editing: true })
        props.setIsEditing(true)
      }}
      style={{
        borderLeft: '3px solid red',
        background: '#F2545B',
        zIndex: '100000',
        ...props.style
      }}
    >
      {' '}
    </div>
  )
}

const FirstContent = (props) => {
  return (
    <div
      onMouseDown={() => {
        props.editBar({ ...props.bar, stick: 'right', editing: true })
        props.setIsEditing(true)
      }}
      className='first_cell'
      style={{ borderLeft: '3px solid red', zIndex: '100000', ...props.style }}
    >
      {' '}
    </div>
  )
}

export default function AdvancedBars(props) {
  const {
    bars,
    isEditing,
    setIsEditing,
    addBar,
    setBars,
    editBar
  } = useReserver(reserverReducer, [])
  const [startDate] = useState(moment('01-08-2020', 'DD-MM-YYYY'))

  useEffect(() => {
    const nBars = preMadeReservations.map((bar) => {
      if (bar.start && bar.end) {
        bar.length = resolveDateDiff(bar.start, bar.end)
      }

      if (bar.start && bar.end) {
        bar.column = resolveDateDiff(startDate, bar.start)
      }

      if (bar.roomId) {
        bar.row = resolveRow(rooms, bar.roomId)
      }
      return bar
    })

    setBars(nBars)
  }, [preMadeReservations])

  return (
    <Reserver
      cellClassName={styles.row_cell}
      mouseDownCell={(props) => {
        const newbar = createBar(props.dimension, props.cell)
        addBar(newbar)
        setIsEditing(true)
      }}
      mouseEnterCell={(props) => {
        if (isEditing) {
          let nBars = resizeBars(bars, props, (bar) => {
            return positionToDate(bar, startDate)
          })

          nBars = checkCollisions(nBars)

          setBars(nBars)
        }
      }}
      mouseUpCell={() => {
        const dBars = finishEditingBars(bars)
        setBars(dBars)
        setIsEditing(false)
      }}
    >
      {({ dimension, columnCount }) => {
        return bars.map((bar) => {
          if (bar.column < 0) {
            bar.leftOverflow = true
            bar.length = bar.length + bar.column
            bar.column = 0
          }

          if (columnCount < bar.column + bar.length) {
            bar.rightOverflow = true
            bar.length = columnCount - bar.column
          }

          return (
            <Bar
              key={bar.id}
              {...bar}
              style={{
                overflow: 'hidden',
                pointerEvents: bar.editing ? 'none' : 'auto',
                ...bar.style,
                ...getPosition(bar.row, bar.column, dimension)
              }}
              firstContent={
                <FirstContent
                  bar={bar}
                  setIsEditing={setIsEditing}
                  editBar={editBar}
                />
              }
              lastContent={
                bar.rightOverflow ? (
                  <div style={{ background: 'purple' }} />
                ) : (
                  <LastContent
                    bar={bar}
                    setIsEditing={setIsEditing}
                    editBar={editBar}
                  />
                )
              }
              content={{
                3: (
                  <div
                    onClick={() => {
                      console.log('you clicked the red one')
                    }}
                    style={{
                      background: 'red',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ©
                  </div>
                )
              }}
            >
              <Tag
                style={{
                  pointerEvents: 'none',
                  color: '#fff',
                  width: dimension * bar.length
                }}
              >
                {bar.guestName}{' '}
                {bar.collisions && Object.keys(bar.collisions).length > 0 && (
                  <span>Collision detected</span>
                )}
              </Tag>
            </Bar>
          )
        })
      }}
    </Reserver>
  )
}
