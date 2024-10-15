---

title: Interrogación (?)

---

El signo de interrogación `?` es un comodín que coincide con cualquier carácter único. 

Supongamos que se quiere visualizar todos los archivos en el directorio `/etc` que tengan exactamente 7 caracteres después del carácter `t`:

```bash
sysadmin@localhost:~$ ls /etc/t??????
/etc/terminfo /etc/timezone /etc/tomcat8

sysadmin@localhost:~$
```

Los comodines pueden utilizarse juntos para encontrar patrones más complejos. El comando `echo /etc/*????????????????????` imprimirá sólo los archivos del directorio /etc con veinte o más caracteres en el nombre del archivo:

```bash
sysadmin@localhost:~$ echo /etc/*????????????????????            
/etc/bindresvport.blacklist /etc/ca-certificates.conf            
sysadmin@localhost:~$
```

El asterisco y el signo de interrogación también podrían usarse juntos para buscar archivos con extensiones de tres letras ejecutando el comando `echo /etc/*.???`:

```bash
sysadmin@localhost:~$ echo /etc/*.???                
/etc/blkid.tab /etc/issue.net                                
sysadmin@localhost:~$
```

