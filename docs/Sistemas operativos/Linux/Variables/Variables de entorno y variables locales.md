---

title: Variables de entorno y variables locales
sidebar_position: 1

---

<Card>
    
## Bash shell

El **BASH shell** es el intérprete de comandos predeterminado en la mayoría de las distribuciones de Linux. Ofrece funciones avanzadas como historial de comandos, scripting, alias y variables.

</Card>

<Card>
    
## Tipos de variables

En el shell BASH, se utilizan dos tipos principales de variables: las variables de entorno y las variables locales.

|Variables de entorno|Variables locales|
|---|---|
|Estas variables están disponibles para todos los procesos y comandos que se ejecutan en el shell, ejemplos comunes incluyen `PATH` y `HOME`. Se pueden ver todas las variables de entorno usando el comando `env`. Para buscar una variable de entorno específica, se puede usar `grep`.| Estas variables son específicas para la sesión actual del shell y no están disponibles para otros procesos. Normalmente, se crean con letras minúsculas y no se exportan a otros procesos.|

    
## Trabajar con variables locales

Para crear una variable local en BASH, se asigna un valor a un nombre de variable. Por ejemplo, para crear una variable llamada `mi_variable` con el valor `hola`, se utiliza el siguiente comando:

```bash
mi_variable=hola
```

Para acceder al valor de la variable, se utiliza el carácter `$` seguido del nombre de la variable:

```bash
echo $mi_variable
```

### Convertir una variable local en una variable de entorno

Para convertir una variable local en una variable de entorno, se utiliza el comando [`export`](../Comandos/Variables%20de%20entorno%20y%20shell/Export.md) seguido del nombre de la variable:

```bash
export mi_variable
```

Ahora, la variable `mi_variable` es una variable de entorno y está disponible para todos los procesos y comandos que se ejecutan en el shell.

</Card>

<Card>
    
## Trabajar con variables de entorno

Para crear una variable de entorno en BASH, se utiliza el comando [`export`](../Comandos/Variables%20de%20entorno%20y%20shell/Export.md) seguido del nombre de la variable y su valor. Por ejemplo, para crear una variable de entorno llamada `mi_variable` con el valor `hola`, se utiliza el siguiente comando:

```bash
export mi_variable=hola
```

Para acceder al valor de la variable de entorno, se utiliza el carácter `$` seguido del nombre de la variable:

```bash
echo $mi_variable
```

### Listar todas las variables de entorno

Para ver todas las variables de entorno en BASH, se utiliza el comando `env`:

```bash
env
```

Para buscar una variable de entorno específica, se puede usar el comando `grep`. Por ejemplo, para buscar la variable `PATH`, se utiliza el siguiente comando:

```bash
env | grep PATH
```

## Cambiar el valor de una variable de entorno

Para cambiar el valor de una variable de entorno, se asigna un nuevo valor a la variable. Por ejemplo, para cambiar el valor de la variable `mi_variable` a `adios`, se utiliza el siguiente comando:

```bash
export mi_variable=adios
```

## Eliminar una variable de entorno

Para eliminar una variable de entorno en BASH, se utiliza el comando `unset` seguido del nombre de la variable. Por ejemplo, para eliminar la variable `mi_variable`, se utiliza el siguiente comando:

```bash
unset mi_variable
```

</Card>