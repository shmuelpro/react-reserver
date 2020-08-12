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

<Basic />

``` jsx
import React from 'react'
import 'react-reserver/dist/index.css'
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
            bars.map((bar) => {
            return <Bar 
            key={bar.id}
             {...bar} 
            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })
        }
    </Reserver>
```

So whats going on here?
In order to allow you to control the state of Reserver we use a reducer

``` jsx
 const { bars, addBar, setBars } = useReserver(reserverReducer, [])   
```

**useReserver** is a the hook. 
**reserverReducer** is the reducer. 

The hook returns **bars** which is an array holding the current bars. 
**addBar** takes a single object to add to the array and **setBars** sets all the bars. 
There are more functions returned from the hook. We will start with these. 

``` jsx
mouseDownCell={(props) => {
            const newbar = createBar(props.dimension, props.cell);
            addBar(newbar)
        }}
```

**mouseDownCell** is a prop that takes function which runs when you click down on one of the cells.
The prop passes a dimension which is defined in an initial props of Reserver. 

The dimension defines how large each cell is in pixels. 
The cell is an object that looks like this 

```json 
 { row: r, column: c }
 ```

dimension and cell get passed to the function **createBar**

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

**mouseEnterCell** is a prop that takes a function which receives an object with dimension and cell and runs whenever a mouse hovers over a cell.

**resizeBar** is a function that takes all bars and the props and calculates the new size of the bars. 
It does this by finding all the bars that have the property **editing = true** and editing them accordinly. 

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
**mouseUpCell** is a prop that takes a function which runs when there is a onMouseUp over a cell. 
Here, the bars are mapped over and all the edited bars that have true on **editing** becomes false. 

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

**getPosition** is a helper function that takes the row,column and dimension and calculates the absolute position (top and left) of the bar and passes it into style. 

Thats it! Thats the most basic code that allows you to run the example. 

:::caution
This is not the best way to use Reserver. Its only an example to simplify the process of getting started. 
:::

:::tip
Go to Basic++ to see a more robust example of how to use Reserver
:::
     

 
