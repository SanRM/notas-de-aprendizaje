---
title: ExceptionTranslationFilter
sidebar_position: 8
---

El **ExceptionTranslationFilter** es un filtro en Spring Security que maneja excepciones relacionadas con la seguridad, específicamente las siguientes:

<Card color='red'> 
1. **AuthenticationException**: Se lanza cuando un usuario no está autenticado (es decir, no ha proporcionado credenciales válidas).
</Card>

<Card color='pink'>
2. **AccessDeniedException**: Se lanza cuando un usuario está autenticado pero no tiene los permisos necesarios para acceder a un recurso.
</Card>

Este filtro convierte esas excepciones en respuestas HTTP apropiadas, permitiendo que la aplicación gestione de forma adecuada los casos en que un usuario no tiene acceso o no está autenticado.

<Card>
### ¿Cómo se Inserta en la Cadena de Filtros?

**ExceptionTranslationFilter** es parte de la cadena de filtros de seguridad (FilterChainProxy), lo que significa que se ejecuta en el flujo de procesamiento de cada solicitud HTTP. Si se produce una excepción durante el manejo de la solicitud, este filtro se encarga de capturarla y responder de manera adecuada.
    
</Card>

<Card>
    


### Relación con Otros Componentes

El **ExceptionTranslationFilter** se relaciona con varios otros componentes que gestionan la seguridad en Spring. A continuación explico cómo funciona este filtro y su interacción con otros elementos importantes:

<Card>

#### 1. Invocación del Resto de la Aplicación

El primer paso que realiza el **ExceptionTranslationFilter** es invocar `FilterChain.doFilter(request, response)`. Esto significa que llama a la cadena de filtros o al resto de la aplicación para que siga procesando la solicitud. Si no hay ninguna excepción relacionada con la seguridad, la solicitud simplemente continúa su flujo normal.

</Card>

<Card>

#### 2. Manejo de AuthenticationException

Si el usuario no está autenticado o si se produce una **AuthenticationException** durante el procesamiento de la solicitud, el filtro se encarga de **iniciar el proceso de autenticación**. Aquí están los pasos clave:

- **Limpiar el SecurityContextHolder**: El `SecurityContextHolder` es el lugar donde Spring Security almacena la información de autenticación. Si ocurre una excepción, se borra para asegurarse de que no se reutilice información de autenticación no válida.
  
- **Guardar la HttpServletRequest**: La solicitud original (que causó la excepción) se guarda. Esto permite que, una vez que el usuario se autentique correctamente, se "reproduzca" la solicitud original, de modo que el usuario no pierda su progreso.

- **Invocar el AuthenticationEntryPoint**: El `AuthenticationEntryPoint` es el componente responsable de solicitar las credenciales al usuario. Por ejemplo, podría redirigir a una página de inicio de sesión o enviar un encabezado `WWW-Authenticate` en la respuesta HTTP para que el navegador solicite las credenciales.
    
</Card>

<Card>

#### 3. Manejo de AccessDeniedException

Si el usuario está autenticado pero no tiene los permisos adecuados, se lanza una **AccessDeniedException**. En este caso:

- **Invocar el AccessDeniedHandler**: El `AccessDeniedHandler` se encarga de gestionar esta situación y mostrar un mensaje apropiado al usuario. Puede ser una página que diga "Acceso denegado" o una respuesta HTTP con el estado 403 (Forbidden), lo que significa que el usuario no tiene los permisos necesarios.
    
</Card>

<Card>

#### 4. No hay Excepciones

Si no se lanza ninguna excepción de seguridad, entonces el `ExceptionTranslationFilter` no hace nada y deja que la solicitud continúe su procesamiento normal.
    
</Card>

</Card>

<Card color='green'>

### Ejemplo de Pseudo Código

Aquí tienes un ejemplo simplificado de cómo funciona el **ExceptionTranslationFilter** en pseudocódigo:

```java
try {
    filterChain.doFilter(request, response);  // Invoca el resto de la aplicación
} catch (AccessDeniedException | AuthenticationException ex) {
    // Si no está autenticado o es una AuthenticationException
    if (!authenticated || ex instanceof AuthenticationException) {
        startAuthentication();  // Inicia el proceso de autenticación
    } else {
        accessDenied();  // Maneja la denegación de acceso
    }
}
```

#### Desglose del Pseudo Código

- **`filterChain.doFilter(request, response)`**: Este es el llamado al resto de la cadena de filtros o de la aplicación. Si la solicitud pasa sin problemas, este filtro no interviene más.
  
- **Captura de Excepciones**: Si se lanza una excepción, el filtro la captura. Si es una **AuthenticationException** o si el usuario no está autenticado, se inicia el proceso de autenticación. Si es una **AccessDeniedException**, se maneja la denegación de acceso.
    
</Card>

<Card>

### ¿Dónde Se Usan Estas Excepciones?

Las excepciones como **AuthenticationException** y **AccessDeniedException** pueden ser lanzadas por otros componentes de seguridad, como el **FilterSecurityInterceptor** o la seguridad basada en métodos (cuando proteges métodos con anotaciones como `@PreAuthorize`).
    
</Card>

El **ExceptionTranslationFilter** es una pieza clave de la seguridad en Spring porque gestiona cómo se manejan los errores de autenticación y autorización. Si hay un problema con la autenticación, el filtro inicia el proceso para que el usuario proporcione credenciales. Si hay un problema con los permisos, gestiona el acceso denegado. Al estar integrado en la cadena de filtros, este filtro asegura que tu aplicación responda correctamente a las solicitudes no autorizadas o no autenticadas.
