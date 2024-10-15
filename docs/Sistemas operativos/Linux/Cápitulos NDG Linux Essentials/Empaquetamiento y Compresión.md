---

title: Empaquetamiento y Compresión
sidebar_position: 7

---

<Card>
    
## Introducción a la Gestión de Archivos

### Empaquetamiento y Compresión

La gestión de archivos en la línea de comandos a menudo involucra empaquetamiento y compresión, que son dos procesos distintos pero relacionados:

| **Empaquetamiento** | **Compresión** |
|----------------------|----------------|
| Combina varios archivos en uno solo, reduciendo la sobrecarga y facilitando la transmisión.| Reduce el tamaño de los archivos eliminando información redundante.|

Se puede empaquetar varios archivos en uno y luego comprimir el archivo resultante, o comprimir archivos individuales. 

<Row>

<Card color='darkBlue'>
El proceso de empaquetamiento y compresión se conoce como `empaquetamiento de archivos`.
</Card>
    
<Card color='blue'>
Mientras que la compresión de archivos individuales se denomina `compresión`. 
</Card>

<Card color='cyan'>
Descomprimir un archivo empaquetado para extraer uno o más archivos se llama `desempaquetado`.
</Card>

</Row>

<Card>
    

## Beneficios del Empaquetamiento y la Compresión

Aunque el espacio en disco es barato, empaquetar y comprimir archivos sigue siendo útil:

<Card>
    
- **Facilidad de Distribución:** Para distribuir un gran número de archivos, como código fuente o documentos, es más práctico descargar un solo archivo empaquetado en lugar de archivos individuales.

</Card>

<Card>

- **Gestión de Archivos de Registro:** Los archivos de registro pueden llenar rápidamente el espacio en disco. Dividirlos por fecha y comprimir las versiones antiguas ayuda a gestionar el almacenamiento.

</Card>

<Card>

- **Copias de Seguridad:** Mantener directorios completos en un solo archivo empaquetado facilita la gestión de copias de seguridad en lugar de manejar cada archivo individualmente.

</Card>

<Card>

- **Transmisión Eficiente:** Dispositivos como cintas funcionan mejor con una transmisión secuencial de datos en lugar de archivos individuales. Comprimir archivos antes de enviarlos y descomprimirlos en el destino puede ser más rápido, especialmente en redes lentas.

</Card>

</Card>

Como administrador de Linux, es importante conocer las herramientas para empaquetar y comprimir archivos.

</Card>

<Card>
    
## Comprimir los archivos

### Concepto de Compresión

La compresión de archivos reduce su tamaño eliminando la redundancia. Los archivos pueden ser comprimidos para facilitar su transmisión o almacenamiento y se pueden descomprimir para su uso posterior. 

<Card>
    
#### **La compresión puede ser:**

| **Lossless (sin pérdida)** | **Lossy (con pérdida)** |
|----------------------------|-------------------------|
| La información original se conserva intacta después de descomprimir el archivo. | Se eliminan algunas partes de la información para reducir el tamaño, lo que puede resultar en diferencias notables respecto al archivo original.|

</Card>

<Card>    

## Ejemplos de Herramientas de Compresión en Linux
    
### Gzip

Gzip es una herramienta de compresión de archivos que utiliza el algoritmo DEFLATE. Los archivos comprimidos tienen la extensión .gz.

<Card>
    
- Comprime un archivo y reemplaza el original con uno nuevo que tiene la extensión .gz.

```bash title='Ejemplo'
bob:tmp $ gzip access_log
bob:tmp $ ls -l access_log*
-rw-r--r-- 1 bob bob  1234567 Mar  1 12:34 access_log.gz
```
</Card>

<Card>
    
Muestra la relación de compresión con el parámetro -l:

```bash
bob:tmp $ gzip -l access_log.gz
      compressed     uncompressed  ratio uncompressed_name
           26080           372063  93.0% access_log
```
</Card>

<Card>
    
Descomprime con gunzip:

```bash
bob:tmp $ gunzip access_log.gz
bob:tmp $ ls -l access_log*
-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log
```

</Card>

<Card>
    
### Uso de gzip en Canal de Entrada/Salida

gzip también puede comprimir datos recibidos a través de un canal de entrada y escribir la salida en un archivo:

```bash
bob:tmp $ mysqldump -A | gzip > database_backup.gz
bob:tmp $ gzip -l database_backup.gz
         compressed        uncompressed  ratio uncompressed_name
              76866             1028003  92.5% database_backup
```

</Card>

</Card>


<Card>

### bzip2

Usa un algoritmo diferente (Burrows-Wheeler) que puede ofrecer una mejor compresión a cambio de mayor uso de CPU. Los archivos tienen la extensión .bz o .bz2.

<Card>
    
Ejemplo de compresión:

```bash
bob:tmp $ bzip2 access_log
bob:tmp $ ls -l access_log*
-rw-r--r-- 1 sean sean 18145 Oct 11 21:24 access_log.bz2
```
</Card>

<Card>
    
Descomprimir con bunzip2:

```bash
bob:tmp $ bunzip2 access_log.bz2
bob:tmp $ ls -l access_log*
-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log
```

</Card>


</Card>

La compresión de archivos es crucial para ahorrar espacio y facilitar la transmisión. Las herramientas gzip y bzip2 son comunes en Linux, cada una con sus propias ventajas según el tipo de compresión y el uso previsto.

</Card>

<Card>
    
## Empaquetando Archivos

**Concepto de Empaquetamiento**

Empaquetar archivos permite combinar múltiples archivos en uno solo, facilitando su transmisión o almacenamiento. En UNIX, la herramienta tradicional para esto es `tar` (Tape Archive). tar se utiliza para crear un solo archivo a partir de varios archivos y puede dividirse nuevamente en los archivos originales.

### Modos de Operación de tar

1. **Crear (c):** Genera un nuevo archivo tar a partir de varios archivos.
2. **Extraer (x):** Extrae uno o más archivos de un archivo tar.
3. **Listar (t):** Muestra el contenido del archivo tar sin extraer.

### Ejemplo de Creación de un Archivo tar

```bash
bob:tmp $ tar -cf access_logs.tar access_log*
bob:tmp $ ls -l access_logs.tar
-rw-rw-r-- 1 sean sean 542720 Oct 12 21:42 access_logs.tar
```

En este ejemplo, tar crea un archivo `access_logs.tar` a partir de varios archivos `access_log*`. La opción `c` indica creación y `f` especifica el nombre del archivo tar.

### Comprimir Archivos tar

Para facilitar la transmisión, los archivos tar pueden ser comprimidos. Esto se puede hacer en un solo paso usando la opción `z` para `gzip` o `j` para `bzip2`:

```bash
bob:tmp $ tar -czf access_logs.tar.gz access_log*
bob:tmp $ ls -l access_logs.tar.gz
-rw-rw-r-- 1 sean sean 46229 Oct 12 21:50 access_logs.tar.gz
bob:tmp $ gzip -l access_logs.tar.gz
         compressed        uncompressed  ratio uncompressed_name
              46229              542720  91.5% access_logs.tar
```

El archivo resultante access_logs.tar.gz es mucho más pequeño que el archivo tar original.

### Listar Contenido de un Archivo tar Comprimido

Puedes ver el contenido de un archivo tar comprimido usando `t`:

```bash
bob:tmp $ tar -tjf access_logs.tbz
logs/
logs/access_log.3
logs/access_log.1
logs/access_log.4
logs/access_log
logs/access_log.2
```

### Descomprimir y Extraer Archivos tar

Para descomprimir y extraer un archivo `tar`, se usa la opción `x` junto con la opción correspondiente a la compresión (`z` para gzip, `j` para bzip2):

```bash
bob:tmp $ tar -xjf access_logs.tbz
bob:tmp $ ls -l
total 36
-rw-rw-r-- 1 sean sean 30043 Oct 14 13:27 access_logs.tbz
drwxrwxr-x 2 sean sean  4096 Oct 14 13:26 logs
bob:tmp $ ls -l logs
total 536
-rw-r--r-- 1 sean sean 372063 Oct 11 21:24 access_log
-rw-r--r-- 1 sean sean    362 Oct 12 21:41 access_log.1
-rw-r--r-- 1 sean sean 153813 Oct 12 21:41 access_log.2
-rw-r--r-- 1 sean sean   1136 Oct 12 21:41 access_log.3
-rw-r--r-- 1 sean sean    784 Oct 12 21:41 access_log.4
```

### Precaución con el Orden de las Opciones

Es importante mantener la opción `-f` al final para evitar errores:

```bash
bob:tmp $ tar -xjfv access_logs.tbz
tar (child): v: Cannot open: No such file or directory
tar (child): Error is not recoverable: exiting now
tar: Child returned status 2
tar: Error is not recoverable: exiting now
```

### Extraer Archivos Específicos

Puedes especificar archivos específicos para extraer:

```bash
bob:tmp $ tar -xjvf access_logs.tbz logs/access_log
logs/access_log
```

- En este caso, solo se extrae el archivo `access_log` del directorio `logs`.

<Card color='cyan'>

Tar es una herramienta poderosa para empaquetar y comprimir archivos en UNIX. Ofrece flexibilidad en la creación, extracción y listado de archivos tar, con opciones adicionales para compresión y manejo detallado de los archivos.


</Card>

</Card>

<Card>
    
## Archivos ZIP

### Propósito del Empaquetamiento con ZIP

En el mundo de Microsoft, la utilidad estándar para empaquetar archivos es el formato ZIP. Aunque no es tan común en Linux, también es compatible mediante los comandos zip y unzip. A diferencia de tar y gzip/gunzip, donde los mismos comandos y opciones sirven para creación y extracción, en zip cada opción tiene diferentes significados.

### Uso Básico del Comando Zip

El modo predeterminado de zip es añadir y comprimir archivos en un archivo ZIP:

```bash
bob:tmp $ zip logs.zip logs/*
  adding: logs/access_log (deflated 93%)
  adding: logs/access_log.1 (deflated 62%)
  adding: logs/access_log.2 (deflated 88%)
  adding: logs/access_log.3 (deflated 73%)
  adding: logs/access_log.4 (deflated 72%)
```

El primer argumento, logs.zip, es el nombre del archivo ZIP. Luego, se añaden los archivos especificados. La salida muestra cada archivo añadido y su tasa de compresión.

### Recursividad en ZIP

Por defecto, zip no opera de manera recursiva en subdirectorios. Para incluir archivos dentro de subdirectorios, se utiliza la opción -r:

```bash
bob:tmp $ zip -r logs.zip logs
  adding: logs/ (stored 0%)
  adding: logs/access_log.3 (deflated 73%)
  adding: logs/access_log.1 (deflated 62%)
  adding: logs/access_log.4 (deflated 72%)
  adding: logs/access_log (deflated 93%)
  adding: logs/access_log.2 (deflated 88%)
```

En este ejemplo, -r asegura que todos los archivos y subdirectorios dentro de `logs` se incluyan en el archivo ZIP.

### Listar Contenido de un Archivo ZIP

Para listar los archivos dentro de un archivo ZIP, se utiliza unzip con la opción -l:

```bash
bob:tmp $ unzip -l logs.zip
Archive:  logs.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  10-14-2013 14:07   logs/
     1136  10-14-2013 14:07   logs/access_log.3
      362  10-14-2013 14:07   logs/access_log.1
      784  10-14-2013 14:07   logs/access_log.4
    90703  10-14-2013 14:07   logs/access_log
   153813  10-14-2013 14:07   logs/access_log.2
---------                     -------
   246798                     6 files
```

### Extracción de Archivos ZIP

Para extraer los archivos, simplemente se utiliza unzip:

```bash
bob:tmp $ unzip logs.zip
Archive:  logs.zip
   creating: logs/
  inflating: logs/access_log.3
  inflating: logs/access_log.1
  inflating: logs/access_log.4
  inflating: logs/access_log
  inflating: logs/access_log.2
```

Esto extrae todos los archivos del archivo ZIP al directorio actual. 

- Se pueden especificar archivos individuales o patrones para extraer archivos específicos:

```bash
bob:tmp $ unzip logs.zip logs/access_log
Archive:  logs.zip
  inflating: logs/access_log

bob:tmp $ unzip logs.zip logs/access_log.*
Archive:  logs.zip
  inflating: logs/access_log.3
  inflating: logs/access_log.1
  inflating: logs/access_log.4
  inflating: logs/access_log.2
```

<Card>
    
El uso de zip y unzip en Linux permite la creación y extracción de archivos empaquetados, similar a tar y gzip/gunzip, pero con diferencias en las opciones y funcionalidades. Las páginas man de zip y unzip ofrecen detalles adicionales sobre funcionalidades avanzadas como la sustitución de archivos dentro del ZIP, diferentes niveles de compresión y cifrado.

</Card>

</Card>