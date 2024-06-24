---
title: Normalización 
---

# Normalización 

## Definición
La normalización es un proceso fundamental en el diseño de bases de datos relacionales que busca organizar los datos de manera eficiente y reducir la redundancia, este proceso ayuda a evitar problemas de inconsistencia y anomalías en los datos mejorando la integridad y el rendimiento de la base de datos. 

Las formas normales más comunes son:
- [Primera Forma Normal (1NF)](#primera-forma-normal-1nf). 
- [Segunda Forma Normal (2NF)](#segunda-forma-normal-2nf).
- [Tercera Forma Normal (3NF)](#tercera-forma-normal-3nf).

import Card from '@site/src/components/Card/Card';


<Card color='blue'>

## Primera Forma Normal (1NF)
Una tabla se considera en Primera Forma Normal (1NF) si no contiene grupos repetitivos de datos y todos los atributos son atómicos, es decir, indivisibles. Cada celda de la tabla debe contener un solo valor y no puede tener múltiples valores separados por comas u otros delimitadores.

### Pasos para convertir una tabla en 1NF

1. Eliminar grupos de repetición en tablas individuales.
2. Crear una tabla independiente para cada conjunto de datos relacionados.
3. Identificar cada conjunto de datos relacionados con una clave primaria.

**Ejemplo:** En un sistema de gestión de estudiantes, una tabla que almacena estudiantes y sus cursos debe descomponerse si los cursos están almacenados en una sola columna con valores separados por comas. En su lugar, se debe crear una tabla de estudiantes y una tabla de cursos con una relación de uno a muchos.
</Card>


<Card color='darkBlue'>
## Segunda Forma Normal (2NF)
Una tabla está en Segunda Forma Normal (2NF) si cumple con los requisitos de 1NF y todos los atributos no clave están completamente dependientes de la clave primaria. Esto significa que ningún atributo no clave debe depender parcialmente de la clave primaria.

### Pasos para convertir una tabla en 2NF

1. Crear tablas independientes para conjuntos de valores que se aplican a varios registros.
2. Relacionar estas tablas con una clave foránea.

**Ejemplo:** En un sistema de gestión de pedidos, una tabla que almacena detalles del pedido debe dividirse si algunos atributos dependen solo parcialmente de la clave primaria. Si la clave primaria es la combinación de ID de pedido y ID de producto, pero el nombre del producto solo depende del ID de producto, entonces el nombre del producto debe moverse a una tabla de productos separada.
</Card>


<Card color='cyan'>
## Tercera Forma Normal (3NF)
Una tabla está en Tercera Forma Normal (3NF) si cumple con los requisitos de 2NF y no hay dependencias transitivas entre los atributos no clave. Esto significa que los atributos no clave deben depender directamente de la clave primaria y no de otros atributos no clave.

### Pasos para convertir una tabla en 3NF

1. Eliminar los campos que no dependen de la clave.

**Ejemplo:** En un sistema de gestión de empleados, si una tabla que almacena empleados incluye una columna para el nombre del departamento y una columna para el nombre del gerente del departamento, pero el nombre del gerente depende del nombre del departamento, entonces el nombre del gerente debe moverse a una tabla de departamentos separada.
</Card>


<Card>
## Resumen
El proceso de normalización generalmente implica dividir una tabla grande en varias tablas más pequeñas y relacionadas entre sí, minimizando así la redundancia y mejorando la integridad de los datos. Algunas de las ventajas de la normalización incluyen:

- Reducción de la redundancia de datos.
- Mejora de la integridad de los datos al evitar anomalías de actualización, inserción y eliminación.
- Mejora del rendimiento de la consulta al tener tablas más pequeñas y bien estructuradas.

Es importante tener en cuenta que la normalización también puede llevar a un mayor número de joins en las consultas, lo que podría afectar el rendimiento en algunas situaciones. Por esto, el proceso de normalización debe equilibrarse con las necesidades específicas del sistema y las consideraciones de rendimiento.
</Card>
