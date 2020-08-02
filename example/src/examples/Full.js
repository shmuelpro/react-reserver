import React, { useState, useEffect } from 'react'
import Reserver, { Bar, useReserver, reserverReducer, getPosition, createBar, resizeBar } from 'react-reserver'
import { bars as testBars } from './testData'

import  { SimpleContextMenu,ContextMenuItem } from '../components/SimpleContextMenu'

import '../components/SimpleContextMenu/menuStyle.css'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
export default function Full(props) {


    //const [columnTitleRow, setcolumnTitleRow] = useState([123, 1, 2, null, null, 123]);
    const [content, setContent] = useState({
        "r0c0": <span style={{ background: "green", width: "20px", height: "20px", display: "block" }}></span>, "r2c1": <span style={{ fontSize: "10px" }}>150</span>
    });

    const [titles, setTitles] = useState(["Golf Cart 1", null, "Golf Cart 2",]);
    //const [resWidth, setResWidth] = useState(600);


    /*useInterval(()=>{
        let c = {...content}
        c[`r${getRandomInt(0,10)}c${getRandomInt(0,10)}`] =  <span style={{ fontSize: "10px" }}>{getRandomInt(0,250)}</span>;
        console.log(c)
        setContent(c)
    },50)*/


    const { addBar, editBar, isEditing, deleteBar, bars, setBars } = useReserver(reserverReducer, testBars);
    const [selectedBar, setSelectedBar] = useState({})
    const [contextMenuState, setContextMenuState] = useState({ visibile: false, top: 0, left: 0 })

    const [widthtitle] = useState(80)

    const [height] = useState(500)
    const [dimension] = useState(25);
    function moveBar(newLocation) {

        let editing = bars.filter(bar => bar.editing)
        console.log(editing)
        editing.forEach((bar) => {
            console.log("move", newLocation)
            let n = { ...bar, ...newLocation, editing: false };
            console.log("n", n)
            editBar(n)
        })

    }

    function hoverBar(newLocation) {

        let editing = bars.filter(bar => bar.dragging)

        editing.forEach((bar) => {
            let n = { ...bar, ...newLocation, editing: false };
            editBar(n)
        })
    }

    console.log(bars)
    return <div><Reserver
        style={{ display: "inline-block" }}
        rowTitles={() => {
            return titles.map((c, i) => {
                if (c === null) {
                    return null;
                }
                return <button onClick={() => {
                    let ntitles = [...titles];
                    ntitles.push("asd")
                    setTitles(ntitles)
                }} style={{ background: "orange" }}>{i + 1}{c}</button>

            })
        }}
        rowTitleWidth={widthtitle}
        columnTitleRow={(columnCount) => {
            console.log()
            var z = [];
            var x = new Date();
            for (var i = 0; i < columnCount; i++) {
                var y = x.getDate();
                z.push(y);
                x.setDate(y + 1)

            }

            return z;

            /* return columnTitleRow.map((r) => {
               return <div onClick={() => { setWidthtitle(widthtitle + 10) }}>{r}</div>
       
             })*/
        }}
        mouseLeaveGrid={() => { }}
        mouseUpCell={(props) => {


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
        mouseEnterCell={(props) => {

            console.log(bars)
            const nBars = resizeBar(bars, props)
            console.log(nBars)
            setBars(nBars)


        }}
        mouseDownCell={(props) => {


            console.log(props)

            let newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }
        }
        mouseCellDrop={(props) => { moveBar(props.cell) }}
        width={typeof window !== "undefined" && document.documentElement.clientWidth}
        height={height}
        content={content}
        dimension={dimension}
        mouseDragOverCell={(props) => {

            hoverBar(props.cell)
        }}
    >
        {({ rowCount, rowTitleWidth, dimension }) => {

            return bars.map((bar) => {

                return (rowCount > bar.row) && <Bar key={bar.id}
                    {...bar}
                    dimension={dimension}
                    onDragStart={() => { editBar({ ...bar, dragging: true }) }}
                    onContextMenu={(event) => {
                        event.preventDefault();
                        setSelectedBar(bar)
                        setContextMenuState({ visible: true, top: event.clientY, left: event.clientX })
                    }}

                    onMouseOver={() => { }}
                    style={{ ...bar.style, ...getPosition(bar.row, bar.column, dimension, rowTitleWidth,) }}

                >

                    <span style={{ position: "absolute" }}>{bar.children}{bar.collisions && (Object.keys(bar.collisions).length > 0) && <span>Collision detected</span>}</span>
                </Bar>

            })

        }}

    </Reserver>
        <SimpleContextMenu className="cmenu" {...contextMenuState}>

            <ContextMenuItem onClick={() => { editBar({ ...selectedBar, draggable: !selectedBar.draggable }); setContextMenuState({ visibile: false }) }} >{selectedBar.draggable ? "Disable" : "Enable"} Drag</ContextMenuItem>
            <ContextMenuItem onClick={() => { deleteBar(selectedBar); setContextMenuState({ visibile: false }) }}>Delete</ContextMenuItem>

        </SimpleContextMenu>
    </div>
}