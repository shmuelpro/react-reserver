import React, { useEffect, useRef, useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars,
  Peg
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import { resolveDate, dateRange } from './helpers'
export default function DesignedProject(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
    reserverReducer,
    []
  )

  const [resDim, setResDim] = useState({})
  const [circleLoc, setCircleLoc] = useState({ x: 50, y: 50 })
  const reef = useRef()
  

  useEffect(() => {
   
    const { width, height } = reef.current.getBoundingClientRect()
    const x = { width, height }
    setResDim(x)
    console.log(x)

  }, [reef.current])

  function moveCircle(column) {
    console.log(resDim.width,column,resDim.width/20,(resDim.width/20)*column)
   const columns = resDim.width/20;
   
setCircleLoc({x:column * 20 + 8,y:8})

  }

  return (
    <div style={{display: "flex",justifyContent: "center"}}>
      <div style={{ pointerEvents: "none", zIndex: "999", position: "absolute", ...resDim }}>
      
          <svg viewBox={`0 0 ${resDim.width} ${resDim.height}`} xmlns="http://www.w3.org/2000/svg">
            <circle cx={circleLoc.x} cy={20   } r="5" />
            <line x1={circleLoc.x} y1="20" x2={circleLoc.x} y2={resDim.height} stroke="black" />
          </svg>

      
      </div>
      <Reserver
        ref={reef}
        mouseOverCellHead={(e, c) => moveCircle(c)}
        headCellClassName={"na"}
        columnTitles={(columnCount) => {
          return dateRange(new Date(), columnCount, 'days').map(
            (val, index) => {
              return (
                <div
                  key={val}
                  style={{
                    background: '#12D3CF',
                    height: '100%',
                    textAlign: 'center',
                    display: "flex",
                    position: "relative",
                    pointerEvents: "none"
                  }}
                >

                  <div>{val}</div>
                </div>
              )
            }
          )
        }}
        content={(columnCount, rowCount) => {

          const con = {};

          [...Array(rowCount)].forEach((unused, r) => {
            [...Array(columnCount)].forEach((unused, c) => {

              con[`r${r}c${c}`] = <Peg style={{ background: (c % 2 == 0) ? "#EDF1F2" : "#F6F8F9" }}></Peg>
            })
          })

          return con


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
        cellClassName={"na"}
      >
        {() => {
          return bars.map((bar) => {
            return (
              <Bar
                key={bar.id}
                {...bar}
                content={()=>{}}
                style={{
                  borderRadius: "6px",
                  ...bar.style,
                  ...getPosition(bar.row, bar.column, bar.dimension)
                  
                }}
              >
                <div><span style={{ background: "red", width: "3px", height: "6px", display: "block" }}></span> bla</div>
              </Bar>
            )
          })
        }}
      </Reserver>
    </div>
  )
}
