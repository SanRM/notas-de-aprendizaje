---
sidebar_position: 23
---

En Angular, los **pipes** son una herramienta útil para transformar datos directamente en la plantilla. Los pipes pueden aplicarse a propiedades o expresiones y ofrecen formatos personalizados para fechas, números, monedas y mucho más. Además, pueden configurarse para adaptar la salida a tus necesidades específicas.

A continuación, exploraremos cómo usar y personalizar algunos pipes en Angular.

<Card>

#### Ejemplo: Personalización de Pipes en Angular

<Card>

#### Paso 1: Formatear un Número con `DecimalPipe`

El `DecimalPipe` en Angular permite definir la cantidad de dígitos enteros y decimales en un número. Para configurar este pipe, se usa la sintaxis `:` seguida del formato deseado.

Actualicemos la plantilla en `app.component.ts` para aplicar `DecimalPipe` a una propiedad numérica (`num`) usando el formato `"3.2-2"`:

<Card>

```typescript
template: `
    ...
    <li>Número con "decimal": {{ num | number:"3.2-2" }}</li>
`
```
    
</Card>

Aquí:
- `3` es el número mínimo de dígitos enteros.
- `2` es el mínimo de dígitos decimales.
- `2` también es el máximo de dígitos decimales.

**Ejemplo de Salida**: Si `num = 1234.5`, el resultado sería **"1,234.50"**.
    
</Card>

<Card>

#### Paso 2: Formatear una Fecha con `DatePipe`

`DatePipe` formatea fechas de manera fácil y configurable. Al aplicar este pipe, se pueden utilizar distintos formatos, como `'medium'`, `'short'`, `'fullDate'`, etc.

Agreguemos `DatePipe` a una propiedad `birthday` en la plantilla:

<Card>

```typescript
template: `
    ...
    <li>Fecha con "date": {{ birthday | date: 'medium' }}</li>
`
```
    
</Card>

**Ejemplo de Salida**: Si `birthday = new Date('2015-06-15T21:43:11')`, el resultado sería **"Jun 15, 2015, 9:43:11 PM"** en formato `'medium'`.

Para experimentar, puedes cambiar el formato a opciones como `'shortDate'` o `'fullDate'` y observar cómo cambia la salida.
    
</Card>

<Card>

#### Paso 3: Formatear una Moneda con `CurrencyPipe`

El `CurrencyPipe` permite mostrar valores monetarios. Si no se especifica un parámetro, el pipe usa la configuración de moneda predeterminada. Sin embargo, puedes especificar una moneda y cambiar la representación.

Agreguemos `CurrencyPipe` a una propiedad `cost`:

<Card>

```typescript
template: `
    ...
    <li>Moneda con "currency": {{ cost | currency }}</li>
`
```
    
</Card>

Si `cost = 2500`, el pipe `CurrencyPipe` formateará el valor en la moneda local predeterminada. Por ejemplo, podría mostrar **"$2,500.00"** en el caso de dólares.

También puedes probar otros parámetros como `currency: 'EUR'` para cambiar la moneda a euros.
    
</Card>
    
<Card color='cyan'>
    
#### Ejemplo completo 

<Card>
    
```typescript
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
```

</Card>

</Card>

</Card>

Los pipes en Angular permiten formatear datos directamente en la vista, ofreciendo flexibilidad y limpieza en la presentación de la información. Angular incluye muchos pipes integrados, pero también es posible crear pipes personalizados si los existentes no cumplen con tus necesidades.