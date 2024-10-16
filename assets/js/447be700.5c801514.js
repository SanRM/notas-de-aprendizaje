"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[4652],{4529:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(4848),s=n(8453);const a={title:"Configuraci\xf3n de la red",sidebar_position:12},o=void 0,d={id:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Configuraci\xf3n de la red",title:"Configuraci\xf3n de la red",description:"Configuraci\xf3n de la Red",source:"@site/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Configuraci\xf3n de la red.md",sourceDirName:"Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials",slug:"/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Configuraci\xf3n de la red",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Configuraci\xf3n de la red",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Configuraci\xf3n de la red.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1728966437e3,sidebarPosition:12,frontMatter:{title:"Configuraci\xf3n de la red",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Gestion de paquetes y procesos",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Gesti\xf3n de paquetes y procesos"},next:{title:"Seguridad del sistema y del usuario",permalink:"/notas-de-aprendizaje/docs/Sistemas operativos/Linux/C\xe1pitulos NDG Linux Essentials/Seguridad del sistema y del usuario"}},c={},l=[{value:"Configuraci\xf3n de la Red",id:"configuraci\xf3n-de-la-red",level:2},{value:"Conceptos B\xe1sicos",id:"conceptos-b\xe1sicos",level:3},{value:"Terminolog\xeda B\xe1sica de la Red",id:"terminolog\xeda-b\xe1sica-de-la-red",level:3},{value:"Terminolog\xeda de las Funciones de Redes",id:"terminolog\xeda-de-las-funciones-de-redes",level:3},{value:"Las Direcciones IP",id:"las-direcciones-ip",level:3},{value:"Configurando los Dispositivos de Red",id:"configurando-los-dispositivos-de-red",level:2},{value:"Asignaci\xf3n Est\xe1tica",id:"asignaci\xf3n-est\xe1tica",level:3},{value:"Asignaci\xf3n Din\xe1mica",id:"asignaci\xf3n-din\xe1mica",level:3},{value:"Configurar la Red usando una GUI",id:"configurar-la-red-usando-una-gui",level:3},{value:"Network Manager",id:"network-manager",level:4},{value:"Configurar la Red usando el Archivo de Configuraci\xf3n",id:"configurar-la-red-usando-el-archivo-de-configuraci\xf3n",level:3},{value:"ifcfg",id:"ifcfg",level:4},{value:"El Archivo Primario de Configuraci\xf3n de IPv4",id:"el-archivo-primario-de-configuraci\xf3n-de-ipv4",level:4},{value:"El Archivo Primario de Configuraci\xf3n de IPv6",id:"el-archivo-primario-de-configuraci\xf3n-de-ipv6",level:4},{value:"Domain Name Service (DNS)",id:"domain-name-service-dns",level:2},{value:"Resoluci\xf3n de Nombres",id:"resoluci\xf3n-de-nombres",level:3},{value:"Los Archivos Adicionales de Configuraci\xf3n de Red",id:"los-archivos-adicionales-de-configuraci\xf3n-de-red",level:3},{value:"Reiniciar la Red",id:"reiniciar-la-red",level:2},{value:"Las Herramientas de Red",id:"las-herramientas-de-red",level:3},{value:"Regresar a la M\xe1quina Local",id:"regresar-a-la-m\xe1quina-local",level:2}];function t(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Card:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"configuraci\xf3n-de-la-red",children:"Configuraci\xf3n de la Red"}),"\n",(0,r.jsx)(i.h3,{id:"conceptos-b\xe1sicos",children:"Conceptos B\xe1sicos"}),"\n",(0,r.jsx)(i.p,{children:"La configuraci\xf3n de la red en Linux implica ajustar varios par\xe1metros para asegurar que los dispositivos puedan comunicarse de manera efectiva en una red local y a trav\xe9s de Internet."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Esta configuraci\xf3n puede realizarse mediante interfaces gr\xe1ficas de usuario (GUI) o archivos de configuraci\xf3n espec\xedficos."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h3,{id:"terminolog\xeda-b\xe1sica-de-la-red",children:"Terminolog\xeda B\xe1sica de la Red"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Red"}),": Conjunto de computadoras y otros dispositivos interconectados que pueden comunicarse y compartir recursos."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Host"}),": Dispositivo en una red, como una computadora o un servidor."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Nodo"}),": Punto de intersecci\xf3n dentro de una red."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Protocolo"}),": Conjunto de reglas que gobiernan la comunicaci\xf3n entre dispositivos en una red."]}),"\n"]}),(0,r.jsx)(i.h3,{id:"terminolog\xeda-de-las-funciones-de-redes",children:"Terminolog\xeda de las Funciones de Redes"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Gateway"}),": Dispositivo que act\xfaa como punto de entrada o salida a otra red."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"DNS (Domain Name Service)"}),": Sistema que traduce nombres de dominio a direcciones IP."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"DHCP (Dynamic Host Configuration Protocol)"}),": Protocolo que asigna din\xe1micamente direcciones IP a dispositivos en una red."]}),"\n"]}),(0,r.jsx)(i.h3,{id:"las-direcciones-ip",children:"Las Direcciones IP"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"IPv4"}),": Direcci\xf3n IP de 32 bits, com\xfanmente representada como cuatro octetos separados por puntos (e.g., 192.168.1.1)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"IPv6"}),": Direcci\xf3n IP de 128 bits, representada como ocho grupos de cuatro d\xedgitos hexadecimales separados por dos puntos (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)."]}),"\n"]}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h2,{id:"configurando-los-dispositivos-de-red",children:"Configurando los Dispositivos de Red"}),(0,r.jsx)(i.h3,{id:"asignaci\xf3n-est\xe1tica",children:"Asignaci\xf3n Est\xe1tica"}),(0,r.jsx)(i.p,{children:"Configurar manualmente la direcci\xf3n IP, m\xe1scara de red, gateway y DNS."}),(0,r.jsx)(i.h3,{id:"asignaci\xf3n-din\xe1mica",children:"Asignaci\xf3n Din\xe1mica"}),(0,r.jsxs)(i.p,{children:["Utilizar ",(0,r.jsx)(i.strong,{children:"DHCP"})," para obtener autom\xe1ticamente una direcci\xf3n IP y otros par\xe1metros de red."]}),(0,r.jsx)(i.h3,{id:"configurar-la-red-usando-una-gui",children:"Configurar la Red usando una GUI"}),(0,r.jsx)(i.h4,{id:"network-manager",children:"Network Manager"}),(0,r.jsx)(i.p,{children:"Herramienta GUI en muchas distribuciones de Linux para configurar la red. Permite configurar conexiones Ethernet, Wi-Fi, VPN y m\xe1s."}),(0,r.jsx)(i.h3,{id:"configurar-la-red-usando-el-archivo-de-configuraci\xf3n",children:"Configurar la Red usando el Archivo de Configuraci\xf3n"}),(0,r.jsx)(i.h4,{id:"ifcfg",children:"ifcfg"}),(0,r.jsxs)(i.p,{children:["En distribuciones basadas en Red Hat, los archivos de configuraci\xf3n de red est\xe1n ubicados en ",(0,r.jsx)(i.code,{children:"/etc/sysconfig/network-scripts/"}),"."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# /etc/sysconfig/network-scripts/ifcfg-eth0\r\nDEVICE=eth0\r\nBOOTPROTO=static\r\nIPADDR=192.168.1.100\r\nNETMASK=255.255.255.0\r\nGATEWAY=192.168.1.1\r\nDNS1=8.8.8.8\n"})}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h4,{id:"el-archivo-primario-de-configuraci\xf3n-de-ipv4",children:"El Archivo Primario de Configuraci\xf3n de IPv4"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"ifcfg-eth0"}),": Contiene la configuraci\xf3n de una interfaz de red espec\xedfica. Aqu\xed se define la direcci\xf3n IP, la m\xe1scara de red y otros par\xe1metros."]})]}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h4,{id:"el-archivo-primario-de-configuraci\xf3n-de-ipv6",children:"El Archivo Primario de Configuraci\xf3n de IPv6"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"ifcfg-eth0"}),": Similar al archivo de configuraci\xf3n de IPv4, pero incluye par\xe1metros espec\xedficos de IPv6."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# /etc/sysconfig/network-scripts/ifcfg-eth0\r\nDEVICE=eth0 # Nombre de la interfaz\r\nBOOTPROTO=static # Protocolo de arranque\r\nIPV6INIT=yes # Habilitar IPv6\r\nIPV6ADDR=2001:db8::1/64 # Direcci\xf3n IPv6\r\nIPV6_DEFAULTGW=2001:db8::ff # Gateway IPv6\n"})})]}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h2,{id:"domain-name-service-dns",children:"Domain Name Service (DNS)"}),(0,r.jsx)(i.h3,{id:"resoluci\xf3n-de-nombres",children:"Resoluci\xf3n de Nombres"}),(0,r.jsxs)(i.p,{children:["Traduce nombres de dominio a direcciones IP. La configuraci\xf3n DNS se encuentra en ",(0,r.jsx)(i.code,{children:"/etc/resolv.conf"}),"."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# /etc/resolv.conf\r\nnameserver 8.8.8.8\r\nnameserver 8.8.4.4\n"})}),(0,r.jsx)(i.h3,{id:"los-archivos-adicionales-de-configuraci\xf3n-de-red",children:"Los Archivos Adicionales de Configuraci\xf3n de Red"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"hosts:"})}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Archivo ubicado en ",(0,r.jsx)(i.code,{children:"/etc/hosts"})," que asocia nombres de dominio a direcciones IP."]}),"\n"]})]}),(0,r.jsxs)(n,{children:[(0,r.jsx)(i.h2,{id:"reiniciar-la-red",children:"Reiniciar la Red"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Comando systemctl:"})}),(0,r.jsx)(i.p,{children:"Utilizado para reiniciar servicios de red en sistemas basados en systemd."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"sudo systemctl restart network\n"})}),(0,r.jsx)(i.h3,{id:"las-herramientas-de-red",children:"Las Herramientas de Red"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"ifconfig"}),": Muestra informaci\xf3n sobre las interfaces de red."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"ifconfig eth0\r\nifconfig eth0 up\r\nifconfig eth0 down\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"route"}),"\r\nMuestra o manipula la tabla de enrutamiento IP."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"route -n\r\nroute add default gw 192.168.1.1\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ping"})}),(0,r.jsxs)(i.p,{children:["El comando ",(0,r.jsx)(i.code,{children:"ping"})," se utiliza para verificar la conectividad de red enviando paquetes a un host remoto y esperando una respuesta."]}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Si el host responde, la conectividad es exitosa."}),"\n",(0,r.jsx)(i.li,{children:"Si no hay respuesta, puede haber un problema de red."}),"\n",(0,r.jsx)(i.li,{children:"Se puede utilizar una direcci\xf3n IP o un nombre de dominio."}),"\n"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"ping 8.8.8.8\r\nping google.com\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"netstat"}),"\r\nMuestra conexiones de red, tablas de enrutamiento y estad\xedsticas de interfaz."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"netstat -tuln\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"dig"}),"\r\nHerramienta de l\xednea de comandos para realizar consultas DNS, como buscar registros de DNS."]}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Se puede utilizar una direcci\xf3n IP o un nombre de dominio."}),"\n",(0,r.jsx)(i.li,{children:"Proporciona informaci\xf3n detallada sobre la respuesta."}),"\n",(0,r.jsx)(i.li,{children:"Se puede utilizar para verificar la configuraci\xf3n de DNS."}),"\n"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"dig google.com\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"host"}),"\r\nHerramienta de l\xednea de comandos para realizar consultas DNS, normalmente utilizada para buscar la direcci\xf3n IP de un nombre de dominio."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"host google.com\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ssh"})}),(0,r.jsxs)(i.p,{children:["El comando ",(0,r.jsx)(i.code,{children:"ssh"})," se utiliza para iniciar una sesi\xf3n segura en un host remoto, permitiendo la ejecuci\xf3n de comandos en la m\xe1quina remota."]}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Se puede utilizar una direcci\xf3n IP o un nombre de dominio."}),"\n",(0,r.jsx)(i.li,{children:"Se puede especificar un usuario y un puerto."}),"\n",(0,r.jsx)(i.li,{children:"Se puede utilizar para transferir archivos de forma segura."}),"\n",(0,r.jsx)(i.li,{children:"Utiliza el protocolo SSH (Secure Shell)."}),"\n"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"ssh user@hostname\r\nAlgoritmo RSA de Clave P\xfablica\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Seguridad"}),"\r\nUtilizado SSH para asegurar la comunicaci\xf3n entre el cliente y el servidor."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"ssh-keygen -t rsa\n"})}),(0,r.jsx)(i.hr,{}),(0,r.jsx)(i.h2,{id:"regresar-a-la-m\xe1quina-local",children:"Regresar a la M\xe1quina Local"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Comando exit"}),"\r\nFinaliza la sesi\xf3n SSH y regresa a la m\xe1quina local."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"exit\n"})})]})]})]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var r=n(6540);const s={},a=r.createContext(s);function o(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);