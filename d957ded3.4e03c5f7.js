(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(r),b=t,f=l["".concat(o,".").concat(b)]||l[b]||p[b]||c;return r?a.a.createElement(f,s(s({ref:n},u),{},{components:r})):a.a.createElement(f,s({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,o=new Array(c);o[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},88:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return d}));var t=r(2),a=r(6),c=(r(0),r(113)),o={id:"reducer",title:"Reducer",sidebar_label:"Reducer"},s={unversionedId:"reducer",id:"reducer",isDocsHomePage:!1,title:"Reducer",description:"useReserver",source:"@site/docs\\reducer.md",slug:"/reducer",permalink:"/react-reserver/docs/reducer",version:"current",sidebar_label:"Reducer",sidebar:"docs",previous:{title:"Helpers",permalink:"/react-reserver/docs/helpers"},next:{title:"Todo list for Documentation",permalink:"/react-reserver/docs/todo"}},i=[{value:"useReserver",id:"usereserver",children:[]},{value:"reserverReducer",id:"reserverreducer",children:[]},{value:"actionTypes",id:"actiontypes",children:[]}],u={rightToc:i};function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"usereserver"},"useReserver"),Object(c.b)("h4",{id:"function"},"function"),Object(c.b)("p",null,"Takes a reducer and the initialState\nreturns",Object(c.b)("br",{parentName:"p"}),"\n","isEditing,\nsetIsEditing,\nbars,\naddBar,\neditBar,\ndeleteBar,\nsetBars"),Object(c.b)("p",null,"isEditing is a boolean and defaults to false"),Object(c.b)("p",null,"bars is an array of objects representing the different bars. "),Object(c.b)("h2",{id:"reserverreducer"},"reserverReducer"),Object(c.b)("h4",{id:"function-1"},"function"),Object(c.b)("p",null,"This is the reducer. feel free to write your own "),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"\nimport actionTypes from './actionTypes'\n\nexport default function reserverReducer(state, action) {\n  switch (action.type) {\n    case actionTypes.setBars: {\n      return { ...state, bars: action.payload }\n    }\n    case actionTypes.edit: {\n      const nBars = [...state.bars]\n      const bIndex = nBars.findIndex((bar) => {\n        return action.payload.id === bar.id\n      })\n\n      nBars[bIndex] = action.payload\n\n      return { ...state, bars: nBars }\n    }\n    case actionTypes.add: {\n      const bars = [...state.bars]\n\n      bars.push(action.payload)\n\n      return { ...state, bars: bars }\n    }\n\n    case actionTypes.delete: {\n      const nBars = [...state.bars]\n      const bIndex = nBars.findIndex((bar) => {\n        return action.payload.id === bar.id\n      })\n\n      nBars.splice(bIndex, 1)\n\n      return { ...state, bars: nBars }\n    }\n    case actionTypes.setIsEditing: {\n      return { ...state, isEditing: action.payload }\n    }\n  }\n}\n\n")),Object(c.b)("h2",{id:"actiontypes"},"actionTypes"),Object(c.b)("h4",{id:"object"},"object"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"\nconst actionTypes = {\n  add: 'ADD',\n  edit: 'EDIT',\n  delete: 'DELETE', \n  setBars: 'SET_BARS',\n  setIsEditing: 'SET_IS_EDITING'\n}\n\n")))}d.isMDXComponent=!0}}]);