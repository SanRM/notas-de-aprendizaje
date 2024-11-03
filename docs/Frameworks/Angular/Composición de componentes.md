---
sidebar_position: 3
---

En Angular, además de actualizar las plantillas, la lógica y los estilos de un componente, es esencial aprender cómo **usar un componente dentro de otro**. Esto permite estructurar la aplicación en componentes reutilizables y organizar la interfaz de usuario de forma eficiente.

Cada componente en Angular tiene una **propiedad `selector`** que define el nombre con el que puede ser referenciado en otra plantilla, similar a una etiqueta HTML personalizada. Por ejemplo, si el selector es `app-user`, podríamos usarlo en una plantilla de esta manera: `<app-user />`.

<Card>

#### Paso 1: Referenciar un Componente en Otro

Supongamos que tenemos dos componentes: `UserComponent` y `AppComponent`. Queremos que `UserComponent` se muestre dentro de `AppComponent`. Para esto, haremos dos cosas:

1. Actualizar la plantilla de `AppComponent` para incluir una referencia a `UserComponent` utilizando su selector, `app-user`.
2. Añadir `UserComponent` al array de `imports` en la configuración de `AppComponent`, permitiendo que `UserComponent` esté disponible para su uso.

El código para `AppComponent` quedaría así:

<Card>

```typescript
@Component({
    selector: 'app-root',
  template: `<app-user />`,
  imports: [UserComponent],
})
export class AppComponent {}
```
    
</Card>

De este modo, `UserComponent` se renderiza dentro de `AppComponent`. Si `UserComponent` tiene un mensaje como "Nombre de usuario: youngTech", este se mostrará al usuario.
    
</Card>

<Card>

#### Paso 2: Añadir Más Marcado HTML

En las plantillas de Angular, puedes incluir tanto componentes como cualquier otro elemento HTML. Por ejemplo, podríamos rodear `<app-user />` con una etiqueta `<section>` para organizar el contenido:

<Card>

```typescript
@Component({
    selector: 'app-root',
  template: `<section><app-user /></section>`,
  imports: [UserComponent],
})
export class AppComponent {}
```
    
</Card>

Este tipo de composición permite agregar múltiples elementos HTML y componentes para estructurar la aplicación como se desee. Incluso es posible tener varias instancias de `UserComponent` en la misma página si así lo necesita el diseño.
    
</Card>

La composición de componentes en Angular permite integrar varios elementos reutilizables dentro de una aplicación, manteniendo la estructura del código limpia y modular. Esta flexibilidad permite construir interfaces complejas y organizadas, combinando HTML con los componentes según lo requiera la aplicación. En la siguiente sección, aprenderemos cómo mostrar un componente de forma condicional, basándonos en datos.