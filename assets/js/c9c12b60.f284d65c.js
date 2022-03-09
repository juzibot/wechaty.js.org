"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8176],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),o=n(79443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),c="tabItem_vU9c",i="tabItemActive_cw6a";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=a.Children.toArray(e.children),d=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,y=r(),b=y.tabGroupChoices,g=y.setTabGroupChoices,v=(0,a.useState)(h),w=v[0],k=v[1],T=[];if(null!=p){var N=b[p];null!=N&&N!==w&&d.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),a=d[n].value;k(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,o,r,l,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.target)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},81313:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(55064),c=n(58215),i=["components"],s={title:"Manage contacts"},u=void 0,p={unversionedId:"howto/contact",id:"howto/contact",isDocsHomePage:!1,title:"Manage contacts",description:"Use the guide to help you integrate additional functions to an existing project which is present at Github/Contact-Bot or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our Building the bot section.",source:"@site/docs/howto/contact.mdx",sourceDirName:"howto",slug:"/howto/contact",permalink:"/docs/howto/contact",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/contact.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1632220361,formattedLastUpdatedAt:"9/21/2021",frontMatter:{title:"Manage contacts"},sidebar:"docs",previous:{title:"Dealing with message",permalink:"/docs/howto/message"},next:{title:"Managing rooms",permalink:"/docs/howto/room"}},m=[{value:"Prerequisites",id:"prerequisites",children:[{value:"If you don&#39;t know where to start from",id:"if-you-dont-know-where-to-start-from",children:[]}]},{value:"All contacts - define how to list all contact",id:"all-contacts---define-how-to-list-all-contact",children:[]},{value:"Search in contacts - define how to search within contacts",id:"search-in-contacts---define-how-to-search-within-contacts",children:[]},{value:"References",id:"references",children:[]}],f={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the guide to help you integrate additional functions to an existing project which is present at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/basic/contact-bot.js"},"Github/Contact-Bot")," or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/basic/contact-bot#building-the-bot"},"Building the bot")," section."),(0,r.kt)("p",null,"The steps outlined here mainly focus on working with Javascript, but user are free to switch between any languages. All wechaty contacts are encapsulated as a Contact."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,r.kt)("li",{parentName:"ul"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,r.kt)("li",{parentName:"ul"},"You need to be familiar with the basics of Wechaty platform. If not, follow our ",(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/tutorials/"},"tutorials")," section."),(0,r.kt)("li",{parentName:"ul"},"You need to have at least a minimal application ready to work, follow one of our ",(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/examples/basic/contact-bot"},"Example/Contact-Bot"),".")),(0,r.kt)("h3",{id:"if-you-dont-know-where-to-start-from"},"If you don't know where to start from"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/getting-started/quick-start"},"Running our first ding-dong bot"),"."),(0,r.kt)("p",null,"The functions below require a basic script to help run the bot. Import the codes from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/basic/contact-bot.js"},"Github/Contact-Bot")," for the basic script, and integrate the codes below."),(0,r.kt)("h2",{id:"all-contacts---define-how-to-list-all-contact"},"All contacts - define how to list all contact"),(0,r.kt)("p",null,"This section help you list down all your contacts from the Instant messaging platform you choose to intergrate this bot by its ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n\n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,r.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n    \n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,r.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,r.kt)("h2",{id:"search-in-contacts---define-how-to-search-within-contacts"},"Search in contacts - define how to search within contacts"),(0,r.kt)("p",null,"This guide help you find your contact from the list of contacts from the Instant messaging platform you choose to intergrate this bot."),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,r.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,r.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples"},"Wechaty Bot Example"),".")))}d.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);