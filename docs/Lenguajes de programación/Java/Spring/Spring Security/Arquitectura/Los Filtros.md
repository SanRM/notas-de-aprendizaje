---
title: ¿Qué son los filtros?
sidebar_position: 1
---


Los **Filtros** (Filters) son componentes que interceptan las solicitudes HTTP (que son las peticiones que los clientes hacen al servidor) y pueden realizar acciones específicas antes o después de que esas solicitudes sean procesadas por la aplicación. En el contexto de **Spring Security**, los filtros son cruciales para gestionar la seguridad de las aplicaciones web.

<Card>

### Cadena de Filtros (Filter Chain)

La **Cadena de Filtros** (FilterChain) es una secuencia de filtros que se aplican a una solicitud. Imagina que cada solicitud a tu aplicación pasa a través de una serie de puertas (filtros), donde cada puerta puede decidir si permitir que la solicitud continúe hacia el siguiente filtro o a la aplicación en sí.

#### Proceso de una Solicitud HTTP

1. **El Cliente Envía una Solicitud**: Cuando un cliente (como un navegador web) hace una solicitud a la aplicación, el servidor recibe esta solicitud.
   
2. **Creación de la Cadena de Filtros**: El contenedor (container) de servlets, que es el entorno donde se ejecutan las aplicaciones Java web, crea una **Cadena de Filtros** (FilterChain). Esta cadena incluye instancias de filtros que deben procesar la solicitud. Estos filtros son seleccionados en función de la ruta de la solicitud URI (que es la dirección de la solicitud en el servidor).

3. **Ejemplo de un Filtro en Spring MVC**: En una aplicación de Spring MVC, el filtro principal que maneja la solicitud es el **DispatcherServlet**. Este servlet (un tipo de componente que maneja las solicitudes) es responsable de dirigir las solicitudes a los controladores adecuados.

4. **Manejo de Solicitudes**: En general, un filtro puede manejar una única solicitud y respuesta (HttpServletRequest y HttpServletResponse), pero puedes tener varios filtros que pueden:
   - **Prevenir que los filtros o el servlet de abajo se invoquen**: Por ejemplo, un filtro puede decidir no permitir que la solicitud continúe a otros filtros o al servlet si detecta un problema (como falta de autenticación).
   - **Modificar la solicitud o respuesta**: Los filtros pueden alterar la HttpServletRequest (la representación de la solicitud) o HttpServletResponse (la representación de la respuesta) que se envían a los filtros o al servlet siguiente.




</Card>

<Card>

### Ejemplo de Uso de Filtros

En el siguiente fragmento de código se ilustra cómo se puede implementar un filtro en Java:

```java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    // Hacer algo antes de que el resto de la aplicación procese la solicitud
    chain.doFilter(request, response); // Invocar el resto de la aplicación
    // Hacer algo después de que el resto de la aplicación procese la solicitud
}
```

<Card>
    
#### Desglose del Código

- **Método `doFilter`**: Este es el método que se llama para cada solicitud que pasa a través del filtro.
- **`ServletRequest request`**: Representa la solicitud del cliente. Contiene información sobre la solicitud, como parámetros y cabeceras.
- **`ServletResponse response`**: Representa la respuesta que se enviará al cliente. Permite modificar lo que se envía de vuelta al cliente.
- **`FilterChain chain`**: Es la cadena de filtros a la que pertenece este filtro. Permite llamar al siguiente filtro en la cadena usando `chain.doFilter(request, response)`.
- **Acciones Pre y Post**: Puedes realizar acciones antes y después de invocar la cadena. Esto es útil para agregar comportamiento adicional, como logging, gestión de transacciones, etc.

</Card>

</Card>


<Card>
    

### Importancia del Orden de los Filtros

La secuencia en la que se invocan los filtros es extremadamente importante. Debido a que cada filtro puede modificar la solicitud o la respuesta, el orden puede afectar cómo se procesa la solicitud final y qué respuesta recibe el cliente. Por ejemplo, un filtro de autenticación debe ejecutarse antes de que se permita el acceso a los recursos de la aplicación.

<Card color='dark' header='Figura 1. Cadena de filtros' textAlign='center'>

![Spring seurity image](https://docs.spring.io/spring-security/reference/_images/servlet/architecture/filterchain.png)

</Card>

</Card>