---

title: El scripting básico
sidebar_position: 9

---

<Card>
    
<Row>

<img src='https://github.com/SanRM/notas-de-aprendizaje/blob/main/docs/Sistemas%20operativos/Linux/img/7-LPI-Graphics.png?raw=true' width='250px'/>

<p>

## Linux, la frontera final. 

Linux es usado en el espacio por la `NASA`. 

El `Fénix Mars Rover` e incluso en la `estación espacial internacional`

</p>

</Row>

</Card>

En este capítulo, se va a hablar sobre cómo las herramientas que se han aprendido hasta ahora pueden transformarse en scripts reutilizables.

<Card>
    
## Scripts Shell en Pocas Palabras

Un script shell es un archivo de comandos ejecutables almacenado en un archivo de texto, al ejecutarlo, cada comando se ejecuta en secuencia. 

Los scripts shell tienen acceso a todos los comandos del shell, incluyendo la lógica, lo que permite detectar la presencia de un archivo o buscar una salida particular y cambiar su comportamiento en consecuencia. 

Los scripts pueden `automatizar` partes repetitivas de tu trabajo, `ahorrando tiempo` y asegurando `consistencia`. 

<Card color='blue'>
Por ejemplo, si ejecutas los mismos cinco comandos todos los días, puedes convertirlos en un script shell que reduce tu trabajo a un solo comando.
    
</Card>

Un script puede ser tan simple como un único comando:

```Bash title='test.sh'
echo “Hello, World!”
```

- La extensión .sh no es necesaria, pero es una convención para identificar scripts shell, al igual que .txt para archivos de texto.
- En lugar de sh, se puede usar bash, ksh, zsh, etc., para especificar el intérprete de comandos, pero sh es el más común y compatible.

El script test.sh consta de una sola línea que imprime la cadena "Hello, World!" en la consola.

### Ejecutar un Script
Puedes ejecutar un script pasándolo como un argumento a tu shell o ejecutándolo directamente:

```Bash
sysadmin@localhost:~$ sh test.sh
Hello, World!
sysadmin@localhost:~$ ./test.sh
-bash: ./test.sh: Permission denied
sysadmin@localhost:~$ chmod +x ./test.sh
sysadmin@localhost:~$ ./test.sh
Hello, World!
```

**En el ejemplo anterior:**

- El script se ejecuta como un argumento del shell.
- Luego, se intenta ejecutar el script directamente desde el shell, pero aparece el error Permission denied.
- El comando `chmod` se utiliza para cambiar los permisos de un archivo, que se explica en detalle en un capítulo posterior.
- Finalmente, el script se ejecuta correctamente.

## Shebang
Para scripts más complicados se indica un shell determinado especificando la ruta absoluta al intérprete como la primera línea, con el prefijo `#!` (shebang):

```Bash
#!/bin/sh
echo “Hello, World!”

o

```Bash
#!/bin/bash
echo “Hello, World!”
```

<Card color='blue'>
Los dos caracteres `#!` se llaman tradicionalmente el `hash` y el `bang` respectivamente, que conduce a la forma abreviada «shebang» cuando se utilizan al principio de un script.
</Card>

El `shebang (hash y bang)` se utiliza para los scripts shell tradicionales y otros lenguajes basados en texto como `Perl`, `Ruby` y `Python`. 

Cualquier archivo de texto marcado como ejecutable se ejecutará bajo el intérprete especificado en la primera línea mientras se ejecuta el script directamente. 

Si el script se invoca directamente como argumento a un intérprete (sh script o bash script), se utilizará el shell proporcionado, independientemente de lo que está en la línea del shebang.

<Card color='cyan'>
    
Ayuda sentirse cómodo utilizando un editor de texto antes de escribir los scripts shell, ya que se necesitarás crear los archivos de texto simple. Las herramientas de oficina tradicionales como LibreOffice, que dan salida a archivos que contienen la información de formato y otra información, no son adecuadas para esta tarea.

</Card>

</Card>

<Card>

## Editar los Scripts Shell

UNIX tiene muchos editores de texto, y las ventajas de uno sobre otro se debaten frecuentemente. Dos editores mencionados específicamente en el programa del curso de los aspectos esenciales de LPI son:

- **GNU nano**: Un editor muy sencillo y adecuado para editar pequeños archivos de texto.
- **Visual Editor (vi)** o su versión mejorada **vim**: Un editor muy potente con un arduo proceso de aprendizaje.

Nos centraremos en el **nano**.

### Usando nano

Para comenzar a editar un archivo con nano, usa el siguiente comando:

```sh
nano test.sh
```

Se abrirá una pantalla de edición con el contenido del archivo test.sh.

```sh
GNU nano 2.2.6              File: test.sh                         modified

#!/bin/sh

echo "Hello, World!"
echo -n "The time is "
date
                                    
                                                                                
^G Get Help  ^O WriteOut  ^R Read File ^Y Prev Page ^K Cut Text  ^C Cur Pos
^X Exit      ^J Justify   ^W Where Is  ^V Next Page ^U UnCut Text ^T To Spell
```

#### Características de nano

- **Escritura**: Para escribir en el archivo, simplemente comienza a escribir.
- **Moverse**: Usa las teclas de flecha para moverte por el archivo.
- **Borrar**: Usa el botón Suprimir/Retroceso para borrar texto.
- **Comandos**: Los comandos de nano se muestran en la parte inferior de la pantalla.

#### Comandos de nano

- **Salir**: `Ctrl + X`
- **Guardar**: `Ctrl + O`
- **Copiar texto**: `Ctrl + K`
- **Pegar texto**: `Ctrl + U`

#### Guardar y Salir

- **Salir:** Presiona `Ctrl + X`. La parte inferior cambiará:

```sh
Save modified buffer (ANSWERING "No" WILL DESTROY CHANGES)?
Y Yes
N No           ^C Cancel
```

- **Guardar y salir:** Pulsa `Y` para guardar, luego `Enter` para confirmar el nombre del archivo.

### Ejemplo de edición en nano

1. Abir nano:

```sh
nano test.sh
```

2. Escribir un script sencillo:

```sh
#!/bin/sh
echo "Hello, World!"
echo -n "The time is "
date
```

<Card>
    
- `-n` es una opción de echo que evita que se imprima una nueva línea después de la cadena.

</Card>

3. **Guardar sin salir:** Presiona `Ctrl + O`, luego Enter.

4. **Mover el cursor:** Usa las flechas para ir a la línea que contiene el texto `The time is`.

5. **Cortar y pegar:**

    - **Cortar**: Presiona `Ctrl + K` dos veces para cortar las dos últimas líneas.
    - **Mover el cursor**: Coloca el cursor en la línea deseada.
    - **Pegar**: Presiona `Ctrl + U` para pegar las líneas cortadas.

6. **Guardar y salir:** Presiona `Ctrl + X`, luego Y para guardar y `Enter` para confirmar.

### Otros comandos útiles de nano

| Comando | Descripción |
|---------|-------------|
| `Ctrl + G` | Ayuda |
| `Ctrl + R` | Leer un archivo |
| `Ctrl + C` | Mostrar la posición del cursor |
| `Ctrl + J` | Justificar texto |
| `Ctrl + W` | Buscar texto |
| `Ctrl + V` | Página siguiente |
| `Ctrl + Y` | Página anterior |
| `Ctrl + G` | Mostrar todos los comandos disponibles y ayuda |

</Card>

<Card>
    
## El Scripting Básico

Anteriormente en este capítulo tuviste tu primera experiencia de scripting y recibiste una introducción a un script muy básico que ejecuta un comando simple. El script comenzó con la línea shebang, que le dice a Linux que tiene que utilizar el `/bin/bash` (lo que es Bash) para ejecutar el script.

Aparte de ejecutar comandos, hay 3 temas que se deben conocer:

<Card>
    

### 1. Variables

Las variables son una parte esencial de cualquier lenguaje de programación. A continuación se muestra un uso muy simple de las variables:

```Bash
#!/bin/bash

ANIMAL="penguin"
echo "My favorite animal is a $ANIMAL"
```

Después de la línea shebang, hay una directiva para asignar un texto a una variable. El nombre de la variable es `ANIMAL` y el signo de igual asigna la cadena `penguin` (o «pingüino» en español). Piensa en una variable como una caja en la que puedes almacenar cosas. Después de ejecutar esta línea, la caja llamada `ANIMAL` contiene la palabra `penguin`.

Es importante que no haya ningún espacio entre el nombre de la variable, el signo de igual y el valor asignado. Si colocas un espacio, obtendrás un error como «command not found». No es necesario poner la variable en mayúsculas, pero es una convención útil para separar las variables de los comandos que se ejecutarán.

A continuación, el script despliega una cadena en la consola. La cadena contiene el nombre de la variable precedido por un signo de dólar. Cuando el intérprete ve el signo de dólar, reconoce que debe sustituir el contenido de la variable, lo que se llama interpolación. La salida del script es `My favorite animal is a penguin` (o «Mi animal favorito es un pingüino» en español).

### Asignación de Variables a Otras Variables

Puedes asignar el contenido de una variable a otra:

```Bash
#!/bin/bash

ANIMAL=penguin
SOMETHING=$ANIMAL
echo "My favorite animal is a $SOMETHING"
```

En este script, `ANIMAL` contiene la cadena penguin (sin espacios, por lo que se muestra la sintaxis alternativa sin usar comillas). `SOMETHING` recibe el contenido de `ANIMAL` (porque ANIMAL se precede con el signo de dólar).

### Asignar Variables con la Salida de Comandos

Otra forma de asignar una variable es utilizando la salida de otro comando:

```Bash
#!/bin/bash
CURRENT_DIRECTORY=`pwd`
echo "You are in $CURRENT_DIRECTORY"
```

Este patrón se utiliza para procesar texto. Puedes tomar el texto de una variable o un archivo de entrada y pasarlo por otro comando como `sed` o `awk` para extraer partes específicas y guardar el resultado en una variable.

### Obtener Entrada del Usuario

Puedes obtener entradas del usuario y asignarlas a una variable mediante el comando `read`:

```Bash
#!/bin/bash

echo -n "What is your name? "
read NAME
echo "Hello $NAME!"
```

El comando `read` acepta una cadena directa desde el teclado o como parte de la redirección de comandos.

<Card>
    
### Variables Especiales

Además de las variables que defines, hay algunas variables especiales:

- `$1`, `$2`, ...: Estos representan los argumentos pasados al script. Por ejemplo:

```Bash
#!/bin/bash
echo "Hello $1"
```

Si invocas al script con ./test.sh Linux, el resultado será Hello Linux.

- `$0:` Contiene el nombre del script.

- `$?:` Muestra el código de salida del último comando ejecutado. `Un código de salida de 0 significa «todo está bien»`. Cualquier código mayor que 0 indica un error. Por ejemplo:

```Bash
sysadmin@localhost:~$ grep -q root /etc/passwd
sysadmin@localhost:~$ echo $?
0
sysadmin@localhost:~$ grep -q slartibartfast /etc/passwd
sysadmin@localhost:~$ echo $?
1
```

El comando grep busca una cadena dentro de un archivo. Con el indicador `-q` (silencioso), devuelve `0` si la cadena se encuentra y `1` si no se encuentra. Esta información se puede usar en condicionales para tomar decisiones basadas en la salida de otros comandos.

### Establecer el Código de Salida

Puedes establecer el código de salida de tu propio script con el comando exit:

```Bash
#!/bin/bash
# Something bad happened!
exit 1
```

El comentario `#` se utiliza para dejar notas en el script. El comando `exit 1` devuelve el código de salida `1`. Al ejecutar el script y luego introducir echo `$?`, verás que devuelve `1`. Por convención, un código de salida de `0` significa que todo está bien, mientras que cualquier código mayor indica algún tipo de error, específico para el programa.

</Card>

</Card>

### Condicionales

Ahora que puedes ver y definir las variables, es hora de hacer que tus propios scripts tengan diferentes funciones basadas en pruebas, llamado `branching` (o «ramificación» en español). La instrucción `if` (o «si» en español) es el operador básico para implementar un branching.

La instrucción `if` se ve así:

```bash
if somecommand; then
  # do this if somecommand has an exit code of 0
fi
```

El siguiente ejemplo ejecutará `somecommand` (en realidad, todo hasta el punto y coma) y si el código de salida es `0`, entonces se ejecutará el contenido hasta el cierre `fi`. Usando lo que sabes acerca del `grep`, ahora puedes escribir un script que hace cosas diferentes, basadas en la presencia de una cadena en el archivo de contraseñas:

```bash
#!/bin/bash

if grep -q root /etc/passwd; then
  echo root is in the password file
else
  echo root is missing from the password file
fi
```

- `grep -q root /etc/passwd` busca la cadena `root` en el archivo `/etc/passwd`. El indicador `-q` silencia la salida, por lo que no se muestra nada en la consola.

De los ejemplos anteriores podrías recordar que el código de salida del `grep` es 0 si se encuentra la cadena. El ejemplo anterior utiliza esto en una línea para imprimir un mensaje si `root` está en el archivo `passwd`, u otro mensaje si no es así. La diferencia aquí es que en lugar de un `fi` para cerrar el bloque `if`, hay un `else`. Esto te permite realizar una acción si la condición es verdadera, y otra si la condición es falsa. El bloque `else` siempre debe cerrarse con la palabra clave `fi`.

Otras tareas comunes son buscar la presencia de un archivo o directorio y comparar cadenas y números. Podrías iniciar un archivo de registro si no existe, o comparar el número de líneas en un archivo con la última vez que se ejecutó. El comando `if` es claramente de ayuda aquí, pero ¿qué comando debes usar para hacer la comparación?

### Comparaciones

El comando `test` te da acceso fácil a los operadores de prueba de comparación y archivos. Por ejemplo:

| Comando                        | Descripción                                              |
|--------------------------------|----------------------------------------------------------|
| `test -f /dev/ttyS0`            | 0 si el archivo existe                                  |
| `test ! -f /dev/ttyS0`          | 0 si el archivo no existe                              |
| `test -d /tmp`                  | 0 si el directorio existe                               |
| `test -x \`which ls\``           | Sustituir la ubicación de `ls` y luego probar con `test`, si el usuario puede ejecutar |
| `test 1 -eq 1`                  | 0 si tiene éxito la comparación numérica                |
| `test ! 1 -eq 1`                | `NO – 0` si la comparación falla                        |
| `test 1 -ne 1`                  | Más fácil, ejecutar `test` si hay desigualdad numérica  |
| `test "a" = "a"`                | 0 si tiene éxito la comparación de cadenas               |
| `test "a" != "a"`               | 0 si las cadenas son diferentes                         |
| `test 1 -eq 1 -o 2 -eq 2`       | `-o` es OR: cualquiera de las opciones pueden ser igual  |
| `test 1 -eq 1 -a 2 -eq 2`       | `-a` es AND: ambas comparaciones deben ser iguales       |

Las comparaciones numéricas y de cadenas se tratan de manera distinta. Por ejemplo, `01` y `1` son iguales en comparación numérica, pero no en comparación de cadenas.

La salida del comando `test` es extensa, por lo que se puede usar el alias `[` (corchete cuadrado izquierdo) para simplificar:

```bash
if [ -f /tmp/foo ]; then
```

### Instrucción if con elif

Para manejar múltiples condiciones, usa elif:

```bash
#!/bin/bash

if [ "$1" = "hello" ]; then
  echo "hello yourself"
elif [ "$1" = "goodbye" ]; then
  echo "nice to have met you"
  echo "I hope to see you again"
else
  echo "I didn't understand that"
fi
```

Este script compara el primer argumento (`$1`). Si es `"hello"`, se ejecuta el primer bloque. Si es `"goodbye"`, se ejecuta el bloque `elif`. Si no coincide con ninguna de estas opciones, se ejecuta el bloque `else`.


### Instrucción case

La instrucción `case` es útil para pruebas múltiples:

```bash
#!/bin/bash

case "$1" in
hello|hi)
  echo "hello yourself"
  ;;
goodbye)
  echo "nice to have met you"s
  echo "I hope to see you again"
  ;;
*)
  echo "I didn't understand that"
esac
```

En este script, `case` compara el primer argumento (`$1`) con los patrones definidos:

- `hello|hi` coincide con `"hello"` o `"hi"`.
- `goodbye` coincide con `"goodbye"`.
- `*` actúa como `else` y coincide con cualquier otro valor.

Cada bloque de comandos se termina con `;;` y el `case` se cierra con `esac`.

- Los argumentos no están entre comillas en el `case`, pero sí en los bloques de comandos.

</Card>

<Card>
    
## Loops

Los loops permiten que un bloque de código se ejecute repetidamente. Hay dos tipos principales de loops en scripts shell: `for` y `while`.

<Card>
    

### Loop for

El loop `for` se utiliza cuando se tiene una colección finita de elementos sobre los cuales iterar, como una lista de archivos o nombres. Aquí hay ejemplos de uso:

<Card>
    
**Ejemplo 1: Lista de Servidores**

```bash
#!/bin/bash

SERVERS="server_a server_b server_c"
for S in $SERVERS; do
  echo "Doing something to $S"
done
```

En este script, `SERVERS` contiene una lista de nombres de servidores. El loop `for` itera sobre cada nombre, asignando cada uno a la variable `S` y ejecutando el comando dentro del loop.

</Card>

<Card>
    
**Ejemplo 2: Lista Directa**

```bash
#!/bin/bash

for NAME in Sean Jon Isaac David; do
  echo "Hello $NAME"
done
```

Aquí, la lista se pasa directamente al loop for, sin usar una variable intermedia. Esto es útil para listas cortas y específicas.

</Card>

<Card>
    
**Ejemplo 3: Archivos en un Directorio**

```bash
#!/bin/bash

for S in *; do
  echo "Doing something to $S"
done
```

En este caso, el comodín `*` expande a todos los archivos en el directorio actual. El loop for itera sobre cada archivo, realizando una acción en cada uno.



</Card>
</Card>

<Card>
    
### Loop while

El loop while se utiliza para ejecutar un bloque de código mientras una condición sea verdadera. Es útil cuando el número de iteraciones no es conocido de antemano.

<Card>
    
**Ejemplo: Contar del 0 al 9**

```bash
#!/bin/bash

i=0
while [ $i -lt 10 ]; do
  echo $i
  i=$(( $i + 1 ))
done
echo "Done counting"
```

Explicación detallada:

- `i=0` inicializa la variable `i` a `0`.
- `while [ $i -lt 10 ]` ejecuta el bloque de comandos mientras `i` sea menor que `10`, donde `-lt` significa «menor que». (Otras opciones son `-gt` para «mayor que» y `-eq` para «igual a»).
- `echo $i` imprime el valor de `i`.
- `i=$(( $i + 1 ))` incrementa `i` en `1`, donde `$(( ))` se utiliza para realizar cálculos aritméticos.
- `done` marca el final del bloque de comandos.
- `echo "Done counting"` imprime un mensaje después de que el loop haya terminado.


</Card>

</Card>

</Card>