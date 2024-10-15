---

title: Export 

---

<Card>
    
## El comando export

El comando `export` se utiliza en la terminal de Linux para establecer variables de entorno. Las variables de entorno son variables que contienen información sobre el entorno de ejecución del sistema, como rutas de búsqueda de programas, configuraciones de idioma, y otros valores que pueden ser utilizados por los programas en ejecución.

### Sintaxis

La sintaxis básica del comando `export` es la siguiente:

```bash
export [opciones] [variable]=[valor]
```

Donde:

- `[opciones]` son las opciones que se pueden utilizar con el comando `export`.
- `[variable]` es el nombre de la variable de entorno que se desea establecer.
- `[valor]` es el valor que se desea asignar a la variable de entorno.

### Ejemplos

#### Establecer una variable de entorno

Para establecer una variable de entorno con el comando `export`, se utiliza la siguiente sintaxis:

```bash
export MI_VARIABLE=hola
```

Este comando establecerá una variable de entorno llamada `MI_VARIABLE` con el valor `hola`.

#### Verificar una variable de entorno

Para verificar si una variable de entorno ha sido establecida correctamente, se puede utilizar el comando `echo` con la variable de entorno precedida por el signo `$`:

```bash
echo $MI_VARIABLE
```

Para más información sobre el comando `echo`, consulta el siguiente [enlace](../Visualización%20y%20diagnóstico%20de%20comandos/Echo.md).

## Opciones comunes

- `-n`: No agrega un salto de línea al final del texto.
- `-e`: Habilita la interpretación de secuencias de escape en el texto.
- `-p`: Muestra las variables de entorno que se han establecido con el comando `export`.
- `-u`: Elimina una variable de entorno.
- `-h`: Muestra la ayuda del comando `export`.

## Notas adicionales

- Las variables de entorno establecidas con el comando `export` están disponibles para todos los procesos hijos del proceso actual.
 
</Card>


