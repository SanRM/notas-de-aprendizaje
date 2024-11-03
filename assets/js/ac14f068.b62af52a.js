"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[4696],{8250:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=a(4848),r=a(8453);const c={sidebar_position:18},s=void 0,o={id:"Frameworks/Angular/Inyecci\xf3n de dependencias/Creaci\xf3n de un servicio inyectable",title:"Creaci\xf3n de un servicio inyectable",description:"La inyecci\xf3n de dependencias (DI) en Angular es una de las caracter\xedsticas m\xe1s potentes del framework. Este concepto permite a Angular suministrar recursos (dependencias) que la aplicaci\xf3n necesita en tiempo de ejecuci\xf3n. Una dependencia puede ser un servicio, una API u otros recursos que ayudan a manejar y compartir l\xf3gica en diferentes partes de la aplicaci\xf3n.",source:"@site/docs/Frameworks/Angular/Inyecci\xf3n de dependencias/Creaci\xf3n de un servicio inyectable.md",sourceDirName:"Frameworks/Angular/Inyecci\xf3n de dependencias",slug:"/Frameworks/Angular/Inyecci\xf3n de dependencias/Creaci\xf3n de un servicio inyectable",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Inyecci\xf3n de dependencias/Creaci\xf3n de un servicio inyectable",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Frameworks/Angular/Inyecci\xf3n de dependencias/Creaci\xf3n de un servicio inyectable.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1730660085e3,sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Crear pipes personalizados",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Pipes/Crear pipes personalizados"},next:{title:"Inserci\xf3n de dependencias basada en inyecci\xf3n",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Inyecci\xf3n de dependencias/Inserci\xf3n de dependencias basada en inyecci\xf3n"}},d={},l=[{value:"Paso 1: \xbfQu\xe9 es un Servicio Inyectable?",id:"paso-1-qu\xe9-es-un-servicio-inyectable",level:3},{value:"Paso 2: Usar el Decorador <code>@Injectable</code>",id:"paso-2-usar-el-decorador-injectable",level:3},{value:"Explicaci\xf3n del C\xf3digo",id:"explicaci\xf3n-del-c\xf3digo",level:4},{value:"Paso 3: Aplicarlo a un Servicio Propio",id:"paso-3-aplicarlo-a-un-servicio-propio",level:3}];function t(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Card:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.strong,{children:"inyecci\xf3n de dependencias (DI)"})," en Angular es una de las caracter\xedsticas m\xe1s potentes del framework. Este concepto permite a Angular suministrar recursos (dependencias) que la aplicaci\xf3n necesita en tiempo de ejecuci\xf3n. Una dependencia puede ser un servicio, una API u otros recursos que ayudan a manejar y compartir l\xf3gica en diferentes partes de la aplicaci\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"En este ejemplo, aprenderemos c\xf3mo crear un servicio inyectable que pueda ser usado en toda la aplicaci\xf3n cuando se necesite."}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(n.h3,{id:"paso-1-qu\xe9-es-un-servicio-inyectable",children:"Paso 1: \xbfQu\xe9 es un Servicio Inyectable?"}),(0,i.jsx)(n.p,{children:"Un servicio en Angular es una clase que contiene l\xf3gica reutilizable y que se puede usar en distintos lugares de la aplicaci\xf3n. Por ejemplo, un servicio puede encargarse de interactuar con una API o de gestionar datos. Al centralizar esta l\xf3gica en un servicio, podemos acceder a ella desde diferentes componentes, lo cual mejora la organizaci\xf3n del c\xf3digo y evita duplicaci\xf3n."}),(0,i.jsxs)(n.p,{children:['Para que Angular pueda "inyectar" un servicio en otras partes de la aplicaci\xf3n, usamos el decorador ',(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"@Injectable"})}),"."]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(n.h3,{id:"paso-2-usar-el-decorador-injectable",children:["Paso 2: Usar el Decorador ",(0,i.jsx)(n.code,{children:"@Injectable"})]}),(0,i.jsxs)(n.p,{children:["Para hacer que un servicio est\xe9 disponible en el sistema de DI de Angular, a\xf1adimos el decorador ",(0,i.jsx)(n.code,{children:"@Injectable"})," en la parte superior de la clase. Aqu\xed se define la configuraci\xf3n de disponibilidad de este servicio:"]}),(0,i.jsxs)(a,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Injectable } from '@angular/core';\r\n\r\n@Injectable({\r\n    providedIn: 'root'  // Hace que el servicio est\xe9 disponible en toda la aplicaci\xf3n\r\n})\r\nexport class UserService {\r\n    // M\xe9todos para manejar datos, interactuar con APIs, etc.\r\n}\n"})}),(0,i.jsxs)(a,{children:[(0,i.jsx)(n.h4,{id:"explicaci\xf3n-del-c\xf3digo",children:"Explicaci\xf3n del C\xf3digo"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"@Injectable"})}),": Este decorador indica a Angular que la clase ",(0,i.jsx)(n.code,{children:"UserService"})," puede ser inyectada como una dependencia."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"providedIn: 'root'"})}),": Esta configuraci\xf3n permite que el servicio est\xe9 disponible en toda la aplicaci\xf3n. Al configurarlo con ",(0,i.jsx)(n.code,{children:"'root'"}),", Angular hace que el servicio sea un ",(0,i.jsx)(n.strong,{children:"singleton"}),", es decir, que exista solo una instancia de ",(0,i.jsx)(n.code,{children:"UserService"})," para toda la aplicaci\xf3n. Esto es \xfatil cuando queremos mantener datos compartidos entre m\xfaltiples componentes."]}),"\n"]})]})]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(n.h3,{id:"paso-3-aplicarlo-a-un-servicio-propio",children:"Paso 3: Aplicarlo a un Servicio Propio"}),(0,i.jsxs)(n.p,{children:["Ahora, practiquemos creando un servicio en un archivo llamado ",(0,i.jsx)(n.code,{children:"car.service.ts"}),":"]}),(0,i.jsx)(a,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Injectable } from '@angular/core';\r\n\r\n@Injectable({\r\n    providedIn: 'root'\r\n})\r\nexport class CarService {\r\n    // Aqu\xed ir\xedan los m\xe9todos y l\xf3gica del servicio\r\n}\n"})})}),(0,i.jsxs)(n.p,{children:["Ahora, el servicio ",(0,i.jsx)(n.code,{children:"CarService"})," est\xe1 configurado para ser inyectable en cualquier parte de la aplicaci\xf3n."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Hemos aprendido c\xf3mo crear un servicio inyectable en Angular utilizando el decorador ",(0,i.jsx)(n.code,{children:"@Injectable"}),". Este decorador permite que el servicio participe en el sistema de DI de Angular, haci\xe9ndolo accesible en cualquier lugar de la aplicaci\xf3n. Esto facilita el desarrollo de aplicaciones modulares y escalables, ya que se pueden compartir datos y l\xf3gica de manera eficiente."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(6540);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);