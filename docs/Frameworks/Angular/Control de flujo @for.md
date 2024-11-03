---
sidebar_position: 5
---

### Control de Flujo en Componentes: Uso de `@for` en Angular

Cuando construimos aplicaciones web, a menudo necesitamos repetir bloques de código un número específico de veces. Por ejemplo, si tenemos un arreglo de nombres, puede que queramos mostrar cada nombre dentro de un elemento `<p>`. Para facilitar esta tarea, Angular proporciona una sintaxis especial llamada `@for`, que permite iterar sobre elementos en una plantilla.

<Card>

#### Ejemplo de Uso de `@for`

Para ilustrar cómo usar la sintaxis `@for`, veamos un ejemplo simple donde iteramos sobre una lista de sistemas operativos.

<Card>

```typescript
@Component({
    ...
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
})
export class AppComponent {
    operatingSystems = [
        { id: 'win', name: 'Windows' },
        { id: 'osx', name: 'MacOS' },
        { id: 'linux', name: 'Linux' }
    ];
}
```
    
</Card>

En este caso:

- La variable `os` representa cada elemento del arreglo `operatingSystems`.
- Usamos `track os.id` para seguir el identificador único de cada sistema operativo, lo que ayuda a Angular a optimizar la representación de la lista y a manejar los cambios de manera más eficiente.
- La interpolación `{{ os.name }}` muestra el nombre de cada sistema operativo en la interfaz de usuario.

Es importante notar que el símbolo `@` delante de `for` indica que estamos utilizando una sintaxis especial de Angular para plantillas.
    
</Card>

<Card>

#### Agregar la Propiedad `users`

Ahora, añadamos una nueva propiedad llamada `users` a la clase `AppComponent`, que contendrá un arreglo de usuarios y sus nombres:

<Card>

```typescript
export class AppComponent {
    users = [
        { id: 0, name: 'Sarah' },
        { id: 1, name: 'Amy' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Jessica' },
        { id: 4, name: 'Poornima' }
    ];
}
```
    
</Card>
    
</Card>

<Card>

#### Actualizar la Plantilla para Mostrar los Nombres de los Usuarios

Luego, actualizaremos la plantilla para mostrar el nombre de cada usuario dentro de un elemento `<p>` utilizando la sintaxis `@for`:

<Card>

```typescript
template: `
  @for (user of users; track user.id) {
    <p>{{ user.name }}</p>
  }
`
```
    
</Card>

En esta parte de la plantilla:

- `user` es la variable que representa cada objeto de usuario en el arreglo `users`.
- Usamos `track user.id` para identificar de manera única a cada usuario, lo que es esencial para mantener la eficiencia en la actualización de la vista.
- La interpolación `{{ user.name }}` se utiliza para mostrar el nombre de cada usuario.

    
</Card>

El uso de `@for` en Angular nos permite implementar **control de flujo** en nuestras plantillas de manera sencilla y eficiente. Al iterar sobre arreglos de datos, podemos generar dinámicamente contenido en la interfaz de usuario, haciendo que nuestras aplicaciones sean más interactivas y fáciles de mantener. Este tipo de funcionalidad es fundamental para construir aplicaciones web modernas y reactivas. ¡Sigue así, lo estás haciendo muy bien! 🎉