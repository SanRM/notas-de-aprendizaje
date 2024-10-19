---
sidebar_position: 2
---

### ¿Qué es?

La interfaz **Authentication** en Spring Security cumple dos funciones principales:

1. **Proveer las credenciales del usuario para autenticarlo**: Es utilizada como entrada para el **AuthenticationManager**, que se encarga de validar si las credenciales proporcionadas (como el usuario y la contraseña) son correctas. Cuando se usa en este contexto, el método `isAuthenticated()` devolverá `false`, ya que aún no se ha verificado si el usuario es válido.

2. **Representar al usuario autenticado actualmente**: Después de que un usuario ha sido autenticado exitosamente, puedes obtener los detalles de su autenticación a través del **SecurityContext** (que es donde Spring Security almacena la información de seguridad del usuario durante la sesión).

<Card>

### ¿Qué Contiene la Autenticación?

La interfaz **Authentication** almacena varios detalles importantes sobre el proceso de autenticación. Vamos a ver cada uno:

<Card>

1. **principal (principal)**:
   - **¿Qué es?**: El `principal` identifica al usuario que está intentando autenticarse o que ya ha sido autenticado.
   - **Ejemplo típico**: Cuando usas un nombre de usuario y una contraseña para autenticarte, el `principal` suele ser una instancia de **UserDetails** (una clase que representa al usuario en Spring Security).
   - **Función**: Su función es proporcionar información clave sobre el usuario, como su nombre de usuario, si está habilitado, y otros detalles relevantes.
    
</Card>

<Card>

2. **credentials (credenciales)**:
   - **¿Qué es?**: Las `credentials` son típicamente la contraseña que el usuario ha proporcionado para autenticarse.
   - **¿Qué sucede con las credenciales?**: En muchos casos, después de que un usuario es autenticado, estas credenciales se borran (por ejemplo, la contraseña se "limpia" de la memoria) para evitar riesgos de seguridad como que la contraseña sea expuesta accidentalmente.
   - **Motivo**: Esto se hace para proteger la confidencialidad de las credenciales, ya que no es necesario mantenerlas una vez que el usuario ha sido autenticado.
    
</Card>

<Card>

3. **authorities (autoridades)**:
   - **¿Qué es?**: Las `authorities` son una colección de permisos de alto nivel que se le han concedido al usuario. En Spring Security, estas son instancias de la interfaz **GrantedAuthority**.
   - **Ejemplos de Authorities**:
     - **Roles**: Un ejemplo de autoridad es un "rol" (como `ROLE_ADMIN` o `ROLE_USER`), que define un conjunto de permisos que el usuario tiene en la aplicación.
     - **Scopes**: Otro ejemplo puede ser un "scope" (como `SCOPE_read` o `SCOPE_write`), que define el nivel de acceso a ciertos recursos o funciones.
   - **Función**: Las autoridades permiten que la aplicación decida qué acciones o recursos están disponibles para el usuario autenticado.
    
</Card>
    
</Card>

<Card>

### Cómo Funciona en el Ciclo de Autenticación

1. **Ingreso de Credenciales**: El usuario proporciona su nombre de usuario y contraseña.
   
2. **Creación del Objeto Authentication**: Se crea una instancia de **Authentication** con esas credenciales y se pasa al **AuthenticationManager** para que las valide. En este punto, el método `isAuthenticated()` devuelve `false` porque el usuario aún no ha sido autenticado.

3. **Validación por el AuthenticationManager**: El **AuthenticationManager** verifica las credenciales comparándolas con los datos almacenados (por ejemplo, los datos de un usuario en una base de datos).

4. **Autenticación Exitosa**: Si las credenciales son válidas, el **AuthenticationManager** devuelve un objeto **Authentication** actualizado, donde el `isAuthenticated()` ahora devuelve `true` y se almacenan los detalles del usuario autenticado (como el `principal`, los `authorities`, etc.).

5. **Acceso al Usuario Autenticado**: Una vez autenticado, el objeto **Authentication** se guarda en el **SecurityContext** y puedes obtenerlo en cualquier parte de la aplicación para verificar quién está autenticado y qué permisos tiene.
    
</Card>

La interfaz **Authentication** es esencial en Spring Security porque permite tanto el manejo de las credenciales del usuario durante la autenticación como la representación del usuario autenticado a lo largo de su sesión. Incluye información clave como el `principal` (el usuario), las `credentials` (generalmente la contraseña), y las `authorities` (los permisos o roles del usuario). Todo este mecanismo es fundamental para garantizar que solo los usuarios autorizados tengan acceso a las funciones correctas de la aplicación.