---

title: Comillas simples

---

Las comillas simples evitan que el shell interprete algunos caracteres especiales. Esto incluye comodines, variables, sustitución de comando y otro metacarácter que aún no hemos visto.

Por ejemplo, si se quiere que el carácter `$` simplemente signifique un `$`, en lugar de actuar como un indicador del shell para buscar el valor de una variable, se puede ejecutar el segundo comando que se muestra a continuación:

```bash
sysadmin@localhost:~$ echo The car costs $100                           
The car costs 00                                                        
sysadmin@localhost:~$ echo 'The car costs $100'                        
The car costs $100                                                      
sysadmin@localhost:~$
```

En el primer comando, el shell intenta buscar el valor de la variable `100`, que no existe. En el segundo comando, el shell simplemente imprime el texto tal como está.

<Card>
    
## Barra diagonal invertida (\)

La barra diagonal invertida (`\`) es un carácter de escape que se puede utilizar para evitar que el shell interprete el siguiente carácter. 

- Por ejemplo, si se quiere que el carácter `$` simplemente signifique un `$`, en lugar de actuar como un indicador del shell para buscar el valor de una variable, se puede ejecutar el segundo comando que se muestra a continuación:

```bash
sysadmin@localhost:~$ echo "The service costs $100 and the path is $PATH"
The service costs 00 and the path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games 
sysadmin@localhost:~$ echo 'The service costs $100 and the path is $PATH' 
The service costs $100 and the path is $PATH                         
sysadmin@localhost:~$ echo The service costs \$100 and the path is $PATH
The service costs $100 and the path is /usr/bin/custom:/home/sysadmin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games 
sysadmin@localhost:~$
```

- En el primer comando, el shell intenta buscar el valor de la variable `100`, que no existe. 

- En el segundo comando, el shell simplemente imprime el texto tal como está. 

- En el tercer comando, se utiliza la barra diagonal invertida para evitar que el shell interprete el carácter `$` como un indicador de variable, también muestra el valor de la variable `PATH`.

</Card>

<Card>
    
## $ 

También se puede colocar un $ ( antes del y ) después del comando para llevar a cabo la sustitución de comandos:

```bash
echo Today is $(date)
```

El resultado debe ser similar al siguiente:

```bash
sysadmin@localhost:~$ echo Today is $(date)
Today is Tue Jan 19 15:51:09 UTC 2016
sysadmin@localhost:~$
```

Las comillas invertidas se parecen mucho a las comillas simples, por lo que es más difícil «ver» lo que un comando debería hacer. Originalmente los shell utilizaban las comillas invertidas; el formato $(comando)  se añadió en una versión posterior del shell bash para que la instrucción fuera visualmente más clara.

</Card>