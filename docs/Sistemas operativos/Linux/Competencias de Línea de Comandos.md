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
    
## Comandos de Formato

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

<Card>
    
### Ejemplo con el comando `ls`

Sin argumentos:
    
```bash
sysadmin@localhost:~$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```

</Card>

</Card>