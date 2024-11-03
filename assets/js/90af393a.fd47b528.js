"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[6353],{2055:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=a(4848),n=a(8453);const l={title:"Comillas simples"},o=void 0,r={id:"Sistemas operativos/Linux/Globbing/Comillas/Comillas simples",title:"Comillas simples",description:"Las comillas simples evitan que el shell interprete algunos caracteres especiales. Esto incluye comodines, variables, sustituci\xf3n de comando y otro metacar\xe1cter que a\xfan no hemos visto.",source:"@site/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas simples.md",sourceDirName:"Sistemas operativos/Linux/Globbing/Comillas",slug:"/Sistemas operativos/Linux/Globbing/Comillas/Comillas simples",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas simples",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas simples.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,frontMatter:{title:"Comillas simples"},sidebar:"tutorialSidebar",previous:{title:"Comillas dobles",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/Comillas dobles"},next:{title:"Comillas",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/Globbing/Comillas/"}},t={},c=[{value:"Barra diagonal invertida ()",id:"barra-diagonal-invertida-",level:2},{value:"$",id:"",level:2}];function d(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Card:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Las comillas simples evitan que el shell interprete algunos caracteres especiales. Esto incluye comodines, variables, sustituci\xf3n de comando y otro metacar\xe1cter que a\xfan no hemos visto."}),"\n",(0,i.jsxs)(s.p,{children:["Por ejemplo, si se quiere que el car\xe1cter ",(0,i.jsx)(s.code,{children:"$"})," simplemente signifique un ",(0,i.jsx)(s.code,{children:"$"}),", en lugar de actuar como un indicador del shell para buscar el valor de una variable, se puede ejecutar el segundo comando que se muestra a continuaci\xf3n:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo The car costs $100                           \r\nThe car costs 00                                                        \r\nsysadmin@localhost:~$ echo 'The car costs $100'                        \r\nThe car costs $100                                                      \r\nsysadmin@localhost:~$\n"})}),"\n",(0,i.jsxs)(s.p,{children:["En el primer comando, el shell intenta buscar el valor de la variable ",(0,i.jsx)(s.code,{children:"100"}),", que no existe. En el segundo comando, el shell simplemente imprime el texto tal como est\xe1."]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(s.h2,{id:"barra-diagonal-invertida-",children:"Barra diagonal invertida ()"}),(0,i.jsxs)(s.p,{children:["La barra diagonal invertida (",(0,i.jsx)(s.code,{children:"\\"}),") es un car\xe1cter de escape que se puede utilizar para evitar que el shell interprete el siguiente car\xe1cter."]}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Por ejemplo, si se quiere que el car\xe1cter ",(0,i.jsx)(s.code,{children:"$"})," simplemente signifique un ",(0,i.jsx)(s.code,{children:"$"}),", en lugar de actuar como un indicador del shell para buscar el valor de una variable, se puede ejecutar el segundo comando que se muestra a continuaci\xf3n:"]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo \"The service costs $100 and the path is $PATH\"\r\nThe service costs 00 and the path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games \r\nsysadmin@localhost:~$ echo 'The service costs $100 and the path is $PATH' \r\nThe service costs $100 and the path is $PATH                         \r\nsysadmin@localhost:~$ echo The service costs \\$100 and the path is $PATH\r\nThe service costs $100 and the path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games \r\nsysadmin@localhost:~$\n"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["En el primer comando, el shell intenta buscar el valor de la variable ",(0,i.jsx)(s.code,{children:"100"}),", que no existe."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"En el segundo comando, el shell simplemente imprime el texto tal como est\xe1."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["En el tercer comando, se utiliza la barra diagonal invertida para evitar que el shell interprete el car\xe1cter ",(0,i.jsx)(s.code,{children:"$"})," como un indicador de variable, tambi\xe9n muestra el valor de la variable ",(0,i.jsx)(s.code,{children:"PATH"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(s.h2,{id:"",children:"$"}),(0,i.jsx)(s.p,{children:"Tambi\xe9n se puede colocar un $ ( antes del y ) despu\xe9s del comando para llevar a cabo la sustituci\xf3n de comandos:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"echo Today is $(date)\n"})}),(0,i.jsx)(s.p,{children:"El resultado debe ser similar al siguiente:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sysadmin@localhost:~$ echo Today is $(date)\r\nToday is Tue Jan 19 15:51:09 UTC 2016\r\nsysadmin@localhost:~$\n"})}),(0,i.jsx)(s.p,{children:"Las comillas invertidas se parecen mucho a las comillas simples, por lo que es m\xe1s dif\xedcil \xabver\xbb lo que un comando deber\xeda hacer. Originalmente los shell utilizaban las comillas invertidas; el formato $(comando)  se a\xf1adi\xf3 en una versi\xf3n posterior del shell bash para que la instrucci\xf3n fuera visualmente m\xe1s clara."})]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>r});var i=a(6540);const n={},l=i.createContext(n);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);