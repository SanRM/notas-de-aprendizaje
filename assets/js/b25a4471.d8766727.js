"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[2965],{291:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(4848),o=a(8453);const i={title:"SonarQube"},s=void 0,c={id:"Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps/SonarQube",title:"SonarQube",description:"SonarQube es una plataforma de c\xf3digo abierto para la inspecci\xf3n continua de la calidad del c\xf3digo fuente que permite realizar an\xe1lisis autom\xe1ticos de c\xf3digo para detectar errores, c\xf3digo duplicado y vulnerabilidades de seguridad en m\xe1s de 20 lenguajes de programaci\xf3n.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps/SonarQube.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps",slug:"/Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps/SonarQube",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps/SonarQube",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Calidad de software - DevOps/SonarQube.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1722011095e3,frontMatter:{title:"SonarQube"},sidebar:"tutorialSidebar",previous:{title:"Pruebas unitarias",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias"},next:{title:"Test unitarios",permalink:"/notas-de-aprendizaje/docs/category/test-unitarios"}},d={},l=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Instalaci\xf3n de Docker",id:"instalaci\xf3n-de-docker",level:3},{value:"Instalaci\xf3n de SonarQube con Docker",id:"instalaci\xf3n-de-sonarqube-con-docker",level:3},{value:"Instalaci\xf3n en Windows",id:"instalaci\xf3n-en-windows",level:3},{value:"Importaci\xf3n de proyectos",id:"importaci\xf3n-de-proyectos",level:2},{value:"An\xe1lisis directo",id:"an\xe1lisis-directo",level:3},{value:"1. Generar token de acceso.",id:"1-generar-token-de-acceso",level:4},{value:"2. Creaci\xf3n del archivo de configuraci\xf3n",id:"2-creaci\xf3n-del-archivo-de-configuraci\xf3n",level:4},{value:"An\xe1lisis con Maven",id:"an\xe1lisis-con-maven",level:3},{value:"1. A\xf1adir el plugin de SonarQube.",id:"1-a\xf1adir-el-plugin-de-sonarqube",level:4},{value:"2. Generar token de acceso.",id:"2-generar-token-de-acceso",level:4},{value:"3. Configurar la dependencia.",id:"3-configurar-la-dependencia",level:4},{value:"Ejecuci\xf3n del an\xe1lisis",id:"ejecuci\xf3n-del-an\xe1lisis",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Card:a,TabItem:i,Tabs:s}=n;return a||p("Card",!0),i||p("TabItem",!0),s||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.sonarqube.org/",children:(0,r.jsx)(n.strong,{children:"SonarQube"})})," es una plataforma de c\xf3digo abierto para la inspecci\xf3n continua de la calidad del c\xf3digo fuente que permite realizar an\xe1lisis autom\xe1ticos de c\xf3digo para detectar errores, c\xf3digo duplicado y vulnerabilidades de seguridad en m\xe1s de 20 lenguajes de programaci\xf3n."]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h2,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"An\xe1lisis de c\xf3digo est\xe1tico:"})," Realiza an\xe1lisis est\xe1tico del c\xf3digo fuente para detectar errores, c\xf3digo duplicado y vulnerabilidades de seguridad."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Integraci\xf3n continua:"})," Se integra con herramientas de integraci\xf3n continua como Jenkins, Travis CI y Azure DevOps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Soporte para m\xfaltiples lenguajes:"})," Soporta m\xe1s de 20 lenguajes de programaci\xf3n, incluyendo Java, JavaScript, Python, C#, C++ y Ruby."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Detecci\xf3n de vulnerabilidades:"})," Detecta vulnerabilidades de seguridad en el c\xf3digo fuente."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Generaci\xf3n de informes:"})," Genera informes detallados sobre la calidad del c\xf3digo fuente."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),(0,r.jsxs)(n.p,{children:["Para instalar SonarQube, es necesario descargar el paquete de instalaci\xf3n correspondiente a la plataforma en la que se desea instalar (Windows, Linux o macOS) desde la ",(0,r.jsx)(n.a,{href:"https://www.sonarqube.org/downloads/",children:"p\xe1gina de descargas"}),"."]}),(0,r.jsx)(n.p,{children:"Una vez descargado el paquete de instalaci\xf3n, se debe seguir el proceso de instalaci\xf3n correspondiente a la plataforma en la que se desea instalar."}),(0,r.jsxs)(s,{children:[(0,r.jsxs)(i,{value:"Docker",label:"Docker",children:[(0,r.jsx)(n.h3,{id:"instalaci\xf3n-de-docker",children:"Instalaci\xf3n de Docker"}),(0,r.jsxs)(n.p,{children:["Si no se tiene instalado Docker, se puede instalar siguiendo las instrucciones de la ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"documentaci\xf3n oficial"}),"."]}),(0,r.jsx)(n.h3,{id:"instalaci\xf3n-de-sonarqube-con-docker",children:"Instalaci\xf3n de SonarQube con Docker"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Descargar la imagen de SonarQube desde Docker Hub:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"docker pull sonarqube\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ejecutar SonarQube en un contenedor Docker:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"docker run -d --name sonarqube -p 9000:9000 sonarqube\n"})}),"\n",(0,r.jsx)(n.p,{children:"Explicaci\xf3n de los par\xe1metros utilizados:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docker run"}),": Comando para ejecutar un contenedor Docker."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-d"}),": Bandera para ejecutar el contenedor en segundo plano."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--name sonarqube"}),": Nombre del contenedor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-p 9000:9000"}),": Mapeo del puerto 9000 del contenedor al puerto 9000 del host."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sonarqube"}),": Nombre de la imagen de SonarQube previamente descargada."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Acceder a la interfaz web de SonarQube en ",(0,r.jsx)(n.code,{children:"http://localhost:9000"})," y configurar el servidor."]}),"\n"]}),"\n"]})]}),(0,r.jsxs)(i,{value:"Windows",label:"Windows",children:[(0,r.jsx)(n.h3,{id:"instalaci\xf3n-en-windows",children:"Instalaci\xf3n en Windows"}),(0,r.jsx)(n.p,{children:"Para instalar SonarQube en Windows, se debe seguir los siguientes pasos:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Descomprimir el paquete de instalaci\xf3n en una carpeta de destino."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configurar las variables de entorno ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," y ",(0,r.jsx)(n.code,{children:"PATH"})," para que apunten a la instalaci\xf3n de Java en el sistema."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Editar el archivo ",(0,r.jsx)(n.code,{children:"conf/sonar.properties"})," para configurar la base de datos y el puerto en el que se ejecutar\xe1 SonarQube."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ejecutar el script ",(0,r.jsx)(n.code,{children:"bin/windows-x86-64/StartSonar.bat"})," para iniciar SonarQube."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Acceder a la interfaz web de SonarQube en ",(0,r.jsx)(n.code,{children:"http://localhost:9000"})," y configurar el servidor."]}),"\n"]}),"\n"]})]})]})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h2,{id:"importaci\xf3n-de-proyectos",children:"Importaci\xf3n de proyectos"}),(0,r.jsx)(n.p,{children:"Hay dos m\xe9todos principales para integrar SonarQube con un proyecto y cada uno tiene su propio flujo de trabajo:"}),(0,r.jsxs)(s,{children:[(0,r.jsxs)(i,{value:"Directo",label:"Directo",children:[(0,r.jsx)(n.h3,{id:"an\xe1lisis-directo",children:"An\xe1lisis directo"}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h4,{id:"1-generar-token-de-acceso",children:"1. Generar token de acceso."}),(0,r.jsxs)(n.p,{children:["Se debe generar un token de acceso en SonarQube para el proyecto y configurarlo en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'En el men\xfa de administraci\xf3n de SonarQube, el icono de perfil y seleccionar "My Account", "Security" y luego configurar el token de acceso en "Generate Tokens".'}),"\n"]})]}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h4,{id:"2-creaci\xf3n-del-archivo-de-configuraci\xf3n",children:"2. Creaci\xf3n del archivo de configuraci\xf3n"}),(0,r.jsxs)(n.p,{children:["Crear un archivo de configuraci\xf3n de SonarQube en la ra\xedz del proyecto con el nombre ",(0,r.jsx)(n.code,{children:"sonar-project.properties"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='sonar-project.properties'",children:"// Nombre del proyecto\r\nsonar.projectName=SpringApp\r\nsonar.projectVersion=1.0\r\n\r\n// Directorios de c\xf3digo fuente y pruebas\r\nsonar.sources=src/main/java\r\nsonar.tests=src/test/java\r\n\r\n// URL del servidor de SonarQube\r\nsonar.host.url=http://localhost:9000\r\n\r\n// (Opcional) el token de autenticaci\xf3n\r\n\r\nsonar.login=(Token generado en SonarQube) \r\n\r\n//Configuraci\xf3n de cobertura de pruebas (si se est\xe1 usando herramientas de cobertura)\r\n\r\n// sonar.java.coveragePlugin=jacoco\r\n// sonar.jacoco.reportPaths=target/jacoco.exec\n"})}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Es importante no subir el token de autenticaci\xf3n a un repositorio p\xfablico, para evitar esto se puede configurar el token como una variable de entorno o pasar directamente el token en el de ejecuci\xf3n del an\xe1lisis."})})]})]}),(0,r.jsxs)(i,{value:"Maven",label:"Maven",children:[(0,r.jsx)(n.h3,{id:"an\xe1lisis-con-maven",children:"An\xe1lisis con Maven"}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h4,{id:"1-a\xf1adir-el-plugin-de-sonarqube",children:"1. A\xf1adir el plugin de SonarQube."}),(0,r.jsxs)(n.p,{children:["Se debe a\xf1adir el siguiente plugin en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"})," del proyecto:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-code",metastring:"title='pom.xml'",children:"<plugin>\r\n    <groupId>org.sonarsource.scanner.maven</groupId>\r\n    <artifactId>sonar-maven-plugin</artifactId>\r\n    <version>4.0.0.4121</version> // Versi\xf3n del plugin\r\n</plugin>\n"})}),(0,r.jsxs)(n.p,{children:["Se puede revisar la versi\xf3n m\xe1s reciente del plugin en el ",(0,r.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.sonarsource.scanner.maven/sonar-maven-plugin",children:"repositorio de Maven"}),"."]})]}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h4,{id:"2-generar-token-de-acceso",children:"2. Generar token de acceso."}),(0,r.jsxs)(n.p,{children:["Se debe generar un token de acceso en SonarQube para el proyecto y configurarlo en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'En el men\xfa de administraci\xf3n de SonarQube, el icono de perfil y seleccionar "My Account", "Security" y luego configurar el token de acceso en "Generate Tokens".'}),"\n"]})]}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h4,{id:"3-configurar-la-dependencia",children:"3. Configurar la dependencia."}),(0,r.jsxs)(n.p,{children:["Se debe configurar el plugin de SonarQube en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"})," del proyecto:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-code",children:"<properties>\r\n\r\n    ... \x3c!-- Otras propiedades --\x3e\r\n\r\n    <sonar.projectKey>SpringApp</sonar.projectKey> \x3c!-- Llave del proyecto, debe ser \xfanica --\x3e\r\n    <sonar.projectName>SpringApp</sonar.projectName> \x3c!-- Nombre del proyecto, puede ser el mismo que el projectKey o diferente --\x3e\r\n    <sonar.host.url>http://localhost:9000</sonar.host.url> \x3c!-- URL del servidor de SonarQube --\x3e\r\n    <sonar.coverage.jacoco.xmlReportPaths>target/site/jacoco/jacoco.xml</sonar.coverage.jacoco.xmlReportPaths> \x3c!-- Ruta del archivo jacoco.xml --\x3e\r\n    <sonar.coverage.exclusions>src/**/entity/*, src/**/SpringAppApplication.java</sonar.coverage.exclusions> \x3c!-- Exclusiones de cobertura de c\xf3digo --\x3e \r\n    \r\n    <sonar.login>(Token generado en el paso anterior)</sonar.login> \x3c!-- Token de acceso generado en SonarQube --\x3e\r\n\r\n</properties>\n"})}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Es importante no subir el token de autenticaci\xf3n a un repositorio p\xfablico, para evitar esto se puede configurar el token como una variable de entorno o pasar directamente el token en el de ejecuci\xf3n del an\xe1lisis."})})]})]})]}),(0,r.jsxs)(a,{children:[(0,r.jsx)(n.h3,{id:"ejecuci\xf3n-del-an\xe1lisis",children:"Ejecuci\xf3n del an\xe1lisis"}),(0,r.jsx)(n.p,{children:"Ejecutar el an\xe1lisis de SonarQube en el proyecto:"}),(0,r.jsxs)(s,{children:[(0,r.jsxs)(i,{value:"Pasando el token de acceso como argumento",label:"Pasando el token de acceso como argumento",children:[(0,r.jsxs)(n.p,{children:["Si el token de acceso no se ha configurado en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"}),", se puede ejecutar el an\xe1lisis pasando el token como argumento:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"mvn sonar:sonar -D sonar.login=(Token generado en SonarQube)\n"})})]}),(0,r.jsxs)(i,{value:"Sin pasar el token de acceso como argumento",label:"Sin pasar el token de acceso como argumento",children:[(0,r.jsxs)(n.p,{children:["Si el token de acceso se ha configurado en el archivo ",(0,r.jsx)(n.code,{children:"pom.xml"}),", se puede ejecutar el an\xe1lisis sin pasar el token como argumento:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"mvn sonar:sonar\n"})})]})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>c});var r=a(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);