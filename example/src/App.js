import React, { useState } from 'react'

import Reserver, { Bar, useReserver, reserverReducer, getPosition, createBar, resizeBar } from 'react-reserver'
import { bars as testBars } from './testData'
//import moment from 'moment';
import 'react-reserver/dist/index.css'




const App = () => {

  //const [headRow, setHeadRow] = useState([123, 1, 2, null, null, 123]);
  const [content, setContent] = useState({
    "r0c0": <span style={{ background: "green", width: "20px", height: "20px", display: "block" }}></span>, "r2c1": <span style={{ fontSize: "10px" }}>150</span>
  });

  const [titles, setTitles] = useState(["Golf Cart 1", null, "Golf Cart 2",]);
  //const [resWidth, setResWidth] = useState(600);

  const { addBar, editBar, doneEditing, deleteBar, bars } = useReserver(reserverReducer, testBars);

  const [widthtitle] = useState(80)

  const [height] = useState(500)
  const [dimension] = useState(25);

  //const [globalDate,setGlobalDate] = useState(moment(new Date()))


  function moveBar(newLocation) {

    let editing = bars.filter((bar) => {
      return bar.editing;
    })
    editing.forEach((bar) => {
      console.log("move", newLocation)
      let n = { ...bar, ...newLocation, editing: false };
      console.log("n", n)
      editBar(n)
    })

  }


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
    headRow={(columnCount) => {

      var z = [];
      var x = new Date();



      for (var i = 0; i < 10; i++) {
        var y = x.getDate();
        z.push(y);
        x.setDate(y + 1)

      }

      return z;

     /* return headRow.map((r) => {
        return <div onClick={() => { setWidthtitle(widthtitle + 10) }}>{r}</div>

      })*/
    }}
    mouseLeaveGrid={() => { doneEditing() }}
    mouseUpCell={(props) => {


      let tcontent = { ...content }
      tcontent[`r${props.cell.row}c${props.cell.column}`] = <div style={{ background: "purple" }}>test</div>;
      setContent(tcontent)

      doneEditing()
    }}
    mouseEnterCell={(props) => {

      const nBars = resizeBar(bars, props)
      
      nBars.forEach((bar)=>{
        editBar(bar)
      })
    }

    }
    mouseDownCell={(props) => {

      
      console.log(props)

      let newbar = createBar(props.dimension, props.cell);
      addBar(newbar)
    }
    }
    mouseCellDrop={(props) => { moveBar(props.cell) }}
    width={document.documentElement.clientWidth}
    height={height}
    content={content}
    dimension={dimension}
  >
    {({ rowCount, rowTitleWidth, dimension }) => {

      return bars.map((bar) => {

        return (rowCount > bar.row) && <Bar key={bar.id} 
          {...bar}
          dimension={dimension}
          onDragStart={() => { editBar({ ...bar, editing: true }) }}
          onClick={() => { console.log("delete", bar); deleteBar({ id: bar.id }) }}

          onMouseOver={() => { }}
          style={{...bar.style, ...getPosition(rowTitleWidth, bar.row, bar.column, dimension)}}

          >
          <span style={{ position: "absolute" }}>{bar.children}</span>
        </Bar>
      })

    }}

  </Reserver> </div>
}

export default App
