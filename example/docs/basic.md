---
id: basic
title: Basic
sidebar_label: Basic
---

import Basic from '../src/examples/Basic'

This is the most basic example.
A grid, 500px wide and 500px high is created, since those are the default props.

:::tip

Click and drag on any square in the grid to create a new bar

:::

<iframe
  src="https://codesandbox.io/embed/gracious-leaf-3ryy4?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    
    overflow: "hidden"
  }}
  title="gracious-leaf-3ryy4"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>


### The code

``` jsx
import React from 'react'
import styles from './basicexamples.module.css'
import Reserver, 
{ Bar, 
useReserver,
reserverReducer,
createBar, 
getPosition, 
resizeBars } from 'react-reserver'

export default function Basic(props) {
    const { bars, addBar, setBars } = useReserver(reserverReducer, [])    
    return <Reserver 
    cellClassName={styles.row_cell}
        mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }}
        mouseEnterCell={(props) => {
            const nBars = resizeBars(bars, props)
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
            bars.map((bar) => {
            return <Bar 
            key={bar.id}
             {...bar} 
            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })
        }
    </Reserver>
}
```

```css
.row_cell {
    border: 1px solid #eaeaea;
    color: hsl(0, 0%, 0%);
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: white;
}
```

So whats going on here?
In order to allow you to control the state of Reserver we use a reducer

``` jsx
 const { bars, addBar, setBars } = useReserver(reserverReducer, [])   
```

**useReserver** is a the hook. 
**reserverReducer** is the reducer. 

The hook returns:

* **bars** which is an array of objects representing the bars 
* **addBar** a function which takes a single object to add to the array 
* **setBars** a function which sets all the bars

*There are more functions returned from the hook. We will start with these.*

``` jsx
mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }}
```

[mouseDownCell](/docs/reserver#mousedowncell) is the onMouseDown for all each cell.
The prop parameter receives the [dimension](/docs/reserver#dimension) of the cell and the location in the object cell

```json 
cell: { row: r, column: c }
 

``` 

The objects dimension and cell get passed to the function [createBar](/docs/helpers#createbar)

createBar is a helper function that takes dimension and cell as arguments and returns an object containing 
a new id, the dimension, editing as a boolean set to true, the location which is the cell.
All these get passed as props into the bar and are necessary as basic properties for the bars array. 

**addBar** is a function that takes an object representing bar and adds it to the array bars.

``` jsx
    mouseEnterCell={(props) => {
            const nBars = resizeBar(bars, props)
            setBars(nBars)
        }}
```

[mouseEnterCell](/docs/reserver#mouseentercell) takes a function that runs when the mouse enters a cell

[resizeBar](/docs/helpers#resizebars) is a function that takes all bars and the props and calculates the new size of the bars that have the property editing = true. 

``` jsx
   mouseUpCell={() => {  
            const dBars = bars.map((bar) => {
                if (bar.editing) {
                    return { ...bar, editing: false }
                }
                return bar;
            })
            setBars(dBars)
        }}
```

[mouseUpCell](/docs/reserver#mouseupcell) takes a function that runs on mouse up on a cell
Here, the bars are mapped over and all the edited bars that have true on **editing** becomes false. 
The other option is to just use [finishEditingBars](/docs/helpers#finisheditingbars)

``` jsx
     {
            bars.map((bar) => {
            return <Bar 
            key={bar.id}
             {...bar} 
            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })
        }
```

The children of the Reserver component are an array of the component Bar.

[getPosition](/docs/helpers#getposition) is a helper function that takes the row, column and dimension and calculates the absolute position (top and left) of the bar and passes it into style. 

[cellClassName](/docs/reserver#cellclassname) is the className that is passed to all cells. by default it is empty so if you dont add a style it will be invisible

Thats it! Thats the most basic code that allows you to run the example. 

:::caution
This is not the best way to use Reserver. Its only an example to simplify the process of getting started. 
:::

:::tip
Go to Basic++ to see a more robust example of how to use Reserver
:::

     

 
