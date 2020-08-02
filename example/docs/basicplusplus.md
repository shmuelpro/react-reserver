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

```jsx file=../src/examples/BasicPlusPlus.js
```

First we are adding **editing** and **setIsEditing**. 
Why do we need this? since otherwise every time we hover over a cell it runs **resizeBar** and **setBars**. 
So we make sure that we actually started editing before we run the functions.

```jsx {2}
        mouseEnterCell={(props) => {

            if (isEditing) {
                const nBars = resizeBar(bars, props)
                setBars(nBars)
            }

        }}
```

so in 

In **mouseUpCell** we add the bar's style and we set the pointerEvents to "auto" so we are able to click on the bars
And then we **setIsEditing** to false
```jsx {4, 9}
     mouseUpCell={() => {
            const dBars = bars.map((bar) => {
                if (bar.editing) {
                    return { ...bar, editing: false, style: { ...bar.style, pointerEvents: "auto" } }
                }
                return bar;
            })

            setBars(dBars)
            setIsEditing(false)
        }}
```