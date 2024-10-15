---

title: Competencias de Línea de Comandos
sidebar_position: 4

---

<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/4-LPI-Graphics.png" height="400px"/>

<p>

## ¿Por qué conocer la línea de comando es importante? ¡Flexibilidad y Movilidad!.

Mediante la comprensión de los fundamentos de Linux, tienes la capacidad de trabajar en CUALQUIER distribución de Linux. 

Esto podría significar una compañía con ambiente mixto o una nueva empresa con una distribución Linux diferente.

</p>

</Row>

La mayoría de las personas están familiarizadas con la Interfaz Gráfica de Usuario (GUI), popularizada por Apple y Microsoft, que facilita el uso y gestión de una computadora, especialmente para herramientas de gráficos y video. 

Antes de la GUI, se usaba la Interfaz de Línea de Comandos (CLI), que requiere escribir comandos en el teclado para controlar el sistema, aunque inicialmente puede ser difícil debido a la necesidad de memorizar comandos, la CLI ofrece un control más preciso, rapidez y la capacidad de automatizar tareas mediante scripting. En Linux, a pesar de contar con varios entornos GUI, la CLI permite un control más eficaz del sistema.

<Card>
    
## Interfaz de Línea de Comandos (CLI)

La Interfaz de Línea de Comandos (CLI) es una interfaz textual donde el usuario introduce comandos que la computadora ejecuta. 

Un terminal proporciona el entorno para la CLI, aceptando y pasando los comandos a un shell, el shell interpreta y ejecuta las instrucciones con el sistema operativo. Los resultados se muestran en el terminal, y si hay problemas, se despliegan mensajes de error.

<Card>    
### Acceso a la terminal

Hay varias formas de acceder a la terminal. 

Algunos sistemas arrancan directamente en la terminal, como los servidores, que no necesitan una GUI para operar eficientemente. 

En sistemas con GUI, se puede acceder a la terminal mediante una terminal de GUI (un programa dentro del entorno gráfico) o una terminal virtual (accedida mediante combinaciones de teclas como Ctrl-Alt-F1).

:::info
En las máquinas virtuales puede que las terminales virtuales no estén disponibles.
:::

</Card>

</Card>

<Card>
    
## Prompt

Una ventana de terminal muestra un prompt, que aparece cuando no se ejecuta ningún comando y cuando la salida del comando se ha mostrado. 

El prompt indica al usuario que introduzca un comando y suele contener información sobre el usuario y el sistema, como en:

```bash    
sysadmin@localhost:$ 
```

- Aquí, **_sysadmin_** es el usuario, **_localhost_** es el sistema y _**~**_ representa el directorio principal del usuario.

<Card>
    
El símbolo **__~__** es una abreviación para el directorio principal del usuario, que se encuentra en **__/home__** seguido del nombre de la cuenta de usuario (por ejemplo, **__/home/sysadmin__**).

</Card>

</Card>

<Card>
    
## El Shell

Un shell es el intérprete que traduce los comandos del usuario en acciones del sistema operativo. En Linux, el **BASH shell** es el más común y ofrece funciones avanzadas como historial de comandos, **scripting** (ejecución de comandos desde archivos con características de programación), **alias** (sobrenombres cortos para comandos largos) y **variables** (almacenan información para modificar funciones y comandos).

</Card>

<Card>
    
## Formato de Comandos

Los comandos en Linux pueden utilizarse solos o con entradas adicionales: opciones y argumentos.

Formato Típico:

```bash
comando [opciones] [argumentos]
```

- **Opciones**: Modifican el comportamiento del comando.
- **Argumentos**: Proporcionan información adicional, como nombres de archivos o usuarios.
Cada opción y argumento se separa por un espacio, y las opciones a menudo pueden combinarse.

:::danger
Linux distingue entre mayúsculas y minúsculas, por lo que comandos, opciones, argumentos, variables y nombres de archivos deben ingresarse exactamente como se muestran.
:::

### Ejemplo con el comando `ls`

<Card>

#### Sin argumentos:
    
```bash
sysadmin@localhost:~$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos

sysadmin@localhost:~$ 
```

- El comando `ls` lista los archivos y directorios en el directorio actual.

</Card>

<Card>
    
#### Con un argumento (directorio específico):

```bash
sysadmin@localhost:~$ ls /etc/ppp
ip-down.d  ip-up.d

sysadmin@localhost:~$ 
```

- El comando `ls /etc/ppp` lista los archivos y directorios en el directorio **_/etc/ppp_**.

</Card>

<Card>
    
#### Con múltiples argumentos (varios directorios):

```bash
sysadmin@localhost:~$ ls /etc/ppp /etc/ssh
/etc/ppp:
ip-down.d  ip-up.d
/etc/ssh:
moduli  ssh_host_dsa_key.pub  ssh_host_rsa_key  sshd_config
ssh_config  ssh_host_ecdsa_key  ssh_host_rsa_key.pub
ssh_host_dsa_key  ssh_host_ecdsa_key.pub  ssh_import_id

sysadmin@localhost:~$ 
```

- El comando `ls /etc/ppp /etc/ssh` lista los archivos y directorios en los directorios **_/etc/ppp_** y **_/etc/ssh_**.

</Card>

</Card>

<Card>
    
## Trabajando con las Opciones

Las opciones se utilizan para modificar el comportamiento de un comando en Linux. Pueden ser de una letra (precedidas por un solo guión `-`) o palabras completas (precedidas por dos guiones `--`).

### Ejemplos de Opciones:

<Card>

**Opción de una letra:**

```bash
sysadmin@localhost:~$ ls -l
total 0
drwxr-xr-x 1 sysadmin sysadmin 0 Jan 29  2015 Desktop
drwxr-xr-x 1 sysadmin sysadmin 0 Jan 29  2015 Documents
```

- Aquí, `-l` es la opción de lista detallada.

</Card>

<Card>

**Opción combinada:**

```bash
sysadmin@localhost:~$ ls -lh /usr/bin/perl
-rwxr-xr-x 2 root root 11K Feb  4  2014 /usr/bin/perl
```

- Aquí, `-lh` combina las opciones `-l` (lista detallada) y `-h` (formato legible para humanos).    

</Card>

<Card>
    
**Opción de palabra completa:**

```bash
sysadmin@localhost:~$ ls --human-readable /usr/bin/perl
-rwxr-xr-x 2 root root 11K Feb  4  2014 /usr/bin/perl
```

- Aquí, `--human-readable` es la opción de palabra completa para el formato legible para humanos, equivalente a `-h`.

</Card>

<Card>
    
**Uso de Opciones con Argumentos:**

Las opciones pueden utilizarse junto con argumentos, y algunas opciones requieren sus propios argumentos.

```bash
sysadmin@localhost:~$ ls -l /etc/ppp
total 0
drwxr-xr-x 1 root root 10 Jan 29  2015 ip-down.d
drwxr-xr-x 1 root root 10 Jan 29  2015 ip-up.d
```

- Aquí, `-l` es la opción de lista detallada y `/etc/ppp` es el argumento.

</Card>

Las opciones y los argumentos permiten personalizar la ejecución de comandos, ofreciendo flexibilidad y control sobre los resultados.

</Card>

<Card>
    
## Historial de los Comandos

Cada vez que se ejecuta un comando en una terminal, este se almacena en la "lista de historial", facilitando su reutilización.

<Card>
    
**Ver el historial**

Para ver la lista de comandos previos, se puede utilizar el comando `history`.

```bash
sysadmin@localhost:~$ history
    1  ls
    2  ls /etc/ppp
    3  ls /etc/ppp /etc/ssh
    4  ls -l
    5  ls -lh /usr/bin/perl
```

</Card>

<Card color='green'>
    
### Navegar y Reutilizar Comandos:

- **Flecha hacia arriba ↑:** Muestra el comando anterior en la línea de prompt.
- **Flecha hacia abajo ↓:** Muestra el siguiente comando en la lista.
- **Entrar:** Ejecuta el comando visualizado.
- **Flechas izquierda ← y derecha →:** Permiten editar el comando actual.

</Card>

<Card>

**Ejecución Rápida:**

```bash
sysadmin@localhost:~$ !3
cal 5 2015
     May 2015
Su Mo Tu We Th Fr Sa
               1  2
3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31
```

</Card>

<Card>
    
**Ejemplo de Uso de Historial:**

<Card>
    
Mostrar últimos 5 comandos
```bash
history 5
```
</Card>

<Card>

Ejecutar el último comando:
```bash
!!
```
</Card>

<Card>
    
Ejecutar el quinto comando desde el final:
```bash
!-5
```
</Card>

<Card>
    
Ejecutar el último comando `ls`:
```bash
!ls
```
</Card>

</Card>

</Card>

<Card>
    
## Alias

Un alias es un nombre corto o una palabra clave que se asigna a un comando o a una secuencia de comandos más largos. Cuando se usa el alias, el shell lo reemplaza con el comando original que se ha definido.

### Crear un Alias

Para crear un alias, se utiliza el comando `alias` seguido por el nombre del alias, un signo igual `=`, y el comando o secuencia de comandos que se desea asignar al alias.

```bash
alias ll='ls -l'
```

- Aquí, `ll` es el alias para `ls -l`.
- El alias se activa inmediatamente y se puede utilizar en la sesión actual.
- Para que el alias esté disponible en futuras sesiones, se debe agregar al archivo de configuración del shell.

### Ver un Alias

Para ver los alias existentes, se puede utilizar el comando `alias`.

```bash
alias
```

### Eliminar un Alias

Para eliminar un alias, se utiliza el comando `unalias` seguido del nombre del alias.

```bash
unalias ll
```

### 

</Card>