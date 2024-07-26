---

title : Data Transfer Object (DTO)

---

DTO, o Data Transfer Object, es un patrón de diseño que se utiliza para transferir datos entre subsistemas de una aplicación.

Los DTOs son simples objetos que contienen solo campos y métodos de acceso (getters y setters), y no contienen ninguna lógica de negocio.

<Card>
    
```java title='Ejemplo de un DTO en Java:'
public class UserDTO {
    private String username;
    private String email;

    // Constructor
    public UserDTO(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```

En este ejemplo, UserDTO es un objeto que se utiliza para transferir datos de usuario entre diferentes partes de una aplicación.

- No contiene ninguna lógica de negocio; solo contiene datos y métodos para acceder y modificar esos datos.

</Card>

<Card>
    
## Diferencias entre DTO y una clase modelo o entidad JPA

| Característica | DTO | Clase Modelo/Entidad JPA |
| :------- | :------- | :------- |
| **Propósito** | Transferir datos entre subsistemas de una aplicación | Representar una entidad de negocio |
| **Lógica de negocio** | No contiene lógica de negocio | Puede contener lógica de negocio |
| **Métodos** | Solo contiene métodos de acceso (getters y setters) | Puede contener métodos adicionales |
| **Persistencia** | No se utiliza para persistir datos | Se utiliza para persistir datos en una base de datos |
| **Serialización** | Se utiliza para serializar y deserializar datos | Se utiliza para mapear datos a una tabla de base de datos |
| **Relaciones** | No tiene relaciones con otras entidades | Puede tener relaciones con otras entidades |

</Card>