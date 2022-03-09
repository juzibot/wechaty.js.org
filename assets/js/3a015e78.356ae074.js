"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6969],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86853:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Deploy with Docker"},c=void 0,s={unversionedId:"howto/docker",id:"howto/docker",isDocsHomePage:!1,title:"Deploy with Docker",description:"Powered by Wechaty",source:"@site/docs/howto/docker.mdx",sourceDirName:"howto",slug:"/howto/docker",permalink:"/docs/howto/docker",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/docker.mdx",tags:[],version:"current",lastUpdatedBy:"vasvi-sood",lastUpdatedAt:1634488107,formattedLastUpdatedAt:"10/17/2021",frontMatter:{title:"Deploy with Docker"},sidebar:"docs",previous:{title:"Deploying with Heroku",permalink:"/docs/howto/heroku"},next:{title:"Overview",permalink:"/docs/references/"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Getting Started after Deployment",id:"getting-started-after-deployment",children:[{value:"Know the commands used above",id:"know-the-commands-used-above",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Run Wechaty as a Hostie",id:"run-wechaty-as-a-hostie",children:[]}]},{value:"Additional",id:"additional",children:[{value:"Onbuild",id:"onbuild",children:[]},{value:"Build",id:"build",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Stars"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/docker-wechaty-getting-started"},(0,o.kt)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/docker-wechaty-getting-started.svg?branch=master",alt:"Build Status"}))),(0,o.kt)("p",null,"Docker allows you to create virtualized sandboxes to run and deploy software. Use Docker to explore ready-to-go containers without worrying about dependencies. Setting up Docker is easier than ever by just pushing a button to start running the Docker one-click app."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,o.kt)("img",{parentName:"a",src:"http://dockeri.co/image/wechaty/wechaty",alt:"dockeri.co"}))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your OS must be Docker compatible, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"click here")," to see supported OS versions."),(0,o.kt)("li",{parentName:"ul"},"If you have installed any older versions of Docker, including ",(0,o.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"docker.io"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-engine"),", uninstall it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," sudo apt-get remove docker docker-engine docker.io containerd runc\n")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The quick and easy way to install Docker is to get the script from ",(0,o.kt)("a",{parentName:"p",href:"https://get.docker.com/"},"get.docker.com")," and runs it to install the latest stable release of Docker on your system."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Docker installation docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-windows/install/"},"Windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"Linux","(","Debian/Ubuntu",")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/install/"},"macOS"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install Docker using the repository, visit ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"},"How to install using repository"),"."),(0,o.kt)("li",{parentName:"ul"},"To install Docker from a package, visit ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-from-a-package"},"How to install using a package"),".")),(0,o.kt)("h2",{id:"getting-started-after-deployment"},"Getting Started after Deployment"),(0,o.kt)("p",null,"To get familiar with the Docker Environment, you can try ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"Running hello-world under 3 minutes with Docker"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the below command to pull Wechaty in docker:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull wechaty/wechaty\n")),(0,o.kt)("p",null,"The best practice of using Wechaty Docker is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat > mybot.ts <<'EOF'\nimport { Wechaty } from 'wechaty'\n\nWechaty.instance() // Singleton\n  .on('scan', (qrcode, status) => console.log(`Scan QrCode to login: ${status}\\n${qrcode}`))\n  .on('login',       user      => console.log(`User ${user} logined`))\n  .on('message',  message      => console.log(`Message: ${message}`))\n  .start()\nEOF\n\n$ function wechaty() {\n  docker run \\\n    -t -i --rm \\\n    --privileged \\\n    --network=host \\\n    -e WECHATY_LOG=\"$WECHATY_LOG\" \\\n    -e WECHATY_PUPPET=\"$WECHATY_PUPPET\" \\\n    -e WECHATY_TOKEN=\"$WECHATY_TOKEN\" \\\n    --mount type=bind,source=\"$(pwd)\",target=/bot \\\n    wechaty/wechaty:latest \\\n    \"$@\"\n}\n\n$ wechaty mybot.ts\n")),(0,o.kt)("h3",{id:"know-the-commands-used-above"},"Know the commands used above"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-t")," : Allocate a pseudo-TTY"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-i")," : Keep STDIN open even if not attached"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--rm")," : Automatically remove the container when it exits"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--privileged")," : Give extended privileges to this container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--network=host")," : use the Docker host network stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'-e WECHATY_LOG="$WECHATY_LOG"')," : Pass the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"WECHATY_LOG")," into the container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'--volume="$(pwd)":/bot')," : Bind current directory(",(0,o.kt)("inlineCode",{parentName:"li"},'"$(pwd)"'),") to '",(0,o.kt)("inlineCode",{parentName:"li"},"/bot"),"' inside the container, by mounting the volume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--name=wechaty")," : Assign ",(0,o.kt)("inlineCode",{parentName:"li"},"wechaty")," as the container name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wechaty/wechaty:latest")," : Image name on docker hub, here's our ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/wechaty/wechaty"},"wechaty/wechaty")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"latest")," version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mybot.js")," : File contains code wrote by you, should be placed in current directory ",(0,o.kt)("inlineCode",{parentName:"li"},"./"))),(0,o.kt)("p",null,"See Also: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/66"},"Dockerize Wechaty for easy start #66")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get started with various ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/overview"},"Examples")," written in JavaScript. Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd example\nwechaty ding-dong-bot.js\n")),(0,o.kt)("h3",{id:"run-wechaty-as-a-hostie"},"Run Wechaty as a Hostie"),(0,o.kt)("p",null,"Running your wechaty as a hostie requires ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_TOKEN")," so as to manage wechaty on the chatbot cloud manager: ",(0,o.kt)("a",{parentName:"p",href:"https://www.chatie.io"},"https://www.chatie.io")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_TOKEN="your token here"\ndocker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty\n')),(0,o.kt)("h2",{id:"additional"},"Additional"),(0,o.kt)("h3",{id:"onbuild"},"Onbuild"),(0,o.kt)("p",null,"Put this line(and only this line) to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM wechaty/onbuild\n")),(0,o.kt)("p",null,"This image makes building derivative images easier. For most use cases, creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the base of your project directory with the line ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM wechaty/onbuild")," will be enough to create a stand-alone image for your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"onbuild"),' variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)'),(0,o.kt)("li",{parentName:"ol"},"This ",(0,o.kt)("inlineCode",{parentName:"li"},"onbuild")," variant will only install npm packages according to the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ol"},"The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build --build-arg NODE_ENV=production \u2026"),".")),(0,o.kt)("h3",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t wechaty\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Now that you\u2019ve learned how to install docker and work with your Wechaty Docker. See the following guides to begin:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wechaty Getting Started: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),(0,o.kt)("li",{parentName:"ol"},"Heroku Wechaty Getting Started: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"https://github.com/wechaty/heroku-wechaty-getting-started")),(0,o.kt)("li",{parentName:"ol"},"Docker Wechaty GitHub repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"https://github.com/wechaty/docker-wechaty-getting-started"))))}u.isMDXComponent=!0}}]);