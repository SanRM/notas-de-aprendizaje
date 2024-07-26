---

title: JUnit

---

**JUnit** es un framework de pruebas unitarias para el lenguaje de programación **Java**. 

Este framework permite la creación de pruebas unitarias de forma sencilla y rápida, también proporciona una estructura clara y organizada para las pruebas.

<Card> 
   
## Instalación

Para instalar JUnit en un proyecto Java, se debe buscar la dependencia **`junit-jupiter`** del grupo **`org.junit.jupiter`** en el [repositorio central de Maven](https://central.sonatype.com/?smo=true) y agregarla al archivo `pom.xml`.

```xml title='pom.xml'
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.11.0-M2</version> <!-- Reemplaza con la versión más reciente encontrada -->
</dependency>
```

</Card>

<Card>
    
## Ejemplo

A continuación se muestra un ejemplo de una prueba unitaria con JUnit.

```java title='Ejemplo.java'

package com.example.app;

public class Ejemplo {

    public int sumar(int a, int b) {
        return a + b;
    }

}

```

<Card color='green'>
    
Ejemplo de test unitario aprobado.

```java title='EjemploTest.java'

import org.junit.jupiter.api.Test;

public class EjemploTest {

    @Test
    public void testSumar() {

        Ejemplo ejemplo = new Ejemplo();
        int resultado = ejemplo.sumar(4, 4); // 4 + 4 = 8
        assertEquals(8, resultado); // El test pasa porque 8 es igual a 8

    }

}

```

</Card>

<Card color='red'>
    
Ejemplo de test unitario fallido.

```java title='EjemploTest.java'

import org.junit.jupiter.api.Test;

public class EjemploTest {

    @Test
    public void testSumar() {

        Ejemplo ejemplo = new Ejemplo();
        int resultado = ejemplo.sumar(4, 4); // 4 + 4 = 8
        assertEquals(9, resultado); // El test falla porque 9 no es igual a 8

    }

}

```

</Card>

</Card>

<Card>
    
## Estructura Given, When, Then

La estructura **Given, When, Then** es una técnica utilizada para escribir pruebas unitarias de forma clara y organizada.

- **Given**: Se proporcionan los datos de entrada y se configura el entorno de la prueba.

- **When**: Se ejecuta el método que se desea probar.

- **Then**: Se verifica que el resultado sea el esperado. 


```java title='Ejemplo'

package com.example.app;

import org.junit.jupiter.api.Test;

public class EjemploTest {

    @Test
    public void testSumar() {

        // Given | Se proporcionan los datos de entrada y se configura el entorno de la prueba
        Ejemplo ejemplo = new Ejemplo();
        int a = 4;
        int b = 4;

        // When | Se ejecuta el método que se desea probar
        int resultado = ejemplo.sumar(a, b);

        // Then | Se verifica que el resultado sea el esperado
        assertEquals(8, resultado);

    }

}

```

En el ejemplo anterior, se siguió la estructura **Given, When, Then** para escribir una prueba unitaria del método `sumar` de la clase `Ejemplo`, la prueba es aprobada porque el resultado es el esperado.

</Card>

<Card>
    
## Tipos de aserciones

JUnit proporciona varios métodos de aserción para verificar que los resultados de las pruebas sean los esperados. A continuación se muestran algunos de los métodos más comunes pero hay muchos más disponibles, se pueden encontrar en la [documentación oficial de JUnit](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html).

:::warning
Para los siguientes ejemplos se tiene en cuenta que la variable `resultado` es igual a 8.
:::

<Card color='darkBlue'>

**`assertEquals(expected, actual)`**: Verifica que dos valores sean iguales.

```java
assertEquals(8, resultado); // Verifica que 8 sea igual a resultado, si no son iguales, el test falla
```
    
**`assertNotEquals(expected, actual)`**: Verifica que dos valores no sean iguales.

```java
assertNotEquals(9, resultado); // Verifica que 9 no sea igual a resultado, si son iguales, el test falla
```

</Card>

<Card color='magenta'>

**`assertTrue(condition)`**: Verifica que una condición sea verdadera.

```java
assertTrue(resultado == 8); // Verifica que la condición sea verdadera, si es falsa, el test falla
```

**`assertFalse(condition)`**: Verifica que una condición sea falsa.

```java
assertFalse(resultado == 9); // Verifica que la condición sea falsa, si es verdadera, el test falla
```
    
</Card>

<Card color='cyan'>

**`assertNull(actual)`**: Verifica que un valor sea nulo.

```java
assertNull(null); // Verifica que el valor sea nulo, si no es nulo, el test falla
```
    
**`assertNotNull(actual)`**: Verifica que un valor no sea nulo.

```java
assertNotNull(resultado); // Verifica que el valor no sea nulo, si es nulo, el test falla
```

</Card>

<Card color='pink'>
    
**`assertInstanceOf(expectedType, actual)`**: Verifica que un objeto sea una instancia de un tipo específico.

```java
assertInstanceOf(Integer.class, resultado); // Verifica que resultado sea una instancia de Integer, si no lo es, el test falla
```

**`assertNotInstanceOf(expectedType, actual)`**: Verifica que un objeto no sea una instancia de un tipo específico.

```java
assertNotInstanceOf(String.class, resultado); // Verifica que resultado no sea una instancia de String, si lo es, el test falla
```

</Card>

<Card color='yellow'>

**`assertThrows(expectedException, executable)`**: Verifica que un método lance una excepción.

```java
assertThrows(ArithmeticException.class, () -> {
    int division = 1 / 0; // Lanza una excepción de división por cero
});
```

</Card>

<Card>
    
## Ejemplos reales

Estos son algunos ejemplos de pruebas unitarias utilizando JUnit. (Todos los tests están aprobados).

<Tabs>
    <TabItem value='Calculadora' label='Calculadora'>
    A continuación se muestra un ejemplo de una clase `Calculadora` con sus respectivas pruebas unitarias utilizando JUnit.

```java title='Calculadora.java'

package com.example.app;

public class Calculadora {

    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return a - b;
    }

    public int multiplicar(int a, int b) {
        return a * b;
    }

    public int dividir(int a, int b) {
        return a / b;
    }

}

```

```java title='CalculadoraTest.java'

package com.example.app;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculadoraTest {

    @Test
    public void testSumar() {

        //1. Given
        Calculadora calculadora = new Calculadora();

        //2. When
        int resultado = calculadora.sumar(4, 4);

        //3. Then
        assertEquals(8, resultado);

    }

    @Test
    public void testRestar() {

        //1. Given
        Calculadora calculadora = new Calculadora();

        //2. When
        int resultado = calculadora.restar(4, 4);

        //3. Then
        assertEquals(0, resultado);

    }

    @Test
    public void testMultiplicar() {

        //1. Given
        Calculadora calculadora = new Calculadora();

        //2. When
        int resultado = calculadora.multiplicar(4, 4);

        //3. Then
        assertEquals(16, resultado);

    }

    @Test
    public void testDividir() {

        //1. Given
        Calculadora calculadora = new Calculadora();

        //2. When
        int resultado = calculadora.dividir(4, 4);

        //3. Then
        assertEquals(1, resultado);

    }

}    

```
</TabItem>

<TabItem value='Ejercicios variados' label='Ejercicios variados'>

Ejemplo de pruebas unitarias para una clase `Example` que contiene varios métodos con diferentes tipos de pruebas.

```java title='Example.java'

package org.example;

import java.util.List;
import java.util.stream.Collectors;

public class Example {

    // 1. Método para sumar dos números
    public int sumar(int a, int b) {
        return a + b;
    }

    // 2. Método que lanza una excepción si el argumento es negativo
    public boolean checkPositivo(int numero) {
        if (numero < 0) {
            throw new IllegalArgumentException("El número no puede ser negativo");
        }
        return true;
    }

    // 3. Método para contar el número de letras 'a' en una cadena
    public int contarLetrasA(String cadena) {
        return (int) cadena.chars()
                .filter(letra -> letra == 'a')
                .count();
    }

    // 4. Método que retorna un valor booleano si la lista contiene el elemento
    public boolean contieneElemento(List<String> lista, String elemento) {
        return lista.contains(elemento);
    }

    // 5. Método para revertir una cadena
    public String revertirCadena(String cadena) {
        return new StringBuilder(cadena).reverse().toString();
    }

    // 6. Método que calcula el factorial de un número
    public long factorial(int numero) {
        if (numero < 0) {
            throw new IllegalArgumentException("Factorial no definido para números negativos");
        }
        long resultado = 1;
        for (int i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // 7. Método para verificar si un número es primo
    public boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i * i <= numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    // 8. Método que simula un retraso y retorna un mensaje
    public String mensajeConRetraso() throws InterruptedException {
        Thread.sleep(5000);
        return "Listo después de retraso";
    }

    // 9. Método para convertir una lista de enteros a lista de strings
    public List<String> convertirAString(List<Integer> lista) {
        return lista.stream()
                .map(String::valueOf)
                .collect(Collectors.toList());
    }

    // 10. Método que calcula la media de una lista de enteros
    public double calcularMedia(List<Integer> lista) {
        if (lista == null || lista.isEmpty()) {
            throw new IllegalArgumentException("La lista no puede ser nula o vacía");
        }
        return lista.stream()
                .mapToInt(Integer::intValue)
                .average()
                .getAsDouble();
    }

    // 11. Método para convertir una lista de enteros a lista de strings
    public String convertirListaAString(List<String> lista) {
        return lista.stream()
                .map(String::toUpperCase)
                .collect(Collectors.joining(","));
    }
}

```

```java title='ExampleTest.java'

package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class ExampleTest {

    private Example example;

    @BeforeEach
    public void init() {
        this.example = new Example();
    }

    @Test
    public void testSumar() {
        // Given - Teniendo
        int numberA = 3;
        int numberB = 3;

        // When - Cuando
        int result = example.sumar(numberA, numberB);

        // Then - Entonces
        assertNotNull(result);
        assertEquals(6, result);
        assertInstanceOf(Integer.class, result);
    }

    @Test
    public void testCheckPositivo() {
        // Given - Teniendo
        int number = 4;

        // When - Cuando
        boolean result = example.checkPositivo(number);

        // Then - Entonces
        assertTrue(result);
    }

    @Test
    public void testCheckPositivoError() {
        // Given
        int number = -4;

        // Then
        assertThrows(IllegalArgumentException.class, () -> {
            example.checkPositivo(number);
        });
    }

    @Test
    public void testContarLetrasA() {
        // Given
        String cadena = "unprogramadornace";

        // When
        int result = example.contarLetrasA(cadena);

        // Then
        assertNotNull(result);
        assertEquals(3, result);
    }

    @Test
    public void testContieneElemento() {
        // Given
        List<String> countries = List.of("Colombia", "Mexico", "Peru");
        String country = "Colombia";

        // When
        boolean result = this.example.contieneElemento(countries, country);

        // Then
        assertTrue(result);
    }

    @Test
    public void testRevertirCadena() {
        // Given
        String cadena = "carro"; // orrac

        // When
        String result = this.example.revertirCadena(cadena);

        // Then
        assertEquals("orrac", result);
    }

    @Test
    public void testFactorial() {
        // Given
        int number = 6;

        // When
        long result = this.example.factorial(number);

        // Then
        assertEquals(720, result);
    }

    @Test
    public void testFactorialError() {
        // Given
        int number = -6;

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.example.factorial(number);
        });
    }

    @Test
    public void testEsPrimo() {
        // Given
        int number = 3;

        // When
        boolean result = this.example.esPrimo(number);

        // Then
        assertTrue(result);
    }

    @Test
    public void testEsPrimoMayorACuatro() {
        // Given
        int number = 7;

        // When
        boolean result = this.example.esPrimo(number);

        // Then
        assertTrue(result);
    }

    @Test
    public void testEsPrimoMenorQueUno() {
        // Given
        int number = 1;

        // When
        boolean result = this.example.esPrimo(number);

        // Then
        assertFalse(result);
    }

    @Test
    public void testNoEsPrimo() {
        // Given
        int number = 9;

        // When
        boolean result = this.example.esPrimo(number);

        // Then
        assertFalse(result);
    }

    @Test
    public void testMensajeConRetraso() throws InterruptedException {
        // When
        String result = this.example.mensajeConRetraso();

        // Then
        assertEquals("Listo después de retraso", result);
    }

    @Test
    public void testConvertirAString() {
        // Given
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // When
        List<String> result = this.example.convertirAString(numbers);

        // Then
        assertEquals(List.of("1", "2", "3", "4", "5", "6", "7", "8", "9", "10"), result);
    }

    @Test
    public void testCalcularMedia() {
        // Given
        List<Integer> numbers = List.of(1, 2, 3);

        // When
        double result = this.example.calcularMedia(numbers);

        // Then
        assertEquals(2, result);
    }

    @Test
    public void testCalcularMediaNull() {
        // Given
        List<Integer> numbers = null;

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.example.calcularMedia(numbers);
        });
    }

    @Test
    public void testCalcularMediaEmpty() {
        // Given
        List<Integer> numbers = Collections.emptyList();

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.example.calcularMedia(numbers);
        });
    }

}

```

</TabItem>

<TabItem value='Banco' label='Cuenta bancaria'>

Ejemplo de pruebas unitarias para una clase `CuentaBancaria` que contiene varios métodos con diferentes tipos de pruebas.

```java title='CuentaBancaria.java'

package org.example;

public class CuentaBancaria {

    private double saldo;

    public CuentaBancaria(double saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double cantidad) {
        if (cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad a depositar debe ser mayor a cero");
        }
        saldo += cantidad;
    }

    public void retirar(double cantidad) {
        if (cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad a retirar debe ser mayor a cero");
        }
        if (cantidad > saldo) {
            throw new IllegalArgumentException("No hay suficiente saldo para retirar");
        }
        saldo -= cantidad;
    }

}

```

```java title='CuentaBancariaTest.java'

package org.example;

import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CuentaBancariaTest {

    private CuentaBancaria cuentaBancaria;

    @BeforeEach
    public void init() {
        this.cuentaBancaria = new CuentaBancaria(1000);
    }

    @Test
    public void testGetSaldo() {
        // Given
        double saldo = this.cuentaBancaria.getSaldo();

        // Then
        assertEquals(1000, saldo);
    }

    @Test
    public void testDepositar() {
        // Given
        double cantidad = 500;

        // When
        this.cuentaBancaria.depositar(cantidad);

        // Then
        assertEquals(1500, this.cuentaBancaria.getSaldo());
    }

    @Test
    public void testDepositarError() {
        // Given
        double cantidad = -500;

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.cuentaBancaria.depositar(cantidad);
        });
    }

    @Test
    public void testRetirar() {
        // Given
        double cantidad = 500;

        // When
        this.cuentaBancaria.retirar(cantidad);

        // Then
        assertEquals(500, this.cuentaBancaria.getSaldo());
    }

    @Test
    public void testRetirarError() {
        // Given
        double cantidad = 1500;

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.cuentaBancaria.retirar(cantidad);
        });
    }

    @Test
    public void testRetirarErrorCantidadNegativa() {
        // Given
        double cantidad = -500;

        // When - Then
        assertThrows(IllegalArgumentException.class, () -> {
            this.cuentaBancaria.retirar(cantidad);
        });
    }

}

```

</TabItem>

</Tabs>



</Card>

</Card>