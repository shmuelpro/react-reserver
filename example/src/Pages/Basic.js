import React from 'react'
import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBar } from 'react-reserver'


export default function Basic(props) {

    const { bars, addBar } = useReserver(reserverReducer, [])
    console.log(bars)
    return <Reserver

        mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }


        }

    >
        {

            bars.map((bar) => { return <Bar key={bar.id} {...bar} style={{ ...getPosition( bar.row, bar.column, bar.dimension) }} /> })
        }
    </Reserver>

}