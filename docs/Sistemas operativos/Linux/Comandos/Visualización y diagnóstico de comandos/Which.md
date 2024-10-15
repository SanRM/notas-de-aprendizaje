---

title: Which 

---

<Card>
    
## El comando which

Puede haber situaciones donde diferentes versiones del mismo comando se instalan en un sistema o donde los comandos son accesibles para algunos usuarios y a otros no. Si un comando no se comporta como se esperaba o si un comando no está accesible pero debería estarlo, puede ser beneficioso saber donde el shell encuentra tal comando o que versión está utilizando.

Sería tedioso tener que buscar manualmente en cada directorio que se muestra en la variable PATH. En su lugar, puedes utilizar el comando which (o «cuál» en español) para mostrar la ruta completa del comando en cuestión:

### Sintaxis

La sintaxis básica del comando `which` es la siguiente:

```bash
which [opciones] [programa]
```

Donde:

- `[opciones]` son las opciones que se pueden utilizar con el comando `which`.
- `[programa]` es el nombre del programa que se desea buscar en el sistema.

### Ejemplos

#### Buscar la ubicación de un programa

Para buscar la ubicación del programa `date` y `cal`, se puede utilizar el comando `which` de la siguiente manera:

```bash
sysadmin@localhost:~$ which date                                       
/bin/date                                                               
sysadmin@localhost:~$ which cal                                        
/usr/bin/cal                                                            
sysadmin@localhost:~$
```


## Opciones comunes

- `-a`: Muestra todas las ubicaciones de un programa si hay más de una.
- `-s`: Silencia la salida y devuelve un código de salida 0 si el programa se encuentra y 1 si no se encuentra.
- `-h`: Muestra la ayuda del comando `which`.
- `-V`: Muestra la versión del comando `which`.

## Notas adicionales

- El comando `which` busca el programa en los directorios que están listados en la variable de entorno PATH.
 
</Card>


