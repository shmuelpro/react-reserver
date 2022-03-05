---
id: dateoverflow
title: Date Overflow
sidebar_label: Date Overflow
---


<iframe
  src="https://codesandbox.io/embed/date-overflow-tdmq8?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 500,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="Date Overflow"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>;

As you see here before every render we clip the sides that overflow. 
We leave a flag in case we want a way to have a visual identification of the change. 
But how would we have such an identification? 
We will se in the next section 
```jsx
  if (bar.column < 0) {
              bar.leftOverflow = true
              bar.length = bar.length + bar.column
              bar.column = 0
            }

            if (columnCount < bar.column + bar.length) {
              bar.rightOverflow = true
              bar.length = columnCount - bar.column
            }
```

```jsx {74-83} file=../src/examples/DateOverflow.js
```

