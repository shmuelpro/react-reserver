(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?r.a.createElement(f,l(l({ref:n},c),{},{components:t})):r.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return N})),t.d(n,"b",(function(){return B})),t.d(n,"c",(function(){return k})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return A})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return a})),t.d(n,"j",(function(){return M})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return j}));var o=t(0),r=t.n(o);function i(...e){const[n,t]=Object(o.useState)();return Object(o.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(e)]),n}const s=(e,n,t)=>t>=e&&n>=t;function l(e){return isNaN(e)?e:{width:e,height:e}}function a(e,n,t,o=0,r=0){return{left:o+n*(t=l(t)).width,top:e*t.height+r}}function c(e,n,t){return e=l(e),Math.floor((n-t)/e.width)}function u(e,n){return e=l(e),Math.floor(n/e.height)}function d(e,n,t){return e.map(e=>{if(e.editing){let o=p(e,n.cell);return"function"==typeof t&&(o=t(o)),o}return e})}function m(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function p(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";const t={row:e.row,column:n.column,length:e.column-n.column+e.length};return{...e,...t}}e.stick="left";const t={row:e.row,column:e.column,length:n.column-e.column+1};return{...e,...t}}function f(e){let n=[...e];return e.filter(e=>e.editing).forEach(e=>{const[t,o]=function(e,n){let t={...n};return[e.flatMap(e=>{if(e.id===n.id)return[];if(t.row===e.row){const n=e.column+1,o=t.column+1,r=e.column+e.length,i=t.column+t.length;if(s(n,r,o)||s(n,r,i)||s(o,i,r)||s(o,i,n)){const[n,o]=h(e,t);return t=o,n}{const[n,o]=g(e,t);return t=o,n}}{const[n,o]=g(e,t);return t=o,n}}),t]}(n,e);t.push(o),n=t}),n}const h=(e,n)=>((e=b(e)).collisions[n.id]="",(n=b(n)).collisions[e.id]="",[e,n]),b=e=>(e.collisions||(e.collisions={}),e),g=(e,n)=>(delete(e=b(e)).collisions[n.id],delete(n=b(n)).collisions[e.id],[e,n]),y="ADD",w="EDIT",v="DELETE",O="SET_BARS",E="SET_IS_EDITING";function M(e,n){switch(n.type){case O:return{...e,bars:n.payload};case w:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t[o]=n.payload,{...e,bars:t}}case y:{const t=[...e.bars];return t.push(n.payload),{...e,bars:t}}case v:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t.splice(o,1),{...e,bars:t}}case E:return{...e,isEditing:n.payload}}}function j(e,n){const[{bars:t,isEditing:r},i]=Object(o.useReducer)(e,{bars:n,isEditing:!1});return{isEditing:r,setIsEditing:e=>i({payload:e,type:E}),bars:t,addBar:e=>i({payload:e,type:y}),editBar:e=>i({payload:e,type:w}),deleteBar:e=>i({payload:e,type:v}),setBars:e=>i({payload:e,type:O})}}function P(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function C(e,n=0,t=4){if(n!==t)return Array.isArray(e)?e.map(e=>C(e,n+1)):P(e)?Object.keys(e).map(t=>t+" : "+C(e[t],n+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function D(...e){const[n,t]=Object(o.useState)({});return Object(o.useEffect)(()=>{if(P(e[0]))t(e[0]);else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(C(e))]),n}function N(e){const n=D(e.content,e.length);return r.a.createElement("div",{id:e.id,role:"listitem",onDragStart:n=>{e.onDragStart(n,e)},onDragEnd:n=>{e.onDragEnd(n,e)},onClick:n=>{e.onClick(n,e)},onMouseOver:n=>{e.onMouseOver(n,e)},onContextMenu:n=>{e.onContextMenu(n,e)},onMouseEnter:n=>{e.onMouseEnter(n,e)},onMouseLeave:n=>{e.onMouseLeave(n,e)},onMouseMove:n=>{e.onMouseMove(n,e)},onMouseDown:n=>{e.onMouseDown(n,e)},onMouseUp:n=>{e.onMouseUp(n,e)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown(n,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((t,o)=>{const i=function(e,n,t,o,i){return 0===e?o||t[e]||r.a.createElement("div",null):n-1===e?i||t[n-1]||r.a.createElement("div",null):t[e]||r.a.createElement("div",null)}(o,e.length,n,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return r.a.createElement(r.a.Fragment,{key:o},r.a.cloneElement(i,{...i.props,style:s},i.props.children))}),e.children)}function T(e){return r.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:n=>{n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:n=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:n=>{"function"==typeof e.onMouseEnter&&e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerEnter:n=>{"function"==typeof e.onPointerEnter&&e.onPointerEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerLeave:n=>{"function"==typeof e.onPointerLeave&&e.onPointerLeave({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerMove:n=>{"function"==typeof e.onPointerMove&&e.onPointerMove({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOut:n=>{"function"==typeof e.onPointerOut&&e.onPointerOut({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOver:n=>{"function"==typeof e.onPointerOver&&e.onPointerOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:n=>{"function"==typeof e.onMouseDown&&e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerUp:n=>{"function"==typeof e.onPointerUp&&e.onPointerUp({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:n=>{e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:n=>{e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function x(e){return r.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&r.a.createElement(T,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((n,t)=>r.a.createElement(T,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)),"rtl"===e.dir&&r.a.createElement(T,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function B(e){return r.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function k(e){return r.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function S(e=15){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function A(e,n,t){return{id:S(),length:1,dimension:e,editing:!0,...n,...t}}function I(...e){const[n,t]=Object(o.useState)([]);return Object(o.useEffect)(()=>{if(P(e[0])){const n=e[0].func;"function"==typeof n&&(e.splice(0,1),t(n(...e)))}else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}else Array.isArray(e[0])&&t(e[0])},[JSON.stringify(e)]),n}N.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},T.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},x.defaultProps={onMouseOverCell:()=>{}};const U=r.a.forwardRef((e,n)=>{const t=i(u,e.dimension,e.height),s=i(c,e.dimension,e.width,e.rowTitleWidth),l=I(e.rowTitles,t),a=I(e.columnTitles,s),d=D(e.content,s,t),m=function(e){const[n,t]=Object(o.useState)({width:0,height:0});return Object(o.useEffect)(()=>{isNaN(e)?P(e)?t(e):t({width:-1,height:-1}):t({width:e,height:e})},[JSON.stringify(e)]),n}(e.dimension);return r.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,onPointerMove:e.pointerMoveGrid,onPointerCancel:e.pointerCancelGrid,style:{...e.style,position:"relative"}},r.a.createElement(x,{columnTitles:a,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:a.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(t)].map((n,t)=>r.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&r.a.createElement(T,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]),[...Array(s)].map((n,o)=>r.a.createElement(T,{key:`r${t}c${o}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,onPointerDown:e.pointerDownCell,onPointerMove:e.pointerMoveCell,onPointerEnter:e.pointerEnterCell,onPointerLeave:e.pointerLeaveCell,onPointerUp:e.pointerUpCell,onPointerOver:e.pointerOverCell,dimension:m,className:e.cellClassName,column:o,row:t},d[`r${t}c${o}`])),"rtl"===e.dir&&r.a.createElement(T,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]))),r.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:a.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))});U.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{},pointerDownCell:()=>{},pointerEnterCell:()=>{}},n.f=U},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return f})),t.d(n,"default",(function(){return b}));var o=t(2),r=t(6),i=t(0),s=t.n(i),l=t(113),a=t(114),c=t(47),u=t.n(c);function d(e){const{bars:n,isEditing:t,setIsEditing:r,addBar:i,setBars:l}=Object(a.l)(a.j,[]);return s.a.createElement(a.f,{cellClassName:u.a.row_cell,mouseDownCell:e=>{const n=Object(a.e)(e.dimension,e.cell);i(n),r(!0)},mouseEnterCell:e=>{if(t){const t=Object(a.k)(n,e);l(t)}},mouseUpCell:()=>{const e=Object(a.h)(n);l(e),r(!1)}},()=>n.map(e=>s.a.createElement(a.a,Object(o.a)({key:e.id},e,{style:{...e.style,...Object(a.i)(e.row,e.column,e.dimension)}}))))}var m={id:"basicplusplus",title:"Basic++",sidebar_label:"Basic++"},p={unversionedId:"basicplusplus",id:"basicplusplus",isDocsHomePage:!1,title:"Basic++",description:"Ok so you ran the basic example and you want to see more.",source:"@site/docs\\basicplusplus.md",slug:"/basicplusplus",permalink:"/react-reserver/docs/basicplusplus",version:"current",sidebar_label:"Basic++",sidebar:"docs",previous:{title:"Basic",permalink:"/react-reserver/docs/basic"},next:{title:"Column Title",permalink:"/react-reserver/docs/columntitle"}},f=[],h={rightToc:f};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Ok so you ran the basic example and you want to see more."),Object(l.b)("p",null,"Here it is "),Object(l.b)(d,{mdxType:"BasicPlusPlus"}),Object(l.b)("p",null,"You are probably thinking hey wait this looks exactly the same!"),Object(l.b)("p",null,"so lets look at the code"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"file=../src/examples/BasicPlusPlus.js",file:"../src/examples/BasicPlusPlus.js"}),"import React from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  finishEditingBars\n} from 'react-reserver'\nimport styles from './basicexamples.module.css'\nexport default function BasicPlusPlus(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  return (\n    <Reserver\n      cellClassName={styles.row_cell}\n      mouseDownCell={(props) => {\n        const newbar = createBar(props.dimension, props.cell)\n        addBar(newbar)\n        setIsEditing(true)\n      }}\n      mouseEnterCell={(props) => {\n        if (isEditing) {\n          const nBars = resizeBars(bars, props)\n          setBars(nBars)\n        }\n      }}\n      mouseUpCell={() => {\n        const dBars = finishEditingBars(bars)\n        setBars(dBars)\n        setIsEditing(false)\n      }}\n    >\n      {() => {\n        return bars.map((bar) => {\n          return (\n            <Bar\n              key={bar.id}\n              {...bar}\n              style={{\n                ...bar.style,\n                ...getPosition(bar.row, bar.column, bar.dimension)\n              }}\n            />\n          )\n        })\n      }}\n    </Reserver>\n  )\n}\n")),Object(l.b)("p",null,"First we are adding ",Object(l.b)("strong",{parentName:"p"},"editing")," and ",Object(l.b)("strong",{parentName:"p"},"setIsEditing"),".\nWhy do we need this? since otherwise every time we hover over a cell it runs ",Object(l.b)("strong",{parentName:"p"},"resizeBar")," and ",Object(l.b)("strong",{parentName:"p"},"setBars"),".\nSo we make sure that we actually started editing before we run the functions."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"})," {() => {\n\n            return bars.map((bar) => {\n                return <Bar key={bar.id} {...bar} style={{ ...bar.style, ...getPosition(bar.row, bar.column, bar.dimension) }} />\n            })\n        }\n")),Object(l.b)("p",null,"Here we are passing in a function instead of an array of the objects as children. We will need this later when the component will pass arguments into the function.\nWe also pass bar.style back into the style prop, we didnt do it before because we werent styling the component but now we should take it into consideration. "),Object(l.b)("p",null,"Next we will see how we can give titles to our columns"))}b.isMDXComponent=!0}}]);