---

title: Type

---

<Card>

## El comando type

El comando `type` es una utilidad de la terminal de Linux que se utiliza para mostrar información acerca de un comando, como su tipo y ubicación en el sistema. 

- Puede ser útil para determinar si un comando es un alias, una función, un comando interno del shell, o un comando externo.

### Sintaxis

La sintaxis básica del comando `type` es la siguiente:

```bash
type [opciones] [comando]
```

Donde:

- `[opciones]` son las opciones que se pueden utilizar con el comando `type`.
- `[comando]` es el nombre del comando del que se desea obtener información.

### Ejemplos

#### Verificar el tipo de un comando

Para verificar el tipo de un comando, se puede utilizar el comando `type` de la siguiente manera:

```bash
sysadmin@localhost:~$ type ls
ls is aliased to `ls --color=auto'
sysadmin@localhost:~$ type cd
cd is a shell builtin
sysadmin@localhost:~$ type date
date is /bin/date
sysadmin@localhost:~$
```

1. En el primer ejemplo, se muestra que `ls` es un alias que se expande a `ls --color=auto`, lo que significa que se ejecutará con el color activado.

2. En el segundo ejemplo, se muestra que `cd` es un comando interno del shell.

3. En el tercer ejemplo, se muestra que `date` es un comando externo ubicado en `/bin/date`.

## Opciones comunes

- `-a`: Muestra todas las ubicaciones de un comando si hay más de una.
- `-t`: Muestra sólo el tipo del comando (alias, función, comando interno, comando externo).
- `-p`: Muestra el nombre del comando que se ejecutará, sin buscar en la ruta.
- `-h`: Muestra la ayuda del comando `type`.
- `-V`: Muestra la versión del comando `type`.
- `-f`: Muestra la ubicación del comando si es un archivo.

## Notas adicionales

- El comando `type` busca el comando en los directorios que están listados en la variable de entorno PATH.
- Se puede utilizar el comando `which` para mostrar la ubicación de un comando en el sistema.

</Card>