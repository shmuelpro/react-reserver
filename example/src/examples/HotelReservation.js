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
import Modali, { useModali } from 'modali';

import { projectUnits } from './testdata'
import {

    resolveRow,
    resolveDateDiff,
    resolveDate,
    dateRange
} from './helpers'


function useStyle() {
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
                    background: props.titleRange[index] ? 'red' : '#fff',
                    height: '100%',
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontWeight: 500
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



const cellDimesions = { width: 30, height: 30 }
export default function HotelReservation(props) {
    const {
        bars,
        isEditing,
        setIsEditing,
        addBar,
        setBars,
        editBar
    } = useReserver(reserverReducer, [])

    const [addReservationModal, toggleAddReservation] = useModali({
        animated: true,
        title: 'Are you sure?',
        message: 'Deleting this user will be permanent.',
        buttons: [
            <Modali.Button
                label="Cancel"
                isStyleCancel
                onClick={() => toggleAddReservation()}
            />,
            <Modali.Button
                label="Add"
                isStyleDefault
                onClick={() => {
                    editBar({...newReservation,text:guestName})
                    toggleAddReservation();
                }}
            />,
        ],
    });
    const windowRef = useRef()
    const startDate = moment('26/04/2019', 'DD/MM/YYYY')
    const columnTitleHeight = 30
    const rowTitleWidth = 130
   
    const [daysTotal, setDaysTotal] = useState(0)
    const [projectDimensions, setProjectDimensions] = useState({
        width: 0,
        height: 0
    })
    const [guestName, setGuestName] = useState("")
    const [newReservation, setNewReservation] = useState({})

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

    }, [reserverRef.current])



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

                    <Reserver
                        ref={reserverRef}
                        width={projectDimensions.winWidth}
                        columnTitleHeight={columnTitleHeight}
                        dimension={cellDimesions}
                        rowTitleWidth={rowTitleWidth}
                        rowTitles={() => {
                            return [
                                { name: 'Single', number: 1, background: "orange" },
                                { name: 'Single', number: 2 },
                                { name: 'Double', number: 3 },
                                { name: 'Double', number: 4 },
                                { name: 'Double', number: 5 },
                                { name: 'Presidential', number: 6 },

                            ].map((room) => {
                                return (<div>
                                    <div style={{ padding: '3px', display: "flex", alignContent: "center", background: room.background }}><div style={{ fontSize: "13px", marginRight: "10px" }}>{room.number}</div><div>{room.name}</div></div>
                                </div>)
                            })
                        }}
                        columnTitles={{
                            func: (columnCount) => {
                                setDaysTotal(columnCount)
                                return generateColumnTitles({
                                    date: startDate,
                                    columnCount,
                                    titleRange,
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
                                setStyle(
                                    `.reserver-drag{transform: translate(${
                                    e.pageX - draggingElement.draggingLeft
                                    }px,${e.pageY - draggingElement.draggingTop}px)}`
                                )
                            }
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
                        mouseEnterCell={(props) => {
                            if (isDragging && !isEditing) {
                                const selectionRange = {}  ;[...Array(draggingElement.length)].forEach((na, i) => {
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

                                setStyle(`.reserver-drag{transform: translate(0px,0px)}`)
                                setTitleRange({})
                                setIsDragging(false)

                            }

                            if (isEditing) {

                                const bar =   bars.find((bar)=>{return bar.editing })
                                setNewReservation(bar)
                                editBar({...bar,editing:false})
                                
                                setTitleRange({})
                                setIsEditing(false)

                                toggleAddReservation();
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
        <Modali.Modal {...addReservationModal}>
            <div style={{ marginLeft: "20px", padding: "2px" }}>
                Name:
                <input type="text" value={guestName} onChange={(event) => { setGuestName(event.target.value) }} />
            </div>
        </Modali.Modal>
        </>
    )
}
