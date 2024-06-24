"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[652],{7230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(4848),r=n(8453);const i={title:"Data Transfer Object (DTO)"},a=void 0,l={id:"Patrones de dise\xf1o/Estructurales/Dto",title:"Data Transfer Object (DTO)",description:"DTO, o Data Transfer Object, es un patr\xf3n de dise\xf1o que se utiliza para transferir datos entre subsistemas de una aplicaci\xf3n.",source:"@site/docs/Patrones de dise\xf1o/Estructurales/Dto.md",sourceDirName:"Patrones de dise\xf1o/Estructurales",slug:"/Patrones de dise\xf1o/Estructurales/Dto",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Estructurales/Dto",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Patrones de dise\xf1o/Estructurales/Dto.md",tags:[],version:"current",frontMatter:{title:"Data Transfer Object (DTO)"},sidebar:"tutorialSidebar",previous:{title:"Data Access Object (DAO)",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Estructurales/Dao"}},o={},d=[{value:"Diferencias entre DTO y una clase modelo o entidad JPA",id:"diferencias-entre-dto-y-una-clase-modelo-o-entidad-jpa",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Card:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"DTO, o Data Transfer Object, es un patr\xf3n de dise\xf1o que se utiliza para transferir datos entre subsistemas de una aplicaci\xf3n."}),"\n",(0,s.jsx)(t.p,{children:"Los DTOs son simples objetos que contienen solo campos y m\xe9todos de acceso (getters y setters), y no contienen ninguna l\xf3gica de negocio."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"title='Ejemplo de un DTO en Java:'",children:"public class UserDTO {\r\n    private String username;\r\n    private String email;\r\n\r\n    // Constructor\r\n    public UserDTO(String username, String email) {\r\n        this.username = username;\r\n        this.email = email;\r\n    }\r\n\r\n    // Getters and Setters\r\n    public String getUsername() {\r\n        return username;\r\n    }\r\n\r\n    public void setUsername(String username) {\r\n        this.username = username;\r\n    }\r\n\r\n    public String getEmail() {\r\n        return email;\r\n    }\r\n\r\n    public void setEmail(String email) {\r\n        this.email = email;\r\n    }\r\n}\n"})}),(0,s.jsx)(t.p,{children:"En este ejemplo, UserDTO es un objeto que se utiliza para transferir datos de usuario entre diferentes partes de una aplicaci\xf3n."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"No contiene ninguna l\xf3gica de negocio; solo contiene datos y m\xe9todos para acceder y modificar esos datos."}),"\n"]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)(t.h2,{id:"diferencias-entre-dto-y-una-clase-modelo-o-entidad-jpa",children:"Diferencias entre DTO y una clase modelo o entidad JPA"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Caracter\xedstica"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"DTO"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Clase Modelo/Entidad JPA"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Prop\xf3sito"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Transferir datos entre subsistemas de una aplicaci\xf3n"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Representar una entidad de negocio"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"L\xf3gica de negocio"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No contiene l\xf3gica de negocio"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Puede contener l\xf3gica de negocio"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"M\xe9todos"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Solo contiene m\xe9todos de acceso (getters y setters)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Puede contener m\xe9todos adicionales"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Persistencia"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No se utiliza para persistir datos"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Se utiliza para persistir datos en una base de datos"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Serializaci\xf3n"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Se utiliza para serializar y deserializar datos"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Se utiliza para mapear datos a una tabla de base de datos"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Relaciones"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No tiene relaciones con otras entidades"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Puede tener relaciones con otras entidades"})]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);