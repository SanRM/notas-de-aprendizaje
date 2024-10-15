---

title: PATH

---

<Card>
    
## La variable PATH

La variable `PATH` es una de las más importantes en BASH, ya que contiene una lista de directorios donde el sistema busca comandos.

La variable PATH es una variable de entorno en sistemas operativos como Windows, macOS y Linux que especifica una lista de directorios en los que el sistema operativo busca ejecutables cuando se ejecuta un comando. Es decir, cuando se introduce un comando en la terminal o línea de comandos, el sistema busca en los directorios listados en PATH para encontrar el archivo correspondiente al comando.

<Card>

## Ejemplo
    
Supongamos que se tiene un programa llamado `mi_programa` ubicado en `/usr/local/bin/mi_programa`. Para ejecutar `mi_programa` desde la terminal, el sistema necesita saber dónde buscar el archivo ejecutable.

<Card color='green'>
    
### Si `/usr/local/bin` está en la variable PATH:

Al introducir mi_programa en la terminal, el sistema buscará en todos los directorios listados en PATH y encontrará `mi_programa` en `/usr/local/bin`, ejecutándolo directamente.

```bash title='Ejecución de mi_programa correctamente'
sysadmin@localhost:~$ mi_programa

Ejecutando mi_programa...    
```

</Card>

<Card color='red'>
    
### Si `/usr/local/bin` no está en la variable PATH:

El sistema no encontrará `mi_programa` a menos que se especifique la ruta completa, como `/usr/local/bin/mi_programa`. Sin la ruta completa, el sistema no sabrá dónde buscar el ejecutable y mostrará un mensaje de error indicando que el comando no se encuentra.

```bash title='Error al ejecutar mi_programa'
sysadmin@localhost:~$ mi_programa

-bash: mi_programa: command not found
```

</Card>

</Card>

</Card>

