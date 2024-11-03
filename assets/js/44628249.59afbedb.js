"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[436],{3041:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(4848),o=a(8453);const s={sidebar_position:11},t=void 0,i={id:"Frameworks/Angular/Routing/Routing",title:"Routing",description:"En la mayor\xeda de las aplicaciones, llega un punto en que se necesita navegar entre varias p\xe1ginas o secciones. En Angular, el Router permite gestionar esta navegaci\xf3n y ofrece una forma sencilla de configurar y mostrar diferentes vistas en funci\xf3n de la URL actual. Este proceso, llamado routing, mejora la experiencia de usuario al cargar solo las vistas necesarias y facilita una navegaci\xf3n fluida.",source:"@site/docs/Frameworks/Angular/Routing/Routing.md",sourceDirName:"Frameworks/Angular/Routing",slug:"/Frameworks/Angular/Routing/",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Routing/",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Frameworks/Angular/Routing/Routing.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1730660085e3,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Optimizaci\xf3n de imagenes",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Optimizaci\xf3n de imagenes"},next:{title:"Definir una ruta",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Routing/Definir una ruta"}},c={},l=[{value:"Paso 1: Crear un Archivo de Rutas (<code>app.routes.ts</code>)",id:"paso-1-crear-un-archivo-de-rutas-approutests",level:4},{value:"Paso 2: Configurar el Proveedor de Rutas",id:"paso-2-configurar-el-proveedor-de-rutas",level:4},{value:"Paso 3: Usar <code>RouterOutlet</code> en el Componente Principal",id:"paso-3-usar-routeroutlet-en-el-componente-principal",level:4}];function u(e){const r={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Card:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["En la mayor\xeda de las aplicaciones, llega un punto en que se necesita navegar entre varias p\xe1ginas o secciones. En Angular, el ",(0,n.jsx)(r.strong,{children:"Router"})," permite gestionar esta navegaci\xf3n y ofrece una forma sencilla de configurar y mostrar diferentes vistas en funci\xf3n de la URL actual. Este proceso, llamado ",(0,n.jsx)(r.strong,{children:"routing"}),", mejora la experiencia de usuario al cargar solo las vistas necesarias y facilita una navegaci\xf3n fluida."]}),"\n",(0,n.jsx)(r.p,{children:"En este ejemplo, configuraremos el Router de Angular paso a paso para habilitar la navegaci\xf3n entre vistas en nuestra aplicaci\xf3n."}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsxs)(r.h4,{id:"paso-1-crear-un-archivo-de-rutas-approutests",children:["Paso 1: Crear un Archivo de Rutas (",(0,n.jsx)(r.code,{children:"app.routes.ts"}),")"]}),(0,n.jsxs)(r.p,{children:["Primero, crearemos un archivo llamado ",(0,n.jsx)(r.code,{children:"app.routes.ts"})," en el que configuraremos las rutas de la aplicaci\xf3n. Este archivo mantendr\xe1 un array de objetos de rutas, llamado ",(0,n.jsx)(r.code,{children:"routes"}),", que define c\xf3mo se debe redirigir o cargar cada URL."]}),(0,n.jsx)(a,{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { Routes } from '@angular/router';\r\nexport const routes: Routes = [];\n"})})}),(0,n.jsxs)(r.p,{children:["En este archivo, ",(0,n.jsx)(r.code,{children:"routes"})," es un array vac\xedo por ahora, pero aqu\xed se agregar\xe1n las rutas de la aplicaci\xf3n."]})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)(r.h4,{id:"paso-2-configurar-el-proveedor-de-rutas",children:"Paso 2: Configurar el Proveedor de Rutas"}),(0,n.jsxs)(r.p,{children:["Ahora, en el archivo ",(0,n.jsx)(r.code,{children:"app.config.ts"}),", configuraremos el proveedor del Router para Angular. Esto le indica a Angular que usaremos las rutas definidas en ",(0,n.jsx)(r.code,{children:"app.routes.ts"})," para la navegaci\xf3n."]}),(0,n.jsx)(a,{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { ApplicationConfig } from '@angular/core';\r\nimport { provideRouter } from '@angular/router';\r\nimport { routes } from './app.routes';\r\n\r\nexport const appConfig: ApplicationConfig = {\r\n    providers: [provideRouter(routes)],\r\n};\n"})})}),(0,n.jsxs)(r.p,{children:["En este c\xf3digo, ",(0,n.jsx)(r.code,{children:"provideRouter(routes)"})," conecta el Router de Angular con las rutas especificadas en ",(0,n.jsx)(r.code,{children:"app.routes.ts"}),". Esto configura el Router en toda la aplicaci\xf3n, permitiendo manejar la navegaci\xf3n."]})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsxs)(r.h4,{id:"paso-3-usar-routeroutlet-en-el-componente-principal",children:["Paso 3: Usar ",(0,n.jsx)(r.code,{children:"RouterOutlet"})," en el Componente Principal"]}),(0,n.jsxs)(r.p,{children:["Para indicar en qu\xe9 parte de la vista se deben mostrar las rutas cargadas, usaremos ",(0,n.jsx)(r.code,{children:"RouterOutlet"}),", una directiva de Angular que act\xfaa como un marcador de posici\xf3n para el contenido en funci\xf3n de la ruta actual."]}),(0,n.jsxs)(r.p,{children:["Actualicemos la plantilla de ",(0,n.jsx)(r.code,{children:"AppComponent"})," para que incluya ",(0,n.jsx)(r.code,{children:"RouterOutlet"})," y algunos enlaces de navegaci\xf3n:"]}),(0,n.jsx)(a,{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { RouterOutlet } from '@angular/router';\r\n@Component({\r\n    selector: 'app-root',\r\n  template: `\r\n    <nav>\r\n      <a href=\"/\">Inicio</a> |\r\n      <a href=\"/user\">Usuario</a>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n  `,\r\n  standalone: true,\r\n  imports: [RouterOutlet],\r\n})\r\nexport class AppComponent {}\n"})})}),(0,n.jsxs)(r.p,{children:["Aqu\xed, ",(0,n.jsx)(r.code,{children:"<router-outlet></router-outlet>"})," se colocar\xe1 en el lugar donde queremos que se muestren las vistas de las rutas. Los enlaces ",(0,n.jsx)(r.code,{children:'<a href="/">Inicio</a>'})," y ",(0,n.jsx)(r.code,{children:'<a href="/user">Usuario</a>'})," permiten navegar entre las p\xe1ginas definidas en ",(0,n.jsx)(r.code,{children:"app.routes.ts"}),"."]})]}),"\n",(0,n.jsxs)(r.p,{children:["Ahora tu aplicaci\xf3n est\xe1 configurada para usar el Router de Angular. La navegaci\xf3n entre p\xe1ginas es sencilla y eficaz gracias a ",(0,n.jsx)(r.code,{children:"RouterOutlet"}),", que muestra el contenido correspondiente a la URL actual."]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>i});var n=a(6540);const o={},s=n.createContext(o);function t(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);