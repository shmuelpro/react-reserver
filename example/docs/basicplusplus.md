---
id: basicplusplus
title: Basic++
sidebar_label: Basic++
---

Ok so you ran the basic example and you want to see more.

Here it is 

<iframe
  src="https://codesandbox.io/embed/morning-leaf-e4cp8?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="morning-leaf-e4cp8"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>

You are probably thinking hey wait this looks exactly the same!

so lets look at the code

```jsx  file=../src/examples/BasicPlusPlus.js
```

First we are adding **editing** and **setIsEditing**. 
Why do we need this? since otherwise every time we hover over a cell it runs **resizeBar** and **setBars**. 
So we make sure that we actually started editing before we run the functions.


```jsx 
 {() => {

            return bars.map((bar) => {
                return <Bar key={bar.id} {...bar} style={{ ...bar.style, ...getPosition(bar.row, bar.column, bar.dimension) }} />
            })
        }
```
Here we are passing in a function instead of an array of the objects as children. We will need this later when the component will pass arguments into the function. 
We also pass bar.style back into the style prop, we didnt do it before because we werent styling the component but now we should take it into consideration. 


Next we will see how we can give titles to our columns
