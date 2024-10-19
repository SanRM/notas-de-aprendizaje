---
sidebar_position: 8
---


El **AbstractAuthenticationProcessingFilter** se utiliza como un filtro base para autenticar las credenciales de un usuario. Antes de que las credenciales puedan ser autenticadas, Spring Security generalmente solicita las credenciales mediante el **AuthenticationEntryPoint**.

Después, el **AbstractAuthenticationProcessingFilter** puede autenticar cualquier solicitud de autenticación que se le envíe.

<Card>

<Card textAlign='center'>

![](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/abstractauthenticationprocessingfilter.png)
    
</Card>

<Card>

**1**. Cuando el usuario envía sus credenciales, el **AbstractAuthenticationProcessingFilter** crea un objeto de **Authentication** a partir del **HttpServletRequest** para ser autenticado. El tipo de **Authentication** creado depende de la subclase de **AbstractAuthenticationProcessingFilter**. Por ejemplo, **UsernamePasswordAuthenticationFilter** crea un **UsernamePasswordAuthenticationToken** a partir de un nombre de usuario y una contraseña que se envían en el **HttpServletRequest**.
    
</Card>

<Card>

**2**. A continuación, el **Authentication** se pasa al **AuthenticationManager** para ser autenticado.
    
</Card>

<Card>

**3**. Si la autenticación falla, entonces ocurre un fallo.

- El **SecurityContextHolder** se limpia.
- Se invoca **RememberMeServices.loginFail**. Si "recordar sesión" no está configurado, este paso no hace nada. Ver el paquete **rememberme**.
- Se invoca el **AuthenticationFailureHandler**. Ver la interfaz **AuthenticationFailureHandler**.
    
</Card>

<Card>

**4**. Si la autenticación es exitosa, entonces ocurre un éxito.

- Se notifica a la **SessionAuthenticationStrategy** de un nuevo inicio de sesión. Ver la interfaz **SessionAuthenticationStrategy**.
- La **Authentication** se establece en el **SecurityContextHolder**. Más adelante, si necesitas guardar el **SecurityContext** para que pueda ser configurado automáticamente en futuras solicitudes, se debe invocar explícitamente el método **SecurityContextRepository#saveContext**. Ver la clase **SecurityContextHolderFilter**.
- Se invoca **RememberMeServices.loginSuccess**. Si "recordar sesión" no está configurado, este paso no hace nada. Ver el paquete **rememberme**.
- **ApplicationEventPublisher** publica un **InteractiveAuthenticationSuccessEvent**.
- Se invoca el **AuthenticationSuccessHandler**. Ver la interfaz **AuthenticationSuccessHandler**.
    
</Card>

</Card>


