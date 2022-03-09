"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3994],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),k=o,m=c["".concat(u,".").concat(k)]||c[k]||h[k]||n;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},35593:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Usage with Heroku"},u=void 0,p={unversionedId:"tutorials/usage-with-heroku",id:"tutorials/usage-with-heroku",isDocsHomePage:!1,title:"Usage with Heroku",description:"HEROKU WECHATY GETTING STARTED",source:"@site/docs/tutorials/usage-with-heroku.md",sourceDirName:"tutorials",slug:"/tutorials/usage-with-heroku",permalink:"/docs/tutorials/usage-with-heroku",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/tutorials/usage-with-heroku.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1622643718,formattedLastUpdatedAt:"6/2/2021",frontMatter:{title:"Usage with Heroku"},sidebar:"docs",previous:{title:"Usage with Docker",permalink:"/docs/tutorials/docker"},next:{title:"Overview",permalink:"/docs/using-plugin-with-wechaty/overview"}},s=[{value:"HEROKU WECHATY GETTING STARTED",id:"heroku-wechaty-getting-started",children:[]},{value:"About <code>Deploy to Heroku</code> Button",id:"about-deploy-to-heroku-button",children:[]},{value:"FEATURES",id:"features",children:[]},{value:"LIMITATIONS",id:"limitations",children:[]},{value:"SEE ALSO",id:"see-also",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"HISTORY",id:"history",children:[{value:"v0.4 (Feb 3, 2020)",id:"v04-feb-3-2020",children:[]},{value:"v0.0.1 (Aug 9, 2018)",id:"v001-aug-9-2018",children:[]}]},{value:"AUTHOR",id:"author",children:[]},{value:"COPYRIGHT &amp; LICENSE",id:"copyright--license",children:[]}],h={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"heroku-wechaty-getting-started"},"HEROKU WECHATY GETTING STARTED"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started"},(0,n.kt)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master",alt:"Build Status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://greenkeeper.io/"},(0,n.kt)("img",{parentName:"a",src:"https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg",alt:"Greenkeeper badge"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://heroku.com/deploy"},(0,n.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"Deploy to Heroku for Wechaty Starter Project Repository")),(0,n.kt)("h2",{id:"about-deploy-to-heroku-button"},"About ",(0,n.kt)("inlineCode",{parentName:"h2"},"Deploy to Heroku")," Button"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The \u2018Deploy to Heroku\u2019 button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.")),(0,n.kt)("h2",{id:"features"},"FEATURES"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Deploy to Heroku without leaving the Web Browser. See ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy to Heroku")," Button above"),(0,n.kt)("li",{parentName:"ol"},"Restore Wechat Bot Session across Restart by enable MemoryCard with AWS S3. See ",(0,n.kt)("inlineCode",{parentName:"li"},"src/get-memory.ts")),(0,n.kt)("li",{parentName:"ol"},"Hot Module Reload Enabled for convenience when developing. See ",(0,n.kt)("inlineCode",{parentName:"li"},"src/handlers/on-*.ts")),(0,n.kt)("li",{parentName:"ol"},"Send Online/Offline Notification Message to BotSelf when the Program Start/Stop. See ",(0,n.kt)("inlineCode",{parentName:"li"},"src/finis.ts")),(0,n.kt)("li",{parentName:"ol"},"Simpel Web Server that can be used to Scan QR Code, or any other operations integrated with Wechaty. See ",(0,n.kt)("inlineCode",{parentName:"li"},"src/start-web.ts"))),(0,n.kt)("h2",{id:"limitations"},"LIMITATIONS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"},"If an app has a web dyno, and that web dyno receives no traffic in a 30 minute period, the web dyno will sleep")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/dynos#restarting"},"Dynos are restarted (cycled) at least once per day to help maintain the health of applications running on Heroku"))),(0,n.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.heroku.com/heroku-button"},"Introducing Heroku Button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/heroku/button-sample"},"https://github.com/heroku/button-sample")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.expeditedssl.com/heroku-button-maker"},"Heroku App.Json Manifest and Button Maker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.heroku.com/ROG3H81R/why-does-sigterm-handling-not-work-correctly-in-nodejs-with-npm"},"Why does SIGTERM handling not work correctly in NodeJS with NPM?"))),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"Friday BOT")," - ",(0,n.kt)("a",{parentName:"li",href:"https://bot-friday.herokuapp.com/"},"https://bot-friday.herokuapp.com/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/OSS-bot"},"OSSBot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://oss-bot-dev.herokuapp.com/"},"https://oss-bot-dev.herokuapp.com/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huan/mike-bo"},"Mike BO")," - ",(0,n.kt)("a",{parentName:"li",href:"http://mike-bo.herokuapp.com/"},"http://mike-bo.herokuapp.com/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/qijibot"},"QiJi BOT")," - ",(0,n.kt)("a",{parentName:"li",href:"https://qiji-bot.herokuapp.com/"},"https://qiji-bot.herokuapp.com/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/botops"},"Bot Ops")," - ",(0,n.kt)("a",{parentName:"li",href:"https://bot-ops.herokuapp.com/"},"https://bot-ops.herokuapp.com/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"Rui Assistant BOT")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/juzi-bot"},"Juzi.BOT"))),(0,n.kt)("h2",{id:"history"},"HISTORY"),(0,n.kt)("h3",{id:"v04-feb-3-2020"},"v0.4 (Feb 3, 2020)"),(0,n.kt)("p",null,"Wechaty 0.56"),(0,n.kt)("h3",{id:"v001-aug-9-2018"},"v0.0.1 (Aug 9, 2018)"),(0,n.kt)("p",null,"Init version for deploy to HeroKu"),(0,n.kt)("h2",{id:"author"},"AUTHOR"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://linkedin.com/in/zixia"},"Huan LI (\u674e\u5353\u6853)")," \\",(0,n.kt)("a",{parentName:"p",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackexchange.com/users/265499"},(0,n.kt)("img",{parentName:"a",src:"https://stackexchange.com/users/flair/265499.png",alt:"Profile of Huan LI (\u674e\u5353\u6853) on StackOverflow"}))),(0,n.kt)("h2",{id:"copyright--license"},"COPYRIGHT & LICENSE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code & Docs \xa9 2018 Huan LI \\",(0,n.kt)("a",{parentName:"li",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,n.kt)("li",{parentName:"ul"},"Code released under the Apache-2.0 License"),(0,n.kt)("li",{parentName:"ul"},"Docs released under Creative Commons")))}c.isMDXComponent=!0}}]);