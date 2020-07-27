import React from 'react'
import DocPar from './sections/DocPar'
import DocTitle from './sections/DocTitle'
import BottomNavigation from './sections/BottomNavigation'
import basicgif from '../gifs/basic.gif'
import basicExampleCode from './code/basicExampleCode'
import CodeHighlighter from '../CodeHighlighter'
import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBar } from 'react-reserver'


function Highlight(props){

    return <span style={{background:"#011627",color:"#ff585b",padding:"4px",borderRadius:"8px"}}> {props.children}</span>
}


export default function Basic(props) {

    const { bars, addBar, setBars } = useReserver(reserverReducer, [])



    return (

        <div>
            <DocTitle next={props.next}>Basic Example</DocTitle>
            < DocPar>
                This is the most basic example.
              <br />
              A grid, 500px wide and 500px high is created, since those are the default props.
              <br />
              Click and drag on any square in the grid to create a new bar.
    </ DocPar>

            <div style={{ display: "flex" }}>
                <Reserver
                    onContextMenu={()=>{
                        console.log("ass")
                    }}
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
            <CodeHighlighter language="jsx" code={basicExampleCode} />
            < DocPar>
            So what are we seeing here? (toggle the line codes to follow)
            <br/>
            On line 3 we import <Highlight>Reserver</Highlight> which is our main component,<br/>
             <Highlight>useReserver</Highlight>

            </ DocPar>
            <BottomNavigation previous={props.previous} next={props.next} />
        </div>)

}