---
title: SecurityFilterChain
sidebar_position: 4
---

### Definiendo las Reglas de Seguridad

La **SecurityFilterChain** es una estructura que se utiliza en Spring Security para determinar qué filtros de seguridad deben ser invocados para cada solicitud HTTP que llega a tu aplicación. Es como un filtro especial que contiene otros filtros, los cuales definen las reglas de seguridad que se aplican a ciertas rutas o URLs específicas.


<Card>

<Card color='dark' header='Figura 3. FilterChainProxy' textAlign='center'>

![Spring seurity image](https://docs.spring.io/spring-security/reference/_images/servlet/architecture/securityfilterchain.png)

</Card>

### ¿Cómo Encaja en Spring Security?

Para entender cómo funciona, necesitamos saber qué papel juega en la arquitectura general de Spring Security:

1. **FilterChainProxy**: Este es un componente central en Spring Security que coordina el uso de los filtros de seguridad. Cuando una solicitud llega a la aplicación, **FilterChainProxy** decide qué conjunto de filtros de seguridad (definidos en un **SecurityFilterChain**) se deben ejecutar.
   
2. **SecurityFilterChain**: Es una colección de filtros de seguridad que Spring Security utiliza para proteger las solicitudes HTTP. Estos filtros son Beans de Spring (componentes gestionados por el contenedor de Spring), pero en lugar de ser registrados directamente en el contenedor de servlets o en `DelegatingFilterProxy`, se registran en **FilterChainProxy**.

</Card>

<Card>

### Ventajas de Usar FilterChainProxy

El hecho de que los filtros de seguridad se registren en **FilterChainProxy** en lugar de directamente en el contenedor de servlets o usando `DelegatingFilterProxy`, proporciona varias ventajas clave:

1. **Punto Central de Inicio**: **FilterChainProxy** es el punto de partida de todo el soporte de seguridad basado en servlets en Spring Security. Esto significa que cualquier problema relacionado con la seguridad en las solicitudes puede comenzar a investigarse aquí. Si necesitas depurar problemas, es un excelente lugar para agregar puntos de inspección (debug points).

2. **Tareas No Opcionales**: **FilterChainProxy** maneja ciertas tareas esenciales, como limpiar el **SecurityContext** (un objeto que almacena información sobre el usuario autenticado) para evitar fugas de memoria. También aplica el **HttpFirewall** de Spring Security, que protege las aplicaciones de ciertos tipos de ataques como ataques de fuerza bruta o de inyección.

3. **Flexibilidad en las Reglas de Seguridad**: Un gran beneficio es que no se basa solo en la URL para decidir qué filtros de seguridad aplicar. Mientras que un contenedor de servlets típico invoca filtros basándose únicamente en la URL de la solicitud, **FilterChainProxy** puede invocar una **SecurityFilterChain** usando cualquier información contenida en la solicitud HTTP, gracias a una interfaz llamada `RequestMatcher`. Esto te da mucha más flexibilidad para determinar qué reglas de seguridad aplicar en diferentes situaciones.

</Card>

<Card>

### Cómo Funcionan Múltiples SecurityFilterChain

Puedes tener múltiples instancias de **SecurityFilterChain** dentro de una aplicación. Cada instancia está configurada para manejar diferentes patrones de URL o diferentes tipos de solicitudes. El **FilterChainProxy** es el encargado de decidir cuál de estas cadenas de filtros debe usarse para una solicitud específica.

<Card color='dark' header='Figura 3. FilterChainProxy' textAlign='center'>

![Spring seurity image](https://docs.spring.io/spring-security/reference/_images/servlet/architecture/multi-securityfilterchain.png)

</Card>

</Card>

<Card>

#### Ejemplo con Múltiples SecurityFilterChain

Imagina que tienes dos cadenas de seguridad:

1. **SecurityFilterChain0**: Esta cadena de seguridad está configurada para manejar las rutas que comienzan con `/api/**` (por ejemplo, `/api/messages/`).

2. **SecurityFilterChainn**: Esta otra cadena de seguridad se encarga de manejar cualquier otra ruta que no coincide con `/api/**`.

Cuando llega una solicitud para la URL `/api/messages/`, el **FilterChainProxy** revisa las reglas de cada **SecurityFilterChain** en el orden en que fueron definidas. En este caso, la solicitud coincide con el patrón de `/api/**` en la **SecurityFilterChain0**, por lo que esa cadena de seguridad es invocada. Incluso si la solicitud también coincidiría con otras cadenas de seguridad (como la **SecurityFilterChainn**), solo se invoca la primera coincidencia.

Si, por otro lado, llega una solicitud para la URL `/messages/` (sin `/api/`), la primera cadena de seguridad no coincide, por lo que el **FilterChainProxy** continúa revisando las demás cadenas de seguridad hasta que encuentra una coincidencia, como en **SecurityFilterChainn**.

#### Diferentes Filtros en Cada SecurityFilterChain

Es importante notar que cada **SecurityFilterChain** puede tener un conjunto único de filtros de seguridad. Por ejemplo:

- **SecurityFilterChain0** puede tener tres filtros configurados (por ejemplo, uno para autenticación, uno para autorización y otro para la protección CSRF).
- **SecurityFilterChainn** podría tener cuatro filtros, con tal vez algún filtro adicional para manejar la autenticación de tokens, por ejemplo.

Además, puede haber cadenas de seguridad que no tengan ningún filtro de seguridad si tu aplicación necesita ignorar completamente ciertas solicitudes.


</Card>

<Card>

El **SecurityFilterChain** en Spring Security es una herramienta muy flexible y potente que te permite aplicar diferentes reglas de seguridad a diferentes partes de tu aplicación, con la ayuda de **FilterChainProxy**. Al permitir que los filtros de seguridad sean seleccionados no solo por URL, sino por cualquier información de la solicitud HTTP, Spring Security ofrece una manera avanzada de proteger aplicaciones web.

</Card>