---
id: gettingstarted
title: Getting Started
sidebar_label: Getting Started
---

``` bash
npm install react-reserver
```

or

``` bash
yarn add react-reserver
```

Copy this code

``` jsx
import React from 'react'
import 'react-reserver/dist/index.css'
import Reserver, 
{ Bar, 
useReserver,
reserverReducer,
createBar, 
getPosition, 
resizeBar } from 'react-reserver'

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
And this is what you should see.
This is the most basic example.
A grid, 500px wide and 500px high is created, since those are the default props.
Click and drag on any square in the grid to create a new bar.

![img](../static/gifs/basic.gif)


