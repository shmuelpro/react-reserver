---
id: basicbar
title:  Bar Basics
sidebar_label: Bar Basics
---

<iframe
  src="https://codesandbox.io/embed/billowing-platform-61ovv?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style={{
    width: "100%",
    height: 600,
    border: 0,
    borderRadius: 4,
    overflow: "hidden"
  }}
  title="billowing-platform-61ovv"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>

You will most likely want to have some text or really anything inside the bars you create. 

All you have to do is pass in a child to the [Bar](/docs/bar) component

I use a helper component called [Tag](/docs/helpers#tag) to help position the text in the bar but it is not required.





```jsx  file=../src/examples/BasicBar.js
```

If you notice in the Tag I pass to the style prop the width by multiply the dimension gotten from the parameter by the length.
This allows me to position the text in the center regardless of the size of the bar 