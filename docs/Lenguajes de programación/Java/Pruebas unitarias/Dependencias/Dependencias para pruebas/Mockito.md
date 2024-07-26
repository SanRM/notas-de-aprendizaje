---

title: Mockito

---

**Mockito** es un framework de pruebas unitarias para Java que permite crear objetos simulados (mocks) de clases y interfaces, estos objetos pueden ser utilizados para simular el comportamiento de objetos reales en pruebas unitarias.

- Mockito trabaja con las dependencias de un objeto, permitiendo simular el comportamiento de estas dependencias.

<Card>
    
## Por qué usar Mockito

- **Aislamiento de la Unidad:** Permite probar una clase en aislamiento, evitando dependencias externas que podrían hacer que las pruebas sean lentas o difíciles de configurar.

- **Simplificación de Pruebas:** Facilita la simulación de objetos complejos, proporcionando una forma clara y sencilla de definir el comportamiento esperado de estos objetos simulados.

- **Facilita el TDD (Desarrollo Guiado por Pruebas):** Ayuda a escribir pruebas antes del código real, promoviendo buenas prácticas de desarrollo.

</Card>

<Card>
    
## Características principales

- **Creación de Mocks:** Permite crear objetos simulados de clases y interfaces fácilmente.

- **Verificación de interacciones:** Permite verificar si un método de un objeto simulado fue llamado con los parámetros correctos.

- **Integración con JUnit:** Se integra fácilmente con JUnit para realizar pruebas unitarias.

</Card>

<Card>
    
## Instalación

Para utilizar Mockito en un proyecto Java, es necesario agregar la dependencia correspondiente al archivo `pom.xml` del proyecto.

```java
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>3.11.2</version>
    <scope>test</scope>
</dependency>
```

</Card>

<Card>

## Ejemplo

Supongamos que tenemos una clase `Calculator` que realiza operaciones matemáticas, y una clase `CalculatorService` que realiza operaciones matemáticas utilizando la clase `Calculator`.

```java
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

}

public class CalculatorService {

    private Calculator calculator;

    public CalculatorService(Calculator calculator) {
        this.calculator = calculator;
    }

    public int add(int a, int b) {
        return calculator.add(a, b);
    }

}
```

<Card>
    
### Test sin Mockito

Para probar la clase `CalculatorService` sin Mockito, necesitamos crear una instancia de la clase `Calculator` y pasarla al constructor de `CalculatorService`.

```java

public class CalculatorServiceTest {

    @Test
    public void testAdd() {

        //Given
        Calculator calculator = new Calculator();
        CalculatorService calculatorService = new CalculatorService(calculator);

        //When
        int result = calculatorService.add(2, 3);

        //Then
        assertEquals(5, result);
    }

}
```

Este enfoque tiene la desventaja de que estamos probando la clase `CalculatorService` junto con la clase `Calculator`, lo cual no es ideal para pruebas unitarias porque estamos probando dos clases a la vez y no podemos aislar la clase `CalculatorService` para probarla de forma independiente, además, si la clase `Calculator` tiene dependencias, también tendríamos que crear instancias de estas dependencias.

</Card>

<Card>
    
### Test con Mockito

Para probar la clase `CalculatorService` con Mockito, podemos crear un mock de la clase `Calculator` y pasar este mock al constructor de `CalculatorService`.

```java

import static org.mockito.Mockito.*;

public class CalculatorServiceTest {

    @Test
    public void testAdd() {
        
        //Given
        Calculator calculator = mock(Calculator.class);
        CalculatorService calculatorService = new CalculatorService(calculator);

        //When
        when(calculator.add(2, 3)).thenReturn(5);
        int result = calculatorService.add(2, 3);

        //Then
        assertEquals(5, result);

    }

}
```

En este caso, estamos creando un mock de la clase `Calculator` utilizando el método `mock()` de Mockito, luego estamos configurando el comportamiento del mock utilizando el método `when().thenReturn()`, y finalmente estamos pasando el mock al constructor de `CalculatorService`, de esta forma podemos probar la clase `CalculatorService` de forma aislada y sin depender de la clase `Calculator`.

</Card>

</Card>

<Card>
    
## Formas de definir una clase de prueba con Mockito

Hay varias formas de habilitar Mockito en una clase de prueba, estas son algunas de las más comunes:

<Card>
    
### Anotación @Before

```java
import org.junit.Before;
import static org.mockito.Mockito.*;

public class CalculatorServiceTest {

    private Calculator calculator;
    private CalculatorService calculatorService;

    @Before
    public void setUp() {
        calculator = mock(Calculator.class);
        calculatorService = new CalculatorService(calculator);
    }

    // Tests...

}
```

- El método `setUp()` se ejecuta antes de cada prueba, garantizando que el mock esté disponible y puede tener cualquier nombre, pero lo común es llamarlo `setUp()` o `init()`.

</Card>

<Card>
    
### Anotación @Mock e @InjectMocks

La anotación `@Mock` se utiliza para crear mocks de clases o interfaces, y la anotación `@InjectMocks` se utiliza para inyectar los mocks en la clase que estamos probando sin necesidad de pasarlos al constructor, esto se conoce como inyección de dependencias automática.

```java
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.junit.jupiter.api.BeforeEach;

public class CalculatorServiceTest {

    @Mock
    private Calculator calculator;

    @InjectMocks
    private CalculatorService calculatorService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    // Tests...

}
```

- `@Mock` crea el mock.
- `@InjectMocks` inyecta el mock en el objeto de prueba.
- `MockitoAnnotations.initMocks(this)` inicializa las anotaciones de Mockito.

</Card>

<Card>
    
### Anotación @ExtendWith con @Mock e @InjectMocks

La anotación `@ExtendWith` habilita la extensión de Mockito en la clase de prueba:

```java
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(MockitoExtension.class)
public class CalculatorServiceTest {

    @Mock
    private Calculator calculator;

    @InjectMocks
    private CalculatorService calculatorService;

    // Tests...

}
```

- `@ExtendWith(MockitoExtension.class)` habilita la extensión de Mockito.
- `@Mock` y `@InjectMocks` funcionan de la misma manera que en el ejemplo anterior pero sin necesidad de llamar a `MockitoAnnotations.initMocks(this)`.

</Card>

</Card>

<Card>
    
## Ejemplo real

Supongamos que tenemos una clase `UserService` que realiza operaciones con usuarios y depende de una clase `UserRepository` para acceder a la base de datos.

- Vamos a probar la clase `UserService` utilizando Mockito para simular el comportamiento de `UserRepository`.

```java title='Clases UserService, UserRepository y User'

// UserService.java
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserById(Long id) {
        return userRepository.findById(id);
    }

}

// UserRepository.java
public interface UserRepository {

    User findById(Long id);

}

// User.java
public class User {

    private Long id;
    private String name;

    // Getters and setters...

}
    
```

```java title='Prueba unitaria con Mockito usando @ExtendWith con @Mock e @InjectMocks'

import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void testFindById() {

        //Given
        User user = new User();
        user.setId(1L);
        user.setName("Alice");

        when(userRepository.findById(1L)).thenReturn(user);

        //When
        User result = userService.findUserById(1L);

        //Then
        assertEquals(user, result);

    }

}
```

</Card>