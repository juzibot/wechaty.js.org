"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9756],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||p;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(67294),n=r(79443);var p=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),i="tabItem_vU9c",u="tabItemActive_cw6a";var l=function(e){var t,r=e.lazy,n=e.block,l=e.defaultValue,c=e.values,s=e.groupId,m=e.className,d=a.Children.toArray(e.children),h=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=p(),g=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,a.useState)(f),w=b[0],k=b[1],x=[];if(null!=s){var N=g[s];null!=N&&N!==w&&h.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,r=x.indexOf(t),a=h[r].value;k(a),null!=s&&(y(s,a),setTimeout((function(){var e,r,a,n,p,o,i,l;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,p=e.right,o=window,i=o.innerHeight,l=o.innerWidth,r>=0&&p<=l&&n<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;r=x[a]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.target)-1;r=x[n]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:P,onClick:P},null!=r?r:t)}))),r?(0,a.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},97915:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),o=r(55064),i=r(58215),u=["components"],l={title:"Puppet Provider: XP",sidebar_label:"XP"},c=void 0,s={unversionedId:"puppet-providers/xp",id:"puppet-providers/xp",isDocsHomePage:!1,title:"Puppet Provider: XP",description:"Wechaty Puppet XP",source:"@site/docs/puppet-providers/xp.mdx",sourceDirName:"puppet-providers",slug:"/puppet-providers/xp",permalink:"/docs/puppet-providers/xp",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/xp.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1636562680,formattedLastUpdatedAt:"11/10/2021",frontMatter:{title:"Puppet Provider: XP",sidebar_label:"XP"},sidebar:"docs",previous:{title:"WeChat4U",permalink:"/docs/puppet-providers/wechat4u"},next:{title:"Oicq",permalink:"/docs/puppet-providers/oicq"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,u);return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"xp"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-XP-blueviolet",alt:"Wechaty Puppet XP"}))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2021/07-puppet-laozhang-wechat-bot/wechat_bot.webp",alt:"Wechaty Puppet XP"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-xp"},(0,p.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-xp.svg",alt:"NPM Version"})),"\n",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-xp?activeTab=versions"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-xp/next.svg",alt:"npm (tag)"}))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Repo: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp"},"https://github.com/wechaty/wechaty-puppet-xp")),(0,p.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp/issues"},"https://github.com/wechaty/wechaty-puppet-xp/issues"))),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("p",null,"Under construction ... Alpha stage."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support Windows WeChat"),(0,p.kt)("li",{parentName:"ul"},"Hook/Call powered by ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/huan/sidecar"},"Sidecar"))),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Requires ",(0,p.kt)("a",{parentName:"li",href:"http://dl.softmgr.qq.com/original/im/WeChatSetup_3.3.0.115.exe"},"Windows WeChat 3.3.0.115"))),(0,p.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,p.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,p.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nset WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n")))),(0,p.kt)("h2",{id:"blogs"},"Blogs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/puppet-laozhang-wechat-bot/"},"\u559c\u8baf\uff1a\u4f7f\u7528Windows\u5fae\u4fe1\u684c\u9762\u7248\u534f\u8bae\u767b\u5f55\uff0cwechaty\u514d\u8d39\u7248\u534f\u8bae\u5373\u5c06\u767b\u573a, @atorber, Jul 05, 2021")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/13/wechaty-puppet-xp-start-up/"},"\u5168\u65b0\u7684Windows puppet\u9879\u76eewechaty-puppet-xp\u542f\u52a8, @atorber, Jul 13, 2021")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/code-like-poetry-bot-like-song/"},"code\u5982\u8bd7\uff0cbot\u5982\u6b4c\uff0c\u7531Wechaty\u5f15\u53d1\u7684\u4e00\u4e2a\u5c0f\u767d\u5192\u9669\u4e4b\u65c5, @\u8001\u5f20\u5b66\u6280\u672f, Jul 05, 2021"))),(0,p.kt)("h2",{id:"maintainers"},"Maintainers"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/atorber/"},"@atorber")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/cixingguangming55555/"},"@cixingguangming55555"))))}h.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);