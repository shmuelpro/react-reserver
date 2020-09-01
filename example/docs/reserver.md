---
id: reserver
title: Reserver
sidebar_label: Reserver
---

### id
#### type: *string*
Gives the reserver element an id attribute

### className
#### type: *string*
Passes reserver className

### style
#### type: *object*
Passes style to Reserver


### dimension
#### type: *object* {width: *number*, height: *number*} | *number*
Takes either an object with the properties width and height or a number. 
This is the dimension of each cell 

### width
#### type: *number*
The width of the grid in pixels. 
The grid calculates the actual size by taking the width given devided by the width of the cell, the result is floored and then multiplied by that number. 
So it wont be exact but close. 

### height
#### type: *number*
The height of the grid in pixels. 
The grid calculates the actual size by taking the height given devided by the height of the cell, the result is floored and then multiplied by that number. 
So it wont be exact but close. 

### rowTitle
#### type: *array* | *object* | *function*
Each row can have a title. its the first cell either from the left or right depending on the direction. 

The array is the final result. Each element in the array corrisponds to a cell in the title. 
**if you want an empty cell it should have *null***

#### example:
```jsx
rowTitle={[1,2,3,null,5]}
```
If you pass a function it takes rowCount as a paramater and should return an array

#### example:
```jsx
rowTitle={(rowCount)=>{

return [...Array(rowCount)].map((na,i)=>{
    return <div style={{color:"orange"}}>{i}</div>
})

}}
```

The function will rerun if the rowCount changes but sometimes you want the title to re-render anyway. 
In order to make that happen you pass in an object with a property of *func* whos value would be your function and a key of any other variable you want its change to cause a rerender. 

In this example there is a state variable named error which if is true will rerender the function causing the title to be red instead of orange

#### example:
```jsx
rowTitle={
    {func:(rowCount)=>{

return [...Array(rowCount)].map((na,i)=>{
    return <div style={{color:error?"red":"orange"}}>{i}</div>
})

},
error
}}
```


### rowTitleWidth
#### type: *number*
The width of the title in pixles
Notice that the width of the row is reduced from the total width of your provide
so if you have a width is 1200 and your rowTitleWidth is 400 you will be left with 800 for your cells


### columnTitle
#### type: *array* | *object* | *function*
Each column can have a title at the top of the table.

The array is the final result. Each element in the array corrisponds to a cell in the title. 
**if you want an empty cell it should have *null***

#### example:
```jsx
columnTitle={[1,2,3,null,5]}
```
If you pass a function it takes columnCount as a paramater and should return an array

#### example:
```jsx
rowTitle={(columnCount)=>{

return [...Array(columnCount)].map((na,i)=>{
    return <div style={{color:"orange"}}>{i}</div>
})

}}
```

The function will rerun if the columnCount changes but sometimes you want the title to re-render anyway. 
In order to make that happen you pass in an object with a property of *func* whos value would be your function and a key of any other variable you want its change to cause a rerender. 

In this example there is a state variable named error which if is true will rerender the function causing the title to be red instead of orange

#### example:
```jsx
rowTitle={
    {func:(rowCount)=>{

return [...Array(rowCount)].map((na,i)=>{
    return <div style={{color:error?"red":"orange"}}>{i}</div>
})

},
error
}}
```


### columnTitleHeight
#### type: *number*
The height of the title in pixles



### content
#### type: *object*
An object where each key corrisponds to a cell. The key format is   `r${number}c${number}`
So if you want to put content into the top left cell you would do the following 

```jsx
content={{
    `r0c0`:230
}}
```

### mouseLeaveGrid
#### type: *function*
Runs when mouse leaves Reserver compoenent

### mouseMoveGrid
#### type: *function*
Runs when mouse moves within the grid


### columnTitleClassName
#### type: *string*
className for the title cells

### cantonClassName
#### type: *string*
className for the canton

### mouseDownCell
#### type: *function*
onMouseDown for cell. 
It receives two paramaters the first is an object with [dimension](#dimension "{width:number, height:number}"). and cell 
dimension is object with with and height, the second paramater is the event. 
example:

```jsx
mouseDownCell=((props,event)=>{
console.log(props.cell)
console.log(props.dimension)
event.preventDefault();
})
```

### mouseEnterCell
#### type: *function*
onMouseEnter for cell. 
It receives two paramaters the first is an object with [dimension](#dimension "{width:number, height:number}"). and cell 
dimension is object with with and height, the second paramater is the event. 


### mouseUpCell
#### type: *function*
onMouseUp for cell. 
It receives two paramaters the first is an object with [dimension](#dimension "{width:number, height:number}"). and cell 
dimension is object with with and height, the second paramater is the event. 


### mouseDropCell
#### type: *function*
onMouseDrop for cell. 
It receives two paramaters the first is an object with [dimension](#dimension "{width:number, height:number}"). and cell 
dimension is object with with and height, the second paramater is the event. 

### mouseDragOverCell
#### type: *function*
onDragOver for cell. 
It receives two paramaters the first is an object with [dimension](#dimension "{width:number, height:number}"). and cell 
dimension is object with with and height, the second paramater is the event. 


### cellClassName
#### type: *string*
className for cell


### dir
#### type: *string* - 'rtl' or 'ltr' 
#### default: 'ltr'
Direction 'right to left' or 'left to right'


### children
#### type: *array* | *function*
Honestly I am not sure why you would have just an array. its very limiting and its up to you to position the compoents on the grid

The function gets passed an object with rowCount, columnCount,rowTitleWidth,columnTitleHeight
You will need these in order to calculate the position of the components on the grid.
Reserver comes with a component called [Bar](/docs/bar) which you can use to block out time. 
You are not limited to it and can build whatever compoenent you want. 

```jsx
{() => {
        return bars.map((bar) => {
          return (
            <Bar
              key={bar.id}
              {...bar}
              style={{
                ...bar.style,
                ...getPosition(bar.row, bar.column, bar.dimension)
              }}
            />
          )
        })
      }}
```


