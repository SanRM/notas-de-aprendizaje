---

title: Estructura de carpetas
sidebar_position: 2

---

La carpeta de test unitarios debe tener la misma estructura que la carpeta de código fuente, pero con el prefijo `test` en el nombre de los paquetes y clases.

Por ejemplo, si la clase `Clase.java` se encuentra en el paquete `com.example.app`, la clase de test unitarios `ClaseTest.java` debe estar en el paquete `com.example.app` dentro de la carpeta `test`.

```java title='Estructura de carpetas - Test Unitarios'
src
├── main
│   └── java
│       └── com
│           └── example
│               └── app
│                   └── Clase.java
└── test
    └── java
        └── com
            └── example
                └── app
                    └── ClaseTest.java
```