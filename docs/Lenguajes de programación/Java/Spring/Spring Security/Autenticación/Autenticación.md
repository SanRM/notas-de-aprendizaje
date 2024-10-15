
### ¿Qué es la Autenticación?
Imagina que cada vez que entras a un edificio, tienes que mostrar tu identificación en la puerta. Esa identificación es la **autenticación**. En el mundo de las aplicaciones, la autenticación es el proceso mediante el cual la aplicación verifica quién eres. La idea es asegurarse de que solo las personas correctas puedan acceder a ciertas partes de la aplicación.


<Card>
  

### Arquitectura de Autenticación en Spring Security
Spring Security tiene una arquitectura flexible para manejar la autenticación. Puedes pensar en ella como una gran fábrica de autenticaciones que decide cómo y cuándo verificar quién eres, dependiendo de la situación.

</Card>

<Card>

## Mecanismos de Autenticación

Ahora vamos a ver algunas formas en las que Spring Security puede autenticar a los usuarios, como pedir una contraseña o usar un sistema externo como Google o GitHub.

<Card color="cyan">

### 1. **Nombre de Usuario y Contraseña**
Este es el método más común y probablemente el más fácil de entender. Es como cuando inicias sesión en una red social con tu nombre de usuario y tu contraseña.

- **¿Cómo funciona?**  
  El sistema te pedirá que ingreses tu nombre de usuario y contraseña. Luego, verifica en su base de datos si la combinación es correcta. Si lo es, te deja entrar.

#### Ejemplo:
Cuando configuras Spring Security para este tipo de autenticación, básicamente haces algo como esto:
```java
http
    .authorizeHttpRequests()
    .anyRequest().authenticated()
    .and()
    .formLogin();  // Esto habilita un formulario de login (usuario/contraseña)
```
Aquí, Spring Security se encargará de todo: te mostrará un formulario para ingresar tu usuario y contraseña y verificará si son correctos.

</Card>

<Card color="pink">

### 2. **OAuth 2.0 Login**
Ahora vamos a algo un poco más avanzado, pero no te preocupes, lo explicaremos de forma simple. **OAuth 2.0** es un protocolo que permite que te autentiques usando otros servicios como Google, Facebook o GitHub. Es como decirle a Google: "Confirma que soy yo" y luego Google le dice a la aplicación: "Sí, él es Santi, puedes dejarlo entrar".

- **¿Cómo funciona?**  
  En lugar de pedirte una contraseña, te redirige a Google (o cualquier otro proveedor), donde inicias sesión. Luego, el proveedor de OAuth 2.0 confirma tu identidad con la aplicación y te deja entrar.

#### Ejemplo:
```java
http
    .oauth2Login()  // Habilita OAuth 2.0 Login
    .loginPage("/custom-login");  // Redirige al proveedor de autenticación
```

</Card>

<Card color="yellow">

### 3. **SAML 2.0 Login**
Este es otro protocolo para autenticarse, pero más usado en empresas. Piensa en SAML como una forma de decir: "Yo pertenezco a esta empresa y aquí está mi pase de entrada". Con **SAML**, puedes iniciar sesión en una aplicación de empresa sin tener que recordar muchas contraseñas.

- **¿Cómo funciona?**  
  En lugar de ingresar una contraseña en cada aplicación de la empresa, inicias sesión en un lugar centralizado, y luego esa información se comparte con otras aplicaciones que confían en esa autenticación.

</Card>

<Card color="red">

### 4. **CAS (Central Authentication Server)**
CAS es similar a SAML en el sentido de que te permite iniciar sesión en varias aplicaciones usando una sola autenticación. La diferencia es que **CAS** es una tecnología más específica usada en muchas universidades y entornos académicos.

- **¿Cómo funciona?**  
  Inicias sesión en un servidor central (el **Central Authentication Server**) y luego, otras aplicaciones confían en ese servidor para verificar quién eres. Es como si el guardia de una puerta principal verificara quién eres y todas las puertas internas lo creyeran sin pedir más comprobaciones.

</Card>

<Card color="blue">

### 5. **Remember Me (Recuérdame)**
¿Alguna vez has marcado una casilla que dice "Recuérdame" al iniciar sesión en un sitio web? Con esta opción, el sitio web recuerda quién eres incluso después de cerrar la sesión o apagar el navegador.

- **¿Cómo funciona?**  
  Cuando inicias sesión y marcas "Recuérdame", la aplicación guarda un pequeño "token" (una especie de identificación secreta) en tu navegador. La próxima vez que vuelvas, la aplicación usa ese token para recordarte sin necesidad de que vuelvas a ingresar tu contraseña.

#### Ejemplo:
```java
http
    .rememberMe()  // Habilita la opción de "Recuérdame"
    .tokenValiditySeconds(86400);  // El token será válido por 1 día
```

</Card>

<Card color="green">

### 6. **JAAS (Java Authentication and Authorization Service)**
JAAS es una forma de autenticación que existe dentro del ecosistema de Java. Es más usada en aplicaciones empresariales que necesitan un sistema robusto y flexible para manejar tanto la autenticación como la autorización (verificar qué puede hacer cada usuario).

- **¿Cómo funciona?**  
  JAAS trabaja a través de módulos que manejan diferentes tipos de autenticación. Por ejemplo, puedes tener un módulo que verifique usuarios y contraseñas, otro que maneje certificados digitales, y así sucesivamente.

</Card>

<Card color="darkBlue">

### 7. **Pre-Authentication (Autenticación Previa)**
A veces, una aplicación no se encarga de la autenticación por sí sola. Imagina que trabajas en una empresa donde ya inicias sesión una vez en un sistema central, como una intranet, y luego todas las demás aplicaciones confían en esa autenticación inicial. Eso es **Pre-Authentication**.

- **¿Cómo funciona?**  
  La aplicación confía en que alguien más (un sistema externo como **SiteMinder** o Java EE) ya verificó quién eres, y solo se preocupa de la autorización (decidir a qué partes puedes acceder).

</Card>

<Card color="orange">

### 8. **X.509 Authentication**
Este es un método muy especializado que se usa principalmente en aplicaciones que requieren un nivel muy alto de seguridad, como en las aplicaciones gubernamentales o financieras. En lugar de usar un nombre de usuario y contraseña, **X.509** usa certificados digitales.

- **¿Cómo funciona?**  
  Piensa en un certificado como una tarjeta de identificación muy segura. Cuando alguien intenta acceder a la aplicación, debe presentar su certificado digital. Si el certificado es válido, se le permite el acceso.

#### Ejemplo:
```java
http
    .x509()
    .subjectPrincipalRegex("CN=(.*?),");  // Busca el certificado del usuario en el formato correcto
```

</Card>

</Card>


## Conclusión

La autenticación en Spring Security es como un gran sistema de seguridad donde puedes usar diferentes tipos de llaves (contraseñas, OAuth 2.0, certificados, etc.) para asegurarte de que solo las personas correctas entren en tu aplicación.

1. **Nombre de usuario/contraseña**: El método más común, como iniciar sesión en una red social.
2. **OAuth 2.0**: Usar servicios como Google o GitHub para iniciar sesión.
3. **SAML 2.0**: Popular en empresas para gestionar múltiples aplicaciones.
4. **CAS**: Autenticación centralizada, usada en entornos académicos.
5. **Remember Me**: Para que los usuarios no tengan que iniciar sesión cada vez.
6. **JAAS**: Autenticación robusta dentro de aplicaciones Java.
7. **Pre-Authentication**: Confía en un sistema externo que ya haya autenticado al usuario.
8. **X.509**: Autenticación con certificados digitales, para aplicaciones de alta seguridad.

Con estas opciones, puedes configurar la autenticación de tu aplicación de la manera que mejor se adapte a tus necesidades.
