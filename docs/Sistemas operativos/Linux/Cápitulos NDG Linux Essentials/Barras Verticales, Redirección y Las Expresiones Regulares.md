---

title: Barras Verticales, Redirección y Las Expresiones Regulares
sidebar_position: 8

---

<Card>
    
<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/8-LPI-Graphics.png" width="300"/>

<p>

## Texto en imagen.
¿Cabeza en las nubes? Linux impulsa la nube. 

**76%** de las organizaciones habilitadas en la nube utilizan servidores Linux para la nube. 

_- 2013 Reporte Linux de Adopción de Usuarios Finales Empresariales. La Fundación Linux_
</p>

</Row>

</Card>

En un sistema de archivos típico la mayoría de los archivos son de texto, estos archivos contienen solo texto, sin formato a diferencia de los archivos de procesamiento de texto.

Existen numerosos comandos en Linux para ver y modificar archivos de texto de diversas maneras. Estos comandos facilitan la manipulación de archivos de texto en el sistema.

El shell ofrece características para controlar la salida de los comandos. En lugar de mostrar la salida en la ventana de la terminal, se puede redirigir a otro archivo o comando. Estas opciones de redirección proporcionan un entorno más flexible y potente para trabajar.

<Card>
    
## Las barras verticales en la línea de comandos

### Uso de comandos individuales
En capítulos anteriores se describió el uso de comandos para realizar acciones en el sistema operativo, como crear, mover y eliminar archivos, y navegar por el sistema. Generalmente, la salida de un comando se muestra en la pantalla, _pero esto no siempre tiene que ser así_.

### Uso de la Barra Vertical (Pipe)

El carácter barra vertical `|`, o `pipe` se utiliza para enviar la salida de un comando a otro. En lugar de imprimirse en la pantalla, _la salida de un comando se convierte en la entrada del siguiente comando_. Esta herramienta es poderosa, especialmente para buscar datos específicos y refinar los resultados de un comando inicial.

### Comandos Head y Tail

Los comandos `head` y `tail` se utilizan para mostrar algunas de las primeras o últimas líneas de un archivo. Por defecto, ambos comandos muestran diez líneas.

<Card>
    
**Ejemplo de `head`:**

```bash
sysadmin@localhost:~$ head /etc/sysctl.conf
#
# /etc/sysctl.conf - Configuration file for setting system variables
# See /etc/sysctl.d/ for additional system variables.
# See sysctl.conf (5) for information.
#

#kernel.domainname = example.com

# Uncomment the following to stop low-level messages on console
#kernel.printk = 3 4 1 3
sysadmin@localhost:~$
```

- El comando `head` muestra las primeras diez líneas del archivo `/etc/sysctl.conf`.

</Card>

<Card>
    
**Ejemplo de `tail`:**

```bash
sysadmin@localhost:~$ tail /etc/sysctl.conf
# Do not accept ICMP redirects (prevent MITM attacks)
#net.ipv4.conf.all.accept_redirects = 0
#
# Don not accept IP source route packets (we are not a router)
#net.ipv4.conf.all.accept_source_route = 0
#net.ipv4.conf.default.accept_source_route = 0
#
# Log Martian Packets
#net.ipv4.conf.all.log_martians = 1
#
```

- El comando `tail` muestra las últimas diez líneas del archivo `/etc/sysctl.conf`.

</Card>

<Card>

### Uso de la Barra Vertical con Head y Tail

La barra vertical permite utilizar estos comandos con la salida de otros comandos. Por ejemplo, listar el contenido de un directorio grande y mostrar solo las primeras diez líneas:

```bash
sysadmin@localhost:~$ ls -l /etc | head
adduser.conf                                                           
adjtime                                                               
alternatives                                                         
apparmor.d                                                             
apt                                                                    
bash.bashrc                                                           
bash_completion.d                                                     
bind                                                                  
bindresvport.blacklist                                                 
blkid.conf
```

- El comando `ls -l /etc` muestra el contenido del directorio `/etc`.
- La barra vertical `|` envía la salida del comando `ls -l /etc` al comando `head`.

### Uso de Múltiples Barras Verticales

Se pueden utilizar múltiples barras verticales para unir varios comandos. La salida del primer comando se pasa al segundo, y la salida del segundo se pasa al tercero.

Ejemplo de uso con `nl` para numerar líneas:

```bash
sysadmin@localhost:~$ ls -l /etc | nl | head
     1  total 8
     2  drwxr-xr-x   2 root root 4096 Mar  1  2019 acpi
     3  drwxr-xr-x   2 root root 4096 Mar  1  2019 adduser.conf
     4  -rw-r--r--   1 root root  179 Mar  1  2019 adjtime
     5  drwxr-xr-x   2 root root 4096 Mar  1  2019 alternatives
     6  drwxr-xr-x   2 root root 4096 Mar  1  2019 apparmor.d
     7  drwxr-xr-x   2 root root 4096 Mar  1  2019 apport
     8  drwxr-xr-x   2 root root 4096 Mar  1  2019 apt
     9  drwxr-xr-x   2 root root 4096 Mar  1  2019 bash.bashrc
    10  drwxr-xr-x   2 root root 4096 Mar  1  2019 bash_completion.d
```

- El comando `ls -l /etc` muestra el contenido del directorio `/etc`.
- La barra vertical `|` envía la salida del comando `ls -l /etc` al comando `nl`.
- El comando `nl` numera las líneas de la salida.
- La segunda barra vertical `|` envía la salida del comando `nl` al comando `head`.
- El comando `head` muestra las primeras diez líneas numeradas.

### Importancia del Orden

El orden de los comandos en una línea de comandos con barras verticales es importante. La salida de un comando se convierte en la entrada del siguiente. Por lo tanto, el comando que se ejecuta primero debe producir la salida que se necesita para el siguiente comando.

Los siguientes ejemplos ilustran esta situación usando el comando `nl`. En el primer ejemplo, el comando de `nl` se utiliza para numerar las líneas de la salida de un comando anterior:

```bash
sysadmin@localhost:~$ ls -l /etc/ppp | nl                                   1  total 44
     2  -rw------- 1 root root   78 Aug 22  2010 chap-secrets         
     3  -rwxr-xr-x 1 root root  386 Apr 27  2012 ip-down
     4  -rwxr-xr-x 1 root root 3262 Apr 27  2012 ip-down.ipv6to4      
     5  -rwxr-xr-x 1 root root  430 Apr 27  2012 ip-up  
     6  -rwxr-xr-x 1 root root 6517 Apr 27  2012 ip-up.ipv6to4
     7  -rwxr-xr-x 1 root root 1687 Apr 27  2012 ipv6-down
     8  -rwxr-xr-x 1 root root 3196 Apr 27  2012 ipv6-up
     9  -rw-r--r-- 1 root root    5 Aug 22  2010 options
    10  -rw------- 1 root root   77 Aug 22  2010 pap-secrets
    11  drwxr-xr-x 2 root root 4096 Jun 22  2012 peers                 
sysadmin@localhost:~$
```

- El comando `ls -l /etc/ppp` muestra el contenido del directorio `/etc/ppp`.
- La barra vertical `|` envía la salida del comando `ls -l /etc/ppp` al comando `nl`.
- El comando `nl` numera las líneas de la salida.

En el ejemplo siguiente, observa que el comando `ls` es ejecutado primero y su salida se envía al comando `nl`, enumerando todas las líneas de la salida del comando `ls`. 

A continuación, se ejecuta el comando `tail`, mostrando las últimas cinco líneas de la salida del comando `nl`:

```bash
sysadmin@localhost:~$ ls -l /etc/ppp | nl | tail -5                   
     7  -rwxr-xr-x 1 root root 1687 Apr 27  2012 ipv6-down
     8  -rwxr-xr-x 1 root root 3196 Apr 27  2012 ipv6-up
     9  -rw-r--r-- 1 root root    5 Aug 22  2010 options
    10  -rw------- 1 root root   77 Aug 22  2010 pap-secrets
    11  drwxr-xr-x 2 root root 4096 Jun 22  2012 peers                
sysadmin@localhost:~$
```

- El comando `ls -l /etc/ppp` muestra el contenido del directorio `/etc/ppp`.
- La barra vertical `|` envía la salida del comando `ls -l /etc/ppp` al comando `nl`.
- El comando `nl` numera las líneas de la salida.
- La segunda barra vertical `|` envía la salida del comando `nl` al comando `tail -5`.
- El comando `tail -5` muestra las últimas cinco líneas numeradas.

Compara la salida anterior con el siguiente ejemplo:

```bash
sysadmin@localhost:~$ ls -l /etc/ppp | tail -5 | nl                   
    1  -rwxr-xr-x 1 root root 1687 Apr 27  2012 ipv6-down
    2  -rwxr-xr-x 1 root root 3196 Apr 27  2012 ipv6-up
    3  -rw-r--r-- 1 root root    5 Aug 22  2010 options
    4  -rw------- 1 root root   77 Aug 22  2010 pap-secrets
    5  drwxr-xr-x 2 root root 4096 Jun 22  2012 peers                 
sysadmin@localhost:~$
```

<Card color='orange'>
    
**¿Por qué sucede esto?**

En el segundo ejemplo, la salida del comando `ls` se envía primero al comando `tail` que "capta" sólo las últimas cinco líneas de la salida. El comando tail envía esas cinco líneas para al comando `nl`, que los enumera del 1 al 5.

Las barras verticales pueden ser poderosas, pero es importante considerar cómo se unen los comandos con ellas para asegurar que se muestre la salida deseada.

</Card>
</Card>
</Card>

<Card>
    
## Redirección de E/S

La Redirección de `Entrada/Salida (E/S)` permite que la información pase de la línea de comandos a las diferentes secuencias. 

Antes de hablar sobre la redirección, es importante entender las secuencias estándar.

<Card color='blue'>

### STDOUT

STDOUT es la salida de datos de un comando y es conocida como la secuencia o canal #1.

La `salida estándar o STDOUT` es la salida normal de los comandos. Cuando un comando funciona correctamente (sin errores), la salida que produce se llama STDOUT. De forma predeterminada, STDOUT se muestra en la ventana de la terminal (pantalla) donde se ejecuta el comando.
</Card>

<Card color='yellow'>

### STDERR

STDERR es la salida de los mensajes de error de un comando y es conocida como la secuencia o canal #2.   

`Error estándar o STDERR` son mensajes de error generados por los comandos. De forma predeterminada, STDERR se muestra en la ventana de la terminal (pantalla) donde se ejecuta el comando.
</Card>

<Card color='pink'>

### STDIN

STDIN es la entrada de datos en un comando.

La `entrada estándar STDIN` es la información normalmente introducida por el usuario mediante el teclado. Cuando un comando envía un prompt al shell esperando datos, el shell proporciona al usuario la capacidad de introducir los comandos, que a su vez, se envían al comando como STDIN.

</Card>


La redirección de `E/S` permite al usuario redirigir `STDIN` para que los datos provengan de un archivo y la salida de `STDOUT/STDERR` vaya a un archivo. La redirección se logra mediante el uso de los caracteres de la flecha: < y >.

En resumen, la redirección de E/S permite al usuario redirigir la entrada y salida de los comandos.

<Card color='blue'>

### Redirigir STDOUT

La salida estándar (STDOUT) se puede redirigir a archivos. 

- Observa la salida de este comando que se muestra en la pantalla:

```bash
sysadmin@localhost:~$ echo "Line 1"
Line 1
sysadmin@localhost:~$
```

### Redirigir STDOUT a un archivo

Utilizando el carácter >, la salida se redirige a un archivo:

```bash
sysadmin@localhost:~$ echo "Line 1" > example.txt
sysadmin@localhost:~$ ls
Desktop    Downloads  Pictures  Templates  example.txt  test
Documents  Music      Public    Videos     sample.txt
sysadmin@localhost:~$ cat example.txt
Line 1
sysadmin@localhost:~$
```

Este comando no muestra ninguna salida en la pantalla porque STDOUT se envió al archivo `example.txt`. El archivo recién creado contiene la salida del comando echo.

### Sobrescribir contenido del archivo

<Card color='orange'>
El carácter `>` sobrescribe cualquier contenido existente en el archivo:
</Card>


```bash
sysadmin@localhost:~$ cat example.txt
Line 1
sysadmin@localhost:~$ echo "New line 1" > example.txt
sysadmin@localhost:~$ cat example.txt
New line 1
sysadmin@localhost:~$
```

El contenido original del archivo se reemplaza con la nueva salida del comando `echo`.

### Anexar a un archivo

Para preservar el contenido existente y agregar más datos, se utiliza >> para anexar al archivo en lugar de sobrescribirlo:

```bash
sysadmin@localhost:~$ cat example.txt
New line 1
sysadmin@localhost:~$ echo "Another line" >> example.txt
sysadmin@localhost:~$ cat example.txt
New line 1
Another line
sysadmin@localhost:~$
```

La salida del comando echo se anexa al final del archivo, en lugar de sobrescribir el contenido existente.

</Card>

<Card color='yellow'>
    
### Redirigir la STDERR

Al igual que con `STDOUT`, se puede redirigir `STDERR`. 

Al usar flechas para redirigir, se asume la secuencia #1 a menos que se especifique otra secuencia. Por lo tanto, se debe especificar la secuencia #2 al redirigir STDERR.

### Demostración de Redirección de STDERR

Primero, observa el siguiente comando que produce un error porque el directorio especificado no existe:

```bash
sysadmin@localhost:~$ ls /fake
ls: cannot access /fake: No such file or directory
sysadmin@localhost:~$
```

### Determinar Si la Salida Es STDERR

Ten en cuenta que no hay nada en el ejemplo anterior lo que implica que la salida es STDERR. La salida es claramente un mensaje de error, pero ¿cómo podrías saber que se envía al STDERR? Una manera fácil de determinar esto es redirigir al STDOUT:

```bash
sysadmin@localhost:~$ ls /fake > output.txt
ls: cannot access /fake: No such file or directory
sysadmin@localhost:~$
```

En el ejemplo anterior, el STDOUT fue redirigido al archivo ``output.txt`. Por lo tanto, la salida que se muestra no puede ser STDOUT porque habría quedado en el archivo `output.txt` y no se mostraría en la pantalla. Ya que todos los resultados del comando van a STDOUT o STDERR, la salida mostrada debe ser STDERR.

El STDERR de un comando puede enviarse a un archivo:

```bash
sysadmin@localhost:~$ ls /fake 2> error.txt                     
sysadmin@localhost:~$ cat error.txt                            
ls: cannot access /fake: No such file or directory              
sysadmin@localhost:~$
```

En el comando de arriba, `2>` indica que todos los mensajes de error deben enviarse al archivo `error.txt`.

</Card>

<Card>
    
## Redireccionando Múltiples Secuencias

Es posible dirigir la salida STDOUT y STDERR de un comando a la vez. El siguiente comando produce ambas salidas STDOUT y STDERR porque existe uno de los directorios especificados y el otro no:

```bash
sysadmin@localhost:~$ ls /fake /etc/ppp
ls: cannot access /fake: No such file or directory
/etc/ppp:
chap-secrets   ip-down   ip-down.ipv6to4    ip-up        ip-up.ipv6to4
ipv6-down      ipv6-up   options            pap-secrets  peers
sysadmin@localhost:~$
```

### Redirigir Solo STDOUT

Si solo se envía la salida `STDOUT` a un archivo, la `STDERR` se imprimirá en la pantalla:

```bash
sysadmin@localhost:~$ ls /fake /etc/ppp > example.txt
ls: cannot access /fake: No such file or directory
sysadmin@localhost:~$ cat example.txt
/etc/ppp:
chap-secrets
ip-down
ip-down.ipv6to4
ip-up
ip-up.ipv6to4
ipv6-down
ipv6-up
options
pap-secrets
peers
sysadmin@localhost:~$
```

- El comando `ls /fake /etc/ppp` muestra la salida de dos directorios.
- La salida `STDOUT` se envía al archivo `example.txt`.
- La salida `STDERR` se muestra en la pantalla.
- El comando `cat example.txt` muestra el contenido del archivo `example.txt`.
- La salida `STDOUT` se envió al archivo `example.txt`.

### Redirigir Solo STDERR

Si solo se envía la salida STDERR a un archivo, la STDOUT se imprimirá en la pantalla:

```bash
sysadmin@localhost:~$ ls /fake /etc/ppp 2> error.txt
/etc/ppp:
chap-secrets    ip-down   ip-down.ipv6to4    ip-up        ip-up.ipv6to4
ipv6-down       ipv6-up   options            pap-secrets  peers
sysadmin@localhost:~$ cat error.txt
ls: cannot access /fake: No such file or directory
sysadmin@localhost:~$
```

### Redirigir Ambas Salidas a un Archivo

Las salidas STDOUT y STDERR pueden enviarse a un archivo mediante el uso de `&>`:

```bash
sysadmin@localhost:~$ ls /fake /etc/ppp &> all.txt
sysadmin@localhost:~$ cat all.txt
ls: cannot access /fake: No such file or directory
/etc/ppp:
chap-secrets
ip-down
ip-down.ipv6to4
ip-up
ip-up.ipv6to4
ipv6-down
ipv6-up
options
pap-secrets
peers
sysadmin@localhost:~$
```

### Redirigir Salidas a Diferentes Archivos

Si no se quiere que las salidas `STDERR` y `STDOUT` vayan al mismo archivo, pueden redirigirse a diferentes archivos utilizando `>` y `2>`:

```bash
sysadmin@localhost:~$ rm error.txt example.txt
sysadmin@localhost:~$ ls
Desktop    Downloads  Pictures  Templates  all.txt
Documents  Music      Public    Videos
sysadmin@localhost:~$ ls /fake /etc/ppp > example.txt 2> error.txt
sysadmin@localhost:~$ ls
Desktop    Downloads  Pictures  Templates  all.txt    example.txt
Documents  Music      Public    Videos     error.txt
sysadmin@localhost:~$ cat error.txt
ls: cannot access /fake: No such file or directory
sysadmin@localhost:~$ cat example.txt
/etc/ppp:
chap-secrets
ip-down
ip-down.ipv6to4
ip-up
ip-up.ipv6to4
ipv6-down
ipv6-up
options
pap-secrets
peers
sysadmin@localhost:~$
```

<Card>
    
### Orden de las Secuencias

No importa el orden en el que se especifican las secuencias.

</Card>

</Card>

<Card color='pink'>
    
## Redirigir la entrada STDIN

El concepto de redirigir la entrada `STDIN` puede parecer menos intuitivo que la redirección de STDOUT y STDERR. Mientras que redirigir la salida es común para almacenar resultados en archivos, redirigir la entrada se utiliza menos frecuentemente porque la mayoría de los comandos pueden recibir archivos como argumentos directamente.

### Comando cat sin Argumentos

El comando `cat` puede recibir datos de la entrada estándar (STDIN) cuando no se especifica un archivo:

```bash
sysadmin@localhost:~$ cat
hello
hello
how are you?
how are you?
goodbye
goodbye
sysadmin@localhost:~$
```

En este ejemplo, `cat` muestra cada línea que se introduce desde el teclado. Sin embargo, esto puede ser más útil si la salida se redirige a un archivo:

### Comando tr y Redirección de STDIN

El comando `tr` convierte caracteres de un conjunto a otro, pero no acepta nombres de archivos como argumentos:

```bash
sysadmin@localhost:~$ tr 'a-z' 'A-Z'
watch how this works
WATCH HOW THIS WORKS
sysadmin@localhost:~$
```

Para utilizar `tr` con un archivo, se redirige la entrada estándar desde un archivo usando `<`:

```bash
sysadmin@localhost:~$ more example.txt
/etc/ppp:
chap-secrets
ip-down
ip-down.ipv6to4
ip-up
ip-up.ipv6to4
ipv6-down
ipv6-up
options
pap-secrets
peers
sysadmin@localhost:~$ tr 'a-z' 'A-Z' < example.txt
/ETC/PPP:
CHAP-SECRETS
IP-DOWN
IP-DOWN.IPV6TO4
IP-UP
IP-UP.IPV6TO4
IPV6-DOWN
IPV6-UP
OPTIONS
PAP-SECRETS
PEERS
sysadmin@localhost:~$
```

- El comando `more example.txt` muestra el contenido del archivo `example.txt`.
- El comando `tr 'a-z' 'A-Z'` convierte las letras minúsculas en mayúsculas.
- La entrada estándar se redirige desde el archivo `example.txt` al comando `tr`.

Este método permite utilizar comandos que no aceptan archivos como argumentos, leyendo desde un archivo en lugar de desde el teclado.

<Card>
    
En la mayoría de los casos probablemente quieras tomar la salida resultante y colocarla en otro archivo:

```bash
sysadmin@localhost:~$ tr 'a-z' 'A-Z' < example.txt > newexample.txt 
sysadmin@localhost:~$ more newexample.txt
/ETC/PPP:           
CHAP-SECRETS                                             
IP-DOWN                                                               
IP-DOWN.IPV6TO4                                                      
IP-UP                                                                 
IP-UP.IPV6TO4                                                         
IPV6-DOWN                                                             
IPV6-UP                                                               
OPTIONS                                                               
PAP-SECRETS                                                          
sysadmin@localhost:~$
```

</Card>

</Card>

</Card>

<Card>
    
## Buscar Archivos Utilizando el Comando Find

El comando `find` es una herramienta muy potente para buscar archivos y directorios en el sistema de archivos Linux. Puedes usar `find` para buscar archivos basándote en diversos criterios, como el nombre del archivo, el tamaño, los permisos, y más. 

A continuación se desglosa la sintaxis y algunos ejemplos de uso del comando find.

```bash
find [directorio de inicio] [opción de búsqueda] [criterio de búsqueda] [opción de resultado]
```

<Card>
    
- `directorio de inicio`: El directorio donde comenzará la búsqueda. El comando buscará en este directorio y en todos sus subdirectorios. Si no se especifica, el directorio actual (.) se utilizará como punto de partida.
</Card>

<Card>
    
- `opción de búsqueda`: Define qué tipo de metadatos del archivo se deben buscar, como el nombre del archivo, el tamaño, etc.
</Card>

<Card>
    
- `criterio de búsqueda`: El argumento que especifica los valores a buscar. Por ejemplo, si se busca por nombre de archivo, este argumento sería el nombre del archivo.
</Card>
<Card>
    
- `opción de resultado`: Define qué acción tomar cuando se encuentra un archivo que coincide con los criterios de búsqueda. Por defecto, find imprimirá el nombre del archivo en la salida estándar (STDOUT).
</Card>

### Ejemplos de uso

#### Buscar archivos por nombre

Para buscar archivos con un nombre específico en el directorio actual y todos sus subdirectorios:

```bash
find . -name "example.txt"
```

- `.`: El directorio actual.
- `-name "example.txt"`: Busca archivos con el nombre `example.txt`.
- Si el archivo `example.txt` se encuentra en el directorio actual o en cualquier subdirectorio, se mostrará en la salida.



#### Buscar archivos con comodines

Para buscar archivos cuyo nombre coincide con un patrón, como todos los archivos que terminan en .txt:

```bash
find . -name "*.txt"
```

#### Buscar archivos por tamaño

Para buscar archivos que sean mayores a 1GB:

```bash
find /path/to/start -size +1G
```

- Reemplaza /path/to/start con el directorio desde el cual quieres comenzar la búsqueda.

#### Buscar archivos por fecha de modificación

Para encontrar archivos modificados en los últimos 7 días:

```bash
find /path/to/start -mtime -7
```

- `-mtime -7`: indica archivos modificados en los últimos 7 días.

### Mostrar os detalles de los archivos

Por ejemplo, puede haber siete archivos llamados hosts; si supieras que el archivo host que necesitas se había modificado recientemente, entonces sería útil ver la hora de modificación del archivo.

Para ver estos detalles del archivo, utiliza la opción -ls para el comando find:

```bash
sysadmin@localhost:~$ find /etc -name hosts -ls 2> /dev/null
    41   4 -rw-r--r--   1 root     root      158 Jan 12 2010 /etc/hosts
  6549   4 -rw-r--r--   1 root     root      1130 Jul 19 2011 /etc/avahi/hosts 
sysadmin@localhost:~$
```

<Card color='blue'>
    
**Nota:** Las dos primeras columnas de la salida anterior son el `número inodo del archivo` y el número de bloques que el archivo utiliza para el almacenamiento. Ambos están más allá del alcance del tema en cuestión. 

El resto de las columnas son la salida típica del comando `ls -l`: tipo de archivo, permisos, cuenta de enlaces físico, usuario propietario, grupo propietario, tamaño del archivo, hora de modificación del archivo y el nombre de archivo.

</Card>

<Card>
    
## /dev/null

`/dev/null` es un dispositivo especial en Linux que se utiliza para descartar datos. Cuando se redirige la salida a `/dev/null`, los datos se eliminan y no se almacenan en ningún lugar.

```bash
sysadmin@localhost:~$ find /etc -name hosts 2> /dev/null              
/etc/hosts
/etc/avahi/hosts                                                      
sysadmin@localhost:~$
```

</Card>

</Card>

<Card>
    
### Usar Múltiples Opciones
En Linux, los comandos pueden aceptar múltiples opciones para realizar tareas específicas. Por ejemplo, el comando `ls -l -a` lista archivos en formato largo e incluye archivos ocultos.

<Card>
    

### Visualización de los Archivos Utilizando el Comando `less`
El comando `less` permite visualizar archivos de manera interactiva. Se utiliza `less nombre_del_archivo` para abrir y navegar por el archivo.

### La Pantalla de Ayuda con el Comando `less`
Para acceder a la ayuda de `less`, se utiliza la tecla `h` dentro del visor de `less`. Muestra una lista de comandos disponibles.

### Los Comandos de Movimiento para `less`
Dentro de `less`, se pueden utilizar comandos como `j` para bajar una línea, `k` para subir una línea, `f` para avanzar una página, y `b` para retroceder una página.

### Comandos de Búsqueda `less`
Para buscar texto dentro de `less`, se usa `/` seguido del término de búsqueda. Presionar `n` repite la búsqueda hacia adelante y `N` hacia atrás.
</Card>

<Card>
    

### Revisando los Comandos `head` y `tail`
El comando `head` muestra las primeras líneas de un archivo, mientras que `tail` muestra las últimas líneas. `head -n 10 archivo` muestra las primeras 10 líneas y `tail -n 10 archivo` muestra las últimas 10 líneas.

### El Valor Negativo de la Opción `-n`
En `head` y `tail`, `-n -5` muestra todas las líneas excepto las últimas 5. En `tail`, `-n +5` comienza a mostrar desde la línea 5.

### El Valor Positivo del Comando `tail`
El comando `tail -n +5 archivo` muestra el archivo desde la quinta línea hasta el final.

### Seguimiento de los Cambios en un Archivo
El comando `tail -f archivo` permite ver en tiempo real las líneas añadidas al final de un archivo, útil para monitorear logs.
</Card>

### Ordenar Archivos o Entradas
El comando `sort` ordena líneas de un archivo o entrada. `sort archivo` ordena el contenido alfabéticamente.

### Visualización de las Estadísticas de Archivo con el Comando `wc`
El comando `wc` cuenta líneas, palabras y caracteres en un archivo. `wc archivo` muestra el recuento de líneas, palabras y caracteres en ese orden.

### Utilizar el Comando `cut` para Filtrar el Contenido del Archivo
El comando `cut` extrae secciones de cada línea de un archivo. `cut -d':' -f1 archivo` extrae el primer campo de cada línea usando `:` como delimitador.

<Card>

### Utilizar el Comando `grep` para Filtrar el Contenido del Archivo
El comando `grep` busca patrones en archivos. `grep "patrón" archivo` muestra las líneas que contienen el patrón.

### Las Expresiones Regulares Básicas
Las expresiones regulares son patrones utilizados para buscar texto. Se utilizan en comandos como `grep` para búsquedas avanzadas.

<Card>
    

#### Expresiones Regulares Básicas - el Carácter .
El carácter `.` en una expresión regular representa cualquier carácter individual. 
`grep "a.b" archivo` encuentra `a` seguido de cualquier carácter y luego `b`. Por ejemplo, `acb` o `a1b`.
</Card>

<Card>
    
#### Expresiones Regulares Básicas - el Carácter [ ]
Los corchetes `[ ]` se usan para especificar un conjunto de caracteres. `grep "[aeiou]" archivo` encuentra líneas con cualquier vocal.
</Card>

<Card>
    
#### Expresiones Regulares Básicas - el Carácter *
El asterisco `*` representa cero o más repeticiones del carácter anterior. `grep "a*" archivo` encuentra `a`, `aa`, `aaa`, etc.
</Card>

<Card>
    
#### Expresiones Regulares Básicas - los Caracteres ^ y $
El carácter `^` indica el inicio de una línea y `$` el final. `grep "^a" archivo` encuentra líneas que comienzan con `a`. `grep "a$" archivo` encuentra líneas que terminan con `a`.
</Card>

<Card>
    
#### Expresiones Regulares Básicas - el Carácter \
El carácter `\` escapa caracteres especiales. `grep "\^a" archivo` busca el carácter `^` seguido de `a`.
</Card>

<Card>
    
### Expresiones Regulares Extendidas
Las expresiones regulares extendidas permiten búsquedas más avanzadas. `grep -E "patrón" archivo` activa las expresiones regulares extendidas. 

#### Expresiones Regulares Extendidas - el Carácter +

El carácter `+` representa una o más repeticiones del carácter anterior. `grep -E "a+" archivo` encuentra `a`, `aa`, `aaa`, etc.

#### Expresiones Regulares Extendidas - el Carácter ?

El carácter `?` representa cero o una repetición del carácter anterior. `grep -E "a?" archivo` encuentra `a` o nada.

#### Expresiones Regulares Extendidas - el Carácter `{n}`

El carácter `{n}` representa exactamente `n` repeticiones del carácter anterior. `grep -E "a{3}" archivo` encuentra `aaa`.

#### Expresiones Regulares Extendidas - el Carácter `{n,}` 

El carácter `{n,}` representa al menos `n` repeticiones del carácter anterior. `grep -E "a{3,}" archivo` encuentra `aaa`, `aaaa`, etc.

</Card>
</Card>

### El Comando `xargs`
El comando `xargs` toma la salida de un comando y la convierte en argumentos para otro comando. `comando1 | xargs comando2` ejecuta `comando2` con la salida de `comando1` como argumentos.

Similares a las barras verticales, `xargs` es una herramienta poderosa para combinar comandos y realizar tareas más complejas, la diferencia es que `xargs` toma la salida de un comando y la convierte en argumentos para otro comando, en lugar de pasar la salida de un comando a otro como lo hacen las barras verticales.

<Card>
    
## Diferencias entre xargs y las barras verticales

```bash title='Ejemplo de Uso de xargs'
sysadmin@localhost:~$ ls
sample1.txt  sample2.txt  sample3.txt
sysadmin@localhost:~$ ls | xargs rm
sysadmin@localhost:~$ ls
sysadmin@localhost:~$
```

- El comando `ls` muestra los archivos `sample1.txt`, `sample2.txt` y `sample3.txt`.
- La salida de `ls` se envía a `xargs rm`, que elimina los archivos.
- Después de ejecutar el comando, los archivos ya no están en el directorio.
- El comando `ls` muestra que los archivos han sido eliminados.
- En este ejemplo, `xargs` toma la salida de `ls` y la convierte en argumentos para el comando `rm`.

```bash title='Ejemplo de uso de barras verticales'
sysadmin@localhost:~$ ls | rm
rm: missing operand
Try 'rm --help' for more information.
sysadmin@localhost:~$
```

- El comando `ls` muestra los archivos `sample1.txt`, `sample2.txt` y `sample3.txt`.
- La salida de `ls` se envía a `rm`, pero `rm` no recibe los archivos como argumentos.
- `rm` muestra un mensaje de error porque no se proporcionaron archivos para eliminar.
- En este ejemplo, las barras verticales no funcionan porque `rm` no recibe los archivos como argumentos.

- `xargs` es útil cuando se necesita que la salida de un comando se convierta en argumentos para otro comando.
</Card>

</Card>