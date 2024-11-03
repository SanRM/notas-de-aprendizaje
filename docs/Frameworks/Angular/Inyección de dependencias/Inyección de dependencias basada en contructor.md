---
sidebar_position: 20
---

### Inyección de Dependencias Basada en el Constructor en Angular

En Angular, existen dos patrones comunes para inyectar dependencias: el uso de la función `inject()` y la inyección basada en el constructor.

En este ejemplo, vamos a enfocarnos en la **Inyección de Dependencias basada en el Constructor**.

<Card>

### ¿Qué es la Inyección Basada en el Constructor?

La inyección basada en el constructor consiste en declarar los recursos o servicios que necesitamos como parámetros en el constructor de una clase de componente. Angular se encarga de inyectar automáticamente estos recursos cuando el componente se crea, permitiendo que el servicio esté disponible como una propiedad de la clase.
    
</Card>

<Card>

#### Ejemplo de Inyección en el Constructor

Supongamos que queremos inyectar un servicio llamado `PetCareService` en nuestro componente `PetCarDashboardComponent`. Este es el código que utilizaríamos:

<Card>

```typescript
@Component({...})
class PetCarDashboardComponent {
    constructor(private petCareService: PetCareService) {
        // Ahora, petCareService está disponible en toda la clase.
    }
}
```
        
</Card>

<Card>

### Puntos Clave en la Inyección Basada en el Constructor

1. **Uso de `private`**: Declaramos el servicio con el modificador `private` para que se convierta en una propiedad accesible de la clase.
2. **Creación Automática de Propiedades**: Al inyectar el servicio, Angular lo asigna automáticamente como una propiedad de la clase. Esto permite usarlo sin necesidad de declararlo fuera del constructor.
3. **Clase de Servicio Inyectado**: Aquí `PetCareService` es el recurso o clase que estamos inyectando. Angular debe estar configurado para "proveer" este servicio, lo que generalmente se hace en el módulo principal o en la configuración de proveedores del servicio.
    
</Card>
    
</Card>

<Card>

### Ejercicio Práctico: Inyectar un Servicio en el Constructor de un Componente

Ahora, actualicemos el código del constructor en un componente llamado `AppComponent` para usar la inyección de dependencias basada en el constructor. En este caso, inyectaremos un servicio llamado `CarService` y lo usaremos para obtener una lista de autos.

<Card>

```typescript
@Component({...})
class AppComponent {
    display: string;

    constructor(private carService: CarService) {
        this.display = this.carService.getCars().join(' ⭐️ ');
    }
}
```
        
</Card>

#### Explicación:

- **Declaración del Servicio**: Al usar `private carService: CarService` en el constructor, `carService` se convierte en una propiedad de `AppComponent`.
- **Uso del Servicio**: `carService.getCars()` obtiene una lista de autos, que luego se convierte en un string separado por `⭐️` y se asigna a `display`.
- **Disponibilidad de la Propiedad `display`**: Ahora, `display` está listo para mostrarse en la plantilla del componente, proporcionando una vista dinámica basada en los datos del servicio.
        
</Card>

La inyección de dependencias basada en el constructor es un patrón común en Angular, y funciona de manera similar al uso de `inject()`, pero es especialmente útil para servicios de uso constante en la clase. Este enfoque promueve la modularidad, hace el código más fácil de probar y mantiene la lógica del componente limpia. 

Para profundizar más sobre este tema, puedes consultar la [documentación de Angular sobre inyección de dependencias](https://angular.io/guide/dependency-injection).