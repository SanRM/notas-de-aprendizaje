---
sidebar_position: 8
---

### Comunicación entre Componentes con @Input en Angular

En el desarrollo de aplicaciones, a menudo es necesario enviar datos a un componente. Esto permite personalizar el comportamiento y la presentación de un componente o transferir información de un componente padre a uno hijo. En Angular, esto se logra utilizando el decorador **@Input**, que es similar a las propiedades (props) en otros frameworks.

A continuación, aprenderemos a utilizar el decorador @Input para enviar información a los componentes.

<Card>

#### Paso 1: Definir una Propiedad @Input en el Componente

Para crear una propiedad **Input**, primero debes agregar el decorador `@Input` a una propiedad de la clase del componente. Por ejemplo, en el archivo `user.component.ts`, podemos definir una propiedad `occupation`:

<Card>

```typescript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
  template: `<p>The user's occupation is {{ occupation }}</p>`
})
export class UserComponent {
    @Input() occupation = '';
}
```
    
</Card>

Aquí, hemos definido la propiedad `occupation` y le hemos asignado un valor inicial de cadena vacía. Esta propiedad puede recibir un valor de un componente padre.
    
</Card>

<Card>

#### Paso 2: Pasar un Valor a la Propiedad @Input

Cuando estás listo para pasar un valor a través de un **Input**, puedes hacerlo en la plantilla del componente padre utilizando la sintaxis de atributos. Por ejemplo, en `app.component.ts`, puedes enviar un valor a la propiedad `occupation` de esta manera:

<Card>

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
  template: `<app-user occupation="Angular Developer"></app-user>`
})
export class AppComponent {}
    
```
</Card>

En este caso, estamos pasando el valor `"Angular Developer"` a la propiedad `occupation` del componente `UserComponent`.
    
</Card>

<Card>

#### Paso 3: Agregar Otra Propiedad @Input

Para continuar, definamos otra propiedad `name` en `UserComponent`. Actualizamos el código en `user.component.ts` para incluir esta nueva propiedad y modificar el mensaje de la plantilla:

<Card>

```typescript
@Component({
    selector: 'app-user',
  template: `<p>The user's name is {{ name }} and their occupation is {{ occupation }}</p>`
})
export class UserComponent {
    @Input() occupation = '';
  @Input() name = '';
}
```
    
</Card>

Ahora, también estamos listos para enviar un nombre al componente.
    
</Card>

<Card>

#### Paso 4: Enviar un Valor a la Nueva Propiedad @Input

Ahora actualizaremos `app.component.ts` para pasar un valor a la nueva propiedad `name` con el valor `"Simran"`:

<Card>

```typescript
@Component({
    selector: 'app-root',
  template: `<app-user occupation="Angular Developer" [name]="'Simran'"></app-user>`
})
export class AppComponent {}
```
    
</Card>

Aquí, estamos utilizando la sintaxis de enlace de propiedades para asignar el valor de `name`. Al envolver el valor en comillas simples, estamos pasando una cadena de texto, lo que permite que el valor sea interpretado correctamente.
    
</Card>

Al implementar el decorador **@Input**, hemos logrado que el componente `UserComponent` reciba datos del componente padre `AppComponent`. Gracias a esto, ahora se puede mostrar dinámicamente el nombre y la ocupación de un usuario en la interfaz. 

Este enfoque de comunicación entre componentes es fundamental en Angular y nos permite construir aplicaciones más modulares y reutilizables. En la próxima lección, exploraremos cómo enviar información desde un componente hijo a un componente padre, completando así el ciclo de comunicación entre componentes.