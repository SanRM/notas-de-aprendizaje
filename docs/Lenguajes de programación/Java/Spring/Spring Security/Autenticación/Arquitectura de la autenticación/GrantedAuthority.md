---
sidebar_position: 4
---

En términos simples, una **GrantedAuthority** es un permiso o privilegio que se le otorga a un usuario dentro del sistema de seguridad. Representa lo que un usuario tiene permitido hacer en la aplicación. Un ejemplo típico de una **GrantedAuthority** sería un rol como `ROLE_ADMINISTRATOR` o `ROLE_USER`. Estas son autorizaciones de alto nivel que se asignan al usuario.

<Card>

### ¿Cómo funciona GrantedAuthority en Spring Security?

En Spring Security, las **GrantedAuthorities** se utilizan para definir los permisos de un usuario. Estos permisos determinan qué acciones puede realizar un usuario en el sistema. Las **GrantedAuthorities** son utilizadas por diferentes componentes de Spring Security para tomar decisiones de autorización, como si un usuario puede acceder a un recurso web, ejecutar un método o interactuar con un objeto específico del dominio.
    
</Card>

<Card>

#### Ejemplo de GrantedAuthority

Imagina que tienes un sistema donde los usuarios pueden tener diferentes roles. Un administrador podría tener el rol `ROLE_ADMIN`, mientras que un empleado de recursos humanos podría tener el rol `ROLE_HR_SUPERVISOR`. Estos roles son ejemplos de **GrantedAuthorities**, que describen los permisos de alto nivel del usuario.
    
</Card>

<Card>

### Obteniendo las GrantedAuthorities

Puedes obtener las **GrantedAuthorities** que tiene un usuario a través del método `getAuthorities()` que está disponible en el objeto de autenticación (**Authentication**). Este método devuelve una **Collection** (lista o conjunto) de objetos **GrantedAuthority**. Por ejemplo, después de que un usuario se autentica, puedes llamar a `Authentication.getAuthorities()` para ver qué roles o permisos tiene asignados ese usuario.

Aquí tienes un ejemplo del uso del método `getAuthorities()`:

```java
Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
```

Este código te da una lista de los permisos que tiene el usuario autenticado.

</Card>
    
<Card>

### ¿Qué es un Principal?

Un **Principal** es el usuario que ha sido autenticado en la aplicación. Las **GrantedAuthorities** son permisos que se le asignan a este **Principal**, permitiendo que el sistema de seguridad determine qué puede hacer ese usuario.
    
</Card>

<Card>

### ¿Para qué se usan las GrantedAuthorities?

Las **GrantedAuthorities** se utilizan en varias áreas de seguridad dentro de una aplicación Spring:

1. **Autorización Web**: Para controlar qué usuarios pueden acceder a ciertas rutas o páginas en la aplicación web.
   
2. **Autorización de Métodos**: Para determinar si un usuario puede ejecutar un método en el código, por ejemplo, usando anotaciones como `@PreAuthorize` o `@Secured`.
   
3. **Autorización de Objetos del Dominio**: En algunos casos, las **GrantedAuthorities** se utilizan para definir si un usuario puede interactuar con ciertos objetos en el sistema, aunque para eso existen mecanismos más específicos.
    
</Card>

<Card>

### Carga de las GrantedAuthorities

Cuando un usuario se autentica en la aplicación usando, por ejemplo, nombre de usuario y contraseña, las **GrantedAuthorities** suelen cargarse utilizando un servicio llamado **UserDetailsService**. Este servicio se encarga de recuperar los detalles del usuario desde una base de datos o cualquier otro sistema de almacenamiento, incluyendo sus permisos o roles.

#### Ejemplo de UserDetailsService cargando GrantedAuthorities:

```java
@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // Supongamos que obtenemos el usuario desde la base de datos
    User user = userRepository.findByUsername(username);
    
    // Cargar los roles del usuario y convertirlos en GrantedAuthorities
    List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.getName()))
        .collect(Collectors.toList());

    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
}
```

En este ejemplo, los roles del usuario se convierten en **GrantedAuthorities** para que puedan ser utilizados por Spring Security.
    
</Card>

<Card>

### ¿Qué tipo de permisos representan las GrantedAuthorities?

Generalmente, las **GrantedAuthorities** representan permisos **a nivel de aplicación**. Esto significa que no se asocian con objetos específicos del dominio. Por ejemplo, sería poco práctico tener una **GrantedAuthority** para "ver el empleado número 54", porque podrías tener miles de empleados, y eso consumiría mucha memoria y ralentizaría la autenticación.

En lugar de eso, Spring Security recomienda utilizar mecanismos más especializados para manejar los permisos específicos de objetos, como las capacidades de seguridad para objetos de dominio de Spring.
    
</Card>

<Card>

### Resumen de los puntos clave

- **GrantedAuthority** representa permisos de alto nivel, como roles (`ROLE_ADMIN`, `ROLE_USER`).
- Puedes obtener las **GrantedAuthorities** de un usuario autenticado a través de `Authentication.getAuthorities()`.
- Son utilizadas en varias partes del sistema de Spring Security, como la autorización de rutas web, métodos y objetos de dominio.
- Generalmente se cargan a través de un servicio como **UserDetailsService** y se asocian a nivel de aplicación.
- No se utilizan para permisos de objetos específicos, como ver o modificar un único registro en la base de datos, para lo cual se recomienda un enfoque más eficiente.

Las **GrantedAuthorities** son fundamentales para gestionar los permisos en una aplicación Spring Security. Permiten asignar roles y otros permisos a los usuarios de una manera eficiente y escalable, asegurando que el sistema pueda controlar quién puede hacer qué en la aplicación. ¡Espero que esta explicación haya sido clara y completa! Si tienes más preguntas o necesitas más detalles, ¡estoy aquí para ayudarte!
    
</Card>