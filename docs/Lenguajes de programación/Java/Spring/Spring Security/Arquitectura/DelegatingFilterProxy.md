---
title: DelegatingFilterProxy
sidebar_position: 2
---


La **DelegatingFilterProxy** es una implementación proporcionada por Spring que actúa como un puente entre el ciclo de vida del [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring) y el contexto de la aplicación de Spring. Es decir, permite que los filtros de Spring se integren con el [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de una manera que no sería posible solo utilizando el mecanismo estándar de los servlets.

<Card>  
  
### Contexto del [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring) y [Beans](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring

1. **[Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring)**: Es un entorno donde se ejecutan aplicaciones Java basadas en servlets. Permite registrar instancias de filtros utilizando sus propios estándares. Sin embargo, no tiene conocimiento de los **Beans** (componentes de Spring) definidos en el contexto de Spring.
   
2. **[Beans](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring**: Son objetos gestionados por el contenedor de Spring. Estos objetos pueden tener configuraciones complejas y pueden depender de otros beans.

</Card>

<Card>

### ¿Cómo Funciona DelegatingFilterProxy?

El **DelegatingFilterProxy** se registra en el [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring) como un filtro estándar, pero delega todo el trabajo a un [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring que implementa la interfaz `Filter`. Esto significa que, aunque se registra en el [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring), su lógica se maneja a través de Spring.

#### Proceso de Funcionamiento

1. **Búsqueda del Bean**: Cuando se invoca el filtro, el `DelegatingFilterProxy` busca un [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de filtro específico en el contexto de aplicación de Spring. Este [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) se define en la configuración de Spring y puede realizar las acciones necesarias para procesar la solicitud.

2. **Delegar el Trabajo**: Una vez que se ha encontrado el Bean, el `DelegatingFilterProxy` invoca su método `doFilter`, pasando la solicitud y la respuesta. Esto permite que el filtro de Spring maneje la lógica específica de la aplicación.

</Card>

<Card>
    

### Ejemplo de Pseudo Código de DelegatingFilterProxy

Aquí hay un ejemplo simplificado de cómo podría verse el código de un `DelegatingFilterProxy`:

```java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    Filter delegate = getFilterBean(someBeanName); 
    delegate.doFilter(request, response); 
}
```

#### Desglose del Código

- **Método `doFilter`**: Este es el método que se ejecuta cuando el filtro es invocado.
- **`Filter delegate = getFilterBean(someBeanName);`**: Aquí, el proxy busca el [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) que ha sido registrado en Spring con un nombre específico (`someBeanName`). Este es el [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) que realizará la lógica del filtro.
- **`delegate.doFilter(request, response);`**: Este es el método que se llama en el [Bean](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring, lo que permite que el filtro maneje la solicitud y la respuesta.

</Card>

<Card>



### Beneficios de DelegatingFilterProxy

1. **Integración entre Contenedores**: Permite una integración fluida entre el [Contenedor de servlets](#contexto-del-contenedor-de-servlets-y-beans-de-spring) y el contexto de Spring, lo que facilita el uso de los [Beans](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring como filtros.

2. **Retraso en la Búsqueda de Beans**: Una de las ventajas clave del `DelegatingFilterProxy` es que permite retrasar la búsqueda de las instancias de los Beans. Esto es crucial porque el contenedor necesita registrar las instancias antes de que pueda iniciar el ciclo de vida de la aplicación. Spring utiliza un `ContextLoaderListener` para cargar los [Beans](#contexto-del-contenedor-de-servlets-y-beans-de-spring) de Spring, y este proceso no se completa hasta después de que el contenedor ha registrado los filtros.

3. **Flexibilidad y Reutilización**: Puedes reutilizar la misma lógica de filtro en múltiples aplicaciones o diferentes partes de la misma aplicación sin necesidad de duplicar código.


<Card color='dark' header='Figura 2. DelegatingFilterProxy' textAlign='center'>

![Spring seurity image](https://docs.spring.io/spring-security/reference/_images/servlet/architecture/delegatingfilterproxy.png)

</Card>


</Card>

<Card>
    
El DelegatingFilterProxy es una herramienta poderosa que permite a los desarrolladores de Spring aprovechar los filtros en el contenedor de servlets mientras utilizan la infraestructura rica de Spring para gestionar sus Beans. Al facilitar esta integración, simplifica la creación de aplicaciones seguras y robustas. 


</Card>