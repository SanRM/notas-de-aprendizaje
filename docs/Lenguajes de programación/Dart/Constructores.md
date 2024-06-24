---

title: Constructores

---

## Definición

En Dart, un constructor es un método especial que se llama cuando se crea un objeto de una clase. 

- Los constructores se utilizan para inicializar las variables de instancia de una clase. 
- Una clase puede tener uno o más constructores.

<Card>

### Constructor por defecto

Este constructor se invoca cuando se crea una instancia de una clase sin especificar un constructor específico, es el constructor que se invoca por defecto si no se especifica otro constructor


```JavaScript
  MyClass instance = MyClass(); // Constructor por defecto
```

</Card>

<Card>

### Constructor con nombre

Se pueden definir constructores adicionales con nombres específicos, estos son útiles cuando se desea proporcionar formas alternativas de crear instancias de una clase

```dart 
class MyClass {
    MyClass.namedConstructor() {
        // Cuerpo del constructor con nombre
    }
}
    
MyClass instance = MyClass.namedConstructor(); // Constructor con nombre
```

</Card>

<Card>

### Constructor de fábrica (factory):

Se usa la palabra clave factory para definir un método de fábrica, a diferencia de los otros constructores, un constructor de fábrica no siempre crea una nueva instancia de la clase.

```dart
class MyClass {
    factory MyClass.factoryConstructor() {
        // Cuerpo del constructor de fábrica
        return MyClass(); // Puede devolver una instancia diferente
    }
}
    
  MyClass instance = MyClass.factoryConstructor(); // Constructor de fábrica
```

</Card>

<Card color='darkBlue'>

## Comparación entre constructor tradicional y constructor de fabrica

<Card>

### Ejemplo utilizando un constructor tradicional

```dart
class LineItem {
  String productName;
  double price;

  LineItem(this.productName, this.price);

  void display() {
    print('Product: $productName, Price: ${price.toStringAsFixed(2)}');
  }
}

void main() {
  LineItem item1 = LineItem('Product A', 20.0);
  LineItem item2 = LineItem('Product B', 30.0);

  item1.display();
  item2.display();
}
```

</Card>

<Card>

### Ejemplo utilizando un constructor de fabrica

```dart
class LineItem {
  String productName;
  double price;

  // Constructor de fábrica
  factory LineItem.create(String productName, double price) {
    return LineItem._(productName, price);
  }

  // Constructor privado
  LineItem._(this.productName, this.price);

  void display() {
    print('Product: $productName, Price: ${price.toStringAsFixed(2)}');
  }
}

void main() {
  LineItem item1 = LineItem.create('Product A', 20.0);
  LineItem item2 = LineItem.create('Product B', 30.0);

  item1.display();
  item2.display();
}
```

<Card color='cyan'>

En este ejemplo, ambos códigos crean instancias de la clase `LineItem`, la diferencia clave está en cómo se crea la instancia.

En el primer código, se utiliza un constructor tradicional para crear instancias:

```dart
    LineItem(this.productName, this.price)
```

En el segundo código, se utiliza un constructor de fábrica para crear instancias:

```dart
    factory LineItem.create(String productName, double price)
```

</Card>

</Card>

</Card>