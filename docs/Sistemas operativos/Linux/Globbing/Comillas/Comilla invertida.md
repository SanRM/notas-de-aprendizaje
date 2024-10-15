---

title: Comilla invertida

---

Las comillas invertidas se utilizan para especificar un comando dentro de un comando, un proceso de sustitución del comando. Esto permite un uso muy potente y sofisticado de los comandos.

Aunque puede sonar confuso, un ejemplo debe hacer las cosas más claras. Para empezar, fíjate en la salida del comando `date`: 

```bash
sysadmin@localhost:~$ date                                           
Mon Nov  2 03:35:50 UTC 2015
sysadmin@localhost:~$
```

Ahora fíjate en la salida de la línea de comandos `echo Today is date` (o «eco La fecha de hoy es» en español):

```bash
sysadmin@localhost:~$ echo Today is date                               
Today is date                                                           
sysadmin@localhost:~$
```

En el comando anterior la palabra `date` (o «fecha» en español) es tratada como texto normal y el shell simplemente pasa `date` al comando echo. Pero, probablemente quieras ejecutar el comando `date` y tener la salida de ese comando enviado al comando echo. Para lograr esto, deberás ejecutar la línea de comandos **echo Today is `date`**:

```bash
sysadmin@localhost:~$ echo Today is `date`                         
Mon Jul 29 16:57:46 UTC 2024                     
sysadmin@localhost:~$
```