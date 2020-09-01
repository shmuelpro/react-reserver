import React, { useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  Peg
} from 'react-reserver'
import moment from 'moment'

import {
  SimpleContextMenu,
  ContextMenuItem
} from '../components/SimpleContextMenu'
import '../components/SimpleContextMenu/menuStyle.css'
import styles from './basicexamples.module.css'
import { usePrevious, useKeyPress } from './hooks'
export default function ContentCrosshairs(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )
  const [startDate] = useState(moment('01-08-2020', 'DD-MM-YYYY'))
  const shiftPressed = useKeyPress('Shift')
  const wasPressed = usePrevious(shiftPressed)

  const [content, setContent] = useState({})
  const [currentDateRoom, setCurrentDateRoom] = useState({ date: '', room: '' })
  const [contextMenuState, setContextMenuState] = useState({
    visibile: false,
    top: 0,
    left: 0
  })

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        Start date:{' '}
        <span className='button button--success'>
          {' '}
          {startDate.format('LL')}
        </span>
      </div>
      <Reserver
        cellClassName={styles.row_cell}
        content={content}
        mouseDownCell={(props) => {
          const newbar = createBar(props.dimension, props.cell)
          addBar(newbar)
          setIsEditing(true)
        }}
        mouseEnterCell={(props, event) => {
          if (isEditing) {
            const nBars = resizeBars(bars, props)
            setBars(nBars)
          } else if (shiftPressed) {
            const nContent = {}
            ;[...Array(props.cell.column + 1)].forEach((nu, i) => {
              nContent[`r${props.cell.row}c${i}`] = <Peg />
            })
            ;[...Array(props.cell.row + 1)].forEach((nu, i) => {
              nContent[`r${i}c${props.cell.column}`] = <Peg />
            })

            setContextMenuState({
              visible: true,
              top: event.clientY,
              left: event.clientX + 20
            })
            setContent(nContent)
            setCurrentDateRoom({
              room: `Room: ${props.cell.row + 1}`,
              date: startDate
                .clone()
                .add(props.cell.column, 'days')
                .format('LL')
            })
          }
          if (!shiftPressed && wasPressed) {
            setContent({})
            setContextMenuState({ visibile: false })
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
      <SimpleContextMenu className='cmenu' {...contextMenuState}>
        <ContextMenuItem>{currentDateRoom.date}</ContextMenuItem>
        <ContextMenuItem>{currentDateRoom.room}</ContextMenuItem>
      </SimpleContextMenu>
    </div>
  )
}
