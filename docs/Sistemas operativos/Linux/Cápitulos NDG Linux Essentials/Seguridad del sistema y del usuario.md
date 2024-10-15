---

title: Seguridad del sistema y del usuario
sidebar_position: 13

---

## Seguridad del Sistema y del Usuario

La **seguridad del sistema y del usuario** en Linux es crucial para mantener la integridad y la confidencialidad de la información. Implica la gestión de permisos, la configuración de cuentas de usuario y la protección de archivos y recursos del sistema. Las medidas de seguridad comunes incluyen la correcta configuración de archivos de configuración de usuarios y grupos, y el uso de herramientas de administración de usuarios y permisos.

### Las Cuentas de Usuario

Las cuentas de usuario permiten a los individuos interactuar con el sistema. Cada usuario tiene una cuenta única que incluye un nombre de usuario y un identificador único (UID). Los permisos y privilegios de los usuarios se configuran a través de estos identificadores y los grupos a los que pertenecen.

### El Archivo `/etc/passwd`

El archivo `/etc/passwd` contiene información básica sobre cada cuenta de usuario. Cada línea representa una cuenta y tiene el siguiente formato:

```bash
# /etc/passwd
root:x:0:0:root:/root:/bin/bash
```

- **root**: Nombre de usuario.
- **x**: Contraseña encriptada (antes se almacenaba aquí, ahora se almacena en `/etc/shadow`)

### El Archivo `/etc/shadow`

El archivo `/etc/shadow` contiene contraseñas encriptadas y otros datos de seguridad relacionados con las cuentas de usuario. Solo el usuario root puede leer este archivo.

```bash
# /etc/shadow

root:$6
```

### Visualizar información de la cuenta de usuario

Para visualizar información de la cuenta de usuario, se puede utilizar el comando `id`:

```bash
id root
```

- El comando `id` muestra el nombre de usuario, el UID y los GIDs (identificadores de grupo) de un usuario.

### Visualización de la infomación de inicio de sesión

El comando `who` muestra información sobre los usuarios que están conectados al sistema:

```bash
who
```

- Muestra el nombre de usuario, la terminal y la hora de inicio de sesión.

### Las cuentas de sistema

Las cuentas de sistema son cuentas de usuario que se utilizan para ejecutar servicios y aplicaciones del sistema. Estas cuentas no están destinadas a ser utilizadas por usuarios humanos y generalmente no tienen una contraseña asignada.

### Cuentas de grupo

Los grupos permiten a los administradores de sistemas asignar permisos a varios usuarios al mismo tiempo. Los grupos se definen en el archivo `/etc/group`:

```bash
# /etc/group
root:x:0:miembros
```

- **root**: Nombre del grupo.
- **x**: Contraseña encriptada (antes se almacenaba aquí, ahora se almacena en `/etc/gshadow`).
- **0**: GID (identificador de grupo).
- **miembros**: Lista de usuarios que pertenecen al grupo.

#### Ejemplo de creación de un grupo

```bash
developers:x:1000:santiago,juan,pedro
```

- Aquí, `developers` es el nombre del grupo, `1000` es el GID y `santiago`, `juan` y `pedro` son los usuarios que pertenecen al grupo.


### Visualizando la información de un grupo

Para visualizar información de un grupo, se puede utilizar el comando `getent`:

```bash
getent group developers
```

- Este comando muestra información sobre el grupo `developers`, incluido el nombre del grupo, la contraseña encriptada, el GID y los usuarios que pertenecen al grupo.

### Cambiando la propiedad de un archivo

Para cambiar la propiedad de un archivo, se puede utilizar el comando `chgrp`:

```bash
chgrp developers file.txt
```

- Este comando cambia el grupo propietario de `file.txt` al grupo `developers`.

## Iniciar sesión como Root

Para iniciar sesión como root, se puede utilizar el comando `su`:

```bash
su -
```

Este comando cambia el usuario actual a root y abre una nueva sesión de shell como root.

- **Nota**: Se debe tener cuidado al utilizar la cuenta de root, ya que tiene permisos completos para realizar cambios en el sistema.
- **Consejo**: Es recomendable utilizar la cuenta de root solo cuando sea necesario y utilizar cuentas de usuario normales para tareas diarias.

### Uso del comando su

Para cambiar a otro usuario, se puede utilizar el comando `su` seguido del nombre de usuario:

```bash
su santiago
```

---

El comando `sudo` permite a los usuarios ejecutar comandos con los privilegios de otro usuario, generalmente root. Para ejecutar un comando con `sudo`, se debe utilizar el prefijo `sudo` seguido del comando:

```bash
sudo comando
```

Por ejemplo para actualizar el sistema:

```bash
sudo apt-get update
```

### Configuración de `sudo`

Para configurar `sudo`, se debe agregar un usuario al archivo `/etc/sudoers`:

```bash
sudo visudo
```

- Este comando abre el archivo `/etc/sudoers` en un editor de texto. Se puede agregar una línea para permitir que un usuario ejecute comandos con `sudo`.

- **Nota**: Es importante tener cuidado al editar el archivo `/etc/sudoers`, ya que un error en la configuración puede causar problemas de seguridad.

### Utilizando el comando w

El comando `w` muestra información sobre los usuarios que están conectados al sistema, mostrando el nombre de usuario, la terminal, la dirección IP y la hora de inicio de sesión:

```bash
w
```