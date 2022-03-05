---
id: draganddelete
title:  Drag & Delete Bar
sidebar_label: Drag & Delete
---



The bar is very versatile in this example we enable dragging and deleting of the bar.
- Create a bar by clicking and dragging across the grid.
- right click the bar and select 'enable drag'
- start dragging

This is not the most beautiful way to do dragging. I'll be adding a better example later on. 

In order to delete, right click and hit delete

<iframe
  src="https://codesandbox.io/embed/draganddelete-v9794?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="DragAndDelete"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>;


```jsx  file=../src/examples/DragBar.js
```