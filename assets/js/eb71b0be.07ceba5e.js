"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3793],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88614:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"RPA"},c=void 0,l={unversionedId:"explanations/rpa",id:"explanations/rpa",isDocsHomePage:!1,title:"RPA",description:"Wechaty is a RPA SDK.",source:"@site/docs/explanations/rpa.md",sourceDirName:"explanations",slug:"/explanations/rpa",permalink:"/docs/explanations/rpa",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/explanations/rpa.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631298410,formattedLastUpdatedAt:"9/10/2021",frontMatter:{title:"RPA"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/explanations/"},next:{title:"Concepts",permalink:"/docs/explanations/concepts"}},p=[{value:"1. What is RPA (Robotic Process Automation)",id:"what-is-rpa",children:[]},{value:"2. Why Conversational RPA",id:"conversational-rpa",children:[]},{value:"RPA Blogs",id:"rpa-blogs",children:[]},{value:"Contact Us",id:"contact-us",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wechaty is a RPA SDK."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("a",{parentName:"li",href:"#what-is-rpa"},"RPA"),"?"),(0,o.kt)("li",{parentName:"ol"},"Why ",(0,o.kt)("a",{parentName:"li",href:"#conversational-rpa"},"Conversational RPA"),"?")),(0,o.kt)("h2",{id:"what-is-rpa"},"1. What is RPA (Robotic Process Automation)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Robotic Process Automation is the technology that allows anyone today to configure computer software, or a \u201crobot\u201d to emulate and integrate the actions of a human interacting within digital systems to execute a business process. RPA robots utilize the user interface to capture data and manipulate applications just like humans do. They interpret, trigger responses and communicate with other systems in order to perform on a vast variety of repetitive tasks. Only substantially better: an RPA software robot never sleeps and makes zero mistakes.\n","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.uipath.com/rpa/robotic-process-automation"},"UIPath"))),(0,o.kt)("h2",{id:"conversational-rpa"},"2. Why Conversational RPA"),(0,o.kt)("p",null,"Conversational RPA (cRPA) Connecting any chatbot system to Conversational AI. We developed this as an SDK published in GitHub and this module can be set for any Conversationl AI/Chatbot system that the enterprise prefers."),(0,o.kt)("h2",{id:"rpa-blogs"},"RPA Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021"))),(0,o.kt)("h2",{id:"contact-us"},"Contact Us"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}d.isMDXComponent=!0}}]);