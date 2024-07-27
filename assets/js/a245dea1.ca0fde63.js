"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[3136],{2703:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var a=i(4848),o=i(8453);const r={title:"Introducci\xf3n a Spring Boot"},s=void 0,c={id:"Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot",title:"Introducci\xf3n a Spring Boot",description:"Spring Boot facilita la creaci\xf3n de aplicaciones Java gestionando autom\xe1ticamente la configuraci\xf3n y creaci\xf3n de componentes, permitiendo a los desarrolladores centrarse en la l\xf3gica de negocio.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Spring Boot",slug:"/Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1722011095e3,frontMatter:{title:"Introducci\xf3n a Spring Boot"},sidebar:"tutorialSidebar",previous:{title:"Mockito",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito"},next:{title:"JPA",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring Boot/JPA/"}},d={},t=[{value:"Conceptos Clave",id:"conceptos-clave",level:2},{value:"Inyecci\xf3n de Dependencias (Dependency Injection):",id:"inyecci\xf3n-de-dependencias-dependency-injection",level:3},{value:"Contenedor de <strong>IoC</strong> (Inversi\xf3n de Control):",id:"contenedor-de-ioc-inversi\xf3n-de-control",level:3},{value:"El \u201cSuper Main\u201d de Spring Boot",id:"el-super-main-de-spring-boot",level:2},{value:"Proceso Interno de Spring Boot",id:"proceso-interno-de-spring-boot",level:2},{value:"1. Inicio de la Aplicaci\xf3n:",id:"1-inicio-de-la-aplicaci\xf3n",level:3},{value:"2. Escaneo de Componentes:",id:"2-escaneo-de-componentes",level:3},{value:"3. Creaci\xf3n y Registro de Beans:",id:"3-creaci\xf3n-y-registro-de-beans",level:3},{value:"4. Inyecci\xf3n de Dependencias:",id:"4-inyecci\xf3n-de-dependencias",level:3},{value:"5. Gesti\xf3n del Ciclo de Vida:",id:"5-gesti\xf3n-del-ciclo-de-vida",level:3},{value:"Ejemplo pr\xe1ctico",id:"ejemplo-pr\xe1ctico",level:2},{value:"Flujo Interno Detallado",id:"flujo-interno-detallado",level:2},{value:"1. Inicio:",id:"1-inicio",level:3},{value:"2. Escaneo de Componentes:",id:"2-escaneo-de-componentes-1",level:3},{value:"3. Creaci\xf3n y Registro de Beans:",id:"3-creaci\xf3n-y-registro-de-beans-1",level:3},{value:"4. Inyecci\xf3n de Dependencias:",id:"4-inyecci\xf3n-de-dependencias-1",level:3},{value:"5. Gesti\xf3n del Ciclo de Vida:",id:"5-gesti\xf3n-del-ciclo-de-vida-1",level:3},{value:"Beneficios de Usar Spring Boot",id:"beneficios-de-usar-spring-boot",level:2},{value:"Reducci\xf3n de C\xf3digo Boilerplate:",id:"reducci\xf3n-de-c\xf3digo-boilerplate",level:3},{value:"Desacoplamiento:",id:"desacoplamiento",level:3},{value:"Inversi\xf3n de Control (IoC):",id:"inversi\xf3n-de-control-ioc",level:3},{value:"Configuraci\xf3n Centralizada:",id:"configuraci\xf3n-centralizada",level:3},{value:"Conclusiones",id:"conclusiones",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Card:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Spring Boot facilita la creaci\xf3n de aplicaciones Java gestionando autom\xe1ticamente la configuraci\xf3n y creaci\xf3n de componentes, permitiendo a los desarrolladores centrarse en la l\xf3gica de negocio."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h2,{id:"conceptos-clave",children:"Conceptos Clave"}),(0,a.jsx)(n.h3,{id:"inyecci\xf3n-de-dependencias-dependency-injection",children:"Inyecci\xf3n de Dependencias (Dependency Injection):"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Permite que una clase dependa de otra sin tener que crear instancias manualmente."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Spring Boot se encarga de crear y gestionar estas instancias."}),"\n"]}),"\n"]}),(0,a.jsxs)(n.h3,{id:"contenedor-de-ioc-inversi\xf3n-de-control",children:["Contenedor de ",(0,a.jsx)(n.strong,{children:"IoC"})," (Inversi\xf3n de Control):"]}),(0,a.jsx)(n.p,{children:"El concepto de Inversi\xf3n de Control (IoC, por sus siglas en ingl\xe9s) es fundamental en frameworks como Spring."}),(0,a.jsx)(n.p,{children:"IoC significa que en lugar de que la aplicaci\xf3n controle el flujo de ejecuci\xf3n y la creaci\xf3n de objetos, es el contenedor IoC quien se encarga de esta tarea, este contenedor es parte central del framework Spring y se encarga de la creaci\xf3n, configuraci\xf3n y gesti\xf3n del ciclo de vida de los objetos, tambi\xe9n llamados beans."})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h2,{id:"el-super-main-de-spring-boot",children:"El \u201cSuper Main\u201d de Spring Boot"}),(0,a.jsx)(n.p,{children:"En una aplicaci\xf3n tradicional, se tendr\xeda que crear y conectar manualmente todas las instancias de las clases en un m\xe9todo main. Spring Boot elimina esta necesidad, actuando como un \u201csuper main\u201d:"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Configuraci\xf3n Autom\xe1tica:"})," Se declaran las clases y sus dependencias."]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Spring Boot se encarga de crear todas las instancias necesarias y de ensamblarlas."}),"\n"]})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h2,{id:"proceso-interno-de-spring-boot",children:"Proceso Interno de Spring Boot"}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h3,{id:"1-inicio-de-la-aplicaci\xf3n",children:"1. Inicio de la Aplicaci\xf3n:"}),(0,a.jsx)(n.p,{children:"La clase principal, anotada con @SpringBootApplication, contiene el m\xe9todo main que inicia la aplicaci\xf3n:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\r\n@SpringBootApplication\r\npublic class DemoPersistenciaApplication {\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(DemoPersistenciaApplication.class, args);\r\n    }\r\n}\r\n\n"})})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h3,{id:"2-escaneo-de-componentes",children:"2. Escaneo de Componentes:"}),(0,a.jsx)(n.p,{children:"Spring Boot escanea el paquete base y sus subpaquetes en busca de clases anotadas con @Component, @Service, @Repository, @Controller, etc."})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h3,{id:"3-creaci\xf3n-y-registro-de-beans",children:"3. Creaci\xf3n y Registro de Beans:"}),(0,a.jsx)(n.p,{children:"Spring Boot crea instancias de estas clases (llamadas beans) y las registra en su contenedor."})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h3,{id:"4-inyecci\xf3n-de-dependencias",children:"4. Inyecci\xf3n de Dependencias:"}),(0,a.jsx)(n.p,{children:"Spring Boot examina las clases para encontrar campos, constructores y m\xe9todos anotados con @Autowired y resuelve las dependencias inyectando las instancias necesarias."})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h3,{id:"5-gesti\xf3n-del-ciclo-de-vida",children:"5. Gesti\xf3n del Ciclo de Vida:"}),(0,a.jsx)(n.p,{children:"Spring Boot gestiona todo el ciclo de vida de los beans, desde su creaci\xf3n hasta su destrucci\xf3n."})]})]}),"\n",(0,a.jsxs)(i,{color:"darkBlue",children:[(0,a.jsx)(n.h2,{id:"ejemplo-pr\xe1ctico",children:"Ejemplo pr\xe1ctico"}),(0,a.jsx)(n.p,{children:"Imaginemos que se tiene un proyecto de gesti\xf3n de empleados con las siguientes clases:"}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:"title='EmpleadoRepositorio'",children:"package com.demo.persistencia.demo_persistencia.repositorio;\r\n\r\nimport org.springframework.data.repository.CrudRepository;\r\nimport com.demo.persistencia.demo_persistencia.entidades.Empleados;\r\n\r\npublic interface EmpleadoRepositorio extends CrudRepository<Empleados, Long> {\r\n}\r\n\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:"title='EmpleadoServicio'",children:"package com.demo.persistencia.demo_persistencia.services;\r\n\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.stereotype.Service;\r\nimport java.util.List;\r\nimport com.demo.persistencia.demo_persistencia.entidades.Empleados;\r\nimport com.demo.persistencia.demo_persistencia.repositorio.EmpleadoRepositorio;\r\n\r\n@Service\r\npublic class EmpleadoServicio {\r\n\r\n    @Autowired\r\n    private EmpleadoRepositorio empleadoRepositorio;\r\n\r\n    public List<Empleados> consultarEmpleados() {\r\n        return (List<Empleados>) empleadoRepositorio.findAll();\r\n    }\r\n\r\n    public Empleados registrarEmpleados(Empleados empleado) {\r\n        return empleadoRepositorio.save(empleado);\r\n    }\r\n}\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:"title='EmpleadoController'",children:'package com.demo.persistencia.demo_persistencia.controllers;\r\n\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.web.bind.annotation.GetMapping;\r\nimport org.springframework.web.bind.annotation.PostMapping;\r\nimport org.springframework.web.bind.annotation.RequestBody;\r\nimport org.springframework.web.bind.annotation.RequestMapping;\r\nimport org.springframework.web.bind.annotation.RestController;\r\nimport java.util.List;\r\nimport com.demo.persistencia.demo_persistencia.dto.EmpleadoDto;\r\nimport com.demo.persistencia.demo_persistencia.entidades.Empleados;\r\nimport com.demo.persistencia.demo_persistencia.services.EmpleadoServicio;\r\n\r\n@RestController\r\n@RequestMapping("/api")\r\npublic class EmpleadoController {\r\n\r\n    @Autowired\r\n    private EmpleadoServicio servicioEmpleado;\r\n\r\n    @GetMapping("/listarEmpleados")\r\n    public List<Empleados> consultarEmpleados() {\r\n        return servicioEmpleado.consultarEmpleados();\r\n    }\r\n\r\n    @PostMapping("/registrarEmpleado")\r\n    public Empleados registrarEmpleado(@RequestBody EmpleadoDto empleadoDto) {\r\n        Empleados empleado = new Empleados();\r\n        empleado.setNombre(empleadoDto.getNombre());\r\n        empleado.setDireccion(empleadoDto.getDireccion());\r\n        empleado.setEdad(empleadoDto.getEdad());\r\n        empleado.setPuesto(empleadoDto.getPuesto());\r\n        return servicioEmpleado.registrarEmpleados(empleado);\r\n    }\r\n}\n'})})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h2,{id:"flujo-interno-detallado",children:"Flujo Interno Detallado"}),(0,a.jsx)(n.h3,{id:"1-inicio",children:"1. Inicio:"}),(0,a.jsx)(n.p,{children:"La aplicaci\xf3n se inicia con SpringApplication.run(DemoPersistenciaApplication.class, args). Esto arranca el contenedor de Spring."}),(0,a.jsx)(n.h3,{id:"2-escaneo-de-componentes-1",children:"2. Escaneo de Componentes:"}),(0,a.jsx)(n.p,{children:"Spring escanea el paquete base com.demo.persistencia.demo_persistencia y sus subpaquetes en busca de clases anotadas."}),(0,a.jsx)(n.h3,{id:"3-creaci\xf3n-y-registro-de-beans-1",children:"3. Creaci\xf3n y Registro de Beans:"}),(0,a.jsx)(n.p,{children:"Spring encuentra las clases anotadas (EmpleadoServicio, EmpleadoController, etc.) y crea instancias de ellas, estas instancias se registran como beans en el contenedor de Spring."}),(0,a.jsx)(n.h3,{id:"4-inyecci\xf3n-de-dependencias-1",children:"4. Inyecci\xf3n de Dependencias:"}),(0,a.jsx)(n.p,{children:"Spring examina las clases para encontrar dependencias anotadas con @Autowired y resuelve estas dependencias inyectando las instancias necesarias."}),(0,a.jsx)(n.p,{children:"Por ejemplo, EmpleadoServicio necesita EmpleadoRepositorio y EmpleadoController necesita EmpleadoServicio. Spring se encarga de proporcionar estas instancias autom\xe1ticamente."}),(0,a.jsx)(n.h3,{id:"5-gesti\xf3n-del-ciclo-de-vida-1",children:"5. Gesti\xf3n del Ciclo de Vida:"}),(0,a.jsx)(n.p,{children:"Spring gestiona el ciclo de vida completo de los beans, asegur\xe1ndose de que sean creados, inicializados y destruidos correctamente."})]})]}),"\n",(0,a.jsxs)(i,{color:"cyan",children:[(0,a.jsx)(n.h2,{id:"beneficios-de-usar-spring-boot",children:"Beneficios de Usar Spring Boot"}),(0,a.jsx)(n.h3,{id:"reducci\xf3n-de-c\xf3digo-boilerplate",children:"Reducci\xf3n de C\xf3digo Boilerplate:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Elimina la necesidad de escribir c\xf3digo repetitivo para la creaci\xf3n de instancias y gesti\xf3n de dependencias."}),"\n"]}),(0,a.jsx)(n.h3,{id:"desacoplamiento",children:"Desacoplamiento:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las clases son m\xe1s modulares y f\xe1ciles de mantener, ya que no est\xe1n directamente acopladas entre s\xed."}),"\n"]}),(0,a.jsx)(n.h3,{id:"inversi\xf3n-de-control-ioc",children:"Inversi\xf3n de Control (IoC):"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"El contenedor de Spring toma el control de la creaci\xf3n de dependencias, lo que facilita la gesti\xf3n de aplicaciones complejas."}),"\n"]}),(0,a.jsx)(n.h3,{id:"configuraci\xf3n-centralizada",children:"Configuraci\xf3n Centralizada:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"La configuraci\xf3n est\xe1 centralizada, lo que facilita su modificaci\xf3n y mantenimiento."}),"\n"]})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)(n.h2,{id:"conclusiones",children:"Conclusiones"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Spring Boot simplifica la configuraci\xf3n y gesti\xf3n de aplicaciones Java al encargarse autom\xe1ticamente de la creaci\xf3n y ensamblaje de componentes."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Los desarrolladores pueden centrarse en la l\xf3gica de negocio, mientras Spring Boot se encarga de las complejidades de la infraestructura, esto se logra mediante la inyecci\xf3n de dependencias y un contenedor que act\xfaa como un \u201csuper main\u201d, iniciando y gestionando todos los componentes de la aplicaci\xf3n"}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var a=i(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);