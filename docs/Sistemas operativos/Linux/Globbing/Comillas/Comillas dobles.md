---

title: Comillas dobles

---

Las comillas dobles **"** se utilizan para evitar que el shell interprete los caracteres especiales que se encuentran dentro de ellas. El asterisco es sólo un asterisco, el signo de dólar es sólo un signo de dólar, etc. 

```bash
sysadmin@localhost:~$ echo /etc/[DP]*                                         
/etc/DIR_COLORS /etc/DIR_COLORS.256color /etc/DIR_COLORS.lightbgcolor /etc/PackageKit                                                                  
sysadmin@localhost:~$ echo "/etc/[DP]*"                                       
/etc/[DP]*                                                                    
sysadmin@localhost:~$ 
```

Esto es útil cuando se quiere mostrar algo en pantalla, lo que suele ser un carácter especial para el shell:

```bash
sysadmin@localhost:~$ echo "The glob characters are *, ? and [ ]"      
The glob characters are *, ? and [ ]                                   
sysadmin@localhost:~$
```

Las comillas dobles todavía permiten la `sustitución de comando`, `sustitución de variable` y permiten algunos metacaracteres de shell. 

Por ejemplo, en la siguiente demostración, notarás que el valor de la variable `PATH` es desplegada:

```bash
sysadmin@localhost:~$ echo "The path is $PATH"                          
The path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games                          
sysadmin@localhost:~$
```