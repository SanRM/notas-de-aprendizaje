---

title: Relación de clases

---

## Definición

Los términos **extends**, **implements**, y **with** en Dart se llaman palabras clave de relación de clases, cada una de estas palabras clave se utiliza para establecer una relación específica entre dos clases.

<Card>

### Extends
Se utiliza para crear una subclase que hereda todos los miembros de una superclase.

<Card color='green'>
Cuando se usa extends, la subclase ahora contiene todos los miembros de la superclase y solamente deben ser reescribirlos si deseas modificarlos
</Card>

```dart
class Animal {
  void eat() => print('Eating...');
}

class Dog extends Animal {
  void bark() => print('Barking...');
}

class main(){
	Dog dog = Dog();
	dog.eat();
}
```

</Card>


<Card>

### Implements
Se utiliza para crear una clase que adopta la interfaz de otra clase. La nueva clase debe proporcionar una implementación para todos los miembros de la clase que está implementando.

<Card color='green'>
Sin modificar la superclase, implements convierte la subclase en una interfaz que debe reescribir todos sus metodos
</Card>

```dart
class Animal {
  void eat() => print('Eating...');
}

class Dog implements Animal {
  @override
  void eat() => print('Dog eating...');
}

class main(){
	Dog dog = Dog();
	dog.eat();
}
```

</Card>

<Card>

### With
Se utiliza para mezclar en una o más clases en una nueva clase. La nueva clase hereda todos los miembros de las clases mezcladas. Esta palabra clave se utiliza para implementar el patrón de mezcla (mixin) en Dart.

<Card color='green'>
Un mixin es una forma de reutilizar el código de una clase en múltiples jerarquías de herencia.
</Card>

```dart
mixin Bark {
  void bark() => print('Barking...');
}

class Animal {
  void eat() => print('Eating...');
}

class Dog extends Animal with Bark {}
```

</Card>

<Card>

## Diferencias
- **extends**: Se usa para establecer una relación de herencia única. La clase derivada es una versión especializada o un tipo más específico de la clase base. Se puede usar solo una vez.

- **with**: Se usa para agregar características o comportamientos adicionales a una clase sin establecer una relación de herencia completa. Se pueden utilizar varios mixins para agregar múltiples características.

    - La flexibilidad de with para usar múltiples mixins hace que sea útil cuando se deseas combinar funcionalidades de diversas fuentes sin crear una cadena de herencia larga y compleja.
    
- **implements**: Se usa para establecer una relación de implementación, la clase que implementa una interfaz debe proporcionar una implementación para todos los miembros de la interfaz.

<Card>

Entonces, puede verse como:

- **extends** → “es un tipo de”.
- **implements** → “promete comportarse como y debe reescribir todos sus métodos”
- **with** → “tiene estas características adicionales”.

</Card>
</Card>