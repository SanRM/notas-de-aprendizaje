---
sidebar_position: 5
---


**ProviderManager** es una implementación del **AuthenticationManager**, que es el componente responsable de gestionar la autenticación en Spring Security. Sin embargo, en lugar de manejar directamente la autenticación, **ProviderManager** delega este trabajo a una lista de instancias de **AuthenticationProvider**. 

<Card>

Cada **AuthenticationProvider** tiene la oportunidad de decidir si la autenticación debe:

1. **Ser exitosa**.
2. **Fallar**.
3. **Pasar la decisión a otro AuthenticationProvider** en la lista.
    
</Card>

<Card>

Si ninguno de los **AuthenticationProvider** configurados puede autenticar correctamente, la autenticación falla con una excepción llamada **ProviderNotFoundException**. Esta es una excepción especial que indica que el **ProviderManager** no fue configurado para soportar el tipo de autenticación que se le pasó.
    
<Card textAlign='center'>
    
![](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/providermanager.png)

</Card>

</Card>

<Card>

### ¿Cómo Funciona la Delegación en ProviderManager?

Cada **AuthenticationProvider** en la lista sabe cómo realizar un tipo específico de autenticación. Por ejemplo:

- Un **AuthenticationProvider** puede validar una combinación de nombre de usuario y contraseña.
- Otro **AuthenticationProvider** puede autenticar usando una afirmación SAML (un protocolo de autenticación).
  
Esto permite que cada **AuthenticationProvider** se encargue de un tipo específico de autenticación, pero todos los tipos están gestionados por un único **AuthenticationManager**, lo que simplifica la configuración y el manejo de la seguridad en la aplicación.
    
</Card>

<Card>

### ¿Qué Pasa si Ningún AuthenticationProvider Puede Autenticar?

En estos casos, **ProviderManager** puede tener configurado un **AuthenticationManager padre** (parent AuthenticationManager), que es consultado si ninguno de los **AuthenticationProvider** configurados puede autenticar correctamente. 

El **AuthenticationManager padre** puede ser cualquier tipo de **AuthenticationManager**, pero generalmente es otra instancia de **ProviderManager**. Este mecanismo es útil cuando tienes múltiples **ProviderManager** que comparten un mismo **AuthenticationManager padre**.

<Card textAlign='center'>

![](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/providermanager-parent.png)
    
</Card>

</Card>

<Card>

### Ejemplo de Uso: Múltiples ProviderManagers con un AuthenticationManager Padre

Es común tener varios **ProviderManager** que compartan un **AuthenticationManager padre**. Este tipo de configuración es común en escenarios donde tienes múltiples **SecurityFilterChain**, cada una con diferentes mecanismos de autenticación (por ejemplo, diferentes flujos de login), pero con algunos elementos de autenticación en común, manejados por el **AuthenticationManager padre**.
    
<Card textAlign='center'>

![](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/providermanagers-parent.png)
    
</Card>

</Card>

<Card>

### Seguridad y Sensibilidad de Credenciales

Por defecto, **ProviderManager** intenta borrar cualquier información sensible de credenciales (como contraseñas) después de una autenticación exitosa. Esto es para evitar que la información sensible permanezca en la sesión HTTP más tiempo del necesario. 

Sin embargo, esto puede causar problemas si usas un caché de objetos de usuario para mejorar el rendimiento en aplicaciones sin estado. Si el objeto de autenticación (como una instancia de **UserDetails**) tiene sus credenciales eliminadas, no será posible autenticar utilizando el valor en caché.

<Card>

### Soluciones a Este Problema

1. **Hacer una copia del objeto**: Una solución obvia es hacer una copia del objeto antes de eliminar las credenciales. Esto se puede hacer tanto en la implementación del caché como en el **AuthenticationProvider** que crea el objeto de autenticación.
   
2. **Deshabilitar la propiedad `eraseCredentialsAfterAuthentication`**: Otra solución es desactivar esta propiedad en **ProviderManager**, para que no borre las credenciales después de la autenticación.
    
</Card>
    
</Card>


**ProviderManager** es una herramienta poderosa en Spring Security para gestionar múltiples mecanismos de autenticación de una manera flexible. Al delegar el trabajo a diferentes **AuthenticationProviders**, puedes manejar una variedad de métodos de autenticación dentro de una sola aplicación. Además, al configurar un **AuthenticationManager padre**, puedes compartir lógica de autenticación común entre diferentes cadenas de seguridad (SecurityFilterChain).

Este enfoque modular permite que las aplicaciones sean más flexibles y fáciles de mantener. Si necesitas optimizar el rendimiento utilizando un caché, solo debes tener cuidado con la eliminación de credenciales sensibles y ajustar la configuración según sea necesario.
