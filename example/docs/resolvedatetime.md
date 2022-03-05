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

<iframe
  src="https://codesandbox.io/embed/infallible-fire-pq09m?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="infallible-fire-pq09m"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>;


    ```jsx file=../src/examples/ResolveDateTime.js
    ```