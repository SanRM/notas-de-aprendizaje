"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[3685],{6442:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(4848),a=r(8453);const s={title:"SecurityFilterChain",sidebar_position:4},t=void 0,c={id:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/SecurityFilterChain",title:"SecurityFilterChain",description:"Definiendo las Reglas de Seguridad",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/SecurityFilterChain.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura",slug:"/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/SecurityFilterChain",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/SecurityFilterChain",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/SecurityFilterChain.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,sidebarPosition:4,frontMatter:{title:"SecurityFilterChain",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FilterChainProxy",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/FilterChainProxy"},next:{title:"Filtros de seguridad",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros de seguridad"}},d={},l=[{value:"Definiendo las Reglas de Seguridad",id:"definiendo-las-reglas-de-seguridad",level:3},{value:"\xbfC\xf3mo Encaja en Spring Security?",id:"c\xf3mo-encaja-en-spring-security",level:3},{value:"Ventajas de Usar FilterChainProxy",id:"ventajas-de-usar-filterchainproxy",level:3},{value:"C\xf3mo Funcionan M\xfaltiples SecurityFilterChain",id:"c\xf3mo-funcionan-m\xfaltiples-securityfilterchain",level:3},{value:"Ejemplo con M\xfaltiples SecurityFilterChain",id:"ejemplo-con-m\xfaltiples-securityfilterchain",level:4},{value:"Diferentes Filtros en Cada SecurityFilterChain",id:"diferentes-filtros-en-cada-securityfilterchain",level:4}];function o(e){const i={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Card:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"definiendo-las-reglas-de-seguridad",children:"Definiendo las Reglas de Seguridad"}),"\n",(0,n.jsxs)(i.p,{children:["La ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," es una estructura que se utiliza en Spring Security para determinar qu\xe9 filtros de seguridad deben ser invocados para cada solicitud HTTP que llega a tu aplicaci\xf3n. Es como un filtro especial que contiene otros filtros, los cuales definen las reglas de seguridad que se aplican a ciertas rutas o URLs espec\xedficas."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(r,{color:"dark",header:"Figura 3. FilterChainProxy",textAlign:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"https://docs.spring.io/spring-security/reference/_images/servlet/architecture/securityfilterchain.png",alt:"Spring seurity image"})})}),(0,n.jsx)(i.h3,{id:"c\xf3mo-encaja-en-spring-security",children:"\xbfC\xf3mo Encaja en Spring Security?"}),(0,n.jsx)(i.p,{children:"Para entender c\xf3mo funciona, necesitamos saber qu\xe9 papel juega en la arquitectura general de Spring Security:"}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"FilterChainProxy"}),": Este es un componente central en Spring Security que coordina el uso de los filtros de seguridad. Cuando una solicitud llega a la aplicaci\xf3n, ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," decide qu\xe9 conjunto de filtros de seguridad (definidos en un ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"}),") se deben ejecutar."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"SecurityFilterChain"}),": Es una colecci\xf3n de filtros de seguridad que Spring Security utiliza para proteger las solicitudes HTTP. Estos filtros son Beans de Spring (componentes gestionados por el contenedor de Spring), pero en lugar de ser registrados directamente en el contenedor de servlets o en ",(0,n.jsx)(i.code,{children:"DelegatingFilterProxy"}),", se registran en ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(i.h3,{id:"ventajas-de-usar-filterchainproxy",children:"Ventajas de Usar FilterChainProxy"}),(0,n.jsxs)(i.p,{children:["El hecho de que los filtros de seguridad se registren en ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," en lugar de directamente en el contenedor de servlets o usando ",(0,n.jsx)(i.code,{children:"DelegatingFilterProxy"}),", proporciona varias ventajas clave:"]}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Punto Central de Inicio"}),": ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," es el punto de partida de todo el soporte de seguridad basado en servlets en Spring Security. Esto significa que cualquier problema relacionado con la seguridad en las solicitudes puede comenzar a investigarse aqu\xed. Si necesitas depurar problemas, es un excelente lugar para agregar puntos de inspecci\xf3n (debug points)."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Tareas No Opcionales"}),": ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," maneja ciertas tareas esenciales, como limpiar el ",(0,n.jsx)(i.strong,{children:"SecurityContext"})," (un objeto que almacena informaci\xf3n sobre el usuario autenticado) para evitar fugas de memoria. Tambi\xe9n aplica el ",(0,n.jsx)(i.strong,{children:"HttpFirewall"})," de Spring Security, que protege las aplicaciones de ciertos tipos de ataques como ataques de fuerza bruta o de inyecci\xf3n."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Flexibilidad en las Reglas de Seguridad"}),": Un gran beneficio es que no se basa solo en la URL para decidir qu\xe9 filtros de seguridad aplicar. Mientras que un contenedor de servlets t\xedpico invoca filtros bas\xe1ndose \xfanicamente en la URL de la solicitud, ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," puede invocar una ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," usando cualquier informaci\xf3n contenida en la solicitud HTTP, gracias a una interfaz llamada ",(0,n.jsx)(i.code,{children:"RequestMatcher"}),". Esto te da mucha m\xe1s flexibilidad para determinar qu\xe9 reglas de seguridad aplicar en diferentes situaciones."]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(i.h3,{id:"c\xf3mo-funcionan-m\xfaltiples-securityfilterchain",children:"C\xf3mo Funcionan M\xfaltiples SecurityFilterChain"}),(0,n.jsxs)(i.p,{children:["Puedes tener m\xfaltiples instancias de ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," dentro de una aplicaci\xf3n. Cada instancia est\xe1 configurada para manejar diferentes patrones de URL o diferentes tipos de solicitudes. El ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," es el encargado de decidir cu\xe1l de estas cadenas de filtros debe usarse para una solicitud espec\xedfica."]}),(0,n.jsx)(r,{color:"dark",header:"Figura 3. FilterChainProxy",textAlign:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"https://docs.spring.io/spring-security/reference/_images/servlet/architecture/multi-securityfilterchain.png",alt:"Spring seurity image"})})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(i.h4,{id:"ejemplo-con-m\xfaltiples-securityfilterchain",children:"Ejemplo con M\xfaltiples SecurityFilterChain"}),(0,n.jsx)(i.p,{children:"Imagina que tienes dos cadenas de seguridad:"}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"SecurityFilterChain0"}),": Esta cadena de seguridad est\xe1 configurada para manejar las rutas que comienzan con ",(0,n.jsx)(i.code,{children:"/api/**"})," (por ejemplo, ",(0,n.jsx)(i.code,{children:"/api/messages/"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"SecurityFilterChainn"}),": Esta otra cadena de seguridad se encarga de manejar cualquier otra ruta que no coincide con ",(0,n.jsx)(i.code,{children:"/api/**"}),"."]}),"\n"]}),"\n"]}),(0,n.jsxs)(i.p,{children:["Cuando llega una solicitud para la URL ",(0,n.jsx)(i.code,{children:"/api/messages/"}),", el ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," revisa las reglas de cada ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," en el orden en que fueron definidas. En este caso, la solicitud coincide con el patr\xf3n de ",(0,n.jsx)(i.code,{children:"/api/**"})," en la ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain0"}),", por lo que esa cadena de seguridad es invocada. Incluso si la solicitud tambi\xe9n coincidir\xeda con otras cadenas de seguridad (como la ",(0,n.jsx)(i.strong,{children:"SecurityFilterChainn"}),"), solo se invoca la primera coincidencia."]}),(0,n.jsxs)(i.p,{children:["Si, por otro lado, llega una solicitud para la URL ",(0,n.jsx)(i.code,{children:"/messages/"})," (sin ",(0,n.jsx)(i.code,{children:"/api/"}),"), la primera cadena de seguridad no coincide, por lo que el ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"})," contin\xfaa revisando las dem\xe1s cadenas de seguridad hasta que encuentra una coincidencia, como en ",(0,n.jsx)(i.strong,{children:"SecurityFilterChainn"}),"."]}),(0,n.jsx)(i.h4,{id:"diferentes-filtros-en-cada-securityfilterchain",children:"Diferentes Filtros en Cada SecurityFilterChain"}),(0,n.jsxs)(i.p,{children:["Es importante notar que cada ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," puede tener un conjunto \xfanico de filtros de seguridad. Por ejemplo:"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"SecurityFilterChain0"})," puede tener tres filtros configurados (por ejemplo, uno para autenticaci\xf3n, uno para autorizaci\xf3n y otro para la protecci\xf3n CSRF)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"SecurityFilterChainn"})," podr\xeda tener cuatro filtros, con tal vez alg\xfan filtro adicional para manejar la autenticaci\xf3n de tokens, por ejemplo."]}),"\n"]}),(0,n.jsx)(i.p,{children:"Adem\xe1s, puede haber cadenas de seguridad que no tengan ning\xfan filtro de seguridad si tu aplicaci\xf3n necesita ignorar completamente ciertas solicitudes."})]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(i.p,{children:["El ",(0,n.jsx)(i.strong,{children:"SecurityFilterChain"})," en Spring Security es una herramienta muy flexible y potente que te permite aplicar diferentes reglas de seguridad a diferentes partes de tu aplicaci\xf3n, con la ayuda de ",(0,n.jsx)(i.strong,{children:"FilterChainProxy"}),". Al permitir que los filtros de seguridad sean seleccionados no solo por URL, sino por cualquier informaci\xf3n de la solicitud HTTP, Spring Security ofrece una manera avanzada de proteger aplicaciones web."]})})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>c});var n=r(6540);const a={},s=n.createContext(a);function t(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);