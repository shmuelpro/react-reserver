import React from 'react'
import DocPar from './sections/DocPar'
import DocTitle from './sections/DocTitle'
import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBar } from 'react-reserver'


export default function Basic(props) {

    const { bars, addBar, setBars } = useReserver(reserverReducer, [])



    return (

        <div>
            <DocTitle>Column Title Example</DocTitle>
            < DocPar>
                This is the most basic example.
              <br />
              A grid, 500px wide and 500px high is created, since those are the default props.
              <br />
              Click and drag on any square in the grid to create a new bar.
    </ DocPar>

            <div style={{ display: "flex" }}>
                <Reserver
                    style={{ margin: "0 auto" }}
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
            </div>
        </div>)

}