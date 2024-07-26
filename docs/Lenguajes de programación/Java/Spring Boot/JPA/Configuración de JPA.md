---

title: Configuración de JPA

---

JPA (Java Persistence API) es una especificación de Java para el mapeo de datos a objetos en una base de datos relacional. Hibernate es una implementación popular de JPA. 

En Spring Boot, configurar JPA y Hibernate es relativamente sencillo gracias a las propiedades de configuración y al soporte integrado que ofrece Spring Data JPA.

<Card>
    
## Configuración de Conexión a la Base de Datos

Para configurar la conexión a la base de datos, se deben definir las propiedades de conexión en el archivo **application.properties** o **application.yml**.

```java title='Ejemplo en application.properties'
spring.datasource.url=jdbc:mysql://localhost:3306/mi_base_de_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

```java title='Ejemplo en application.yml'
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mi_base_de_datos
    username: usuario
    password: contraseña
    driver-class-name: com.mysql.cj.jdbc.Driver
```

</Card>

<Card color='red'>
    
## Propiedad **spring.jpa.hibernate.ddl-auto**

La propiedad spring.jpa.hibernate.ddl-auto controla cómo Hibernate maneja el esquema de la base de datos, los valores posibles son:

- **none:** Hibernate no hará nada con el esquema de la base de datos.
- **validate:** Hibernate solo validará que el esquema de la base de datos existente coincide con las entidades mapeadas, pero no realizará ninguna modificación.
- **update:** Hibernate actualizará el esquema de la base de datos para que coincida con las entidades mapeadas sin eliminar datos existentes.
- **create:** Hibernate creará el esquema de la base de datos cada vez que se inicia la aplicación, eliminando todos los datos existentes.
- **create-drop:** Hibernate creará el esquema de la base de datos al inicio de la aplicación y lo eliminará al finalizar la misma. Esta configuración es útil durante el desarrollo y pruebas porque permite tener un esquema limpio y actualizado, lo que facilita la detección de errores y problemas de mapeo pero no se recomienda para producción porque elimina todos los datos existentes en la base de datos cada vez que se detiene la aplicación.

</Card>

<Card color='yellow'>
 
## Propiedad **spring.jpa.show-sql**

La propiedad spring.jpa.show-sql se utiliza para mostrar las consultas SQL generadas por Hibernate en la consola, sus valores posibles son **true** o **false**.
   
</Card>

<Card color='yellow'>
    
## Propiedad **spring.jpa.properties.hibernate.format_sql**

La propiedad spring.jpa.properties.hibernate.format_sql se utiliza para formatear las consultas SQL generadas por Hibernate en la consola y tener mejor legibilidad, sus valores posibles son **true** o **false**.

</Card>

<Card color='orange'>
    
## Propiedad **spring.jpa.properties.hibernate.dialect**

La propiedad spring.jpa.properties.hibernate.dialect se utiliza para definir el dialecto de la base de datos, algunos valores comunes son:

- **org.hibernate.dialect.MySQL5Dialect:** Para MySQL 5.
- **org.hibernate.dialect.MySQL8Dialect:** Para MySQL 8.
- **org.hibernate.dialect.H2Dialect:** Para H2.
- **org.hibernate.dialect.PostgreSQLDialect:** Para PostgreSQL.
- **org.hibernate.dialect.SQLServerDialect:** Para SQL Server.
- **org.hibernate.dialect.Oracle12cDialect:** Para Oracle 12c.
- **org.hibernate.dialect.Oracle10gDialect:** Para Oracle 10g.
- **org.hibernate.dialect.Oracle9iDialect:** Para Oracle 9i.
- **org.hibernate.dialect.Oracle8iDialect:** Para Oracle 8i.
- **org.hibernate.dialect.DB2Dialect:** Para DB2.
- **org.hibernate.dialect.HSQLDialect:** Para HSQLDB.
- **org.hibernate.dialect.SQLiteDialect:** Para SQLite.

</Card>

<Card color='yellow'>
    
## Propiedad **spring.output.ansi.enabled**

La propiedad spring.output.ansi.enabled se utiliza para habilitar o deshabilitar la salida ANSI en la consola, sus valores posibles son **always**, **detect** o **never**, esta propiedad añade color a la salida de la consola.

</Card>