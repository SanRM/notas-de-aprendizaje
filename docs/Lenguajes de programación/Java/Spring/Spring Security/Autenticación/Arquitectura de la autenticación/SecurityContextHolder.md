---
title: SecurityContextHolder
sidebar_position: 1
---

### ¿Qué es SecurityContextHolder?

En el corazón del modelo de autenticación de Spring Security está el **SecurityContextHolder**. Es un contenedor que almacena la información de seguridad del usuario actual, es decir, quién está autenticado en el sistema. Esta información es esencial para saber qué acciones puede realizar un usuario, basándose en sus permisos.


<Card>

#### ¿Qué almacena el SecurityContextHolder?

El **SecurityContextHolder** contiene un objeto llamado **SecurityContext**, que a su vez guarda los detalles de la autenticación del usuario, como su nombre de usuario, roles y credenciales. Spring Security usa este contexto para realizar validaciones y autorizaciones.

<Card>
    
##### ¿Qué es el SecurityContext?

El **SecurityContext** es un componente clave en Spring Security que contiene información relacionada con la autenticación del usuario actual. Esencialmente, es como una "caja" que guarda los detalles sobre quién está autenticado en el sistema en un momento dado.

##### ¿Cómo se obtiene el SecurityContext?

El **SecurityContext** se obtiene a través del **SecurityContextHolder**. Esta clase almacena y provee acceso al contexto de seguridad de forma estática, lo que significa que puedes acceder al **SecurityContext** desde cualquier parte de tu aplicación.

</Card>

### Población del SecurityContextHolder

Lo interesante es que Spring Security no se preocupa por cómo se llena el `SecurityContextHolder`. Solo le importa que, si contiene un valor, este será tratado como el usuario autenticado.
    
</Card>

<Card>

#### Ejemplo Simple de Autenticación Manual

Aquí tienes un ejemplo de cómo puedes autenticar manualmente a un usuario en el `SecurityContextHolder`:

```java
SecurityContext context = SecurityContextHolder.createEmptyContext(); 
Authentication authentication = new TestingAuthenticationToken("username", "password", "ROLE_USER"); 
context.setAuthentication(authentication);
SecurityContextHolder.setContext(context);
```

#### Desglose del Código

1. **`SecurityContext context = SecurityContextHolder.createEmptyContext();`**: Primero, creamos un `SecurityContext` vacío. Es importante crear uno nuevo para evitar posibles **condiciones de carrera** (race conditions) entre múltiples hilos (threads). Si varios hilos intentaran modificar el mismo contexto al mismo tiempo, podría haber errores o inconsistencias.

2. **`Authentication authentication = new TestingAuthenticationToken("username", "password", "ROLE_USER");`**: Luego, creamos un objeto de autenticación (`Authentication`). En este caso, usamos una clase llamada `TestingAuthenticationToken` para facilitar el ejemplo, pero en una aplicación real usarías una implementación más común como `UsernamePasswordAuthenticationToken`, que contiene el nombre de usuario, la contraseña y los roles del usuario (permisos o authorities).

3. **`context.setAuthentication(authentication);`**: Asignamos este objeto de autenticación al contexto de seguridad (`SecurityContext`).

4. **`SecurityContextHolder.setContext(context);`**: Finalmente, guardamos el contexto de seguridad en el `SecurityContextHolder`, que es el que gestionará esta información a lo largo de la aplicación.
    
</Card>

<Card>

### ¿Cómo se Usa el SecurityContextHolder?

Una vez que el `SecurityContextHolder` tiene la información del usuario autenticado, puedes acceder a ella en cualquier parte de la aplicación. Aquí te muestro cómo hacerlo:

```java
SecurityContext context = SecurityContextHolder.getContext();
Authentication authentication = context.getAuthentication();
String username = authentication.getName();
Object principal = authentication.getPrincipal();
Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
```

#### Desglose del Código

1. **`SecurityContext context = SecurityContextHolder.getContext();`**: Obtenemos el contexto de seguridad actual.
2. **`Authentication authentication = context.getAuthentication();`**: Obtenemos el objeto de autenticación, que contiene toda la información del usuario.
3. **`String username = authentication.getName();`**: Extraemos el nombre de usuario autenticado.
4. **`Object principal = authentication.getPrincipal();`**: El principal (el objeto que representa al usuario autenticado), que puede ser un objeto complejo como un `UserDetails`.
5. **`Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();`**: Aquí obtenemos los roles o permisos del usuario, representados como una colección de `GrantedAuthority`.
    
</Card>

<Card>

### ¿Dónde se Almacena el SecurityContext?

Por defecto, el `SecurityContextHolder` usa un mecanismo llamado **ThreadLocal** para almacenar el contexto de seguridad. **ThreadLocal** significa que el contexto es específico de un hilo (thread) de ejecución. Esto asegura que cada hilo tenga su propio `SecurityContext`, evitando que la información de un usuario se mezcle con la de otro.

#### Seguridad con ThreadLocal

Este enfoque es seguro siempre que te asegures de **limpiar el contexto** cuando se termine de procesar la solicitud del usuario. Spring Security lo maneja automáticamente mediante su `FilterChainProxy`, que se asegura de limpiar el contexto al final de cada solicitud.

### Modos de Almacenamiento en SecurityContextHolder

Existen diferentes modos en los que el `SecurityContextHolder` puede almacenar el contexto de seguridad. El modo predeterminado es **MODE_THREADLOCAL**, pero puedes configurarlo de otras maneras según las necesidades de tu aplicación.

1. **MODE_THREADLOCAL** (Predeterminado): Usa un `ThreadLocal` para que cada hilo tenga su propio contexto de seguridad.
   
2. **MODE_GLOBAL**: Este modo es útil en aplicaciones independientes (standalone), como aplicaciones de escritorio, donde todos los hilos deben compartir el mismo contexto de seguridad.
   
3. **MODE_INHERITABLETHREADLOCAL**: En este modo, cualquier hilo que sea generado por otro hilo hereda el contexto de seguridad del hilo principal. Esto es útil si quieres que los hilos hijos tengan la misma identidad de seguridad que el hilo que los creó.
    
<Card>

### ¿Cómo Cambiar el Modo?

Puedes cambiar el modo predeterminado de dos maneras:

1. **Propiedad del Sistema**: Puedes configurar una propiedad del sistema al iniciar la aplicación para cambiar el modo.
   
2. **Método Estático**: También puedes llamar a un método estático en el `SecurityContextHolder` para cambiar el modo.

</Card>

</Card>

<Card textAlign='center'>

![](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/securitycontextholder.png)

</Card>

El **SecurityContextHolder** es fundamental para Spring Security, ya que es el mecanismo central que almacena y gestiona la información sobre el usuario autenticado. Utiliza un enfoque flexible que se adapta a diferentes tipos de aplicaciones, ya sean web, standalone o multihilo. El uso de `ThreadLocal` asegura que el contexto de seguridad esté aislado por hilo, pero también puedes modificar el comportamiento para casos más específicos.
    
