---
id: basicbar
title: Basic Bar
sidebar_label: Basic Bar
---

import BasicBar from '../src/examples/BasicBar'

You will most likely want to have some text or really anything inside the bars you create. 

All you have to do is pass in a child to the Bar component

I use a helper component called Tag to help position the text in the bar but it is not required.


<BasicBar />


```jsx {5,10,15,31} file=../src/examples/BasicBar.js
```

If you notice in the Tag I pass to the style prop the width by multiply the dimension gotten from the paramater by the length.
This allows me to position the text in the center regardless of the size of the bar 