(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{100:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),o=(r(0),r(112)),s={id:"dateoverflow",title:"Date Overflow",sidebar_label:"Date Overflow"},i={unversionedId:"dateoverflow",id:"dateoverflow",isDocsHomePage:!1,title:"Date Overflow",description:"<iframe",source:"@site/docs\\dateoverflow.md",slug:"/dateoverflow",permalink:"/react-reserver/docs/dateoverflow",version:"current",sidebar_label:"Date Overflow",sidebar:"docs",previous:{title:"Resolve Date Time",permalink:"/react-reserver/docs/resolvedatetime"},next:{title:"Bar Advanced",permalink:"/react-reserver/docs/baradvanced"}},l=[],c={rightToc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/date-overflow-tdmq8?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:500,border:0,borderRadius:4,overflow:"hidden"},title:"Date Overflow",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),";",Object(o.b)("p",null,"As you see here before every render we clip the sides that overflow.\nWe leave a flag in case we want a way to have a visual identification of the change.\nBut how would we have such an identification?\nWe will se in the next section "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"  if (bar.column < 0) {\n              bar.leftOverflow = true\n              bar.length = bar.length + bar.column\n              bar.column = 0\n            }\n\n            if (columnCount < bar.column + bar.length) {\n              bar.rightOverflow = true\n              bar.length = columnCount - bar.column\n            }\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"{74-83} file=../src/examples/DateOverflow.js","{74-83}":!0,file:"../src/examples/DateOverflow.js"}),"import React, { useState, useEffect } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  finishEditingBars,\n  Tag\n} from 'react-reserver'\n\nimport moment from 'moment'\nimport { resolveRow, resolveDateDiff } from './helpers'\nimport { rooms, preMadeReservations } from './testdata'\nimport './example.css'\nimport styles from './basicexamples.module.css'\nexport default function DateOverflow(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  const [startDate] = useState(moment('01-08-2020', 'DD-MM-YYYY'))\n\n  useEffect(() => {\n    const nBars = preMadeReservations.map((bar) => {\n      if (bar.start && bar.end) {\n        bar.length = resolveDateDiff(bar.start, bar.end)\n      }\n\n      if (bar.start && bar.end) {\n        bar.column = resolveDateDiff(startDate, bar.start)\n      }\n\n      if (bar.roomId) {\n        bar.row = resolveRow(rooms, bar.roomId)\n      }\n      return bar\n    })\n\n    setBars(nBars)\n  }, [preMadeReservations])\n\n  return (\n    <React.Fragment>\n      <div style={{ marginBottom: '10px' }}>\n        Start date:{' '}\n        <span className='button button--success'>\n          {' '}\n          {startDate.format('LL')}\n        </span>\n      </div>\n      <Reserver\n        cellClassName={styles.row_cell}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props) => {\n          if (isEditing) {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = finishEditingBars(bars)\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {({ dimension, columnCount }) => {\n          return bars.map((bar) => {\n            if (bar.column < 0) {\n              bar.leftOverflow = true\n              bar.length = bar.length + bar.column\n              bar.column = 0\n            }\n\n            if (columnCount < bar.column + bar.length) {\n              bar.rightOverflow = true\n              bar.length = columnCount - bar.column\n            }\n\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  overflow: 'hidden',\n                  pointerEvents: bar.editing ? 'none' : 'auto',\n                  ...bar.style,\n                  ...getPosition(bar.row, bar.column, dimension)\n                }}\n              >\n                <Tag\n                  style={{\n                    pointerEvents: 'none',\n                    color: '#fff',\n                    width: dimension.width * bar.length\n                  }}\n                >\n                  {bar.guestName}\n                </Tag>\n              </Bar>\n            )\n          })\n        }}\n      </Reserver>\n    </React.Fragment>\n  )\n}\n")))}u.isMDXComponent=!0},112:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),p=t,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?a.a.createElement(d,i(i({ref:n},c),{},{components:r})):a.a.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);