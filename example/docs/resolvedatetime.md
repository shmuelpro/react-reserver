---
id: resolvedatetime
title: Resolve Date Time
sidebar_label: Resolve Date Time
---
import ResolveDateTime from '../src/examples/ResolveDateTime'

In this example we are loading reservations from an external source. 
Usually we will not have the location of the bars as something static. 
The reservations will have a begin date/time and an end date/time and you will need to resolve the relative location after loading.

So once the reservations loaded we map through them and use resolve functions to figure out the row, column and length.
Of course these are example functions and you will need to write your own based off of what libraries you are using

```jsx
export function resolveDateDiff(startDate, date, format = 'DD-MM-YYYY') {
  const a = moment(startDate, format).startOf('day')
  const b = moment(date, format).startOf('day')
  return b.diff(a, 'days')
}

```
With resolveDateDiff we figure out the length between the start of the reservation and its end and the time between the start of the calendar and the start of the reservation


```jsx

export function resolveRow(rooms, roomId) {
  return rooms[roomId].row
}
```

With resolveRow we just assign a row to a room 

We are also putting the name of the guest inside the bar. 

Now we have a problem. what happens if the size of the reservations is larger than the grid? 
We will see in the next section - Date Overflow

<ResolveDateTime />

    ```jsx  file=../src/examples/ResolveDateTime.js
    ```