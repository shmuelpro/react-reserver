import React, { useEffect, useRef, useState } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBars,
  finishEditingBars,
  Peg,
  Tag,
  evaluatePosition
} from 'react-reserver'
import moment from 'moment'

import { projectUnits } from './testdata'
import { resolveRow, resolveDateDiff, resolveDate, dateRange } from './helpers'

const arrowMarker = [
  {
    type: 'marker',
    id: 'arrow',
    viewBox: '0 -5 10 10',
    refX: '8',
    refY: '0',
    markerWidth: '10',
    markerHeight: '10',
    orient: 'auto',
    children: [{ type: 'path', d: 'M0,-5L10,0L0,5' }]
  }
]

function useStyle() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {}
  }
  const el = useRef(document.createElement('style'))

  useEffect(() => {
    el.current.type = 'text/css'

    // Add it to the head of the document

    const head = document.querySelector('head')
    head.appendChild(el.current)

    // At some future point we can totally redefine the entire content of the style element
  }, [])

  const setStyle = (newStyles) => {
    el.current.innerHTML = newStyles
  }

  return setStyle
}

function buildElements(elements) {
  const frag = document.createDocumentFragment()
  elements.forEach((element) => {
    frag.appendChild(buildElement(element))
  })
  return frag
}

function buildElement(elementAttributes) {
  const element = document.createElementNS(
    'http://www.w3.org/2000/svg',
    elementAttributes.type
  )
  Object.keys(elementAttributes).forEach((key) => {
    if (key !== 'type' && key !== 'children') {
      element.setAttribute(key, elementAttributes[key])
    }
  })

  if (Array.isArray(elementAttributes.children)) {
    console.log(elementAttributes.children)
    element.appendChild(buildElements(elementAttributes.children))
  }

  return element
}

function useSVG(attributes, defs) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {}
  }

  const el = useRef(
    document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  )

  useEffect(() => {
    Object.keys(attributes).forEach((key) => {
      let value = attributes[key]

      if (key === 'style') {
        let svgStyle = ''
        Object.keys(value).forEach((styleKey) => {
          let styleValue = value[styleKey]
          if (typeof attributes[styleKey] === 'number') {
            styleValue = styleValue + 'px'
          }
          svgStyle += `${styleKey}:${styleValue};`
        })

        value = svgStyle
      }

      el.current.setAttribute(key, value)
    })

    // attach container to document
    const body = document.querySelector('body')
    body.appendChild(el.current)
    // Add it to the head of the document

    if (defs) {
      const defsElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'defs'
      )
      const defElements = buildElements(defs)

      defsElement.appendChild(defElements)

      el.current.appendChild(defsElement)
    }

    return () => {
      body.removeChild(el.current)
    }

    // At some future point we can totally redefine the entire content of the style element
  }, [JSON.stringify(attributes), JSON.stringify(defs)])

  const setSVG = (elementsAttributes) => {
    el.current.innerHTML = ''
    const elements = buildElements(elementsAttributes)
    el.current.appendChild(elements)
  }

  return setSVG
}

function Month(props) {
  return (
    <div
      style={{
        width: props.width,
        display: 'inline-block',
        color: '#adb3b8',
        paddingLeft: '10px',
        borderLeft: '1px solid #d2d2d2'
      }}
    >
      {props.children}{' '}
    </div>
  )
}

function generateColumnTitles(props) {
  return dateRange(props.date, props.columnCount, 'days').map((val, index) => {
    return (
      <div
        key={val}
        style={{
          background: props.titleRange[index] ? '#1ca3f9' : '#fff',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontWeight: 500
        }}
        onMouseOver={() =>
          props.setPointerLocation(
            calculatePointerLocation(
              index,
              props.cellDimesions.width,
              props.rowTitleWidth,
              props.columnTitleHeight
            )
          )
        }
        onClick={() => {
          console.log(isDragging)
        }}
      >
        <div>{val}</div>
      </div>
    )
  })
}

function useGenerateMonths(count, startDate, width, rowTitleWidth = 0) {
  const [divs, setDivs] = useState([])

  let currentMonth = startDate.format('MMMM')
  let currentWidth = 0
  useEffect(() => {
    const tDivs = []
    ;[...Array(count)].forEach((n, i) => {
      const evaluatedMonth = startDate.clone().add(i, 'days').format('MMMM')

      if (currentMonth !== evaluatedMonth && currentWidth > 0) {
        tDivs.push(
          <Month key={currentMonth} width={currentWidth}>
            {currentMonth}
          </Month>
        )
        currentWidth = 0
        currentMonth = evaluatedMonth
      }

      currentWidth += width
    })

    if (currentWidth > 0) {
      tDivs.push(
        <Month key={currentMonth} width={currentWidth}>
          {currentMonth}
        </Month>
      )
    }

    setDivs(tDivs)
  }, [count, startDate.format('MMMM'), width])

  return divs
}

function generatePathString(path) {
  return `M ${path.start.x} ${path.start.y} C  ${path.centerA.x} ${path.centerA.y}, ${path.centerB.x} ${path.centerB.y} ,${path.center.x} ${path.center.y}  S ${path.endA.x} ${path.endA.y}, ${path.end.x} ${path.end.y}`
}

function generateAdditionalPoints(start, center, end) {
  const centerA = { x: start.x + 100, y: start.y }
  const centerB = { x: start.x + 100, y: center.y }
  const endA = { x: end.x - 150, y: end.y }

  return { centerA, centerB, endA }
}

function generatePath(fromBar, toBar, rowTitleWidth, columnTitleHeight) {
  const startLine = calculateLinePoint(
    fromBar.column + fromBar.length,
    fromBar.dimension.width,
    columnTitleHeight,
    fromBar.row,
    fromBar.dimension.height,
    rowTitleWidth
  )
  const endLine = calculateLinePoint(
    toBar.column,
    toBar.dimension.width,
    columnTitleHeight,
    toBar.row,
    toBar.dimension.height,
    rowTitleWidth
  )
  const centerPoint = calculateCenterPoint(startLine, endLine)

  const points = generateAdditionalPoints(startLine, centerPoint, endLine)

  return { start: startLine, center: centerPoint, ...points, end: endLine }
}

function SVGOverlay(props) {
  return (
    <div
      style={{
        pointerEvents: 'none',
        zIndex: '999',
        position: 'absolute',
        ...props.dimensions
      }}
    >
      <svg
        viewBox={`0 0 ${props.dimensions.width} ${props.dimensions.height}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <marker
            id='arrow'
            viewBox='0 -5 10 10'
            refX='8'
            refY='0'
            markerWidth='10'
            markerHeight='10'
            orient='auto'
          >
            <path d='M0,-5L10,0L0,5' />
          </marker>
        </defs>

        {props.bars.flatMap((bar, index) => {
          if (props.exceptions['from' + bar.id]) {
            return []
          }

          if (bar.moving) {
            return []
          }

          if (bar.to) {
            const toBarIndex = props.bars.findIndex((b) => {
              return b.id === bar.to
            })

            const path = generatePath(
              bar,
              props.bars[toBarIndex],
              props.rowTitleWidth,
              props.columnTitleHeight
            )

            return (
              <path
                key={props.bars[toBarIndex].id + '=>' + bar.id}
                d={generatePathString(path)}
                stroke='black'
                fill='transparent'
                markerEnd='url(#arrow)'
              />
            )
          }

          return []
        })}

        {/* props.bars.flatMap((bar, index) => {
          const toBarIndex = props.bars.findIndex(((b) => { return b.id === bar.to }))
          const circles = [];

          if (toBarIndex > -1) {
            const path = generatePath(bar, props.bars[toBarIndex], props.rowTitleWidth, props.columnTitleHeight)

            circles.push(< circle cx={path.start.x} cy={path.start.y} r="3" fill="#FFA07A" zindex={10000} />)
            circles.push(< circle cx={path.centerA.x} cy={path.centerA.y} r="3" fill="#FA8072" zindex={10000} />)
            circles.push(< circle cx={path.centerB.x} cy={path.centerB.y} r="3" fill="blue" zindex={10000} />)
            circles.push(< circle cx={path.center.x} cy={path.center.y} r="3" fill="green" zindex={10000} />)
            circles.push(< circle cx={path.end.x - 150} cy={path.end.y} r="3" fill="#FF6347" zindex={10000} />)


            circles.push(< circle cx={path.end.x} cy={path.end.y} r="3" fill="#FF4500" zindex={10000} />)


          }

          return circles

        })
      */}

        <circle
          cx={props.pointerLocation.x}
          cy={props.pointerLocation.y}
          r='5'
          fill='#13aaf5'
        />

        <line
          x1={props.pointerLocation.x}
          y1={props.pointerLocation.y}
          x2={props.pointerLocation.x}
          y2={props.dimensions.height}
          stroke='#13aaf5'
        />
      </svg>
    </div>
  )
}

function calculatePointerLocation(
  column,
  columnWidth,
  rowTitleWidth,
  columnTitleHeight
) {
  return {
    x: column * columnWidth + columnWidth / 2 + rowTitleWidth,
    y: columnTitleHeight
  }
}

function calculateCenterPoint(startLine, endLine) {
  return {
    x: (startLine.x - endLine.x) / 2 + endLine.x,
    y: (endLine.y - startLine.y) / 2 + startLine.y
  }
}

function calculateLinePoint(
  column,
  columnWidth,
  columnTitleHeight,
  row,
  rowHeight,
  rowTitleWidth
) {
  return {
    x: column * columnWidth + rowTitleWidth,
    y: (row + 0.5) * rowHeight + columnTitleHeight
  }
}

const barTemplate = {
  style: '',
  column: '',
  dimension: '',
  end: '',
  id: '',
  img: '',
  length: '',
  row: '',
  start: '',
  text: '',
  to: '',
  from: '',
  type: '',
  editing: '',
  className: '',
  selectedCell: '',
  moving: '',
  draggingLeft: '',
  draggingTop: '',
  content: '',
  lastContent: '',
  firstContent: ''
}
function clearProps(props, template) {
  const finalObject = {}
  Object.keys(template).forEach((key) => {
    if (props[key] !== undefined) {
      finalObject[key] = props[key]
    }
  })

  return finalObject
}

export default function ProjectTimeline(props) {
  const {
    bars,
    isEditing,
    setIsEditing,
    addBar,
    setBars,
    editBar
  } = useReserver(reserverReducer, [])

  const [svgException, setSvgException] = useState([])
  const windowRef = useRef()
  const startDate = moment('26/04/2019', 'DD/MM/YYYY')
  const columnTitleHeight = 30
  const rowTitleWidth = 200
  const cellDimesions = { width: 80, height: 40 }
  const [daysTotal, setDaysTotal] = useState(0)
  const [projectDimensions, setProjectDimensions] = useState({
    width: 0,
    height: 0
  })
  const [SVGStyle, setSVGStyle] = useState({ width: 0, height: 0 })
  const setSVG = useSVG(SVGStyle)
  const [pointerLocation, setPointerLocation] = useState({ x: 50, y: 50 })
  const [isDragging, setIsDragging] = useState(false)

  const [draggingElement, setDraggingElement] = useState({})

  const [titleRange, setTitleRange] = useState({})

  const reserverRef = useRef()

  const monthNames = useGenerateMonths(
    daysTotal,
    startDate,
    cellDimesions.width,
    rowTitleWidth
  )

  const setStyle = useStyle()

  useEffect(() => {
    const windowSize = windowRef.current.getBoundingClientRect()
    const { width, height } = reserverRef.current.getBoundingClientRect()

    setProjectDimensions({ width, height, winWidth: windowSize.width })
    setPointerLocation(
      calculatePointerLocation(
        0,
        cellDimesions.width,
        rowTitleWidth,
        columnTitleHeight
      )
    )
  }, [reserverRef.current])

  useEffect(() => {
    const { width, height } = reserverRef.current.getBoundingClientRect()

    setSVGStyle({
      width,
      height,
      style: {
        'pointer-events': 'none',
        position: 'absolute',
        top: reserverRef.current.offsetTop,
        left: reserverRef.current.offsetLeft
      }
    })
  }, [reserverRef.current, monthNames])

  useEffect(() => {
    const nBars = projectUnits.map((bar) => {
      bar.dimension = cellDimesions
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
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: projectDimensions.width - rowTitleWidth,
            marginLeft: rowTitleWidth,
            marginBottom: '5px'
          }}
        >
          {monthNames}
        </div>

        <div
          ref={windowRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <SVGOverlay
            exceptions={svgException}
            bars={bars}
            rowTitleWidth={rowTitleWidth}
            dimensions={projectDimensions}
            columnTitleHeight={columnTitleHeight}
            pointerLocation={pointerLocation}
          />
          <Reserver
            ref={reserverRef}
            width={projectDimensions.winWidth}
            columnTitleHeight={columnTitleHeight}
            dimension={cellDimesions}
            rowTitleWidth={rowTitleWidth}
            rowTitles={() => {
              return [
                { name: 'Foundational', rows: 6 },
                { name: 'Travel + lodging', rows: 1 }
              ].flatMap((item) => {
                return [...Array(item.rows)].map((n, i) => {
                  if (i === 0) {
                    return (
                      <div>
                        <div style={{ padding: '10px' }}>{item.name}</div>
                      </div>
                    )
                  }
                  return <div />
                })
              })
            }}
            columnTitles={{
              func: (columnCount) => {
                setDaysTotal(columnCount)
                return generateColumnTitles({
                  date: startDate,
                  columnCount,
                  titleRange,
                  setPointerLocation,
                  cellDimesions,
                  rowTitleWidth,
                  columnTitleHeight
                })
              },
              titleRange
            }}
            content={(columnCount, rowCount) => {
              const content = {}

              ;[...Array(rowCount)].forEach((unused, r) => {
                ;[...Array(columnCount)].forEach((unused, c) => {
                  content[`r${r}c${c}`] = (
                    <Peg
                      style={{ background: c % 2 == 0 ? '#EDF1F2' : '#F6F8F9' }}
                    />
                  )
                })
              })

              return content
            }}
            mouseDownCell={(props) => {
              const newbar = createBar(props.dimension, props.cell)

              const selectionRange = {}

              ;[...Array(newbar.length)].forEach((na, i) => {
                selectionRange[i + newbar.column] = true
              })

              setTitleRange(selectionRange)

              addBar(newbar)
              setDraggingElement(newbar)
              setIsEditing(true)
            }}
            mouseMoveGrid={(e) => {
              if (isDragging) {
                const svgElements = []

                if (draggingElement.to) {
                  const pageX = e.pageX
                  const pageY = e.pageY

                  const target = e.currentTarget.getBoundingClientRect()

                  const relativeX = e.pageX - target.left
                  const relativeY = e.pageY - target.top

                  // e.pageX - draggingElement.draggingLeft
                  const end = svgException.to
                  const start = {
                    x: relativeX + svgException.barEnd.x,
                    y: relativeY + svgException.barEnd.y
                  }
                  const center = calculateCenterPoint(start, end)

                  const points = generateAdditionalPoints(start, center, end)

                  // console.log(generatePathString({ start, center, end }));

                  svgElements.push({
                    type: 'path',
                    d: generatePathString({ ...points, start, center, end }),
                    stroke: 'black',
                    fill: 'transparent',
                    'marker-end': 'url(#arrow)'
                  })
                }

                if (draggingElement.from) {
                  const target = e.currentTarget.getBoundingClientRect()

                  const relativeX = e.pageX - target.left
                  const relativeY = e.pageY - target.top

                  // e.pageX - draggingElement.draggingLeft
                  const end = {
                    x: relativeX - svgException.barStart.x,
                    y: relativeY - svgException.barStart.y
                  }
                  const start = svgException.from
                  const center = calculateCenterPoint(start, end)

                  const points = generateAdditionalPoints(start, center, end)

                  svgElements.push({
                    type: 'path',
                    d: generatePathString({ ...points, start, center, end }),
                    stroke: 'black',
                    fill: 'transparent',
                    'marker-end': 'url(#arrow)'
                  })
                }
                setSVG(svgElements)

                setStyle(
                  `.reserver-drag{transform: translate(${
                    e.pageX - draggingElement.draggingLeft
                  }px,${e.pageY - draggingElement.draggingTop}px)}`
                )
              }
            }}
            mouseEnterCell={(props) => {
              if (isDragging && !isEditing) {
                const selectionRange = {}
                ;[...Array(draggingElement.length)].forEach((na, i) => {
                  selectionRange[
                    i + props.cell.column - draggingElement.selectedCell
                  ] = true
                })

                setTitleRange(selectionRange)
              }

              if (isEditing) {
                const ebar = evaluatePosition(draggingElement, props.cell)
                console.log(ebar.length)
                const selectionRange = {}

                ;[...Array(ebar.length)].forEach((na, i) => {
                  selectionRange[i + ebar.column] = true
                })

                setTitleRange(selectionRange)
                setDraggingElement(ebar)
                editBar(ebar)
              }
            }}
            mouseUpCell={({ cell }) => {
              if (isDragging) {
                const bar = {
                  ...draggingElement,
                  row: cell.row,
                  column: cell.column - draggingElement.selectedCell,
                  moving: false
                }

                editBar(bar)
                setSVG([])
                setSvgException({})
                setStyle(`.reserver-drag{transform: translate(0px,0px)}`)
                setTitleRange({})
                setIsDragging(false)
              }

              if (isEditing) {
                const dBars = finishEditingBars(bars)
                setBars(dBars)
                setTitleRange({})
                setIsEditing(false)
              }
            }}
          >
            {({ columnTitleHeight, rowTitleWidth }) => {
              return bars.map((bar) => {
                return (
                  <Bar
                    draggable
                    {...bar}
                    onDragStart={(e, bar) => {
                      if (isEditing) {
                        e.preventDefault()
                        return
                      }

                      const target = e.currentTarget.getBoundingClientRect()

                      const relativeX = e.pageX - target.left
                      const relativeY = e.pageY - target.top

                      const selectedCell = parseInt(
                        relativeX / bar.dimension.width
                      )

                      const element = {
                        ...bar,
                        selectedCell: selectedCell,
                        moving: true,
                        draggingLeft: e.pageX,
                        draggingTop: e.pageY
                      }

                      const exceptionObject = {}

                      exceptionObject.barEnd = {
                        x: bar.dimension.width * bar.length - relativeX,
                        y:
                          bar.dimension.height -
                          bar.dimension.height * 0.5 -
                          relativeY
                      }

                      exceptionObject.barStart = {
                        x: relativeX,
                        y: relativeY - bar.dimension.height * 0.5
                      }

                      if (bar.to) {
                        const toBarIndex = bars.findIndex((b) => {
                          return b.id === bar.to
                        })
                        const toBar = bars[toBarIndex]
                        if (toBarIndex > -1) {
                          console.log(bars)
                          console.log('toColumn', toBar.column)
                          exceptionObject.to = calculateLinePoint(
                            toBar.column,
                            toBar.dimension.width,
                            columnTitleHeight,
                            toBar.row,
                            toBar.dimension.height,
                            rowTitleWidth
                          )
                        }
                      }
                      if (bar.from) {
                        const fromBarIndex = bars.findIndex((b) => {
                          return b.id === bar.from
                        })
                        const fromBar = bars[fromBarIndex]
                        exceptionObject['from' + fromBar.id] = fromBar.id
                        if (fromBarIndex > -1) {
                          const location = calculateLinePoint(
                            fromBar.column,
                            fromBar.dimension.width,
                            columnTitleHeight,
                            fromBar.row,
                            fromBar.dimension.height,
                            rowTitleWidth
                          )
                          exceptionObject.from = {
                            x:
                              fromBar.dimension.width * fromBar.length +
                              location.x,
                            y: location.y
                          }
                        }
                      }
                      setSvgException(exceptionObject)
                      editBar(element)
                      setDraggingElement(element)
                      setIsDragging(true)
                    }}
                    key={bar.id}
                    className={bar.moving ? 'reserver-drag' : ''}
                    lastContent={
                      <div style={{ zIndex: 10000 }}>
                        <img
                          style={{ float: 'right' }}
                          onMouseDown={() => {
                            const newbar = {
                              ...bar,
                              stick: 'left',
                              editing: true
                            }
                            editBar(newbar)
                            setDraggingElement(newbar)
                            setIsEditing(true)
                          }}
                          src='/react-reserver/resources/images/dragicon.png'
                        />
                      </div>
                    }
                    style={{
                      ...bar.style,
                      borderRadius: '6px',
                      pointerEvents:
                        bar.editing || bar.moving ? 'none' : 'auto',
                      zIndex: 1000,
                      ...getPosition(
                        bar.row,
                        bar.column,
                        bar.dimension,
                        rowTitleWidth,
                        columnTitleHeight
                      )
                    }}
                  >
                    <Tag style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ margin: '5px', width: 25 }}>
                        <img
                          style={{ borderRadius: '100%' }}
                          src={`/react-reserver/resources/images/${
                            bar.img || 'default.jpg'
                          }`}
                        />
                      </div>
                      <div
                        style={{
                          width: bar.length * bar.dimension.width - 40,
                          overflow: 'hidden',
                          color: '#fff'
                        }}
                      >
                        {bar.text}
                      </div>
                    </Tag>
                  </Bar>
                )
              })
            }}
          </Reserver>
        </div>
      </div>
    </>
  )
}
