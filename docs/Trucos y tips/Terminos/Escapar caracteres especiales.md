---

title: Escapar caracteres especiales

---

<Card>

## Escapar caracteres especiales

En programación y sistemas operativos, los caracteres especiales son aquellos que tienen un significado especial y no se pueden utilizar de manera literal en un comando o instrucción. Algunos ejemplos comunes de caracteres especiales son `*`, `?`, `[`, `]`, `{`, `}`, `(`, `)`, `|`, `;`, `&`, `<`, `>`, `$`, `\`, entre otros.

Para utilizar un carácter especial de manera literal en un comando o instrucción, se debe escapar el carácter especial con una barra invertida (`\`). Al escapar un carácter especial, se indica al sistema que el carácter debe ser tratado de manera literal y no como un símbolo con un significado especial.

### Ejemplo

Supongamos que se desea crear un archivo con el nombre `archivo[1].txt`. Para crear este archivo en la terminal, se debe escapar los corchetes `[` y `]` con una barra invertida:

```bash
touch archivo\[1\].txt
```

Al escapar los corchetes, se crea un archivo con el nombre `archivo[1].txt` en lugar de interpretar los corchetes como parte de un patrón de búsqueda o secuencia especial.

</Card>
