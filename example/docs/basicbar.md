---
id: basicbar
title:  Bar Basics
sidebar_label: Bar Basics
---

import BasicBar from '../src/examples/BasicBar'

You will most likely want to have some text or really anything inside the bars you create. 

All you have to do is pass in a child to the [Bar](/docs/bar) component

I use a helper component called [Tag](/docs/tag) to help position the text in the bar but it is not required.


<BasicBar />


```jsx  file=../src/examples/BasicBar.js
```

If you notice in the Tag I pass to the style prop the width by multiply the dimension gotten from the parameter by the length.
This allows me to position the text in the center regardless of the size of the bar 