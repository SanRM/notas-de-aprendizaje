---
sidebar_position: 14
---

Los formularios son esenciales en muchas aplicaciones, ya que permiten capturar y gestionar la entrada del usuario. En Angular, existen dos tipos principales de formularios: **formularios basados en plantillas** (template-driven) y **formularios reactivos** (reactive forms). Aquí exploraremos cómo configurar un formulario utilizando el enfoque de **formulario basado en plantillas**.

<Card>

#### Paso 1: Crear un Campo de Entrada

Comienza añadiendo un campo de entrada de texto en el archivo `user.component.ts`. Este campo permitirá que el usuario ingrese su marco de trabajo favorito.

<Card>

```html
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" />
</label>
```
    
</Card>
    
</Card>

<Card>

#### Paso 2: Importar `FormsModule`

Para activar la funcionalidad de Angular que permite la vinculación de datos en formularios, es necesario importar `FormsModule` desde `@angular/forms` y agregarlo a los imports del componente `UserComponent`.

<Card>

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    ...
  standalone: true,
  imports: [FormsModule],
})
export class UserComponent {}
```
    
</Card>
    
</Card>

<Card>

#### Paso 3: Añadir la Vinculación de Datos con `ngModel`

El módulo `FormsModule` incluye la directiva `ngModel`, que permite vincular el valor de entrada del formulario a una propiedad en la clase del componente. En este caso, vamos a utilizar la propiedad `favoriteFramework` para capturar el valor ingresado por el usuario.

Actualiza el campo de entrada para que use `[(ngModel)]`, que proporciona una vinculación bidireccional entre el valor del campo y la propiedad.

<Card>

```html
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
</label>
```
    
</Card>

<Card color='yellow'>

#### Nota sobre `[(ngModel)]`
La sintaxis `[()]`, apodada "banana in a box" 🍌📦, representa una **vinculación bidireccional** en Angular, que combina vinculación de propiedad y vinculación de eventos. Al usar `[(ngModel)]`, el valor de entrada se actualiza automáticamente en la propiedad de la clase del componente y viceversa.
    
</Card>
    
</Card>

#### Resumen

1. **Crear el campo de entrada** en la plantilla HTML.
2. **Importar `FormsModule`** en el componente para habilitar la funcionalidad de formulario.
3. **Utilizar `[(ngModel)]`** para la vinculación bidireccional del valor de entrada.

Con esta configuración, el formulario está listo para capturar y sincronizar la entrada del usuario en tiempo real con el componente en Angular.