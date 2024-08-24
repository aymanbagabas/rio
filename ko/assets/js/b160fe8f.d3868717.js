"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[9152],{8397:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=n(5893),i=n(1151);const t={title:"Color automation for navigation",language:"en"},r=void 0,s={id:"features/color-automation-for-navigation",title:"Color automation for navigation",description:"Rio allows specifying color for tabs based on program and path contexts, using the program and path options.",source:"@site/docs/features/color-automation-for-navigation.md",sourceDirName:"features",slug:"/features/color-automation-for-navigation",permalink:"/rio/ko/docs/features/color-automation-for-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/features/color-automation-for-navigation.md",tags:[],version:"current",frontMatter:{title:"Color automation for navigation",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Adaptive theme",permalink:"/rio/ko/docs/features/adaptive-theme"},next:{title:"Hyperlinks",permalink:"/rio/ko/docs/features/hyperlinks"}},l={},c=[{value:"Program",id:"program",level:4},{value:"Path",id:"path",level:4},{value:"Program and path",id:"program-and-path",level:4}];function d(o){const e={code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...o.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Rio allows specifying color for tabs based on program and path contexts, using the ",(0,a.jsx)(e.code,{children:"program"})," and ",(0,a.jsx)(e.code,{children:"path"})," options."]}),"\n",(0,a.jsxs)(e.p,{children:["It is possible to combine ",(0,a.jsx)(e.code,{children:"program"})," and ",(0,a.jsx)(e.code,{children:"path"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Note: ",(0,a.jsx)(e.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(e.h4,{id:"program",children:"Program"}),"\n",(0,a.jsxs)(e.p,{children:["The example below sets ",(0,a.jsx)(e.code,{children:"#FFFF00"})," as color background whenever ",(0,a.jsx)(e.code,{children:"nvim"})," is running."]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with program color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with program color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-2.png",width:"48%"})]}),"\n",(0,a.jsx)(e.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsx)(e.h4,{id:"path",children:"Path"}),"\n",(0,a.jsxs)(e.p,{children:["The example below sets ",(0,a.jsx)(e.code,{children:"#FFFF00"})," as color background when in the ",(0,a.jsx)(e.code,{children:"/home/geg/.config/rio"})," path."]}),"\n",(0,a.jsxs)(e.p,{children:["Note: ",(0,a.jsx)(e.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(e.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { path = "/home/geg/.config/rio", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-path-1.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with path color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-path-2.png",width:"48%"})]}),"\n",(0,a.jsx)(e.h4,{id:"program-and-path",children:"Program and path"}),"\n",(0,a.jsxs)(e.p,{children:["It is possible to combine ",(0,a.jsx)(e.code,{children:"path"})," and ",(0,a.jsx)(e.code,{children:"program"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["The example below sets ",(0,a.jsx)(e.code,{children:"#FFFF00"})," as color background when in the ",(0,a.jsx)(e.code,{children:"/home"})," path and ",(0,a.jsx)(e.code,{children:"nvim"})," is open."]}),"\n",(0,a.jsxs)(e.p,{children:["Note: ",(0,a.jsx)(e.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(e.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", path = "/home", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with program and path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-1.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with program and path color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-2.png",width:"48%"})]})]})}function p(o={}){const{wrapper:e}={...(0,i.a)(),...o.components};return e?(0,a.jsx)(e,{...o,children:(0,a.jsx)(d,{...o})}):d(o)}},1151:(o,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var a=n(7294);const i={},t=a.createContext(i);function r(o){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function s(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:r(o.components),a.createElement(t.Provider,{value:e},o.children)}}}]);