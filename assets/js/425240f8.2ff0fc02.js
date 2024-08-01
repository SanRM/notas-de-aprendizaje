"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[2958],{9416:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=i(4848),a=i(8453);const n={title:"Empaquetamiento y Compresi\xf3n",sidebar_position:7},o=void 0,c={id:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Empaquetamiento y Compresi\xf3n",title:"Empaquetamiento y Compresi\xf3n",description:"Introducci\xf3n a la Gesti\xf3n de Archivos",source:"@site/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Empaquetamiento y Compresi\xf3n.md",sourceDirName:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials",slug:"/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Empaquetamiento y Compresi\xf3n",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Empaquetamiento y Compresi\xf3n",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Empaquetamiento y Compresi\xf3n.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Empaquetamiento y Compresi\xf3n",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Gesti\xf3n de los Archivos y Directorios",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Gesti\xf3n de los Archivos y Directorios"},next:{title:"Barras Verticales, Redirecci\xf3n y Las Expresiones Regulares",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Barras Verticales, Redirecci\xf3n y Las Expresiones Regulares"}},l={},d=[{value:"Introducci\xf3n a la Gesti\xf3n de Archivos",id:"introducci\xf3n-a-la-gesti\xf3n-de-archivos",level:2},{value:"Empaquetamiento y Compresi\xf3n",id:"empaquetamiento-y-compresi\xf3n",level:3},{value:"Beneficios del Empaquetamiento y la Compresi\xf3n",id:"beneficios-del-empaquetamiento-y-la-compresi\xf3n",level:2},{value:"Comprimir los archivos",id:"comprimir-los-archivos",level:2},{value:"Concepto de Compresi\xf3n",id:"concepto-de-compresi\xf3n",level:3},{value:"<strong>La compresi\xf3n puede ser:</strong>",id:"la-compresi\xf3n-puede-ser",level:4},{value:"Ejemplos de Herramientas de Compresi\xf3n en Linux",id:"ejemplos-de-herramientas-de-compresi\xf3n-en-linux",level:2},{value:"Gzip",id:"gzip",level:3},{value:"Uso de gzip en Canal de Entrada/Salida",id:"uso-de-gzip-en-canal-de-entradasalida",level:3},{value:"bzip2",id:"bzip2",level:3},{value:"Empaquetando Archivos",id:"empaquetando-archivos",level:2},{value:"Modos de Operaci\xf3n de tar",id:"modos-de-operaci\xf3n-de-tar",level:3},{value:"Ejemplo de Creaci\xf3n de un Archivo tar",id:"ejemplo-de-creaci\xf3n-de-un-archivo-tar",level:3},{value:"Comprimir Archivos tar",id:"comprimir-archivos-tar",level:3},{value:"Listar Contenido de un Archivo tar Comprimido",id:"listar-contenido-de-un-archivo-tar-comprimido",level:3},{value:"Descomprimir y Extraer Archivos tar",id:"descomprimir-y-extraer-archivos-tar",level:3},{value:"Precauci\xf3n con el Orden de las Opciones",id:"precauci\xf3n-con-el-orden-de-las-opciones",level:3},{value:"Extraer Archivos Espec\xedficos",id:"extraer-archivos-espec\xedficos",level:3},{value:"Archivos ZIP",id:"archivos-zip",level:2},{value:"Prop\xf3sito del Empaquetamiento con ZIP",id:"prop\xf3sito-del-empaquetamiento-con-zip",level:3},{value:"Uso B\xe1sico del Comando Zip",id:"uso-b\xe1sico-del-comando-zip",level:3},{value:"Recursividad en ZIP",id:"recursividad-en-zip",level:3},{value:"Listar Contenido de un Archivo ZIP",id:"listar-contenido-de-un-archivo-zip",level:3},{value:"Extracci\xf3n de Archivos ZIP",id:"extracci\xf3n-de-archivos-zip",level:3}];function t(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Card:i,Row:n}=s;return i||h("Card",!0),n||h("Row",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"introducci\xf3n-a-la-gesti\xf3n-de-archivos",children:"Introducci\xf3n a la Gesti\xf3n de Archivos"}),(0,r.jsx)(s.h3,{id:"empaquetamiento-y-compresi\xf3n",children:"Empaquetamiento y Compresi\xf3n"}),(0,r.jsx)(s.p,{children:"La gesti\xf3n de archivos en la l\xednea de comandos a menudo involucra empaquetamiento y compresi\xf3n, que son dos procesos distintos pero relacionados:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Empaquetamiento"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Compresi\xf3n"})})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Combina varios archivos en uno solo, reduciendo la sobrecarga y facilitando la transmisi\xf3n."}),(0,r.jsx)(s.td,{children:"Reduce el tama\xf1o de los archivos eliminando informaci\xf3n redundante."})]})})]}),(0,r.jsx)(s.p,{children:"Se puede empaquetar varios archivos en uno y luego comprimir el archivo resultante, o comprimir archivos individuales."}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i,{color:"darkBlue",children:(0,r.jsxs)(s.p,{children:["El proceso de empaquetamiento y compresi\xf3n se conoce como ",(0,r.jsx)(s.code,{children:"empaquetamiento de archivos"}),"."]})}),(0,r.jsx)(i,{color:"blue",children:(0,r.jsxs)(s.p,{children:["Mientras que la compresi\xf3n de archivos individuales se denomina ",(0,r.jsx)(s.code,{children:"compresi\xf3n"}),"."]})}),(0,r.jsx)(i,{color:"cyan",children:(0,r.jsxs)(s.p,{children:["Descomprimir un archivo empaquetado para extraer uno o m\xe1s archivos se llama ",(0,r.jsx)(s.code,{children:"desempaquetado"}),"."]})})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"beneficios-del-empaquetamiento-y-la-compresi\xf3n",children:"Beneficios del Empaquetamiento y la Compresi\xf3n"}),(0,r.jsx)(s.p,{children:"Aunque el espacio en disco es barato, empaquetar y comprimir archivos sigue siendo \xfatil:"}),(0,r.jsx)(i,{children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Facilidad de Distribuci\xf3n:"})," Para distribuir un gran n\xfamero de archivos, como c\xf3digo fuente o documentos, es m\xe1s pr\xe1ctico descargar un solo archivo empaquetado en lugar de archivos individuales."]}),"\n"]})}),(0,r.jsx)(i,{children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Gesti\xf3n de Archivos de Registro:"})," Los archivos de registro pueden llenar r\xe1pidamente el espacio en disco. Dividirlos por fecha y comprimir las versiones antiguas ayuda a gestionar el almacenamiento."]}),"\n"]})}),(0,r.jsx)(i,{children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Copias de Seguridad:"})," Mantener directorios completos en un solo archivo empaquetado facilita la gesti\xf3n de copias de seguridad en lugar de manejar cada archivo individualmente."]}),"\n"]})}),(0,r.jsx)(i,{children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Transmisi\xf3n Eficiente:"})," Dispositivos como cintas funcionan mejor con una transmisi\xf3n secuencial de datos en lugar de archivos individuales. Comprimir archivos antes de enviarlos y descomprimirlos en el destino puede ser m\xe1s r\xe1pido, especialmente en redes lentas."]}),"\n"]})})]}),(0,r.jsx)(s.p,{children:"Como administrador de Linux, es importante conocer las herramientas para empaquetar y comprimir archivos."})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"comprimir-los-archivos",children:"Comprimir los archivos"}),(0,r.jsx)(s.h3,{id:"concepto-de-compresi\xf3n",children:"Concepto de Compresi\xf3n"}),(0,r.jsx)(s.p,{children:"La compresi\xf3n de archivos reduce su tama\xf1o eliminando la redundancia. Los archivos pueden ser comprimidos para facilitar su transmisi\xf3n o almacenamiento y se pueden descomprimir para su uso posterior."}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h4,{id:"la-compresi\xf3n-puede-ser",children:(0,r.jsx)(s.strong,{children:"La compresi\xf3n puede ser:"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Lossless (sin p\xe9rdida)"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Lossy (con p\xe9rdida)"})})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"La informaci\xf3n original se conserva intacta despu\xe9s de descomprimir el archivo."}),(0,r.jsx)(s.td,{children:"Se eliminan algunas partes de la informaci\xf3n para reducir el tama\xf1o, lo que puede resultar en diferencias notables respecto al archivo original."})]})})]})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"ejemplos-de-herramientas-de-compresi\xf3n-en-linux",children:"Ejemplos de Herramientas de Compresi\xf3n en Linux"}),(0,r.jsx)(s.h3,{id:"gzip",children:"Gzip"}),(0,r.jsx)(s.p,{children:"Gzip es una herramienta de compresi\xf3n de archivos que utiliza el algoritmo DEFLATE. Los archivos comprimidos tienen la extensi\xf3n .gz."}),(0,r.jsxs)(i,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Comprime un archivo y reemplaza el original con uno nuevo que tiene la extensi\xf3n .gz."}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",metastring:"title='Ejemplo'",children:"bob:tmp $ gzip access_log\r\nbob:tmp $ ls -l access_log*\r\n-rw-r--r-- 1 bob bob  1234567 Mar  1 12:34 access_log.gz\n"})})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.p,{children:"Muestra la relaci\xf3n de compresi\xf3n con el par\xe1metro -l:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ gzip -l access_log.gz\r\n      compressed     uncompressed  ratio uncompressed_name\r\n           26080           372063  93.0% access_log\n"})})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.p,{children:"Descomprime con gunzip:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ gunzip access_log.gz\r\nbob:tmp $ ls -l access_log*\r\n-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log\n"})})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h3,{id:"uso-de-gzip-en-canal-de-entradasalida",children:"Uso de gzip en Canal de Entrada/Salida"}),(0,r.jsx)(s.p,{children:"gzip tambi\xe9n puede comprimir datos recibidos a trav\xe9s de un canal de entrada y escribir la salida en un archivo:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ mysqldump -A | gzip > database_backup.gz\r\nbob:tmp $ gzip -l database_backup.gz\r\n         compressed        uncompressed  ratio uncompressed_name\r\n              76866             1028003  92.5% database_backup\n"})})]})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h3,{id:"bzip2",children:"bzip2"}),(0,r.jsx)(s.p,{children:"Usa un algoritmo diferente (Burrows-Wheeler) que puede ofrecer una mejor compresi\xf3n a cambio de mayor uso de CPU. Los archivos tienen la extensi\xf3n .bz o .bz2."}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.p,{children:"Ejemplo de compresi\xf3n:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ bzip2 access_log\r\nbob:tmp $ ls -l access_log*\r\n-rw-r--r-- 1 sean sean 18145 Oct 11 21:24 access_log.bz2\n"})})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)(s.p,{children:"Descomprimir con bunzip2:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ bunzip2 access_log.bz2\r\nbob:tmp $ ls -l access_log*\r\n-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log\n"})})]})]}),(0,r.jsx)(s.p,{children:"La compresi\xf3n de archivos es crucial para ahorrar espacio y facilitar la transmisi\xf3n. Las herramientas gzip y bzip2 son comunes en Linux, cada una con sus propias ventajas seg\xfan el tipo de compresi\xf3n y el uso previsto."})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"empaquetando-archivos",children:"Empaquetando Archivos"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Concepto de Empaquetamiento"})}),(0,r.jsxs)(s.p,{children:["Empaquetar archivos permite combinar m\xfaltiples archivos en uno solo, facilitando su transmisi\xf3n o almacenamiento. En UNIX, la herramienta tradicional para esto es ",(0,r.jsx)(s.code,{children:"tar"})," (Tape Archive). tar se utiliza para crear un solo archivo a partir de varios archivos y puede dividirse nuevamente en los archivos originales."]}),(0,r.jsx)(s.h3,{id:"modos-de-operaci\xf3n-de-tar",children:"Modos de Operaci\xf3n de tar"}),(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Crear (c):"})," Genera un nuevo archivo tar a partir de varios archivos."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Extraer (x):"})," Extrae uno o m\xe1s archivos de un archivo tar."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Listar (t):"})," Muestra el contenido del archivo tar sin extraer."]}),"\n"]}),(0,r.jsx)(s.h3,{id:"ejemplo-de-creaci\xf3n-de-un-archivo-tar",children:"Ejemplo de Creaci\xf3n de un Archivo tar"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -cf access_logs.tar access_log*\r\nbob:tmp $ ls -l access_logs.tar\r\n-rw-rw-r-- 1 sean sean 542720 Oct 12 21:42 access_logs.tar\n"})}),(0,r.jsxs)(s.p,{children:["En este ejemplo, tar crea un archivo ",(0,r.jsx)(s.code,{children:"access_logs.tar"})," a partir de varios archivos ",(0,r.jsx)(s.code,{children:"access_log*"}),". La opci\xf3n ",(0,r.jsx)(s.code,{children:"c"})," indica creaci\xf3n y ",(0,r.jsx)(s.code,{children:"f"})," especifica el nombre del archivo tar."]}),(0,r.jsx)(s.h3,{id:"comprimir-archivos-tar",children:"Comprimir Archivos tar"}),(0,r.jsxs)(s.p,{children:["Para facilitar la transmisi\xf3n, los archivos tar pueden ser comprimidos. Esto se puede hacer en un solo paso usando la opci\xf3n ",(0,r.jsx)(s.code,{children:"z"})," para ",(0,r.jsx)(s.code,{children:"gzip"})," o ",(0,r.jsx)(s.code,{children:"j"})," para ",(0,r.jsx)(s.code,{children:"bzip2"}),":"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -czf access_logs.tar.gz access_log*\r\nbob:tmp $ ls -l access_logs.tar.gz\r\n-rw-rw-r-- 1 sean sean 46229 Oct 12 21:50 access_logs.tar.gz\r\nbob:tmp $ gzip -l access_logs.tar.gz\r\n         compressed        uncompressed  ratio uncompressed_name\r\n              46229              542720  91.5% access_logs.tar\n"})}),(0,r.jsx)(s.p,{children:"El archivo resultante access_logs.tar.gz es mucho m\xe1s peque\xf1o que el archivo tar original."}),(0,r.jsx)(s.h3,{id:"listar-contenido-de-un-archivo-tar-comprimido",children:"Listar Contenido de un Archivo tar Comprimido"}),(0,r.jsxs)(s.p,{children:["Puedes ver el contenido de un archivo tar comprimido usando ",(0,r.jsx)(s.code,{children:"t"}),":"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -tjf access_logs.tbz\r\nlogs/\r\nlogs/access_log.3\r\nlogs/access_log.1\r\nlogs/access_log.4\r\nlogs/access_log\r\nlogs/access_log.2\n"})}),(0,r.jsx)(s.h3,{id:"descomprimir-y-extraer-archivos-tar",children:"Descomprimir y Extraer Archivos tar"}),(0,r.jsxs)(s.p,{children:["Para descomprimir y extraer un archivo ",(0,r.jsx)(s.code,{children:"tar"}),", se usa la opci\xf3n ",(0,r.jsx)(s.code,{children:"x"})," junto con la opci\xf3n correspondiente a la compresi\xf3n (",(0,r.jsx)(s.code,{children:"z"})," para gzip, ",(0,r.jsx)(s.code,{children:"j"})," para bzip2):"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -xjf access_logs.tbz\r\nbob:tmp $ ls -l\r\ntotal 36\r\n-rw-rw-r-- 1 sean sean 30043 Oct 14 13:27 access_logs.tbz\r\ndrwxrwxr-x 2 sean sean  4096 Oct 14 13:26 logs\r\nbob:tmp $ ls -l logs\r\ntotal 536\r\n-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log\r\n-rw-r--r-- 1 sean sean    362 Oct 12 21:41 access_log.1\r\n-rw-r--r-- 1 sean sean 153813 Oct 12 21:41 access_log.2\r\n-rw-r--r-- 1 sean sean   1136 Oct 12 21:41 access_log.3\r\n-rw-r--r-- 1 sean sean    784 Oct 12 21:41 access_log.4\n"})}),(0,r.jsx)(s.h3,{id:"precauci\xf3n-con-el-orden-de-las-opciones",children:"Precauci\xf3n con el Orden de las Opciones"}),(0,r.jsxs)(s.p,{children:["Es importante mantener la opci\xf3n ",(0,r.jsx)(s.code,{children:"-f"})," al final para evitar errores:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -xjfv access_logs.tbz\r\ntar (child): v: Cannot open: No such file or directory\r\ntar (child): Error is not recoverable: exiting now\r\ntar: Child returned status 2\r\ntar: Error is not recoverable: exiting now\n"})}),(0,r.jsx)(s.h3,{id:"extraer-archivos-espec\xedficos",children:"Extraer Archivos Espec\xedficos"}),(0,r.jsx)(s.p,{children:"Puedes especificar archivos espec\xedficos para extraer:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ tar -xjvf access_logs.tbz logs/access_log\r\nlogs/access_log\n"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["En este caso, solo se extrae el archivo ",(0,r.jsx)(s.code,{children:"access_log"})," del directorio ",(0,r.jsx)(s.code,{children:"logs"}),"."]}),"\n"]}),(0,r.jsx)(i,{color:"cyan",children:(0,r.jsx)(s.p,{children:"Tar es una herramienta poderosa para empaquetar y comprimir archivos en UNIX. Ofrece flexibilidad en la creaci\xf3n, extracci\xf3n y listado de archivos tar, con opciones adicionales para compresi\xf3n y manejo detallado de los archivos."})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(s.h2,{id:"archivos-zip",children:"Archivos ZIP"}),(0,r.jsx)(s.h3,{id:"prop\xf3sito-del-empaquetamiento-con-zip",children:"Prop\xf3sito del Empaquetamiento con ZIP"}),(0,r.jsx)(s.p,{children:"En el mundo de Microsoft, la utilidad est\xe1ndar para empaquetar archivos es el formato ZIP. Aunque no es tan com\xfan en Linux, tambi\xe9n es compatible mediante los comandos zip y unzip. A diferencia de tar y gzip/gunzip, donde los mismos comandos y opciones sirven para creaci\xf3n y extracci\xf3n, en zip cada opci\xf3n tiene diferentes significados."}),(0,r.jsx)(s.h3,{id:"uso-b\xe1sico-del-comando-zip",children:"Uso B\xe1sico del Comando Zip"}),(0,r.jsx)(s.p,{children:"El modo predeterminado de zip es a\xf1adir y comprimir archivos en un archivo ZIP:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ zip logs.zip logs/*\r\n  adding: logs/access_log (deflated 93%)\r\n  adding: logs/access_log.1 (deflated 62%)\r\n  adding: logs/access_log.2 (deflated 88%)\r\n  adding: logs/access_log.3 (deflated 73%)\r\n  adding: logs/access_log.4 (deflated 72%)\n"})}),(0,r.jsx)(s.p,{children:"El primer argumento, logs.zip, es el nombre del archivo ZIP. Luego, se a\xf1aden los archivos especificados. La salida muestra cada archivo a\xf1adido y su tasa de compresi\xf3n."}),(0,r.jsx)(s.h3,{id:"recursividad-en-zip",children:"Recursividad en ZIP"}),(0,r.jsx)(s.p,{children:"Por defecto, zip no opera de manera recursiva en subdirectorios. Para incluir archivos dentro de subdirectorios, se utiliza la opci\xf3n -r:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ zip -r logs.zip logs\r\n  adding: logs/ (stored 0%)\r\n  adding: logs/access_log.3 (deflated 73%)\r\n  adding: logs/access_log.1 (deflated 62%)\r\n  adding: logs/access_log.4 (deflated 72%)\r\n  adding: logs/access_log (deflated 93%)\r\n  adding: logs/access_log.2 (deflated 88%)\n"})}),(0,r.jsxs)(s.p,{children:["En este ejemplo, -r asegura que todos los archivos y subdirectorios dentro de ",(0,r.jsx)(s.code,{children:"logs"})," se incluyan en el archivo ZIP."]}),(0,r.jsx)(s.h3,{id:"listar-contenido-de-un-archivo-zip",children:"Listar Contenido de un Archivo ZIP"}),(0,r.jsx)(s.p,{children:"Para listar los archivos dentro de un archivo ZIP, se utiliza unzip con la opci\xf3n -l:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ unzip -l logs.zip\r\nArchive:  logs.zip\r\n  Length      Date    Time    Name\r\n---------  ---------- -----   ----\r\n        0  10-14-2013 14:07   logs/\r\n     1136  10-14-2013 14:07   logs/access_log.3\r\n      362  10-14-2013 14:07   logs/access_log.1\r\n      784  10-14-2013 14:07   logs/access_log.4\r\n    90703  10-14-2013 14:07   logs/access_log\r\n   153813  10-14-2013 14:07   logs/access_log.2\r\n---------                     -------\r\n   246798                     6 files\n"})}),(0,r.jsx)(s.h3,{id:"extracci\xf3n-de-archivos-zip",children:"Extracci\xf3n de Archivos ZIP"}),(0,r.jsx)(s.p,{children:"Para extraer los archivos, simplemente se utiliza unzip:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ unzip logs.zip\r\nArchive:  logs.zip\r\n   creating: logs/\r\n  inflating: logs/access_log.3\r\n  inflating: logs/access_log.1\r\n  inflating: logs/access_log.4\r\n  inflating: logs/access_log\r\n  inflating: logs/access_log.2\n"})}),(0,r.jsx)(s.p,{children:"Esto extrae todos los archivos del archivo ZIP al directorio actual."}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Se pueden especificar archivos individuales o patrones para extraer archivos espec\xedficos:"}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"bob:tmp $ unzip logs.zip logs/access_log\r\nArchive:  logs.zip\r\n  inflating: logs/access_log\r\n\r\nbob:tmp $ unzip logs.zip logs/access_log.*\r\nArchive:  logs.zip\r\n  inflating: logs/access_log.3\r\n  inflating: logs/access_log.1\r\n  inflating: logs/access_log.4\r\n  inflating: logs/access_log.2\n"})}),(0,r.jsx)(i,{children:(0,r.jsx)(s.p,{children:"El uso de zip y unzip en Linux permite la creaci\xf3n y extracci\xf3n de archivos empaquetados, similar a tar y gzip/gunzip, pero con diferencias en las opciones y funcionalidades. Las p\xe1ginas man de zip y unzip ofrecen detalles adicionales sobre funcionalidades avanzadas como la sustituci\xf3n de archivos dentro del ZIP, diferentes niveles de compresi\xf3n y cifrado."})})]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var r=i(6540);const a={},n=r.createContext(a);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);