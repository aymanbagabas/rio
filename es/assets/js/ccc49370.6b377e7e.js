"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[6103],{2535:(e,t,n)=>{n.d(t,{Z:()=>B});var r=n(7294),a=n(512),s=n(3548),l=n(5893);function o(e){let{children:t,className:n}=e;return(0,l.jsx)("article",{className:n,children:t})}var i=n(3692);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,s.nO)(),{permalink:o,title:d}=n,u=r?"h1":"h2";return(0,l.jsx)(u,{className:(0,a.Z)(c.title,t),children:r?d:(0,l.jsx)(i.Z,{to:o,children:d})})}var u=n(5999),m=n(2263);const h=["zero","one","two","few","many","other"];function g(e){return h.filter((t=>e.includes(t)))}const f={locale:"en",pluralForms:g(["one","other"]),select:e=>1===e?"one":"other"};function x(){const{i18n:{currentLocale:e}}=(0,m.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:g(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),f}}),[e])}function p(){const e=x();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),s=n.pluralForms.indexOf(a);return r[Math.min(s,r.length-1)]}(n,t,e)}}var v=n(9788);const j={container:"container_mt6G"};function b(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=p();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsx)(l.Fragment,{children:n(t)})}function N(e){let{date:t,formattedDate:n}=e;return(0,l.jsx)("time",{dateTime:t,children:n})}function Z(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function L(e){let{className:t}=e;const{metadata:n}=(0,s.nO)(),{date:r,readingTime:o}=n,i=(0,v.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,a.Z)(j.container,"margin-vert--md",t),children:[(0,l.jsx)(N,{date:r,formattedDate:(c=r,i.format(new Date(c)))}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z,{}),(0,l.jsx)(b,{readingTime:o})]})]});var c}var y=n(6788);const k={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function C(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,s.nO)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),i=1===n.length;return(0,l.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?k.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,l.jsx)("div",{className:(0,a.Z)(!o&&(i?"col col--12":"col col--6"),o?k.imageOnlyAuthorCol:k.authorCol),children:(0,l.jsx)(y.Z,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(L,{}),(0,l.jsx)(C,{})]})}var w=n(8780),O=n(7395);function H(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,s.nO)();return(0,l.jsx)("div",{id:r?w.uR:void 0,className:(0,a.Z)("markdown",n),children:(0,l.jsx)(O.Z,{children:t})})}var T=n(5281),I=n(7265),P=n(6233);function A(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function M(e){const{blogPostTitle:t,...n}=e;return(0,l.jsx)(i.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,l.jsx)(A,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,s.nO)(),{tags:n,title:r,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=n.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",T.k.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(P.Z,{tags:n})})}),e&&(0,l.jsx)(I.Z,{className:(0,a.Z)("margin-top--sm",T.k.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,a.Z)("col",{"col--9":u}),children:(0,l.jsx)(P.Z,{tags:n})}),u&&(0,l.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":m}),children:(0,l.jsx)(M,{blogPostTitle:r,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const r=function(){const{isBlogPostPage:e}=(0,s.nO)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(o,{className:(0,a.Z)(r,n),children:[(0,l.jsx)(_,{}),(0,l.jsx)(H,{children:t}),(0,l.jsx)(R,{})]})}},9209:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(7294);var r=n(512),a=n(8264),s=n(5281),l=n(3548),o=n(1059),i=n(2535),c=n(5999),d=n(2244),u=n(5893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,l.nO)(),{title:n,description:r,date:s,tags:o,authors:i,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:n,description:r,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),i.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(5742);function f(){const e=(0,l.iZ)();return(0,u.jsx)(g.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(9407),p=n(3465);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:a}=(0,l.nO)(),{nextItem:s,prevItem:c,frontMatter:d}=r,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=d;return(0,u.jsxs)(o.Z,{sidebar:t,toc:!h&&a.length>0?(0,u.jsx)(x.Z,{toc:a,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(p.Z,{metadata:r}),(0,u.jsx)(i.Z,{children:n}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(l.n4,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(f,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},3465:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var r=n(512),a=n(5999),s=n(5742),l=n(5893);function o(){return(0,l.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,l.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(s.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,l.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,l.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(5281),h=n(9047);function g(e){let{className:t}=e;return(0,l.jsx)(h.Z,{type:"caution",title:(0,l.jsx)(d,{}),className:(0,r.Z)(t,m.k.common.draftBanner),children:(0,l.jsx)(u,{})})}function f(e){let{className:t}=e;return(0,l.jsx)(h.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,r.Z)(t,m.k.common.unlistedBanner),children:(0,l.jsx)(i,{})})}function x(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(f,{...e})]})}function p(e){let{metadata:t}=e;const{unlisted:n,frontMatter:r}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||r.unlisted)&&(0,l.jsx)(x,{}),r.draft&&(0,l.jsx)(g,{})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var r=n(512),a=n(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(5893);const o="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:o,linkActiveClassName:i})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),a=n(6668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>o(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=i(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(3692),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)))}):null}const g=r.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,a.L)(),x=c??f.tableOfContents.minHeadingLevel,p=u??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return d((0,r.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:x,maxHeadingLevel:p}}),[o,i,x,p])),(0,m.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}}}]);