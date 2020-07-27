const basicExampleCode = `import React from 'react'
import 'react-reserver/dist/index.css'
import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBar } from 'react-reserver'


export default function Basic(props) {

    const { bars, addBar, setBars } = useReserver(reserverReducer, [])    
    return <Reserver style={{ margin:"0 auto" }}
        mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }}
        mouseEnterCell={(props) => {
            const nBars = resizeBar(bars, props)
            setBars(nBars)
        }}
        mouseUpCell={() => {  
            const dBars = bars.map((bar) => {
                if (bar.editing) {
                    return { ...bar, editing: false }
                }
                return bar;
            })
            setBars(dBars)
        }}
    >
        {
            bars.map((bar) => { return <Bar key={bar.id} {...bar} style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })
        }
    </Reserver>

}`

export default basicExampleCode;