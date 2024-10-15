---

title: Crear un nuevo usuario
sidebar_position: 14

---

<Card>
    
<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/13-LPI-Graphics.png" width="400"/>

<p>

## ¿Quién es LPI? 

El Linux Professional Institute (o «Instituto Profesional de Linux» en español) es una organización comprometida en ayudar miembros de la comunidad de Linux y de código abierto a crecer en sus oportunidades profesionales, ofreciendo recursos profesionales y certificaciones de habilidades.

_- Linux Professional Institute_

</p>

</Row>

</Card>

La creación de usuarios en Linux es una tarea fundamental para la administración de sistemas. Esto permite gestionar el acceso al sistema y asegurar que cada usuario tenga un entorno y permisos apropiados.

<Card>
    
## Crear un Grupo

Un grupo en Linux es una colección de usuarios que comparten permisos y recursos. Para crear un nuevo grupo se utiliza el comando groupadd. La sintaxis básica es:

```bash
sudo groupadd nombre_del_grupo
```

Por ejemplo, para crear un grupo llamado developers, se ejecuta:

```bash
sudo groupadd developers
```

### Consideraciones para el ID de grupo

El ID de grupo (GID) es un número que identifica de forma única a un grupo en el sistema. Por defecto, el sistema asigna un GID a cada grupo creado. Sin embargo, es posible especificar un GID específico al crear un grupo. Para ello, se utiliza la opción `-g` seguida del GID deseado. Por ejemplo:

```bash
sudo groupadd -g 1001 developers
```

### Consideraciones para Nombrar un Grupo

Los nombres de grupo deben ser únicos en el sistema. Deben seguir las convenciones de nombres válidos, sin espacios ni caracteres especiales. 

<Card color='blue'>
Es recomendable usar nombres descriptivos que reflejen la función o los miembros del grupo.
</Card>

### Modificar un grupo

Para modificar un grupo existente, se usa el comando `groupmod`. Por ejemplo, para cambiar el nombre de un grupo de oldgroup a newgroup, se usa:

```bash
sudo groupmod -n newgroup oldgroup
```

Para cambiar el GID de un grupo, se utiliza:

```bash
sudo groupmod -g nuevo_gid nombre_del_grupo
```

### Eliminar un grupo

Para eliminar un grupo, se utiliza el comando `groupdel`. Por ejemplo, para eliminar el grupo developers, se ejecuta:

```bash
sudo groupdel developers
```

</Card>


<Card>

### Archivo /etc/default/useradd

<Card color='blue'>
    
El comando `useradd` se utiliza para crear nuevos usuarios en Linux. Al crear un usuario, se pueden especificar opciones como el directorio `home`, el grupo primario y el shell predeterminado.

</Card>

El archivo `/etc/default/useradd` contiene configuraciones predeterminadas para el comando `useradd`. Incluye opciones como el directorio `home` por defecto y el grupo predeterminado. 

Un ejemplo de línea en este archivo puede ser:

```bash
GROUP=100
HOME=/home
```

### Archivo /etc/login.defs

El archivo `/etc/login.defs` configura parámetros de inicio de sesión, como los valores predeterminados para el UID y el GID mínimos y máximos. 

También se usa para definir la configuración de expiración de contraseñas y otros parámetros de seguridad. Un ejemplo de línea relevante puede ser:

```bash
UID_MIN 1000
GID_MIN 1000
```

<Card>
    
## Crear un usuario

Para crear un nuevo usuario, se utiliza el comando `useradd`. La sintaxis básica es:

```bash
sudo useradd nombre_del_usuario
```

Por ejemplo, para crear un usuario llamado john:

```bash
sudo useradd john
```

### Consideraciones de la cuenta

Al crear un usuario, es importante considerar la asignación del grupo primario y los permisos. El usuario debe tener un directorio `home` asignado y configurado correctamente para evitar problemas de acceso.

El comando `useradd` permite crear un nuevo usuario y configurar opciones adicionales como el directorio `home`, el `grupo primario`, entre otros. Algunas opciones útiles son:

- `-m`: Crea el directorio `home` del usuario si no existe.
- `-s`: Especifica el shell predeterminado del usuario.

Ejemplo:

```bash
sudo useradd -m -s /bin/bash john
```

Donde:

- `-m`: Crea el directorio `home` del usuario si no existe.
- `-s /bin/bash`: Establece el shell predeterminado del usuario como `/bin/bash`.
- `john`: Nombre del usuario a crear.

### Elegir una contraseña

Elegir una contraseña segura es crucial para la seguridad del sistema. Debe ser compleja y difícil de adivinar, combinando letras, números y caracteres especiales.

### Establecer una contraseña de usuario

Para establecer o cambiar la contraseña de un usuario, se usa el comando passwd. La sintaxis es:

```bash
sudo passwd nombre_del_usuario
```

Por ejemplo, para establecer la contraseña del usuario john:

```bash
sudo passwd john
```

## Usando el comando chage

El comando `chage` se utiliza para gestionar las políticas de expiración de contraseñas de los usuarios. Permite configurar cuándo expira la `contraseña`, `el período de gracia`, y otros parámetros. Algunos ejemplos de uso son:

- Para mostrar la información de expiración de la contraseña:

```bash
sudo chage -l nombre_del_usuario
```

- Para establecer la expiración de la contraseña en 30 días:

```bash
sudo chage -M 30 nombre_del_usuario
```

## Modificar un usuario

Para modificar las propiedades de un usuario, se utiliza el comando `usermod`. Algunas opciones comunes incluyen:

- `-aG`: Añade el usuario a uno o más grupos.
- `-d`: Cambia el directorio home del usuario.
- `-s`: Cambia el shell por defecto.

La sintaxis básica es:

```bash
sudo usermod [opciones] nombre_del_usuario
```

Ejemplo para añadir un usuario al grupo `developers`:

```bash
sudo usermod -aG developers john
```

## Eliminar un usuario

Para eliminar un usuario, se utiliza el comando `userdel`. La opción `-r` elimina también el directorio `home` del usuario. La sintaxis básica es:

```bash
sudo userdel -r nombre_del_usuario
```

Por ejemplo, para eliminar el usuario john y su directorio `home`:

```bash
sudo userdel -r john
```

</Card>

</Card>