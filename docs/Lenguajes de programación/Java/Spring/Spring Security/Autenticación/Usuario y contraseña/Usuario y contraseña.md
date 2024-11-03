
### Autenticación con Nombre de Usuario y Contraseña en Spring Security

Autenticar a un usuario validando su nombre de usuario y contraseña es uno de los métodos más comunes para asegurar aplicaciones web. **Spring Security** proporciona un soporte completo para este tipo de autenticación. Ahora, vamos a ver cómo configurarlo y cómo funciona.

<Card>

### Configuración Básica de Autenticación con Usuario y Contraseña

Aquí te muestro un ejemplo básico de cómo configurar la autenticación utilizando un nombre de usuario y contraseña en una aplicación Java con Spring Security:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests((authorize) -> authorize
				.anyRequest().authenticated() // Cualquier solicitud debe estar autenticada
			)
			.httpBasic(Customizer.withDefaults()) // Habilita la autenticación HTTP Basic
			.formLogin(Customizer.withDefaults()); // Habilita la autenticación con formulario de inicio de sesión

		return http.build(); // Devuelve la configuración de la cadena de seguridad
	}

	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails userDetails = User.withDefaultPasswordEncoder() // Crea un usuario con contraseña codificada
			.username("user") // Nombre de usuario
			.password("password") // Contraseña
			.roles("USER") // Asigna el rol de usuario
			.build(); // Construye el objeto UserDetails

		return new InMemoryUserDetailsManager(userDetails); // Usa una base de datos de usuarios en memoria
	}

}
```

<Card>

#### Desglose de la Configuración

1. **Anotaciones:**
   - **@Configuration**: Indica que esta clase contiene la configuración de la aplicación.
   - **@EnableWebSecurity**: Habilita la seguridad web con Spring Security.

2. **`SecurityFilterChain`**:
   - Esta clase define la **Cadena de Filtros de Seguridad** (SecurityFilterChain) que se encarga de manejar las solicitudes HTTP. 
   - **`http.authorizeHttpRequests()`**: Configura las reglas de autorización. En este caso, cualquier solicitud debe estar autenticada (`anyRequest().authenticated()`).
   - **`httpBasic()`**: Habilita la autenticación básica HTTP.
   - **`formLogin()`**: Habilita el inicio de sesión a través de un formulario (una página donde el usuario puede ingresar sus credenciales).

3. **`UserDetailsService`**:
   - **UserDetails**: Es una interfaz de Spring Security que contiene la información básica del usuario, como nombre de usuario, contraseña y roles.
   - **`User.withDefaultPasswordEncoder()`**: Crea un usuario con una contraseña codificada usando un codificador de contraseñas básico (este enfoque solo es adecuado para pruebas).
   - **`new InMemoryUserDetailsManager()`**: Es una implementación que guarda los usuarios en la memoria. Es decir, los usuarios no se almacenan en una base de datos externa, sino en la memoria de la aplicación, lo cual es útil para entornos de prueba o aplicaciones pequeñas.


</Card>

    
</Card>


<Card>
	
### ¿Qué es el AuthenticationManager?

- Presiona acá para ir a la explicación detallada de [AuthenticationManager](../Arquitectura%20de%20la%20autenticación/AuthenticationManager.md).

En resumen, el **AuthenticationManager** es un componente fundamental en Spring Security que maneja el proceso de autenticación. Este se encarga de validar las credenciales (como el nombre de usuario y la contraseña) y devolver una instancia de **Authentication** si la autenticación es exitosa. Si falla, lanzará una excepción. Normalmente, este proceso está oculto cuando usas configuraciones predeterminadas como el inicio de sesión con formularios, pero cuando necesitas una autenticación personalizada (como un API REST), puedes crear tu propio `AuthenticationManager`.

### Publicar un bean de AuthenticationManager

A veces es necesario exponer o **publicar un bean de `AuthenticationManager`** para utilizarlo en otros componentes de tu aplicación, como un servicio (`@Service`) o un controlador (`@RestController`), en casos donde quieres manejar manualmente la autenticación (por ejemplo, autenticando usuarios a través de un API en lugar de usar un formulario HTML).

#### Configuración para Publicar el AuthenticationManager

Aquí te muestro cómo publicar un `AuthenticationManager` usando una clase de configuración en Spring Security.

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests((authorize) -> authorize
				.requestMatchers("/login").permitAll()  // Permitir acceso a la URL /login sin autenticación
				.anyRequest().authenticated()           // Requerir autenticación para cualquier otra URL
			);

		return http.build();  // Devuelve la cadena de filtros de seguridad configurada
	}

	@Bean
	public AuthenticationManager authenticationManager(
			UserDetailsService userDetailsService,
			PasswordEncoder passwordEncoder) {
		// Crear un proveedor de autenticación basado en DAO (Data Access Object)
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService);  // Establece el servicio de usuarios
		authenticationProvider.setPasswordEncoder(passwordEncoder);        // Establece el codificador de contraseñas

		// Devuelve un AuthenticationManager que gestiona autenticación usando ese proveedor
		return new ProviderManager(authenticationProvider);
	}

	@Bean
	public UserDetailsService userDetailsService() {
		// Crear un usuario en memoria con nombre de usuario y contraseña predeterminados
		UserDetails userDetails = User.withDefaultPasswordEncoder()
			.username("user")
			.password("password")
			.roles("USER")
			.build();

		// Devuelve un servicio de gestión de usuarios en memoria
		return new InMemoryUserDetailsManager(userDetails);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		// Devuelve un codificador de contraseñas que puede delegar entre diferentes estrategias
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}

}
```

#### Explicación Detallada

1. **Clase de Configuración** (`@Configuration`) y Habilitación de Seguridad Web (`@EnableWebSecurity`):
   - Define una clase de configuración que será gestionada por Spring y habilita la seguridad web.

2. **Cadena de Filtros de Seguridad** (`securityFilterChain`):
   - Configura los filtros de seguridad, permitiendo que la URL `/login` sea accesible para todos sin autenticación (`permitAll()`), mientras que cualquier otra solicitud necesita autenticación (`anyRequest().authenticated()`).
   
3. **Bean de `AuthenticationManager`**:
   - Este método publica un bean de `AuthenticationManager` que se puede usar en otros componentes.
   - Usa un **`DaoAuthenticationProvider`**, que es un proveedor que se encarga de autenticar usuarios basándose en los detalles del usuario (nombre de usuario, contraseña) que se cargan desde un `UserDetailsService`.
   - `UserDetailsService` y `PasswordEncoder` son inyectados en el `DaoAuthenticationProvider`. El `UserDetailsService` gestiona los detalles de los usuarios y el `PasswordEncoder` se usa para verificar las contraseñas de manera segura.

4. **Bean de `UserDetailsService`**:
   - Se define un usuario en memoria (`InMemoryUserDetailsManager`) con nombre de usuario "user" y contraseña "password". Esto se usa para realizar pruebas de autenticación.
   
5. **Bean de `PasswordEncoder`**:
   - Un codificador de contraseñas que permite delegar diferentes estrategias de codificación (esto es importante para manejar la seguridad de las contraseñas de forma adecuada).

### Uso del AuthenticationManager en un RestController

Una vez que has configurado y publicado el `AuthenticationManager`, puedes utilizarlo en un **RestController** para autenticar usuarios a través de una API REST. Aquí te muestro cómo hacerlo:

```java
@RestController
public class LoginController {

	private final AuthenticationManager authenticationManager;

	// El AuthenticationManager es inyectado en el controlador
	public LoginController(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@PostMapping("/login")
	public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest) {
		// Crea un token de autenticación con el nombre de usuario y contraseña proporcionados
		Authentication authenticationRequest =
			UsernamePasswordAuthenticationToken.unauthenticated(
				loginRequest.username(), loginRequest.password());
		
		// Realiza la autenticación usando el AuthenticationManager
		Authentication authenticationResponse =
			this.authenticationManager.authenticate(authenticationRequest);
		
		// Aquí deberías guardar el usuario autenticado en el SecurityContext si es necesario
		// ...

		// Retorna una respuesta vacía con estado 200 OK si la autenticación es exitosa
		return ResponseEntity.ok().build();
	}

	// Clase que representa la solicitud de inicio de sesión
	public record LoginRequest(String username, String password) {
	}

}
```

#### Explicación Detallada

1. **Inyección del `AuthenticationManager`**:
   - El `AuthenticationManager` se inyecta en el `LoginController` a través del constructor. Esto permite que el controlador REST use este componente para autenticar las solicitudes.

2. **Método `login`**:
   - Este método maneja las solicitudes de inicio de sesión en la URL `/login`.
   - Se crea un token de autenticación sin autenticación (`unauthenticated`) usando el nombre de usuario y la contraseña proporcionados por el cliente (que están en el cuerpo de la solicitud `@RequestBody`).
   - Luego, el token se pasa al `AuthenticationManager`, que intenta autenticar al usuario. Si las credenciales son correctas, el usuario es autenticado.

3. **Guardar al Usuario Autenticado**:
   - Si es necesario, puedes guardar el usuario autenticado en el **SecurityContextRepository**. Si usas sesiones HTTP, puedes utilizar un `HttpSessionSecurityContextRepository` para almacenar el contexto de seguridad entre diferentes solicitudes.

### Conclusión

Publicar un `AuthenticationManager` en Spring Security te permite tener control total sobre el proceso de autenticación, lo cual es especialmente útil cuando necesitas implementar autenticación personalizada, como en APIs REST. Puedes reutilizar este `AuthenticationManager` en diferentes componentes y adaptarlo a tus necesidades específicas, como manejar credenciales almacenadas en memoria, bases de datos, o servicios externos.

</Card>

