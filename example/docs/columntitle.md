---
id: columntitle
title: Column Title
sidebar_label: Column Title
---


So we want to give each column a title, it could be a date or time. 
In this example I use the library [moment](https://momentjs.com/) in order to generate the array of dates but you can use any library you want or you can just use a static array. 

Click on a title to see what happens!

<iframe
  src="https://codesandbox.io/embed/goofy-architecture-n0dq4?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="goofy-architecture-n0dq4"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>;



```jsx  file=../src/examples/ColumnTitle.js
```

[columnTitles](./reserver#columnTitles) takes either an array or a function and builds the top row. 
The function passes columnCount as an argument and must return an array. 

columnCount is necessary in order for you to generate the correct amount of columns for your array.
It doesnt check if you are using an incorrct length so you can do more or fewer. 

if you want to have an empty box among filled boxes have *null* as one of the elements in the array.

```javascript

const head = ['0','1',null,'3'];

```


The next thing to pay attention to is the function that passes an array as props.children to reserver. 

In order to do so we pull out the [columnTitleHeight](./reserver#columntitleheight) from the props that the function receives. 
We are going to use it to calculate the position of the bar.
