---
id: rowtitle
title: Row Title
sidebar_label: Row Title
---
import RowTitle from '../src/examples/RowTitle'

How about giving each row a title?
Maybe it represents a room, a vehicle or person. 
So here we are going to create a list of people so we can assign their work times

Click on a title to see what happens!

<RowTitle />

We are going to use the prop rowTitles which takes an array or a function that returns an array. 

:::info
Notice the width of the row titles are taken into account when calculating the width. 
So if you pass *500* as the width prop of the componenet and 140 to rowTitleWidth the number of columns will be smaller 
than if you did not have row titles
:::

```jsx {28-54,57-62,95} file=../src/examples/RowTitle.js
```


