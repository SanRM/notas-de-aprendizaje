---
sidebar_position: 6
---


Un **AuthenticationProvider** es una interfaz en Spring Security que realiza la autenticación (es decir, valida las credenciales de un usuario). Hay varios tipos de **AuthenticationProviders**, y cada uno puede manejar diferentes formas de autenticación. Por ejemplo, uno puede autenticar mediante nombre de usuario y contraseña, mientras que otro puede validar un token JWT (JSON Web Token).

<Card>

### Múltiples AuthenticationProviders en ProviderManager

Una característica clave de Spring Security es que puedes inyectar varios **AuthenticationProviders** en una clase llamada **ProviderManager**. El **ProviderManager** es responsable de coordinar la autenticación y delega el trabajo a los **AuthenticationProviders** que has configurado.
    
</Card>

<Card>

#### Proceso de Autenticación con Múltiples AuthenticationProviders

<Card>

1. **Configuración de Múltiples Providers**: Puedes tener diferentes **AuthenticationProviders** para distintos métodos de autenticación. Por ejemplo, puedes tener uno para autenticación de usuarios con nombre de usuario y contraseña (como **DaoAuthenticationProvider**) y otro para tokens JWT (como **JwtAuthenticationProvider**).
    
</Card>

<Card>

2. **ProviderManager Maneja la Solicitud**: Cuando un usuario intenta autenticarse, el **ProviderManager** recibe las credenciales o el token que el usuario ha enviado.
    
</Card>

<Card>

3. **Delegación a los Providers**: El **ProviderManager** prueba uno por uno los **AuthenticationProviders** que has configurado. Cada **AuthenticationProvider** verifica si puede manejar el tipo de autenticación que se ha solicitado.
   - Si un **AuthenticationProvider** puede manejar la autenticación, lo hará validando las credenciales o el token.
   - Si no puede, pasa la solicitud al siguiente **AuthenticationProvider** en la lista.
    
</Card>
    
</Card>

<Card>

#### Ejemplos de AuthenticationProviders

- **DaoAuthenticationProvider**: Este es un **AuthenticationProvider** que se utiliza cuando estás autenticando a usuarios con nombre de usuario y contraseña. Generalmente, este provider consulta una base de datos para verificar si las credenciales del usuario son correctas.
  
- **JwtAuthenticationProvider**: Este se utiliza para autenticación basada en tokens JWT. Un token JWT contiene información sobre el usuario (como su identidad y permisos), y este provider valida que el token sea correcto.
    
</Card>

El uso de múltiples **AuthenticationProviders** en Spring Security es una forma eficiente de manejar diferentes tipos de autenticación en tu aplicación. Gracias al **ProviderManager**, puedes coordinar fácilmente varios providers y asegurarte de que cada tipo de autenticación se maneje adecuadamente. ¡Espero que esta explicación detallada te haya aclarado el concepto! Si tienes más preguntas, no dudes en hacerlas.