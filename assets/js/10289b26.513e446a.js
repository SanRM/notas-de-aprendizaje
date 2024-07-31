"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[4603],{7221:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=a(4848),n=a(8453);const i={title:"Comilla invertida"},t=void 0,l={id:"Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida",title:"Comilla invertida",description:"Las comillas invertidas se utilizan para especificar un comando dentro de un comando, un proceso de sustituci\xf3n del comando. Esto permite un uso muy potente y sofisticado de los comandos.",source:"@site/docs/Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida.md",sourceDirName:"Sistemas operativos/Linux/Globbing/Comillas",slug:"/Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida.md",tags:[],version:"current",frontMatter:{title:"Comilla invertida"},sidebar:"tutorialSidebar",previous:{title:"Comillas",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/"},next:{title:"Comillas dobles",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles"}},d={},r=[];function c(e){const o={code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Las comillas invertidas se utilizan para especificar un comando dentro de un comando, un proceso de sustituci\xf3n del comando. Esto permite un uso muy potente y sofisticado de los comandos."}),"\n",(0,s.jsxs)(o.p,{children:["Aunque puede sonar confuso, un ejemplo debe hacer las cosas m\xe1s claras. Para empezar, f\xedjate en la salida del comando ",(0,s.jsx)(o.code,{children:"date"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sysadmin@localhost:~$ date                                           \r\nMon Nov  2 03:35:50 UTC 2015\r\nsysadmin@localhost:~$\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Ahora f\xedjate en la salida de la l\xednea de comandos ",(0,s.jsx)(o.code,{children:"echo Today is date"})," (o \xabeco La fecha de hoy es\xbb en espa\xf1ol):"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo Today is date                               \r\nToday is date                                                           \r\nsysadmin@localhost:~$\n"})}),"\n",(0,s.jsxs)(o.p,{children:["En el comando anterior la palabra ",(0,s.jsx)(o.code,{children:"date"})," (o \xabfecha\xbb en espa\xf1ol) es tratada como texto normal y el shell simplemente pasa ",(0,s.jsx)(o.code,{children:"date"})," al comando echo. Pero, probablemente quieras ejecutar el comando ",(0,s.jsx)(o.code,{children:"date"})," y tener la salida de ese comando enviado al comando echo. Para lograr esto, deber\xe1s ejecutar la l\xednea de comandos ",(0,s.jsxs)(o.strong,{children:["echo Today is ",(0,s.jsx)(o.code,{children:"date"})]}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo Today is `date`                         \r\nMon Jul 29 16:57:46 UTC 2024                     \r\nsysadmin@localhost:~$\n"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>t,x:()=>l});var s=a(6540);const n={},i=s.createContext(n);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);