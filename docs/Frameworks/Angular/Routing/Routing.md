---
sidebar_position: 11
---

En la mayoría de las aplicaciones, llega un punto en que se necesita navegar entre varias páginas o secciones. En Angular, el **Router** permite gestionar esta navegación y ofrece una forma sencilla de configurar y mostrar diferentes vistas en función de la URL actual. Este proceso, llamado **routing**, mejora la experiencia de usuario al cargar solo las vistas necesarias y facilita una navegación fluida.

En este ejemplo, configuraremos el Router de Angular paso a paso para habilitar la navegación entre vistas en nuestra aplicación.

<Card>

#### Paso 1: Crear un Archivo de Rutas (`app.routes.ts`)

Primero, crearemos un archivo llamado `app.routes.ts` en el que configuraremos las rutas de la aplicación. Este archivo mantendrá un array de objetos de rutas, llamado `routes`, que define cómo se debe redirigir o cargar cada URL.

<Card>

```typescript
import { Routes } from '@angular/router';
export const routes: Routes = [];
```
    
</Card>

En este archivo, `routes` es un array vacío por ahora, pero aquí se agregarán las rutas de la aplicación.
    
</Card>

<Card>

#### Paso 2: Configurar el Proveedor de Rutas

Ahora, en el archivo `app.config.ts`, configuraremos el proveedor del Router para Angular. Esto le indica a Angular que usaremos las rutas definidas en `app.routes.ts` para la navegación.

<Card>

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
};
```
    
</Card>

En este código, `provideRouter(routes)` conecta el Router de Angular con las rutas especificadas en `app.routes.ts`. Esto configura el Router en toda la aplicación, permitiendo manejar la navegación.
    
</Card>

<Card>

#### Paso 3: Usar `RouterOutlet` en el Componente Principal

Para indicar en qué parte de la vista se deben mostrar las rutas cargadas, usaremos `RouterOutlet`, una directiva de Angular que actúa como un marcador de posición para el contenido en función de la ruta actual.

Actualicemos la plantilla de `AppComponent` para que incluya `RouterOutlet` y algunos enlaces de navegación:

<Card>

```typescript
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
  template: `
    <nav>
      <a href="/">Inicio</a> |
      <a href="/user">Usuario</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
```
    
</Card>

Aquí, `<router-outlet></router-outlet>` se colocará en el lugar donde queremos que se muestren las vistas de las rutas. Los enlaces `<a href="/">Inicio</a>` y `<a href="/user">Usuario</a>` permiten navegar entre las páginas definidas en `app.routes.ts`.
    
</Card>

Ahora tu aplicación está configurada para usar el Router de Angular. La navegación entre páginas es sencilla y eficaz gracias a `RouterOutlet`, que muestra el contenido correspondiente a la URL actual.