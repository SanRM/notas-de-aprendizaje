---
sidebar_position: 3
---

### ¿Qué es AuthenticationManager?

El **AuthenticationManager** es una API clave en Spring Security que define cómo los filtros de seguridad realizan la autenticación de los usuarios. En pocas palabras, este componente es responsable de verificar las credenciales de un usuario y devolver un objeto de **Authentication** si la autenticación es exitosa.

<Card>

### Función de AuthenticationManager en el Proceso de Autenticación

1. **Autenticación con Filtros de Spring Security**: Los filtros de Spring Security (por ejemplo, el `UsernamePasswordAuthenticationFilter` para manejar inicios de sesión con usuario y contraseña) invocan el `AuthenticationManager` para autenticar al usuario. Este proceso típicamente incluye verificar que las credenciales (como el nombre de usuario y la contraseña) sean correctas.

2. **Objeto Authentication**: Si la autenticación es exitosa, el `AuthenticationManager` devuelve un objeto **Authentication**. Este objeto contiene información sobre el usuario autenticado, como su nombre de usuario, roles y detalles adicionales de seguridad.
   
3. **SecurityContextHolder**: Una vez que el `AuthenticationManager` valida las credenciales y devuelve el objeto `Authentication`, Spring Security guarda este objeto en el **SecurityContextHolder**. Este contexto se utiliza a lo largo de la aplicación para saber quién está autenticado y qué permisos tiene. Es como un "almacén" temporal de la autenticación en la sesión del usuario.
    
</Card>

<Card>

### ¿Qué pasa si no usas los Filtros de Spring Security?

Si no estás utilizando los filtros de Spring Security para manejar la autenticación (quizá porque tienes una lógica de autenticación personalizada o externa), no estás obligado a usar un `AuthenticationManager`. En este caso, puedes establecer el `SecurityContextHolder` directamente con un objeto `Authentication` de tu elección, aunque usar el `AuthenticationManager` sigue siendo recomendable por la estructura y seguridad que ofrece.
    
</Card>

### Resumen

- **AuthenticationManager**: Es el componente central que maneja la autenticación en Spring Security. Se encarga de verificar si las credenciales proporcionadas por el usuario son correctas y devuelve un objeto `Authentication` si la autenticación es exitosa.
- **ProviderManager**: La implementación más común de `AuthenticationManager`, que delega la autenticación a varios `AuthenticationProviders`, cada uno especializado en un tipo de autenticación.
- **SecurityContextHolder**: Guarda el objeto `Authentication` para que la aplicación sepa quién está autenticado en cualquier momento.

Con este sistema, Spring Security ofrece una arquitectura flexible y potente para manejar diferentes tipos de autenticación en aplicaciones web, facilitando la integración con diversas fuentes de credenciales, ya sea una base de datos, tokens, o servicios externos.
