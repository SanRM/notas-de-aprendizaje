---

title: Propiedad y permisos
sidebar_position: 15

---

<Card>
    
<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/14-LPI-Graphics.png" width="250px"/>

<p>
## ¿Porqué obtener una certificación LPI?

LPI ofrece credenciales que son reconocidas a lo ancho de toda la industria como un medio de validar habilidades a través de todas las distribuciones de Linux; para proporcionarte conocimiento básico y el más amplio rango de oportunidades de trabajo. 

**Linux Essentials es un primer gran paso en acelerar tu carrera tecnológica.**
</p>

</Row>

</Card>


<Card>
## Propiedad y Permisos

### Introducción

La propiedad de archivo es fundamental para la seguridad en sistemas Linux. Cada archivo tiene un propietario de usuario y un propietario de grupo. Los permisos determinan quién puede leer, escribir o ejecutar el archivo. Este capítulo aborda cómo especificar los propietarios de usuario y grupo de un archivo, y cómo gestionar los permisos de archivos y directorios, incluyendo la modificación de permisos.
</Card>


<Card>
### Propiedad de Archivo
#### Los Comandos newgrp y groups
<Card>
El comando `newgrp` permite al usuario cambiar temporalmente su grupo de trabajo, sin necesidad de cerrar sesión. Esto es útil cuando se necesita ejecutar comandos o crear archivos bajo un grupo diferente al grupo primario del usuario. Por otro lado, el comando `groups` muestra todos los grupos a los que pertenece el usuario actual, lo que es útil para verificar permisos y asociaciones de grupo.

Ejemplo de uso de `newgrp`:
```bash
# Cambia el grupo actual a 'developers'
newgrp developers
```

Ejemplo de uso de `groups`:
```bash
# Muestra los grupos del usuario actual
groups
```
</Card>
</Card>

<Card>
#### Los Comandos chgrp y stat
<Card>
El comando `chgrp` cambia el grupo propietario de un archivo o directorio, útil para ajustar permisos de acceso en un entorno colaborativo. El comando `stat` proporciona información detallada sobre un archivo, incluyendo su tamaño, tiempos de modificación, y propiedad y permisos.

Ejemplo de uso de `chgrp`:
```bash
# Cambia el grupo propietario del archivo 'document.txt' a 'developers'
chgrp developers document.txt
```

Ejemplo de uso de `stat`:
```bash
# Muestra información detallada del archivo 'document.txt'
stat document.txt
```
</Card>
</Card>

<Card>
#### Comando chown
<Card>
El comando `chown` cambia la propiedad de un archivo o directorio, permitiendo modificar tanto el usuario propietario como el grupo propietario. Es crucial para administrar correctamente el acceso y la responsabilidad sobre los archivos.

Ejemplo de uso de `chown`:
```bash
# Cambia el usuario propietario a 'john' y el grupo propietario a 'developers' del archivo 'document.txt'
chown john:developers document.txt
```
</Card>
</Card>

<Card color='cyan'>

### Permisos

<Card>
#### Comprendiendo los Permisos
Los permisos de archivo se dividen en tres categorías: lectura (r), escritura (w) y ejecución (x). Estos permisos se aplican a tres clases de usuarios: el propietario del archivo (u), el grupo propietario (g) y otros usuarios (o).

- **Lectura (r)**: Permite ver el contenido del archivo.
- **Escritura (w)**: Permite modificar el contenido del archivo.
- **Ejecución (x)**: Permite ejecutar el archivo si es un script o programa.

Ejemplo de permisos:
```bash
# Permisos rwxr-xr--
# Usuario propietario: rwx (lectura, escritura, ejecución)
# Grupo propietario: r-x (lectura, ejecución)
# Otros usuarios: r-- (lectura)
```
</Card>

<Card>
#### Escenario #1 - La importancia del Acceso al Directorio
<Card>
El acceso a un directorio requiere permisos de ejecución. Sin estos permisos, no se puede acceder al contenido del directorio, incluso si se tienen permisos de lectura en los archivos dentro del directorio.

Ejemplo:
```bash
# Añade permiso de ejecución para el usuario propietario en el directorio 'mydir'
chmod u+x mydir
```

Donde 

- `chmod` es el comando para cambiar permisos.
- `u` es el usuario propietario.
- `+x` añade permiso de ejecución.
- `mydir` es el directorio al que se le añade el permiso.

</Card>
</Card>

<Card>
#### Escenario #2 - Visualizar el Contenido del Directorio
<Card>
Para visualizar el contenido de un directorio, se necesitan permisos de lectura en el directorio. Esto permite listar los archivos y subdirectorios contenidos.

Ejemplo:
```bash
# Añade permiso de lectura para todos los usuarios en el directorio 'mydir'
chmod a+r mydir
```

Donde

- `a` es todos los usuarios.
- `+r` añade permiso de lectura.
- `mydir` es el directorio al que se le añade el permiso.

</Card>
</Card>

<Card>
#### Escenario #3 - Eliminar el Contenido del Directorio
<Card>
Para eliminar archivos dentro de un directorio, se necesitan permisos de escritura en el directorio, además de los permisos necesarios en los propios archivos.

Ejemplo:
```bash
# Añade permiso de escritura para el grupo propietario en el directorio 'mydir'
chmod g+w mydir
```
</Card>

Donde

- `g` es el grupo propietario.
- `+w` añade permiso de escritura.

</Card>

<Card>
#### Escenario #4 - Acceso a los Contenidos de un Directorio
<Card>
El acceso a los contenidos de un directorio requiere permisos de lectura y ejecución. La lectura permite ver los nombres de los archivos y la ejecución permite acceder a ellos.

Ejemplo:
```bash
# Añade permisos de lectura y ejecución para el usuario propietario en el directorio 'mydir'
chmod u+rx mydir
```

Donde

- `u` es el usuario propietario.
- `+rx` añade permisos de lectura y ejecución.

</Card>
</Card>

<Card>
#### Escenario #5 - La Complejidad de los Usuarios y Grupos
<Card>
La gestión de permisos se complica con múltiples usuarios y grupos. Establecer correctamente los permisos es crucial para evitar problemas de acceso. Los permisos deben ser configurados considerando las necesidades de acceso de diferentes usuarios y grupos.

Ejemplo:
```bash
# Cambia la propiedad del archivo 'project.txt' a 'alice' y su grupo a 'team'
chown alice:team project.txt
```

Donde

- `alice` es el nuevo usuario propietario.
- `team` es el nuevo grupo propietario.
- `project.txt` es el archivo al que se le cambia la propiedad.

</Card>
</Card>

<Card>
#### Escenario #6 - Prioridad de Permiso

Los permisos se aplican en el siguiente orden de prioridad: 

<Card>
    
## Usuario propietario

<Card>
    
### Grupo propietario

<Card>
    
#### Otros usuarios...

</Card>

</Card>

</Card>

Si un usuario es el propietario del archivo, los permisos para el usuario propietario son los que se aplican, independientemente de los permisos para el grupo o los otros usuarios.

</Card>

</Card>



<Card>
### Usando el Comando chmod
#### Método Simbólico
<Card>
El método simbólico usa letras para representar los permisos que se desean cambiar. Por ejemplo, `u+r` añade permiso de lectura al usuario propietario, mientras que `g-w` quita el permiso de escritura al grupo propietario.

Ejemplo:
```bash
# Añade permisos de lectura, escritura y ejecución para el usuario propietario, y permisos de lectura y ejecución para el grupo propietario
chmod u+rwx,g+rx filename
```

Donde

- `u` es el usuario propietario.
- `+rwx` añade permisos de lectura, escritura y ejecución.
- ',' separa los permisos para diferentes clases de usuarios.
- `g` es el grupo propietario.
- `+rx` añade permisos de lectura y ejecución.

</Card>
</Card>

<Card color='cyan'>
#### Método Numérico
<Card>
El método numérico usa números para representar los permisos. Cada tipo de permiso tiene un valor numérico:

<Card color='blue'>
    
## - **Lectura (4)**

## - **Escritura (2)**

## - **Ejecución (1)**

</Card>

Estos valores se suman para definir los permisos.

Ejemplo:
```bash
# Establece permisos 755 (rwxr-xr-x) para el archivo 'filename'
chmod 755 filename
```

Detalles de permisos numéricos:
- `7` (rwx) = lectura (4) + escritura (2) + ejecución (1)
- `5` (r-x) = lectura (4) + ejecución (1)
- `0` (---) = sin permisos
</Card>
</Card>


<Card>
### Revisión del Comando stat
El comando `stat` muestra información detallada sobre un archivo, incluyendo su tamaño, tiempos de modificación y permisos. Esto es útil para auditar y verificar la configuración de un archivo.

Ejemplo:
```bash
# Muestra información detallada del archivo 'document.txt'
stat document.txt
```

Salida típica del comando `stat`:
```
  File: 'document.txt'
  Size: 1024            Blocks: 8          IO Block: 4096   regular file
Device: 801h/2049d      Inode: 123456      Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   user)   Gid: ( 1000/   user)
Access: 2024-08-01 12:34:56.000000000 +0000
Modify: 2024-08-01 12:34:56.000000000 +0000
Change: 2024-08-01 12:34:56.000000000 +0000
 Birth: -
```
</Card>


<Card>
### umask

<Card>
    
El comando umask es una característica que se utiliza para determinar los permisos predeterminados establecidos al crear un archivo o directorio. Los permisos predeterminados se determinan cuando el valor de umask se resta de los permisos máximos predeterminados permisibles. Los permisos máximos por defecto son diferentes para los archivos y para los directorios:

|archivo|rw-rw-rw-|
|-------|---------|
|directorio|rwxrwxrwx|

Los permisos que se establecen inicialmente en un archivo cuando se crea no pueden exceder `rw-rw-rw-`. Para tener el permiso de ejecución para un archivo, primero tienes que crear el archivo y luego cambiar los permisos.

El comando umask se puede utilizar para mostrar el valor umask actual:

```bash
sysadmin@localhost:~$ umask
0002
```

Desglose de la salida:

- El primer `0` indica que umask se da como un número octal.
- El segundo `0` indica qué permisos hay que restar de los permisos por defecto de usuario propietario.
- El tercer `0` indica qué permisos hay que restar de los permisos por defecto del grupo propietario.
- El último número `2` indica qué permisos hay que restar de los permisos por defecto de otros.

Ten en cuenta que los diferentes usuarios pueden tener diferentes umasks. Normalmente, el usuario root tendrá una unmask más restrictiva que las cuentas de usuario:

```bash
root@localhost:~# umask
0022
```

</Card>

<Card>

#### Cómo Funciona umask


Para entender cómo funciona umask, supongamos que umask se establece en `027` y consideremos lo siguiente:

| File Default (valor predeterminado) | 667 |
|-------------------------------------|-----|
| Umask | -027 |
| Resultado | 640 |

La umask `027` significa que, por defecto los archivos nuevos recibirían los permisos `640` o `rw-r-----` tal como se demuestra a continuación:

```bash
sysadmin@localhost:~$ umask 027
sysadmin@localhost:~$ touch sample
sysadmin@localhost:~$ ls -l sample
-rw-r-----. 1 sysadmin sysadmin 0 Oct 28 20:14 sample
```

Debido a que los permisos predeterminados para los directorios son diferentes que para los archivos, una umask 027 daría lugar a diferentes permisos iniciales sobre los nuevos directorios:

| File Default (valor predeterminado) | 777 |
|-------------------------------------|-----|
| Umask | -027 |
| Resultado | 750 |

La umask `027` significa que, por defecto los directorios nuevos recibirían los permisos `750` o `rwxr-x-----` tal como se demuestra a continuación:

```bash
sysadmin@localhost:~$ umask 027
sysadmin@localhost:~$ mkdir test-dir
sysadmin@localhost:~$ ls -ld test-dir
drwxr-x---. 1 sysadmin sysadmin 4096 Oct 28 20:25 test-dir
```

La nueva umask sólo se aplicará a un archivo y los directorios creados durante esa sesión. Cuando arranque un nuevo shell, la umask por defecto será efectiva de nuevo.

Cambiar permanentemente la umask requiere la modificación del archivo `.bashrc` que se encuentra en el directorio `home` del usuario.

</Card>
</Card>


  