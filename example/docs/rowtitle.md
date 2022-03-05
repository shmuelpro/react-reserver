---
id: rowtitle
title: Row Title
sidebar_label: Row Title
---

How about giving each row a title?
Maybe it represents a room, a vehicle or person. 
So here we are going to create a list of people so we can assign their work times

Click on a title to see what happens!

<iframe
  src="https://codesandbox.io/embed/rowtitle-04kdb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 500,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="RowTitle"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>;


We are going to use the prop rowTitles which takes an array or a function that returns an array. 

In order to control the width of the row title we use the prop rowTitleWidth

:::info
Notice the width of the row titles are taken into account when calculating the width of Reserver. 
So if you pass *500* as the width prop of the component and *140* to rowTitleWidth the number of columns will be smaller 
than if you did not have row titles
:::



```jsx {29-45,47} file=../src/examples/RowTitle.js
```


