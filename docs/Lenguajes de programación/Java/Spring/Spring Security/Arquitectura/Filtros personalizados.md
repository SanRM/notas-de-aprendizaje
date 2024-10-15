---
title: Filtros personalizados
sidebar_position: 7
---

Normalmente, los filtros de seguridad que vienen por defecto en Spring Security son suficientes para proteger tu aplicación. Sin embargo, en algunas situaciones específicas, como la validación de accesos más complejos, puede que necesites agregar un filtro personalizado. 

Por ejemplo, digamos que necesitas validar un **tenant ID** (una especie de identificador que permite diferenciar los espacios o clientes dentro de una aplicación multi-tenant) en las solicitudes. Este filtro personalizado verificaría si el usuario tiene acceso a un tenant en particular. Para hacer esto, deberías añadir el filtro después de los filtros de autenticación, ya que necesitas saber quién es el usuario antes de verificar si tiene acceso.

<Card>

### ¿Cómo crear un filtro personalizado?

El primer paso es crear el filtro que ejecutará esa validación específica. Aquí está el código para un filtro llamado `TenantFilter`:

```java
public class TenantFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String tenantId = request.getHeader("X-Tenant-Id");  // 1. Obtener el tenant ID desde la cabecera de la solicitud
        boolean hasAccess = isUserAllowed(tenantId);  // 2. Verificar si el usuario tiene acceso a ese tenant
        if (hasAccess) {
            filterChain.doFilter(request, response);  // 3. Si tiene acceso, continuar con el resto de los filtros
            return;
        }
        throw new AccessDeniedException("Access denied");  // 4. Si no tiene acceso, lanzar una excepción de "Acceso denegado"
    }

}
```

#### Explicación del código

1. **Obtener el tenant ID**: Se extrae el tenant ID desde la cabecera de la solicitud HTTP (`request.getHeader("X-Tenant-Id")`).
   
2. **Validar acceso**: Usamos una función `isUserAllowed(tenantId)` (que tendrías que implementar) para verificar si el usuario actual tiene permiso para acceder a ese tenant.

3. **Continuar con la cadena de filtros**: Si el usuario tiene acceso, llamamos a `filterChain.doFilter(request, response)` para continuar con el procesamiento normal, permitiendo que el resto de los filtros de seguridad se ejecuten.

4. **Acceso denegado**: Si el usuario no tiene acceso, lanzamos una excepción `AccessDeniedException` que detiene el procesamiento y devuelve una respuesta de acceso denegado.

    
</Card>

<Card>

### Alternativa con OncePerRequestFilter

En lugar de implementar directamente `Filter`, puedes extender de la clase `OncePerRequestFilter`. Esta clase asegura que el filtro se ejecute solo una vez por solicitud, y ofrece el método `doFilterInternal`, que simplifica un poco el manejo de `HttpServletRequest` y `HttpServletResponse`:

```java
public class TenantFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        String tenantId = request.getHeader("X-Tenant-Id");
        boolean hasAccess = isUserAllowed(tenantId);
        if (hasAccess) {
            filterChain.doFilter(request, response);
            return;
        }
        throw new AccessDeniedException("Access denied");
    }
}
```

</Card>

<Card>

### Agregar el filtro a la cadena de seguridad

Una vez que has creado el filtro, el siguiente paso es agregarlo a la **cadena de filtros de seguridad** de Spring. Esto se hace en la configuración de seguridad utilizando `HttpSecurity`.

```java
@Bean
SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        // ...
        .addFilterBefore(new TenantFilter(), AuthorizationFilter.class);  // Agregar el filtro antes del AuthorizationFilter
    return http.build();
}
```

#### Explicación:

- **`addFilterBefore`**: Añade el `TenantFilter` justo antes del `AuthorizationFilter`. Esto asegura que el `TenantFilter` se ejecute después de que los filtros de autenticación ya hayan determinado quién es el usuario.
  
- También puedes usar:
  - **`addFilterAfter`**: Para agregar el filtro después de un filtro específico.
  - **`addFilterAt`**: Para colocarlo en una posición exacta dentro de la cadena de filtros.

</Card>

<Card>

### Evitar que el filtro se registre dos veces

Si declaras tu filtro como un Bean de Spring (por ejemplo, usando `@Component`), Spring Boot lo registrará automáticamente en el contenedor de servlets. Esto podría provocar que el filtro se invoque dos veces: una por el contenedor de servlets y otra por Spring Security, en un orden no controlado.

Para evitar esto, puedes usar un `FilterRegistrationBean` y desactivar su registro automático:

```java
@Bean
public FilterRegistrationBean<TenantFilter> tenantFilterRegistration(TenantFilter filter) {
    FilterRegistrationBean<TenantFilter> registration = new FilterRegistrationBean<>(filter);
    registration.setEnabled(false);  // Desactivar el registro automático
    return registration;
}
```

#### Explicación:

- **`FilterRegistrationBean`**: Este Bean se utiliza para personalizar cómo se registra el filtro en el contenedor.
- **`registration.setEnabled(false)`**: Con esta línea, le decimos a Spring Boot que no registre automáticamente el filtro con el contenedor de servlets, evitando así la doble invocación.


</Card>