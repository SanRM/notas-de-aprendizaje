---

title: Comprensión del hardware de la computadora
sidebar_position: 10

---

## Comprensión del Hardware de la Computadora

El hardware de una computadora incluye todos los componentes físicos que permiten su funcionamiento. Cada componente tiene una función específica y trabaja en conjunto para ejecutar tareas y procesos. 

Entender el hardware es crucial para la administración y solución de problemas en sistemas Linux, así como para la optimización del rendimiento del sistema.

<Card>
    

## Los Procesadores

El procesador, o **CPU** (Central Processing Unit), es el cerebro de la computadora, encargado de ejecutar las instrucciones de los programas. 

Los procesadores modernos tienen múltiples **núcleos**, lo que permite realizar múltiples tareas simultáneamente. 

<Card color='blue'>
    
Un **núcleo** es una unidad de procesamiento independiente que puede ejecutar instrucciones de manera independiente. 

- Los procesadores de un solo núcleo solo pueden ejecutar una tarea a la vez.
- Los procesadores de múltiples núcleos pueden ejecutar varias tareas simultáneamente.

- Cada núcleo puede ejecutar instrucciones de manera independiente, mejorando el rendimiento general.

</Card>

Para identificar la arquitectura de la CPU, se puede usar el comando `arch` en la terminal:

```bash
sysadmin@localhost:~$ arch
x86_64
```

Este comando indica que la `CPU` es de `64 bits`. También puedes usar el comando `lscpu` para obtener más detalles sobre el tipo de CPU:

```bash
sysadmin@localhost:~$ lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 44
Stepping:              2
CPU MHz:               2394.000
BogoMIPS:              4788.00
Virtualization:        VT-x
Hypervisor vendor:     VMware
Virtualization type:   full
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              12288K
NUMA node0 CPU(s):     0-3
```

Aquí, la salida muestra que la CPU es de `64 bits` y proporciona información detallada sobre su configuración y capacidades.
</Card>

<Card>
    
## Tarjeta Madre y Buses

La **tarjeta madre** (o **motherboard**) es el componente principal que conecta todos los demás componentes de la computadora, como el **procesador**, la **memoria RAM** y los **dispositivos de almacenamiento**.

Los **buses** son canales de comunicación en la tarjeta madre que permiten la transferencia de datos entre el procesador, la memoria y otros dispositivos. Estos buses pueden variar en:

- **Velocidad**: Influye en la rapidez de la transferencia de datos.
- **Ancho de banda**: Afecta la cantidad de datos que se pueden transferir simultáneamente.

La eficiencia del sistema puede verse influenciada por las características de los buses.

</Card>

<Card>
    
## dmidecode

**dmidecode** es una herramienta de línea de comandos en Linux que proporciona información detallada sobre el hardware de la computadora a través del **DMI** (Desktop Management Interface). Esta herramienta puede mostrar información sobre:

- **Tarjeta madre**
- **Procesador**
- **Memoria**
- Otros componentes

Un ejemplo de la salida de `dmidecode` es el siguiente:

```bash
# dmidecode 2.11
SMBIOS 2.4 present.
364 structures occupying 16040 bytes.
Table at 0x000E0010

Handle 0x0000, DMI type 0, 24 bytes
BIOS Information
	Vendor: Phoenix Technologies LTD
	Version: 6.00
	Release Date: 06/22/2012
	Address: 0xEA0C0
	Runtime Size: 89920 bytes
	ROM Size: 64 kB
	Characteristics:
		ISA is supported
		PCI is supported
		PC Card (PCMCIA) is supported
		PNP is supported
		APM is supported
		BIOS is upgradeable
		BIOS shadowing is allowed
		ESCD support is available
		Boot from CD is supported
--More--
```

En el siguiente ejemplo puedes ver que un total de 2048 (aproximadamente 2GB) de RAM está instalado en el sistema:

```bash
Socket Designation: RAM socket #0
Bank Connections: None
Current Speed: Unknown
Type: EDO DIMM
Installed Size: 2048 MB (Single-bank Connection)
Enabled Size: 2048 MB (Single-bank Connection)
Error Status: OK
```

</Card>

<Card>
    
## Memoria de Acceso Aleatorio (RAM)

## Memoria RAM

La **memoria RAM** (Random Access Memory) es una memoria volátil que almacena datos e instrucciones que el procesador está utilizando en tiempo real. 

La RAM permite un acceso rápido a los datos, mejorando la velocidad de procesamiento de la computadora. 

- La cantidad de RAM influye en la capacidad de la computadora para manejar múltiples aplicaciones y tareas simultáneamente.

Para verificar la cantidad de RAM instalada y utilizada, puedes usar el siguiente comando `free -h`:

```bash
sysadmin@localhost:~$ free -m
             total        used       free     shared     buffers     cached
Mem:          1894        356       1537          0          25       177
-/+ buffers/cache:        153        1741
Swap:         4063          0       4063
```

Aquí, la salida muestra que la computadora tiene un total de `1894 MB` de RAM, de los cuales `356 MB` están en uso y `1537 MB` están libres.

- `-m` muestra la información en megabytes.

</Card>

<Card>
    
## Los Dispositivos Periféricos

Los dispositivos periféricos son componentes externos que se conectan a la computadora para ampliar su funcionalidad. 

- Incluyen dispositivos como `teclados`, `ratones`, `impresoras` y `escáneres`. Estos dispositivos se comunican con la computadora a través de puertos y controladores específicos, permitiendo la entrada y salida de datos.

</Card>

<Card>
    
## Los Dispositivos de Bus Serie Universal (USB)

## Dispositivos USB

Los **dispositivos USB** (Universal Serial Bus) son una forma común de conectar periféricos a una computadora. El estándar USB permite la conexión de una amplia variedad de dispositivos, incluyendo:

- **Memorias flash**
- **Teclados**
- **Ratones**
- **Cámaras**

Los puertos USB se clasifican en diferentes versiones, como **USB 2.0**, **USB 3.0** y **USB-C**, cada una con diferentes velocidades de transferencia de datos y capacidades de potencia.

Para ver los dispositivos conectados al sistema vía USB, utiliza el comando `lsusb`:

```bash
sysadmin@localhost:~$ lsusb
Bus 001 Device 001: ID 1d6b:0001  Linux Foundation 1.1 root hub
```

La opción detallada `-v` muestra información más extensa sobre cada dispositivo:

```bash
sysadmin@localhost:~$ lsusb -v
Bus 001 Device 001: ID 1d6b:0001  Linux Foundation 1.1 root hub
Couldn’t open device, some information will be missing 
Device Descriptor:
        bLength               18
        bDescriptorType       1
        bcdUSB                1.10
        bDeviceClass          9 Hub
        bDeviceSubClass       0 Unused
        bDeviceProtocol       0 Full speed (or root) hub
        bMaxPacketSize0       64
        idVendor              0x1d6b Linux Foundation
        idProduct             0x0001 1.1 Linux Foundation
        bcdDevice             2.06
        iManufacturer         3
        iProduct              2
        iSerial               1
```

</Card>

<Card>

## Capa de Abstracción de Hardware (HAL Hardware Abstraction Layer)

La **capa de abstracción de hardware** (HAL) es una capa de software que permite que el sistema operativo interactúe con el hardware sin necesidad de conocer los detalles específicos del hardware. HAL proporciona una interfaz estándar que:

- **Simplifica la gestión del hardware**
- **Mejora la compatibilidad** entre diferentes sistemas operativos y hardware

</Card>

<Card>
    
## Dispositivos de disco

Los **dispositivos de disco**, como los **discos duros** (HDD) y los **discos de estado sólido** (SSD), son componentes de almacenamiento de datos en una computadora.

- **HDD**: Utilizan discos giratorios y cabezales de lectura/escritura para almacenar datos. 
- **SSD**: Utilizan memoria flash, lo que permite un acceso más rápido a los datos.

La elección entre HDD y SSD puede afectar significativamente el **rendimiento del sistema**.

En general, los SSD son más rápidos y duraderos que los HDD, pero también son más caros. Los HDD son más lentos pero tienen una mayor capacidad de almacenamiento y son más económicos.

Para mostrar los dispositivos de disco, puedes usar el comando `ls /dev/sd*`:

```bash
sysadmin@localhost:~$ ls /dev/sd*
/dev/sda  /dev/sda1  /dev/sda2  /dev/sdb  /dev/sdb1  /dev/sdc
```

Para ver la información de particiones en un dispositivo específico, utiliza `fdisk`:

```bash
root@localhost:~# fdisk -l /dev/sda
Disk /dev/sda: 21.5 GB, 21474836480 bytes
255 heads, 63 sectors/track, 2610 cylinders, total 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000571a2

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048    39845887    19921920   83  Linux
/dev/sda2        39847934    41940991     1046529    5  Extended
/dev/sda5        39847936    41940991     1046528   82  Linux swap / Solaris
```

</Card>

<Card>

## Discos ópticos

Los **discos ópticos**, como los **CDs**, **DVDs** y **Blu-rays**, utilizan tecnología láser para leer y escribir datos en discos. Aunque su uso ha disminuido con la popularización de los dispositivos de almacenamiento flash y el almacenamiento en la nube, todavía se utilizan para:

- **Distribución de software**
- **Medios**
- **Archivos**

</Card>

<Card>
    
## Dispositivos de visualización de video

Los **dispositivos de visualización de video**, como **monitores** y **proyectores**, permiten a los usuarios ver la salida gráfica de la computadora. Los monitores pueden tener diferentes:

- **Resoluciones**: Número de píxeles en la pantalla
- **Tasas de refresco**: Número de veces que la pantalla se actualiza por segundo

Estos factores afectan la **calidad de la imagen** y la **experiencia del usuario**. Los dispositivos de visualización también pueden conectarse a la computadora mediante varios tipos de interfaces, como `HDMI`, `DisplayPort` o `VGA`.

</Card> 