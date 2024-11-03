---
sidebar_position: 15
---

Una vez que sabes configurar formularios en Angular, es momento de aprender cómo obtener y utilizar los valores ingresados en los controles de formulario. En esta actividad, aprenderás a mostrar el valor del campo de entrada en la plantilla y acceder a él desde la clase del componente.

<Card>

#### Mostrar el Valor del Campo de Entrada en la Plantilla

Para desplegar el valor de un campo de entrada en la plantilla, puedes usar la sintaxis de interpolación (`{{ }}`) como lo harías con cualquier otra propiedad de la clase del componente. Además, con la directiva `[(ngModel)]`, Angular enlaza el valor del campo de entrada con una propiedad de la clase, lo que permite que se actualice automáticamente.

<Card>

```typescript
@Component({
    selector: 'app-user',
  template: `
    <p>Framework favorito: {{ favoriteFramework }}</p>
    <label for="framework">
      Framework favorito:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
})
export class UserComponent {
    favoriteFramework = ''; // Se inicializa la propiedad del componente
}
```
    
</Card>

- Aquí, `favoriteFramework` está enlazada con el campo de entrada, lo que permite mostrar y actualizar su valor en tiempo real en la plantilla.
    
</Card>

<Card>

#### Recuperar el Valor de un Campo de Entrada en la Clase del Componente

Para hacer uso del valor del campo desde la clase, solo necesitas acceder a la propiedad `favoriteFramework` mediante `this`. Esto es útil para ejecutar acciones específicas con el valor del campo, como mostrarlo o enviarlo.

<Card>

```typescript
@Component({
    selector: 'app-user',
  template: `
    <button (click)="showFramework()">Mostrar Framework</button>
  `,
})
export class UserComponent {
    favoriteFramework = ''; // Inicialización de la propiedad

  showFramework() {
      alert(this.favoriteFramework); // Muestra el valor actual de favoriteFramework
  }
}
```
    
</Card>

- En este ejemplo, cuando el usuario hace clic en el botón, el método `showFramework()` muestra el valor actual de `favoriteFramework` mediante una alerta.
      
</Card>

#### Resumen

- **Mostrar el valor en la plantilla**: Usando `[(ngModel)]` y `{{ }}`, puedes reflejar y actualizar el valor del campo en tiempo real.
- **Acceder al valor en la clase**: Utilizando `this.propertyName`, puedes manipular el valor del campo directamente en la lógica del componente.

Has aprendido a manejar valores de entrada en formularios de Angular. ¡Continúa con los formularios reactivos para aprovechar aún más el manejo avanzado de formularios en Angular!