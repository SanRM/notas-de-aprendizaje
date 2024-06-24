---

title: Genéricos

---

## Definición

Los genéricos en Dart permiten la creación de código flexible y reutilizable al trabajar con tipos parametrizados mientras mantienen la seguridad de tipo. Pueden aplicarse en la definición de clases, funciones e interfaces.

<Card>

### Mantener la seguridad de tipo en el código tiene ventajas:

<Card>

#### Prevención de errores: 
  - Al especificar el tipo de datos que una variable puede contener, se reduce la posibilidad de errores en tiempo de ejecución.
  - Por ejemplo, si se intenta realizar una operación que no es compatible con el tipo de datos de una variable, el compilador lo advertirá.
</Card>  

<Card>

#### Legibilidad del código: 
  - Los tipos de datos hacen que tu código sea más fácil de entender.
  - Al ver el tipo de una variable, otros desarrolladores pueden entender rápidamente qué tipo de datos se supone que debe contener.
</Card>  



</Card>

<Card>
Se puede emplear cualquier letra para representar un parámetro de tipo, pero por convención se utilizan letras como **T**, E, K y **V**:

- **T** se usa para “Type” (Tipo). Es el más genérico y se puede usar para cualquier tipo.
- **E** se usa para “Element” (Elemento). Se utiliza a menudo en las colecciones para representar el tipo de elementos que la colección contiene.
- **K** y **V** se usan para “Key” (Clave) y “Value” (Valor). Se utilizan a menudo en los mapas para representar los tipos de las claves y los valores.
</Card>


<Card>

## Clases
```dart
class Caja<T> {
  T contenido;

  Caja(this.contenido);
}

void main() {
  var cajaEnteros = Caja<int>(42);
  var cajaCadenas = Caja<String>('Hola, Dart!');
}
```
</Card>

<Card>

##  Funciones Genéricas
```dart
T obtenerPrimero<T>(List<T> lista) {
  return lista.isNotEmpty ? lista[0] : null;
}

void main() {
  var listaEnteros = [1, 2, 3];
  var primerEntero = obtenerPrimero<int>(listaEnteros);
}
```
</Card>