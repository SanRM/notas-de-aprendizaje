"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[9756],{4184:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(4848),i=r(8453);const s={title:"Principios SOLID"},l=void 0,o={id:"Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/SOLID",title:"Principios SOLID",description:"Los principios SOLID son un conjunto de cinco principios de dise\xf1o de software que se introdujeron para mejorar la legibilidad, mantenibilidad y escalabilidad del c\xf3digo.",source:"@site/docs/Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/SOLID.md",sourceDirName:"Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code",slug:"/Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/SOLID",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/SOLID",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/SOLID.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1722011095e3,frontMatter:{title:"Principios SOLID"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a los patrones de dise\xf1o",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Introducci\xf3n a patrones de dise\xf1o"},next:{title:"Reglas para crear dise\xf1os de calidad",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Arquitect\xf3nicos/Clean code/reglas para crear dise\xf1os de calidad"}},d={},c=[{value:"Single responsability principle - SRP",id:"single-responsability-principle---srp",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Open/closed principle - OCP",id:"openclosed-principle---ocp",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3},{value:"Liskov Substitution Principle - LSP",id:"liskov-substitution-principle---lsp",level:2},{value:"Ejemplo",id:"ejemplo-2",level:3},{value:"Interface Segregation Principle - ISP",id:"interface-segregation-principle---isp",level:2},{value:"Ejemplo",id:"ejemplo-3",level:3},{value:"Dependency Inversion Principle - DIP",id:"dependency-inversion-principle---dip",level:2},{value:"M\xf3dulos o Clases de Alto Nivel",id:"m\xf3dulos-o-clases-de-alto-nivel",level:3},{value:"M\xf3dulos o Clases de Bajo Nivel",id:"m\xf3dulos-o-clases-de-bajo-nivel",level:3},{value:"Ejemplo",id:"ejemplo-4",level:3}];function t(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Card:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Los principios SOLID son un conjunto de cinco principios de dise\xf1o de software que se introdujeron para mejorar la legibilidad, mantenibilidad y escalabilidad del c\xf3digo."}),"\n",(0,a.jsx)(n.p,{children:"Estos principios fueron propuestos por Robert C. Martin y son ampliamente aceptados en la comunidad de desarrollo de software."}),"\n",(0,a.jsx)(n.p,{children:"Cada letra del acr\xf3nimo SOLID representa un principio espec\xedfico."}),"\n",(0,a.jsxs)(r,{color:"cyan",children:[(0,a.jsx)(n.h2,{id:"single-responsability-principle---srp",children:"Single responsability principle - SRP"}),(0,a.jsx)(n.p,{children:"Una clase o modulo debe:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Tener uno y s\xf3lo un motivo para cambiar."}),"\n",(0,a.jsx)(n.li,{children:"Hacer solamente una cosa, ni m\xe1s ni menos."}),"\n",(0,a.jsx)(n.li,{children:"Cada clase reducida encapsula una \xfanica responsabilidad, tiene un solo motivo para cambiar y colabora con otras para poder obtener los comportamientos deseados del sistema."}),"\n"]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public void pay() {\r\n\r\n  for (Employee e : employees) {\r\n    if (e.isPayday()) {\r\n      Money pay = e.calculatePay();\r\n      e.deliverPay(pay);\r\n    }\r\n  }\r\n\r\n}\n"})}),(0,a.jsx)(n.p,{children:"Este fragmento de c\xf3digo realiza tres operaciones:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Itera por todos los empleados."}),"\n",(0,a.jsx)(n.li,{children:"Comprueba si cada uno debe recibir su paga ."}),"\n",(0,a.jsx)(n.li,{children:"Paga al empleado."}),"\n"]})]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.p,{children:"Se podr\xeda reescribir de esta forma:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public void pay() {\r\n  for (Employee e : employees)\r\n    payifNecessary(e);\r\n}\r\n  \r\nprivate void payifNecessary(Employee e) {\r\n  if (e.isPayday())\r\n    calculateAndDeliverPay(e);\r\n}\r\n\r\nprivate void calculateAndDeliverPay(Employee e) {\r\n  Money pay = e.calculatePay();\r\n  e.deliverPay(pay);\r\n}\n"})}),(0,a.jsx)(n.p,{children:"Cada una de estas funciones hace una sola cosa"})]})]})]}),"\n",(0,a.jsxs)(r,{color:"pink",children:[(0,a.jsx)(n.h2,{id:"openclosed-principle---ocp",children:"Open/closed principle - OCP"}),(0,a.jsx)(n.p,{children:"Las clases deben abrirse para su ampliaci\xf3n para cerrarse para su modificaci\xf3n."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Las clases abstractas son ideales para este principio"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Este principio sostiene que una clase debe estar abierta para la extensi\xf3n pero cerrada para la modificaci\xf3n, esto quiere decir que se pueden agregar nuevas funcionalidades mediante la creaci\xf3n de nuevas clases o m\xf3dulos sin modificar el c\xf3digo existente."}),"\n"]}),"\n"]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"ejemplo-1",children:"Ejemplo"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// OCP: Clase base que sigue el principio abierto/cerrado\r\nabstract class Shape {\r\n  double calculateArea();\r\n}\r\n\r\n// OCP: Clase derivada que extiende sin modificar la clase base\r\nclass Circle extends Shape {\r\n  double radius;\r\n\r\n  Circle(this.radius);\r\n\r\n  @override\r\n  double calculateArea() {\r\n    return 3.14 * radius * radius;\r\n  }\r\n}\r\n\r\n// OCP: Otra clase derivada que extiende sin modificar la clase base\r\nclass Square extends Shape {\r\n  double side;\r\n\r\n  Square(this.side);\r\n\r\n  @override\r\n  double calculateArea() {\r\n    return side * side;\r\n  }\r\n}\r\n\r\nvoid main() {\r\n  // Uso polim\xf3rfico respetando el principio abierto/cerrado\r\n  Shape circle = Circle(5.0);\r\n  Shape square = Square(4.0);\r\n\r\n  print('\xc1rea del c\xedrculo: ${circle.calculateArea()}');\r\n  print('\xc1rea del cuadrado: ${square.calculateArea()}');\r\n}\n"})}),(0,a.jsx)(n.p,{children:"En este ejemplo, la clase Shape es la clase base que sigue el principio abierto/cerrado. Las clases derivadas Circle y Square extienden la funcionalidad sin modificar la clase base. Esto permite agregar nuevas formas sin cambiar la clase Shape."})]})]}),"\n",(0,a.jsxs)(r,{color:"blue",children:[(0,a.jsx)(n.h2,{id:"liskov-substitution-principle---lsp",children:"Liskov Substitution Principle - LSP"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Las clases derivadas deben ser sustituibles por sus clases base."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Este principio establece que los objetos de una clase derivada deben poder reemplazar a los objetos de la clase base sin afectar el comportamiento del programa."}),"\n"]}),"\n"]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"ejemplo-2",children:"Ejemplo"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// LSP: Clase base\r\nclass Bird {\r\n  void fly() {\r\n    print('Volando');\r\n  }\r\n}\r\n\r\n// LSP: Clase derivada\r\nclass Duck extends Bird {\r\n  void swim() {\r\n    print('Nadando');\r\n  }\r\n}\r\n\r\nvoid main() {\r\n  // Uso polim\xf3rfico respetando el principio de sustituci\xf3n de Liskov\r\n  Bird duck = Duck();\r\n  duck.fly();\r\n}\n"})}),(0,a.jsx)(n.p,{children:"En este ejemplo, la clase Duck es una clase derivada de Bird."}),(0,a.jsx)(n.p,{children:"La clase Duck tiene un m\xe9todo swim que no est\xe1 presente en la clase base Bird, a pesar de esto, el objeto de la clase Duck puede reemplazar al objeto de la clase Bird sin afectar el comportamiento del programa."})]})]}),"\n",(0,a.jsxs)(r,{color:"yellow",children:[(0,a.jsx)(n.h2,{id:"interface-segregation-principle---isp",children:"Interface Segregation Principle - ISP"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Los clientes no deben verse obligados a depender de interfaces que no utilizan."}),"\n"]}),(0,a.jsx)(n.p,{children:"Este principio establece que una clase no debe depender de interfaces que no utiliza, en lugar de tener una interfaz grande que contenga muchos m\xe9todos, es mejor tener varias interfaces peque\xf1as que contengan un n\xfamero reducido de m\xe9todos."}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"ejemplo-3",children:"Ejemplo"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// ISP: Interfaz grande\r\nabstract class Worker {\r\n  void work();\r\n  void eat();\r\n  void sleep();\r\n}\r\n\r\n// ISP: Interfaz segregada\r\nabstract class Workable {\r\n  void work();\r\n}\r\n\r\nabstract class Eatable {\r\n  void eat();\r\n}\r\n\r\nabstract class Sleepable {\r\n  void sleep();\r\n}\r\n\r\nclass Human implements Workable, Eatable, Sleepable {\r\n  @override\r\n  void work() {\r\n    print('Trabajando');\r\n  }\r\n\r\n  @override\r\n  void eat() {\r\n    print('Comiendo');\r\n  }\r\n\r\n  @override\r\n  void sleep() {\r\n    print('Durmiendo');\r\n  }\r\n}\r\n\r\nvoid main() {\r\n  // Uso de interfaces segregadas\r\n  Human human = Human();\r\n  human.work();\r\n  human.eat();\r\n  human.sleep();\r\n}\n"})})]}),(0,a.jsx)(n.p,{children:"En este ejemplo, la clase Worker tiene una interfaz grande que contiene tres m\xe9todos work, eat y sleep."}),(0,a.jsx)(n.p,{children:"Por otro lado, la clase Human implementa tres interfaces separadas Workable, Eatable y Sleepable, cada una con un solo m\xe9todo."})]}),"\n",(0,a.jsxs)(r,{color:"magenta",children:[(0,a.jsx)(n.h2,{id:"dependency-inversion-principle---dip",children:"Dependency Inversion Principle - DIP"}),(0,a.jsx)(n.p,{children:"Este principio sostiene que una clase debe estar abierta para la extensi\xf3n pero cerrada para la modificaci\xf3n, esto quiere decir que se pueden agregar nuevas funcionalidades mediante la creaci\xf3n de nuevas clases o m\xf3dulos sin modificar el c\xf3digo existente."}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Las clases abstractas son ideales para este principio"}),"\n"]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"m\xf3dulos-o-clases-de-alto-nivel",children:"M\xf3dulos o Clases de Alto Nivel"}),(0,a.jsx)(n.p,{children:"Son las partes del sistema que se encargan de las tareas m\xe1s abstractas."})]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"m\xf3dulos-o-clases-de-bajo-nivel",children:"M\xf3dulos o Clases de Bajo Nivel"}),(0,a.jsx)(n.p,{children:"Son las partes del sistema que se encargan de detalles espec\xedficos."})]}),(0,a.jsxs)(r,{children:[(0,a.jsx)(n.h3,{id:"ejemplo-4",children:"Ejemplo"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// DIP: Abstracci\xf3n que representa un dispositivo\r\nabstract class Device {\r\n  void turnOn();\r\n  void turnOff();\r\n}\r\n\r\n// DIP: Implementaci\xf3n concreta de un dispositivo: Bombilla\r\nclass LightBulb implements Device {\r\n  @override\r\n  void turnOn() {\r\n    print('Bombilla encendida');\r\n  }\r\n\r\n  @override\r\n  void turnOff() {\r\n    print('Bombilla apagada');\r\n  }\r\n}\r\n\r\n// DIP: Implementaci\xf3n concreta de un dispositivo: Ventilador\r\nclass Fan implements Device {\r\n  @override\r\n  void turnOn() {\r\n    print('Ventilador encendido');\r\n  }\r\n\r\n  @override\r\n  void turnOff() {\r\n    print('Ventilador apagado');\r\n  }\r\n}\r\n\r\n// DIP: Clase de alto nivel que depende de la abstracci\xf3n\r\nclass Switch {\r\n  Device device;\r\n\r\n  Switch(this.device);\r\n\r\n  void operate() {\r\n    device.turnOn();\r\n    // Realizar otras operaciones si es necesario\r\n    device.turnOff();\r\n  }\r\n}\r\n\r\nvoid main() {\r\n  // Uso del principio de inversi\xf3n de dependencias\r\n  Device bulb = LightBulb();\r\n  Device fan = Fan();\r\n\r\n  Switch switchForBulb = Switch(bulb);\r\n  Switch switchForFan = Switch(fan);\r\n\r\n  switchForBulb.operate();\r\n  switchForFan.operate();\r\n}\n"})})]}),(0,a.jsx)(n.p,{children:"En este ejemplo, el principio de inversi\xf3n de dependencias se cumple al hacer que la clase Switch dependa de la abstracci\xf3n Device, en lugar de depender directamente de las implementaciones concretas LightBulb y Fan. Esto permite cambiar f\xe1cilmente el dispositivo sin afectar la clase Switch."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["A la vez que se explica el principio de inversi\xf3n de dependencias (DIP) tambi\xe9n hay una aplicaci\xf3n del principio Open/Closed (OCP). La abstracci\xf3n Device es la clase base que sigue el principio OCP y las implementaciones concretas como LigtBulb y ",(0,a.jsx)(n.strong,{children:"Fan"})," extienden la funcionalidad sin modificar la clase base"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Este ejemplo tambi\xe9n usa inyecci\xf3n de dependencias en la clase Switch. En este caso la dependencia Device se inyecta a trav\xe9s del constructor."}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var a=r(6540);const i={},s=a.createContext(i);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);