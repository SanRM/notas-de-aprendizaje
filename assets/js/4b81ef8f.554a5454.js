"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[2343],{4995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(4848),r=t(8453);const s={sidebar_position:8},a=void 0,c={id:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AbstractAuthenticationProcessingFilter",title:"AbstractAuthenticationProcessingFilter",description:"El AbstractAuthenticationProcessingFilter se utiliza como un filtro base para autenticar las credenciales de un usuario. Antes de que las credenciales puedan ser autenticadas, Spring Security generalmente solicita las credenciales mediante el AuthenticationEntryPoint.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AbstractAuthenticationProcessingFilter.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n",slug:"/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AbstractAuthenticationProcessingFilter",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AbstractAuthenticationProcessingFilter",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AbstractAuthenticationProcessingFilter.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"AuthenticationEntryPoint",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Autenticaci\xf3n/Arquitectura de la autenticaci\xf3n/AuthenticationEntryPoint"},next:{title:"Metodolog\xedas de desarrollo de software",permalink:"/notas-de-aprendizaje/docs/category/metodolog\xedas-de-desarrollo-de-software"}},o={},l=[];function u(e){const n={img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Card:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.strong,{children:"AbstractAuthenticationProcessingFilter"})," se utiliza como un filtro base para autenticar las credenciales de un usuario. Antes de que las credenciales puedan ser autenticadas, Spring Security generalmente solicita las credenciales mediante el ",(0,i.jsx)(n.strong,{children:"AuthenticationEntryPoint"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Despu\xe9s, el ",(0,i.jsx)(n.strong,{children:"AbstractAuthenticationProcessingFilter"})," puede autenticar cualquier solicitud de autenticaci\xf3n que se le env\xede."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(t,{textAlign:"center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/abstractauthenticationprocessingfilter.png",alt:""})})}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"}),". Cuando el usuario env\xeda sus credenciales, el ",(0,i.jsx)(n.strong,{children:"AbstractAuthenticationProcessingFilter"})," crea un objeto de ",(0,i.jsx)(n.strong,{children:"Authentication"})," a partir del ",(0,i.jsx)(n.strong,{children:"HttpServletRequest"})," para ser autenticado. El tipo de ",(0,i.jsx)(n.strong,{children:"Authentication"})," creado depende de la subclase de ",(0,i.jsx)(n.strong,{children:"AbstractAuthenticationProcessingFilter"}),". Por ejemplo, ",(0,i.jsx)(n.strong,{children:"UsernamePasswordAuthenticationFilter"})," crea un ",(0,i.jsx)(n.strong,{children:"UsernamePasswordAuthenticationToken"})," a partir de un nombre de usuario y una contrase\xf1a que se env\xedan en el ",(0,i.jsx)(n.strong,{children:"HttpServletRequest"}),"."]})}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2"}),". A continuaci\xf3n, el ",(0,i.jsx)(n.strong,{children:"Authentication"})," se pasa al ",(0,i.jsx)(n.strong,{children:"AuthenticationManager"})," para ser autenticado."]})}),(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3"}),". Si la autenticaci\xf3n falla, entonces ocurre un fallo."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["El ",(0,i.jsx)(n.strong,{children:"SecurityContextHolder"})," se limpia."]}),"\n",(0,i.jsxs)(n.li,{children:["Se invoca ",(0,i.jsx)(n.strong,{children:"RememberMeServices.loginFail"}),'. Si "recordar sesi\xf3n" no est\xe1 configurado, este paso no hace nada. Ver el paquete ',(0,i.jsx)(n.strong,{children:"rememberme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Se invoca el ",(0,i.jsx)(n.strong,{children:"AuthenticationFailureHandler"}),". Ver la interfaz ",(0,i.jsx)(n.strong,{children:"AuthenticationFailureHandler"}),"."]}),"\n"]})]}),(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4"}),". Si la autenticaci\xf3n es exitosa, entonces ocurre un \xe9xito."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se notifica a la ",(0,i.jsx)(n.strong,{children:"SessionAuthenticationStrategy"})," de un nuevo inicio de sesi\xf3n. Ver la interfaz ",(0,i.jsx)(n.strong,{children:"SessionAuthenticationStrategy"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["La ",(0,i.jsx)(n.strong,{children:"Authentication"})," se establece en el ",(0,i.jsx)(n.strong,{children:"SecurityContextHolder"}),". M\xe1s adelante, si necesitas guardar el ",(0,i.jsx)(n.strong,{children:"SecurityContext"})," para que pueda ser configurado autom\xe1ticamente en futuras solicitudes, se debe invocar expl\xedcitamente el m\xe9todo ",(0,i.jsx)(n.strong,{children:"SecurityContextRepository#saveContext"}),". Ver la clase ",(0,i.jsx)(n.strong,{children:"SecurityContextHolderFilter"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Se invoca ",(0,i.jsx)(n.strong,{children:"RememberMeServices.loginSuccess"}),'. Si "recordar sesi\xf3n" no est\xe1 configurado, este paso no hace nada. Ver el paquete ',(0,i.jsx)(n.strong,{children:"rememberme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ApplicationEventPublisher"})," publica un ",(0,i.jsx)(n.strong,{children:"InteractiveAuthenticationSuccessEvent"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Se invoca el ",(0,i.jsx)(n.strong,{children:"AuthenticationSuccessHandler"}),". Ver la interfaz ",(0,i.jsx)(n.strong,{children:"AuthenticationSuccessHandler"}),"."]}),"\n"]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);