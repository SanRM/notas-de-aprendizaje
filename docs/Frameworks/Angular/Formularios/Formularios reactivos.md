---
sidebar_position: 16
---


Los formularios reactivos en Angular permiten manejar los formularios de forma programática en lugar de depender solo de la plantilla. Esta metodología ofrece una mayor flexibilidad y control sobre los formularios.

<Card>

#### Paso 1: Importar `ReactiveFormsModule`
Para empezar, importa el módulo `ReactiveFormsModule` de `@angular/forms` en tu componente. Esto habilita el uso de formularios reactivos en tu aplicación.

<Card>

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
  standalone: true,
  template: `
    <form>
      <label>Name
        <input type="text" />
      </label>
      <label>Email
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
```
    
</Card>
    
</Card>

<Card>

#### Paso 2: Crear `FormGroup` con `FormControl`
Angular utiliza la clase `FormControl` para representar los controles del formulario (como entradas de texto). La clase `FormGroup` permite agrupar estos controles y facilita el manejo de formularios complejos.

Define un `FormGroup` llamado `profileForm` con dos controles (`name` y `email`):

<Card>

```typescript
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

export class AppComponent {
    profileForm = new FormGroup({
        name: new FormControl(''),
    email: new FormControl(''),
  });
}
```
    
</Card>
      
</Card>

<Card>

#### Paso 3: Conectar `FormGroup` y `FormControl` al Formulario
Cada `FormGroup` se conecta al formulario mediante la directiva `[formGroup]`, mientras que cada `FormControl` se enlaza con `formControlName`, asignado al nombre correspondiente.

<Card>

```html
<form [formGroup]="profileForm">
  <label>
    Name
    <input type="text" formControlName="name" />
  </label>
  <label>
    Email
    <input type="email" formControlName="email" />
  </label>
  <button type="submit">Submit</button>
</form>
```
    
</Card>
    
</Card>

<Card>

#### Paso 4: Acceder y Mostrar los Valores del Formulario
Accede a los valores de los controles a través del `FormGroup`. En este caso, muestra el valor de los campos en el HTML:

<Card>

```html
<h2>Profile Form</h2>
<p>Name: {{ profileForm.value.name }}</p>
<p>Email: {{ profileForm.value.email }}</p>
```
    
</Card>
    
</Card>

<Card>

#### Paso 5: Manejar la Subida del Formulario
Agrega el método `handleSubmit()` en la clase del componente para gestionar el envío del formulario y acceder a los valores del `FormGroup`.

<Card>

```typescript
handleSubmit() {
    alert(
        this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
}
```
    
</Card>
        
</Card>

<Card>

#### Paso 6: Agregar `ngSubmit` al Formulario
Finalmente, usa la directiva `(ngSubmit)` para llamar al método `handleSubmit` cuando el formulario sea enviado.

<Card>

```html
<form
  [formGroup]="profileForm"
  (ngSubmit)="handleSubmit()">
</form>
```
    
</Card>
    
</Card>

¡Y eso es todo! Ahora sabes cómo manejar formularios reactivos en Angular, que te da control total sobre los datos, eventos y validaciones en tus formularios.