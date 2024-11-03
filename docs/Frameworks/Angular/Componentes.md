---
sidebar_position: 1
---


Los **componentes** son los bloques de construcción fundamentales de cualquier aplicación en Angular. Cada componente cumple un rol específico en la aplicación y organiza su contenido de forma independiente. Estos componentes se estructuran en tres partes principales:

1. **Clase en TypeScript**: Define la lógica y el comportamiento del componente.
2. **Plantilla HTML**: Describe el contenido visual que se muestra al usuario.
3. **Estilos CSS**: Añaden el diseño y las características visuales al componente.

<Card>

### ¿Para Qué Sirven los Componentes?
Los componentes permiten dividir la aplicación en secciones reutilizables y autónomas, lo cual facilita el desarrollo y el mantenimiento de aplicaciones más grandes y complejas. Además, cada componente puede tener su propio diseño, funcionalidad y estructura, permitiendo modularizar la interfaz y mejorar la experiencia del usuario.
    
</Card>

<Card>

### Ejemplo de Configuración y Personalización de un Componente

Vamos a ver cómo modificar la plantilla y los estilos de un componente en Angular para personalizar su apariencia y mensaje. 

<Card>

#### Paso 1: Actualizar la Plantilla del Componente

Primero, podemos cambiar el contenido de la plantilla HTML para que el mensaje diga "Hello Universe". La propiedad `template` se utiliza dentro de la configuración del componente para definir su HTML directamente.

```typescript
template: `
  Hello Universe
`,
```

Al cambiar esta propiedad, el contenido del componente se actualiza con el nuevo mensaje, que se mostrará cada vez que el componente sea renderizado en la aplicación.
    
</Card>

<Card>

#### Paso 2: Cambiar los Estilos del Componente

Después, podemos actualizar el color del texto para que sea más personalizado. Usamos la propiedad `styles` para definir estilos CSS específicos para este componente. Al aplicar el selector `:host`, nos aseguramos de que el estilo solo afecte al elemento raíz del componente.

En este caso, cambiamos el color a `#a144eb` (un tono púrpura), que se verá en el mensaje:

```typescript
styles: `
  :host {
    color: #a144eb;
  }
`,
```

Cuando verificamos la vista previa del componente, observamos que el texto ahora aparece en el nuevo color.
    
</Card>
    
</Card>

<Card>

### Nota Adicional

Angular permite almacenar el HTML y los estilos en archivos separados, lo cual es útil en proyectos más grandes. Para eso, basta con definir el archivo de plantilla (`templateUrl`) y el archivo de estilos (`styleUrls`) en lugar de propiedades en línea. Esto facilita el mantenimiento y mejora la organización del código.
    
</Card>