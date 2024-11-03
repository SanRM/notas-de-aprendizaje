---
sidebar_position: 4
---

### Control de Flujo en Componentes - Uso de @if en Angular

En el desarrollo de aplicaciones, es común decidir qué mostrar al usuario según ciertas condiciones. En Angular, podemos realizar estas decisiones de forma programática en las plantillas, gracias a la sintaxis de control de flujo condicional **@if**, introducida en versiones recientes de Angular.

A continuación, aprenderemos a utilizar la sintaxis de **@if** para mostrar o ocultar elementos en una plantilla de acuerdo con el valor de una propiedad en la clase del componente.

<Card>

#### Uso Básico de @if en Plantillas

Angular permite utilizar la sintaxis **@if** en las plantillas para mostrar contenido condicionalmente. En este ejemplo, crearemos un mensaje que se muestra solo si la variable `isLoggedIn` es verdadera.

<Card>

```typescript
@Component({
    selector: 'app-root',
  template: `
    @if (isLoggedIn) {
      <p>¡Bienvenido de nuevo, Amigo!</p>
    }
  `,
})
class AppComponent {
    isLoggedIn = true;
}
```
    
</Card>

En este caso, `isLoggedIn` es una propiedad booleana que controla si el mensaje de bienvenida aparece en la interfaz. Si `isLoggedIn` es `true`, el mensaje **"¡Bienvenido de nuevo, Amigo!"** se mostrará. Si `isLoggedIn` es `false`, el mensaje no aparecerá.

**Puntos importantes**:
1. La sintaxis de **@if** requiere el prefijo `@` para distinguirlo como una parte especial de la sintaxis de plantillas en Angular.
2. Si estás utilizando Angular v16 o versiones anteriores, consulta la documentación de Angular sobre `NgIf` para más detalles.

</Card>

<Card>

#### Ejemplo Completo: Mostrando el Estado del Servidor

Supongamos que queremos mostrar el estado de un servidor en nuestra aplicación. Para esto, agregaremos una propiedad `isServerRunning` y usaremos **@if** para mostrar un mensaje basado en su valor.

<Card>

1. **Definir la Propiedad**: Añadimos la propiedad `isServerRunning` en la clase del componente y la configuramos como `true`.

<Card>

   ```typescript
   class AppComponent {
       isServerRunning = true;
   }
   ```
    
</Card>
       
</Card>

<Card>

2. **Mostrar Mensajes Condicionales con @if y @else**: Utilizamos **@if** y **@else** en la plantilla para mostrar diferentes mensajes dependiendo del valor de `isServerRunning`.

<Card>

   ```typescript
   @Component({
       selector: 'app-root',
     template: `
       @if (isServerRunning) {
         <p>Sí, el servidor está funcionando.</p>
       } @else {
         <p>No, el servidor no está funcionando.</p>
       }
     `,
   })
   class AppComponent {
       isServerRunning = true;
   }
   ```
    
</Card>

En este caso:
- Si `isServerRunning` es `true`, la plantilla muestra **"Sí, el servidor está funcionando."**
- Si `isServerRunning` es `false`, se muestra **"No, el servidor no está funcionando."** gracias al bloque `@else`.
       
</Card>
    
</Card>

El uso de **@if** y **@else** en Angular facilita el control de flujo condicional en las plantillas, permitiendo mostrar diferentes elementos en la interfaz según el estado de las propiedades en la clase del componente. Esto ayuda a crear interfaces más dinámicas y adaptables, esenciales para mejorar la experiencia del usuario en aplicaciones interactivas.