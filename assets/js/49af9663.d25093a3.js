"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[9807],{6261:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(4848),c=n(8453);const o={title:"Mockito"},i=void 0,s={id:"Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito",title:"Mockito",description:"Mockito es un framework de pruebas unitarias para Java que permite crear objetos simulados (mocks) de clases y interfaces, estos objetos pueden ser utilizados para simular el comportamiento de objetos reales en pruebas unitarias.",source:"@site/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito.md",sourceDirName:"Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas",slug:"/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/Mockito.md",tags:[],version:"current",frontMatter:{title:"Mockito"},sidebar:"tutorialSidebar",previous:{title:"JUnit",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Pruebas unitarias/Dependencias/Dependencias para pruebas/JUnit"},next:{title:"Introducci\xf3n a Spring Boot",permalink:"/notas-de-aprendizaje/docs/Lenguajes de programaci\xf3n/Java/Spring Boot/Introducci\xf3n a Spring Boot"}},t={},l=[{value:"Por qu\xe9 usar Mockito",id:"por-qu\xe9-usar-mockito",level:2},{value:"Caracter\xedsticas principales",id:"caracter\xedsticas-principales",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Test sin Mockito",id:"test-sin-mockito",level:3},{value:"Test con Mockito",id:"test-con-mockito",level:3},{value:"Formas de definir una clase de prueba con Mockito",id:"formas-de-definir-una-clase-de-prueba-con-mockito",level:2},{value:"Anotaci\xf3n @Before",id:"anotaci\xf3n-before",level:3},{value:"Anotaci\xf3n @Mock e @InjectMocks",id:"anotaci\xf3n-mock-e-injectmocks",level:3},{value:"Anotaci\xf3n @ExtendWith con @Mock e @InjectMocks",id:"anotaci\xf3n-extendwith-con-mock-e-injectmocks",level:3},{value:"Ejemplo real",id:"ejemplo-real",level:2}];function d(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components},{Card:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Mockito"})," es un framework de pruebas unitarias para Java que permite crear objetos simulados (mocks) de clases y interfaces, estos objetos pueden ser utilizados para simular el comportamiento de objetos reales en pruebas unitarias."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Mockito trabaja con las dependencias de un objeto, permitiendo simular el comportamiento de estas dependencias."}),"\n"]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"por-qu\xe9-usar-mockito",children:"Por qu\xe9 usar Mockito"}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Aislamiento de la Unidad:"})," Permite probar una clase en aislamiento, evitando dependencias externas que podr\xedan hacer que las pruebas sean lentas o dif\xedciles de configurar."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Simplificaci\xf3n de Pruebas:"})," Facilita la simulaci\xf3n de objetos complejos, proporcionando una forma clara y sencilla de definir el comportamiento esperado de estos objetos simulados."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Facilita el TDD (Desarrollo Guiado por Pruebas):"})," Ayuda a escribir pruebas antes del c\xf3digo real, promoviendo buenas pr\xe1cticas de desarrollo."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"caracter\xedsticas-principales",children:"Caracter\xedsticas principales"}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Creaci\xf3n de Mocks:"})," Permite crear objetos simulados de clases y interfaces f\xe1cilmente."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Verificaci\xf3n de interacciones:"})," Permite verificar si un m\xe9todo de un objeto simulado fue llamado con los par\xe1metros correctos."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Integraci\xf3n con JUnit:"})," Se integra f\xe1cilmente con JUnit para realizar pruebas unitarias."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),(0,a.jsxs)(r.p,{children:["Para utilizar Mockito en un proyecto Java, es necesario agregar la dependencia correspondiente al archivo ",(0,a.jsx)(r.code,{children:"pom.xml"})," del proyecto."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"<dependency>\r\n    <groupId>org.mockito</groupId>\r\n    <artifactId>mockito-core</artifactId>\r\n    <version>3.11.2</version>\r\n    <scope>test</scope>\r\n</dependency>\n"})})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),(0,a.jsxs)(r.p,{children:["Supongamos que tenemos una clase ",(0,a.jsx)(r.code,{children:"Calculator"})," que realiza operaciones matem\xe1ticas, y una clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," que realiza operaciones matem\xe1ticas utilizando la clase ",(0,a.jsx)(r.code,{children:"Calculator"}),"."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public class Calculator {\r\n\r\n    public int add(int a, int b) {\r\n        return a + b;\r\n    }\r\n\r\n}\r\n\r\npublic class CalculatorService {\r\n\r\n    private Calculator calculator;\r\n\r\n    public CalculatorService(Calculator calculator) {\r\n        this.calculator = calculator;\r\n    }\r\n\r\n    public int add(int a, int b) {\r\n        return calculator.add(a, b);\r\n    }\r\n\r\n}\n"})}),(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h3,{id:"test-sin-mockito",children:"Test sin Mockito"}),(0,a.jsxs)(r.p,{children:["Para probar la clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," sin Mockito, necesitamos crear una instancia de la clase ",(0,a.jsx)(r.code,{children:"Calculator"})," y pasarla al constructor de ",(0,a.jsx)(r.code,{children:"CalculatorService"}),"."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"\r\npublic class CalculatorServiceTest {\r\n\r\n    @Test\r\n    public void testAdd() {\r\n\r\n        //Given\r\n        Calculator calculator = new Calculator();\r\n        CalculatorService calculatorService = new CalculatorService(calculator);\r\n\r\n        //When\r\n        int result = calculatorService.add(2, 3);\r\n\r\n        //Then\r\n        assertEquals(5, result);\r\n    }\r\n\r\n}\n"})}),(0,a.jsxs)(r.p,{children:["Este enfoque tiene la desventaja de que estamos probando la clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," junto con la clase ",(0,a.jsx)(r.code,{children:"Calculator"}),", lo cual no es ideal para pruebas unitarias porque estamos probando dos clases a la vez y no podemos aislar la clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," para probarla de forma independiente, adem\xe1s, si la clase ",(0,a.jsx)(r.code,{children:"Calculator"})," tiene dependencias, tambi\xe9n tendr\xedamos que crear instancias de estas dependencias."]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h3,{id:"test-con-mockito",children:"Test con Mockito"}),(0,a.jsxs)(r.p,{children:["Para probar la clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," con Mockito, podemos crear un mock de la clase ",(0,a.jsx)(r.code,{children:"Calculator"})," y pasar este mock al constructor de ",(0,a.jsx)(r.code,{children:"CalculatorService"}),"."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"\r\nimport static org.mockito.Mockito.*;\r\n\r\npublic class CalculatorServiceTest {\r\n\r\n    @Test\r\n    public void testAdd() {\r\n        \r\n        //Given\r\n        Calculator calculator = mock(Calculator.class);\r\n        CalculatorService calculatorService = new CalculatorService(calculator);\r\n\r\n        //When\r\n        when(calculator.add(2, 3)).thenReturn(5);\r\n        int result = calculatorService.add(2, 3);\r\n\r\n        //Then\r\n        assertEquals(5, result);\r\n\r\n    }\r\n\r\n}\n"})}),(0,a.jsxs)(r.p,{children:["En este caso, estamos creando un mock de la clase ",(0,a.jsx)(r.code,{children:"Calculator"})," utilizando el m\xe9todo ",(0,a.jsx)(r.code,{children:"mock()"})," de Mockito, luego estamos configurando el comportamiento del mock utilizando el m\xe9todo ",(0,a.jsx)(r.code,{children:"when().thenReturn()"}),", y finalmente estamos pasando el mock al constructor de ",(0,a.jsx)(r.code,{children:"CalculatorService"}),", de esta forma podemos probar la clase ",(0,a.jsx)(r.code,{children:"CalculatorService"})," de forma aislada y sin depender de la clase ",(0,a.jsx)(r.code,{children:"Calculator"}),"."]})]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"formas-de-definir-una-clase-de-prueba-con-mockito",children:"Formas de definir una clase de prueba con Mockito"}),(0,a.jsx)(r.p,{children:"Hay varias formas de habilitar Mockito en una clase de prueba, estas son algunas de las m\xe1s comunes:"}),(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h3,{id:"anotaci\xf3n-before",children:"Anotaci\xf3n @Before"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import org.junit.Before;\r\nimport static org.mockito.Mockito.*;\r\n\r\npublic class CalculatorServiceTest {\r\n\r\n    private Calculator calculator;\r\n    private CalculatorService calculatorService;\r\n\r\n    @Before\r\n    public void setUp() {\r\n        calculator = mock(Calculator.class);\r\n        calculatorService = new CalculatorService(calculator);\r\n    }\r\n\r\n    // Tests...\r\n\r\n}\n"})}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["El m\xe9todo ",(0,a.jsx)(r.code,{children:"setUp()"})," se ejecuta antes de cada prueba, garantizando que el mock est\xe9 disponible y puede tener cualquier nombre, pero lo com\xfan es llamarlo ",(0,a.jsx)(r.code,{children:"setUp()"})," o ",(0,a.jsx)(r.code,{children:"init()"}),"."]}),"\n"]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h3,{id:"anotaci\xf3n-mock-e-injectmocks",children:"Anotaci\xf3n @Mock e @InjectMocks"}),(0,a.jsxs)(r.p,{children:["La anotaci\xf3n ",(0,a.jsx)(r.code,{children:"@Mock"})," se utiliza para crear mocks de clases o interfaces, y la anotaci\xf3n ",(0,a.jsx)(r.code,{children:"@InjectMocks"})," se utiliza para inyectar los mocks en la clase que estamos probando sin necesidad de pasarlos al constructor, esto se conoce como inyecci\xf3n de dependencias autom\xe1tica."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import org.mockito.Mock;\r\nimport org.mockito.InjectMocks;\r\nimport org.mockito.MockitoAnnotations;\r\nimport org.junit.jupiter.api.BeforeEach;\r\n\r\npublic class CalculatorServiceTest {\r\n\r\n    @Mock\r\n    private Calculator calculator;\r\n\r\n    @InjectMocks\r\n    private CalculatorService calculatorService;\r\n\r\n    @BeforeEach\r\n    public void setUp() {\r\n        MockitoAnnotations.initMocks(this);\r\n    }\r\n\r\n    // Tests...\r\n\r\n}\n"})}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"@Mock"})," crea el mock."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"@InjectMocks"})," inyecta el mock en el objeto de prueba."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"MockitoAnnotations.initMocks(this)"})," inicializa las anotaciones de Mockito."]}),"\n"]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h3,{id:"anotaci\xf3n-extendwith-con-mock-e-injectmocks",children:"Anotaci\xf3n @ExtendWith con @Mock e @InjectMocks"}),(0,a.jsxs)(r.p,{children:["La anotaci\xf3n ",(0,a.jsx)(r.code,{children:"@ExtendWith"})," habilita la extensi\xf3n de Mockito en la clase de prueba:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import org.mockito.junit.jupiter.MockitoExtension;\r\nimport org.mockito.Mock;\r\nimport org.mockito.InjectMocks;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\npublic class CalculatorServiceTest {\r\n\r\n    @Mock\r\n    private Calculator calculator;\r\n\r\n    @InjectMocks\r\n    private CalculatorService calculatorService;\r\n\r\n    // Tests...\r\n\r\n}\n"})}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"@ExtendWith(MockitoExtension.class)"})," habilita la extensi\xf3n de Mockito."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"@Mock"})," y ",(0,a.jsx)(r.code,{children:"@InjectMocks"})," funcionan de la misma manera que en el ejemplo anterior pero sin necesidad de llamar a ",(0,a.jsx)(r.code,{children:"MockitoAnnotations.initMocks(this)"}),"."]}),"\n"]})]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(r.h2,{id:"ejemplo-real",children:"Ejemplo real"}),(0,a.jsxs)(r.p,{children:["Supongamos que tenemos una clase ",(0,a.jsx)(r.code,{children:"UserService"})," que realiza operaciones con usuarios y depende de una clase ",(0,a.jsx)(r.code,{children:"UserRepository"})," para acceder a la base de datos."]}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Vamos a probar la clase ",(0,a.jsx)(r.code,{children:"UserService"})," utilizando Mockito para simular el comportamiento de ",(0,a.jsx)(r.code,{children:"UserRepository"}),"."]}),"\n"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",metastring:"title='Clases UserService, UserRepository y User'",children:"\r\n// UserService.java\r\npublic class UserService {\r\n\r\n    private UserRepository userRepository;\r\n\r\n    public UserService(UserRepository userRepository) {\r\n        this.userRepository = userRepository;\r\n    }\r\n\r\n    public User findUserById(Long id) {\r\n        return userRepository.findById(id);\r\n    }\r\n\r\n}\r\n\r\n// UserRepository.java\r\npublic interface UserRepository {\r\n\r\n    User findById(Long id);\r\n\r\n}\r\n\r\n// User.java\r\npublic class User {\r\n\r\n    private Long id;\r\n    private String name;\r\n\r\n    // Getters and setters...\r\n\r\n}\r\n    \n"})}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",metastring:"title='Prueba unitaria con Mockito usando @ExtendWith con @Mock e @InjectMocks'",children:'\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\nimport org.mockito.Mock;\r\nimport org.mockito.InjectMocks;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\n\r\nimport static org.mockito.Mockito.*;\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\npublic class UserServiceTest {\r\n\r\n    @Mock\r\n    private UserRepository userRepository;\r\n\r\n    @InjectMocks\r\n    private UserService userService;\r\n\r\n    @Test\r\n    public void testFindById() {\r\n\r\n        //Given\r\n        User user = new User();\r\n        user.setId(1L);\r\n        user.setName("Alice");\r\n\r\n        when(userRepository.findById(1L)).thenReturn(user);\r\n\r\n        //When\r\n        User result = userService.findUserById(1L);\r\n\r\n        //Then\r\n        assertEquals(user, result);\r\n\r\n    }\r\n\r\n}\n'})})]})]})}function u(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var a=n(6540);const c={},o=a.createContext(c);function i(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);