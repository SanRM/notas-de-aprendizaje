---
title: Logging
sidebar_position: 10
---

### ¿Qué es el Logging en Spring Security?

**Logging** en Spring Security se refiere al registro de eventos relacionados con la seguridad de la aplicación, como la autorización, autenticación, rechazos de solicitudes, entre otros. Spring Security proporciona un registro detallado a través de los niveles **DEBUG** y **TRACE**, que son niveles de detalle en los mensajes de log (registros). Estos niveles te ayudan a entender mejor por qué una solicitud fue rechazada o cómo se manejaron ciertos aspectos de seguridad.

- **DEBUG**: Nivel de registro que ofrece información útil sobre el funcionamiento interno, pero no todos los detalles.
- **TRACE**: Nivel de registro que proporciona aún más detalles, útil cuando necesitas un análisis profundo de lo que está ocurriendo.

<Card>

### ¿Por qué es importante el Logging en Spring Security?

Cuando una solicitud es rechazada debido a medidas de seguridad, como un error 401 (No autorizado) o un 403 (Prohibido), Spring Security **no proporciona detalles específicos** en la respuesta al cliente por razones de seguridad. Esto significa que si un cliente recibe uno de estos códigos de error, no sabrá directamente por qué fue rechazado. Aquí es donde el logging resulta crucial. Los registros internos pueden darte una explicación detallada del motivo por el cual se rechazó la solicitud.
    
</Card>

<Card>

#### Ejemplo con CSRF (Cross-Site Request Forgery)

Imagina que un usuario intenta hacer una solicitud **POST** a un recurso que está protegido con una medida de seguridad llamada **CSRF** (Cross-Site Request Forgery). Este tipo de protección requiere que las solicitudes incluyan un token CSRF válido. Si la solicitud no incluye este token, será rechazada con un error 403.

Ahora, sin logs habilitados, el cliente verá solo el error 403, sin más información. Sin embargo, si tienes activado el registro para Spring Security, verás algo como esto:

```
2023-06-14T09:44:25.797-03:00 DEBUG 76975 --- [nio-8080-exec-1] o.s.security.web.FilterChainProxy        : Securing POST /hello
2023-06-14T09:44:25.797-03:00 TRACE 76975 --- [nio-8080-exec-1] o.s.security.web.FilterChainProxy        : Invoking DisableEncodeUrlFilter (1/15)
2023-06-14T09:44:25.802-03:00 TRACE 76975 --- [nio-8080-exec-1] o.s.security.web.FilterChainProxy        : Invoking CsrfFilter (5/15)
2023-06-14T09:44:25.814-03:00 DEBUG 76975 --- [nio-8080-exec-1] o.s.security.web.csrf.CsrfFilter         : Invalid CSRF token found for http://localhost:8080/hello
2023-06-14T09:44:25.814-03:00 DEBUG 76975 --- [nio-8080-exec-1] o.s.s.w.access.AccessDeniedHandlerImpl   : Responding with 403 status code
```

#### Análisis del Ejemplo de Log

1. **Inicio del Proceso de Seguridad**: El primer mensaje de log dice que Spring Security está protegiendo la solicitud `POST /hello`. Esto significa que la solicitud está siendo procesada por la **Cadena de Filtros** (Filter Chain) de seguridad.
   
2. **Invocación de Filtros**: Los siguientes mensajes muestran cómo se invocan varios filtros uno por uno. Cada uno de estos filtros tiene una función específica (como gestionar las cabeceras de seguridad o manejar sesiones). El filtro más relevante aquí es el **CsrfFilter**, que es el responsable de validar el token CSRF.

3. **Rechazo por Token Inválido**: Luego, el log muestra que el filtro de CSRF encontró un token inválido o ausente, lo que es la causa del rechazo de la solicitud. La respuesta fue un **error 403**, lo que indica que el usuario no tiene permiso para realizar esta operación debido a la falta del token CSRF.
    
</Card>

<Card>

### Cómo Configurar Logging en Spring Security

Para habilitar el registro detallado de Spring Security en tu aplicación, puedes configurarlo de varias maneras. Aquí te muestro dos de las más comunes:

<Card>

#### Opción 1: Usar el archivo `application.properties` en Spring Boot

Si estás usando **Spring Boot**, puedes agregar esta línea a tu archivo `application.properties` para habilitar el nivel TRACE en los registros de seguridad:

```properties
logging.level.org.springframework.security=TRACE
```

Esto asegura que todos los eventos de seguridad se registren con el máximo detalle disponible.
    
</Card>

<Card>

#### Opción 2: Configuración usando `logback.xml`

Si prefieres configurar tu sistema de logs usando **Logback**, puedes hacerlo de la siguiente manera en el archivo `logback.xml`:

```xml
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <!-- Configuración del appender para la consola -->
    </appender>
    <!-- Logger para Spring Security -->
    <logger name="org.springframework.security" level="trace" additivity="false">
        <appender-ref ref="STDOUT" />
    </logger>
</configuration>
```

Este bloque de configuración asegura que los eventos de seguridad se registren en la consola a nivel TRACE, mostrando todos los detalles que necesitas para depurar.
    
</Card>
    
</Card>

El logging en Spring Security es una herramienta muy poderosa para comprender y depurar las solicitudes rechazadas o los problemas de seguridad en tu aplicación. A través de los niveles **DEBUG** y **TRACE**, puedes obtener una visión clara de cómo se manejan las solicitudes y por qué se rechazan. Al habilitar el registro adecuado, podrás solucionar problemas de seguridad con mucha más rapidez y precisión, lo que mejorará tanto la seguridad como la experiencia de desarrollo en general.
