---

title: Permisos especiales, vínculos y ubicaciones de archivos

sidebar_position: 16

---

<Card>
    
<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/15-LPI-Graphics.png" width="300px"/>

<p>

## Es bueno ser buscado. 

**75%** de los profesionales de Linux han recibido una llamada de un reclutador en los últimos 6 Meses. Casi la mitad recibieron más de **6** llamadas.

</p>

</Row>

</Card>

<Card>
### Introducción

En el capítulo anterior se describieron los permisos básicos de Linux: leer, escribir y ejecutar. Estos permisos suelen ser suficientes para la mayoría de los casos, pero en situaciones donde varios usuarios deben trabajar conjuntamente en directorios y archivos, los permisos básicos pueden no ser adecuados. Los permisos especiales setuid, setgid y sticky bit se introducen para abordar estas necesidades específicas. Este capítulo explora cómo funcionan estos permisos especiales y cómo se configuran. También se detalla la estructura básica del sistema de archivos de Linux, regida por el Estándar de Jerarquía del Sistema de Archivos (FHS), que ayuda a comprender la ubicación y propósito de los directorios comunes en Linux.
</Card>

<Card>
### El Permiso setuid

El permiso setuid (set user ID) permite que un archivo se ejecute con los permisos del propietario del archivo, en lugar de los permisos del usuario que lo ejecuta. Este permiso es útil para ejecutar programas con privilegios elevados temporalmente. Para configurar el permiso setuid en un archivo, se usa el comando `chmod` con la opción `u+s`.

Ejemplo de configuración del permiso setuid:
```bash
chmod u+s archivo
```
Donde:

- `chmod` es el comando para cambiar los permisos de un archivo.
- `u` es el usuario propietario del archivo.
- `+s` establece el permiso setuid en el archivo.

</Card>

<Card>
### El Permiso setgid en un Archivo

El permiso setgid (set group ID) en un archivo permite que el archivo se ejecute con los permisos del grupo propietario del archivo. Esto es útil cuando un programa necesita acceso a recursos que pertenecen al grupo del archivo. Para configurar el permiso setgid en un archivo, se utiliza el comando `chmod` con la opción `g+s`.

Ejemplo de configuración del permiso setgid en un archivo:
```bash
chmod g+s archivo
```
Donde 

- 'g' es el grupo propietario del archivo.
- '+s' establece el permiso setgid en el archivo.

</Card>

<Card>
### El Permiso setgid en un Directorio

El permiso setgid en un directorio asegura que todos los archivos y subdirectorios creados dentro del directorio hereden el grupo del directorio padre, en lugar del grupo del usuario que creó los archivos. Para configurar el permiso setgid en un directorio, se utiliza el comando `chmod` con la opción `g+s`.

Ejemplo de configuración del permiso setgid en un directorio:
```bash
chmod g+s directorio
```
Donde `directorio` es el directorio al que se le desea aplicar el permiso setgid.
</Card>

<Card>
### Configurar el Permiso setgid

Para aplicar el permiso setgid a un archivo o directorio, se utiliza el comando `chmod`. La opción `g+s` establece el bit setgid en el archivo o directorio.
</Card>

<Card>
### El Permiso Sticky Bit

El permiso sticky bit permite que solo el propietario del archivo o el usuario root puedan eliminar o renombrar el archivo en un directorio. Este permiso es comúnmente utilizado en directorios de acceso público para evitar que los usuarios eliminen archivos que no les pertenecen. Para configurar el sticky bit en un directorio, se utiliza el comando `chmod` con la opción `+t`.

Ejemplo de configuración del permiso sticky bit en un directorio:
```bash
chmod +t directorio
```
Donde `directorio` es el directorio al que se le desea aplicar el sticky bit.
</Card>

<Card>
### Los Enlaces Físicos y los Enlaces Simbólicos

Los enlaces físicos (hard links) y los enlaces simbólicos (symbolic links) permiten que varios nombres de archivo apunten al mismo contenido. Un enlace físico es una referencia directa al inodo de un archivo, mientras que un enlace simbólico es un archivo especial que apunta a otro archivo por su ruta.
</Card>

<Card>
### Creación de los Vínculos Físicos

Para crear un enlace físico, se usa el comando `ln` sin opciones. Esto crea un nuevo nombre para el mismo archivo.

Ejemplo de creación de un enlace físico:
```bash
ln archivo enlace_fisico
```
Donde `archivo` es el archivo original y `enlace_fisico` es el nuevo nombre del enlace.

El enlace físico y el archivo original comparten el mismo inodo, lo que significa que cualquier cambio en uno de los archivos se reflejará en el otro.

<Card>
    
Un inodo es una estructura de datos en un sistema de archivos que almacena información sobre un archivo, como los permisos, el propietario, la ubicación física en el disco y los bloques de datos del archivo.

</Card>

<Card>
    
Un enlace físico es una referencia directa al inodo de un archivo, lo que significa que el archivo original y el enlace físico comparten el mismo contenido y metadatos. Si se elimina el archivo original, el enlace físico seguirá apuntando al contenido del archivo.

</Card>

</Card>

<Card>
### Creación de Enlaces Simbólicos

Para crear un enlace simbólico, se usa el comando `ln` con la opción `-s`. Esto crea un archivo que actúa como un puntero al archivo original.

Ejemplo de creación de un enlace simbólico:
```bash
ln -s archivo enlace_simbolico
```
Donde `archivo` es el archivo original y `enlace_simbolico` es el nuevo nombre del enlace.
</Card>

<Card>
### Comparación de los Enlaces Físicos y Simbólicos

Los enlaces físicos y simbólicos tienen diferencias significativas. Los enlaces físicos apuntan directamente al inodo del archivo, lo que significa que tienen el mismo contenido y metadatos. Los enlaces simbólicos apuntan a la ruta del archivo, y si el archivo original se elimina, el enlace simbólico queda roto. Los enlaces simbólicos pueden apuntar a directorios y archivos en diferentes sistemas de archivos, mientras que los enlaces físicos solo pueden apuntar a archivos en el mismo sistema de archivos.
</Card>

<Card color='blue'>
    
### Aplicaciones de los Enlaces Físicos y Simbólicos

Los enlaces físicos y simbólicos tienen diferentes aplicaciones en Linux. Los enlaces físicos se utilizan para crear múltiples nombres de archivo para el mismo contenido, lo que puede ser útil para organizar archivos o compartir archivos entre usuarios. Los enlaces simbólicos se utilizan para crear accesos directos a archivos o directorios, lo que facilita la navegación en el sistema de archivos.

</Card>

<Card>
### Estándar de Jerarquía del Sistema de Archivos

El Estándar de Jerarquía del Sistema de Archivos (FHS) define la estructura y organización de los directorios en un sistema Linux. Proporciona una guía sobre qué tipo de archivos y directorios deben colocarse en cada ubicación para mantener la coherencia entre las distribuciones de Linux.
</Card>

<Card>
### La Organización Dentro de la Jerarquía del Sistema de Archivos

La jerarquía del sistema de archivos se organiza en directorios principales como `/`, `/home`, `/var`, `/usr`, y `/etc`. Cada uno de estos directorios tiene un propósito específico, como almacenar archivos de configuración, datos de usuario, archivos ejecutables y datos variables del sistema. Conocer esta estructura ayuda a gestionar los archivos y directorios de manera eficiente en un sistema Linux.
</Card>