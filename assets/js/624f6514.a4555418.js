"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1109],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47634:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],p={title:"Tokens - Wechaty Puppet Services",sidebar_label:"Tokens"},l=void 0,c={unversionedId:"puppet-services/tokens",id:"puppet-services/tokens",isDocsHomePage:!1,title:"Tokens - Wechaty Puppet Services",description:"What is Wechaty Puppet Service Token?",source:"@site/docs/puppet-services/tokens.md",sourceDirName:"puppet-services",slug:"/puppet-services/tokens",permalink:"/docs/puppet-services/tokens",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-services/tokens.md",tags:[],version:"current",lastUpdatedBy:"zpaimon",lastUpdatedAt:1634128308,formattedLastUpdatedAt:"10/13/2021",frontMatter:{title:"Tokens - Wechaty Puppet Services",sidebar_label:"Tokens"},sidebar:"docs",previous:{title:"Donut",permalink:"/docs/puppet-services/donut"},next:{title:"Compatibility",permalink:"/docs/puppet-services/compatibility"}},s=[{value:"What is Wechaty Puppet Service Token?",id:"what-is-wechaty-puppet-service-token",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Get A Token",id:"get-a-token",children:[{value:"1. Free TOKEN (Short-term)",id:"1-free-token-short-term",children:[]},{value:"2. Free TOKEN (Long-term)",id:"2-free-token-long-term",children:[]},{value:"3. Paid TOKEN",id:"3-paid-token",children:[]}]},{value:"Wechaty Puppet Services",id:"wechaty-puppet-services",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Learn More",id:"learn-more",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-wechaty-puppet-service-token"},"What is Wechaty Puppet Service Token?"),(0,o.kt)("p",null,"TOKEN is a unique string for authorizing Wechaty Puppet Service."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"WXWork TOKEN")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"puppet_wxwork_7ce4cf8a1ab789166c39c6")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"PadLocal TOKEN")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"puppet_padlocal_7ce48a1ab789166c39c6")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Paimon TOKEN")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"puppet_paimon_7ce4cf8a1ab789166c39c6")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Donut TOKEN")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"puppet_donut_e7ce4cf8a1ab789166c39c6")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UUIDv4 TOKEN")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"56945fa4-7ce8-4cf8-a1a9-b789166c39c6"))),(0,o.kt)("p",null,"When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly."),(0,o.kt)("h2",{id:"get-a-token"},"Get A Token"),(0,o.kt)("p",null,"There are three ways we provide tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free Short Term Token")," : You can get a short-term free TOKEN for testing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free Long Term Token")," : To get a long-term free TOKEN, join our ",(0,o.kt)("a",{parentName:"li",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Paid Long Term Token")," :  buy a TOKEN from our Wechaty Puppet Service Providers.")),(0,o.kt)("p",null,"If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"joining our Gitter")," network if you aren\u2019t already a member."),(0,o.kt)("h3",{id:"1-free-token-short-term"},"1. Free TOKEN (Short-term)"),(0,o.kt)("p",null,"Short-term TOKEN\uff087 days\uff09 is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs."),(0,o.kt)("p",null,"TODO: list a easy to follow steps how to apply free token"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Paimon: Register ",(0,o.kt)("a",{parentName:"li",href:"http://120.55.60.194/"},"here")),(0,o.kt)("li",{parentName:"ul"},"wxwork/donut: Using ",(0,o.kt)("strong",{parentName:"li"},"WeCom Account"),"(Not WeChat) with administrator rights ",(0,o.kt)("a",{parentName:"li",href:"https://qiwei.juzibot.com/user/login?isWechaty=true"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Padlocal: ",(0,o.kt)("a",{parentName:"li",href:"http://pad-local.com/"},"\ud83d\udc49\ud83c\udffb Get Free PadLocal Token \ud83d\udc48\ud83c\udffb"))),(0,o.kt)("h3",{id:"2-free-token-long-term"},"2. Free TOKEN (Long-term)"),(0,o.kt)("p",null,"Long-term TOKEN is for those developers who have joined our ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),(0,o.kt)("p",null,"Anyone who has a merged PR to our GitHub repos will be welcome to join."),(0,o.kt)("p",null,"TODO: give a short intro for steps to join the WCP."),(0,o.kt)("h3",{id:"3-paid-token"},"3. Paid TOKEN"),(0,o.kt)("p",null,"Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service."),(0,o.kt)("p",null,"Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one."),(0,o.kt)("p",null,"If you want to buy more than 10 at a time, or you need consulting services, please contact us in Gitter room at ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"https://gitter.im/wechaty/wechaty"),"."),(0,o.kt)("h2",{id:"wechaty-puppet-services"},"Wechaty Puppet Services"),(0,o.kt)("p",null,"Now, we have the following Wechaty Puppet Services:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Protocol"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Life Cycle"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/wxwork"},"WXWork")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeCom"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/paimon"},"Paimon")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/padlocal"},"PadLocal")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/donut"},"Donut")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Deprecated")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/wiki/Directory"},"Wechaty Puppet Directory"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The following shell commands demonstrated how to use it under Linux/macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__\nbot.ts\nmake bot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"__TOKEN__")," is your TOKEN.")),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"Learn more about all the Wechaty Puppet Services at our ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/"},"official website")))}m.isMDXComponent=!0}}]);