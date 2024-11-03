---
sidebar_position: 10
---

A menudo, en el desarrollo de aplicaciones, tenemos muchos componentes que necesitamos cargar en la app, pero no todos deben cargarse inmediatamente. Por ejemplo, algunos componentes pueden estar fuera del área visible (abajo en la página) o ser más pesados, y no se interactúa con ellos hasta más tarde. En estos casos, es útil **diferir** la carga de esos componentes hasta que realmente se necesiten, y para eso están las **vistas diferibles** en Angular.

<Card>

### Objetivo de las Vistas Diferibles
Las vistas diferibles permiten posponer la carga de una sección del componente hasta que el navegador esté inactivo o el contenido entre en la vista del usuario (viewport). Esto mejora el rendimiento al evitar cargar contenido innecesario de inmediato, haciendo que la app sea más rápida y receptiva.
    
</Card>

<Card>

### Ejemplo: Diferir la Carga de un Componente de Comentarios

Imaginemos que tenemos una página de blog en nuestra app con una sección de comentarios que aparece después del contenido del post. Vamos a diferir la carga de estos comentarios para optimizar la carga de la página.

<Card>

#### Paso 1: Añadir un Bloque `@defer` alrededor del Componente de Comentarios

Podemos envolver el componente de comentarios en un bloque `@defer` para diferir su carga. Por defecto, `@defer` cargará el componente cuando el navegador esté inactivo.

```html
@defer {
  <comments />
}
```
    
</Card>

<Card>

#### Paso 2: Añadir un `@placeholder`

Para mejorar la experiencia del usuario, podemos añadir un bloque `@placeholder`, que mostrará un mensaje mientras el componente de comentarios se carga. El contenido del `@placeholder` se carga inmediatamente y proporciona un aviso de que los comentarios estarán disponibles en breve.

```html
@defer {
  <comments />
} @placeholder {
  <p>Comentarios futuros</p>
}
```
    
</Card>

<Card>

#### Paso 3: Añadir un Bloque `@loading`

El bloque `@loading` muestra un mensaje temporal mientras se carga el contenido diferido. Este bloque se renderiza cuando el contenido está siendo cargado activamente pero aún no se ha completado la carga.

```html
@defer {
  <comments />
} @placeholder {
  <p>Comentarios futuros</p>
} @loading {
  <p>Cargando comentarios...</p>
}
```
    
</Card>

<Card>

#### Paso 4: Añadir una Duración Mínima al Bloque `@loading`

Para evitar parpadeos si la carga es rápida, podemos especificar una duración mínima. Esto asegura que el mensaje "Cargando comentarios..." se muestre al menos durante 2 segundos, aunque el componente se cargue más rápido.

```html
@defer {
  <comments />
} @placeholder {
  <p>Comentarios futuros</p>
} @loading (minimum 2s) {
  <p>Cargando comentarios...</p>
}
```
    
</Card>

<Card>

#### Paso 5: Activar Carga Diferida por Desplazamiento en el Viewport

Podemos añadir un disparador `viewport` para cargar el contenido solo cuando entra en el área visible del usuario. Esto es útil para contenido que está lo suficientemente abajo en la página, y que el usuario verá solo cuando se desplace hasta esa sección.

```html
@defer (on viewport) {
  <comments />
}
```
    
</Card>
    
</Card>

<Card>

### Ejemplo Completo de Uso

Supongamos que tenemos un artículo largo y que el componente de comentarios está al final del artículo. Al incluir el código completo, el contenido se verá así:

```html
<article>
  <p>Angular es mi framework favorito, y aquí está el porqué. Angular tiene la funcionalidad de vistas diferibles, lo que facilita cargar contenido de forma diferida.</p>
  ...
  <!-- Contenido adicional -->
</article>

@defer (on viewport) {
  <comments />
} @placeholder {
  <p>Comentarios futuros</p>
} @loading (minimum 2s) {
  <p>Cargando comentarios...</p>
}
```
    
</Card>

Las vistas diferibles en Angular son una herramienta poderosa para optimizar el rendimiento, proporcionando flexibilidad para decidir cuándo y cómo se carga un componente. Esta técnica mejora la experiencia de usuario y optimiza la carga de contenido, especialmente en aplicaciones con mucha interacción y contenido pesado.