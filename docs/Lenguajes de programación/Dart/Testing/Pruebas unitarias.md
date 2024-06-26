---

title: Pruebas unitarias

---

## Definición

Las pruebas unitarias son una de las formas más comunes de testing y se usan para verificar el correcto funcionamiento de unidades individuales de código como funciones, métodos o clases. El propósito principal de las pruebas unitarias es asegurar que cada parte aislada del código (unidad) realice las tareas previstas de manera adecuada.

<Card color='yellow'>

Se recomienda que las pruebas unitarias sean creadas dentro de la carpeta `test` en la raíz del proyecto para mantener un diseño limpio y ordenado

</Card>

```dart title='Ejemplo de prueba unitaria'
import 'package:flutter_test/flutter_test.dart';
import 'package:unit_test/counter.dart';

class Counter {

  int value = 0;
  Counter({this.value = 0});

  void increment() => value++;

  void decrement() => value--;

  void reset() => value = 0;

}

void main() {
  
  Counter counter;
  group(

    'Group of tests for the counter -',

    () {

      test(
        'Testing the increment counter',
        () => {
          //setup
          counter = Counter(value: 1),
          //do
          counter.increment(),
          //test
          expect(counter.value, 2)
        },
      );

      test(
        'Testing the decrement counter',
        () => {
          //setup
          counter = Counter(value: 10),
          //do
          counter.decrement(),
          //test
          expect(counter.value, 9)
        },
      );

    },
  );
}
```