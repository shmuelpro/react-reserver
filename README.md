<p align="center">
  <img src="https://user-images.githubusercontent.com/3017787/92125133-5109cd00-ee07-11ea-9138-e5184c64ab5d.png" style=" alt="react reserver" />
</p>
<h1 align="center">react-reserver</h1>

> The best time blocking solution
Find yourself needing to add a way to reserve a conference room in your office?
Schedule shifts for your employees?
Hotel or restaurant reservations? 
Project management?
All of this but totally customizable???

This is the solution you've been looking for!

react-reserver is a time blocking solution. 
It creates a grid which allows you block out different time slots. 

[![NPM](https://img.shields.io/npm/v/react-reserver.svg)](https://www.npmjs.com/package/react-reserver) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![Build Status](https://travis-ci.org/shmuelpro/react-reserver.svg?branch=master)](https://travis-ci.org/shmuelpro/react-reserver)[![codecov](https://codecov.io/gh/shmuelpro/react-reserver/branch/master/graph/badge.svg)](https://codecov.io/gh/shmuelpro/react-reserver) [![npm version](https://badge.fury.io/js/react-reserver.svg)](https://badge.fury.io/js/react-reserver) ![GitHub All Releases](https://img.shields.io/github/downloads/shmuelpro/react-reserver/total) ![npm](https://img.shields.io/npm/dw/react-reserver)

<a href="https://shmuelpro.github.io/react-reserver/">Working Example and Docs</a>

## Install

```bash
npm install --save react-reserver

or 

yarn add react-reserver
```

## Usage

```jsx
import React from 'react'

import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBars} from 'react-reserver'


function App(){

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

            bars.map((bar) => { return <Bar key={bar.id} {...bar} style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })
        }
    </Reserver>
}
```
![basic](https://user-images.githubusercontent.com/3017787/91833839-e5c9ca80-ec4f-11ea-8993-c33afcaceed1.gif)

![HotelReservation](https://user-images.githubusercontent.com/3017787/92125209-70085f00-ee07-11ea-9a9c-22b0d2215603.gif)
[projectTimeline](https://user-images.githubusercontent.com/3017787/92125486-c37aad00-ee07-11ea-8114-c9e10ba9fed3.gif)

## License

MIT © [shmuelpro](https://github.com/shmuelpro)
