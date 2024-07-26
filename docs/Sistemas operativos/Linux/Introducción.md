---

title: Introducción

---


<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/1.png" height="400" />

<p>
## Linux es de Código Abierto. 
¿Qué significa eso? El código que impulsa a Linux no es propiedad de una empresa. En cambio, lo desarrolla la comunidad que lo usa. ¿Por qué es esto bueno? Libera a los usuarios de los costos de licencia y permite modificar el código según las necesidades cambiantes. 

- Linux® es una marca registrada de Linus Torvalds en los Estados Unidos y otros países.
</p>

</Row> 

<Card>
    
## La evolución del Linux y los sistemas operativos populares

- **Linux** se refiere al kernel, este es el controlador central de todo lo que pasa en el equipo

- **Una distribución de Linux** es un sistema operativo completo que incluye el kernel de Linux y un conjunto de aplicaciones que vienen con él

- **Unix** era originalmente un sistema operativo desarrollado en los laboratorios de Bell AT&T en la década de 1970, este fue modificado y bifurcado, sirviendo de base para muchos sistemas operativos, Unix es un sistema operativo propietario y no es de código abierto, pero muchos de sus derivados si lo son como Linux

</Card>

<Card>
    
## Rol de Kernel

El kernel es el núcleo del sistema operativo, es el encargado de gestionar los recursos del sistema, como la memoria, el procesador, los dispositivos de entrada y salida, entre otros. 

- El kernel es el intermediario entre el hardware y el software, es el encargado de traducir las instrucciones de los programas en instrucciones que el hardware pueda entender.

### Multitarea preferente

- El kernel de Linux es multitarea preferente, esto significa que el kernel puede interrumpir una tarea en ejecución para dar paso a otra tarea de mayor prioridad.


### Gestor de arranque

- Cuando se enciende un equipo, el kernel es el primer programa que se ejecuta, este se encarga de cargar el sistema operativo en la memoria y de inicializar los dispositivos de hardware.

</Card>

<Card>
    
## Las aplicaciones

El kernel actúa como un controlador de tráfico aéreo para las aplicaciones, gestionando recursos como memoria, CPU y disco. Las aplicaciones interactúan con el kernel a través de la API (Application Programming Interface) del kernel sin preocuparse por los detalles de hardware. El kernel maneja todos los procesos, independientemente de su tipo, asegurando su ejecución y asignación de recursos.

### Procesos

- Un proceso es un programa en ejecución, cada proceso tiene su propio espacio de memoria y recursos asignados, el kernel se encarga de gestionar los procesos y asignarles recursos.

</Card>

<Card>
    
## Rol del Código Abierto

Linux comenzó como un proyecto personal de Linus Torvalds en 1991. Desde entonces, ha crecido hasta convertirse en uno de los sistemas operativos más populares del mundo, la filosofía del código abierto ha sido fundamental para el éxito de Linux. 

### Código abierto vs. Código cerrado

| Código abierto | Código cerrado |
| -------- | -------- |
| Se tiene derecho a obtener el software y modificarlo según las necesidades. | Se obtiener derecho a utilizar el software, pero no se puede ver ni modificar el código fuente. |

## Compilación de código fuente

El código fuente no se entiende directamente por el equipo, por lo que se debe compilar para convertirlo en código de máquina. El compilador reúne todos los archivos fuente y genera algo que se puede ejecutar en el equipo, como el kernel de Linux.

### Código de máquina vs. Código fuente

| Código de maquina | Código fuente |
| -------- | -------- |
| El código de máquina es el código binario que ejecuta el hardware, es difícil de leer y modificar. | El código fuente es el código escrito por los programadores, es más fácil de leer y modificar que el código de máquina. |

</Card>

<Card>
    
## Distribuciones de Linux

Una distribución de Linux es un sistema operativo completo que incluye el kernel de Linux y un conjunto de aplicaciones que vienen con él. 

Hay muchas distribuciones de Linux, cada una con sus propias características y objetivos. Algunas de las distribuciones de Linux más populares son:

### Red Hat Enterprise Linux (RHEL):

- Es una distribución de Linux empresarial que se centra en la estabilidad y la seguridad, está diseñada para su uso en entornos empresariales y es compatible con una amplia gama de hardware y software, incluidos los servidores

RHEL es una distribución de Linux de pago, pero también hay una versión gratuita llamada **CentOS** que es compatible con RHEL.

#### CentOS:

- Es una distribución de Linux de código abierto basada en RHEL, es compatible con RHEL y es una alternativa gratuita a RHEL.

#### Fedora:

- Es una distribución de Linux de código abierto patrocinada por Red Hat, está diseñada para ser una plataforma de desarrollo y es adecuada para usuarios avanzados y desarrolladores, es una distribución de Linux que incluye las últimas tecnologías y características.

#### Scientific Linux:

- Es una distribución de Linux basada en RHEL, está diseñada para su uso en entornos científicos y de investigación, es compatible con RHEL y es una alternativa gratuita a RHEL. Entre sus muchas aplicaciones, Scientific Linux se utiliza con aceleradores de partículas como el Gran Colisionador de Hadrones en el CERN.

### OpenSUSE y SUSE Linux Enterprise Server (SLES):

| OpenSUSE | SUSE Linux Enterprise Server (SLES) |
| -------- | -------- |
| OpenSUSE es una distribución de Linux de código abierto patrocinada por SUSE, está diseñada para ser fácil de usar y adecuada para usuarios principiantes y avanzados. | SLES es una distribución de Linux empresarial que se centra en la estabilidad y la seguridad, está diseñada para su uso en entornos empresariales y es compatible con una amplia gama de hardware y software, incluidos los servidores. |
    
### Debian:

- Es una distribución de Linux de código abierto que se centra en la estabilidad y la seguridad, está diseñada para ser fácil de usar y adecuada para usuarios principiantes y avanzados, es una de las distribuciones de Linux más antiguas y populares. Mientras que Red Hat deja sin soporte a plataformas Intel y AMD más antiguas, Debian sigue ofreciendo soporte para ellas.

### Ubuntu:

- Es la distribución derivada de Debian más popular. Es la creación de Canonical, una empresa que apoyó el crecimiento de Ubuntu ganando dinero proporcionando soporte. Ubuntu es conocido por su facilidad de uso y su amplia gama de aplicaciones.

### Linux Mint:

- Se inició como una bifurcación de Ubuntu Linux mientras sigue dependiendo sobre los repositorios de Ubuntu. Existen varias versiones, todas libres de costo, pero algunas incluyen códigos propietarios que no pueden ser distribuidos sin restricciones de la licencia en algunos países. Linux Mint está suplantando rápidamente Ubuntu como solución de Linux escritorio más popular del mundo.

### GNU/Linux:

- Es una distribución de Linux de código abierto que se centra en la libertad del software, está diseñada para ser fácil de usar, es una de las distribuciones de Linux más antiguas y populares.

- Aunque el proyecto GNU logró desarrollar muchos componentes de un sistema operativo, no logró desarrollar un kernel. Linus Torvalds desarrolló el kernel de Linux, el cual se combinó con los componentes de GNU para crear un sistema operativo completo, por eso se le llama GNU/Linux.

:::info
Es importante tener en cuenta que si bien hay muchas diferentes distribuciones de Linux, muchos de los programas y comandos siguen siendo los mismos o muy similares.
:::

</Card>

<Card>
    
## ¿Qué es un Comando?

Un comando es una instrucción que se da al sistema operativo para realizar una tarea específica. 

Los comandos se pueden ejecutar desde la línea de comandos o desde un script, los comandos se pueden utilizar para realizar tareas como copiar archivos, mover archivos, crear directorios, etc.

#### Alias

- Un alias es un nombre alternativo para un comando, se puede utilizar un alias en lugar del comando real para ejecutar el comando.

</Card>

<Card>
    
## Plataformas de Hardware

Linux comenzó como un sistema operativo para un equipo específico pero su soporte de hardware se expandió a diversas plataformas, incluyendo supercomputadoras y dispositivos integrados. 

Eventualmente se adoptó en teléfonos y tabletas, con Android como plataforma líder. Muchos dispositivos de consumo, como enrutadores y grabadores de vídeo digital, también utilizan Linux por su robustez, aunque los usuarios finales no siempre lo sepan.

</Card>

<Card>
    
## Elegir un Sistema Operativo

<Card>
    
## Puntos de decisión

| Puntos de decisión | Descripción |
| -------- | -------- |
| **Rol de máquina** | **Equipo de escritorio:**: Ejecuta aplicaciones de productividad o navegación web, necesita una GUI|
| | **Servidor:**: Ejecuta aplicaciones de servidor, necesita una GUI o una interfaz de línea de comandos|
| | |
| **Funciones de la máquina** | **Software y funciones específicas:** Identificar necesidades de software y funciones esenciales.|
| | **Escalabilidad:**: Capacidad para manejar cientos o miles de máquinas. |
| |  **Habilidades del equipo:** Conjunto de habilidades del equipo que administrará la máquina y el software.
| | |
| **Vida útil y tolerancia al riesgo** | **Ciclos de liberación y mantenimiento:**: Actualizaciones periódicas de sistemas operativos y software. Ejemplo: Fedora Linux (ciclos cada 6 meses, soporte hasta 13 meses). Red Hat Enterprise Linux (soporte hasta 13 años).| 
| | **Importancia de ciclos lentos en entornos empresariales:** Menos actualizaciones y personalizaciones complejas. |
| | |
| **Desarrollo de software y trabajo de escritorio** | **Software más reciente:** Preferencia por las últimas funciones y mejoras en funcionalidad y apariencia. |
| | |
| **Desarrollo de software y trabajo de escritorio** | **Software más reciente:** Preferencia por las últimas funciones y mejoras en funcionalidad y apariencia. | 
| | **Frecuencia de actualización:** Posibilidad de limpiar e instalar sistemas operativos nuevos sin muchas interrupciones. |
| | |
| **Costo** | **Linux:** Puede ser gratuito, pero con costos de soporte opcionales.
| | **Microsoft:** Costos de licencia y soporte adicional. |
| | **Hardware específico:** Algunos sistemas operativos requieren hardware particular, afectando el costo. |

</Card>

</Card>