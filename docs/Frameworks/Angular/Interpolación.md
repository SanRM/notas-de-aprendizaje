---
sidebar_position: 2
---

### Uso de Interpolación en Angular para Actualizar la Clase de un Componente

En Angular, la lógica y el comportamiento de un componente se definen en su clase TypeScript. Estas clases permiten crear propiedades y métodos que pueden ser utilizados dentro de la plantilla del componente para mostrar datos y manipular la vista.

En este ejemplo, aprenderemos cómo agregar una propiedad a la clase del componente y cómo mostrar su valor en la plantilla utilizando **Interpolación**, una técnica clave en Angular para insertar datos dinámicos en el HTML.

<Card>

#### Paso 1: Agregar una Propiedad a la Clase del Componente

Primero, agreguemos una propiedad llamada `city` a la clase del componente `AppComponent`:

```typescript
export class AppComponent {
    city = 'San Francisco';
}
```

En este caso, hemos añadido la propiedad `city` con el valor `"San Francisco"`. En TypeScript, el tipo de dato (`string`) puede omitirse debido a la **inferencia de tipos**, que permite que TypeScript determine el tipo en función del valor inicial. Esto hace que el código sea más legible y conciso. Ahora, la propiedad `city` está lista para ser usada en la plantilla.
    
</Card>

<Card>

#### Paso 2: Mostrar el Valor de la Propiedad en la Plantilla Usando Interpolación

En Angular, la **interpolación** nos permite insertar el valor de una propiedad de la clase del componente directamente en el HTML. Para hacer esto, usamos la sintaxis `{{ }}`, dentro de la cual colocamos la propiedad o expresión que queremos mostrar.

Actualicemos la plantilla para incluir `{{ city }}`:

```typescript
@Component({
    selector: 'app-root',
  template: `Hello {{ city }}`,
})
```

Aquí, `{{ city }}` hace que Angular evalúe y muestre el valor de `city` dentro de la plantilla. Esto generará el texto **"Hello San Francisco"** en la interfaz.
    
</Card>

<Card>

#### Paso 3: Evaluación de Expresiones con Interpolación

La interpolación también permite evaluar expresiones. Por ejemplo, agreguemos la expresión `{{ 1 + 1 }}` a la plantilla junto a `{{ city }}`:

```typescript
@Component({
    selector: 'app-root',
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
})
```

En este caso, Angular evalúa `{{ 1 + 1 }}` y muestra el resultado junto a `city`, resultando en: **"Hello San Francisco, 2"**.

</Card>

La interpolación es una herramienta esencial en Angular para mostrar datos dinámicos en la vista. Permite vincular valores de la clase del componente y evaluar expresiones directamente en el HTML, facilitando la creación de interfaces de usuario interactivas y personalizadas.