---
id: bar
title: Bar
sidebar_label: Bar
---

### id
#### type: *string*
Gives the Bar component an id attribute

### className
#### type: *string*
Passes Bar className

### style
#### type: *object*
Passes style to Reserver


### dimension
#### type: *object* {width: *number*, height: *number*} | *number*
Takes either an object with the properties width and height or a number. 
This is the dimension of each cell 

### length
#### type: *number*
Is used to calculate the width of the component by takes the width of the dimension and multiples by length

### content
#### type: *object*
An object where each key corrisponds to a cell. the format of the keys is just the index.
The reason to use an object instead of an array is because you are more likely to have a single cell you might want to format.

### firstContent
#### type: *any*
The first cell in the bar

### lastContent
#### type: *any*
The last cell in the bar