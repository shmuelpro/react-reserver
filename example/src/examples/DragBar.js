import React, { useState,useEffect } from 'react'
import Reserver, {
    Tag,
    Bar,
    useReserver,
    reserverReducer,
    createBar,
    getPosition,
    resizeBar
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import { getRandomColor, isObjectEmpty } from './helpers'
import {
    SimpleContextMenu,
    ContextMenuItem
} from '../components/SimpleContextMenu'

import '../components/SimpleContextMenu/menuStyle.css'

import { usePrevious } from '../components/hooks'


export default function DragBar(props) {




    const [selectedBar, setSelectedBar] = useState({})
    const prevSelected = usePrevious(selectedBar)
    const [contextMenuState, setContextMenuState] = useState({
        visibile: false,
        top: 0,
        left: 0
    })
    const { bars, isEditing, setIsEditing, addBar, setBars, editBar, deleteBar } = useReserver(
        reserverReducer,
        []
    )


    function hoverBar(newLocation) {
        const tBars = bars.map((bar) => {

            if (bar.draggable) {
                return { ...bar, ...newLocation }
            }
            return bar

        })
        setBars(tBars)
     
    }

    function setDrag(bar) {
        setSelectedBar(bar)
        setContextMenuState({
            visible: true,
            top: event.clientY,
            left: event.clientX
        })
    }



    return (
        <>
            <Reserver
                mouseDropCell={(props) => {
                    // moveBar(props.cell)
                }}
                mouseDragOverCell={(props) => {
                    hoverBar(props.cell)
                }}
                mouseDownCell={(props) => {
                    const newbar = createBar(props.dimension, props.cell)
                    newbar.style = { background: getRandomColor() }
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
                {({ dimension }) => {
                    return bars.map((bar) => {
                        console.log(bar.length)
                        return (
                            <Bar
                                onDragStart={() => {
                                    editBar({ ...bar, dragging: true })
                                }}
                                onContextMenu={(event) => {
                                    event.preventDefault()
                                    setDrag(bar)
                                }}
                                key={bar.id}
                                {...bar}
                                style={{
                                    ...bar.style,

                                    ...getPosition(bar.row, bar.column, bar.dimension)
                                }}
                            >
                                <Tag style={{ color: "#fff", width: dimension * bar.length }}>{bar.draggable && "Start Dragging"}</Tag>
                            </Bar>
                        )
                    })
                }}
            </Reserver>
            <SimpleContextMenu className='cmenu' {...contextMenuState}>
                <ContextMenuItem
                    onClick={() => {
                        if (!isObjectEmpty(prevSelected) && prevSelected.id !== selectedBar.id) {
                            const tBars = bars.map((bar) => { return { ...bar, draggable: false } })
                            setBars(tBars)
                        }
                        editBar({ ...selectedBar, draggable: !selectedBar.draggable })
                        setContextMenuState({ visibile: false })

                    }}
                >
                    {selectedBar.draggable ? 'Disable' : 'Enable'} Drag
         </ContextMenuItem>
                <ContextMenuItem
                    onClick={() => {
                        deleteBar(selectedBar)
                        setContextMenuState({ visibile: false })
                    }}
                >
                    Delete
         </ContextMenuItem>
            </SimpleContextMenu>
        </>
    )
}