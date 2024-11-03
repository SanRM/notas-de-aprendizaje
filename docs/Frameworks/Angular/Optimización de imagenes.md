---
sidebar_position: 11
---

Las imágenes son una parte esencial en muchas aplicaciones, pero si no están optimizadas, pueden afectar negativamente el rendimiento y reducir las puntuaciones en métricas como **Core Web Vitals**. Angular simplifica la optimización de imágenes con la directiva `NgOptimizedImage`, que facilita una carga eficiente y de alta calidad.

<Card>

### ¿Qué es `NgOptimizedImage`?
`NgOptimizedImage` es una directiva que ayuda a cargar imágenes de forma óptima, minimizando los tiempos de carga y asegurando una mejor experiencia de usuario. Angular ajusta automáticamente las imágenes a las mejores prácticas, lo que ayuda a evitar problemas de rendimiento, como cargas lentas o saltos en el diseño de la página.
    
</Card>

<Card>

### Cómo Implementar `NgOptimizedImage` en Angular

<Card>

#### Paso 1: Importar la Directiva `NgOptimizedImage`

Para empezar, importa la directiva `NgOptimizedImage` desde la biblioteca `@angular/common` y añádela en los imports del componente donde la necesites.

```typescript
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  ...
})
export class YourComponent {}
```
    
</Card>

<Card>

#### Paso 2: Cambiar `src` a `ngSrc`

Para habilitar la directiva, cambia el atributo `src` por `ngSrc` en tus imágenes. Esto se aplica tanto a las imágenes estáticas (`src="/assets/logo.svg"`) como a las dinámicas (`[src]="imageURL"`).

```typescript
@Component({
  standalone: true,
  template: `
    <li>
      Imagen Estática:
      <img ngSrc="/assets/logo.svg" alt="Logo de Angular" width="32" height="32" />
    </li>
    <li>
      Imagen Dinámica:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
    </li>
  `,
  imports: [NgOptimizedImage],
})
export class YourComponent {}
```
    
</Card>

<Card>

#### Paso 3: Especificar Atributos de Ancho y Altura

Para evitar saltos de diseño, cada imagen debe incluir atributos `width` y `height`, que ayudan a Angular a reservar espacio para las imágenes mientras se cargan. Esto asegura que el diseño de la página no cambie al cargarse las imágenes.

En casos donde no sea posible definir `width` y `height` estáticos, utiliza el atributo `fill`, que permite que la imagen ocupe el tamaño completo de su contenedor.

```html
<div class="image-container" style="position: relative;">
    <img ngSrc="www.example.com/image.png" fill />
</div>
```

**Nota:** El contenedor debe tener un estilo con `position: relative`, `absolute`, o `fixed` para que `fill` funcione correctamente.

    
</Card>
    
</Card>

<Card>

### Otras Optimizaciónes para la Carga de Imágenes

#### Priorizar Imágenes Importantes

Para optimizar la carga inicial, es importante dar prioridad a cualquier imagen que pueda ser el **LCP** (*Largest Contentful Paint* o el elemento gráfico más grande en pantalla). Usa el atributo `priority` en la imagen principal para mejorar la velocidad de carga.

```html
<img ngSrc="www.example.com/image.png" height="600" width="800" priority />
```

#### Cargadores de Imágenes

`NgOptimizedImage` permite especificar un cargador de imágenes, que configura cómo se formatean las URLs. Esto es útil cuando se usan URLs relativas o de un **CDN**.

```typescript
providers: [
  provideImgixLoader('https://mi.base.url/'),
]
```

Al usar un cargador, una imagen con `ngSrc="imagen.png"` tendrá la URL final `https://mi.base.url/imagen.png`.

    
</Card>

Con `NgOptimizedImage`, Angular gestiona la carga de imágenes de forma eficiente para mejorar el rendimiento de la app. Esta directiva permite optimizar el tiempo de carga y asegurar una experiencia más fluida para los usuarios.
