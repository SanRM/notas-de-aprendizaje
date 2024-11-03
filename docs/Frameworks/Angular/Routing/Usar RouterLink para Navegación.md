---
sidebar_position: 13
---

Actualmente, cuando haces clic en un enlace interno de tu aplicación, toda la página se recarga. Aunque esto no parece un problema en aplicaciones pequeñas, en aplicaciones más grandes afecta el rendimiento, ya que obliga al usuario a recargar todos los recursos y volver a ejecutar cálculos.

Aquí aprenderás a usar la directiva `RouterLink` para hacer la navegación más eficiente aprovechando al máximo el Angular Router.

<Card>

#### Paso 1: Importar la Directiva `RouterLink`
Para empezar, debemos importar la directiva `RouterLink` en el archivo `app.component.ts`. Esto permite que Angular gestione los cambios de ruta sin recargar la página. También necesitamos incluir `RouterLink` en el array `imports` del decorador del componente para que Angular lo reconozca.

<Card>

```typescript
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
  imports: [RouterLink, RouterOutlet],
  ...
})
export class AppComponent {}
```

</Card>
    
</Card>

<Card>

#### Paso 2: Usar `routerLink` en la Plantilla
Con `RouterLink` importado, puedes cambiar los atributos `href` de los enlaces internos de la plantilla a `routerLink`. Esto habilita la navegación interna sin recargar toda la página.

Ejemplo de la plantilla actualizada:

<Card>

```typescript
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    ...
  standalone: true,
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {}
```
    
</Card>
    
</Card>

Al hacer clic en los enlaces ahora, la navegación será fluida, y solo el contenido dentro de `<router-outlet>` cambiará. Esto mejora notablemente el rendimiento en aplicaciones más complejas y evita parpadeos en la pantalla.
