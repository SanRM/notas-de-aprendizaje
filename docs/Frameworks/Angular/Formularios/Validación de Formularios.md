---
sidebar_position: 17
---

Cuando trabajas con formularios en Angular, es muy común validar las entradas de los usuarios para asegurar que los datos enviados sean correctos y completos. En esta actividad, aprenderás cómo validar formularios usando formularios reactivos.

<Card>

#### Paso 1: Importar `Validators`
Angular ofrece un conjunto de herramientas de validación listas para usar. Para acceder a estas, debes importar `Validators` desde `@angular/forms` en tu componente.

<Card>

```typescript
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({...})
export class AppComponent {}
```
    
</Card>
    
</Card>

<Card>

#### Paso 2: Agregar Validación al Formulario
Cada campo `FormControl` de un formulario puede recibir validadores que especifican reglas de validación. Por ejemplo:

- Para el campo `name` en `profileForm`, queremos que sea obligatorio, así que usaremos `Validators.required`.
- Para el campo `email`, queremos que no esté vacío y que tenga un formato de dirección de correo válida. Esto se logra combinando `Validators.required` y `Validators.email` en un array.

Ejemplo de configuración del formulario:

<Card>

```typescript
profileForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});
```
    
</Card>
    
</Card>

<Card>
    

#### Paso 3: Verificar la Validación del Formulario en el Template
Para verificar si el formulario es válido, puedes usar la propiedad `valid` de `FormGroup`. Con esta propiedad, se puede desactivar el botón de envío mientras los campos no cumplan con los requisitos de validación.

Ejemplo de botón de envío:

<Card>

```html
<button type="submit" [disabled]="!profileForm.valid">Enviar</button>
```
    
</Card>

</Card>

- Importa y configura `Validators` en los campos del formulario.
- Utiliza validadores como `Validators.required` para hacer campos obligatorios o `Validators.email` para formatos específicos.
- Aprovecha la propiedad `valid` para controlar la disponibilidad del botón de envío.

Esta es la base para trabajar con validación de formularios en Angular. 