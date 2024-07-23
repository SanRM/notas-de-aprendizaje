"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[179],{9289:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(4848),o=r(8453);const i={title:"Jacoco"},c=void 0,s={id:"Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura/Jacoco",title:"Jacoco",description:"Cobertura de las pruebas",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura/Jacoco.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura",slug:"/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura/Jacoco",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura/Jacoco",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para cobertura/Jacoco.md",tags:[],version:"current",frontMatter:{title:"Jacoco"},sidebar:"tutorialSidebar",previous:{title:"Dependencias",permalink:"/notas-de-aprendizaje/docs/category/dependencias"},next:{title:"JUnit",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/JUnit"}},t={},d=[{value:"Cobertura de las pruebas",id:"cobertura-de-las-pruebas",level:2},{value:"Instalaci\xf3n de JaCoCo (Java Code Coverage)",id:"instalaci\xf3n-de-jacoco-java-code-coverage",level:3},{value:"Uso",id:"uso",level:2},{value:"Resultados",id:"resultados",level:2},{value:"Resaltado de cobertura de c\xf3digo",id:"resaltado-de-cobertura-de-c\xf3digo",level:2},{value:"Verde - <code>Completamente cubierto</code>",id:"verde---completamente-cubierto",level:3},{value:"Amarillo - <code>Parcialmente cubierto</code>",id:"amarillo---parcialmente-cubierto",level:3},{value:"Rojo - <code>No cubierto</code>",id:"rojo---no-cubierto",level:3},{value:"Ejemplo de informe de cobertura",id:"ejemplo-de-informe-de-cobertura",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Card:i,TabItem:c,Tabs:s}=a;return i||p("Card",!0),c||p("TabItem",!0),s||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"cobertura-de-las-pruebas",children:"Cobertura de las pruebas"}),"\n",(0,n.jsxs)(a.p,{children:["La ",(0,n.jsx)(a.strong,{children:"cobertura de las pruebas"})," es una m\xe9trica que mide el porcentaje de c\xf3digo que ha sido ejecutado por las pruebas unitarias, es importante tener una alta cobertura de las pruebas para garantizar que el c\xf3digo est\xe9 bien probado y que se detecten posibles errores."]}),"\n",(0,n.jsxs)(a.p,{children:["En JUnit, se puede utilizar la herramienta ",(0,n.jsx)(a.strong,{children:"JaCoCo"})," (Java Code Coverage) para medir la cobertura de las pruebas."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)(a.h3,{id:"instalaci\xf3n-de-jacoco-java-code-coverage",children:"Instalaci\xf3n de JaCoCo (Java Code Coverage)"}),(0,n.jsx)(a.p,{children:"A continuaci\xf3n se presenta el c\xf3digo completo para agregar y configurar el plugin JaCoCo en el archivo pom.xml de Maven, en la siguiente pesta\xf1a, se proporciona un ejemplo simplificado que incluye solo la dependencia de JaCoCo con la configuraci\xf3n predeterminada."}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{value:"Importaci\xf3n extensa",label:"Importaci\xf3n extensa",children:(0,n.jsxs)(i,{children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",metastring:"title='Plugin JaCoCo en el archivo pom.xml para Maven'",children:"<plugin>\r\n    <groupId>org.jacoco</groupId> // Grupo al que pertenece el plugin JaCoCo\r\n    <artifactId>jacoco-maven-plugin</artifactId> // Identificador del plugin de JaCoCo\r\n    <version>0.8.8</version> // Versi\xf3n espec\xedfica del plugin JaCoCo\r\n    <executions>\r\n        <execution>\r\n            <goals>\r\n                <goal>prepare-agent</goal> // Prepara el agente JaCoCo para instrumentar el c\xf3digo y recopilar datos de cobertura \r\n            </goals>\r\n        </execution>\r\n        <execution>\r\n            <id>report</id> // Identificador \xfanico para esta ejecuci\xf3n, llamado 'report' \r\n            <phase>test</phase> // Fase del ciclo de vida de Maven, 'test', en la que se ejecuta esta acci\xf3n \r\n            <goals>\r\n                <goal>report</goal> // Genera un informe de cobertura despu\xe9s de ejecutar las pruebas \r\n            </goals>\r\n            <configuration>\r\n                <excludes> // Excluye ciertas clases o paquetes de la cobertura de c\xf3digo para evitar falsos positivos\r\n                    <exclude>**/Main.class</exclude> // Excluye la clase Main de la cobertura de c\xf3digo\r\n                    <exclude>**/entity</exclude> // Excluye el paquete entity de la cobertura de c\xf3digo\r\n                </excludes>\r\n            </configuration>\r\n        </execution>\r\n        <execution>\r\n            <id>jacoco-check</id> // Identificador \xfanico para esta ejecuci\xf3n, llamado 'jacoco-check' \r\n            <goals>\r\n                <goal>check</goal> // Verifica que los umbrales de cobertura de c\xf3digo se cumplen \r\n            </goals>\r\n            <configuration>\r\n                <rules>\r\n                    <rule>\r\n                        <element>PACKAGE</element> // Aplica la regla a nivel de paquete \r\n                        <limits> \r\n                            <limit>\r\n                                <counter>LINE</counter> // Verifica la cobertura de l\xedneas de c\xf3digo\r\n                                <value>COVEREDRATIO</value> // Verifica porcentaje de cobertura\r\n                                <minimum>0.85</minimum> // Define el porcentaje m\xednimo de cobertura requerido, en este caso 85%\r\n                            </limit>\r\n                        </limits>\r\n                    </rule>\r\n                </rules>\r\n            </configuration>\r\n        </execution>\r\n    </executions>\r\n</plugin>\n"})}),(0,n.jsxs)(a.admonition,{type:"tip",children:[(0,n.jsxs)(a.p,{children:["Cuando el porcentaje de cobertura de las pruebas sea menor al 85%, el comando ",(0,n.jsx)(a.a,{href:"#uso",children:(0,n.jsx)(a.code,{children:"mvn test fallar\xe1"})})," y mostrar\xe1 un mensaje de error."]}),(0,n.jsx)(a.p,{children:"Este mecanismo asegura que el c\xf3digo del proyecto mantenga una cobertura de pruebas adecuada antes de permitir que la construcci\xf3n se complete con \xe9xito, esta es una forma efectiva de forzar la calidad del c\xf3digo y garantizar que las \xe1reas cr\xedticas est\xe9n bien probadas"})]})]})}),(0,n.jsx)(c,{value:"Importaci\xf3n simple",label:"Importaci\xf3n simple",children:(0,n.jsx)(i,{children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",metastring:"title='Plugin JaCoCo en el archivo pom.xml para Maven'",children:"<plugin>\r\n    <groupId>org.jacoco</groupId>\r\n    <artifactId>jacoco-maven-plugin</artifactId>\r\n    <version>0.8.8</version>\r\n    <executions>\r\n        <execution>\r\n            <goals>\r\n                <goal>prepare-agent</goal>\r\n            </goals>\r\n        </execution>\r\n        <execution>\r\n            <id>report</id>\r\n            <phase>test</phase>\r\n            <goals>\r\n                <goal>report</goal>\r\n            </goals>\r\n        </execution>\r\n    </executions>\r\n</plugin>\n"})})})})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)(a.h2,{id:"uso",children:"Uso"}),(0,n.jsx)(a.p,{children:"Para generar un informe de cobertura de las pruebas con JaCoCo, se debe ejecutar el siguiente comando en la terminal:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"mvn clean test\n"})}),(0,n.jsx)(a.admonition,{type:"danger",children:(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["La palabra ",(0,n.jsx)(a.code,{children:"clean"})," es opcional y se utiliza para limpiar el directorio de destino antes de ejecutar las pruebas."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["El comando ",(0,n.jsx)(a.code,{children:"test"})," ejecuta las pruebas unitarias y genera el informe de cobertura, esta palabra depende de la configurada en el archivo ",(0,n.jsx)(a.code,{children:"pom.xml"})," en la etiqueta ",(0,n.jsx)(a.code,{children:"<phase>"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)(a.h2,{id:"resultados",children:"Resultados"}),(0,n.jsxs)(a.p,{children:["Al ejecutar el comando anterior, se generar\xe1 un informe de cobertura en el directorio ",(0,n.jsx)(a.code,{children:"target/site/jacoco/index.html"})," que se puede abrir en un navegador web para ver los resultados."]}),(0,n.jsx)(a.p,{children:"El informe mostrar\xe1 todas las clases del proyecto y el porcentaje de cobertura de las pruebas para cada una."}),(0,n.jsxs)(i,{children:[(0,n.jsx)(a.h2,{id:"resaltado-de-cobertura-de-c\xf3digo",children:"Resaltado de cobertura de c\xf3digo"}),(0,n.jsx)(a.p,{children:"El informe de JaCoCo resalta el c\xf3digo fuente con diferentes colores para indicar el nivel de cobertura de las pruebas:"}),(0,n.jsx)(i,{color:"green",children:(0,n.jsxs)(a.h3,{id:"verde---completamente-cubierto",children:["Verde - ",(0,n.jsx)(a.code,{children:"Completamente cubierto"})]})}),(0,n.jsx)(i,{color:"yellow",children:(0,n.jsxs)(a.h3,{id:"amarillo---parcialmente-cubierto",children:["Amarillo - ",(0,n.jsx)(a.code,{children:"Parcialmente cubierto"})]})}),(0,n.jsx)(i,{color:"red",children:(0,n.jsxs)(a.h3,{id:"rojo---no-cubierto",children:["Rojo - ",(0,n.jsx)(a.code,{children:"No cubierto"})]})})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)(a.h2,{id:"ejemplo-de-informe-de-cobertura",children:"Ejemplo de informe de cobertura"}),(0,n.jsx)(a.p,{children:"A continuaci\xf3n se muestra un ejemplo de un informe de cobertura generado por JaCoCo."}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Informe de cobertura de JaCoCo 1",src:r(7009).A+"",width:"1545",height:"420"})}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Informe de cobertura de JaCoCo 2",src:r(8698).A+"",width:"1527",height:"766"})})]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7009:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/informeDeCobertura1-2e2159c25365ec7be69ef986ab330b07.png"},8698:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/informeDeCobertura2-11416737f6e19bd02441fcd5a7088e8d.png"},8453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>s});var n=r(6540);const o={},i=n.createContext(o);function c(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);