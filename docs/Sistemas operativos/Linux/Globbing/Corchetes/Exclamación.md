---

title: Exclamación (!)

---

El signo de exclamación se utiliza en conjunto con los corchetes para negar un intervalo. 

Por ejemplo, el comando echo `[!DP]*` mostrará cualquier archivo que no comienza con D o P.

```bash
sysadmin@localhost:~$ echo [!DP]*
/etc /home /lib /lib32 /lib64 /lost+found /media /mnt /opt /proc /root /run /sbin /srv /sys /tmp /usr /var
sysadmin@localhost:~$
```
