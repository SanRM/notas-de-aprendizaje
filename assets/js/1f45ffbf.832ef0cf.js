"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[6015],{9020:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var n=r(4848),o=r(8453);const t={sidebar_position:13},i=void 0,s={id:"Frameworks/Angular/Routing/Usar RouterLink para Navegaci\xf3n",title:"Usar RouterLink para Navegaci\xf3n",description:"Actualmente, cuando haces clic en un enlace interno de tu aplicaci\xf3n, toda la p\xe1gina se recarga. Aunque esto no parece un problema en aplicaciones peque\xf1as, en aplicaciones m\xe1s grandes afecta el rendimiento, ya que obliga al usuario a recargar todos los recursos y volver a ejecutar c\xe1lculos.",source:"@site/docs/Frameworks/Angular/Routing/Usar RouterLink para Navegaci\xf3n.md",sourceDirName:"Frameworks/Angular/Routing",slug:"/Frameworks/Angular/Routing/Usar RouterLink para Navegaci\xf3n",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Routing/Usar RouterLink para Navegaci\xf3n",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Frameworks/Angular/Routing/Usar RouterLink para Navegaci\xf3n.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1730660085e3,sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Definir una ruta",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Routing/Definir una ruta"},next:{title:"Formularios",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Formularios/"}},l={},c=[{value:"Paso 1: Importar la Directiva <code>RouterLink</code>",id:"paso-1-importar-la-directiva-routerlink",level:4},{value:"Paso 2: Usar <code>routerLink</code> en la Plantilla",id:"paso-2-usar-routerlink-en-la-plantilla",level:4}];function u(e){const a={code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Card:r}=a;return r||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Actualmente, cuando haces clic en un enlace interno de tu aplicaci\xf3n, toda la p\xe1gina se recarga. Aunque esto no parece un problema en aplicaciones peque\xf1as, en aplicaciones m\xe1s grandes afecta el rendimiento, ya que obliga al usuario a recargar todos los recursos y volver a ejecutar c\xe1lculos."}),"\n",(0,n.jsxs)(a.p,{children:["Aqu\xed aprender\xe1s a usar la directiva ",(0,n.jsx)(a.code,{children:"RouterLink"})," para hacer la navegaci\xf3n m\xe1s eficiente aprovechando al m\xe1ximo el Angular Router."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(a.h4,{id:"paso-1-importar-la-directiva-routerlink",children:["Paso 1: Importar la Directiva ",(0,n.jsx)(a.code,{children:"RouterLink"})]}),(0,n.jsxs)(a.p,{children:["Para empezar, debemos importar la directiva ",(0,n.jsx)(a.code,{children:"RouterLink"})," en el archivo ",(0,n.jsx)(a.code,{children:"app.component.ts"}),". Esto permite que Angular gestione los cambios de ruta sin recargar la p\xe1gina. Tambi\xe9n necesitamos incluir ",(0,n.jsx)(a.code,{children:"RouterLink"})," en el array ",(0,n.jsx)(a.code,{children:"imports"})," del decorador del componente para que Angular lo reconozca."]}),(0,n.jsx)(r,{children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"import { RouterLink, RouterOutlet } from '@angular/router';\r\n\r\n@Component({\r\n    standalone: true,\r\n  imports: [RouterLink, RouterOutlet],\r\n  ...\r\n})\r\nexport class AppComponent {}\n"})})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(a.h4,{id:"paso-2-usar-routerlink-en-la-plantilla",children:["Paso 2: Usar ",(0,n.jsx)(a.code,{children:"routerLink"})," en la Plantilla"]}),(0,n.jsxs)(a.p,{children:["Con ",(0,n.jsx)(a.code,{children:"RouterLink"})," importado, puedes cambiar los atributos ",(0,n.jsx)(a.code,{children:"href"})," de los enlaces internos de la plantilla a ",(0,n.jsx)(a.code,{children:"routerLink"}),". Esto habilita la navegaci\xf3n interna sin recargar toda la p\xe1gina."]}),(0,n.jsx)(a.p,{children:"Ejemplo de la plantilla actualizada:"}),(0,n.jsx)(r,{children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:'import { RouterLink, RouterOutlet } from \'@angular/router\';\r\n\r\n@Component({\r\n    ...\r\n  standalone: true,\r\n  template: `\r\n    <nav>\r\n      <a routerLink="/">Home</a>\r\n      |\r\n      <a routerLink="/user">User</a>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n  `,\r\n  imports: [RouterLink, RouterOutlet],\r\n})\r\nexport class AppComponent {}\n'})})})]}),"\n",(0,n.jsxs)(a.p,{children:["Al hacer clic en los enlaces ahora, la navegaci\xf3n ser\xe1 fluida, y solo el contenido dentro de ",(0,n.jsx)(a.code,{children:"<router-outlet>"})," cambiar\xe1. Esto mejora notablemente el rendimiento en aplicaciones m\xe1s complejas y evita parpadeos en la pantalla."]})]})}function d(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>s});var n=r(6540);const o={},t=n.createContext(o);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);