---
sidebar_position: 12
---

Una vez que has configurado tu aplicación para usar el Angular Router, el siguiente paso es definir las rutas para cada página. En esta actividad, aprenderás a configurar rutas específicas dentro de tu aplicación.

<Card>

#### Paso 1: Definir una Ruta en `app.routes.ts`
Imagina que tu aplicación tiene dos páginas: una página principal (*Home Page*) y una página de usuario (*User Page*). Para mostrar cada una, debes definir rutas en el archivo `app.routes.ts`. Cada ruta tiene dos propiedades esenciales:

1. **path**: Especifica la URL de la ruta (como `'user'` para `/user`).
2. **component**: El componente que se debe cargar cuando se accede a esa ruta.

Ejemplo básico:

<Card>

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '', // Ruta raíz o principal ("/")
    component: HomeComponent,
  },
  {
      path: 'user', // Ruta para la página de usuario ("/user")
    component: UserComponent,
  },
];
```
  
</Card>
    
</Card>

<Card>

#### Paso 2: Agregar Títulos a las Rutas
Además de configurar los caminos y componentes, el Angular Router permite agregar títulos a las rutas para mejorar la experiencia del usuario. Esto se logra añadiendo la propiedad `title` a cada ruta en el mismo objeto.

Ejemplo con títulos:

<Card>

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',
    title: 'App Home Page', // Título para la página principal
    component: HomeComponent,
  },
  {
      path: 'user',
    title: 'User Page', // Título para la página de usuario
    component: UserComponent,
  },
];
```
      
  </Card>
      
</Card>

Al definir rutas en Angular:
- **`path`** establece la URL de la ruta.
- **`component`** especifica qué componente se debe mostrar en cada ruta.
- **`title`** establece el título que se mostrará en la barra del navegador para cada ruta.

Con esta configuración, tu aplicación ya tiene rutas definidas y títulos de página. 