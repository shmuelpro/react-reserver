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
import { getRandomColor, getRandomInt } from './helpers'
import { useInterval } from './hooks'
export default function Content(props) {
    const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(
        reserverReducer,
        []
    )

    const [content, setContent] = useState({})

    useInterval(() => {
        let c = { ...content }

        c[`r${getRandomInt(0, 25)}c${getRandomInt(0, 25)}`] = <span style={{userSelect:"none",pointerEvents:"none", alignItems: "center", height: "100%", width: "100%", display: "flex", fontSize: "10px", background: getRandomColor() }}>{getRandomInt(0, 250)}</span>;

        setContent(c)
    }, 50)

    return (
        <Reserver
            content={content}
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
    )
}