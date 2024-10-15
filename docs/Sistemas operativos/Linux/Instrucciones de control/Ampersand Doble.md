---

title: Ampersand Doble

---

El símbolo de ampersand doble `&&` actúa como un operador `y` lógico. 

- Si el primer comando tiene éxito, entonces el segundo comando (a la derecha de la &&) también se ejecutará. Si el primer comando falla, entonces el segundo comando no se ejecutará.

<Card>

Por ejemplo, si queremos instalar un paquete y luego actualizar el sistema, podemos hacerlo de la siguiente manera:

```bash
sudo apt-get install htop && sudo apt-get update
```
<Card color='green'>
- En este caso, si la instalación de `htop` tiene éxito, entonces se ejecutará el comando `sudo apt-get update`. 
    
</Card>

<Card color='red'>
    
- Si la instalación de `htop` falla, entonces el comando `sudo apt-get update` no se ejecutará.

</Card>
</Card>

- Se deben ejecutar los 2 comandos o no se ejecutará ninguno.

