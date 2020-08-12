<p align="center">
  <img src="https://user-images.githubusercontent.com/3017787/86244525-c3b0bf00-bbb0-11ea-87cf-910492aebf46.png" style=" alt="react reserver" />
</p>
<h1 align="center">react-reserver</h1>

> A grid allowing to visualize reservations in a system

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
import React, { Component } from 'react'

import Reserver, { Bar, useReserver, reserverReducer, createBar, getPosition, resizeBars} from 'react-reserver'
import 'react-reserver/dist/index.css'

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

## License

MIT © [shmuelpro](https://github.com/shmuelpro)
