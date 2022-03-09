"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7602],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),p="tabItem_vU9c",i="tabItemActive_cw6a";var s=function(e){var t,a=e.lazy,r=e.block,s=e.defaultValue,u=e.values,c=e.groupId,d=e.className,h=n.Children.toArray(e.children),m=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,y=o(),g=y.tabGroupChoices,w=y.setTabGroupChoices,b=(0,n.useState)(f),k=b[0],v=b[1],N=[];if(null!=c){var O=g[c];null!=O&&O!==k&&m.some((function(e){return e.value===O}))&&v(O)}var T=function(e){var t=e.currentTarget,a=N.indexOf(t),n=m[a].value;v(n),null!=c&&(w(c,n),setTimeout((function(){var e,a,n,r,o,l,p,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,l=window,p=l.innerHeight,s=l.innerWidth,a>=0&&o<=s&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",p,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=a?a:t)}))),a?(0,n.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},8491:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(55064),p=a(58215),i=["components"],s={title:"Deploy in Whatsapp"},u=void 0,c={unversionedId:"howto/degraded/degraded-deploy-whatsapp",id:"howto/degraded/degraded-deploy-whatsapp",isDocsHomePage:!1,title:"Deploy in Whatsapp",description:"Whatsapp  is the most popular IM platform, so this how to guide focuses on deploying the bot in Whatsapp locally. You will learn how to deploy the bot in Whatsapp locally and integrate bot from the list of examples present in the starter templete.",source:"@site/docs/howto/degraded/degraded-deploy-whatsapp.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-deploy-whatsapp",permalink:"/docs/howto/degraded/degraded-deploy-whatsapp",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/degraded/degraded-deploy-whatsapp.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634707553,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Deploy in Whatsapp"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integrating a Bot to Whatsapp",id:"integrating-a-bot-to-whatsapp",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]},{value:"References",id:"references",children:[]},{value:"Blogs",id:"blogs",children:[]}],h={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whatsapp  is the most popular IM platform, so this how to guide focuses on deploying the bot in Whatsapp locally. You will learn how to deploy the bot in Whatsapp locally and integrate bot from the list of examples present in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugins"),".")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,o.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,o.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nset WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,o.kt)("h2",{id:"integrating-a-bot-to-whatsapp"},"Integrating a Bot to Whatsapp"),(0,o.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to Whatsapp."),(0,o.kt)("p",null,"The steps are similar for all other bots as well."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,o.kt)("li",{parentName:"ol"},"QRCode terminal edition: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"package/qrcode-terminal"),".")),(0,o.kt)("p",null,"You can follow up the steps mentioned below:"),(0,o.kt)("ol",null,(0,o.kt)("li",null," Initialize the project by creating a new folder `my-bot`."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bot\ncd my-bot\n")),(0,o.kt)("li",null," Install the dependencies using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty\nnpm install qrcode-terminal\n")),(0,o.kt)("li",null," Add the dependencies for using the bot with Whatsapp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n")),(0,o.kt)("li",null," Create a new folder `src` and add a file `my-bot.js`. Add your custom functions to the code snippet below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n}= require('wechaty')\n\nimport qrTerm  from 'qrcode-terminal'\n\nconsole.log(welcome)\nconst bot = new Wechaty()\n\n/*\n *Your function goes here\n */\n")),(0,o.kt)("li",null," After you are done with the file, you can run the bot using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnode src/my-bot.js\n")),(0,o.kt)("p",null,"Scan it using your Whatsapp and you are ready to play with the bot!"),(0,o.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a"},"Heroku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#b"},"Docker"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,o.kt)("li",{parentName:"ul"},"Get the starter template from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),".")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatsapp-puppet"},"wechaty-puppet-whatsapp"))))}m.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);