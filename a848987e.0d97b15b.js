(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(2),r=t(6),a=(t(0),t(113));t(114),t(47);var i={id:"basic",title:"Basic",sidebar_label:"Basic"},s={unversionedId:"basic",id:"basic",isDocsHomePage:!1,title:"Basic",description:"This is the most basic example.",source:"@site/docs\\basic.mdx",slug:"/basic",permalink:"/react-reserver/docs/basic",version:"current",sidebar_label:"Basic",sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-reserver/docs/"},next:{title:"Basic++",permalink:"/react-reserver/docs/basicplusplus"}},l=[{value:"The code",id:"the-code",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the most basic example.\nA grid, 500px wide and 500px high is created, since those are the default props."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Click and drag on any square in the grid to create a new bar"))),Object(a.b)("iframe",{src:"https://codesandbox.io/embed/gracious-leaf-3ryy4?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:600,border:0,borderRadius:4,overflow:"hidden"},title:"gracious-leaf-3ryy4",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),";",Object(a.b)("h3",{id:"the-code"},"The code"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport styles from './basicexamples.module.css'\nimport Reserver, \n{ Bar, \nuseReserver,\nreserverReducer,\ncreateBar, \ngetPosition, \nresizeBars } from 'react-reserver'\n\nexport default function Basic(props) {\n    const { bars, addBar, setBars } = useReserver(reserverReducer, [])    \n    return <Reserver \n    cellClassName={styles.row_cell}\n        mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n        mouseEnterCell={(props) => {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n        }}\n        mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n    >\n        {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n    </Reserver>\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),".row_cell {\n    border: 1px solid #eaeaea;\n    color: hsl(0, 0%, 0%);\n    box-sizing: border-box;\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: white;\n}\n")),Object(a.b)("p",null,"So whats going on here?\nIn order to allow you to control the state of Reserver we use a reducer"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"})," const { bars, addBar, setBars } = useReserver(reserverReducer, [])   \n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"useReserver")," is a the hook.\n",Object(a.b)("strong",{parentName:"p"},"reserverReducer")," is the reducer. "),Object(a.b)("p",null,"The hook returns:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bars")," which is an array of objects representing the bars "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"addBar")," a function which takes a single object to add to the array "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"setBars")," a function which sets all the bars")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"There are more functions returned from the hook. We will start with these.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reserver#mousedowncell"}),"mouseDownCell")," is the onMouseDown for all each cell.\nThe prop parameter receives the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reserver#dimension"}),"dimension")," of the cell and the location in the object cell"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),"cell: { row: r, column: c }\n \n\n")),Object(a.b)("p",null,"The objects dimension and cell get passed to the function ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/helpers#createbar"}),"createBar")),Object(a.b)("p",null,"createBar is a helper function that takes dimension and cell as arguments and returns an object containing\na new id, the dimension, editing as a boolean set to true, the location which is the cell.\nAll these get passed as props into the bar and are necessary as basic properties for the bars array. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"addBar")," is a function that takes an object representing bar and adds it to the array bars."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"    mouseEnterCell={(props) => {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n        }}\n")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reserver#mouseentercell"}),"mouseEnterCell")," takes a function that runs when the mouse enters a cell"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/helpers#resizebars"}),"resizeBar")," is a function that takes all bars and the props and calculates the new size of the bars that have the property editing = true. "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"   mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reserver#mouseupcell"}),"mouseUpCell")," takes a function that runs on mouse up on a cell\nHere, the bars are mapped over and all the edited bars that have true on ",Object(a.b)("strong",{parentName:"p"},"editing")," becomes false.\nThe other option is to just use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/helpers#finisheditingbars"}),"finishEditingBars")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"     {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n")),Object(a.b)("p",null,"The children of the Reserver component are an array of the component Bar."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/helpers#getposition"}),"getPosition")," is a helper function that takes the row, column and dimension and calculates the absolute position (top and left) of the bar and passes it into style. "),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reserver#cellclassname"}),"cellClassName")," is the className that is passed to all cells. by default it is empty so if you dont add a style it will be invisible"),Object(a.b)("p",null,"Thats it! Thats the most basic code that allows you to run the example. "),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This is not the best way to use Reserver. Its only an example to simplify the process of getting started. "))),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Go to Basic++ to see a more robust example of how to use Reserver"))))}u.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.a.createElement(b,s(s({ref:n},c),{},{components:t})):r.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return B})),t.d(n,"c",(function(){return k})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return R})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return p})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return N})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return E}));var o=t(0),r=t.n(o);function a(...e){const[n,t]=Object(o.useState)();return Object(o.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(e)]),n}const i=(e,n,t)=>t>=e&&n>=t;function s(e){return isNaN(e)?e:{width:e,height:e}}function l(e,n,t,o=0,r=0){return{left:o+n*(t=s(t)).width,top:e*t.height+r}}function c(e,n,t){return e=s(e),Math.floor((n-t)/e.width)}function u(e,n){return e=s(e),Math.floor(n/e.height)}function d(e,n,t){return e.map(e=>{if(e.editing){let o=m(e,n.cell);return"function"==typeof t&&(o=t(o)),o}return e})}function p(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function m(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";const t={row:e.row,column:n.column,length:e.column-n.column+e.length};return{...e,...t}}e.stick="left";const t={row:e.row,column:e.column,length:n.column-e.column+1};return{...e,...t}}function b(e){let n=[...e];return e.filter(e=>e.editing).forEach(e=>{const[t,o]=function(e,n){let t={...n};return[e.flatMap(e=>{if(e.id===n.id)return[];if(t.row===e.row){const n=e.column+1,o=t.column+1,r=e.column+e.length,a=t.column+t.length;if(i(n,r,o)||i(n,r,a)||i(o,a,r)||i(o,a,n)){const[n,o]=h(e,t);return t=o,n}{const[n,o]=g(e,t);return t=o,n}}{const[n,o]=g(e,t);return t=o,n}}),t]}(n,e);t.push(o),n=t}),n}const h=(e,n)=>((e=f(e)).collisions[n.id]="",(n=f(n)).collisions[e.id]="",[e,n]),f=e=>(e.collisions||(e.collisions={}),e),g=(e,n)=>(delete(e=f(e)).collisions[n.id],delete(n=f(n)).collisions[e.id],[e,n]),O="ADD",w="EDIT",v="DELETE",j="SET_BARS",y="SET_IS_EDITING";function N(e,n){switch(n.type){case j:return{...e,bars:n.payload};case w:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t[o]=n.payload,{...e,bars:t}}case O:{const t=[...e.bars];return t.push(n.payload),{...e,bars:t}}case v:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t.splice(o,1),{...e,bars:t}}case y:return{...e,isEditing:n.payload}}}function E(e,n){const[{bars:t,isEditing:r},a]=Object(o.useReducer)(e,{bars:n,isEditing:!1});return{isEditing:r,setIsEditing:e=>a({payload:e,type:y}),bars:t,addBar:e=>a({payload:e,type:O}),editBar:e=>a({payload:e,type:w}),deleteBar:e=>a({payload:e,type:v}),setBars:e=>a({payload:e,type:j})}}function M(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function C(e,n=0,t=4){if(n!==t)return Array.isArray(e)?e.map(e=>C(e,n+1)):M(e)?Object.keys(e).map(t=>t+" : "+C(e[t],n+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function D(...e){const[n,t]=Object(o.useState)({});return Object(o.useEffect)(()=>{if(M(e[0]))t(e[0]);else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(C(e))]),n}function x(e){const n=D(e.content,e.length);return r.a.createElement("div",{id:e.id,role:"listitem",onDragStart:n=>{e.onDragStart(n,e)},onDragEnd:n=>{e.onDragEnd(n,e)},onClick:n=>{e.onClick(n,e)},onMouseOver:n=>{e.onMouseOver(n,e)},onContextMenu:n=>{e.onContextMenu(n,e)},onMouseEnter:n=>{e.onMouseEnter(n,e)},onMouseLeave:n=>{e.onMouseLeave(n,e)},onMouseMove:n=>{e.onMouseMove(n,e)},onMouseDown:n=>{e.onMouseDown(n,e)},onMouseUp:n=>{e.onMouseUp(n,e)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown(n,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((t,o)=>{const a=function(e,n,t,o,a){return 0===e?o||t[e]||r.a.createElement("div",null):n-1===e?a||t[n-1]||r.a.createElement("div",null):t[e]||r.a.createElement("div",null)}(o,e.length,n,e.firstContent,e.lastContent),i=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},a.props.style||{});return r.a.createElement(r.a.Fragment,{key:o},r.a.cloneElement(a,{...a.props,style:i},a.props.children))}),e.children)}function T(e){return r.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:n=>{n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:n=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:n=>{"function"==typeof e.onMouseEnter&&e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerEnter:n=>{"function"==typeof e.onPointerEnter&&e.onPointerEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerLeave:n=>{"function"==typeof e.onPointerLeave&&e.onPointerLeave({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerMove:n=>{"function"==typeof e.onPointerMove&&e.onPointerMove({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOut:n=>{"function"==typeof e.onPointerOut&&e.onPointerOut({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOver:n=>{"function"==typeof e.onPointerOver&&e.onPointerOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:n=>{"function"==typeof e.onMouseDown&&e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerUp:n=>{"function"==typeof e.onPointerUp&&e.onPointerUp({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:n=>{e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:n=>{e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function P(e){return r.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&r.a.createElement(T,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((n,t)=>r.a.createElement(T,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)),"rtl"===e.dir&&r.a.createElement(T,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function B(e){return r.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function k(e){return r.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function S(e=15){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function R(e,n,t){return{id:S(),length:1,dimension:e,editing:!0,...n,...t}}function z(...e){const[n,t]=Object(o.useState)([]);return Object(o.useEffect)(()=>{if(M(e[0])){const n=e[0].func;"function"==typeof n&&(e.splice(0,1),t(n(...e)))}else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}else Array.isArray(e[0])&&t(e[0])},[JSON.stringify(e)]),n}x.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},T.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},P.defaultProps={onMouseOverCell:()=>{}};const A=r.a.forwardRef((e,n)=>{const t=a(u,e.dimension,e.height),i=a(c,e.dimension,e.width,e.rowTitleWidth),s=z(e.rowTitles,t),l=z(e.columnTitles,i),d=D(e.content,i,t),p=function(e){const[n,t]=Object(o.useState)({width:0,height:0});return Object(o.useEffect)(()=>{isNaN(e)?M(e)?t(e):t({width:-1,height:-1}):t({width:e,height:e})},[JSON.stringify(e)]),n}(e.dimension);return r.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,onPointerMove:e.pointerMoveGrid,onPointerCancel:e.pointerCancelGrid,style:{...e.style,position:"relative"}},r.a.createElement(P,{columnTitles:l,columnCount:i,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:p,isVisible:l.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(t)].map((n,t)=>r.a.createElement("div",{role:"rowgroup",key:t,style:{height:p.height,display:"flex"}},"ltr"===e.dir&&r.a.createElement(T,{style:{display:s.length>0?"initial":"none"},dimension:{height:p.height,width:e.rowTitleWidth},className:e.rowTitleClassName},s[t]),[...Array(i)].map((n,o)=>r.a.createElement(T,{key:`r${t}c${o}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,onPointerDown:e.pointerDownCell,onPointerMove:e.pointerMoveCell,onPointerEnter:e.pointerEnterCell,onPointerLeave:e.pointerLeaveCell,onPointerUp:e.pointerUpCell,onPointerOver:e.pointerOverCell,dimension:p,className:e.cellClassName,column:o,row:t},d[`r${t}c${o}`])),"rtl"===e.dir&&r.a.createElement(T,{style:{display:s.length>0?"initial":"none"},dimension:{height:p.height,width:e.rowTitleWidth},className:e.rowTitleClassName},s[t]))),r.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:i,rowTitleWidth:e.rowTitleWidth,dimension:p,columnTitleHeight:l.length>0?e.columnTitleHeight>0?e.columnTitleHeight:p.height:0}),Array.isArray(e.children)&&e.children))});A.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{},pointerDownCell:()=>{},pointerEnterCell:()=>{}},n.f=A}}]);