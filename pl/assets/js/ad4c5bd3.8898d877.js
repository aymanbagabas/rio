"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2189],{2047:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"config/platform","title":"platform","description":"Rio allows you to have different configurations per OS, you can write ovewrite Shell, Navigation, Renderer and Window.","source":"@site/docs/config/platform.md","sourceDirName":"config","slug":"/config/platform","permalink":"/rio/pl/docs/config/platform","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/platform.md","tags":[],"version":"current","frontMatter":{"title":"platform","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"padding","permalink":"/rio/pl/docs/config/padding"},"next":{"title":"renderer","permalink":"/rio/pl/docs/config/renderer"}}');var t=o(4848),i=o(8453);const s={title:"platform",language:"en"},a=void 0,l={},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Rio allows you to have different configurations per OS, you can write ovewrite ",(0,t.jsx)(n.code,{children:"Shell"}),", ",(0,t.jsx)(n.code,{children:"Navigation"}),", ",(0,t.jsx)(n.code,{children:"Renderer"})," and ",(0,t.jsx)(n.code,{children:"Window"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[shell]\n# default (in this case will be used only on MacOS)\nprogram = "/bin/fish"\nargs = ["--login"]\n\n[platform]\n# Microsoft Windows overwrite\nwindows.shell.program = "pwsh"\nwindows.shell.args = ["-l"]\n\n# Linux overwrite\nlinux.shell.program = "tmux"\nlinux.shell.args = ["new-session", "-c", "/var/www"]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);