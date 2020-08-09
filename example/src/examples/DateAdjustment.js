import React, { useState, useEffect } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBar,
  finishEditingBars,
  Tag
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import moment from 'moment'

import  './example.css'


const preMadeReservations = [
  { id: 1, start: "29-07-2020", end: "04-08-2020", guestName: 'Max Lindsey', roomId: 4 },
  { id: 3, start: "03-08-2020", end: "11-08-2020", guestName: 'Max Lindsey', roomId: 10 },
  { id: 4, start: "03-06-2020", end: "11-09-2020", guestName: 'Max Lindsey', roomId: 11 },
  { id: 2, start: "15-08-2020", end: "02-09-2020", guestName: 'James Elinor', roomId: 10 }
]

const rooms = {
  4: { id: 4, name: "Deluxe", hosts: "4 People", row: 3 },
  10: { id: 10, name: "Basic", hosts: "2 People", row: 8 },
  11: { id: 11, name: "Basic", hosts: "2 People", row: 6 }
}


function resolveColumnStart(startDate, date, format = "DD-MM-YYYY") {

  var a = moment(startDate, format).startOf('day');
  var b = moment(date, format).startOf('day');
  return b.diff(a, 'days')
}

function resolveRow(rooms, roomId) {

  return rooms[roomId].row;
}

function resolveLength(start, end, format = "DD-MM-YYYY") {

  var a = moment(start, format).startOf('day');
  var b = moment(end, format).startOf('day');
  return b.diff(a, 'days')
}

const FirstContent = (props) => {

  return (<div
    onMouseDown={() => {      
      props.editBar({ ...props.bar, stick: "right", editing: true })
      props.setIsEditing(true)
    }}
    className="first_cell"
    style={{ borderLeft: "3px solid red", zIndex: "100000", ...props.style }}> </div>)
}

function positionToDate( bar,startDate, unit = "unit", format = "DD-MM-YYYY") {
  bar.start = startDate.clone().add(bar.column, unit).format(format);
  bar.end = startDate.clone().add(bar.column + bar.length, unit).format(format);
  return bar;

}

export default function DateAdjustment(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars, editBar } = useReserver(
    reserverReducer,
    []
  )
  const [startDate, setStartDate] = useState(moment("01-08-2020", "DD-MM-YYYY"))


  useEffect(() => {

    const nBars = preMadeReservations.map((bar) => {
      if (bar.start && bar.end) {
        
        bar.length = resolveLength(bar.start, bar.end)
      }

      if (bar.start && bar.end) {
        bar.column = resolveColumnStart(startDate, bar.start)
      }

      if (bar.roomId) {
        bar.row = resolveRow(rooms, bar.roomId)

      }
      return bar;
    })


    setBars(nBars)

  }, [preMadeReservations])





  return (
    <Reserver
      mouseDownCell={(props) => {

        const newbar = createBar(props.dimension, props.cell)
        addBar(newbar)
        setIsEditing(true)
      }}
      mouseEnterCell={(props) => {
        if (isEditing) {

          const nBars = resizeBar(bars, props, (bar) => {
           
            return positionToDate(bar,startDate);
          })
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
            bar.leftOverflow = true;
            bar.length = bar.length + bar.column;
            bar.column = 0;
          }

          if (columnCount < bar.column + bar.length) {
            bar.rightOverflow = true;
            bar.length = columnCount - bar.column

          }

          return (
            <Bar
              key={bar.id}
              {...bar}
              style={{
                overflow: "hidden",
                pointerEvents: bar.editing ? "none" : "auto",
                ...bar.style,
                ...getPosition(bar.row, bar.column, dimension)
              }}

              firstContent={<FirstContent bar={bar} setIsEditing={setIsEditing} editBar={editBar} />}
              lastContent={<div style={{ background: "purple" }}></div>}
              content={
                {
                  3: <div onClick={() => { console.log("you clicked the red one") }} style={{ background: "red" }}></div>

                }
              }
            >
              <Tag style={{ pointerEvents: "none", color: "#fff", width: dimension * bar.length }}>{bar.guestName}</Tag>
            </Bar>
          )
        })
      }}
    </Reserver>
  )
}
