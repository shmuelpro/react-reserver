(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return E})),t.d(n,"metadata",(function(){return M})),t.d(n,"rightToc",(function(){return x})),t.d(n,"default",(function(){return T}));var r=t(2),o=t(6),i=t(0),a=t.n(i),s=t(113),c=t(114),l=t(112),u=t.n(l),d=t(250),f=t(248);function m(e){var n=document.createDocumentFragment();return e.forEach((function(e){n.appendChild(function(e){var n=document.createElementNS("http://www.w3.org/2000/svg",e.type);Object.keys(e).forEach((function(t){"type"!==t&&"children"!==t&&n.setAttribute(t,e[t])})),Array.isArray(e.children)&&(console.log(e.children),n.appendChild(m(e.children)));return n}(e))})),n}function h(e){return a.a.createElement("div",{style:{width:e.width,display:"inline-block",color:"#adb3b8",paddingLeft:"10px",borderLeft:"1px solid #d2d2d2"}},e.children," ")}function g(e){return Object(f.a)(e.date,e.columnCount,"days").map((function(n,t){return a.a.createElement("div",{key:n,style:{background:e.titleRange[t]?"#1ca3f9":"#fff",height:"100%",width:"100%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",fontWeight:500},onMouseOver:function(){return e.setPointerLocation(v(t,e.cellDimesions.width,e.rowTitleWidth,e.columnTitleHeight))},onClick:function(){console.log(isDragging)}},a.a.createElement("div",null,n))}))}function p(e){return"M "+e.start.x+" "+e.start.y+" C  "+e.centerA.x+" "+e.centerA.y+", "+e.centerB.x+" "+e.centerB.y+" ,"+e.center.x+" "+e.center.y+"  S "+e.endA.x+" "+e.endA.y+", "+e.end.x+" "+e.end.y}function y(e,n,t){return{centerA:{x:e.x+100,y:e.y},centerB:{x:e.x+100,y:n.y},endA:{x:t.x-150,y:t.y}}}function j(e){return a.a.createElement("div",{style:Object.assign({pointerEvents:"none",zIndex:"999",position:"absolute"},e.dimensions)},a.a.createElement("svg",{viewBox:"0 0 "+e.dimensions.width+" "+e.dimensions.height,xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrow",viewBox:"0 -5 10 10",refX:"8",refY:"0",markerWidth:"10",markerHeight:"10",orient:"auto"},a.a.createElement("path",{d:"M0,-5L10,0L0,5"}))),e.bars.flatMap((function(n,t){if(e.exceptions["from"+n.id])return[];if(n.moving)return[];if(n.to){var r=e.bars.findIndex((function(e){return e.id===n.to})),o=(i=n,s=e.bars[r],c=e.rowTitleWidth,l=e.columnTitleHeight,u=w(i.column+i.length,i.dimension.width,l,i.row,i.dimension.height,c),d=w(s.column,s.dimension.width,l,s.row,s.dimension.height,c),f=b(u,d),m=y(u,f,d),Object.assign({start:u,center:f},m,{end:d}));return a.a.createElement("path",{key:e.bars[r].id+"=>"+n.id,d:p(o),stroke:"black",fill:"transparent",markerEnd:"url(#arrow)"})}var i,s,c,l,u,d,f,m;return[]})),a.a.createElement("circle",{cx:e.pointerLocation.x,cy:e.pointerLocation.y,r:"5",fill:"#13aaf5"}),a.a.createElement("line",{x1:e.pointerLocation.x,y1:e.pointerLocation.y,x2:e.pointerLocation.x,y2:e.dimensions.height,stroke:"#13aaf5"})))}function v(e,n,t,r){return{x:e*n+n/2+t,y:r}}function b(e,n){return{x:(e.x-n.x)/2+n.x,y:(n.y-e.y)/2+e.y}}function w(e,n,t,r,o,i){return{x:e*n+i,y:(r+.5)*o+t}}function O(e){var n,t=Object(c.l)(c.j,[]),o=t.bars,s=t.isEditing,l=t.setIsEditing,O=t.addBar,E=t.setBars,M=t.editBar,x=Object(i.useState)([]),k=x[0],T=x[1],C=Object(i.useRef)(),D=u()("26/04/2019","DD/MM/YYYY"),N={width:80,height:40},S=Object(i.useState)(0),A=S[0],L=S[1],I=Object(i.useState)({width:0,height:0}),z=I[0],P=I[1],B=Object(i.useState)({width:0,height:0}),R=B[0],W=B[1],H=function(e,n){if("undefined"==typeof window||"undefined"==typeof document)return function(){};var t=Object(i.useRef)(document.createElementNS("http://www.w3.org/2000/svg","svg"));return Object(i.useEffect)((function(){Object.keys(e).forEach((function(n){var r=e[n];if("style"===n){var o="";Object.keys(r).forEach((function(n){var t=r[n];"number"==typeof e[n]&&(t+="px"),o+=n+":"+t+";"})),r=o}t.current.setAttribute(n,r)}));var r=document.querySelector("body");if(r.appendChild(t.current),n){var o=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=m(n);o.appendChild(i),t.current.appendChild(o)}return function(){r.removeChild(t.current)}}),[JSON.stringify(e),JSON.stringify(n)]),function(e){t.current.innerHTML="";var n=m(e);t.current.appendChild(n)}}(R),Y=Object(i.useState)({x:50,y:50}),F=Y[0],J=Y[1],U=Object(i.useState)(!1),G=U[0],X=U[1],V=Object(i.useState)({}),_=V[0],q=V[1],K=Object(i.useState)({}),Q=K[0],Z=K[1],$=Object(i.useRef)(),ee=function(e,n,t,r){void 0===r&&(r=0);var o=Object(i.useState)([]),s=o[0],c=o[1],l=n.format("MMMM"),u=0;return Object(i.useEffect)((function(){var r=[];[].concat(Array(e)).forEach((function(e,o){var i=n.clone().add(o,"days").format("MMMM");l!==i&&u>0&&(r.push(a.a.createElement(h,{key:l,width:u},l)),u=0,l=i),u+=t})),u>0&&r.push(a.a.createElement(h,{key:l,width:u},l)),c(r)}),[e,n.format("MMMM"),t]),s}(A,D,N.width,200),ne=function(){if("undefined"==typeof window||"undefined"==typeof document)return function(){};var e=Object(i.useRef)(document.createElement("style"));return Object(i.useEffect)((function(){e.current.type="text/css",document.querySelector("head").appendChild(e.current)}),[]),function(n){e.current.innerHTML=n}}();return Object(i.useEffect)((function(){var e=C.current.getBoundingClientRect(),n=$.current.getBoundingClientRect(),t=n.width,r=n.height;P({width:t,height:r,winWidth:e.width}),J(v(0,N.width,200,30))}),[$.current]),Object(i.useEffect)((function(){var e=$.current.getBoundingClientRect(),n=e.width,t=e.height;W({width:n,height:t,style:{"pointer-events":"none",position:"absolute",top:$.current.offsetTop,left:$.current.offsetLeft}})}),[$.current,ee]),Object(i.useEffect)((function(){var e=d.e.map((function(e){return e.dimension=N,e.start&&e.end&&(e.length=Object(f.g)(e.start,e.end)),e.start&&e.end&&(e.column=Object(f.g)(D,e.start)),e.roomId&&(e.row=Object(f.h)(rooms,e.roomId)),e}));E(e)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},a.a.createElement("div",{style:{width:z.width-200,marginLeft:200,marginBottom:"5px"}},ee),a.a.createElement("div",{ref:C,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},a.a.createElement(j,{exceptions:k,bars:o,rowTitleWidth:200,dimensions:z,columnTitleHeight:30,pointerLocation:F}),a.a.createElement(c.f,((n={ref:$,width:z.winWidth,columnTitleHeight:30,dimension:N,rowTitleWidth:200,rowTitles:function(){return[{name:"Foundational",rows:6},{name:"Travel + lodging",rows:1}].flatMap((function(e){return[].concat(Array(e.rows)).map((function(n,t){return 0===t?a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"10px"}},e.name)):a.a.createElement("div",null)}))}))},columnTitles:{func:function(e){return L(e),g({date:D,columnCount:e,titleRange:Q,setPointerLocation:J,cellDimesions:N,rowTitleWidth:200,columnTitleHeight:30})},titleRange:Q},content:function(e,n){var t={};return[].concat(Array(n)).forEach((function(n,r){[].concat(Array(e)).forEach((function(e,n){t["r"+r+"c"+n]=a.a.createElement(c.b,{style:{background:n%2==0?"#EDF1F2":"#F6F8F9"}})}))})),t},mouseDownCell:function(e){var n=Object(c.e)(e.dimension,e.cell),t={};[].concat(Array(n.length)).forEach((function(e,r){t[r+n.column]=!0})),Z(t),O(n),q(n),l(!0)},mouseMoveGrid:function(e){if(G){var n=[];if(_.to){e.pageX,e.pageY;var t=e.currentTarget.getBoundingClientRect(),r=e.pageX-t.left,o=e.pageY-t.top,i=k.to,a={x:r+k.barEnd.x,y:o+k.barEnd.y},s=b(a,i),c=y(a,s,i);n.push({type:"path",d:p(Object.assign({},c,{start:a,center:s,end:i})),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}if(_.from){var l=e.currentTarget.getBoundingClientRect(),u=e.pageX-l.left,d=e.pageY-l.top,f={x:u-k.barStart.x,y:d-k.barStart.y},m=k.from,h=b(m,f),g=y(m,h,f);n.push({type:"path",d:p(Object.assign({},g,{start:m,center:h,end:f})),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}H(n),ne(".reserver-drag{transform: translate("+(e.pageX-_.draggingLeft)+"px,"+(e.pageY-_.draggingTop)+"px)}")}},mouseEnterCell:function(e){if(s){var n=Object(c.k)(o,e,(function(e){return positionToDate(e,D)}));n=checkCollisions(n),E(n)}}}).mouseEnterCell=function(e){if(G&&!s){var n={};[].concat(Array(_.length)).forEach((function(t,r){n[r+e.cell.column-_.selectedCell]=!0})),Z(n)}if(s){var t=Object(c.g)(_,e.cell);console.log(t.length);var r={};[].concat(Array(t.length)).forEach((function(e,n){r[n+t.column]=!0})),Z(r),q(t),M(t)}},n.mouseUpCell=function(e){var n=e.cell;if(G){var t=Object.assign({},_,{row:n.row,column:n.column-_.selectedCell,moving:!1});M(t),H([]),T({}),ne(".reserver-drag{transform: translate(0px,0px)}"),Z({}),X(!1)}if(s){var r=Object(c.h)(o);E(r),Z({}),l(!1)}},n),(function(e){var n=e.columnTitleHeight,t=e.rowTitleWidth;return o.map((function(e){return a.a.createElement(c.a,Object(r.a)({draggable:!0},e,{onDragStart:function(e,r){if(s)e.preventDefault();else{var i=e.currentTarget.getBoundingClientRect(),a=e.pageX-i.left,c=e.pageY-i.top,l=parseInt(a/r.dimension.width),u=Object.assign({},r,{selectedCell:l,moving:!0,draggingLeft:e.pageX,draggingTop:e.pageY}),d={};if(d.barEnd={x:r.dimension.width*r.length-a,y:r.dimension.height-.5*r.dimension.height-c},d.barStart={x:a,y:c-.5*r.dimension.height},r.to){var f=o.findIndex((function(e){return e.id===r.to})),m=o[f];f>-1&&(console.log(o),console.log("toColumn",m.column),d.to=w(m.column,m.dimension.width,n,m.row,m.dimension.height,t))}if(r.from){var h=o.findIndex((function(e){return e.id===r.from})),g=o[h];if(d["from"+g.id]=g.id,h>-1){var p=w(g.column,g.dimension.width,n,g.row,g.dimension.height,t);d.from={x:g.dimension.width*g.length+p.x,y:p.y}}}T(d),M(u),q(u),X(!0)}},key:e.id,className:e.moving?"reserver-drag":"",lastContent:a.a.createElement("div",{style:{zIndex:1e4}},a.a.createElement("img",{style:{float:"right"},onMouseDown:function(){var n=Object.assign({},e,{stick:"left",editing:!0});M(n),q(n),l(!0)},src:"/react-reserver/resources/images/dragicon.png"})),style:Object.assign({},e.style,{borderRadius:"6px",pointerEvents:e.editing||e.moving?"none":"auto",zIndex:1e3},Object(c.i)(e.row,e.column,e.dimension,t,n))}),a.a.createElement(c.c,{style:{display:"flex",alignItems:"center"}},a.a.createElement("div",{style:{margin:"5px",width:25}},a.a.createElement("img",{style:{borderRadius:"100%"},src:"/react-reserver/resources/images/"+(e.img||"default.jpg")})),a.a.createElement("div",{style:{width:e.length*e.dimension.width-40,overflow:"hidden",color:"#fff"}},e.text)))}))})))))}var E={id:"projecttimeline",title:"Project Timeline",sidebar_label:"Project Timeline"},M={unversionedId:"projecttimeline",id:"projecttimeline",isDocsHomePage:!1,title:"Project Timeline",description:"This is a work in progress but I wanted to see if I could replicate the Asana Timeline",source:"@site/docs\\projecttimeline.md",slug:"/projecttimeline",permalink:"/react-reserver/docs/projecttimeline",version:"current",sidebar_label:"Project Timeline",sidebar:"docs",previous:{title:"Right To Left",permalink:"/react-reserver/docs/righttoleft"},next:{title:"Hotel Reservation",permalink:"/react-reserver/docs/hotelreservation"}},x=[],k={rightToc:x};function T(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This is a work in progress but I wanted to see if I could replicate the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://luna1.co/330812.png"}),"Asana Timeline"),"\nI need to improve the SVG curves between the bars. But it works\nFeel free to drag the bars around and see how everything moves."),Object(s.b)(O,{mdxType:"ProjectTimeline"}))}T.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(a,".").concat(m)]||d[m]||f[m]||i;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return C})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return A})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return I})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return f})),t.d(n,"i",(function(){return c})),t.d(n,"j",(function(){return E})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return M}));var r=t(0),o=t.n(r);function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),i=o[0],a=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),i}var a=function(e,n,t){return t>=e&&n>=t};function s(e){return isNaN(e)?e:{width:e,height:e}}function c(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*(t=s(t)).width,top:e*t.height+o}}function l(e,n,t){return e=s(e),Math.floor((n-t)/e.width)}function u(e,n){return e=s(e),Math.floor(n/e.height)}function d(e,n,t){return e.map((function(e){if(e.editing){var r=m(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function f(e){return e.map((function(e){return e.editing?Object.assign({},e,{editing:!1}):e}))}function m(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return Object.assign({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return Object.assign({},e,r)}function h(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=Object.assign({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,i=e.column+e.length,s=t.column+t.length;if(a(r,i,o)||a(r,i,s)||a(o,s,i)||a(o,s,r)){var c=g(e,t),l=c[0],u=c[1];return t=u,l}var d=y(e,t),f=d[0],m=d[1];return t=m,f}var h=y(e,t),p=h[0],j=h[1];return t=j,p})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var g=function(e,n){return(e=p(e)).collisions[n.id]="",(n=p(n)).collisions[e.id]="",[e,n]},p=function(e){return e.collisions||(e.collisions={}),e},y=function(e,n){return delete(e=p(e)).collisions[n.id],delete(n=p(n)).collisions[e.id],[e,n]},j="ADD",v="EDIT",b="DELETE",w="SET_BARS",O="SET_IS_EDITING";function E(e,n){switch(n.type){case w:return Object.assign({},e,{bars:n.payload});case v:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,Object.assign({},e,{bars:t});case j:var o=[].concat(e.bars);return o.push(n.payload),Object.assign({},e,{bars:o});case b:var i=[].concat(e.bars),a=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(a,1),Object.assign({},e,{bars:i});case O:return Object.assign({},e,{isEditing:n.payload})}}function M(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],i=o.bars,a=o.isEditing,s=t[1];return{isEditing:a,setIsEditing:function(e){return s({payload:e,type:O})},bars:i,addBar:function(e){return s({payload:e,type:j})},editBar:function(e){return s({payload:e,type:v})},deleteBar:function(e){return s({payload:e,type:b})},setBars:function(e){return s({payload:e,type:w})}}}function x(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function k(e,n,t){if(void 0===n&&(n=0),void 0===t&&(t=4),n!==t)return Array.isArray(e)?e.map((function(e){return k(e,n+1)})):x(e)?Object.keys(e).map((function(t){return t+" : "+k(e[t],n+1)})):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function T(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)({}),i=o[0],a=o[1];return Object(r.useEffect)((function(){if(x(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(k(n))]),i}function C(e){var n=T(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onDragEnd:function(n){e.onDragEnd(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},onMouseMove:function(n){e.onMouseMove(n,e)},onMouseDown:function(n){e.onMouseDown(n,e)},onMouseUp:function(n){e.onMouseUp(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(t,r){var i=function(e,n,t,r,i){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?i||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),a=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(i,Object.assign({},i.props,{style:a}),i.props.children))})),e.children)}function D(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:function(n){e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:Object.assign({overflow:"hidden",width:e.dimension.width,height:e.dimension.height},e.style)},e.children)}function N(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((function(n,t){return o.a.createElement(D,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)})),"rtl"===e.dir&&o.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function S(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function A(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function L(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function I(e,n,t){return Object.assign({id:L(),length:1,dimension:e,editing:!0},n,t)}function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),i=o[0],a=o[1];return Object(r.useEffect)((function(){if(x(n[0])){var e=n[0].func;"function"==typeof e&&(n.splice(0,1),a(e.apply(void 0,n)))}else if("function"==typeof n[0]){var t=n.splice(0,1);a(t[0].apply(t,n))}else Array.isArray(n[0])&&a(n[0])}),[JSON.stringify(n)]),i}C.defaultProps={style:{},dimension:{width:20,height:20},onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onDragEnd:function(){},onContextMenu:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseMove:function(){},length:1,content:{}},D.defaultProps={onMouseEnter:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseOver:function(){},onDrop:function(){}},N.defaultProps={onMouseOverCell:function(){}};var P=o.a.forwardRef((function(e,n){var t=i(u,e.dimension,e.height),a=i(l,e.dimension,e.width,e.rowTitleWidth),s=z(e.rowTitles,t),c=z(e.columnTitles,a),d=T(e.content,a,t),f=function(e){var n=Object(r.useState)({width:0,height:0}),t=n[0],o=n[1];return Object(r.useEffect)((function(){isNaN(e)?x(e)?o(e):o({width:-1,height:-1}):o({width:e,height:e})}),[JSON.stringify(e)]),t}(e.dimension);return o.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:Object.assign({},e.style,{position:"relative"})},o.a.createElement(N,{columnTitles:c,columnCount:a,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:f,isVisible:c.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[].concat(Array(t)).map((function(n,t){return o.a.createElement("div",{role:"rowgroup",key:t,style:{height:f.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(D,{style:{display:s.length>0?"initial":"none"},dimension:{height:f.height,width:e.rowTitleWidth},className:e.rowTitleClassName},s[t]),[].concat(Array(a)).map((function(n,r){return o.a.createElement(D,{key:"r"+t+"c"+r,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:f,className:e.cellClassName,column:r,row:t},d["r"+t+"c"+r])})),"rtl"===e.dir&&o.a.createElement(D,{style:{display:s.length>0?"initial":"none"},dimension:{height:f.height,width:e.rowTitleWidth},className:e.rowTitleClassName},s[t]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:a,rowTitleWidth:e.rowTitleWidth,dimension:f,columnTitleHeight:c.length>0?e.columnTitleHeight>0?e.columnTitleHeight:f.height:0}),Array.isArray(e.children)&&e.children))}));P.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){},mouseMoveGrid:function(){}},n.f=P},248:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"f",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"h",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return f}));var r=t(112),o=t.n(r);function i(e,n,t,r="D"){return[...Array(n)].map((n,o)=>s(e,o,t,r))}function a(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function s(e,n,t,r){return o()(e).add(n,t).format(r)}function c(e,n,t="DD-MM-YYYY"){const r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function l(e,n){return e[n].row}function u(e,n,t="unit",r="DD-MM-YYYY"){return e.start=n.clone().add(e.column,t).format(r),e.end=n.clone().add(e.column+e.length,t).format(r),e}function d(){let e="#";for(let n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function f(e){for(const n in e)return!1;return!0}},250:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return c}));const r=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],o=[{id:1,type:"full",to:2,from:4,start:"26-04-2019",end:"28-04-2019",img:"32.jpg",text:"Reach out to potention guest speakers",row:3},{id:2,type:"empty",from:1,start:"28-04-2019",end:"30-04-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:5},{id:4,type:"empty",to:1,start:"27-04-2019",end:"01-05-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:8}],i=[{id:563,start:"26-04-2019",end:"28-04-2019",name:"Jorge Vega",row:3},{id:9901,start:"28-04-2019",end:"30-04-2019",name:"Trevor Mathis",row:5},{id:1234,start:"27-04-2019",end:"01-05-2019",name:"Clifford Campbell",row:8}],a={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},s=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],c=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},253:function(e,n,t){var r={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=253}}]);