(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return h})),t.d(n,"rightToc",(function(){return j})),t.d(n,"default",(function(){return g}));var o=t(2),r=t(6),s=t(0),i=t.n(s),l=t(113),a=t(114),c=t(47),u=t.n(c),d=t(249),m=t(257);function f(e){const{bars:n,isEditing:t,setIsEditing:r,addBar:l,setBars:c}=Object(a.l)(a.j,[]),[f,p]=Object(s.useState)({});return Object(m.a)(()=>{const e={...f};e[`r${Object(d.c)(0,25)}c${Object(d.c)(0,25)}`]=i.a.createElement(a.b,{style:{background:Object(d.b)()}},Object(d.c)(0,250)),p(e)},150),i.a.createElement(a.f,{cellClassName:u.a.row_cell,content:f,mouseDownCell:e=>{const n=Object(a.e)(e.dimension,e.cell);l(n),r(!0)},mouseEnterCell:e=>{if(t){const t=Object(a.k)(n,e);c(t)}},mouseUpCell:()=>{const e=n.map(e=>e.editing?{...e,editing:!1,style:{...e.style,pointerEvents:"auto"}}:e);c(e),r(!1)}},()=>n.map(e=>i.a.createElement(a.a,Object(o.a)({key:e.id},e,{style:{...e.style,...Object(a.i)(e.row,e.column,e.dimension)}}))))}var p={id:"content",title:"Grid Content",sidebar_label:"Grid Content"},h={unversionedId:"content",id:"content",isDocsHomePage:!1,title:"Grid Content",description:"This is kinda a crazy example but I think it illustrates the solution pretty well.",source:"@site/docs\\content.md",slug:"/content",permalink:"/react-reserver/docs/content",version:"current",sidebar_label:"Grid Content",sidebar:"docs",previous:{title:"Bar Advanced",permalink:"/react-reserver/docs/baradvanced"},next:{title:"Content Crosshairs",permalink:"/react-reserver/docs/contentcrosshairs"}},j=[],y={rightToc:j};function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This is kinda a crazy example but I think it illustrates the solution pretty well.\nYou might want to have different content in the grid. maybe its a different color that denotes a more desireable date or maybe there are prices in each cell allowing the reserver to know how much is being payed for each day/hour. either way you want to control what appears inside. "),Object(l.b)("p",null,"In this example I select a random cell and insert a random number with a random color."),Object(l.b)(f,{mdxType:"Content"}),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"file=../src/examples/Content.js",file:"../src/examples/Content.js"}),"import React, { useState } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  Peg\n} from 'react-reserver'\nimport styles from './basicexamples.module.css'\nimport { getRandomColor, getRandomInt } from './helpers'\nimport { useInterval } from './hooks'\nexport default function Content(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n\n  const [content, setContent] = useState({})\n\n  useInterval(() => {\n    const c = { ...content }\n    c[`r${getRandomInt(0, 25)}c${getRandomInt(0, 25)}`] = (\n      <Peg style={{ background: getRandomColor() }}>{getRandomInt(0, 250)}</Peg>\n    )\n\n    setContent(c)\n  }, 150)\n\n  return (\n    <Reserver\n      cellClassName={styles.row_cell}\n      content={content}\n      mouseDownCell={(props) => {\n        const newbar = createBar(props.dimension, props.cell)\n        addBar(newbar)\n        setIsEditing(true)\n      }}\n      mouseEnterCell={(props) => {\n        if (isEditing) {\n          const nBars = resizeBars(bars, props)\n          setBars(nBars)\n        }\n      }}\n      mouseUpCell={() => {\n        const dBars = bars.map((bar) => {\n          if (bar.editing) {\n            return {\n              ...bar,\n              editing: false,\n              style: { ...bar.style, pointerEvents: 'auto' }\n            }\n          }\n          return bar\n        })\n\n        setBars(dBars)\n        setIsEditing(false)\n      }}\n    >\n      {() => {\n        return bars.map((bar) => {\n          return (\n            <Bar\n              key={bar.id}\n              {...bar}\n              style={{\n                ...bar.style,\n                ...getPosition(bar.row, bar.column, bar.dimension)\n              }}\n            />\n          )\n        })\n      }}\n    </Reserver>\n  )\n}\n")))}g.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,p=d["".concat(i,".").concat(f)]||d[f]||m[f]||s;return t?r.a.createElement(p,l(l({ref:n},c),{},{components:t})):r.a.createElement(p,l({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return P})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return z})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return I})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return a})),t.d(n,"j",(function(){return E})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return M}));var o=t(0),r=t.n(o);function s(...e){const[n,t]=Object(o.useState)();return Object(o.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(e)]),n}const i=(e,n,t)=>t>=e&&n>=t;function l(e){return isNaN(e)?e:{width:e,height:e}}function a(e,n,t,o=0,r=0){return{left:o+n*(t=l(t)).width,top:e*t.height+r}}function c(e,n,t){return e=l(e),Math.floor((n-t)/e.width)}function u(e,n){return e=l(e),Math.floor(n/e.height)}function d(e,n,t){return e.map(e=>{if(e.editing){let o=f(e,n.cell);return"function"==typeof t&&(o=t(o)),o}return e})}function m(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function f(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";const t={row:e.row,column:n.column,length:e.column-n.column+e.length};return{...e,...t}}e.stick="left";const t={row:e.row,column:e.column,length:n.column-e.column+1};return{...e,...t}}function p(e){let n=[...e];return e.filter(e=>e.editing).forEach(e=>{const[t,o]=function(e,n){let t={...n};return[e.flatMap(e=>{if(e.id===n.id)return[];if(t.row===e.row){const n=e.column+1,o=t.column+1,r=e.column+e.length,s=t.column+t.length;if(i(n,r,o)||i(n,r,s)||i(o,s,r)||i(o,s,n)){const[n,o]=h(e,t);return t=o,n}{const[n,o]=y(e,t);return t=o,n}}{const[n,o]=y(e,t);return t=o,n}}),t]}(n,e);t.push(o),n=t}),n}const h=(e,n)=>((e=j(e)).collisions[n.id]="",(n=j(n)).collisions[e.id]="",[e,n]),j=e=>(e.collisions||(e.collisions={}),e),y=(e,n)=>(delete(e=j(e)).collisions[n.id],delete(n=j(n)).collisions[e.id],[e,n]),g="ADD",b="EDIT",w="DELETE",v="SET_BARS",O="SET_IS_EDITING";function E(e,n){switch(n.type){case v:return{...e,bars:n.payload};case b:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t[o]=n.payload,{...e,bars:t}}case g:{const t=[...e.bars];return t.push(n.payload),{...e,bars:t}}case w:{const t=[...e.bars],o=t.findIndex(e=>n.payload.id===e.id);return t.splice(o,1),{...e,bars:t}}case O:return{...e,isEditing:n.payload}}}function M(e,n){const[{bars:t,isEditing:r},s]=Object(o.useReducer)(e,{bars:n,isEditing:!1});return{isEditing:r,setIsEditing:e=>s({payload:e,type:O}),bars:t,addBar:e=>s({payload:e,type:g}),editBar:e=>s({payload:e,type:b}),deleteBar:e=>s({payload:e,type:w}),setBars:e=>s({payload:e,type:v})}}function C(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function k(e,n=0,t=4){if(n!==t)return Array.isArray(e)?e.map(e=>k(e,n+1)):C(e)?Object.keys(e).map(t=>t+" : "+k(e[t],n+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function D(...e){const[n,t]=Object(o.useState)({});return Object(o.useEffect)(()=>{if(C(e[0]))t(e[0]);else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(k(e))]),n}function P(e){const n=D(e.content,e.length);return r.a.createElement("div",{id:e.id,role:"listitem",onDragStart:n=>{e.onDragStart(n,e)},onDragEnd:n=>{e.onDragEnd(n,e)},onClick:n=>{e.onClick(n,e)},onMouseOver:n=>{e.onMouseOver(n,e)},onContextMenu:n=>{e.onContextMenu(n,e)},onMouseEnter:n=>{e.onMouseEnter(n,e)},onMouseLeave:n=>{e.onMouseLeave(n,e)},onMouseMove:n=>{e.onMouseMove(n,e)},onMouseDown:n=>{e.onMouseDown(n,e)},onMouseUp:n=>{e.onMouseUp(n,e)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown(n,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((t,o)=>{const s=function(e,n,t,o,s){return 0===e?o||t[e]||r.a.createElement("div",null):n-1===e?s||t[n-1]||r.a.createElement("div",null):t[e]||r.a.createElement("div",null)}(o,e.length,n,e.firstContent,e.lastContent),i=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},s.props.style||{});return r.a.createElement(r.a.Fragment,{key:o},r.a.cloneElement(s,{...s.props,style:i},s.props.children))}),e.children)}function N(e){return r.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:n=>{n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:n=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:n=>{"function"==typeof e.onMouseEnter&&e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerEnter:n=>{"function"==typeof e.onPointerEnter&&e.onPointerEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerLeave:n=>{"function"==typeof e.onPointerLeave&&e.onPointerLeave({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerMove:n=>{"function"==typeof e.onPointerMove&&e.onPointerMove({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOut:n=>{"function"==typeof e.onPointerOut&&e.onPointerOut({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerOver:n=>{"function"==typeof e.onPointerOver&&e.onPointerOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:n=>{"function"==typeof e.onMouseDown&&e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerDown:n=>{"function"==typeof e.onPointerDown&&e.onPointerDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onPointerUp:n=>{"function"==typeof e.onPointerUp&&e.onPointerUp({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:n=>{e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:n=>{e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function T(e){return r.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&r.a.createElement(N,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((n,t)=>r.a.createElement(N,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)),"rtl"===e.dir&&r.a.createElement(N,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function x(e){return r.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function z(e){return r.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function S(e=15){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function I(e,n,t){return{id:S(),length:1,dimension:e,editing:!0,...n,...t}}function B(...e){const[n,t]=Object(o.useState)([]);return Object(o.useEffect)(()=>{if(C(e[0])){const n=e[0].func;"function"==typeof n&&(e.splice(0,1),t(n(...e)))}else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}else Array.isArray(e[0])&&t(e[0])},[JSON.stringify(e)]),n}P.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},N.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},T.defaultProps={onMouseOverCell:()=>{}};const A=r.a.forwardRef((e,n)=>{const t=s(u,e.dimension,e.height),i=s(c,e.dimension,e.width,e.rowTitleWidth),l=B(e.rowTitles,t),a=B(e.columnTitles,i),d=D(e.content,i,t),m=function(e){const[n,t]=Object(o.useState)({width:0,height:0});return Object(o.useEffect)(()=>{isNaN(e)?C(e)?t(e):t({width:-1,height:-1}):t({width:e,height:e})},[JSON.stringify(e)]),n}(e.dimension);return r.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,onPointerMove:e.pointerMoveGrid,onPointerCancel:e.pointerCancelGrid,style:{...e.style,position:"relative"}},r.a.createElement(T,{columnTitles:a,columnCount:i,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:a.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(t)].map((n,t)=>r.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&r.a.createElement(N,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]),[...Array(i)].map((n,o)=>r.a.createElement(N,{key:`r${t}c${o}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,onPointerDown:e.pointerDownCell,onPointerMove:e.pointerMoveCell,onPointerEnter:e.pointerEnterCell,onPointerLeave:e.pointerLeaveCell,onPointerUp:e.pointerUpCell,onPointerOver:e.pointerOverCell,dimension:m,className:e.cellClassName,column:o,row:t},d[`r${t}c${o}`])),"rtl"===e.dir&&r.a.createElement(N,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]))),r.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:i,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:a.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))});A.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{},pointerDownCell:()=>{},pointerEnterCell:()=>{}},n.f=A},249:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"f",(function(){return l})),t.d(n,"g",(function(){return a})),t.d(n,"h",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return m}));var o=t(112),r=t.n(o);function s(e,n,t,o="D"){return[...Array(n)].map((n,r)=>l(e,r,t,o))}function i(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function l(e,n,t,o){return r()(e).add(n,t).format(o)}function a(e,n,t="DD-MM-YYYY"){const o=r()(e,t).startOf("day");return r()(n,t).startOf("day").diff(o,"days")}function c(e,n){return e[n].row}function u(e,n,t="unit",o="DD-MM-YYYY"){return e.start=n.clone().add(e.column,t).format(o),e.end=n.clone().add(e.column+e.length,t).format(o),e}function d(){let e="#";for(let n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function m(e){for(const n in e)return!1;return!0}},253:function(e,n,t){var o={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function r(e){var n=s(e);return t(n)}function s(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=253},257:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return i}));var o=t(0);function r(e){const n=Object(o.useRef)();return Object(o.useEffect)(()=>{n.current=e},[e]),n.current}function s(e,n){const t=Object(o.useRef)();Object(o.useEffect)(()=>{t.current=e},[e]),Object(o.useEffect)(()=>{if(null!==n){const e=setInterval((function(){t.current()}),n);return()=>clearInterval(e)}},[n])}function i(e){const[n,t]=Object(o.useState)(!1);function r({key:n}){n===e&&t(!0)}const s=({key:n})=>{n===e&&t(!1)};return Object(o.useEffect)(()=>(window.addEventListener("keydown",r),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",s)}),[]),n}}}]);