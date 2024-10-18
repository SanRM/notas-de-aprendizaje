---
title: Guardar y reutilizar solicitudes 
sidebar_position: 9
---

### ¿Por qué Guardar una Solicitud?

Cuando un usuario intenta acceder a un recurso que requiere autenticación, pero aún no está autenticado, la solicitud original debe "guardarse". ¿Por qué? Porque después de que el usuario se autentique (por ejemplo, iniciando sesión), queremos redirigirlo a la página que originalmente intentó acceder, en lugar de simplemente enviarlo a la página de inicio o a otra página genérica.

En **Spring Security**, esta funcionalidad se implementa utilizando algo llamado **RequestCache**.

<Card>

### ¿Qué es RequestCache?

El **RequestCache** es una clase que se encarga de guardar la solicitud HTTP (HttpServletRequest) original del usuario no autenticado, para que pueda ser reproducida una vez que el usuario se autentica correctamente.
    
</Card>

<Card>

#### Proceso de Funcionamiento

<Card color='blue'>

1. **Guardar la Solicitud Original**: Cuando un usuario intenta acceder a una página que requiere autenticación, y aún no ha iniciado sesión, Spring Security detecta la excepción de autenticación (AuthenticationException). En ese momento, el **ExceptionTranslationFilter** guarda la solicitud en el **RequestCache** antes de redirigir al usuario a la página de inicio de sesión.
    
</Card>

<Card color='darkBlue'>

2. **Repetir la Solicitud Original Después de Autenticarse**: Una vez que el usuario inicia sesión con éxito, el filtro **RequestCacheAwareFilter** se encarga de obtener la solicitud que se guardó en el `RequestCache` y la "repite" (reenvía) para que el usuario vaya directamente a la página que originalmente intentó visitar.
    
</Card>
    
</Card>

<Card>

### Implementación por Defecto: HttpSessionRequestCache

Por defecto, Spring Security utiliza una implementación de `RequestCache` llamada **HttpSessionRequestCache**, que almacena la solicitud del usuario en la sesión HTTP (un espacio de almacenamiento temporal que sigue al usuario durante su interacción con la aplicación). Esto permite que la solicitud esté disponible cuando el usuario se autentica.
    
</Card>

<Card>

#### Ejemplo de Código para Personalizar RequestCache

Aquí tienes un ejemplo de cómo puedes personalizar el **RequestCache** para que solo revise las solicitudes guardadas si hay un parámetro llamado `continue` en la solicitud. Esto significa que solo en ciertas condiciones específicas se intentará reutilizar la solicitud guardada.


```java
@Bean
DefaultSecurityFilterChain springSecurity(HttpSecurity http) throws Exception {
    HttpSessionRequestCache requestCache = new HttpSessionRequestCache();
    requestCache.setMatchingRequestParameterName("continue"); // Solo chequea si está presente el parámetro "continue"
    http
        // Otras configuraciones de seguridad...
        .requestCache((cache) -> cache
            .requestCache(requestCache) // Personaliza el RequestCache
        );
    return http.build();
}
```

#### Desglose del Código

- **`HttpSessionRequestCache`**: Esta es la clase que guarda las solicitudes en la sesión HTTP.
- **`setMatchingRequestParameterName("continue")`**: Esto establece que el `RequestCache` solo comprobará las solicitudes guardadas si el parámetro `"continue"` está presente en la solicitud. Es un control adicional para que no todas las solicitudes se guarden automáticamente.

</Card>

<Card>

### Evitar Guardar Solicitudes

En algunos casos, quizás no quieras guardar la solicitud original de un usuario no autenticado en la sesión. Por ejemplo:
- Puede que prefieras almacenar esa solicitud en otro lugar, como en el navegador del usuario o en una base de datos.
- Tal vez quieras redirigir al usuario siempre a una página de inicio o una página predeterminada después de autenticarse, en lugar de devolverlo a la página que intentaba acceder originalmente.

Para desactivar esta característica de guardar solicitudes, puedes usar una implementación especial llamada **NullRequestCache**. Como su nombre lo indica, esta clase no guarda la solicitud en ningún lugar.

<Card>
    

#### Ejemplo de Código para No Guardar la Solicitud

Aquí tienes un ejemplo de cómo desactivar el almacenamiento de solicitudes utilizando **NullRequestCache**:

```java
@Bean
SecurityFilterChain springSecurity(HttpSecurity http) throws Exception {
    RequestCache nullRequestCache = new NullRequestCache();
    http
        // Otras configuraciones de seguridad...
        .requestCache((cache) -> cache
            .requestCache(nullRequestCache) // No guarda las solicitudes
        );
    return http.build();
}
```

#### Desglose del Código

- **`NullRequestCache`**: Esta clase desactiva completamente la funcionalidad de guardar solicitudes. Después de que un usuario se autentica, se le redirige a una página predeterminada, no a la página que originalmente intentó visitar.
    
</Card>

</Card>

<Card>
    
### RequestCacheAwareFilter

El **RequestCacheAwareFilter** es el filtro responsable de recuperar y reproducir la solicitud original que fue guardada en el `RequestCache`. Su trabajo es sencillo: cuando el usuario ha sido autenticado correctamente, este filtro busca la solicitud guardada en el `RequestCache` y la repite para que el usuario pueda continuar su flujo normal.

</Card>

La capacidad de guardar y reproducir solicitudes es crucial en aplicaciones donde los usuarios necesitan autenticarse para acceder a ciertos recursos. Con **RequestCache**, Spring Security facilita este proceso, asegurando que los usuarios sean redirigidos correctamente a la página que intentaban visitar después de autenticarse. Además, tienes flexibilidad para personalizar cómo se guardan o no las solicitudes, adaptando el comportamiento a las necesidades de tu aplicación.