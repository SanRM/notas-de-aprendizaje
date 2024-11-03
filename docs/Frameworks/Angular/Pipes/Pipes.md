---
sidebar_position: 22
---


Los **Pipes** en Angular son funciones que transforman datos en las plantillas de una manera rápida y sencilla. Estos pipes son "funciones puras", lo que significa que no generan efectos secundarios, sino que toman un valor de entrada, lo transforman y devuelven un resultado. Angular incluye varios pipes integrados que podemos importar y utilizar, y también permite crear pipes personalizados según nuestras necesidades.


<Card>

<Card>

### **Ejemplo**: Transformación de Datos con Pipes Integrados

Supongamos que queremos mostrar un mensaje en mayúsculas. Para esto, usaremos el pipe `uppercase`, que convierte el texto a mayúsculas.
    
</Card>

<Card>

#### Paso 1: Importar el Pipe en el Componente

Primero, importemos `UpperCasePipe` desde `@angular/common`:

```typescript
import { UpperCasePipe } from '@angular/common';
```
    
</Card>

<Card>

#### Paso 2: Agregar el Pipe en la Configuración del Componente

Luego, debemos declarar el pipe en la propiedad `imports` del decorador `@Component()` para que esté disponible en la plantilla del componente:

```typescript
@Component({
    ...
    template: `{{ loudMessage | uppercase }}`,
    imports: [UpperCasePipe],
})
class AppComponent {
    loudMessage = 'we think you are doing great!';
}
```

En este ejemplo, `{{ loudMessage | uppercase }}` aplica el pipe `uppercase` a la propiedad `loudMessage`, transformando el texto a mayúsculas, y el resultado en la plantilla sería: **"WE THINK YOU ARE DOING GREAT!"**.
    
</Card>

</Card>


<Card>

### **Tu Turno**: Usando el Pipe `lowercase`

Intentemos transformar un texto a minúsculas usando el pipe `lowercase`:

<Card>

#### Paso 1: Importar el Pipe `LowerCasePipe`

Para esto, importemos `LowerCasePipe` desde `@angular/common`:

<Card>

```typescript
import { LowerCasePipe } from '@angular/common';
```
    
</Card>
    
</Card>

<Card>

#### Paso 2: Agregar el Pipe a la Configuración del Componente

Añadimos el pipe en la configuración del decorador `@Component()` para habilitarlo en la plantilla:

<Card>

```typescript
@Component({
    ...
    imports: [LowerCasePipe]
})
```
    
</Card>
    
</Card>

<Card>

#### Paso 3: Usar el Pipe en la Plantilla

Finalmente, actualicemos la plantilla para aplicar el pipe `lowercase` en la propiedad `username`:

<Card>

```typescript
@Component({
    ...
    template: `{{ username | lowercase }}`
})
class AppComponent {
    username = 'ANGULAR DEV';
}
```
    
</Card>

Aquí, `{{ username | lowercase }}` convierte el valor de `username` a minúsculas, y el resultado en la plantilla será: **"angular dev"**.
    
</Card>
    


</Card>


Los pipes son herramientas versátiles que permiten manipular datos directamente en la plantilla de manera sencilla. Además de los pipes integrados como `uppercase` y `lowercase`, Angular permite configurar parámetros en algunos pipes y crear pipes personalizados para transformar datos de acuerdo con necesidades específicas.