---
sidebar_position: 7
---

### Manejo de Eventos en Angular

El manejo de eventos es una característica fundamental en el desarrollo de aplicaciones web interactivas. Permite a los desarrolladores responder a acciones del usuario, como clics en botones, envíos de formularios y más. En Angular, el manejo de eventos se realiza de manera sencilla y eficiente, facilitando la creación de experiencias de usuario dinámicas.

<Card>

#### Paso 1: Agregar un Manejador de Eventos

Para manejar eventos en Angular, se utiliza la sintaxis de paréntesis `()`. Al vincular un evento a un elemento HTML, se debe envolver el evento deseado en paréntesis y asignar un manejador de eventos. Por ejemplo, consideremos el siguiente código que vincula un evento de clic a un botón:

<Card>

```typescript
@Component({
    ...
    template: `<button (click)="greet()">Click me</button>`
})
class AppComponent {
    greet() {
        console.log('Hello, there 👋');
    }
}
``` 
</Card>

En este ejemplo, cada vez que se hace clic en el botón, se ejecutará la función `greet()`, que imprimirá "Hello, there 👋" en la consola. Es importante notar que la sintaxis de `greet()` incluye paréntesis al final, indicando que se trata de una función.

</Card>

<Card>

#### Paso 2: Agregar un Manejador para el Evento onMouseOver

Ahora, agreguemos un nuevo manejador para el evento `onMouseOver` en la clase `AppComponent`. Usaremos el siguiente código como implementación:

<Card>
```typescript 
onMouseOver() {
    this.message = 'Way to go 🚀';
}
```
    
</Card>

Este método actualizará la propiedad `message` con el texto "Way to go 🚀" cuando ocurra el evento de pasar el mouse sobre un elemento.
    
</Card>

<Card>

#### Paso 3: Vincular el Evento en la Plantilla

A continuación, actualizaremos la plantilla en `app.component.ts` para vincular el evento `mouseover` a un elemento `<section>`:

<Card>

```typescript
<section (mouseover)="onMouseOver()">
    <!-- Otros contenidos aquí -->
</section>
```
    
</Card>

Con esta línea de código, cada vez que el mouse pase sobre la sección, se ejecutará el método `onMouseOver()`, y se actualizará el mensaje en la propiedad `message`.
    
</Card>


Con unos pocos pasos en el código, has creado tu primer manejador de eventos en Angular. El manejo de eventos te permite hacer que tu aplicación responda a las acciones del usuario de manera efectiva, mejorando la interactividad y la experiencia general. ¡Sigue practicando y mejorando tus habilidades en Angular!