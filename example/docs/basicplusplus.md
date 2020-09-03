---
id: basicplusplus
title: Basic++
sidebar_label: Basic++
---
import BasicPlusPlus from '../src/examples/BasicPlusPlus'

Ok so you ran the basic example and you want to see more.

Here it is 

<BasicPlusPlus />

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
