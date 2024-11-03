---
sidebar_position: 18
---

La **inyección de dependencias (DI)** en Angular es una de las características más potentes del framework. Este concepto permite a Angular suministrar recursos (dependencias) que la aplicación necesita en tiempo de ejecución. Una dependencia puede ser un servicio, una API u otros recursos que ayudan a manejar y compartir lógica en diferentes partes de la aplicación.

En este ejemplo, aprenderemos cómo crear un servicio inyectable que pueda ser usado en toda la aplicación cuando se necesite.

<Card>

### Paso 1: ¿Qué es un Servicio Inyectable?

Un servicio en Angular es una clase que contiene lógica reutilizable y que se puede usar en distintos lugares de la aplicación. Por ejemplo, un servicio puede encargarse de interactuar con una API o de gestionar datos. Al centralizar esta lógica en un servicio, podemos acceder a ella desde diferentes componentes, lo cual mejora la organización del código y evita duplicación.

Para que Angular pueda "inyectar" un servicio en otras partes de la aplicación, usamos el decorador **`@Injectable`**.

</Card>

<Card>

### Paso 2: Usar el Decorador `@Injectable`

Para hacer que un servicio esté disponible en el sistema de DI de Angular, añadimos el decorador `@Injectable` en la parte superior de la clase. Aquí se define la configuración de disponibilidad de este servicio:

<Card>

```typescript
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'  // Hace que el servicio esté disponible en toda la aplicación
})
export class UserService {
    // Métodos para manejar datos, interactuar con APIs, etc.
}
```

<Card>

#### Explicación del Código

- **`@Injectable`**: Este decorador indica a Angular que la clase `UserService` puede ser inyectada como una dependencia.
- **`providedIn: 'root'`**: Esta configuración permite que el servicio esté disponible en toda la aplicación. Al configurarlo con `'root'`, Angular hace que el servicio sea un **singleton**, es decir, que exista solo una instancia de `UserService` para toda la aplicación. Esto es útil cuando queremos mantener datos compartidos entre múltiples componentes.
    
</Card>
    
</Card>
    
</Card>
    
<Card>

### Paso 3: Aplicarlo a un Servicio Propio

Ahora, practiquemos creando un servicio en un archivo llamado `car.service.ts`:

<Card>

```typescript
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    // Aquí irían los métodos y lógica del servicio
}
```
    
</Card>

Ahora, el servicio `CarService` está configurado para ser inyectable en cualquier parte de la aplicación.
    
</Card>

Hemos aprendido cómo crear un servicio inyectable en Angular utilizando el decorador `@Injectable`. Este decorador permite que el servicio participe en el sistema de DI de Angular, haciéndolo accesible en cualquier lugar de la aplicación. Esto facilita el desarrollo de aplicaciones modulares y escalables, ya que se pueden compartir datos y lógica de manera eficiente.