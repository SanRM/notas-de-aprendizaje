---
title: FilterChainProxy
sidebar_position: 3
---


La **FilterChainProxy** es una clase especial proporcionada por Spring Security que se utiliza para manejar la seguridad en las aplicaciones web. Su función principal es delegar el control de la seguridad a múltiples instancias de filtros a través de lo que se conoce como **SecurityFilterChain**. Esto permite una configuración más flexible y modular de la seguridad en tu aplicación.

<Card>

### Contexto de FilterChainProxy

1. **Delegación a Múltiples Instancias**: El **FilterChainProxy** permite que una solicitud HTTP pase a través de varias instancias de filtros de seguridad. Esto es útil porque cada filtro puede encargarse de diferentes aspectos de la seguridad, como la autenticación, la autorización, y la protección contra ataques.

2. **SecurityFilterChain**: Este es un concepto clave en Spring Security. Un **SecurityFilterChain** es una colección de filtros de seguridad que se aplican a una solicitud. Cada cadena de filtros puede configurarse de manera independiente, lo que permite una gran flexibilidad en la configuración de seguridad.

3. **Bean de Spring**: Como `FilterChainProxy` es un Bean de Spring, se suele envolver en un **DelegatingFilterProxy**. Esto significa que se registra en el contenedor de servlets y permite que el flujo de solicitudes pase a través de la cadena de filtros de seguridad gestionada por Spring.

</Card>

<Card>

### Proceso de Funcionamiento de FilterChainProxy

1. **Manejo de Solicitudes**: Cuando una solicitud llega al servidor, el `FilterChainProxy` se encarga de delegar esta solicitud a los diferentes filtros que ha configurado en sus instancias de `SecurityFilterChain`.

2. **Ejemplo de Estructura**: A continuación se presenta una imagen que ilustra cómo se relaciona el `FilterChainProxy` con las instancias de filtro y la cadena de filtros.

<Card color='dark' header='Figura 3. FilterChainProxy' textAlign='center'>

![Spring seurity image](https://docs.spring.io/spring-security/reference/_images/servlet/architecture/filterchainproxy.png)

</Card>

</Card>

<Card>

### Beneficios de FilterChainProxy

1. **Flexibilidad**: Al permitir múltiples cadenas de filtros, el `FilterChainProxy` proporciona una gran flexibilidad. Puedes tener diferentes configuraciones de seguridad para diferentes partes de tu aplicación. Por ejemplo, podrías tener una cadena de filtros para la sección de administración de la aplicación y otra para la sección pública.

2. **Modularidad**: La separación de la lógica de seguridad en diferentes filtros facilita la gestión del código. Puedes agregar, quitar o modificar filtros sin afectar el resto de la configuración de seguridad de la aplicación.

3. **Integración con Spring**: Al estar integrado con el contexto de Spring, el `FilterChainProxy` puede aprovechar todos los beneficios que ofrece Spring, como la gestión de Beans, la inyección de dependencias, y la configuración basada en anotaciones.


</Card>

<Card>
    
El FilterChainProxy es un componente esencial en Spring Security que permite gestionar múltiples instancias de filtros de seguridad de manera flexible y modular. Al facilitar la configuración de seguridad en aplicaciones web, ayuda a protegerlas de diversas amenazas mientras se mantiene un código limpio y mantenible. 

</Card>