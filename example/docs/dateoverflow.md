---
id: dateoverflow
title: Date Overflow
sidebar_label: Date Overflow
---


import DateOverflow from '../src/examples/DateOverflow'

<DateOverflow />

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

