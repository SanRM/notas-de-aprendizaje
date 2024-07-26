---

title: Relaciones entre entidades

---

## Definición

En JPA, las relaciones entre entidades son una forma de definir cómo los objetos de una entidad se asocian con objetos de otras entidades. Las principales relaciones entre entidades son:

- [Uno a Uno **(@OneToOne)**](#relación-uno-a-uno-onetoone)
- [Uno a Muchos **(@OneToMany)**](#relaciones-uno-a-muchos-onetomany)
- [Muchos a Uno **(@ManyToOne)**](#relaciones-muchos-a-uno-manytoone)
- [Muchos a Muchos **(@ManyToMany)**](#relaciones-muchos-a-muchos-manytomany)

<Card>
    
## Uno a Uno (@OneToOne)

Una relación uno a uno en JPA significa que un registro en una tabla está asociado con un único registro en otra tabla. 

Por ejemplo, una entidad **User** puede tener una relación uno a uno con una entidad **Profile**.

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    // Getters y Setters
}

@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(mappedBy = "profile")
    private User user;

    // Getters y Setters
}
```

</Card>

<Card>
    
## Uno a Muchos (@OneToMany)

Una relación uno a muchos significa que un registro en una tabla puede estar asociado con múltiples registros en otra tabla. 

Por ejemplo, una entidad Department puede tener una relación uno a muchos con una entidad Employee.

```java
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToMany(mappedBy = "department")
    private List<Employee> employees;

    // Getters y Setters
}

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // Getters y Setters
}
```

</Card>

<Card>
    
## Muchos a Uno (@ManyToOne)

Una relación muchos a uno significa que muchos registros en una tabla pueden estar asociados con un único registro en otra tabla. Esta relación es la inversa de la relación uno a muchos y se suele usar junto a ella. Por ejemplo, múltiples Employee pueden estar asociados con un único Department.

```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // Getters y Setters
}
```

</Card>

<Card>
    
## Muchos a Muchos (@ManyToMany)

Una relación muchos a muchos significa que muchos registros en una tabla pueden estar asociados con muchos registros en otra tabla. Por ejemplo, una entidad Student puede tener una relación muchos a muchos con una entidad Course.

```java
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;

    // Getters y Setters
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToMany(mappedBy = "courses")
    private List<Student> students;

    // Getters y Setters
}
```

</Card>

<Card>
    
## Propiedades de las relaciones

<Card color='cyan'>
    
### Cascada **(CascadeType)**

La propiedad de cascada define cómo las operaciones en una entidad afectan a las entidades relacionadas, esto es útil para simplificar la gestión de entidades relacionadas. 

Las opciones de cascada más comunes son:

<Card>

#### Persist

Si una entidad es persistida, sus entidades relacionadas también serán persistidas automáticamente.
    

**Ejemplo**

Si se guarda un **Department**, todos los **Employee** asociados a ese **Department** también se guardarán automáticamente.

```java
@OneToMany(cascade = CascadeType.PERSIST)
private List<Employee> employees;
```


</Card>

<Card>
    
#### Merge

Si una entidad es fusionada, sus entidades relacionadas también serán fusionadas automáticamente, es decir, si se actualiza una entidad, sus entidades relacionadas también se actualizarán.

    
**Ejemplo**

Si se actualiza un **Department**, todos los **Employee** asociados a ese **Department** también se actualizarán automáticamente.

```java
@OneToMany(cascade = CascadeType.MERGE)
private List<Employee> employees;
```



</Card>

<Card>
    
#### Remove

Si una entidad es eliminada, sus entidades relacionadas también serán eliminadas automáticamente.


**Ejemplo**

Si se elimina un **Department**, todos los **Employee** asociados a ese **Department** también se eliminarán automáticamente.

```java
@OneToMany(cascade = CascadeType.REMOVE)
private List<Employee> employees;
```

</Card>

<Card>
    
#### Refresh

Si una entidad es refrescada, sus entidades relacionadas también serán refrescadas automáticamente.

**Ejemplo**

Si se refresca un **Department**, todos los Employee asociados a ese **Department** también se refrescarán automáticamente.

```java
@OneToMany(cascade = CascadeType.REFRESH)
private List<Employee> employees;
```

</Card>

<Card>

#### Detach

Si una entidad es desvinculada del contexto de persistencia, sus entidades relacionadas también serán desvinculadas.

**Ejemplo**

Si se desvincula un **Department** del contexto de persistencia, todos los **Employee** asociados a ese **Department** también se desvincularán.

```java
@OneToMany(cascade = CascadeType.ALL)
private List<Employee> employees;
```

</Card>

<Card>
    
Propaga todas las operaciones de persistencia, fusión, eliminación, refresco y desvinculación.

**Ejemplo**

Si se realiza cualquier operación en un **Department**, todos los **Employee** asociados se verán afectados por esa operación.

```java
@OneToMany(cascade = CascadeType.ALL)
private List<Employee> employees;
```

</Card>

</Card>

<Card color='blue'>
    
### Fetch Type **(FetchType)**

La propiedad FetchType define cómo y cuándo se cargan las entidades relacionadas desde la base de datos:

<Card>
    
#### Eager

Carga las entidades relacionadas de manera inmediata junto con la entidad principal.

**Uso común**

Se usa cuando se necesitan las entidades relacionadas de inmediato, y no importa el costo de rendimiento de cargar más datos al principio.

```java
@OneToMany(fetch = FetchType.EAGER)
private List<Employee> employees;
```

</Card>

<Card>
    
#### Lazy

Carga las entidades relacionadas solo cuando se accede a ellas por primera vez.

**Uso común**
Se usa cuando no siempre se necesitan las entidades relacionadas y se quiere evitar el costo de rendimiento de cargar datos adicionales innecesariamente.

```java
@OneToMany(fetch = FetchType.LAZY)
private List<Employee> employees;
```

</Card>

</Card>

</Card>