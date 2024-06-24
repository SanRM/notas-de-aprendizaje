"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[414],{2334:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(4848),i=s(8453);const o={title:"Tipos de llaves"},r="Tipos de Llaves en Bases de Datos Relacionales",l={id:"Bases de datos/Bases de datos relacionales/Tipos de llaves",title:"Tipos de llaves",description:"Definici\xf3n",source:"@site/docs/Bases de datos/Bases de datos relacionales/Tipos de llaves.md",sourceDirName:"Bases de datos/Bases de datos relacionales",slug:"/Bases de datos/Bases de datos relacionales/Tipos de llaves",permalink:"/notas-de-aprendizaje/docs/Bases de datos/Bases de datos relacionales/Tipos de llaves",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Bases de datos/Bases de datos relacionales/Tipos de llaves.md",tags:[],version:"current",frontMatter:{title:"Tipos de llaves"},sidebar:"tutorialSidebar",previous:{title:"Normalizaci\xf3n",permalink:"/notas-de-aprendizaje/docs/Bases de datos/Bases de datos relacionales/Normalizaci\xf3n"},next:{title:"Modelo Relacional",permalink:"/notas-de-aprendizaje/docs/Bases de datos/Bases de datos relacionales/modelo-relacional"}},d={},c=[{value:"Definici\xf3n",id:"definici\xf3n",level:2},{value:"Clave Primaria Simple (Primary Key)",id:"clave-primaria-simple-primary-key",level:3},{value:"Clave Primaria Compuesta (Composite Primary Key)",id:"clave-primaria-compuesta-composite-primary-key",level:3},{value:"Clave Externa (Foreign Key)",id:"clave-externa-foreign-key",level:3},{value:"\xbfCu\xe1ndo usar una llave primaria compuesta y cu\xe1ndo no?",id:"cu\xe1ndo-usar-una-llave-primaria-compuesta-y-cu\xe1ndo-no",level:2},{value:"Es \xfatil utilizar claves primarias compuestas cuando",id:"es-\xfatil-utilizar-claves-primarias-compuestas-cuando",level:3},{value:"No es recomendable usar claves primarias compuestas cuando",id:"no-es-recomendable-usar-claves-primarias-compuestas-cuando",level:3}];function t(e){const a={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Card:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"tipos-de-llaves-en-bases-de-datos-relacionales",children:"Tipos de Llaves en Bases de Datos Relacionales"}),"\n",(0,n.jsx)(a.h2,{id:"definici\xf3n",children:"Definici\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"Las llaves en las bases de datos relacionales son elementos fundamentales que ayudan a identificar, relacionar y mantener la integridad de los datos en diferentes tablas."}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)(a.h3,{id:"clave-primaria-simple-primary-key",children:"Clave Primaria Simple (Primary Key)"}),(0,n.jsx)(a.p,{children:"Una clave primaria simple es una sola columna que se utiliza para identificar de manera \xfanica cada registro en una tabla, normalmente esta es una columna de ID que se autoincrementa autom\xe1ticamente."})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)(a.h3,{id:"clave-primaria-compuesta-composite-primary-key",children:"Clave Primaria Compuesta (Composite Primary Key)"}),(0,n.jsx)(a.p,{children:"Una clave primaria compuesta es una combinaci\xf3n de dos o m\xe1s columnas que se utilizan para identificar de manera \xfanica cada registro en una tabla, se utiliza cuando ninguna columna individual puede garantizar la unicidad por s\xed sola."})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)(a.h3,{id:"clave-externa-foreign-key",children:"Clave Externa (Foreign Key)"}),(0,n.jsx)(a.p,{children:"Una clave externa es una columna o conjunto de columnas que se utilizan para establecer un enlace entre los datos de dos tablas, se utiliza para mantener la integridad referencial de los datos."})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)(a.h2,{id:"cu\xe1ndo-usar-una-llave-primaria-compuesta-y-cu\xe1ndo-no",children:"\xbfCu\xe1ndo usar una llave primaria compuesta y cu\xe1ndo no?"}),(0,n.jsxs)(s,{color:"green",children:[(0,n.jsx)(a.h3,{id:"es-\xfatil-utilizar-claves-primarias-compuestas-cuando",children:"Es \xfatil utilizar claves primarias compuestas cuando"}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"No hay una sola columna que pueda identificar de forma \xfanica cada fila. Por ejemplo, en una tabla de \u201cEstudiantes\u201d, ninguna columna como \u201cnombre\u201d o \u201ccorreo electr\xf3nico\u201d puede asegurar la unicidad por s\xed sola. En este caso, podr\xedamos usar una combinaci\xf3n de columnas como \u201cnombre\u201d y \u201ccorreo electr\xf3nico\u201d como clave primaria compuesta."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Modelamos relaciones de muchos a muchos. Por ejemplo, en una situaci\xf3n en la que tenemos una tabla \u201cEstudiantes\u201d y una tabla \u201cCursos\u201d, y queremos rastrear qu\xe9 estudiantes est\xe1n inscritos en qu\xe9 cursos. Aqu\xed podr\xedamos tener una tabla \u201cInscripciones\u201d con una clave primaria compuesta de las columnas \u201cidEstudiante\u201d e \u201cidCurso\u201d, garantizando que cada combinaci\xf3n de estudiante y curso sea \xfanica."}),"\n"]}),"\n"]})]}),(0,n.jsxs)(s,{color:"red",children:[(0,n.jsx)(a.h3,{id:"no-es-recomendable-usar-claves-primarias-compuestas-cuando",children:"No es recomendable usar claves primarias compuestas cuando"}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Existe una sola columna que puede identificar de forma \xfanica cada fila. Por ejemplo, si cada estudiante tiene un \u201cidEstudiante\u201d \xfanico, esta ser\xeda una buena opci\xf3n para una clave primaria simple."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"No estamos modelando relaciones de muchos a muchos. Si solo estamos rastreando informaci\xf3n sobre una entidad (como estudiantes o cursos) y cada entidad puede ser identificada de manera \xfanica por una sola columna, entonces una clave primaria simple ser\xeda m\xe1s apropiada."}),"\n"]}),"\n"]})]})]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>l});var n=s(6540);const i={},o=n.createContext(i);function r(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);