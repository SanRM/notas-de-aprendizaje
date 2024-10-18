"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[9474],{7025:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var l=a(4848),o=a(8453);const n={title:"Comillas dobles"},i=void 0,t={id:"Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles",title:"Comillas dobles",description:'Las comillas dobles " se utilizan para evitar que el shell interprete los caracteres especiales que se encuentran dentro de ellas. El asterisco es s\xf3lo un asterisco, el signo de d\xf3lar es s\xf3lo un signo de d\xf3lar, etc.',source:"@site/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles.md",sourceDirName:"Sistemas operativos/Linux/Globbing/Comillas",slug:"/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,frontMatter:{title:"Comillas dobles"},sidebar:"tutorialSidebar",previous:{title:"Comilla invertida",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comilla invertida"},next:{title:"Comillas simples",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas simples"}},r={},c=[];function d(e){const s={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Las comillas dobles ",(0,l.jsx)(s.strong,{children:'"'})," se utilizan para evitar que el shell interprete los caracteres especiales que se encuentran dentro de ellas. El asterisco es s\xf3lo un asterisco, el signo de d\xf3lar es s\xf3lo un signo de d\xf3lar, etc."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'sysadmin@localhost:~$ echo /etc/[DP]*                                         \r\n/etc/DIR_COLORS /etc/DIR_COLORS.256color /etc/DIR_COLORS.lightbgcolor /etc/PackageKit                                                                  \r\nsysadmin@localhost:~$ echo "/etc/[DP]*"                                       \r\n/etc/[DP]*                                                                    \r\nsysadmin@localhost:~$ \n'})}),"\n",(0,l.jsx)(s.p,{children:"Esto es \xfatil cuando se quiere mostrar algo en pantalla, lo que suele ser un car\xe1cter especial para el shell:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'sysadmin@localhost:~$ echo "The glob characters are *, ? and [ ]"      \r\nThe glob characters are *, ? and [ ]                                   \r\nsysadmin@localhost:~$\n'})}),"\n",(0,l.jsxs)(s.p,{children:["Las comillas dobles todav\xeda permiten la ",(0,l.jsx)(s.code,{children:"sustituci\xf3n de comando"}),", ",(0,l.jsx)(s.code,{children:"sustituci\xf3n de variable"})," y permiten algunos metacaracteres de shell."]}),"\n",(0,l.jsxs)(s.p,{children:["Por ejemplo, en la siguiente demostraci\xf3n, notar\xe1s que el valor de la variable ",(0,l.jsx)(s.code,{children:"PATH"})," es desplegada:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'sysadmin@localhost:~$ echo "The path is $PATH"                          \r\nThe path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games                          \r\nsysadmin@localhost:~$\n'})})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>t});var l=a(6540);const o={},n=l.createContext(o);function i(e){const s=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(n.Provider,{value:s},e.children)}}}]);