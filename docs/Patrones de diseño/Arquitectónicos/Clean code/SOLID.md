---

title: Principios SOLID

---

Los principios SOLID son un conjunto de cinco principios de diseño de software que se introdujeron para mejorar la legibilidad, mantenibilidad y escalabilidad del código.

Estos principios fueron propuestos por Robert C. Martin y son ampliamente aceptados en la comunidad de desarrollo de software.

Cada letra del acrónimo SOLID representa un principio específico.

<Card color='cyan'>
    
## Single responsability principle - SRP

Una clase o modulo debe:

- Tener uno y sólo un motivo para cambiar.
- Hacer solamente una cosa, ni más ni menos.
- Cada clase reducida encapsula una única responsabilidad, tiene un solo motivo para cambiar y colabora con otras para poder obtener los comportamientos deseados del sistema.

<Card>
    
### Ejemplo

<Card>
    

```java
public void pay() {

  for (Employee e : employees) {
    if (e.isPayday()) {
      Money pay = e.calculatePay();
      e.deliverPay(pay);
    }
  }

}
```

Este fragmento de código realiza tres operaciones:

- Itera por todos los empleados.
- Comprueba si cada uno debe recibir su paga .
- Paga al empleado.
</Card>

<Card>

Se podría reescribir de esta forma:
```java
public void pay() {
  for (Employee e : employees)
    payifNecessary(e);
}
  
private void payifNecessary(Employee e) {
  if (e.isPayday())
    calculateAndDeliverPay(e);
}

private void calculateAndDeliverPay(Employee e) {
  Money pay = e.calculatePay();
  e.deliverPay(pay);
}
```
    
Cada una de estas funciones hace una sola cosa
</Card>



</Card>

</Card>

<Card color='pink'>
    
## Open/closed principle - OCP

Las clases deben abrirse para su ampliación para cerrarse para su modificación.

- Las clases abstractas son ideales para este principio

- Este principio sostiene que una clase debe estar abierta para la extensión pero cerrada para la modificación, esto quiere decir que se pueden agregar nuevas funcionalidades mediante la creación de nuevas clases o módulos sin modificar el código existente.

<Card>
    
### Ejemplo

```java
// OCP: Clase base que sigue el principio abierto/cerrado
abstract class Shape {
  double calculateArea();
}

// OCP: Clase derivada que extiende sin modificar la clase base
class Circle extends Shape {
  double radius;

  Circle(this.radius);

  @override
  double calculateArea() {
    return 3.14 * radius * radius;
  }
}

// OCP: Otra clase derivada que extiende sin modificar la clase base
class Square extends Shape {
  double side;

  Square(this.side);

  @override
  double calculateArea() {
    return side * side;
  }
}

void main() {
  // Uso polimórfico respetando el principio abierto/cerrado
  Shape circle = Circle(5.0);
  Shape square = Square(4.0);

  print('Área del círculo: ${circle.calculateArea()}');
  print('Área del cuadrado: ${square.calculateArea()}');
}
```

En este ejemplo, la clase Shape es la clase base que sigue el principio abierto/cerrado. Las clases derivadas Circle y Square extienden la funcionalidad sin modificar la clase base. Esto permite agregar nuevas formas sin cambiar la clase Shape.

</Card>

</Card>

<Card color='blue'>
    
## Liskov Substitution Principle - LSP

- Las clases derivadas deben ser sustituibles por sus clases base.

- Este principio establece que los objetos de una clase derivada deben poder reemplazar a los objetos de la clase base sin afectar el comportamiento del programa.


<Card>
    
### Ejemplo

```java
// LSP: Clase base
class Bird {
  void fly() {
    print('Volando');
  }
}

// LSP: Clase derivada
class Duck extends Bird {
  void swim() {
    print('Nadando');
  }
}

void main() {
  // Uso polimórfico respetando el principio de sustitución de Liskov
  Bird duck = Duck();
  duck.fly();
}
```

En este ejemplo, la clase Duck es una clase derivada de Bird. 

La clase Duck tiene un método swim que no está presente en la clase base Bird, a pesar de esto, el objeto de la clase Duck puede reemplazar al objeto de la clase Bird sin afectar el comportamiento del programa.

</Card>

</Card>

<Card color='yellow'>
    
## Interface Segregation Principle - ISP

- Los clientes no deben verse obligados a depender de interfaces que no utilizan.

Este principio establece que una clase no debe depender de interfaces que no utiliza, en lugar de tener una interfaz grande que contenga muchos métodos, es mejor tener varias interfaces pequeñas que contengan un número reducido de métodos.

<Card>
    

### Ejemplo

```java
// ISP: Interfaz grande
abstract class Worker {
  void work();
  void eat();
  void sleep();
}

// ISP: Interfaz segregada
abstract class Workable {
  void work();
}

abstract class Eatable {
  void eat();
}

abstract class Sleepable {
  void sleep();
}

class Human implements Workable, Eatable, Sleepable {
  @override
  void work() {
    print('Trabajando');
  }

  @override
  void eat() {
    print('Comiendo');
  }

  @override
  void sleep() {
    print('Durmiendo');
  }
}

void main() {
  // Uso de interfaces segregadas
  Human human = Human();
  human.work();
  human.eat();
  human.sleep();
}
```
</Card>

En este ejemplo, la clase Worker tiene una interfaz grande que contiene tres métodos work, eat y sleep.

Por otro lado, la clase Human implementa tres interfaces separadas Workable, Eatable y Sleepable, cada una con un solo método.

</Card>

<Card color='magenta'>
    
## Dependency Inversion Principle - DIP


Este principio sostiene que una clase debe estar abierta para la extensión pero cerrada para la modificación, esto quiere decir que se pueden agregar nuevas funcionalidades mediante la creación de nuevas clases o módulos sin modificar el código existente.

> Las clases abstractas son ideales para este principio

<Card>
### Módulos o Clases de Alto Nivel
Son las partes del sistema que se encargan de las tareas más abstractas.

</Card>

<Card>

### Módulos o Clases de Bajo Nivel
Son las partes del sistema que se encargan de detalles específicos.

</Card>

<Card>
    
### Ejemplo

```java
// DIP: Abstracción que representa un dispositivo
abstract class Device {
  void turnOn();
  void turnOff();
}

// DIP: Implementación concreta de un dispositivo: Bombilla
class LightBulb implements Device {
  @override
  void turnOn() {
    print('Bombilla encendida');
  }

  @override
  void turnOff() {
    print('Bombilla apagada');
  }
}

// DIP: Implementación concreta de un dispositivo: Ventilador
class Fan implements Device {
  @override
  void turnOn() {
    print('Ventilador encendido');
  }

  @override
  void turnOff() {
    print('Ventilador apagado');
  }
}

// DIP: Clase de alto nivel que depende de la abstracción
class Switch {
  Device device;

  Switch(this.device);

  void operate() {
    device.turnOn();
    // Realizar otras operaciones si es necesario
    device.turnOff();
  }
}

void main() {
  // Uso del principio de inversión de dependencias
  Device bulb = LightBulb();
  Device fan = Fan();

  Switch switchForBulb = Switch(bulb);
  Switch switchForFan = Switch(fan);

  switchForBulb.operate();
  switchForFan.operate();
}
```
</Card>

En este ejemplo, el principio de inversión de dependencias se cumple al hacer que la clase Switch dependa de la abstracción Device, en lugar de depender directamente de las implementaciones concretas LightBulb y Fan. Esto permite cambiar fácilmente el dispositivo sin afectar la clase Switch.

- A la vez que se explica el principio de inversión de dependencias (DIP) también hay una aplicación del principio Open/Closed (OCP). La abstracción Device es la clase base que sigue el principio OCP y las implementaciones concretas como LigtBulb y **Fan** extienden la funcionalidad sin modificar la clase base

- Este ejemplo también usa inyección de dependencias en la clase Switch. En este caso la dependencia Device se inyecta a través del constructor.

</Card>