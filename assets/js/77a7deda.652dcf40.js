"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[461],{3905:(t,e,n)=>{n.d(e,{Zo:()=>N,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},N=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,N=i(t,["components","mdxType","originalType","parentName"]),k=m(n),u=r,g=k["".concat(p,".").concat(u)]||k[u]||o[u]||l;return n?a.createElement(g,d(d({ref:e},N),{},{components:n})):a.createElement(g,d({ref:e},N))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[k]="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=n[m];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5456:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Escape Sequence Support",language:"en"},d=void 0,i={unversionedId:"documentation/escape-sequence-support",id:"documentation/escape-sequence-support",title:"Escape Sequence Support",description:"This list includes all escape sequences Rio currently supports.",source:"@site/docs/documentation/escape-sequence-support.md",sourceDirName:"documentation",slug:"/documentation/escape-sequence-support",permalink:"/rio/docs/documentation/escape-sequence-support",draft:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/documentation/escape-sequence-support.md",tags:[],version:"current",frontMatter:{title:"Escape Sequence Support",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Default colors",permalink:"/rio/docs/documentation/default-colors"},next:{title:"Key Bindings",permalink:"/rio/docs/documentation/key-bindings"}},p={},m=[{value:"Legend",id:"legend",level:3},{value:"ESC codes - <code>ESC</code>",id:"esc-codes---esc",level:3},{value:"CSI (Control Sequence Introducer) - <code>ESC [</code>",id:"csi-control-sequence-introducer---esc-",level:3},{value:"OSC (Operating System Command) - <code>ESC ]</code>",id:"osc-operating-system-command---esc-",level:3},{value:"DCS (Device Control String) - <code>ESC P</code>",id:"dcs-device-control-string---esc-p",level:3}],N={toc:m},k="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This list includes all escape sequences Rio currently supports."),(0,r.kt)("h3",{id:"legend"},"Legend"),(0,r.kt)("p",null,"The available statuses are ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTIAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPLEMENTED")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REJECTED"),". While a\nstatus of ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTIAL")," means there is still work left to be done, a status of\n",(0,r.kt)("inlineCode",{parentName:"p"},"IMPLEMENTED")," for something partially implemented means all other features were\nrejected."),(0,r.kt)("p",null,"All whitespace in escape sequences is solely for formatting purposes and all\nrelevant spaces are denoted as ",(0,r.kt)("inlineCode",{parentName:"p"},"SP"),". The escape parameters are omitted for\nbrevity."),(0,r.kt)("h3",{id:"esc-codes---esc"},"ESC codes - ",(0,r.kt)("inlineCode",{parentName:"h3"},"ESC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ESCAPE"),(0,r.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC (")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only charsets ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC )")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only charsets ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC *")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only charsets ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC +")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only charsets ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC =")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC >")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC 7")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC 8")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC # 8")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC D")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC E")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC H")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC M")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC Z")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"csi-control-sequence-introducer---esc-"},"CSI (Control Sequence Introducer) - ",(0,r.kt)("inlineCode",{parentName:"h3"},"ESC [")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ESCAPE"),(0,r.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI ` ")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI @")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI A")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI a")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI B")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI b")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI C")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI c")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI D")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI d")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI E")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI e")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI F")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI f")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI G")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI g")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI H")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI h")),(0,r.kt)("td",{parentName:"tr",align:null},"PARTIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Only modes ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"20")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI ? h")),(0,r.kt)("td",{parentName:"tr",align:null},"PARTIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported modes:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"6"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"7"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"12"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"25"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1004"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1005"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1006"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1007"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1042"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1049"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2004")," ",(0,r.kt)("inlineCode",{parentName:"td"},"2026"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI I")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI J")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI K")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI L")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI l")),(0,r.kt)("td",{parentName:"tr",align:null},"PARTIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("inlineCode",{parentName:"td"},"CSI h")," for supported modes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI ? l")),(0,r.kt)("td",{parentName:"tr",align:null},"PARTIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("inlineCode",{parentName:"td"},"CSI ? h")," for supported modes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI M")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI m")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported parameters:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"9"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"21"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"25"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"27"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"49"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"58"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"59"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"90"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"97"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"107"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"11"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"51"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"55"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI n")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI P")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI SP q")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI r")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI S")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI s")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI T")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI t")),(0,r.kt)("td",{parentName:"tr",align:null},"PARTIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Only parameters ",(0,r.kt)("inlineCode",{parentName:"td"},"22")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"23")," are supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"13"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"15"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"19"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"21"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"24"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI u")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI ? u")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI = u")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI < u")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI > u")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI X")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI Z")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"osc-operating-system-command---esc-"},"OSC (Operating System Command) - ",(0,r.kt)("inlineCode",{parentName:"h3"},"ESC ]")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ESCAPE"),(0,r.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 0")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Icon names are not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 1")),(0,r.kt)("td",{parentName:"tr",align:null},"REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Icon names are not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 2")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 4")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 8")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 10")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 11")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 12")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 50")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only ",(0,r.kt)("inlineCode",{parentName:"td"},"CursorShape")," is supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 52")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Only Clipboard and primary selection supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 104")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 110")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 111")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSC 112")),(0,r.kt)("td",{parentName:"tr",align:null},"IMPLEMENTED"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"dcs-device-control-string---esc-p"},"DCS (Device Control String) - ",(0,r.kt)("inlineCode",{parentName:"h3"},"ESC P")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ESCAPE"),(0,r.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DCS = s")),(0,r.kt)("td",{parentName:"tr",align:null},"REJECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"CSI ? 2026 h/l are used instead")))))}o.isMDXComponent=!0}}]);