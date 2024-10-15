---

title: 1 - Usuario y contraseña 

---

## Cómo funciona en Spring Security

Spring Security es una herramienta que ayuda a que las aplicaciones sean más seguras, uno de sus trabajos es verificar que el nombre de usuario y la contraseña sean correctos. 

    - Aquí veremos un ejemplo básico de cómo configurar este tipo de autenticación.

<Card>
    

### Ejemplo simple de Autenticación con Nombre de Usuario y Contraseña

Este es un ejemplo básico de cómo se puede configurar esta autenticación en **Spring Security** usando código en **Java**.

```java
@Configuration  // Indica que estamos configurando algo
@EnableWebSecurity  // Activa las características de seguridad de Spring Security
public class SecurityConfig {

    @Bean  // Este método devuelve un objeto que otros métodos pueden usar
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authorize) -> authorize
                .anyRequest().authenticated()  // Cualquier solicitud debe estar autenticada (verificar nombre de usuario/contraseña)
            )
            .httpBasic(Customizer.withDefaults())  // Habilita la autenticación HTTP básica
            .formLogin(Customizer.withDefaults());  // Habilita la autenticación a través de un formulario (usuario/contraseña)

        return http.build();  // Devuelve la configuración de seguridad
    }

    @Bean  // Este método gestiona los usuarios
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.withDefaultPasswordEncoder()  // Crea un usuario con contraseña codificada
            .username("user")  // Nombre de usuario
            .password("password")  // Contraseña
            .roles("USER")  // Rol del usuario
            .build();

        return new InMemoryUserDetailsManager(userDetails);  // Los detalles del usuario se guardan en la memoria (solo mientras la app está en ejecución)
    }
}
```

### Explicación paso a paso:
1. **@Configuration y @EnableWebSecurity**: Estas etiquetas indican que vamos a configurar la seguridad de la aplicación.
2. **authorizeHttpRequests**: Aquí se indica que cualquier solicitud a la aplicación necesita que el usuario esté autenticado.
3. **httpBasic() y formLogin()**: Estas dos líneas habilitan dos maneras de autenticarse:
   - **httpBasic()**: Es una forma sencilla donde el navegador te pedirá tu usuario y contraseña con una ventana emergente.
   - **formLogin()**: Esto genera un formulario de login más amigable, como los que vemos en las aplicaciones web.
4. **UserDetailsService**: Define un usuario (con el nombre de usuario "user" y contraseña "password") que se almacena en la memoria temporalmente.

</Card>

<Card>
    

### ¿Cómo puedo personalizar la Autenticación?

Spring Security te permite hacer mucho más que solo manejar usuarios en memoria. A continuación, veremos diferentes formas de personalizar la autenticación según tus necesidades.


## Otras formas de manejar la autenticación

<Card color='blue'>

### 1. **Gestionar usuarios en memoria**
El ejemplo que vimos guarda los usuarios en la memoria. Esto es útil para pruebas, pero no para aplicaciones en producción.

</Card>

<Card color='blue'>

### 2. **Gestionar usuarios en una base de datos**
Si prefieres almacenar los usuarios en una base de datos (lo más común en aplicaciones reales), puedes configurar Spring Security para que verifique las credenciales de la base de datos en lugar de la memoria.
    
</Card>

<Card color='red'>
    

### Publicar un AuthenticationManager para autenticación personalizada

**AuthenticationManager** es el encargado de verificar si las credenciales (nombre de usuario/contraseña) son correctas. A veces, necesitas configurar tu propio **AuthenticationManager** para casos más avanzados, como autenticación en una API REST en lugar de un formulario de login.

#### Ejemplo de configuración para autenticación personalizada:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/login").permitAll()  // Permitir acceso sin autenticación a la página de login
                .anyRequest().authenticated()  // Cualquier otra solicitud debe estar autenticada
            );

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();  // Proveedor que maneja la autenticación
        authenticationProvider.setUserDetailsService(userDetailsService);  // Usar el servicio de detalles del usuario que definimos
        authenticationProvider.setPasswordEncoder(passwordEncoder);  // Codificador de contraseñas

        return new ProviderManager(authenticationProvider);  // Devuelve un AuthenticationManager personalizado
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(userDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();  // Codifica las contraseñas de manera segura
    }

}
```

En este caso:
- Configuramos un **AuthenticationManager** personalizado.
- Creamos un controlador REST (`@RestController`) que puede manejar las solicitudes de login de una API.


</Card>

<Card color='red'>

### Crear un controlador REST para manejar la autenticación

A veces no quieres que los usuarios inicien sesión a través de un formulario, sino que quieres manejar todo a través de una API (algo muy común en aplicaciones móviles).

#### Ejemplo de un controlador REST para manejar el login:

```java
@RestController
public class LoginController {

    private final AuthenticationManager authenticationManager;

    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest) {
        Authentication authenticationRequest =
            UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.username(), loginRequest.password());
        Authentication authenticationResponse =
            this.authenticationManager.authenticate(authenticationRequest);
        // Aquí podrías manejar lo que pasa después de autenticar correctamente
        return ResponseEntity.ok().build();
    }

    public record LoginRequest(String username, String password) {
    }
}
```

Aquí:
- El usuario envía su nombre de usuario y contraseña a través de una solicitud POST.
- El controlador verifica las credenciales usando el **AuthenticationManager** y responde si todo está bien.

</Card>

<Card color='orange'>


## Personalizar el AuthenticationManager

Spring Security normalmente crea su propio **AuthenticationManager**, pero en algunos casos quieres personalizarlo. Por ejemplo, podrías necesitar que el sistema no borre las credenciales después de autenticar, lo que es útil si necesitas usar las credenciales para algo más tarde.

#### Ejemplo de cómo personalizar el AuthenticationManager:

```java
@Bean
public AuthenticationManager authenticationManager(
        UserDetailsService userDetailsService,
        PasswordEncoder passwordEncoder) {
    DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
    authenticationProvider.setUserDetailsService(userDetailsService);
    authenticationProvider.setPasswordEncoder(passwordEncoder);

    ProviderManager providerManager = new ProviderManager(authenticationProvider);
    providerManager.setEraseCredentialsAfterAuthentication(false);  // Desactiva el borrado de credenciales

    return providerManager;
}
```

</Card>

</Card>


## Conclusión

La autenticación con nombre de usuario y contraseña es el método más común y sencillo. Spring Security te ofrece mucha flexibilidad para personalizar cómo gestionas a los usuarios y la autenticación. Puedes:
- Guardar usuarios en la memoria, bases de datos o incluso en LDAP (Lightweight Directory Access Protocol).
- Configurar autenticación básica o a través de formularios.
- Personalizar cómo se gestionan las credenciales a través de un **AuthenticationManager**.
