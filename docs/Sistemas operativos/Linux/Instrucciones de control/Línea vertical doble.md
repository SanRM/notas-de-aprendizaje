---

title: Línea vertical doble

---

El símbolo de línea vertical doble `||` actúa como un operador `o` lógico.

- Si el primer comando falla, entonces el segundo comando (a la derecha de la `||`) se ejecutará. Si el primer comando tiene éxito, entonces el segundo comando no se ejecutará.

Por ejemplo, si queremos instalar un paquete y luego actualizar el sistema, podemos hacerlo de la siguiente manera:

```bash
sudo apt-get install htop || sudo apt-get update
```

<Card color='green'>

- En este caso, si la instalación de `htop` falla, entonces se ejecutará el comando `sudo apt-get update`.

</Card>

<Card color='red'>

- Si la instalación de `htop` tiene éxito, entonces el comando `sudo apt-get update` no se ejecutará.

</Card>

El operador `||` se puede utilizar para ejecutar un comando si otro comando falla, nunca va a ejecutar ambos comandos.

