---

title: Encontrar ayuda
sidebar_position: 5

---

<Card>
    

<Row>
    
<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/5-LPI-Graphics.png" width="250"/>
   
<p>

## La importancia de linux en el mercado laboral

93% de los directores de recursos humano planea contratar a un profesional de Linux en los próximos seis meses. Y casi 90% mencionó que es difícil encontrar profesionales experimentados en Linux. 

- Esto significa muchas oportunidades de trabajo para aquellos con habilidades de Linux.

</p>
 
</Row>
</Card>

Si le preguntas a los usuarios qué característica del Sistema Operativo Linux disfrutan más, muchos responderán «el poder proporcionado por el entorno de la línea de comandos». Esto es porque hay literalmente miles de comandos disponibles con muchas opciones, resultando en herramientas poderosas.

<Card color='cyan'>

Sin embargo, con este poder viene la complejidad. La complejidad, a su vez, puede crear confusión. Como resultado, **saber encontrar ayuda** cuando trabajas en Linux es una habilidad esencial para cualquier usuario. 

- Referirte a la ayuda te permite recordar cómo funciona un comando, además de ser un recurso de información al aprender nuevos comandos.
    
</Card>


<Card>
    
## Las páginas man

Como se mencionó anteriormente, UNIX era el sistema operativo desde el cual se construyó la base de Linux. Los desarrolladores de UNIX crearon los documentos de ayuda llamados páginas man (man significa manual).

Las páginas man se utilizan para describir las características de los comandos. Te proporcionarán una descripción básica de la finalidad del comando, así como los detalles de las opciones del comando.

<Card>
    

### Visualización de las páginas man

Para ver una página man de un comando, ejecuta el man comando en la ventana del terminal. Por ejemplo, el comando `man cal` mostrará la página man para el comando `cal`:

```Bash
man cal
```

```Bash
CAL(1)                    BSD General Commands Manual             CAL(1) 

NAME                                                                
cal, ncal -- displays a calendar and the date of Easter               

SYNOPSIS                                                               
cal [-3hjy] [-A number] [-B number] [[month] year]                     
cal [-3hj] [-A number] [-B number] -m month [year]                     
ncal [-3bhjJpwySM] [-A number] [-B number] [-s country_code] [[month]  
year]                                                              
 ncal [-3bhJeoSM] [-A number] [-B number] [year]                      
 ncal [-CN] [-H yyyy-mm-dd] [-d yyyy-mm]                                    

DESCRIPTION                                                            
    The cal utility displays a simple calendar in traditional format and    ncal offers an alternative layout, more options and the date of         Easter. The new format is a little cramped but it makes a year fit      on a 25x80 terminal.  If arguments are not specified, the current       month is displayed.      
                                                                
         The options are as follows:                                               
 -h      Turns off highlighting of today.                                   
                                                 
 Manual page cal(1) line 1 (press h for help or q to quit)
```
</Card>

<Card>
    
### Las páginas man están categorizadas por secciones

Las páginas man en Linux no solo documentan comandos, sino también archivos de configuración y otros elementos del sistema. Los archivos de configuración, a veces llamados archivos de sistema, contienen datos utilizados para almacenar información sobre el sistema operativo o servicios.

#### Tipos de Comandos y Documentación

Existen varios tipos de comandos y funciones que requieren documentación:

- Comandos de usuario
- Comandos del sistema
- Comandos de administración
- Librerías
- Componentes del Kernel

### Organización de las Páginas man

Debido a la gran cantidad de páginas man en una distribución típica de Linux, estas se organizan por secciones. Cada página man también se divide en secciones para facilitar su consulta.

Por defecto, hay nueve secciones de páginas man:

- Programas ejecutables o comandos del shell
- Llamadas del sistema: Funciones proporcionadas por el kernel
- Llamadas de la librería: Funciones dentro de las librerías de los programas
- Archivos especiales: Generalmente se encuentran en /dev
- Formatos de archivo y convenciones: Por ejemplo /etc/passwd
- Juegos
- Otros: Incluyendo paquetes macro y convenciones, como man(7), groff(7)
- Comandos de administración de sistema: Generalmente solo para root
- Rutinas del kernel: No estándar

### Consultar la página de manual de man

Para consultar la lista de categorías (secciones) de las páginas man en un sistema Unix/Linux, se puede consultar la propia página de manual de man en la sección 1 (User Commands). 

```Bash
man man
```

### Buscar secciones específicas

En la página de manual, se puede usar `/` seguido de una palabra clave para resaltar secciones específicas del contenido. 

Por ejemplo:

```Bash
/section
```

### Navegar por los Resultados:

- Para navegar por los resultados, se puede usar la tecla `n` para ir al siguiente resultado y `N` para ir al resultado anterior.

### Funcionamiento comando man
Cuando se utiliza el comando `man`, este busca en cada una de las secciones de las páginas man en orden hasta encontrar la primera coincidencia.

**Ejemplo de Uso del Comando man** 
Si se ejecuta el comando `man cal`:

- **Primera Sección**: Se busca en la sección de programas ejecutables o comandos del shell una página man llamada cal.
- **Segunda Sección**: Si no se encuentra en la primera sección, se busca en la segunda sección.
- **Proceso de Búsqueda**: Este proceso continúa a través de todas las secciones.

### Mensaje de error

Si no se encuentra ninguna página man después de buscar en todas las secciones, se recibe un mensaje de error:

```Bash
sysadmin@localhost:~$ man zed                                          
No manual entry for zed                                                
sysadmin@localhost:~$
```

Este mensaje indica que no hay una entrada de manual para el comando o término buscado.
    
## Determinar la sección

Para determinar a qué sección pertenece una página man específica tienes que ver el valor numérico de la primera línea de la salida de la página man. 

- Por ejemplo, si ejecutas el comando `man cal`, verás que el comando `cal` pertenece a la primera sección de las páginas man:

```Bash
CAL(1)                    BSD General Commands Manual             CAL(1)
```

## Especificar una Sección

En algunos casos, es necesario especificar la sección para visualizar la página man correcta. Esto se debe a que a veces hay páginas man con el mismo nombre en diferentes secciones.

**Ejemplo de Conflicto de Nombres**
Un ejemplo es el comando passwd, que permite cambiar tu contraseña, y el archivo passwd, que almacena información de la cuenta. Ambos tienen una página man.

- **Comando passwd:** Es un comando de usuario, por lo que man passwd mostrará la página man para el comando passwd por defecto:

```Bash
PASSWD(1)                        User Commands                 PASSWD(1)
```

Para ver la página man de una sección específica, proporciona el número de la sección como primer argumento del comando man. Por ejemplo, man 5 passwd buscará la página man de passwd solo en la sección 5:

```Bash
PASSWD(5)                File Formats and Conversions
```

## Buscar una página man por nombre

A veces no es claro en qué sección se almacena una página man. En estos casos, se puede buscar una página man por nombre.

**Opción -f del Comando man**

La opción `-f` del comando `man` mostrará páginas que coinciden, o parcialmente coinciden, con un nombre específico y provee una breve descripción de cada página man:

```Bash
sysadmin@localhost:~$ man -f passwd                                    
passwd (5)           - the password file                              
passwd (1)           - change user password                           
passwd (1ssl)        - compute password hashes                         
sysadmin@localhost:~$
```

**Comando whatis**

En la mayoría de las distribuciones de Linux, el comando `whatis` hace lo mismo que el comando man `-f`. En esas distribuciones, ambos comandos producen la misma salida.

<Card color='blue'>
    
En resumen:  `man -f (palabra)` y  `whatis (palabra) ` son equivalentes y mostrarán la misma salida.

</Card>


## Buscar Páginas man por una Palabra Clave

No siempre se recuerda el nombre exacto de la página man deseada. En estos casos, se puede buscar páginas man que coincidan con una palabra clave usando la opción `-k` del comando man.

**Uso de la Opción -k**

Por ejemplo, si se quiere ver una página sobre cómo cambiar la contraseña pero no se recuerda el nombre exacto, se puede ejecutar el comando man -k password:

```Bash
sysadmin@localhost:~$ man -k passwd                                    
chgpasswd (8)        - update group passwords in batch mode            
chpasswd (8)         - update passwords in batch mode                 
fgetpwent_r (3)      - get passwd file entry reentrantly               
getpwent_r (3)       - get passwd file entry reentrantly               
gpasswd (1)          - administer /etc/group and /etc/gshadow         
pam_localuser (8)    - require users to be listed in /etc/passwd      
passwd (1)           - change user password                           
passwd (1ssl)        - compute password hashes                        
passwd (5)           - the password file                               
passwd2des (3)       - RFS password encryption                         
update-passwd (8)    - safely update /etc/passwd, /etc/shadow and /etc/group    
sysadmin@localhost:~$
```

**Resultados de la Búsqueda:**

Al usar esta opción se puede recibir una gran cantidad de salidas. El ejemplo anterior dio 60 resultados. Dado que hay miles de páginas man, es importante ser específico al buscar. Usar una palabra genérica como `the` podría resultar en cientos o miles de resultados.

## Comando apropos

En la mayoría de las distribuciones de Linux, el comando `apropos` hace lo mismo que el comando `man -k`. En esas distribuciones, ambos comandos producen la misma salida.

<Card color='blue'>
    
En resumen:  `man -k (palabra)` y  `apropos (palabra) ` son equivalentes y mostrarán la misma salida.

</Card>

</Card>

</Card>

<Card>
    
## Comando info

Las páginas man son fuentes extensas de información, pero tienen algunas desventajas. Cada página man es un documento independiente y no está relacionado con ninguna otra página man. Algunas páginas man tienen una sección `"SEE ALSO"` (Ver También) que puede hacer referencia a otras páginas man, pero estas referencias tienden a estar relacionadas con las fuentes de documentación

El comando info también proporciona documentación sobre funciones y comandos del sistema operativo, pero con un objetivo diferente: ofrecer una estructura lógica que facilita la lectura de la documentación. En los documentos info, la información se desglosa en categorías similares a una tabla de contenido en un libro. Se proporcionan hipervínculos hacia páginas con información sobre temas individuales para un comando específico o función. Toda la documentación se combina en un solo "libro" en el que se puede navegar a un nivel superior y ver la tabla de contenido que representa toda la documentación disponible.

<Card color='green'>
    
### Ventajas del Comando info

El estilo de escritura de los documentos info es típicamente más propicio para aprender un tema. 

- Mientras que las páginas man son un recurso de referencia, los documentos info sirven más como una guía de aprendizaje.

</Card>

### Visualizar la documentación info para un Comando

Para ver la documentación info de un comando, usa el comando `info command`, donde "command" es el nombre del comando que quieres consultar. Por ejemplo, el siguiente comando muestra la salida del comando `info ls`:

```Bash
File: coreutils.info,  Node: ls invocation,  Next: dir invocation,  Up: Directo\ry listing                                                                      
                                                                       
10.1 `ls': List directory contents                                     
==================================                                              
                                                                      
    The `ls' program lists information about files (of any type, including directories). 
    Options and file arguments can be intermixed arbitrarily, as usual.                                                          
                                                                       
    For non-option command-line arguments that are directories, by    
default `ls' lists the contents of directories, not recursively, and   
omitting files with names beginning with `.'.  For other non-option    
arguments, by default `ls' lists just the file name.  If no non-option 
argument is specified, `ls' operates on the current directory, acting  
as if it had been invoked with a single argument of `.'.                        
                                                                       
    By default, the output is sorted alphabetically, according to the  
locale settings in effect.(1) If standard output is a terminal, the    
output is in columns (sorted vertically) and control characters are    
output as question marks; otherwise, the output is listed one per line 
and control characters are output as-is.                              
--zz-Info: (coreutils.info.gz)ls invocation, 58 lines --Top-------------
Welcome to Info version 5.2. Type h for help, m for menu item.
```

### Información de la Documentación

La primera línea muestra información sobre la ubicación actual dentro de la documentación info. Esta documentación está organizada en nodos. En el ejemplo, estás en el nodo **"ls invocation"**.

- Nodo Actual: **"ls invocation"**
- Siguiente Nodo: **"dir invocation"**
- Nodo Superior: **"Directory listing"**

### Navegar por la documentación

Puedes navegar entre los nodos para avanzar o retroceder en la documentación, similar a pasar capítulos en un libro.

Al igual que con el comando man, puedes usar comandos de movimiento al leer un documento info. Para ver los comandos disponibles, presiona la letra h:

- **l:** Cierra la ventana de ayuda
- **q:** Sale de Info
- **H:** Muestra el tutorial de Info
- **Up:** Mueve una línea hacia arriba
- **Down:** Mueve una línea hacia abajo
- **DEL:** Desplaza hacia atrás una pantalla
- **SPC:** Desplaza hacia adelante una pantalla
- **Home:** Va al inicio del nodo actual
- **End:** Va al final del nodo actual
- **TAB:** Salta al siguiente hipervínculo
- **RET:** Sigue el hipervínculo bajo el cursor
- **[:** Va al nodo anterior en el documento
- **]:** Va al siguiente nodo en el documento
- **p:** Va al nodo anterior en el mismo nivel
- **n:** Va al siguiente nodo en el mismo nivel
- **u:** Subir un nivel
- **s:** Buscar un término en el documento
- **m:** Marcar un nodo

Para cerrar la pantalla de ayuda, usa la letra l y para salir completamente, usa la letra q.

<Card color='blue'>
    
Cuando te desplazas por el documento, verás un menú con hipervínculos. Por ejemplo, si colocas el cursor sobre `* Sorting the output::` y presionas Enter, irás al nodo que describe la clasificación de la salida del comando ls.

Para regresar al nodo anterior, puedes usar la tecla `u` para subir un nivel o la tecla `l` para volver exactamente a la ubicación anterior.

</Card>

## Explorar la Documentación info

Puedes explorar la documentación de Linux usando el comando info sin argumentos. Esto te llevará al nivel superior de la documentación, desde donde puedes navegar por varias características:

- **File:** dir, Node: Top: Este es el inicio del árbol de INFO
- **Menú Principal:** Muestra temas importantes y opciones como:
- **Basics:** Información básica
- **Common options:** Opciones comunes
- **Coreutils:** Utilidades GNU básicas
- **Date input formats:** Formatos de entrada de fecha
- **File permissions:** Permisos de archivo
- **Finding files:** Buscar archivos que cumplen ciertos criterios
- **C++ libraries:** Bibliotecas de C++

Para salir, presiona q. Para ver todos los comandos de Info, presiona ?. Para volver al nivel superior, usa d. El comando h proporciona una guía para principiantes.

</Card>

<Card>
    
## Otras Fuentes de Ayuda

En muchos casos verás que las páginas man o documentación info te proporcionarán las respuestas que necesitas. Sin embargo, en algunos casos, puede que necesites buscar en otras ubicaciones.

### Opción --help

Muchos comandos te proporcionan información básica, muy similar a la sección SYNOPSIS que aparece en las páginas man, al aplicar la opción --help (o «ayuda» en español) al comando. Esto es útil para aprender el uso básico de un comando:

```Bash
sysadmin@localhost:~$  ps --help                                              
********* simple selection *********  ********* selection by list *********   
-A all processes                      -C by command name                      
-N negate selection                   -G by real group ID (supports names)    
-a all w/ tty except session leaders  -U by real user ID (supports names)     
-d all except session leaders         -g by session OR by effective group name
-e all processes                      -p by process ID                        
T  all processes on this terminal     -s processes in the sessions given     
a  all w/ tty, including other users  -t by tty                               
g  OBSOLETE -- DO NOT USE             -u by effective user ID (supports names)
r  only running processes             U  processes for specified users        
x  processes w/o controlling ttys     t  by tty                               
*********** output format **********  *********** long options ***********    
-o,o user-defined  -f full            --Group --User --pid --cols --ppid      
-j,j job control   s  signal          --group --user --sid --rows --info      
-O,O preloaded -o  v  virtual memory  --cumulative --format --deselect        
-l,l long          u  user-oriented   --sort --tty --forest --version         
-F   extra full    X  registers       --heading --no-headi
                    ********* misc options *********                          
-V,V  show version      L  list format codes  f  ASCII art forest             
-m,m,-L,-T,H  threads   S  children in sum    -y change -l format             
-M,Z  security data     c  true command name  -c scheduling class             
-w,w  wide output       n  numeric WCHAN,UID  -H process hierarchy            
sysadmin@localhost:~$ 
```

</Card>

<Card>
    
## Comando whereis

Para buscar la ubicación de un comando o de las páginas man para un comando, utiliza el comando `whereis` (o «dónde está» en español). Este comando busca los comandos, archivos de código fuente y las páginas man en las ubicaciones específicas donde estos archivos se almacenan normalmente:

```Bash
sysadmin@localhost:~$ whereis ls                                              
ls: /bin/ls /usr/share/man/man1/ls.1.gz                                       
sysadmin@localhost:~$
```

Las páginas man se suelen distinguir fácilmente entre los comandos ya que normalmente están comprimidos con un comando llamado `gzip`, dando por resultado un nombre de archivo que termina en `.gz`.

### Páginas man para un Comando

Un comando puede tener varias páginas man que describen diferentes aspectos o funciones del mismo comando. Por ejemplo, el comando `/bin/ls` tiene dos páginas man. Esto sucede porque el comando ls se puede utilizar con diferentes opciones y funciones, y cada página man puede describir un conjunto específico de opciones o funciones.

Al aprender sobre un comando, es útil explorar todas las páginas man disponibles para ese comando. Sin embargo, en la mayoría de los casos, los comandos solo tienen una página man.

</Card>

<Card>
    
## Encontrar Cualquier Archivo o Directorio

El comando `whereis` está diseñado para encontrar páginas man y comandos específicos, sin embargo, para buscar cualquier archivo o directorio, no solo comandos o páginas man, se usa el comando `locate`. Este comando busca en una base de datos que contiene información sobre todos los archivos y directorios del sistema en el momento en que se creó la base de datos, que generalmente se actualiza automáticamente cada noche.

Por ejemplo, para encontrar archivos relacionados con `gshadow`, se puede ejecutar:

```Bash
sysadmin@localhost:~$ locate gshadow
```

El comando locate puede no mostrar archivos creados después de la última actualización de la base de datos. Para actualizar manualmente la base de datos, se utiliza el comando `updatedb`, pero solo el _usuario root_ tiene permisos para ejecutarlo.

Además, los usuarios normales pueden tener una salida limitada con `locate` debido a permisos. Si un archivo o directorio no es accesible debido a los permisos, locate no lo mostrará. El usuario root, en cambio, puede buscar cualquier archivo en la base de datos.

## Contar el Número de Archivos

La salida del comando `locate` puede ser bastante grande. Cuando buscas un nombre de archivo, como `passwd`, el comando locate producirá cada archivo que contiene la cadena `passwd`, no sólo los archivos passwd.

En muchos casos, puede que quieras empezar listando cuántos archivos coincidirán. Lo puedes hacer mediante la opción `-c` del comando locate:

```Bash
sysadmin@localhost:~$ locate -c passwd                                 
97                                                                     
sysadmin@localhost:~$
```

## Limitando la Salida

Puedes ajustar la salida del comando locate usando la opción `-b`. Esta opción restringe los resultados a aquellos que tienen el término de búsqueda en el nombre base del archivo, excluyendo los nombres de directorio.

Por ejemplo:

```Bash
sysadmin@localhost:~$ locate -b passwd
```

Este comando muestra todos los archivos que contienen "passwd" en su nombre base.

---

Para hacer la búsqueda más precisa y limitar los resultados a los nombres exactos, coloca un carácter \ delante del término de búsqueda:

```Bash
sysadmin@localhost:~$ locate -b "\passwd"
```

Esto devuelve solo los archivos que coinciden exactamente con "passwd".

</Card>