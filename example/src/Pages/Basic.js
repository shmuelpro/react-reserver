import React from 'react'
import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBar } from 'react-reserver'


export default function Basic(props) {

    const { bars, addBar, setBars } = useReserver(reserverReducer, [])
    console.log(bars)
    return <Reserver

        mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }}

        mouseEnterCell={(props) => {
            const nBars = resizeBar(bars, props)
            setBars(nBars)
        }}

        mouseUpCell={() => {


            /* let tcontent = { ...content }
             tcontent[`r${props.cell.row}c${props.cell.column}`] = <div style={{ background: "purple" }}>test</div>;
             setContent(tcontent)
 */
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

}