"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[7962],{9689:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=r(4848),s=r(8453);const o={title:"DelegatingFilterProxy",sidebar_position:2},t=void 0,l={id:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/DelegatingFilterProxy",title:"DelegatingFilterProxy",description:"La DelegatingFilterProxy es una implementaci\xf3n proporcionada por Spring que act\xfaa como un puente entre el ciclo de vida del Contenedor de servlets y el contexto de la aplicaci\xf3n de Spring. Es decir, permite que los filtros de Spring se integren con el Contenedor de servlets de una manera que no ser\xeda posible solo utilizando el mecanismo est\xe1ndar de los servlets.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/DelegatingFilterProxy.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura",slug:"/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/DelegatingFilterProxy",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/DelegatingFilterProxy",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/DelegatingFilterProxy.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,sidebarPosition:2,frontMatter:{title:"DelegatingFilterProxy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\xbfQu\xe9 son los filtros?",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Los Filtros"},next:{title:"FilterChainProxy",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/FilterChainProxy"}},a={},d=[{value:"Contexto del Contenedor de servlets y Beans de Spring",id:"contexto-del-contenedor-de-servlets-y-beans-de-spring",level:3},{value:"\xbfC\xf3mo Funciona DelegatingFilterProxy?",id:"c\xf3mo-funciona-delegatingfilterproxy",level:3},{value:"Proceso de Funcionamiento",id:"proceso-de-funcionamiento",level:4},{value:"Ejemplo de Pseudo C\xf3digo de DelegatingFilterProxy",id:"ejemplo-de-pseudo-c\xf3digo-de-delegatingfilterproxy",level:3},{value:"Desglose del C\xf3digo",id:"desglose-del-c\xf3digo",level:4},{value:"Beneficios de DelegatingFilterProxy",id:"beneficios-de-delegatingfilterproxy",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Card:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.strong,{children:"DelegatingFilterProxy"})," es una implementaci\xf3n proporcionada por Spring que act\xfaa como un puente entre el ciclo de vida del ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})," y el contexto de la aplicaci\xf3n de Spring. Es decir, permite que los filtros de Spring se integren con el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})," de una manera que no ser\xeda posible solo utilizando el mecanismo est\xe1ndar de los servlets."]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)(n.h3,{id:"contexto-del-contenedor-de-servlets-y-beans-de-spring",children:["Contexto del ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})," y ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Beans"})," de Spring"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})}),": Es un entorno donde se ejecutan aplicaciones Java basadas en servlets. Permite registrar instancias de filtros utilizando sus propios est\xe1ndares. Sin embargo, no tiene conocimiento de los ",(0,i.jsx)(n.strong,{children:"Beans"})," (componentes de Spring) definidos en el contexto de Spring."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Beans"})," de Spring"]}),": Son objetos gestionados por el contenedor de Spring. Estos objetos pueden tener configuraciones complejas y pueden depender de otros beans."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n.h3,{id:"c\xf3mo-funciona-delegatingfilterproxy",children:"\xbfC\xf3mo Funciona DelegatingFilterProxy?"}),(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.strong,{children:"DelegatingFilterProxy"})," se registra en el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})," como un filtro est\xe1ndar, pero delega todo el trabajo a un ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," de Spring que implementa la interfaz ",(0,i.jsx)(n.code,{children:"Filter"}),". Esto significa que, aunque se registra en el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"}),", su l\xf3gica se maneja a trav\xe9s de Spring."]}),(0,i.jsx)(n.h4,{id:"proceso-de-funcionamiento",children:"Proceso de Funcionamiento"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"B\xfasqueda del Bean"}),": Cuando se invoca el filtro, el ",(0,i.jsx)(n.code,{children:"DelegatingFilterProxy"})," busca un ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," de filtro espec\xedfico en el contexto de aplicaci\xf3n de Spring. Este ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," se define en la configuraci\xf3n de Spring y puede realizar las acciones necesarias para procesar la solicitud."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Delegar el Trabajo"}),": Una vez que se ha encontrado el Bean, el ",(0,i.jsx)(n.code,{children:"DelegatingFilterProxy"})," invoca su m\xe9todo ",(0,i.jsx)(n.code,{children:"doFilter"}),", pasando la solicitud y la respuesta. Esto permite que el filtro de Spring maneje la l\xf3gica espec\xedfica de la aplicaci\xf3n."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n.h3,{id:"ejemplo-de-pseudo-c\xf3digo-de-delegatingfilterproxy",children:"Ejemplo de Pseudo C\xf3digo de DelegatingFilterProxy"}),(0,i.jsxs)(n.p,{children:["Aqu\xed hay un ejemplo simplificado de c\xf3mo podr\xeda verse el c\xf3digo de un ",(0,i.jsx)(n.code,{children:"DelegatingFilterProxy"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {\r\n    Filter delegate = getFilterBean(someBeanName); \r\n    delegate.doFilter(request, response); \r\n}\n"})}),(0,i.jsx)(n.h4,{id:"desglose-del-c\xf3digo",children:"Desglose del C\xf3digo"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["M\xe9todo ",(0,i.jsx)(n.code,{children:"doFilter"})]}),": Este es el m\xe9todo que se ejecuta cuando el filtro es invocado."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Filter delegate = getFilterBean(someBeanName);"})}),": Aqu\xed, el proxy busca el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," que ha sido registrado en Spring con un nombre espec\xedfico (",(0,i.jsx)(n.code,{children:"someBeanName"}),"). Este es el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," que realizar\xe1 la l\xf3gica del filtro."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"delegate.doFilter(request, response);"})}),": Este es el m\xe9todo que se llama en el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Bean"})," de Spring, lo que permite que el filtro maneje la solicitud y la respuesta."]}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n.h3,{id:"beneficios-de-delegatingfilterproxy",children:"Beneficios de DelegatingFilterProxy"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Integraci\xf3n entre Contenedores"}),": Permite una integraci\xf3n fluida entre el ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Contenedor de servlets"})," y el contexto de Spring, lo que facilita el uso de los ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Beans"})," de Spring como filtros."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Retraso en la B\xfasqueda de Beans"}),": Una de las ventajas clave del ",(0,i.jsx)(n.code,{children:"DelegatingFilterProxy"})," es que permite retrasar la b\xfasqueda de las instancias de los Beans. Esto es crucial porque el contenedor necesita registrar las instancias antes de que pueda iniciar el ciclo de vida de la aplicaci\xf3n. Spring utiliza un ",(0,i.jsx)(n.code,{children:"ContextLoaderListener"})," para cargar los ",(0,i.jsx)(n.a,{href:"#contexto-del-contenedor-de-servlets-y-beans-de-spring",children:"Beans"})," de Spring, y este proceso no se completa hasta despu\xe9s de que el contenedor ha registrado los filtros."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Flexibilidad y Reutilizaci\xf3n"}),": Puedes reutilizar la misma l\xf3gica de filtro en m\xfaltiples aplicaciones o diferentes partes de la misma aplicaci\xf3n sin necesidad de duplicar c\xf3digo."]}),"\n"]}),"\n"]}),(0,i.jsx)(r,{color:"dark",header:"Figura 2. DelegatingFilterProxy",textAlign:"center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://docs.spring.io/spring-security/reference/_images/servlet/architecture/delegatingfilterproxy.png",alt:"Spring seurity image"})})})]}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)(n.p,{children:"El DelegatingFilterProxy es una herramienta poderosa que permite a los desarrolladores de Spring aprovechar los filtros en el contenedor de servlets mientras utilizan la infraestructura rica de Spring para gestionar sus Beans. Al facilitar esta integraci\xf3n, simplifica la creaci\xf3n de aplicaciones seguras y robustas."})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(6540);const s={},o=i.createContext(s);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);