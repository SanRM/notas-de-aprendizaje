---

title: Reglas para crear diseños de calidad

---

Se considera que las 5 reglas de Kent Beck del libro “diseño sencillo” son fundamentales para crear un software bien diseñado. 

## Según Kent, un diseño es sencillo si cumple estas 5 reglas:

<Card>
    
### 1. Ejecutar todas las pruebas

- La efectividad de un sistema no solo depende de su diseño teórico, sino también de su capacidad para ser probado y verificar su funcionamiento real, un sistema bien probado y que supera todas las pruebas se considera `testable`.

- La `testabilidad` se logra diseñando clases pequeñas y con un único propósito, lo que facilita las pruebas y promueve el Principio de Responsabilidad Única (SRP).

- La capacidad de realizar pruebas continuas también influye en la aplicación de principios como el Principio de Inversión de Dependencia (DIP) y el uso de herramientas como la inyección de dependencias.

</Card>

<Card>
    
### 2. Refactorizar

- Después de crear pruebas, es esencial mantener la limpieza del código y las clases a través de la refactorización progresiva.

- Durante este proceso, se añaden líneas de código y luego se evalúa si el diseño ha mejorado o empeorado, si hay un deterioro, se realiza una limpieza y se ejecutan las pruebas para asegurar que no haya impactos negativos.

- La existencia de pruebas brinda confianza para realizar cambios sin temor a dañar el código.

</Card>

<Card>
    
### 3. Eliminar duplicados

- Los duplicados son los mayores enemigos de un sistema bien diseñado, suponen un esfuerzo adicional, riesgos añadidos y una complejidad a mayores innecesaria.
- La creación de un sistema limpio requiere la eliminación de duplicados, aunque sean unas cuantas líneas de código.
- El patrón Método de plantilla es una técnica muy utilizada para eliminar duplicados de nivel superior.

<Card>

Ejemplo

```java
public class VacationPolicy {

	public void accrueUSDivisionVacation() {
		// código para calcular las vacaciones en función de las horas trabajadas

		// código para garantizar que las vacaciones cumplen los mínimos legales

		// código para aplicar vacation al registro payroll
	}

	public void accrueEUDivisionVacation() {
		// código para calcular las vacaciones en función de las horas trabajadas

		// código para garantizar que las vacaciones cumplen los mínimos legales

		// código para aplicar vacation al registro payroll
	}
}
```

El código entre `accrueUSDivisionVacation` y `accrueEuropeanDivisionVacation` es prácticamente idéntico, a excepción del cálculo de mínimos legales esa parte del algoritmo cambia en función del tipo de empleado.

- Podemos eliminar la duplicación evidente si aplicamos del patrón de Método de plantilla:
        
	```java
	abstract public class VacationPolicy {
	
		public void accrueVacation() {
			calculateBaseVacationHours();
			alterForLegalMinimums();
			applyToPayroll();
		}

		private void calculateBaseVacationHours(){};
		abstract protected void alterForLegalMinimums();
		private void applyToPayroll(){};
	}
	
	public class USVacationPolicy extends VacationPolicy {}
		@Override protected void alterForLegalMinimums() {
			// Lógica específica de EE.UU.
		}
	}
	
	public class EUVacationPolicy extends VacationPolicy {
		@Override protected void alterForLegalMinimums() {
			// Lógica específica de la UE.
		}
	}
	
	```
	
	De esta forma las subclases ocupan el vacío generado en el algoritmo `accrueVacation`
	y solamente proporcionan los datos que no están duplicados.

</Card>

</Card>

<Card>
    
### 4. Expresividad

- El principal coste de un proyecto de software es su mantenimiento a largo plazo, para minimizar los posibles defectos al realizar cambios, es fundamental que comprendamos el funcionamiento del sistema.

- Al aumentar la complejidad de los sistemas, el programador necesita más tiempo para
entenderlo y aumentan las posibilidades de errores.

- El código debe expresar con claridad la intención de su autor. Cuando más claro sea el código, menos tiempo perderán otros en intentar comprenderlo, esto reduce los defectos y el coste de mantenimiento.

- Las pruebas de unidad bien escritas también son expresivas. Uno de los principales objetivos de una prueba es servir de documentación mediante ejemplos, los que lean las pruebas deben entender con facilidad para qué sirve una clase.

</Card>

<Card>
    
### 5. Clases y métodos mínimos

- Esta regla es la de menor prioridad de todas, aunque sea importante reducir la cantidad de clases y funciones, es más importante contar con pruebas, eliminar duplicados y expresarse correctamente.

- Se busca minimizar el número de clases y métodos en el código. La simplicidad es clave para mejorar la comprensión y mantenibilidad del software.

- Apoya el principio de SRP, donde cada clase y método debe tener una única responsabilidad clara y específica. Esto facilita la comprensión y la identificación de posibles mejoras o errores.

</Card>