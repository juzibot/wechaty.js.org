"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4405],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91929:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Usage with Docker"},c=void 0,s={unversionedId:"tutorials/docker",id:"tutorials/docker",isDocsHomePage:!1,title:"Usage with Docker",description:"DOCKER WECHATY GETTING STARTED",source:"@site/docs/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/tutorials/docker.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1622643718,formattedLastUpdatedAt:"6/2/2021",frontMatter:{title:"Usage with Docker"},sidebar:"docs",previous:{title:"Video tutorial",permalink:"/docs/tutorials/video-tutorial"},next:{title:"Usage with Heroku",permalink:"/docs/tutorials/usage-with-heroku"}},u=[{value:"DOCKER WECHATY GETTING STARTED",id:"docker-wechaty-getting-started",children:[]},{value:"FEATURES",id:"features",children:[]},{value:"REQUIREMENTS",id:"requirements",children:[]},{value:"Install Docker",id:"install-docker",children:[]},{value:"Run",id:"run",children:[{value:"Docker options explanation",id:"docker-options-explanation",children:[]},{value:"Run Examples",id:"run-examples",children:[]},{value:"Run Wechaty as a Hostie",id:"run-wechaty-as-a-hostie",children:[]}]},{value:"Onbuild",id:"onbuild",children:[]},{value:"Build",id:"build",children:[]},{value:"SEE ALSO",id:"see-also",children:[]},{value:"AUTHOR",id:"author",children:[]},{value:"COPYRIGHT &amp; LICENSE",id:"copyright--license",children:[]}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"docker-wechaty-getting-started"},"DOCKER WECHATY GETTING STARTED"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Stars"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://microbadger.com/#/images/wechaty/wechaty"},(0,i.kt)("img",{parentName:"a",src:"https://images.microbadger.com/badges/image/wechaty/wechaty.svg",alt:"Docker Layers"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,i.kt)("img",{parentName:"a",src:"http://dockeri.co/image/wechaty/wechaty",alt:"dockeri.co"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"Deploy to Docker for Wechaty Starter Project Repository")),(0,i.kt)("h2",{id:"features"},"FEATURES"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wechaty is fully dockerized. So it will be very easy to be used as a MicroService."),(0,i.kt)("li",{parentName:"ol"},"Clone this repository, then you will be able to use Docker to run Wechaty with ZERO configuration.")),(0,i.kt)("h2",{id:"requirements"},"REQUIREMENTS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Docker"),(0,i.kt)("li",{parentName:"ol"},"Global Internet Connection")),(0,i.kt)("h2",{id:"install-docker"},"Install Docker"),(0,i.kt)("p",null,"Quick & easy install Docker via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.docker.com | sh\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://get.docker.com/ | sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Get to know more about Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/getstarted/step_one/"},"Install Docker and run hello-world in 3 minutes"))),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"The best practice of using Wechaty Docker is like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat > mybot.ts <<'EOF'\nimport { Wechaty } from 'wechaty'\n\nWechaty.instance() // Singleton\n  .on('scan', (qrcode, status) => console.log(`Scan QrCode to login: ${status}\\n${qrcode}`))\n  .on('login',       user      => console.log(`User ${user} logined`))\n  .on('message',  message      => console.log(`Message: ${message}`))\n  .start()\nEOF\n\n$ function wechaty() {\n  docker run \\\n    -t -i --rm \\\n    --privileged \\\n    --network=host \\\n    -e WECHATY_LOG=\"$WECHATY_LOG\" \\\n    -e WECHATY_PUPPET=\"$WECHATY_PUPPET\" \\\n    -e WECHATY_TOKEN=\"$WECHATY_TOKEN\" \\\n    --mount type=bind,source=\"$(pwd)\",target=/bot \\\n    wechaty/wechaty:latest \\\n    \"$@\"\n}\n\n$ wechaty mybot.ts\n")),(0,i.kt)("p",null,"see? death easy to use!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You might want to confirm that you can download ",(0,i.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty")," image successfully by run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker pull wechaty/wechaty"),", and this command is also able to help you upgrade the image to the latest version.")),(0,i.kt)("h3",{id:"docker-options-explanation"},"Docker options explanation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-t")," : Allocate a pseudo-TTY"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-i")," : Keep STDIN open even if not attached"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--rm")," : Automatically remove the container when it exits"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--privileged")," : Give extended privileges to this container"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--network=host")," : use the Docker host network stack"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'-e WECHATY_LOG="$WECHATY_LOG"')," : Pass the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"WECHATY_LOG")," into the container"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'--volume="$(pwd)":/bot')," : Bind current directory(",(0,i.kt)("inlineCode",{parentName:"li"},'"$(pwd)"'),") to '",(0,i.kt)("inlineCode",{parentName:"li"},"/bot"),"' inside the container, by mounting the volume"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--name=wechaty")," : Assign ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty")," as the container name"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"wechaty/wechaty:latest")," : Image name on docker hub, here's our ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/wechaty/wechaty"},"wechaty/wechaty")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"latest")," version"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mybot.js")," : File contains code wrote by you, should be placed in current directory ",(0,i.kt)("inlineCode",{parentName:"li"},"./"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See Also: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/66"},"Dockerize Wechaty for easy start #66"))),(0,i.kt)("h3",{id:"run-examples"},"Run Examples"),(0,i.kt)("p",null,"There's many Wechaty ChatBot Examples in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," directory, and all of them are writen in TypeScript."),(0,i.kt)("p",null,"Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd example\nwechaty media-file-bot.ts\n")),(0,i.kt)("p",null,"Bravo!"),(0,i.kt)("h3",{id:"run-wechaty-as-a-hostie"},"Run Wechaty as a Hostie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_TOKEN="your token here"\n\ndocker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WECHATY_TOKEN")," is required here, because you need this key to managing wechaty on the chatbot cloud manager: ",(0,i.kt)("a",{parentName:"p",href:"https://www.chatie.io"},"https://www.chatie.io")),(0,i.kt)("h2",{id:"onbuild"},"Onbuild"),(0,i.kt)("p",null,"Put this line(and only this line) to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM wechaty/onbuild\n")),(0,i.kt)("p",null,"This image makes building derivative images easier. For most use cases, creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the base of your project directory with the line ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM wechaty/onbuild")," will be enough to create a stand-alone image for your project."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"onbuild"),' variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)'),(0,i.kt)("li",{parentName:"ol"},"This ",(0,i.kt)("inlineCode",{parentName:"li"},"onbuild")," variant will only install npm packages according to the ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"docker build --build-arg NODE_ENV=production \u2026"),".")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t wechaty .\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wechaty Getting Started: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),(0,i.kt)("li",{parentName:"ol"},"Heroku Wechaty Getting Started: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"https://github.com/wechaty/heroku-wechaty-getting-started"))),(0,i.kt)("h2",{id:"author"},"AUTHOR"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://linkedin.com/in/zixia"},"Huan LI")," \\",(0,i.kt)("a",{parentName:"p",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackexchange.com/users/265499"},(0,i.kt)("img",{parentName:"a",src:"https://stackexchange.com/users/flair/265499.png",alt:"Profile of Huan LI (\u674e\u5353\u6853) on StackOverflow"}))),(0,i.kt)("h2",{id:"copyright--license"},"COPYRIGHT & LICENSE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code & Docs \xa9 2018 Huan LI \\",(0,i.kt)("a",{parentName:"li",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,i.kt)("li",{parentName:"ul"},"Code released under the Apache-2.0 License"),(0,i.kt)("li",{parentName:"ul"},"Docs released under Creative Commons")))}h.isMDXComponent=!0}}]);