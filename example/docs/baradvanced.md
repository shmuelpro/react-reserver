---
id: baradvanced
title: Bar Advanced
sidebar_label: Bar Advanced
---


import AdvancedBars from '../src/examples/AdvancedBars'



In this we are being introduced to a few new concepts. You might want to stylize or put content in the cells themselves. 

For that we have [content](/docs/bar#content), [firstContent](/docs/bar#firstcontent) and [lastContent](/docs/bar#lastcontent). 
firstContent sets the first cell and the single cell, lastContent the last cell and content all the cells. firstContent and lastContent overwrite content.

so in this example if there is an overflow we set a different content for the last cell. 

```jsx
lastContent={
                bar.rightOverflow ? (
                  <div style={{ background: 'purple' }} />
                ) : (
                  <LastContent
                    bar={bar}
                    setIsEditing={setIsEditing}
                    editBar={editBar}
                  />
                )
              }
```

This example also shows how you can use ends to resize the bars.


```jsx
const LastContent = (props) => {
  return (
    <div
      onMouseDown={() => {
        props.editBar({ ...props.bar, stick: 'left', editing: true })
        props.setIsEditing(true)
      }}
      style={{
        borderLeft: '3px solid red',
        background: '#F2545B',
        zIndex: '100000',
        ...props.style
      }}
    >
      {' '}
    </div>
  )
}
```

Once you mouse down goes on the div it sets the bar to editing:true
on the bar property of pointerevents, if editing it sets it to none which prevents pointer events from firing on the bar. 
mouseEnterCell on the grid cause the resize. 

So what is that `stick:left` being added to the bar?
In order to control the direction of expansion and contraction of the bar I need to know which side should stay in place. 
stick is the property that defines which side stays in place. 
so when I am moving the right side I want the left to stay in place. 
When I decide the right should stay in place its `stick:right`
<AdvancedBars />

```jsx file=../src/examples/AdvancedBars.js
```



