---
id: reducer
title: Reducer
sidebar_label: Reducer
---

## useReserver
#### function
Takes a reducer and the initialState 
returns  
isEditing,
setIsEditing,
bars,
addBar,
editBar,
deleteBar,
setBars

isEditing is a boolean and defaults to false

bars is an array of objects representing the different bars. 

## reserverReducer
#### function
This is the reducer. feel free to write your own 

```jsx

import actionTypes from './actionTypes'

export default function reserverReducer(state, action) {
  switch (action.type) {
    case actionTypes.setBars: {
      return { ...state, bars: action.payload }
    }
    case actionTypes.edit: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      nBars[bIndex] = action.payload

      return { ...state, bars: nBars }
    }
    case actionTypes.add: {
      const bars = [...state.bars]

      bars.push(action.payload)

      return { ...state, bars: bars }
    }

    case actionTypes.delete: {
      const nBars = [...state.bars]
      const bIndex = nBars.findIndex((bar) => {
        return action.payload.id === bar.id
      })

      nBars.splice(bIndex, 1)

      return { ...state, bars: nBars }
    }
    case actionTypes.setIsEditing: {
      return { ...state, isEditing: action.payload }
    }
  }
}

```


## actionTypes
#### object
```jsx

const actionTypes = {
  add: 'ADD',
  edit: 'EDIT',
  delete: 'DELETE', 
  setBars: 'SET_BARS',
  setIsEditing: 'SET_IS_EDITING'
}

```






