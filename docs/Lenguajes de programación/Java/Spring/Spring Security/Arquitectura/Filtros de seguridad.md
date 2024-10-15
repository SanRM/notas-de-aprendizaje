---
title: Filtros de seguridad
sidebar_position: 5
---

    
Los **Security Filters** son filtros que se añaden a la **FilterChainProxy** (una clase que maneja la cadena de filtros de seguridad en Spring) utilizando la API **SecurityFilterChain**. Estos filtros tienen diferentes responsabilidades relacionadas con la seguridad, como:

- **Autenticación**: Verificar la identidad de un usuario.
- **Autorización**: Verificar si un usuario tiene los permisos adecuados para realizar una acción.
- **Protección contra exploits**: Evitar ataques comunes, como CSRF (Cross-Site Request Forgery), que intentan engañar al usuario para realizar acciones no deseadas.

<Card>



### Orden de Ejecución de los Filtros

Los filtros de seguridad se ejecutan en un **orden específico** dentro de la cadena de filtros para garantizar que cada filtro sea invocado en el momento correcto. Por ejemplo, el filtro que maneja la autenticación (confirmar la identidad del usuario) debe ejecutarse **antes** del filtro que maneja la autorización (verificar si el usuario tiene los permisos para realizar ciertas acciones). Aunque normalmente no necesitas preocuparte por el orden exacto de los filtros de Spring Security, a veces es útil conocerlo. Para saber más sobre el orden, puedes consultar el código de `FilterOrderRegistration`.

</Card>

<Card>


### Ejemplo de Configuración de Seguridad

Veamos un ejemplo de configuración de seguridad en Spring para ilustrar cómo se añaden estos filtros y cuál es su orden de ejecución:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(Customizer.withDefaults()) //1. Protección contra CSRF
            .authorizeHttpRequests(authorize -> authorize
                .anyRequest().authenticated() //4. Cualquier solicitud debe estar autenticada
            )
            .httpBasic(Customizer.withDefaults()) //3. Autenticación básica HTTP
            .formLogin(Customizer.withDefaults()); //2. Login mediante formulario
        return http.build();
    }
}
```
    
</Card>

<Card>

### Orden de los Filtros en la Configuración

En la configuración anterior, los filtros se añaden en un orden específico. A continuación, explico cada filtro y cómo se agrega:

1. **CsrfFilter**: Este filtro es agregado por la configuración `http.csrf()`. Su objetivo es proteger contra ataques CSRF. Se ejecuta primero, ya que es importante proteger las solicitudes antes de cualquier otra lógica de autenticación o autorización.

:::info
El CSRF (Cross-Site Request Forgery, en español Falsificación de Petición en Sitios Cruzados) es un tipo de ataque en aplicaciones web que explota la confianza que una aplicación tiene en la identidad del usuario. En este ataque, un atacante engaña al usuario autenticado para que realice acciones no deseadas en un sitio web en el que el usuario tiene privilegios.
:::

2. **UsernamePasswordAuthenticationFilter**: Este filtro se añade por la configuración `http.formLogin()`. Se utiliza para manejar la autenticación mediante formularios (cuando un usuario ingresa su nombre de usuario y contraseña). Se ejecuta **después** del `CsrfFilter` para autenticar la solicitud.

3. **BasicAuthenticationFilter**: Este filtro se añade por la configuración `http.httpBasic()`. Maneja la autenticación básica HTTP, donde las credenciales se pasan en las cabeceras de la solicitud. Se ejecuta después del `UsernamePasswordAuthenticationFilter`.

4. **AuthorizationFilter**: Este filtro se añade por la configuración `http.authorizeHttpRequests()`. Una vez que la solicitud ha sido autenticada, este filtro se encarga de verificar si el usuario tiene permisos para realizar la acción solicitada. Se ejecuta **después** de los filtros de autenticación.

### Explicación del Proceso de los Filtros

Siguiendo el orden descrito, aquí tienes una visión general de cómo se invocan los filtros:

1. **Protección contra CSRF**: Primero se ejecuta el `CsrfFilter`, que protege contra ataques de tipo CSRF. Este filtro verifica si las solicitudes POST, PUT, DELETE, etc., contienen un token CSRF válido, lo cual evita que los atacantes realicen acciones maliciosas en nombre del usuario.

2. **Autenticación**: Luego se ejecutan los filtros de autenticación, como el `UsernamePasswordAuthenticationFilter` o el `BasicAuthenticationFilter`. Estos filtros verifican la identidad del usuario. Por ejemplo, si un usuario envía sus credenciales (nombre de usuario y contraseña), estos filtros las validan.

3. **Autorización**: Finalmente, se ejecuta el `AuthorizationFilter`. Este filtro verifica si el usuario autenticado tiene permiso para acceder al recurso o realizar la acción solicitada. Si el usuario no tiene los permisos adecuados, la solicitud será rechazada.

:::info
Es posible que haya otros filtros que no se mencionan específicamente en esta configuración. Si deseas ver la lista completa de filtros que se invocan para una solicitud particular, puedes imprimirlos en los logs. Esto es útil para depurar y entender mejor el comportamiento de seguridad en tu aplicación.
:::



</Card>
