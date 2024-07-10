"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[5600],{4458:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=r(4848),a=r(8453);const s={title:"Pruebas unitarias"},i=void 0,o={id:"Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias",title:"Pruebas unitarias",description:"Definici\xf3n",source:"@site/docs/Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias.md",sourceDirName:"Lenguajes de programaci\xf3n/Dart/Testing",slug:"/Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Dart/Testing/Pruebas unitarias.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:171920107e4,frontMatter:{title:"Pruebas unitarias"},sidebar:"tutorialSidebar",previous:{title:"Relaci\xf3n de clases",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Dart/Relaci\xf3n de clases"},next:{title:"Test unitarios",permalink:"/notas-de-aprendizaje/docs/category/test-unitarios"}},c={},u=[{value:"Definici\xf3n",id:"definici\xf3n",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Card:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"definici\xf3n",children:"Definici\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Las pruebas unitarias son una de las formas m\xe1s comunes de testing y se usan para verificar el correcto funcionamiento de unidades individuales de c\xf3digo como funciones, m\xe9todos o clases. El prop\xf3sito principal de las pruebas unitarias es asegurar que cada parte aislada del c\xf3digo (unidad) realice las tareas previstas de manera adecuada."}),"\n",(0,t.jsx)(r,{color:"yellow",children:(0,t.jsxs)(n.p,{children:["Se recomienda que las pruebas unitarias sean creadas dentro de la carpeta ",(0,t.jsx)(n.code,{children:"test"})," en la ra\xedz del proyecto para mantener un dise\xf1o limpio y ordenado"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",metastring:"title='Ejemplo de prueba unitaria'",children:"import 'package:flutter_test/flutter_test.dart';\r\nimport 'package:unit_test/counter.dart';\r\n\r\nclass Counter {\r\n\r\n  int value = 0;\r\n  Counter({this.value = 0});\r\n\r\n  void increment() => value++;\r\n\r\n  void decrement() => value--;\r\n\r\n  void reset() => value = 0;\r\n\r\n}\r\n\r\nvoid main() {\r\n  \r\n  Counter counter;\r\n  group(\r\n\r\n    'Group of tests for the counter -',\r\n\r\n    () {\r\n\r\n      test(\r\n        'Testing the increment counter',\r\n        () => {\r\n          //setup\r\n          counter = Counter(value: 1),\r\n          //do\r\n          counter.increment(),\r\n          //test\r\n          expect(counter.value, 2)\r\n        },\r\n      );\r\n\r\n      test(\r\n        'Testing the decrement counter',\r\n        () => {\r\n          //setup\r\n          counter = Counter(value: 10),\r\n          //do\r\n          counter.decrement(),\r\n          //test\r\n          expect(counter.value, 9)\r\n        },\r\n      );\r\n\r\n    },\r\n  );\r\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);