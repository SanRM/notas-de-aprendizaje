---
sidebar_position: 24
---


En Angular, los **pipes** (tubos o conductos) son herramientas que transforman datos en las plantillas sin necesidad de realizar manipulaciones complejas en el código de la clase del componente. Aunque Angular incluye varios pipes predeterminados (como `uppercase` o `date`), podemos crear pipes personalizados para adaptarlos a nuestras necesidades específicas.

En este ejemplo, aprenderemos cómo crear un pipe personalizado que invierta el texto y cómo usarlo en la plantilla de un componente.

<Card>

#### Paso 1: Crear la Clase del Pipe con el Decorador `@Pipe`

Un pipe en Angular es una clase TypeScript que utiliza el decorador `@Pipe`. Este decorador le da a Angular la información necesaria para identificar el pipe y usarlo en las plantillas.

Aquí tienes un ejemplo básico de un pipe que envuelve una cadena de texto con estrellas:

<Card>

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
  name: 'star',
})
export class StarPipe implements PipeTransform {
    transform(value: string): string {
        return `⭐️ ${value} ⭐️`;
  }
}
```
    
</Card>

- **name**: Este es el nombre que se usará en la plantilla para aplicar el pipe.
- **transform**: Aquí se coloca la lógica de transformación. En este caso, toma un `string` y lo devuelve rodeado de estrellas.


</Card>

<Card>

#### Paso 2: Crear el Pipe Personalizado `ReversePipe`

Vamos a crear un pipe llamado `ReversePipe` que invierte una cadena de texto.

1. Empezamos creando el archivo `reverse.pipe.ts`.
2. Agregamos el decorador `@Pipe` con la configuración:

<Card>

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
        let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
        reverse += value[i];
    }
    return reverse;
  }
}
```
    
</Card>

- Este pipe toma una cadena y, dentro de `transform`, la invierte. Recorre cada letra desde el final hasta el inicio y las concatena en una nueva cadena.
        
</Card>

<Card>

#### Paso 3: Usar el `ReversePipe` en la Plantilla

Con el pipe `ReversePipe` creado, ahora lo podemos aplicar en la plantilla de `AppComponent`:

1. Incluimos `ReversePipe` en los `imports` del componente.
2. Utilizamos el pipe en el HTML con el operador `|` seguido del nombre del pipe, en este caso `reverse`.

<Card>

```typescript
import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
    selector: 'app-root',
  template: `Reverse Machine: {{ word | reverse }}`,
  standalone: true,
  imports: [ReversePipe],
})
export class AppComponent {
    word = 'Angular';
}
```
    
</Card>

Aquí, el pipe `reverse` toma el valor de `word` y lo invierte en la vista, mostrando `ralugnA` en lugar de `Angular`.
    
</Card>  

Los pipes personalizados en Angular nos permiten realizar transformaciones de datos de manera sencilla y directa en las plantillas. En este caso, creamos un `ReversePipe` para invertir cadenas de texto. Ahora tienes una herramienta más para hacer transformaciones personalizadas en tu aplicación Angular.