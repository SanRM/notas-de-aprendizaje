"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[939],{6647:(r,o,e)=>{e.r(o),e.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=e(4848),l=e(8453);const n={sidebar_position:16},s=void 0,i={id:"Frameworks/Angular/Formularios/Formularios reactivos",title:"Formularios reactivos",description:"Los formularios reactivos en Angular permiten manejar los formularios de forma program\xe1tica en lugar de depender solo de la plantilla. Esta metodolog\xeda ofrece una mayor flexibilidad y control sobre los formularios.",source:"@site/docs/Frameworks/Angular/Formularios/Formularios reactivos.md",sourceDirName:"Frameworks/Angular/Formularios",slug:"/Frameworks/Angular/Formularios/Formularios reactivos",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Formularios/Formularios reactivos",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Frameworks/Angular/Formularios/Formularios reactivos.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1730660085e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Obtener el valor del formulario",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Formularios/Obtener el valor del formulario"},next:{title:"Validaci\xf3n de Formularios",permalink:"/notas-de-aprendizaje/docs/Frameworks/Angular/Formularios/Validaci\xf3n de Formularios"}},t={},d=[{value:"Paso 1: Importar <code>ReactiveFormsModule</code>",id:"paso-1-importar-reactiveformsmodule",level:4},{value:"Paso 2: Crear <code>FormGroup</code> con <code>FormControl</code>",id:"paso-2-crear-formgroup-con-formcontrol",level:4},{value:"Paso 3: Conectar <code>FormGroup</code> y <code>FormControl</code> al Formulario",id:"paso-3-conectar-formgroup-y-formcontrol-al-formulario",level:4},{value:"Paso 4: Acceder y Mostrar los Valores del Formulario",id:"paso-4-acceder-y-mostrar-los-valores-del-formulario",level:4},{value:"Paso 5: Manejar la Subida del Formulario",id:"paso-5-manejar-la-subida-del-formulario",level:4},{value:"Paso 6: Agregar <code>ngSubmit</code> al Formulario",id:"paso-6-agregar-ngsubmit-al-formulario",level:4}];function c(r){const o={code:"code",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...r.components},{Card:e}=o;return e||function(r,o){throw new Error("Expected "+(o?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Los formularios reactivos en Angular permiten manejar los formularios de forma program\xe1tica en lugar de depender solo de la plantilla. Esta metodolog\xeda ofrece una mayor flexibilidad y control sobre los formularios."}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsxs)(o.h4,{id:"paso-1-importar-reactiveformsmodule",children:["Paso 1: Importar ",(0,a.jsx)(o.code,{children:"ReactiveFormsModule"})]}),(0,a.jsxs)(o.p,{children:["Para empezar, importa el m\xf3dulo ",(0,a.jsx)(o.code,{children:"ReactiveFormsModule"})," de ",(0,a.jsx)(o.code,{children:"@angular/forms"})," en tu componente. Esto habilita el uso de formularios reactivos en tu aplicaci\xf3n."]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-typescript",children:'import { ReactiveFormsModule } from \'@angular/forms\';\r\n\r\n@Component({\r\n    selector: \'app-root\',\r\n  standalone: true,\r\n  template: `\r\n    <form>\r\n      <label>Name\r\n        <input type="text" />\r\n      </label>\r\n      <label>Email\r\n        <input type="email" />\r\n      </label>\r\n      <button type="submit">Submit</button>\r\n    </form>\r\n  `,\r\n  imports: [ReactiveFormsModule],\r\n})\n'})})})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsxs)(o.h4,{id:"paso-2-crear-formgroup-con-formcontrol",children:["Paso 2: Crear ",(0,a.jsx)(o.code,{children:"FormGroup"})," con ",(0,a.jsx)(o.code,{children:"FormControl"})]}),(0,a.jsxs)(o.p,{children:["Angular utiliza la clase ",(0,a.jsx)(o.code,{children:"FormControl"})," para representar los controles del formulario (como entradas de texto). La clase ",(0,a.jsx)(o.code,{children:"FormGroup"})," permite agrupar estos controles y facilita el manejo de formularios complejos."]}),(0,a.jsxs)(o.p,{children:["Define un ",(0,a.jsx)(o.code,{children:"FormGroup"})," llamado ",(0,a.jsx)(o.code,{children:"profileForm"})," con dos controles (",(0,a.jsx)(o.code,{children:"name"})," y ",(0,a.jsx)(o.code,{children:"email"}),"):"]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-typescript",children:"import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';\r\n\r\nexport class AppComponent {\r\n    profileForm = new FormGroup({\r\n        name: new FormControl(''),\r\n    email: new FormControl(''),\r\n  });\r\n}\n"})})})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsxs)(o.h4,{id:"paso-3-conectar-formgroup-y-formcontrol-al-formulario",children:["Paso 3: Conectar ",(0,a.jsx)(o.code,{children:"FormGroup"})," y ",(0,a.jsx)(o.code,{children:"FormControl"})," al Formulario"]}),(0,a.jsxs)(o.p,{children:["Cada ",(0,a.jsx)(o.code,{children:"FormGroup"})," se conecta al formulario mediante la directiva ",(0,a.jsx)(o.code,{children:"[formGroup]"}),", mientras que cada ",(0,a.jsx)(o.code,{children:"FormControl"})," se enlaza con ",(0,a.jsx)(o.code,{children:"formControlName"}),", asignado al nombre correspondiente."]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:'<form [formGroup]="profileForm">\r\n  <label>\r\n    Name\r\n    <input type="text" formControlName="name" />\r\n  </label>\r\n  <label>\r\n    Email\r\n    <input type="email" formControlName="email" />\r\n  </label>\r\n  <button type="submit">Submit</button>\r\n</form>\n'})})})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsx)(o.h4,{id:"paso-4-acceder-y-mostrar-los-valores-del-formulario",children:"Paso 4: Acceder y Mostrar los Valores del Formulario"}),(0,a.jsxs)(o.p,{children:["Accede a los valores de los controles a trav\xe9s del ",(0,a.jsx)(o.code,{children:"FormGroup"}),". En este caso, muestra el valor de los campos en el HTML:"]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:"<h2>Profile Form</h2>\r\n<p>Name: {{ profileForm.value.name }}</p>\r\n<p>Email: {{ profileForm.value.email }}</p>\n"})})})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsx)(o.h4,{id:"paso-5-manejar-la-subida-del-formulario",children:"Paso 5: Manejar la Subida del Formulario"}),(0,a.jsxs)(o.p,{children:["Agrega el m\xe9todo ",(0,a.jsx)(o.code,{children:"handleSubmit()"})," en la clase del componente para gestionar el env\xedo del formulario y acceder a los valores del ",(0,a.jsx)(o.code,{children:"FormGroup"}),"."]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-typescript",children:"handleSubmit() {\r\n    alert(\r\n        this.profileForm.value.name + ' | ' + this.profileForm.value.email\r\n  );\r\n}\n"})})})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsxs)(o.h4,{id:"paso-6-agregar-ngsubmit-al-formulario",children:["Paso 6: Agregar ",(0,a.jsx)(o.code,{children:"ngSubmit"})," al Formulario"]}),(0,a.jsxs)(o.p,{children:["Finalmente, usa la directiva ",(0,a.jsx)(o.code,{children:"(ngSubmit)"})," para llamar al m\xe9todo ",(0,a.jsx)(o.code,{children:"handleSubmit"})," cuando el formulario sea enviado."]}),(0,a.jsx)(e,{children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:'<form\r\n  [formGroup]="profileForm"\r\n  (ngSubmit)="handleSubmit()">\r\n</form>\n'})})})]}),"\n",(0,a.jsx)(o.p,{children:"\xa1Y eso es todo! Ahora sabes c\xf3mo manejar formularios reactivos en Angular, que te da control total sobre los datos, eventos y validaciones en tus formularios."})]})}function m(r={}){const{wrapper:o}={...(0,l.R)(),...r.components};return o?(0,a.jsx)(o,{...r,children:(0,a.jsx)(c,{...r})}):c(r)}},8453:(r,o,e)=>{e.d(o,{R:()=>s,x:()=>i});var a=e(6540);const l={},n=a.createContext(l);function s(r){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof r?r(o):{...o,...r}}),[o,r])}function i(r){let o;return o=r.disableParentContext?"function"==typeof r.components?r.components(l):r.components||l:s(r.components),a.createElement(n.Provider,{value:o},r.children)}}}]);