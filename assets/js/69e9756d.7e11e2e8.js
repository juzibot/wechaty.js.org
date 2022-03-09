"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9155],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),s=c(n),u=i,v=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return n?o.createElement(v,a(a({ref:e},p),{},{components:n})):o.createElement(v,a({ref:e},p))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=s;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=t,m.mdxType="string"==typeof t?t:i,a[1]=m;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93230:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],m={title:"Room Invitation"},l=void 0,c={unversionedId:"api/room-invitation",id:"api/room-invitation",isDocsHomePage:!1,title:"Room Invitation",description:"Room Invitation",source:"@site/docs/api/room-invitation.md",sourceDirName:"api",slug:"/api/room-invitation",permalink:"/docs/api/room-invitation",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/api/room-invitation.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1631203479,formattedLastUpdatedAt:"9/9/2021",frontMatter:{title:"Room Invitation"},sidebar:"docs",previous:{title:"Room",permalink:"/docs/api/room"},next:{title:"Friendship",permalink:"/docs/api/friendship"}},p=[{value:"Room Invitation",id:"room-invitation",children:[{value:"roomInvitation.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"roominvitationaccept--promise-void",children:[]},{value:"roomInvitation.inviter() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"roominvitationinviter--promise-contact",children:[]},{value:"roomInvitation.topic() \u21d2 <code>Promise &lt;string&gt;</code>",id:"roominvitationtopic--promise-string",children:[]},{value:"roomInvitation.date() \u21d2 <code>Promise &lt;Date&gt;</code>",id:"roominvitationdate--promise-date",children:[]},{value:"roomInvitation.age() \u21d2 <code>Promise &lt;number&gt;</code>",id:"roominvitationage--promise-number",children:[]}]}],d={toc:p};function s(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"room-invitation"},"Room Invitation"),(0,r.kt)("p",null,"Room Invitation is a global class that accepts room invitation. This section describes the methods of the Room Invitation class."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instance Methods"),(0,r.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accept","(",")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inviter","(",")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"(Contact)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic","(",")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")," (String)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date","(",")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")," (Date)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"age","(",")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")," (Number)")))),(0,r.kt)("h3",{id:"roominvitationaccept--promise-void"},"roomInvitation.accept","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,r.kt)("p",null,"This method accepts the room invitation. See the following example:"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  try {\n    console.log(`received room-invite event.`)\n    await roomInvitation.accept()\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),(0,r.kt)("h3",{id:"roominvitationinviter--promise-contact"},"roomInvitation.inviter","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,r.kt)("p",null,"This method gets the inviter from the room invitation. Check the following example:"),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const inviter = await roomInvitation.inviter()\n  const name = inviter.name()\n  console.log(`received room invitation event from ${name}`)\n}\n.start()\n")),(0,r.kt)("h3",{id:"roominvitationtopic--promise-string"},"roomInvitation.topic","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,r.kt)("p",null,"The method gets the room topic from room invitation as shown in the below example:"),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const topic = await roomInvitation.topic()\n  console.log(`received room invitation event from room ${topic}`)\n}\n.start()\n")),(0,r.kt)("h3",{id:"roominvitationdate--promise-date"},"roomInvitation.date","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <Date>")),(0,r.kt)("p",null,"The method gets the invitation date and time."),(0,r.kt)("h3",{id:"roominvitationage--promise-number"},"roomInvitation.age","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <number>")),(0,r.kt)("p",null,"The method returns the roopm invitation age in seconds.\nFor example, the invitation is sent at time ",(0,r.kt)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,r.kt)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")))}s.isMDXComponent=!0}}]);