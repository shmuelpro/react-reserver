---
id: helpers
title: Helpers
sidebar_label: Helpers
---


## Tag 
#### component
A styled div which helps position items within [Bar](/docs/bar)

```jsx
<Bar><Tag> I am a bar </Tag></Bar>
```

## Peg
#### component
A styled div which helps position items within a cell
```jsx
content={{
    "r0c0":<Peg>300</Peg>
}}
```
## createBar
#### function
takes dimension,startlocation which is a cell, and props and creates an object with the properties id, length (default 1), editing (default true), and expands the props onto the object


## getPosition
#### function
Takes the row, column, dimension, rowTitleWidth (default 0), columnTitleHeight (default 0), calculates the position in the grid and returns left and top.


## evaluatePosition
#### function
Takes the bar object and the newlocation cell and figures out the position and length of the bar. 

## resizeBars
#### function
Takes the bars array, newLocation cell and a function called resolver. 
It goes through the list of bars and if a bar has the property editing = true it resizes the bar to the cell. 
returns the changed bars array. 

## finishEditingBars
#### function
Takes the bars array and if one of the bars property editing = true sets it to false
return the changed bars array. 


##  checkCollisions
#### function
Takes the bars array, filters out the objects where editing = true compares the rest of the bars and checks if they are overlapping
it creates an array under they collisions which lists all ids it collides with/ 
return the changed bars array. 






