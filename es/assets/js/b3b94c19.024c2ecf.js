"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[7608],{4020:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"config/shell","title":"shell","description":"You can set shell.program to the path of your favorite shell, e.g. /bin/fish.","source":"@site/docs/config/shell.md","sourceDirName":"config","slug":"/config/shell","permalink":"/rio/es/docs/config/shell","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/shell.md","tags":[],"version":"current","frontMatter":{"title":"shell","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"scroll","permalink":"/rio/es/docs/config/scroll"},"next":{"title":"theme","permalink":"/rio/es/docs/config/theme"}}');var r=l(4848),o=l(8453);const i={title:"shell",language:"en"},t=void 0,c={},a=[{value:"Shell Examples",id:"shell-examples",level:3}];function h(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can set ",(0,r.jsx)(n.code,{children:"shell.program"})," to the path of your favorite shell, e.g. ",(0,r.jsx)(n.code,{children:"/bin/fish"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Entries in ",(0,r.jsx)(n.code,{children:"shell.args"})," are passed unmodified as arguments to the shell."]}),"\n",(0,r.jsx)(n.p,{children:"Default:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(macOS) user login shell"}),"\n",(0,r.jsx)(n.li,{children:"(Linux/BSD) user login shell"}),"\n",(0,r.jsx)(n.li,{children:"(Windows) powershell"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"shell-examples",children:"Shell Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"MacOS using fish shell from bin path:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "/bin/fish"\nargs = ["--login"]\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Windows using powershell:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "pwsh"\nargs = []\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Windows using powershell with login:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "pwsh"\nargs = ["-l"]\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"MacOS with tmux installed by homebrew:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "/opt/homebrew/bin/tmux"\nargs = ["new-session", "-c", "/var/www"]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>t});var s=l(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);