---

title: Punto y coma

---

El punto y coma puede utilizarse para ejecutar varios comandos, uno tras otro. Cada comando se ejecuta de forma independiente y consecutiva; no importa el resultado del primer comando, el segundo comando se ejecutará una vez que el primero haya terminado, luego el tercero y así sucesivamente.

Por ejemplo, si se quiere imprimir los meses de enero, febrero y marzo de 2015, se puede ejecutar: `cal 1 2015; cal 2 2015; cal 3 2015` en la línea de comandos:

```bash
sysadmin@localhost:~$ cal 1 2015; cal 2 2015; cal 3 2015               
    January 2015                                                        
Su Mo Tu We Th Fr Sa                                 
             1  2  3                                            
 4  5  6  7  8  9 10                                            
11 12 13 14 15 16 17                                                 
18 19 20 21 22 23 24                                                    
25 26 27 28 29 30 31                                                            
                                                               
    February 2015                                                     
Su Mo Tu We Th Fr Sa                                                   
 1  2  3  4  5  6  7                                                   
 8  9 10 11 12 13 14                                                   
15 16 17 18 19 20 21                                                   
22 23 24 25 26 27 28                                                           

     March 2015                                                        
Su Mo Tu We Th Fr Sa                                                   
 1  2  3  4  5  6  7                                                   
 8  9 10 11 12 13 14                                                  
15 16 17 18 19 20 21                                                   
22 23 24 25 26 27 28                                                   
29 30 31   
sysadmin@localhost:~$
```