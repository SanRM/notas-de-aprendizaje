---

title: Herramientas y aplicaciones de código abierto
sidebar_position: 2

---

<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/1-LPI-Graphics.png" height="300" />

<p>
## ¿Lo sabías? ¡Todas estas compañías ejecutan sobre Linux!
 
Amazon, Facebook, Google, IBM, Microsoft, Netflix, Tesla, Twitter, Uber, Walmart, y muchas más, ejecutan sobre Linux. 

¡Linux es el sistema operativo más popular en la nube!

</p>

</Row> 

<Card>
    
## Las principales aplicaciones de código abierto

El kernel de Linux es altamente versátil y puede ejecutar una amplia gama de software en diversas plataformas de hardware. 

Una computadora con Linux puede funcionar como servidor manejando datos para otros o como escritorio, permitiendo la interacción directa del usuario. También puede usarse para desarrollo de software o para ejecutar múltiples roles según cómo se configuren las aplicaciones.

- Una de las principales ventajas de Linux es la capacidad de simular entornos de producción en hardware reducido, lo que permite desarrollar, probar y verificar aplicaciones de manera eficiente y económica. 

### El software de Linux cae generalmente en una de tres categorías:

| Software de servidor | Software de escritorio | Herramientas |
| --- | --- | --- |
| software que no tiene ninguna interacción directa con el monitor y el teclado de la máquina en la que se ejecuta. Su propósito es servir de información a otras computadoras llamados clientes. A veces el software de servidor puede no interactuar con otros equipos, sin embrago, va a estar ahí sentado y "procesando" datos. | un navegador web, editor de texto, reproductor de música u otro software con el que tú interactúas. En muchos casos, como un navegador web, el software consultará a un servidor en el otro extremo e interpretará los datos para ti. Aquí, el software de escritorio es el cliente. | una categoría adicional de software que existe para que sea más fácil gestionar el sistema. Puedes tener una herramienta que te ayude a configurar la pantalla o algo que proporcione un shell de Linux o incluso herramientas más sofisticadas que convierten el código fuente en algo que la computadora pueda ejecutar.| 

</Card>

<Card color='cyan'>
    
## Aplicaciones de Servidor

Linux se destaca en la ejecución de aplicaciones de servidor debido a su confiabilidad y eficiencia.
 
La selección del software de servidor depende del tipo de servicio que se desea proporcionar, a continuación, se detallan algunas aplicaciones y servicios clave que Linux puede manejar:

<Card>

### 1. Servidores web
| Servidor web | Descripción | Características |
| --- | --- | --- |
| Apache | Servidor web dominante que aloja contenido web. | Soporta HTTP y HTTPS, contenido estático y dinámico (ej. WordPress).|
| Nginx | Enfocado en rendimiento, basado en kernels UNIX modernos.	 | Menos capacidades que Apache, usado en más del 65% de sitios web junto con Apache. |

</Card>

---

<Card>
    
### 2. Servidores de Correo Electrónico

| Componente | Descripción | Ejemplos |
| --- | --- | --- |
| MTA (Mail Transfer Agent) | Decide el servidor receptor y usa el **Protocolo simple de transferencia de correo** (SMTP- Simple Mail Transfer Protocol) para mover correo.	 | sendmail, Postfix. |
| MDA (Mail Delivery Agent)	| Almacena el correo en el buzón del usuario.	| Generalmente integrado con MTA. |
| Servidores POP/IMAP	    | Protocolos para acceder al correo electrónico en servidores remotos.	| Dovecot, Cyrus IMAP.| 

</Card>

---

<Card>
    
### 3. Compartición de Archivos

| Servicio | Descripción | Ejemplos |
| --- | --- | --- |
| Samba | Permite a máquinas Linux compartir archivos y participar en dominios de Windows.	| Implementa tanto el servidor como el cliente para compartir archivos.|
| Netatalk | Facilita la compartición de archivos en redes con máquinas Apple.	| Permite que Linux se comporte como un servidor de archivos Apple. |
| NFS	| Permite montar sistemas de archivos remotos como discos regulares.	| Parte del kernel, accesible de manera transparente. |

</Card>

---

<Card>
    
### 4. Servicios de Directorio

| Servicio | Descripción | Ejemplos |
| --- | --- | --- |
| DNS (Domain Name System) | Traduce nombres de dominio a direcciones IP.	| bind (Internet Software Consortium), PowerDNS. |
| LDAP (Lightweight Directory Access Protocol)	| Almacena información como cuentas de usuario y roles de seguridad.	| OpenLDAP, Active Directory (Microsoft). |

</Card>

---

<Card>

### 5. Configuración de Red

| Servicio | Descripción | Ejemplos |
| --- | --- | --- |
| DHCP (Dynamic Host Configuration Protocol) | Asigna direcciones IP a dispositivos en una red.	| ISC DHCP, dnsmasq. |
    
</Card>

---

<Card>

### 6. Bases de Datos

| Base de Datos | Descripción | Características |
| --- | --- | --- |
| MySQL | Sistema de gestión de bases de datos relacional.		| Ampliamente utilizado, usa SQL para consultas. |
| PostgreSQL | Sistema de gestión de bases de datos relacional.	| Compatible con SQL, soporta consultas complejas. |
</Card>

</Card>

<Card color='pink'>
    
## Aplicaciones de Escritorio

El ecosistema de Linux ofrece una amplia gama de aplicaciones de escritorio, abarcando desde juegos y herramientas creativas hasta aplicaciones de productividad. Aquí se destaca la importancia de ciertos componentes y aplicaciones en el entorno de Linux:

<Card>
    
### 1. Entorno de Escritorio

| Categoría | Descripción | Ejemplos |
| --- | --- | --- |
| Sistema base | Sistema que permite la operación gráfica en Linux.	| X Window System (X11), X.org |
| Administrador de Ventanas	| Controla la apariencia y gestión de ventanas y menús.	| Compiz, FVWM, Enlightenment |
| Entorno de Escritorio	| Incluye un administrador de ventanas y utilidades adicionales como menús de inicio y administradores de archivos.	 | KDE, GNOME |

</Card>

---

<Card>
    
### 2. Aplicaciones de Productividad

| Categoría | Descripción | Ejemplos |
| --- | --- | --- |
| Suite Ofimática	| Conjunto de aplicaciones para procesamiento de textos, hojas de cálculo y presentaciones.	| OpenOffice, LibreOffice |

**OpenOffice** fue adquirido por **Sun Microsystems** y luego por **Oracle**. Se bifurcó para formar **LibreOffice**.	

</Card>

---

<Card>
    
### 3. Navegadores Web

| Categoría | Descripción | Ejemplos |
| --- | --- | --- |
| Navegadores Principales	|    Navegadores rápidos y ricos en funciones con excelente soporte para desarrolladores web. Estos dos paquetes son un buen ejemplo de cómo la diversidad es buena para el código abierto – mejoras de uno dan estímulo al otro equipo para tratar de mejorar al otro. | Firefox, Google Chrome|

</Card>

---

<Card>
    
### 4. Clientes de Correo Electrónico

| Categoría | Descripción | Ejemplos |
| --- | --- | --- |
| Clientes de Correo Electrónico	| Aplicaciones para gestionar correos electrónicos, soportando protocolos POP, IMAP y SMTP.		| Thunderbird, Evolution, KMail |
| Correo web | Aplicaciones web que permiten acceder al correo electrónico a través de un navegador.	| Roundcube, SquirrelMail |

</Card>

---

<Card>
    
### 5. Aplicaciones Creativas

| Categoría | Descripción | Ejemplos |
| --- | --- | --- |
| Creación de Películas 3D	| Software para la creación de animaciones y efectos visuales en 3D.	| Blender, Maya |
| Edición de Imágenes 2D	| Herramienta para manipulación y edición de imágenes en 2D.	| GIMP|
| Edición de Audio	| Aplicación para la grabación y edición de archivos de audio.	| Audacity |

</Card>


</Card>


<Card color='blue'>
    
## Herramientas de Consola

<Card>

### Interacción con el Shell

El shell es el interfaz principal para interactuar con el sistema Linux. Acepta comandos del usuario y los procesa, enviándolos al kernel para su ejecución.

#### Ejemplo de interacción con el shell:

| Comando | Descripción |
| --- | --- |
| ls -l /tmp/*.gz	| Lista los archivos en /tmp que terminan en .gz. |
| rm /tmp/fdboot.img.gz	 | Elimina el archivo fdboot.img.gz en /tmp. |

</Card>

<Card>
    
### Tipos de Shells

Linux ofrece varios shells, cada uno con sus propias características y funcionalidades. Los shells más comunes son:

| Shell	|Descripción|
| --- | --- |
|Bourne Shell (sh)|	Original shell creado en la década de 1970.
|C Shell (csh)|	Shell con sintaxis inspirada en el lenguaje C.
|Bourne Again Shell (Bash)|	Versión moderna del Bourne shell, ampliamente utilizada en sistemas actuales.
|Tenex C Shell (tcsh)|	Versión mejorada del C shell con características adicionales.
|Korn Shell (ksh)	|Combina características del Bourne y C shell, añadiendo nuevas funcionalidades.
|Z Shell (zsh)|	Shell avanzado con muchas características adicionales y extensiones.

</Card>

<Card>
    
### Editores de texto

Los editores de texto permiten modificar archivos de configuración y tienen diferentes niveles de complejidad:

| Editor | Descripción |
| --- | --- |
|Vi/Vim	|Editor potente con una curva de aprendizaje pronunciada. Utiliza modos para diferentes tipos de edición.|
|Emacs	|Editor avanzado con muchas extensiones y personalizaciones.|
|Pico/Nano	|Editores más simples y fáciles de usar, adecuados para edición básica de texto.|

</Card>

<Card>
    
### Gestión de Paquetes

La gestión de paquetes facilita la instalación y actualización de software en Linux mediante paquetes comprimidos. Las herramientas varían según la distribución:

|Distribución|	Herramienta de Gestión de Paquetes|
| --- | --- |
| Sistemas Debian | `dpkg`, `apt-get`, `apt-cache` |
| Sistemas Red Hat | `rpm`, `yum`, |

- **dpkg:** Herramienta para la instalación, eliminación y gestión de paquetes en Debian.
- **apt-get:** Herramienta de alto nivel para manejar paquetes en Debian y derivados.
- **apt-cache:** Herramienta para buscar paquetes y mostrar información sobre ellos.
- **rpm:** Sistema de gestión de paquetes para Red Hat y derivados.
- **yum:** Herramienta para la instalación, actualización y gestión de paquetes en sistemas Red Hat.

</Card>

</Card>

<Card color='darkBlue'>
    

<Card>    
## Herramientas de Desarrollo
### Lenguajes de Programación
Los lenguajes de programación en Linux se dividen en dos categorías principales: compilados e interpretados.

| Tipo de Lenguaje|	Descripción|
| --- | --- |
|Lenguajes Compilados|	Traducen el código fuente a código máquina en su totalidad antes de la ejecución. Ejemplo: C, C++, Objective-C.|
|Lenguajes Interpretados|	Traducen el código fuente a código máquina mientras se ejecuta el programa. Ejemplo: Perl, PHP, Ruby, Python.|
</Card>

---


<Card>    
### Ejemplos de Lenguajes Compilados:
|Lenguaje|	Descripción|
| --- | --- |
|C	|Lenguaje en el que se escribió Linux. Ofrece eficiencia y rendimiento.|
|C++	|Extensión del C que añade soporte para programación orientada a objetos.    |
|Objective-C	|Variante del C utilizada en productos de Apple, como macOS e iOS.|
</Card>


---

<Card>
    
### Ejemplos de Lenguajes Interpretados:
|Lenguaje|	Descripción|
| --- | --- |
|Perl	|Originalmente para manipulación de texto, ahora utilizado en automatización y desarrollo web.|
|PHP	|Utilizado para crear páginas web dinámicas. Se ejecuta en el servidor web y es fácil de aprender.|
|Ruby	|Influenciado por Perl, facilita la programación compleja y se utiliza con el marco Ruby on Rails para aplicaciones web.|
|Python	|Lenguaje versátil con capacidades excelentes para procesamiento estadístico y el marco Django para aplicaciones web.|
</Card>

---

<Card>
    
### Librerías y Bibliotecas
Las librerías ofrecen funciones y herramientas reutilizables para los desarrolladores.

|Librería	|Descripción|
| --- | --- |
|ImageMagick	|Permite la manipulación de imágenes en código y desde la línea de comandos.|
|OpenSSL	|Proporciona funciones criptográficas y es utilizada en servidores web y herramientas de línea de comandos.|
|Librería de C	|Proporciona funciones básicas para la lectura y escritura en archivos y pantallas, utilizada por aplicaciones y otros lenguajes.|
</Card>

---

<Card>
    
### Shells y Editores de Texto
|Herramienta	|Descripción|
| --- | --- |
|Shells	|Proporcionan una interfaz para interactuar con el sistema y ejecutar comandos. Ejemplos: Bash, tcsh, ksh, zsh.|
|Editores de Texto|	Herramientas para editar archivos de configuración y código. Ejemplos: vi (o vim), emacs, pico, nano.|
</Card>

</Card>

<Card>
    
## Software de Código Abierto y el Licenciamiento

### Componentes de la Compra de Software

Cuando hablamos de la adquisición de software, hay tres componentes clave a considerar:

| Propiedad | Transferencia de Dinero | Concesión de Licencias |
| --- | --- | --- |
| Este aspecto se refiere a quién posee la propiedad intelectual del software. Generalmente, la propiedad intelectual permanece con el creador del software, ya sea una persona o una empresa. | Aquí se detalla cómo se maneja el dinero en la compra del software. Dependiendo del modelo de negocio del creador, el dinero puede pasar de diferentes maneras, como pagos únicos, suscripciones, o servicios adicionales. | Este es el componente que realmente distingue el software de código abierto del software de código cerrado. Se trata de lo que obtienes con el software y cómo puedes usarlo y redistribuirlo. Las licencias definen si puedes instalar el software en un solo equipo, compartirlo con otros, o realizar modificaciones.|

</Card>

<Card>
  
<Card>
## Código Abierto vs. Código Cerrado
</Card>
  
### Ejemplo de Software de Código Cerrado:

Microsoft Windows es un ejemplo de software de código cerrado. Microsoft mantiene la propiedad intelectual del software y proporciona una licencia de uso a través de un Contrato de Licencia de Usuario Final (EULA). La licencia permite la instalación en una sola computadora y la creación de copias de seguridad, pero prohíbe la ingeniería inversa y la redistribución del código fuente. Además, se paga por una copia del software que incluye actualizaciones menores.

### Ejemplo de Software de Código Abierto:

Linux es un ejemplo de software de código abierto creado por Linus Torvalds. Está licenciado bajo la GNU General Public License versión 2 (GPLv2). Esta licencia exige que el código fuente esté disponible para cualquier persona y permite realizar cambios y redistribuir el software, siempre que las modificaciones también se mantengan bajo la misma licencia. No se puede cobrar por distribuir el código fuente, salvo por los costos de distribución.

</Card>

<Card>

## Licencias de Código Abierto y Software Libre

### Free Software Foundation (FSF):

Fundada en 1985 por Richard Stallman, la FSF promueve el software libre. En este contexto, "libre" se refiere a la libertad de compartir, estudiar y modificar el código fuente, no al costo. La FSF considera que el software propietario es perjudicial y aboga por licencias que permitan el copyleft, obligando a compartir cualquier modificación bajo la misma licencia.

---

### Open Source Initiative (OSI):

Fundada en 1998 por Bruce Perens y Eric Raymond, la OSI promueve el software de código abierto. A diferencia de la FSF, la OSI no insiste en el copyleft, sino que se enfoca en la disponibilidad del código fuente sin restricciones severas. La OSI no desarrolla licencias propias, sino que evalúa licencias existentes basadas en sus principios de código abierto. Ejemplos de licencias compatibles con OSI incluyen las licencias BSD y MIT, que permiten una mayor flexibilidad en la redistribución.

---

### Licencias de Creative Commons:

Las licencias Creative Commons (CC) se utilizan principalmente para obras no relacionadas con el software. Algunas de las principales licencias incluyen:

- Attribution (CC BY): Permite usar el contenido con atribución al autor.
- Attribution ShareAlike (CC BY-SA): Permite modificaciones y redistribución bajo la misma licencia.
- Attribution No-Derivs (CC BY-ND): Permite redistribución sin cambios.
- Attribution-NonCommercial (CC BY-NC): Permite uso no comercial con atribución.
- Attribution-NonCommercial-ShareAlike (CC BY-NC-SA): Permite modificaciones no comerciales con la misma licencia.
- Attribution-NonCommercial-No-Derivs (CC BY-NC-ND): Permite compartir sin cambios y solo para uso no comercial.
- No Rights Reserved (CC0): Equivalente al dominio público, sin derechos reservados.

</Card>