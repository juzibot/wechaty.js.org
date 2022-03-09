"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5134],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=p,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32011:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=r(87462),p=r(63366),n=(r(67294),r(3905)),i=["components"],o={title:"Puppet Provider: SimplePad",sidebar_label:"SimplePad"},l=void 0,u={unversionedId:"puppet-providers/simplepad",id:"puppet-providers/simplepad",isDocsHomePage:!1,title:"Puppet Provider: SimplePad",description:"Wechaty Puppet SimplePad",source:"@site/docs/puppet-providers/simplepad.mdx",sourceDirName:"puppet-providers",slug:"/puppet-providers/simplepad",permalink:"/docs/puppet-providers/simplepad",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/simplepad.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1646841054,formattedLastUpdatedAt:"3/9/2022",frontMatter:{title:"Puppet Provider: SimplePad",sidebar_label:"SimplePad"},sidebar:"docs",previous:{title:"Oicq",permalink:"/docs/puppet-providers/oicq"},next:{title:"Service",permalink:"/docs/puppet-providers/service"}},s=[{value:"Origin",id:"origin",children:[]},{value:"Features",id:"features",children:[]},{value:"Why SimplePad?",id:"why-simplepad",children:[]},{value:"How to install and run?",id:"how-to-install-and-run",children:[]},{value:"WIKI",id:"wiki",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Maintainer",id:"maintainer",children:[]},{value:"Related Post",id:"related-post",children:[]}],c={toc:s};function d(e){var t=e.components,r=(0,p.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"simplepad"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-SimplePad-blueviolet",alt:"Wechaty Puppet SimplePad"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-simplepad"},(0,n.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-simplepad.svg",alt:"npm version"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chatrbot/wechaty-puppet-simplepad"},"https://github.com/chatrbot/wechaty-puppet-simplepad")),(0,n.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chatrbot/wechaty-puppet-simplepad/issues"},"https://github.com/chatrbot/wechaty-puppet-simplepad/issues"))),(0,n.kt)("h2",{id:"origin"},"Origin"),(0,n.kt)("p",null,"In fact, before we knew wechaty, our team already had a complete set of wechat api used in internal projects. The entire SimplePad-Puppet is built on this api system. So when using SimplePad, you can not only Through Wechaty-Puppet, you can also use the Http protocol directly.\nThanks to ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/contributors/huan/"},"@Huan")," and the Wechaty community for their great work, we quickly joined the Wechaty community and ecosystem."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simple enough architecture.The simpler it is, the less mistakes."),(0,n.kt)("li",{parentName:"ul"},"Based on Http protocol.You can request the API directly in your favorite programming language,if you're not good at typescript."),(0,n.kt)("li",{parentName:"ul"},"Perfect debugging tool.We provide a complete debugging tool to debug all api."),(0,n.kt)("li",{parentName:"ul"},"For a reasonable charge, you can only buy the api you need.")),(0,n.kt)("h2",{id:"why-simplepad"},"Why SimplePad?"),(0,n.kt)("p",null,"We provide support for multiple protocols (PC/Mac/Ipad, Ipad is recommended). Compared with other Puppets, it also provides moments api."),(0,n.kt)("h2",{id:"how-to-install-and-run"},"How to install and run?"),(0,n.kt)("p",null,"Just three steps, you can quickly experience!  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://121.199.64.183:8866/user/#/login"},"Sign up")," for a test token(7 days)  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chatrbot/wechaty-puppet-simplepad-demo"},"demo project"),"  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"install demo packages and run:  "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd wechaty-puppet-simplepad-demo\nnpm install\nnpx ts-node ./bot.ts -t {YOUR_TOKEN}\n")))),(0,n.kt)("h2",{id:"wiki"},"WIKI"),(0,n.kt)("p",null,"You can get more project information and usage from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chatrbot/wechaty-puppet-simplepad/wiki"},"here")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"If you are interested in wechaty and looking for a flexible and stable Puppet, try SimplePad.\nWe are also actively preparing to update to Wechaty 1.x version, we are getting better together with Wechaty."),(0,n.kt)("h2",{id:"maintainer"},"Maintainer"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/contributors/simplepad/"},"@simplepad")),(0,n.kt)("h2",{id:"related-post"},"Related Post"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/06/17/puppet-simplepad-hello/"},"New Wechaty Puppet Service: SimplePad")))}d.isMDXComponent=!0}}]);