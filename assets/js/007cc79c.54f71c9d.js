"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[8211],{1978:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=n(4848),a=n(8453);const t={title:"Filtros personalizados",sidebar_position:7},s=void 0,l={id:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros personalizados",title:"Filtros personalizados",description:"Normalmente, los filtros de seguridad que vienen por defecto en Spring Security son suficientes para proteger tu aplicaci\xf3n. Sin embargo, en algunas situaciones espec\xedficas, como la validaci\xf3n de accesos m\xe1s complejos, puede que necesites agregar un filtro personalizado.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros personalizados.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura",slug:"/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros personalizados",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros personalizados",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Filtros personalizados.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,sidebarPosition:7,frontMatter:{title:"Filtros personalizados",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Imprimiendo los filtros de seguridad",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/Imprimir los filtros de seguridad"},next:{title:"ExceptionTranslationFilter",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring/Spring Security/Arquitectura/ExceptionTranslationFilter"}},o={},c=[{value:"\xbfC\xf3mo crear un filtro personalizado?",id:"c\xf3mo-crear-un-filtro-personalizado",level:3},{value:"Explicaci\xf3n del c\xf3digo",id:"explicaci\xf3n-del-c\xf3digo",level:4},{value:"Alternativa con OncePerRequestFilter",id:"alternativa-con-onceperrequestfilter",level:3},{value:"Agregar el filtro a la cadena de seguridad",id:"agregar-el-filtro-a-la-cadena-de-seguridad",level:3},{value:"Explicaci\xf3n:",id:"explicaci\xf3n",level:4},{value:"Evitar que el filtro se registre dos veces",id:"evitar-que-el-filtro-se-registre-dos-veces",level:3},{value:"Explicaci\xf3n:",id:"explicaci\xf3n-1",level:4}];function d(e){const r={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Card:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Normalmente, los filtros de seguridad que vienen por defecto en Spring Security son suficientes para proteger tu aplicaci\xf3n. Sin embargo, en algunas situaciones espec\xedficas, como la validaci\xf3n de accesos m\xe1s complejos, puede que necesites agregar un filtro personalizado."}),"\n",(0,i.jsxs)(r.p,{children:["Por ejemplo, digamos que necesitas validar un ",(0,i.jsx)(r.strong,{children:"tenant ID"})," (una especie de identificador que permite diferenciar los espacios o clientes dentro de una aplicaci\xf3n multi-tenant) en las solicitudes. Este filtro personalizado verificar\xeda si el usuario tiene acceso a un tenant en particular. Para hacer esto, deber\xedas a\xf1adir el filtro despu\xe9s de los filtros de autenticaci\xf3n, ya que necesitas saber qui\xe9n es el usuario antes de verificar si tiene acceso."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(r.h3,{id:"c\xf3mo-crear-un-filtro-personalizado",children:"\xbfC\xf3mo crear un filtro personalizado?"}),(0,i.jsxs)(r.p,{children:["El primer paso es crear el filtro que ejecutar\xe1 esa validaci\xf3n espec\xedfica. Aqu\xed est\xe1 el c\xf3digo para un filtro llamado ",(0,i.jsx)(r.code,{children:"TenantFilter"}),":"]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'public class TenantFilter implements Filter {\r\n\r\n    @Override\r\n    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {\r\n        HttpServletRequest request = (HttpServletRequest) servletRequest;\r\n        HttpServletResponse response = (HttpServletResponse) servletResponse;\r\n\r\n        String tenantId = request.getHeader("X-Tenant-Id");  // 1. Obtener el tenant ID desde la cabecera de la solicitud\r\n        boolean hasAccess = isUserAllowed(tenantId);  // 2. Verificar si el usuario tiene acceso a ese tenant\r\n        if (hasAccess) {\r\n            filterChain.doFilter(request, response);  // 3. Si tiene acceso, continuar con el resto de los filtros\r\n            return;\r\n        }\r\n        throw new AccessDeniedException("Access denied");  // 4. Si no tiene acceso, lanzar una excepci\xf3n de "Acceso denegado"\r\n    }\r\n\r\n}\n'})}),(0,i.jsx)(r.h4,{id:"explicaci\xf3n-del-c\xf3digo",children:"Explicaci\xf3n del c\xf3digo"}),(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Obtener el tenant ID"}),": Se extrae el tenant ID desde la cabecera de la solicitud HTTP (",(0,i.jsx)(r.code,{children:'request.getHeader("X-Tenant-Id")'}),")."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Validar acceso"}),": Usamos una funci\xf3n ",(0,i.jsx)(r.code,{children:"isUserAllowed(tenantId)"})," (que tendr\xedas que implementar) para verificar si el usuario actual tiene permiso para acceder a ese tenant."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Continuar con la cadena de filtros"}),": Si el usuario tiene acceso, llamamos a ",(0,i.jsx)(r.code,{children:"filterChain.doFilter(request, response)"})," para continuar con el procesamiento normal, permitiendo que el resto de los filtros de seguridad se ejecuten."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Acceso denegado"}),": Si el usuario no tiene acceso, lanzamos una excepci\xf3n ",(0,i.jsx)(r.code,{children:"AccessDeniedException"})," que detiene el procesamiento y devuelve una respuesta de acceso denegado."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(r.h3,{id:"alternativa-con-onceperrequestfilter",children:"Alternativa con OncePerRequestFilter"}),(0,i.jsxs)(r.p,{children:["En lugar de implementar directamente ",(0,i.jsx)(r.code,{children:"Filter"}),", puedes extender de la clase ",(0,i.jsx)(r.code,{children:"OncePerRequestFilter"}),". Esta clase asegura que el filtro se ejecute solo una vez por solicitud, y ofrece el m\xe9todo ",(0,i.jsx)(r.code,{children:"doFilterInternal"}),", que simplifica un poco el manejo de ",(0,i.jsx)(r.code,{children:"HttpServletRequest"})," y ",(0,i.jsx)(r.code,{children:"HttpServletResponse"}),":"]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'public class TenantFilter extends OncePerRequestFilter {\r\n\r\n    @Override\r\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {\r\n        String tenantId = request.getHeader("X-Tenant-Id");\r\n        boolean hasAccess = isUserAllowed(tenantId);\r\n        if (hasAccess) {\r\n            filterChain.doFilter(request, response);\r\n            return;\r\n        }\r\n        throw new AccessDeniedException("Access denied");\r\n    }\r\n}\n'})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(r.h3,{id:"agregar-el-filtro-a-la-cadena-de-seguridad",children:"Agregar el filtro a la cadena de seguridad"}),(0,i.jsxs)(r.p,{children:["Una vez que has creado el filtro, el siguiente paso es agregarlo a la ",(0,i.jsx)(r.strong,{children:"cadena de filtros de seguridad"})," de Spring. Esto se hace en la configuraci\xf3n de seguridad utilizando ",(0,i.jsx)(r.code,{children:"HttpSecurity"}),"."]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"@Bean\r\nSecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n    http\r\n        // ...\r\n        .addFilterBefore(new TenantFilter(), AuthorizationFilter.class);  // Agregar el filtro antes del AuthorizationFilter\r\n    return http.build();\r\n}\n"})}),(0,i.jsx)(r.h4,{id:"explicaci\xf3n",children:"Explicaci\xf3n:"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"addFilterBefore"})}),": A\xf1ade el ",(0,i.jsx)(r.code,{children:"TenantFilter"})," justo antes del ",(0,i.jsx)(r.code,{children:"AuthorizationFilter"}),". Esto asegura que el ",(0,i.jsx)(r.code,{children:"TenantFilter"})," se ejecute despu\xe9s de que los filtros de autenticaci\xf3n ya hayan determinado qui\xe9n es el usuario."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Tambi\xe9n puedes usar:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"addFilterAfter"})}),": Para agregar el filtro despu\xe9s de un filtro espec\xedfico."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"addFilterAt"})}),": Para colocarlo en una posici\xf3n exacta dentro de la cadena de filtros."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(r.h3,{id:"evitar-que-el-filtro-se-registre-dos-veces",children:"Evitar que el filtro se registre dos veces"}),(0,i.jsxs)(r.p,{children:["Si declaras tu filtro como un Bean de Spring (por ejemplo, usando ",(0,i.jsx)(r.code,{children:"@Component"}),"), Spring Boot lo registrar\xe1 autom\xe1ticamente en el contenedor de servlets. Esto podr\xeda provocar que el filtro se invoque dos veces: una por el contenedor de servlets y otra por Spring Security, en un orden no controlado."]}),(0,i.jsxs)(r.p,{children:["Para evitar esto, puedes usar un ",(0,i.jsx)(r.code,{children:"FilterRegistrationBean"})," y desactivar su registro autom\xe1tico:"]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"@Bean\r\npublic FilterRegistrationBean<TenantFilter> tenantFilterRegistration(TenantFilter filter) {\r\n    FilterRegistrationBean<TenantFilter> registration = new FilterRegistrationBean<>(filter);\r\n    registration.setEnabled(false);  // Desactivar el registro autom\xe1tico\r\n    return registration;\r\n}\n"})}),(0,i.jsx)(r.h4,{id:"explicaci\xf3n-1",children:"Explicaci\xf3n:"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"FilterRegistrationBean"})}),": Este Bean se utiliza para personalizar c\xf3mo se registra el filtro en el contenedor."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"registration.setEnabled(false)"})}),": Con esta l\xednea, le decimos a Spring Boot que no registre autom\xe1ticamente el filtro con el contenedor de servlets, evitando as\xed la doble invocaci\xf3n."]}),"\n"]})]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var i=n(6540);const a={},t=i.createContext(a);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);