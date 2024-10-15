---

title: Asterisco (*)

---

El asterisco `*` es un comodín que coincide con cualquier secuencia de caracteres. Por ejemplo, si tienes un directorio con los siguientes archivos:

```bash
archivo1.txt
archivo2.txt
archivo3.txt
```

Puedes listar todos los archivos que terminan en `.txt` con el comando `ls` y el asterisco `*`:

```bash
sysadmin@localhost:~$ ls *.txt
archivo1.txt archivo2.txt archivo3.txt

sysadmin@localhost:~$
```

En este caso, el asterisco `*` coincide con cualquier secuencia de caracteres, por lo que `*.txt` coincide con cualquier archivo que termine en `.txt`.

<Card>
    
### Ejemplos


<Card>   
Para visualizar todos los archivos en el directorio `/etc` que empiecen con la letra `t`:

```bash
sysadmin@localhost:~$ ls /etc/t*
/etc/terminfo /etc/timezone                                      

sysadmin@localhost:~$
```

El patrón t* significa "cualquier archivo que comienza con el carácter t y tiene cero o más de cualquier carácter después de la letra t".
</Card>

<Card>
    
Puedes usar el asterisco en cualquier lugar dentro del patrón del nombre de archivo. El siguiente ejemplo coincidirá con cualquier nombre de archivo en el directorio /etc que termina con .d:

```bash
sysadmin@localhost:~$ echo /etc/*.d                                 
/etc/apparmor.d /etc/bash_completion.d  /etc/cron.d /etc/depmod.d   /etc/fstab.d /etc/init.d /etc/insserv.conf.d /etc/ld.so.conf.d /etc/logrotate.d /etc/modprobe.d /etc/pam.d /etc/profile.d /etc/rc0.d /etc/rc1.d /etc/rc2.d /etc/rc3.d /etc/rc4.d /etc/rc5.d /etc/rc6.d /etc/rcS.d /etc/rsyslog.d /etc/sudoers.d /etc/sysctl.d  /etc/update-motd.d
```

</Card>

<Card>
    
EnEn el ejemplo siguiente se mostrarán todos los archivos en el directorio /etc que comienzan con la letra r y terminan con .conf:

```bash
sysadmin@localhost:~$ echo /etc/r*.conf                             
/etc/resolv.conf /etc/rsyslog.conf
```

</Card>

</Card>