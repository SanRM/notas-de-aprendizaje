---
sidebar_position: 19
---

En Angular, la **Inyección de Dependencias (DI)** es una técnica que permite a los componentes y servicios compartir datos y funcionalidades sin necesidad de instanciarlos manualmente. Esto se logra creando servicios que luego se pueden "inyectar" en otros componentes, lo cual fomenta el **desacoplamiento** del código y facilita su mantenimiento y escalabilidad.

<Card>

### Creación de un Servicio Inyectable

El primer paso en el sistema de DI de Angular es crear un servicio inyectable. Este servicio se define como una clase que puede proporcionar datos o funcionalidades a otros componentes. Una vez creado, el servicio se puede inyectar en componentes que lo necesiten.
    
</Card>

<Card>

### Inyección de un Servicio en un Componente

Para ilustrar el proceso de inyección de dependencias, usaremos un ejemplo práctico donde se inyecta un servicio en un componente usando la función `inject()`. La función `inject()` se utiliza para obtener una instancia de un servicio en un contexto específico (como un componente).

> Nota: Este ejemplo asume que el servicio `CarService` ya está creado y configurado en Angular.
    
</Card>

<Card>

### Paso 1: Inyectar el Servicio `CarService` en el Componente

Primero, inyectemos el servicio `CarService` en el componente `AppComponent`. Usaremos la función `inject()` y asignaremos el servicio a una propiedad de clase para poder usarlo en la lógica del componente.

<Card>

```typescript
import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
    selector: 'app-root',
  template: `<p>Car Listing: {{ display }}</p>`,
})
export class AppComponent {
    // Inyecta el servicio CarService y lo asigna a la propiedad carService
  carService = inject(CarService);

  display: string;

  constructor() {
      // Llama a un método del servicio inyectado y lo usa en la clase del componente
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
```
      
</Card>

En el código anterior:
- Usamos `inject(CarService)` para obtener una instancia de `CarService`.
- Asignamos esta instancia a la propiedad `carService`, que permite que el servicio esté disponible en toda la clase del componente `AppComponent`.
      
</Card>

<Card>

### Paso 2: Uso de la Instancia `carService`

Una vez inyectado el servicio, podemos acceder a sus métodos y propiedades. En este ejemplo, dentro del constructor de `AppComponent`, llamamos al método `getCars()` de `carService`, que devuelve una lista de autos. Luego, esta lista se convierte en una cadena de texto con un separador especial y se almacena en la propiedad `display`.

<Card>

```typescript
constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
}
```
    
</Card>
    
</Card>

<Card>

### Paso 3: Actualizar la Plantilla para Mostrar el Resultado

Finalmente, actualicemos la plantilla del componente para mostrar el resultado. Usaremos la interpolación `{{ display }}` para mostrar el valor de `display` en el HTML.

<Card>

```typescript
@Component({
    selector: 'app-root',
  template: `<p>Car Listing: {{ display }}</p>`,
})
```
    
</Card>

Este código genera en la vista un listado de autos separados por "⭐️", por ejemplo: **"Toyota ⭐️ Honda ⭐️ Ford"**.
    
</Card>

Acabas de inyectar y utilizar tu primer servicio en Angular. Esta técnica es fundamental en el desarrollo con Angular, ya que permite que los componentes accedan a funcionalidades comunes o datos compartidos sin tener que instanciarlos manualmente. Esto fomenta un código modular, reutilizable y más fácil de mantener.