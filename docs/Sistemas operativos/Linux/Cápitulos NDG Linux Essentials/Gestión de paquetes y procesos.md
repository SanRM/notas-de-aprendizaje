---

title: Gestion de paquetes y procesos
sidebar_position: 11

---

<Card>

<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/9-LPI-Graphics.png" width="300px"/>

<p>

## Conociendo como Linux promueve carreras profesionales. 

**86%** de los profesionistas de Linux reportan que saber Linux les ha dado más oportunidades de carrera profesional. 

**64%** dicen que seleccionaron trabajar con Linux por su omnipresencia en la infraestructura de tecnología del mundo moderno.

**_-2014 Linux Jobs Report, Linux Foundation & Dice_**

</p>

</Row>

</Card>

<Card>
    
## Administración de Paquetes

La **administración de paquetes** en Linux se refiere al proceso de instalar, actualizar, eliminar y consultar software en el sistema operativo. Cada distribución puede tener su propio sistema de gestión de paquetes con herramientas y formatos específicos.

<Card>
    

## Administración de Paquetes en Debian

Debian utiliza el sistema de gestión de paquetes **APT** (Advanced Package Tool). Los paquetes en Debian tienen la extensión `.deb`.

### Agregando Paquetes

Para instalar un paquete en Debian, se utilizan los comandos:

```bash
sudo apt update
sudo apt install nombre_paquete
```

- `sudo` es un comando que permite ejecutar otros comandos con privilegios de administrador.
- `apt update` actualiza la lista de paquetes disponibles.
- `apt install` instala el paquete especificado.

### Actualización de Paquetes

Para actualizar los paquetes instalados a la última versión, se usan los comandos `apt-get upgrade` o `apt upgrade`. Para actualizar todos los paquetes y el sistema, se puede usar:

```bash
sudo apt update
sudo apt upgrade
```

- `apt upgrade` actualiza los paquetes instalados.

### Eliminación de Paquetes

Para eliminar un paquete sin eliminar sus archivos de configuración, se utiliza el comando `apt-get remov`e o `apt remove`:

```bash
sudo apt remove nombre_paquete
```

Para eliminar un paquete y sus archivos de configuración, se usa `apt-get purge` o `apt purge`:

```bash
sudo apt purge nombre_paquete
```

### Consulta de Paquetes

Para buscar un paquete en la base de datos de APT, se utiliza el comando `apt search`:

```bash
apt search nombre_paquete
```
</Card>

<Card>

## Administración de Paquetes en Red Hat

Red Hat utiliza el sistema de gestión de paquetes **RPM** (Red Hat Package Manager). Los paquetes en Red Hat tienen la extensión `.rpm`.

### Agregando Paquetes

Para instalar un paquete en Red Hat, se utilizan los comandos:

```bash
sudo rpm -i nombre_paquete.rpm
```

### Actualización de Paquetes

Para actualizar los paquetes instalados a la última versión, se usa el comando:

```bash
sudo rpm -U nombre_paquete.rpm
```

### Eliminación de Paquetes

Para eliminar un paquete en Red Hat, se utiliza el comando:

```bash
sudo rpm -e nombre_paquete
```

### Consulta de Paquetes

Para buscar un paquete en la base de datos de RPM, se utiliza el comando `rpm -q`:

```bash
rpm -q nombre_paquete
```


</Card>

</Card>
<Card>
    
## Kernel de Linux

El kernel es el núcleo del sistema operativo Linux. Se encarga de gestionar el hardware y proporciona servicios a las aplicaciones. 

El kernel maneja la comunicación entre el software y el hardware, la gestión de procesos, la administración de memoria y el sistema de archivos.

### Comprobación de la Versión del Kernel

Para verificar la versión del kernel en Linux, se puede usar el comando `uname`:

```bash
uname -r
```

### Jerarquía de Procesos

Los procesos en Linux tienen una jerarquía estructurada. Cada proceso tiene un proceso padre (**PPID**) y puede tener procesos hijos. El proceso inicial (**init**) o su equivalente moderno (**systemd**) es el proceso raíz de todos los demás.

### Visualización de la Jerarquía de Procesos

Para visualizar la jerarquía de procesos en Linux, se puede usar el comando `pstree`:

```bash
pstree
```

### El comando ps (Process Status)

El comando `ps` se utiliza para mostrar información sobre los procesos en ejecución en el sistema. Algunas opciones comunes son:

- `ps aux`: Muestra todos los procesos en el sistema.
- `ps -ef`: Muestra todos los procesos en formato de lista.
- `ps -eLf`: Muestra todos los hilos de los procesos.
- `ps -ejH`: Muestra la jerarquía de procesos.
- `ps -e --forest`: Muestra la jerarquía de procesos en formato de árbol.
- `ps aux | grep proceso`: Muestra información sobre un proceso específico.

### El comando top

El comando `top` muestra una lista en tiempo real de los procesos en ejecución en el sistema, junto con información sobre el uso de CPU, memoria y otros recursos.

- Para salir de `top`, se puede presionar `q`.

### El comando free

El comando `free` muestra información sobre el uso de memoria en el sistema, incluyendo la memoria total, la memoria libre y la memoria utilizada.

- Para ver la información en un formato más legible, se puede usar `free -h`.

</Card>

<Card>
    
## Archivos de registro

Los archivos de registro (Logs) en Linux contienen información sobre eventos, errores y actividades del sistema. Los archivos de registro se encuentran en el directorio `/var/log`.

### Visualización de archivos de registro

Para visualizar los archivos de registro en Linux, se pueden usar comandos como `cat`, `less`, `tail` o `grep`:

Por ejemplo, para ver los últimos mensajes de `syslog`, se puede usar:

```bash
tail /var/log/syslog
```

### El comando dmseg

El comando `dmesg` muestra mensajes del buffer de anillos del kernel. Es útil para diagnosticar problemas de hardware y ver mensajes del kernel durante el arranque.

Para ver los mensajes del buffer de anillos del kernel, se puede usar:

```bash
dmesg
```

### Filtrado de mensajes específicos

Para buscar mensajes específicos, se puede usar `grep` con `dmesg`:

```bash
dmesg | grep mensaje
```

</Card>