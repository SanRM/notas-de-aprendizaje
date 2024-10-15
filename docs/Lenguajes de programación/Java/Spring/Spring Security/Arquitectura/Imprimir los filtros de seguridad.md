---
title: Imprimiendo los filtros de seguridad
sidebar_position: 6
---

Cuando una aplicación Spring Security se inicia, automáticamente imprime una lista de los **filtros de seguridad** que serán aplicados a las solicitudes HTTP. Esto sucede en el nivel de registro **INFO**, y puedes ver esta lista en la consola cuando la aplicación arranca.

<Card>


Por ejemplo, un mensaje en la consola puede verse así:

```text
2023-06-14T08:55:22.321-03:00  INFO 76975 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [
    org.springframework.security.web.session.DisableEncodeUrlFilter@404db674,
    org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@50f097b5,
    org.springframework.security.web.context.SecurityContextHolderFilter@6fc6deb7,
    org.springframework.security.web.header.HeaderWriterFilter@6f76c2cc,
    org.springframework.security.web.csrf.CsrfFilter@c29fe36,
    org.springframework.security.web.authentication.logout.LogoutFilter@ef60710,
    org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter@7c2dfa2,
    org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter@4397a639,
    org.springframework.security.web.authentication.ui.DefaultLogoutPageGeneratingFilter@7add838c,
    org.springframework.security.web.authentication.www.BasicAuthenticationFilter@5cc9d3d0,
    org.springframework.security.web.savedrequest.RequestCacheAwareFilter@7da39774,
    org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@32b0876c,
    org.springframework.security.web.authentication.AnonymousAuthenticationFilter@3662bdff,
    org.springframework.security.web.access.ExceptionTranslationFilter@77681ce4,
    org.springframework.security.web.access.intercept.AuthorizationFilter@169268a7
]
```

#### ¿Qué Significa Esta Lista?

1. **Nombres de Filtros**: Cada línea en este log representa un filtro que será ejecutado para las solicitudes que llegan a la aplicación. Algunos de estos filtros son estándar en Spring Security, como el `CsrfFilter` que maneja la protección contra ataques de falsificación de solicitudes (CSRF), o el `UsernamePasswordAuthenticationFilter` que procesa las solicitudes de autenticación con nombre de usuario y contraseña.

2. **El Orden Importa**: Los filtros se ejecutan en el orden en que aparecen en esta lista. Por ejemplo, el `HeaderWriterFilter` se ejecutará antes que el `CsrfFilter`. Si añades un filtro personalizado, debes asegurarte de que esté en la posición correcta para que funcione como esperas.

### ¿Por Qué Es Útil Ver Esta Lista?

Si has añadido un filtro personalizado en tu configuración de seguridad, es esencial confirmar que está en la lista de filtros y en la posición adecuada. Si el filtro no está en la lista, entonces no se ejecutará, y esto podría causar problemas de seguridad o fallos en el comportamiento de tu aplicación.

</Card>

<Card>  

### ¿Cómo Ver Si un Filtro se Invoca para una Solicitud?

A veces, no basta con saber que un filtro está registrado; también es útil saber si se invoca correctamente para una solicitud específica, o si está fallando en algún punto.

Para eso, puedes configurar la aplicación para **imprimir cada invocación de los filtros** cuando se procesa una solicitud. Esto es útil para:

1. **Ver si tu filtro personalizado está siendo invocado**.
2. **Depurar excepciones o errores** y saber exactamente en qué filtro ocurre el problema.

### Configuración para Registrar Eventos de Seguridad

Puedes habilitar el registro detallado de los filtros añadiendo configuración de logging en tu archivo `application.properties` o `application.yml`. Por ejemplo:

#### Configuración en `application.properties`:

```properties
logging.level.org.springframework.security=DEBUG
logging.level.org.springframework.security.web.FilterChainProxy=TRACE
```

#### Configuración en `application.yml`:

```yaml
logging:
  level:
    org.springframework.security: DEBUG
    org.springframework.security.web.FilterChainProxy: TRACE
```

- **`DEBUG`**: Esto habilitará el nivel de depuración para la seguridad en general, lo que te permitirá ver eventos importantes como la autenticación y autorización.
- **`TRACE`**: Este nivel es aún más detallado y te permitirá ver exactamente qué filtros se invocan y en qué orden, para cada solicitud. Esto incluye todos los eventos de la **cadena de filtros** (`FilterChainProxy`), que es la encargada de ejecutar todos los filtros configurados.

### ¿Qué Verás al Habilitar Estos Logs?

Después de habilitar el logging, cuando envíes una solicitud a tu aplicación, verás un registro detallado en la consola de cada filtro que se ejecuta. Algo similar a esto:

```text
2023-06-14T08:55:22.321-03:00  DEBUG 76975 --- [           main] o.s.s.web.FilterChainProxy : /login at position 1 of 15 in additional filter chain; firing DisableEncodeUrlFilter
2023-06-14T08:55:22.321-03:00  DEBUG 76975 --- [           main] o.s.s.web.FilterChainProxy : /login at position 2 of 15 in additional filter chain; firing WebAsyncManagerIntegrationFilter
2023-06-14T08:55:22.321-03:00  DEBUG 76975 --- [           main] o.s.s.web.FilterChainProxy : /login at position 3 of 15 in additional filter chain; firing SecurityContextHolderFilter
```

Cada línea te dice qué filtro se está ejecutando para la solicitud `/login`, lo que te permite ver paso a paso cómo se procesa la solicitud en la cadena de filtros.

</Card>