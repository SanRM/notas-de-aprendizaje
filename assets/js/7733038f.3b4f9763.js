"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[7126],{5238:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(4848),i=n(8453);const r={title:"El scripting b\xe1sico",sidebar_position:9},l=void 0,c={id:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/El scripting b\xe1sico",title:"El scripting b\xe1sico",description:"Linux, la frontera final.",source:"@site/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/El scripting b\xe1sico.md",sourceDirName:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials",slug:"/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/El scripting b\xe1sico",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/El scripting b\xe1sico",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/El scripting b\xe1sico.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"El scripting b\xe1sico",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Barras Verticales, Redirecci\xf3n y Las Expresiones Regulares",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Barras Verticales, Redirecci\xf3n y Las Expresiones Regulares"},next:{title:"Comprensi\xf3n del hardware de la computadora",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Comprensi\xf3n del hardware de la computadora"}},o={},d=[{value:"Linux, la frontera final.",id:"linux-la-frontera-final",level:2},{value:"Scripts Shell en Pocas Palabras",id:"scripts-shell-en-pocas-palabras",level:2},{value:"Ejecutar un Script",id:"ejecutar-un-script",level:3},{value:"Shebang",id:"shebang",level:2},{value:"Editar los Scripts Shell",id:"editar-los-scripts-shell",level:2},{value:"Usando nano",id:"usando-nano",level:3},{value:"Caracter\xedsticas de nano",id:"caracter\xedsticas-de-nano",level:4},{value:"Comandos de nano",id:"comandos-de-nano",level:4},{value:"Guardar y Salir",id:"guardar-y-salir",level:4},{value:"Ejemplo de edici\xf3n en nano",id:"ejemplo-de-edici\xf3n-en-nano",level:3},{value:"Otros comandos \xfatiles de nano",id:"otros-comandos-\xfatiles-de-nano",level:3},{value:"El Scripting B\xe1sico",id:"el-scripting-b\xe1sico",level:2},{value:"1. Variables",id:"1-variables",level:3},{value:"Asignaci\xf3n de Variables a Otras Variables",id:"asignaci\xf3n-de-variables-a-otras-variables",level:3},{value:"Asignar Variables con la Salida de Comandos",id:"asignar-variables-con-la-salida-de-comandos",level:3},{value:"Obtener Entrada del Usuario",id:"obtener-entrada-del-usuario",level:3},{value:"Variables Especiales",id:"variables-especiales",level:3},{value:"Establecer el C\xf3digo de Salida",id:"establecer-el-c\xf3digo-de-salida",level:3},{value:"Condicionales",id:"condicionales",level:3},{value:"Comparaciones",id:"comparaciones",level:3},{value:"Instrucci\xf3n if con elif",id:"instrucci\xf3n-if-con-elif",level:3},{value:"Instrucci\xf3n case",id:"instrucci\xf3n-case",level:3},{value:"Loops",id:"loops",level:2},{value:"Loop for",id:"loop-for",level:3},{value:"Loop while",id:"loop-while",level:3}];function t(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Card:n,Row:r}=s;return n||u("Card",!0),r||u("Row",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{children:(0,a.jsxs)(r,{children:[(0,a.jsx)("img",{src:"https://github.com/SanRM/notas-de-aprendizaje/blob/main/docs/Sistemas%20operativos/Linux/img/7-LPI-Graphics.png?raw=true",width:"250px"}),(0,a.jsxs)("p",{children:[(0,a.jsx)(s.h2,{id:"linux-la-frontera-final",children:"Linux, la frontera final."}),(0,a.jsxs)(s.p,{children:["Linux es usado en el espacio por la ",(0,a.jsx)(s.code,{children:"NASA"}),"."]}),(0,a.jsxs)(s.p,{children:["El ",(0,a.jsx)(s.code,{children:"F\xe9nix Mars Rover"})," e incluso en la ",(0,a.jsx)(s.code,{children:"estaci\xf3n espacial internacional"})]})]})]})}),"\n",(0,a.jsx)(s.p,{children:"En este cap\xedtulo, se va a hablar sobre c\xf3mo las herramientas que se han aprendido hasta ahora pueden transformarse en scripts reutilizables."}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h2,{id:"scripts-shell-en-pocas-palabras",children:"Scripts Shell en Pocas Palabras"}),(0,a.jsx)(s.p,{children:"Un script shell es un archivo de comandos ejecutables almacenado en un archivo de texto, al ejecutarlo, cada comando se ejecuta en secuencia."}),(0,a.jsx)(s.p,{children:"Los scripts shell tienen acceso a todos los comandos del shell, incluyendo la l\xf3gica, lo que permite detectar la presencia de un archivo o buscar una salida particular y cambiar su comportamiento en consecuencia."}),(0,a.jsxs)(s.p,{children:["Los scripts pueden ",(0,a.jsx)(s.code,{children:"automatizar"})," partes repetitivas de tu trabajo, ",(0,a.jsx)(s.code,{children:"ahorrando tiempo"})," y asegurando ",(0,a.jsx)(s.code,{children:"consistencia"}),"."]}),(0,a.jsx)(n,{color:"blue",children:(0,a.jsx)(s.p,{children:"Por ejemplo, si ejecutas los mismos cinco comandos todos los d\xedas, puedes convertirlos en un script shell que reduce tu trabajo a un solo comando."})}),(0,a.jsx)(s.p,{children:"Un script puede ser tan simple como un \xfanico comando:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",metastring:"title='test.sh'",children:"echo \u201cHello, World!\u201d\n"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"La extensi\xf3n .sh no es necesaria, pero es una convenci\xf3n para identificar scripts shell, al igual que .txt para archivos de texto."}),"\n",(0,a.jsx)(s.li,{children:"En lugar de sh, se puede usar bash, ksh, zsh, etc., para especificar el int\xe9rprete de comandos, pero sh es el m\xe1s com\xfan y compatible."}),"\n"]}),(0,a.jsx)(s.p,{children:'El script test.sh consta de una sola l\xednea que imprime la cadena "Hello, World!" en la consola.'}),(0,a.jsx)(s.h3,{id:"ejecutar-un-script",children:"Ejecutar un Script"}),(0,a.jsx)(s.p,{children:"Puedes ejecutar un script pas\xe1ndolo como un argumento a tu shell o ejecut\xe1ndolo directamente:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:"sysadmin@localhost:~$ sh test.sh\r\nHello, World!\r\nsysadmin@localhost:~$ ./test.sh\r\n-bash: ./test.sh: Permission denied\r\nsysadmin@localhost:~$ chmod +x ./test.sh\r\nsysadmin@localhost:~$ ./test.sh\r\nHello, World!\n"})}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"En el ejemplo anterior:"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"El script se ejecuta como un argumento del shell."}),"\n",(0,a.jsx)(s.li,{children:"Luego, se intenta ejecutar el script directamente desde el shell, pero aparece el error Permission denied."}),"\n",(0,a.jsxs)(s.li,{children:["El comando ",(0,a.jsx)(s.code,{children:"chmod"})," se utiliza para cambiar los permisos de un archivo, que se explica en detalle en un cap\xedtulo posterior."]}),"\n",(0,a.jsx)(s.li,{children:"Finalmente, el script se ejecuta correctamente."}),"\n"]}),(0,a.jsx)(s.h2,{id:"shebang",children:"Shebang"}),(0,a.jsxs)(s.p,{children:["Para scripts m\xe1s complicados se indica un shell determinado especificando la ruta absoluta al int\xe9rprete como la primera l\xednea, con el prefijo ",(0,a.jsx)(s.code,{children:"#!"})," (shebang):"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:"#!/bin/sh\r\necho \u201cHello, World!\u201d\r\n\r\no\r\n\r\n```Bash\r\n#!/bin/bash\r\necho \u201cHello, World!\u201d\n"})}),(0,a.jsx)(n,{color:"blue",children:(0,a.jsxs)(s.p,{children:["Los dos caracteres ",(0,a.jsx)(s.code,{children:"#!"})," se llaman tradicionalmente el ",(0,a.jsx)(s.code,{children:"hash"})," y el ",(0,a.jsx)(s.code,{children:"bang"})," respectivamente, que conduce a la forma abreviada \xabshebang\xbb cuando se utilizan al principio de un script."]})}),(0,a.jsxs)(s.p,{children:["El ",(0,a.jsx)(s.code,{children:"shebang (hash y bang)"})," se utiliza para los scripts shell tradicionales y otros lenguajes basados en texto como ",(0,a.jsx)(s.code,{children:"Perl"}),", ",(0,a.jsx)(s.code,{children:"Ruby"})," y ",(0,a.jsx)(s.code,{children:"Python"}),"."]}),(0,a.jsx)(s.p,{children:"Cualquier archivo de texto marcado como ejecutable se ejecutar\xe1 bajo el int\xe9rprete especificado en la primera l\xednea mientras se ejecuta el script directamente."}),(0,a.jsx)(s.p,{children:"Si el script se invoca directamente como argumento a un int\xe9rprete (sh script o bash script), se utilizar\xe1 el shell proporcionado, independientemente de lo que est\xe1 en la l\xednea del shebang."}),(0,a.jsx)(n,{color:"cyan",children:(0,a.jsx)(s.p,{children:"Ayuda sentirse c\xf3modo utilizando un editor de texto antes de escribir los scripts shell, ya que se necesitar\xe1s crear los archivos de texto simple. Las herramientas de oficina tradicionales como LibreOffice, que dan salida a archivos que contienen la informaci\xf3n de formato y otra informaci\xf3n, no son adecuadas para esta tarea."})})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h2,{id:"editar-los-scripts-shell",children:"Editar los Scripts Shell"}),(0,a.jsx)(s.p,{children:"UNIX tiene muchos editores de texto, y las ventajas de uno sobre otro se debaten frecuentemente. Dos editores mencionados espec\xedficamente en el programa del curso de los aspectos esenciales de LPI son:"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"GNU nano"}),": Un editor muy sencillo y adecuado para editar peque\xf1os archivos de texto."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Visual Editor (vi)"})," o su versi\xf3n mejorada ",(0,a.jsx)(s.strong,{children:"vim"}),": Un editor muy potente con un arduo proceso de aprendizaje."]}),"\n"]}),(0,a.jsxs)(s.p,{children:["Nos centraremos en el ",(0,a.jsx)(s.strong,{children:"nano"}),"."]}),(0,a.jsx)(s.h3,{id:"usando-nano",children:"Usando nano"}),(0,a.jsx)(s.p,{children:"Para comenzar a editar un archivo con nano, usa el siguiente comando:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"nano test.sh\n"})}),(0,a.jsx)(s.p,{children:"Se abrir\xe1 una pantalla de edici\xf3n con el contenido del archivo test.sh."}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:'GNU nano 2.2.6              File: test.sh                         modified\r\n\r\n#!/bin/sh\r\n\r\necho "Hello, World!"\r\necho -n "The time is "\r\ndate\r\n                                    \r\n                                                                                \r\n^G Get Help  ^O WriteOut  ^R Read File ^Y Prev Page ^K Cut Text  ^C Cur Pos\r\n^X Exit      ^J Justify   ^W Where Is  ^V Next Page ^U UnCut Text ^T To Spell\n'})}),(0,a.jsx)(s.h4,{id:"caracter\xedsticas-de-nano",children:"Caracter\xedsticas de nano"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Escritura"}),": Para escribir en el archivo, simplemente comienza a escribir."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Moverse"}),": Usa las teclas de flecha para moverte por el archivo."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Borrar"}),": Usa el bot\xf3n Suprimir/Retroceso para borrar texto."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Comandos"}),": Los comandos de nano se muestran en la parte inferior de la pantalla."]}),"\n"]}),(0,a.jsx)(s.h4,{id:"comandos-de-nano",children:"Comandos de nano"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Salir"}),": ",(0,a.jsx)(s.code,{children:"Ctrl + X"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Guardar"}),": ",(0,a.jsx)(s.code,{children:"Ctrl + O"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Copiar texto"}),": ",(0,a.jsx)(s.code,{children:"Ctrl + K"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Pegar texto"}),": ",(0,a.jsx)(s.code,{children:"Ctrl + U"})]}),"\n"]}),(0,a.jsx)(s.h4,{id:"guardar-y-salir",children:"Guardar y Salir"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Salir:"})," Presiona ",(0,a.jsx)(s.code,{children:"Ctrl + X"}),". La parte inferior cambiar\xe1:"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:'Save modified buffer (ANSWERING "No" WILL DESTROY CHANGES)?\r\nY Yes\r\nN No           ^C Cancel\n'})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Guardar y salir:"})," Pulsa ",(0,a.jsx)(s.code,{children:"Y"})," para guardar, luego ",(0,a.jsx)(s.code,{children:"Enter"})," para confirmar el nombre del archivo."]}),"\n"]}),(0,a.jsx)(s.h3,{id:"ejemplo-de-edici\xf3n-en-nano",children:"Ejemplo de edici\xf3n en nano"}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Abir nano:"}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"nano test.sh\n"})}),(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Escribir un script sencillo:"}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:'#!/bin/sh\r\necho "Hello, World!"\r\necho -n "The time is "\r\ndate\n'})}),(0,a.jsx)(n,{children:(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-n"})," es una opci\xf3n de echo que evita que se imprima una nueva l\xednea despu\xe9s de la cadena."]}),"\n"]})}),(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Guardar sin salir:"})," Presiona ",(0,a.jsx)(s.code,{children:"Ctrl + O"}),", luego Enter."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Mover el cursor:"})," Usa las flechas para ir a la l\xednea que contiene el texto ",(0,a.jsx)(s.code,{children:"The time is"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Cortar y pegar:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Cortar"}),": Presiona ",(0,a.jsx)(s.code,{children:"Ctrl + K"})," dos veces para cortar las dos \xfaltimas l\xedneas."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Mover el cursor"}),": Coloca el cursor en la l\xednea deseada."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Pegar"}),": Presiona ",(0,a.jsx)(s.code,{children:"Ctrl + U"})," para pegar las l\xedneas cortadas."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Guardar y salir:"})," Presiona ",(0,a.jsx)(s.code,{children:"Ctrl + X"}),", luego Y para guardar y ",(0,a.jsx)(s.code,{children:"Enter"})," para confirmar."]}),"\n"]}),"\n"]}),(0,a.jsx)(s.h3,{id:"otros-comandos-\xfatiles-de-nano",children:"Otros comandos \xfatiles de nano"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Comando"}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + G"})}),(0,a.jsx)(s.td,{children:"Ayuda"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + R"})}),(0,a.jsx)(s.td,{children:"Leer un archivo"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + C"})}),(0,a.jsx)(s.td,{children:"Mostrar la posici\xf3n del cursor"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + J"})}),(0,a.jsx)(s.td,{children:"Justificar texto"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + W"})}),(0,a.jsx)(s.td,{children:"Buscar texto"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + V"})}),(0,a.jsx)(s.td,{children:"P\xe1gina siguiente"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + Y"})}),(0,a.jsx)(s.td,{children:"P\xe1gina anterior"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Ctrl + G"})}),(0,a.jsx)(s.td,{children:"Mostrar todos los comandos disponibles y ayuda"})]})]})]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h2,{id:"el-scripting-b\xe1sico",children:"El Scripting B\xe1sico"}),(0,a.jsxs)(s.p,{children:["Anteriormente en este cap\xedtulo tuviste tu primera experiencia de scripting y recibiste una introducci\xf3n a un script muy b\xe1sico que ejecuta un comando simple. El script comenz\xf3 con la l\xednea shebang, que le dice a Linux que tiene que utilizar el ",(0,a.jsx)(s.code,{children:"/bin/bash"})," (lo que es Bash) para ejecutar el script."]}),(0,a.jsx)(s.p,{children:"Aparte de ejecutar comandos, hay 3 temas que se deben conocer:"}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h3,{id:"1-variables",children:"1. Variables"}),(0,a.jsx)(s.p,{children:"Las variables son una parte esencial de cualquier lenguaje de programaci\xf3n. A continuaci\xf3n se muestra un uso muy simple de las variables:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:'#!/bin/bash\r\n\r\nANIMAL="penguin"\r\necho "My favorite animal is a $ANIMAL"\n'})}),(0,a.jsxs)(s.p,{children:["Despu\xe9s de la l\xednea shebang, hay una directiva para asignar un texto a una variable. El nombre de la variable es ",(0,a.jsx)(s.code,{children:"ANIMAL"})," y el signo de igual asigna la cadena ",(0,a.jsx)(s.code,{children:"penguin"})," (o \xabping\xfcino\xbb en espa\xf1ol). Piensa en una variable como una caja en la que puedes almacenar cosas. Despu\xe9s de ejecutar esta l\xednea, la caja llamada ",(0,a.jsx)(s.code,{children:"ANIMAL"})," contiene la palabra ",(0,a.jsx)(s.code,{children:"penguin"}),"."]}),(0,a.jsx)(s.p,{children:"Es importante que no haya ning\xfan espacio entre el nombre de la variable, el signo de igual y el valor asignado. Si colocas un espacio, obtendr\xe1s un error como \xabcommand not found\xbb. No es necesario poner la variable en may\xfasculas, pero es una convenci\xf3n \xfatil para separar las variables de los comandos que se ejecutar\xe1n."}),(0,a.jsxs)(s.p,{children:["A continuaci\xf3n, el script despliega una cadena en la consola. La cadena contiene el nombre de la variable precedido por un signo de d\xf3lar. Cuando el int\xe9rprete ve el signo de d\xf3lar, reconoce que debe sustituir el contenido de la variable, lo que se llama interpolaci\xf3n. La salida del script es ",(0,a.jsx)(s.code,{children:"My favorite animal is a penguin"})," (o \xabMi animal favorito es un ping\xfcino\xbb en espa\xf1ol)."]}),(0,a.jsx)(s.h3,{id:"asignaci\xf3n-de-variables-a-otras-variables",children:"Asignaci\xf3n de Variables a Otras Variables"}),(0,a.jsx)(s.p,{children:"Puedes asignar el contenido de una variable a otra:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:'#!/bin/bash\r\n\r\nANIMAL=penguin\r\nSOMETHING=$ANIMAL\r\necho "My favorite animal is a $SOMETHING"\n'})}),(0,a.jsxs)(s.p,{children:["En este script, ",(0,a.jsx)(s.code,{children:"ANIMAL"})," contiene la cadena penguin (sin espacios, por lo que se muestra la sintaxis alternativa sin usar comillas). ",(0,a.jsx)(s.code,{children:"SOMETHING"})," recibe el contenido de ",(0,a.jsx)(s.code,{children:"ANIMAL"})," (porque ANIMAL se precede con el signo de d\xf3lar)."]}),(0,a.jsx)(s.h3,{id:"asignar-variables-con-la-salida-de-comandos",children:"Asignar Variables con la Salida de Comandos"}),(0,a.jsx)(s.p,{children:"Otra forma de asignar una variable es utilizando la salida de otro comando:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:'#!/bin/bash\r\nCURRENT_DIRECTORY=`pwd`\r\necho "You are in $CURRENT_DIRECTORY"\n'})}),(0,a.jsxs)(s.p,{children:["Este patr\xf3n se utiliza para procesar texto. Puedes tomar el texto de una variable o un archivo de entrada y pasarlo por otro comando como ",(0,a.jsx)(s.code,{children:"sed"})," o ",(0,a.jsx)(s.code,{children:"awk"})," para extraer partes espec\xedficas y guardar el resultado en una variable."]}),(0,a.jsx)(s.h3,{id:"obtener-entrada-del-usuario",children:"Obtener Entrada del Usuario"}),(0,a.jsxs)(s.p,{children:["Puedes obtener entradas del usuario y asignarlas a una variable mediante el comando ",(0,a.jsx)(s.code,{children:"read"}),":"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:'#!/bin/bash\r\n\r\necho -n "What is your name? "\r\nread NAME\r\necho "Hello $NAME!"\n'})}),(0,a.jsxs)(s.p,{children:["El comando ",(0,a.jsx)(s.code,{children:"read"})," acepta una cadena directa desde el teclado o como parte de la redirecci\xf3n de comandos."]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h3,{id:"variables-especiales",children:"Variables Especiales"}),(0,a.jsx)(s.p,{children:"Adem\xe1s de las variables que defines, hay algunas variables especiales:"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$1"}),", ",(0,a.jsx)(s.code,{children:"$2"}),", ...: Estos representan los argumentos pasados al script. Por ejemplo:"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:'#!/bin/bash\r\necho "Hello $1"\n'})}),(0,a.jsx)(s.p,{children:"Si invocas al script con ./test.sh Linux, el resultado ser\xe1 Hello Linux."}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"$0:"})," Contiene el nombre del script."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"$?:"})," Muestra el c\xf3digo de salida del \xfaltimo comando ejecutado. ",(0,a.jsx)(s.code,{children:"Un c\xf3digo de salida de 0 significa \xabtodo est\xe1 bien\xbb"}),". Cualquier c\xf3digo mayor que 0 indica un error. Por ejemplo:"]}),"\n"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:"sysadmin@localhost:~$ grep -q root /etc/passwd\r\nsysadmin@localhost:~$ echo $?\r\n0\r\nsysadmin@localhost:~$ grep -q slartibartfast /etc/passwd\r\nsysadmin@localhost:~$ echo $?\r\n1\n"})}),(0,a.jsxs)(s.p,{children:["El comando grep busca una cadena dentro de un archivo. Con el indicador ",(0,a.jsx)(s.code,{children:"-q"})," (silencioso), devuelve ",(0,a.jsx)(s.code,{children:"0"})," si la cadena se encuentra y ",(0,a.jsx)(s.code,{children:"1"})," si no se encuentra. Esta informaci\xf3n se puede usar en condicionales para tomar decisiones basadas en la salida de otros comandos."]}),(0,a.jsx)(s.h3,{id:"establecer-el-c\xf3digo-de-salida",children:"Establecer el C\xf3digo de Salida"}),(0,a.jsx)(s.p,{children:"Puedes establecer el c\xf3digo de salida de tu propio script con el comando exit:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Bash",children:"#!/bin/bash\r\n# Something bad happened!\r\nexit 1\n"})}),(0,a.jsxs)(s.p,{children:["El comentario ",(0,a.jsx)(s.code,{children:"#"})," se utiliza para dejar notas en el script. El comando ",(0,a.jsx)(s.code,{children:"exit 1"})," devuelve el c\xf3digo de salida ",(0,a.jsx)(s.code,{children:"1"}),". Al ejecutar el script y luego introducir echo ",(0,a.jsx)(s.code,{children:"$?"}),", ver\xe1s que devuelve ",(0,a.jsx)(s.code,{children:"1"}),". Por convenci\xf3n, un c\xf3digo de salida de ",(0,a.jsx)(s.code,{children:"0"})," significa que todo est\xe1 bien, mientras que cualquier c\xf3digo mayor indica alg\xfan tipo de error, espec\xedfico para el programa."]})]})]}),(0,a.jsx)(s.h3,{id:"condicionales",children:"Condicionales"}),(0,a.jsxs)(s.p,{children:["Ahora que puedes ver y definir las variables, es hora de hacer que tus propios scripts tengan diferentes funciones basadas en pruebas, llamado ",(0,a.jsx)(s.code,{children:"branching"})," (o \xabramificaci\xf3n\xbb en espa\xf1ol). La instrucci\xf3n ",(0,a.jsx)(s.code,{children:"if"})," (o \xabsi\xbb en espa\xf1ol) es el operador b\xe1sico para implementar un branching."]}),(0,a.jsxs)(s.p,{children:["La instrucci\xf3n ",(0,a.jsx)(s.code,{children:"if"})," se ve as\xed:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"if somecommand; then\r\n  # do this if somecommand has an exit code of 0\r\nfi\n"})}),(0,a.jsxs)(s.p,{children:["El siguiente ejemplo ejecutar\xe1 ",(0,a.jsx)(s.code,{children:"somecommand"})," (en realidad, todo hasta el punto y coma) y si el c\xf3digo de salida es ",(0,a.jsx)(s.code,{children:"0"}),", entonces se ejecutar\xe1 el contenido hasta el cierre ",(0,a.jsx)(s.code,{children:"fi"}),". Usando lo que sabes acerca del ",(0,a.jsx)(s.code,{children:"grep"}),", ahora puedes escribir un script que hace cosas diferentes, basadas en la presencia de una cadena en el archivo de contrase\xf1as:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\r\n\r\nif grep -q root /etc/passwd; then\r\n  echo root is in the password file\r\nelse\r\n  echo root is missing from the password file\r\nfi\n"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"grep -q root /etc/passwd"})," busca la cadena ",(0,a.jsx)(s.code,{children:"root"})," en el archivo ",(0,a.jsx)(s.code,{children:"/etc/passwd"}),". El indicador ",(0,a.jsx)(s.code,{children:"-q"})," silencia la salida, por lo que no se muestra nada en la consola."]}),"\n"]}),(0,a.jsxs)(s.p,{children:["De los ejemplos anteriores podr\xedas recordar que el c\xf3digo de salida del ",(0,a.jsx)(s.code,{children:"grep"})," es 0 si se encuentra la cadena. El ejemplo anterior utiliza esto en una l\xednea para imprimir un mensaje si ",(0,a.jsx)(s.code,{children:"root"})," est\xe1 en el archivo ",(0,a.jsx)(s.code,{children:"passwd"}),", u otro mensaje si no es as\xed. La diferencia aqu\xed es que en lugar de un ",(0,a.jsx)(s.code,{children:"fi"})," para cerrar el bloque ",(0,a.jsx)(s.code,{children:"if"}),", hay un ",(0,a.jsx)(s.code,{children:"else"}),". Esto te permite realizar una acci\xf3n si la condici\xf3n es verdadera, y otra si la condici\xf3n es falsa. El bloque ",(0,a.jsx)(s.code,{children:"else"})," siempre debe cerrarse con la palabra clave ",(0,a.jsx)(s.code,{children:"fi"}),"."]}),(0,a.jsxs)(s.p,{children:["Otras tareas comunes son buscar la presencia de un archivo o directorio y comparar cadenas y n\xfameros. Podr\xedas iniciar un archivo de registro si no existe, o comparar el n\xfamero de l\xedneas en un archivo con la \xfaltima vez que se ejecut\xf3. El comando ",(0,a.jsx)(s.code,{children:"if"})," es claramente de ayuda aqu\xed, pero \xbfqu\xe9 comando debes usar para hacer la comparaci\xf3n?"]}),(0,a.jsx)(s.h3,{id:"comparaciones",children:"Comparaciones"}),(0,a.jsxs)(s.p,{children:["El comando ",(0,a.jsx)(s.code,{children:"test"})," te da acceso f\xe1cil a los operadores de prueba de comparaci\xf3n y archivos. Por ejemplo:"]}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Comando"}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test -f /dev/ttyS0"})}),(0,a.jsx)(s.td,{children:"0 si el archivo existe"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test ! -f /dev/ttyS0"})}),(0,a.jsx)(s.td,{children:"0 si el archivo no existe"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test -d /tmp"})}),(0,a.jsx)(s.td,{children:"0 si el directorio existe"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.code,{children:"test -x \\"}),"which ls``"]}),(0,a.jsxs)(s.td,{children:["Sustituir la ubicaci\xf3n de ",(0,a.jsx)(s.code,{children:"ls"})," y luego probar con ",(0,a.jsx)(s.code,{children:"test"}),", si el usuario puede ejecutar"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test 1 -eq 1"})}),(0,a.jsx)(s.td,{children:"0 si tiene \xe9xito la comparaci\xf3n num\xe9rica"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test ! 1 -eq 1"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.code,{children:"NO \u2013 0"})," si la comparaci\xf3n falla"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test 1 -ne 1"})}),(0,a.jsxs)(s.td,{children:["M\xe1s f\xe1cil, ejecutar ",(0,a.jsx)(s.code,{children:"test"})," si hay desigualdad num\xe9rica"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'test "a" = "a"'})}),(0,a.jsx)(s.td,{children:"0 si tiene \xe9xito la comparaci\xf3n de cadenas"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'test "a" != "a"'})}),(0,a.jsx)(s.td,{children:"0 si las cadenas son diferentes"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test 1 -eq 1 -o 2 -eq 2"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.code,{children:"-o"})," es OR: cualquiera de las opciones pueden ser igual"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test 1 -eq 1 -a 2 -eq 2"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.code,{children:"-a"})," es AND: ambas comparaciones deben ser iguales"]})]})]})]}),(0,a.jsxs)(s.p,{children:["Las comparaciones num\xe9ricas y de cadenas se tratan de manera distinta. Por ejemplo, ",(0,a.jsx)(s.code,{children:"01"})," y ",(0,a.jsx)(s.code,{children:"1"})," son iguales en comparaci\xf3n num\xe9rica, pero no en comparaci\xf3n de cadenas."]}),(0,a.jsxs)(s.p,{children:["La salida del comando ",(0,a.jsx)(s.code,{children:"test"})," es extensa, por lo que se puede usar el alias ",(0,a.jsx)(s.code,{children:"["})," (corchete cuadrado izquierdo) para simplificar:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"if [ -f /tmp/foo ]; then\n"})}),(0,a.jsx)(s.h3,{id:"instrucci\xf3n-if-con-elif",children:"Instrucci\xf3n if con elif"}),(0,a.jsx)(s.p,{children:"Para manejar m\xfaltiples condiciones, usa elif:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\nif [ "$1" = "hello" ]; then\r\n  echo "hello yourself"\r\nelif [ "$1" = "goodbye" ]; then\r\n  echo "nice to have met you"\r\n  echo "I hope to see you again"\r\nelse\r\n  echo "I didn\'t understand that"\r\nfi\n'})}),(0,a.jsxs)(s.p,{children:["Este script compara el primer argumento (",(0,a.jsx)(s.code,{children:"$1"}),"). Si es ",(0,a.jsx)(s.code,{children:'"hello"'}),", se ejecuta el primer bloque. Si es ",(0,a.jsx)(s.code,{children:'"goodbye"'}),", se ejecuta el bloque ",(0,a.jsx)(s.code,{children:"elif"}),". Si no coincide con ninguna de estas opciones, se ejecuta el bloque ",(0,a.jsx)(s.code,{children:"else"}),"."]}),(0,a.jsx)(s.h3,{id:"instrucci\xf3n-case",children:"Instrucci\xf3n case"}),(0,a.jsxs)(s.p,{children:["La instrucci\xf3n ",(0,a.jsx)(s.code,{children:"case"})," es \xfatil para pruebas m\xfaltiples:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\ncase "$1" in\r\nhello|hi)\r\n  echo "hello yourself"\r\n  ;;\r\ngoodbye)\r\n  echo "nice to have met you"s\r\n  echo "I hope to see you again"\r\n  ;;\r\n*)\r\n  echo "I didn\'t understand that"\r\nesac\n'})}),(0,a.jsxs)(s.p,{children:["En este script, ",(0,a.jsx)(s.code,{children:"case"})," compara el primer argumento (",(0,a.jsx)(s.code,{children:"$1"}),") con los patrones definidos:"]}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"hello|hi"})," coincide con ",(0,a.jsx)(s.code,{children:'"hello"'})," o ",(0,a.jsx)(s.code,{children:'"hi"'}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"goodbye"})," coincide con ",(0,a.jsx)(s.code,{children:'"goodbye"'}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"*"})," act\xfaa como ",(0,a.jsx)(s.code,{children:"else"})," y coincide con cualquier otro valor."]}),"\n"]}),(0,a.jsxs)(s.p,{children:["Cada bloque de comandos se termina con ",(0,a.jsx)(s.code,{children:";;"})," y el ",(0,a.jsx)(s.code,{children:"case"})," se cierra con ",(0,a.jsx)(s.code,{children:"esac"}),"."]}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Los argumentos no est\xe1n entre comillas en el ",(0,a.jsx)(s.code,{children:"case"}),", pero s\xed en los bloques de comandos."]}),"\n"]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h2,{id:"loops",children:"Loops"}),(0,a.jsxs)(s.p,{children:["Los loops permiten que un bloque de c\xf3digo se ejecute repetidamente. Hay dos tipos principales de loops en scripts shell: ",(0,a.jsx)(s.code,{children:"for"})," y ",(0,a.jsx)(s.code,{children:"while"}),"."]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h3,{id:"loop-for",children:"Loop for"}),(0,a.jsxs)(s.p,{children:["El loop ",(0,a.jsx)(s.code,{children:"for"})," se utiliza cuando se tiene una colecci\xf3n finita de elementos sobre los cuales iterar, como una lista de archivos o nombres. Aqu\xed hay ejemplos de uso:"]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Ejemplo 1: Lista de Servidores"})}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\nSERVERS="server_a server_b server_c"\r\nfor S in $SERVERS; do\r\n  echo "Doing something to $S"\r\ndone\n'})}),(0,a.jsxs)(s.p,{children:["En este script, ",(0,a.jsx)(s.code,{children:"SERVERS"})," contiene una lista de nombres de servidores. El loop ",(0,a.jsx)(s.code,{children:"for"})," itera sobre cada nombre, asignando cada uno a la variable ",(0,a.jsx)(s.code,{children:"S"})," y ejecutando el comando dentro del loop."]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Ejemplo 2: Lista Directa"})}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\nfor NAME in Sean Jon Isaac David; do\r\n  echo "Hello $NAME"\r\ndone\n'})}),(0,a.jsx)(s.p,{children:"Aqu\xed, la lista se pasa directamente al loop for, sin usar una variable intermedia. Esto es \xfatil para listas cortas y espec\xedficas."})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Ejemplo 3: Archivos en un Directorio"})}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\nfor S in *; do\r\n  echo "Doing something to $S"\r\ndone\n'})}),(0,a.jsxs)(s.p,{children:["En este caso, el comod\xedn ",(0,a.jsx)(s.code,{children:"*"})," expande a todos los archivos en el directorio actual. El loop for itera sobre cada archivo, realizando una acci\xf3n en cada uno."]})]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.h3,{id:"loop-while",children:"Loop while"}),(0,a.jsx)(s.p,{children:"El loop while se utiliza para ejecutar un bloque de c\xf3digo mientras una condici\xf3n sea verdadera. Es \xfatil cuando el n\xfamero de iteraciones no es conocido de antemano."}),(0,a.jsxs)(n,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Ejemplo: Contar del 0 al 9"})}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\ni=0\r\nwhile [ $i -lt 10 ]; do\r\n  echo $i\r\n  i=$(( $i + 1 ))\r\ndone\r\necho "Done counting"\n'})}),(0,a.jsx)(s.p,{children:"Explicaci\xf3n detallada:"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"i=0"})," inicializa la variable ",(0,a.jsx)(s.code,{children:"i"})," a ",(0,a.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"while [ $i -lt 10 ]"})," ejecuta el bloque de comandos mientras ",(0,a.jsx)(s.code,{children:"i"})," sea menor que ",(0,a.jsx)(s.code,{children:"10"}),", donde ",(0,a.jsx)(s.code,{children:"-lt"})," significa \xabmenor que\xbb. (Otras opciones son ",(0,a.jsx)(s.code,{children:"-gt"})," para \xabmayor que\xbb y ",(0,a.jsx)(s.code,{children:"-eq"})," para \xabigual a\xbb)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"echo $i"})," imprime el valor de ",(0,a.jsx)(s.code,{children:"i"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"i=$(( $i + 1 ))"})," incrementa ",(0,a.jsx)(s.code,{children:"i"})," en ",(0,a.jsx)(s.code,{children:"1"}),", donde ",(0,a.jsx)(s.code,{children:"$(( ))"})," se utiliza para realizar c\xe1lculos aritm\xe9ticos."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"done"})," marca el final del bloque de comandos."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:'echo "Done counting"'})," imprime un mensaje despu\xe9s de que el loop haya terminado."]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var a=n(6540);const i={},r=a.createContext(i);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);