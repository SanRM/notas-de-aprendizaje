---
sidebar_position: 9
---

`@Output` es un decorador en Angular que permite que un **componente hijo** envíe información o notificaciones al **componente padre**. Esto es útil cuando queremos avisar al componente principal de algún cambio o acción que ocurrió en el componente secundario, como el clic de un botón, el envío de un formulario, o cualquier evento relevante.

<Card>

### ¿Para qué sirve `@Output`?
`@Output` se usa para **crear eventos personalizados** en el componente hijo que el componente padre puede escuchar y manejar. Imagina una aplicación en la que el usuario interactúa con varios elementos de la interfaz (botones, listas, formularios) en un componente hijo. El componente padre necesita saber cuándo suceden esas interacciones para actualizar su estado o realizar alguna acción. Con `@Output`, el hijo puede "hablar" con el padre y enviarle esos datos o notificaciones de manera sencilla.
    
</Card>

<Card>

### Ejemplo Práctico de `@Output`

Para comprenderlo mejor, veamos cómo funciona `@Output` en un ejemplo concreto. Aquí tenemos dos componentes:

<Card color='green'>
1. `AppComponent` (el componente padre).
</Card>

<Card color='blue'>
2. `ChildComponent` (el componente hijo).
</Card>


En este ejemplo, `ChildComponent` tiene un botón que incrementa un contador. Cada vez que el usuario hace clic, se envía el valor actualizado de ese contador a `AppComponent` para que lo muestre.


### Código del Ejemplo



<Tabs>
 
  <TabItem value="child.component.ts" label="child.component.ts">

<Card color='green'>

**app.component.ts** (componente padre)
```typescript
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child (incrementCountEvent)="updateCount($event)"></app-child>
    <p>Contador en el padre: {{ count }}</p>
  `,
  standalone: true,
  imports: [ChildComponent],
})
export class AppComponent {
  count = 0;

  updateCount(newCount: number) {
    this.count = newCount;  // Actualiza el contador en el padre con el valor emitido desde el hijo
  }
}
```
    
</Card>

  </TabItem>

 <TabItem value="app.component.ts" label="app.component.ts" default>
   
<Card color='blue'>

**child.component.ts** (componente hijo)
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="onClick()">Añadir número</button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();  // Declara el evento

  count = 0;

  onClick() {
    this.count++;  // Incrementa el contador cada vez que se hace clic
    this.incrementCountEvent.emit(this.count);  // Emite el valor actualizado del contador
  }
}
```
    
</Card>

  </TabItem>

</Tabs>

<Card>


### Explicación Paso a Paso

1. **Definir el Evento con `@Output` en el Hijo**:
   - En `ChildComponent`, definimos `incrementCountEvent` con `@Output` y lo configuramos como `new EventEmitter<number>()`. Esto convierte a `incrementCountEvent` en un evento personalizado que enviará números (`number`) al componente padre.
   - Esta declaración es como decir: *"Tengo un evento listo para ser lanzado y se llama `incrementCountEvent`"*.

2. **Emitir el Evento desde el Hijo**:
   - En la función `onClick()`, cada vez que el botón es presionado, incrementamos `count` y luego usamos `this.incrementCountEvent.emit(this.count)` para lanzar el evento, enviando el valor actual de `count`.
   - Este valor será "escuchado" por el componente padre, que lo usará para actualizar su propio contador.

3. **Escuchar el Evento en el Padre**:
   - En `AppComponent`, configuramos el HTML para que el evento personalizado `(incrementCountEvent)` del componente `<app-child>` dispare la función `updateCount($event)` cada vez que el hijo emita un nuevo valor.
   - `$event` contiene el valor de `count` emitido desde el hijo, que será capturado y enviado como argumento a `updateCount`.

4. **Actualizar el Valor en el Padre**:
   - En `updateCount(newCount: number)`, la variable `count` del padre se actualiza con el valor recibido desde el hijo. Luego, este valor es accesible en el HTML del padre.

5. **Mostrar el Resultado en el Padre**:
   - Finalmente, en el HTML de `AppComponent`, el valor de `count` se muestra en pantalla. Ahora, cada vez que presiones el botón en `ChildComponent`, `count` se incrementará y se verá reflejado en el padre.
    
    
</Card>

</Card>




### ¿Por qué es útil `@Output`?

`@Output` y `EventEmitter` permiten que los componentes hijos sean más autónomos y fáciles de manejar. En lugar de que el padre tenga que gestionar directamente cada acción del hijo, el hijo se encarga de "decirle" al padre cuándo algo importante sucede. Esto hace que el código sea más modular, reutilizable y fácil de mantener.

En nuestro ejemplo:
- `ChildComponent` es un componente reutilizable que puede emitir el evento `incrementCountEvent` en cualquier lugar donde sea utilizado, y cualquier componente padre puede escuchar este evento y hacer lo que necesite con el dato emitido.

En resumen, `@Output` es clave para la **comunicación unidireccional** desde el componente hijo al padre en Angular, y este flujo de datos simplifica mucho la estructura de las aplicaciones.