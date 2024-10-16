"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[8465],{5640:(e,c,o)=>{o.r(c),o.d(c,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=o(4848),t=o(8453);const n={title:"Asterisco (*)"},r=void 0,i={id:"Sistemas operativos/Linux/Globbing/Asterisco",title:"Asterisco (*)",description:"El asterisco * es un comod\xedn que coincide con cualquier secuencia de caracteres. Por ejemplo, si tienes un directorio con los siguientes archivos:",source:"@site/docs/Sistemas operativos/Linux/Globbing/Asterisco.md",sourceDirName:"Sistemas operativos/Linux/Globbing",slug:"/Sistemas operativos/Linux/Globbing/Asterisco",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Asterisco",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/Globbing/Asterisco.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,frontMatter:{title:"Asterisco (*)"},sidebar:"tutorialSidebar",previous:{title:"Definici\xf3n",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/"},next:{title:"Comandos",permalink:"/notas-de-aprendizaje/docs/category/comandos-1"}},a={},d=[{value:"Ejemplos",id:"ejemplos",level:3}];function l(e){const c={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Card:o}=c;return o||function(e,c){throw new Error("Expected "+(c?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.p,{children:["El asterisco ",(0,s.jsx)(c.code,{children:"*"})," es un comod\xedn que coincide con cualquier secuencia de caracteres. Por ejemplo, si tienes un directorio con los siguientes archivos:"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"archivo1.txt\r\narchivo2.txt\r\narchivo3.txt\n"})}),"\n",(0,s.jsxs)(c.p,{children:["Puedes listar todos los archivos que terminan en ",(0,s.jsx)(c.code,{children:".txt"})," con el comando ",(0,s.jsx)(c.code,{children:"ls"})," y el asterisco ",(0,s.jsx)(c.code,{children:"*"}),":"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ ls *.txt\r\narchivo1.txt archivo2.txt archivo3.txt\r\n\r\nsysadmin@localhost:~$\n"})}),"\n",(0,s.jsxs)(c.p,{children:["En este caso, el asterisco ",(0,s.jsx)(c.code,{children:"*"})," coincide con cualquier secuencia de caracteres, por lo que ",(0,s.jsx)(c.code,{children:"*.txt"})," coincide con cualquier archivo que termine en ",(0,s.jsx)(c.code,{children:".txt"}),"."]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)(c.h3,{id:"ejemplos",children:"Ejemplos"}),(0,s.jsxs)(o,{children:[(0,s.jsxs)(c.p,{children:["Para visualizar todos los archivos en el directorio ",(0,s.jsx)(c.code,{children:"/etc"})," que empiecen con la letra ",(0,s.jsx)(c.code,{children:"t"}),":"]}),(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ ls /etc/t*\r\n/etc/terminfo /etc/timezone                                      \r\n\r\nsysadmin@localhost:~$\n"})}),(0,s.jsx)(c.p,{children:'El patr\xf3n t* significa "cualquier archivo que comienza con el car\xe1cter t y tiene cero o m\xe1s de cualquier car\xe1cter despu\xe9s de la letra t".'})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)(c.p,{children:"Puedes usar el asterisco en cualquier lugar dentro del patr\xf3n del nombre de archivo. El siguiente ejemplo coincidir\xe1 con cualquier nombre de archivo en el directorio /etc que termina con .d:"}),(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/*.d                                 \r\n/etc/apparmor.d /etc/bash_completion.d  /etc/cron.d /etc/depmod.d   /etc/fstab.d /etc/init.d /etc/insserv.conf.d /etc/ld.so.conf.d /etc/logrotate.d /etc/modprobe.d /etc/pam.d /etc/profile.d /etc/rc0.d /etc/rc1.d /etc/rc2.d /etc/rc3.d /etc/rc4.d /etc/rc5.d /etc/rc6.d /etc/rcS.d /etc/rsyslog.d /etc/sudoers.d /etc/sysctl.d  /etc/update-motd.d\n"})})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)(c.p,{children:"EnEn el ejemplo siguiente se mostrar\xe1n todos los archivos en el directorio /etc que comienzan con la letra r y terminan con .conf:"}),(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/r*.conf                             \r\n/etc/resolv.conf /etc/rsyslog.conf\n"})})]})]})]})}function u(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,c,o)=>{o.d(c,{R:()=>r,x:()=>i});var s=o(6540);const t={},n=s.createContext(t);function r(e){const c=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(n.Provider,{value:c},e.children)}}}]);