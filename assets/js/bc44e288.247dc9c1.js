"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[2551],{246:(e,c,o)=>{o.r(c),o.d(c,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(4848),n=o(8453);const r={title:"Corchetes ([])"},s=void 0,a={id:"Sistemas operativos/Linux/Globbing/Corchetes/Corchetes",title:"Corchetes ([])",description:"Los corchetes se utilizan para coincidir con un car\xe1cter \xfanico representando un intervalo de caracteres que pueden coincidir con los caracteres.",source:"@site/docs/Sistemas operativos/Linux/Globbing/Corchetes/Corchetes.md",sourceDirName:"Sistemas operativos/Linux/Globbing/Corchetes",slug:"/Sistemas operativos/Linux/Globbing/Corchetes/",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Corchetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/Globbing/Corchetes/Corchetes.md",tags:[],version:"current",frontMatter:{title:"Corchetes ([])"},sidebar:"tutorialSidebar",previous:{title:"Comillas",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/"},next:{title:"Exclamaci\xf3n (!)",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Corchetes/Exclamaci\xf3n"}},i={},d=[];function l(e){const c={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Card:o}=c;return o||function(e,c){throw new Error("Expected "+(c?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(c.p,{children:"Los corchetes se utilizan para coincidir con un car\xe1cter \xfanico representando un intervalo de caracteres que pueden coincidir con los caracteres."}),(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["Por ejemplo, ",(0,t.jsx)(c.code,{children:"echo /etc/[gu]*"})," imprimir\xe1 cualquier archivo que comienza con el car\xe1cter ",(0,t.jsx)(c.code,{children:"g"})," o ",(0,t.jsx)(c.code,{children:"u"})," y contiene cero o m\xe1s caracteres adicionales:"]}),"\n"]}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/[gu]*                              \r\n/etc/gai.conf /etc/groff /etc/group /etc/group- /etc/gshadow /etc/gshadow- /etc/ucf.conf /etc/udev /etc/ufw /etc/update-motd.d /etc/updatedb.conf            \r\nsysadmin@localhost:~$\n"})})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsxs)(c.p,{children:["Los corchetes tambi\xe9n pueden ser utilizados para representar un intervalo de caracteres. Por ejemplo, el comando ",(0,t.jsx)(c.code,{children:"echo /etc/[a-d]*"})," mostrar\xe1 todos los archivos que comiencen con cualquier letra entre e incluyendo a y d:"]}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/[a-d]*                             \r\n/etc/adduser.conf /etc/adjtime /etc/alternatives /etc/apparmor.d \r\n/etc/apt /etc/bash.bashrc /etc/bash_completion.d /etc/bind /etc/bindresvport.blacklist /etc/blkid.conf /etc/blkid.tab /etc/ca-certificates /etc/ca-certificates.conf /etc/calendar /etc/cron.d /etc/cron.daily /etc/cron.hourly /etc/cron.monthly /etc/cron.weekly /etc/crontab /etc/dbus-1 /etc/debconf.conf /etc/debian_version /etc/default \r\n/etc/deluser.conf /etc/depmod.d /etc/dpkg                          \r\nsysadmin@localhost:~$\n"})})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsxs)(c.p,{children:["El comando ",(0,t.jsx)(c.code,{children:"echo /etc/*[0-9]*"})," mostrar\xe1 todos los archivos que contienen al menos un n\xfamero:"]}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/*[0-9]*                            \r\n/etc/dbus-1 /etc/iproute2 /etc/mke2fs.conf /etc/python2.7 /etc/rc0.d\r\n/etc/rc1.d /etc/rc2.d /etc/rc3.d /etc/rc4.d /etc/rc5.d /etc/rc6.d   \r\nsysadmin@localhost:~$\n"})})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(c.p,{children:"El intervalo se basa en el cuadro de texto de ASCII. Esta tabla define una lista de caracteres disponi\xe9ndolos en un orden est\xe1ndar espec\xedfico. Si se proporciona un orden inv\xe1lido, no se registrar\xe1 ninguna coincidencia:"}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo /etc/*[9-0]*                           \r\n/etc/*[9-0]*                                                       \r\nsysadmin@localhost:~$\n"})})]})]})}function u(e={}){const{wrapper:c}={...(0,n.R)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,c,o)=>{o.d(c,{R:()=>s,x:()=>a});var t=o(6540);const n={},r=t.createContext(n);function s(e){const c=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:c},e.children)}}}]);