---

title: SonarQube

---

[**SonarQube**](https://www.sonarqube.org/) es una plataforma de código abierto para la inspección continua de la calidad del código fuente que permite realizar análisis automáticos de código para detectar errores, código duplicado y vulnerabilidades de seguridad en más de 20 lenguajes de programación.

<Card>
    
## Características

- **Análisis de código estático:** Realiza análisis estático del código fuente para detectar errores, código duplicado y vulnerabilidades de seguridad.

- **Integración continua:** Se integra con herramientas de integración continua como Jenkins, Travis CI y Azure DevOps.

- **Soporte para múltiples lenguajes:** Soporta más de 20 lenguajes de programación, incluyendo Java, JavaScript, Python, C#, C++ y Ruby.

- **Detección de vulnerabilidades:** Detecta vulnerabilidades de seguridad en el código fuente.

- **Generación de informes:** Genera informes detallados sobre la calidad del código fuente.

</Card>

<Card>
    
## Instalación

Para instalar SonarQube, es necesario descargar el paquete de instalación correspondiente a la plataforma en la que se desea instalar (Windows, Linux o macOS) desde la [página de descargas](https://www.sonarqube.org/downloads/).

Una vez descargado el paquete de instalación, se debe seguir el proceso de instalación correspondiente a la plataforma en la que se desea instalar.

<Tabs>
    
<TabItem value='Docker' label='Docker'>

### Instalación de Docker

Si no se tiene instalado Docker, se puede instalar siguiendo las instrucciones de la [documentación oficial](https://docs.docker.com/get-docker/).

### Instalación de SonarQube con Docker

1. Descargar la imagen de SonarQube desde Docker Hub:

    ```java
    docker pull sonarqube
    ```

2. Ejecutar SonarQube en un contenedor Docker:

    ```java
    docker run -d --name sonarqube -p 9000:9000 sonarqube
    ```

    Explicación de los parámetros utilizados:

    - `docker run`: Comando para ejecutar un contenedor Docker.
    - `-d`: Bandera para ejecutar el contenedor en segundo plano.
    - `--name sonarqube`: Nombre del contenedor.
    - `-p 9000:9000`: Mapeo del puerto 9000 del contenedor al puerto 9000 del host.
    - `sonarqube`: Nombre de la imagen de SonarQube previamente descargada.
    
3. Acceder a la interfaz web de SonarQube en `http://localhost:9000` y configurar el servidor.

</TabItem>

<TabItem value='Windows' label='Windows'>

### Instalación en Windows

Para instalar SonarQube en Windows, se debe seguir los siguientes pasos:

1. Descomprimir el paquete de instalación en una carpeta de destino.

2. Configurar las variables de entorno `JAVA_HOME` y `PATH` para que apunten a la instalación de Java en el sistema.

3. Editar el archivo `conf/sonar.properties` para configurar la base de datos y el puerto en el que se ejecutará SonarQube.

4. Ejecutar el script `bin/windows-x86-64/StartSonar.bat` para iniciar SonarQube.

5. Acceder a la interfaz web de SonarQube en `http://localhost:9000` y configurar el servidor.

</TabItem>
    
</Tabs>

</Card>

<Card>
    
## Importación de proyectos

Hay dos métodos principales para integrar SonarQube con un proyecto y cada uno tiene su propio flujo de trabajo:

<Tabs>
    
<TabItem value='Directo' label='Directo'>

### Análisis directo

<Card>
    
#### 1. Generar token de acceso.

    Se debe generar un token de acceso en SonarQube para el proyecto y configurarlo en el archivo `pom.xml`:

    - En el menú de administración de SonarQube, el icono de perfil y seleccionar "My Account", "Security" y luego configurar el token de acceso en "Generate Tokens".

</Card>

<Card> 
   
#### 2. Creación del archivo de configuración

Crear un archivo de configuración de SonarQube en la raíz del proyecto con el nombre `sonar-project.properties`.

```java title='sonar-project.properties'
// Nombre del proyecto
sonar.projectName=SpringApp
sonar.projectVersion=1.0

// Directorios de código fuente y pruebas
sonar.sources=src/main/java
sonar.tests=src/test/java

// URL del servidor de SonarQube
sonar.host.url=http://localhost:9000

// (Opcional) el token de autenticación

sonar.login=(Token generado en SonarQube) 

//Configuración de cobertura de pruebas (si se está usando herramientas de cobertura)

// sonar.java.coveragePlugin=jacoco
// sonar.jacoco.reportPaths=target/jacoco.exec
```

:::danger
Es importante no subir el token de autenticación a un repositorio público, para evitar esto se puede configurar el token como una variable de entorno o pasar directamente el token en el de ejecución del análisis.
:::

</Card>

</TabItem>

<TabItem value='Maven' label='Maven'>

### Análisis con Maven

<Card>
    
#### 1. Añadir el plugin de SonarQube.

    Se debe añadir el siguiente plugin en el archivo `pom.xml` del proyecto:
    
    ```code title='pom.xml'
    <plugin>
        <groupId>org.sonarsource.scanner.maven</groupId>
        <artifactId>sonar-maven-plugin</artifactId>
        <version>4.0.0.4121</version> // Versión del plugin
    </plugin>
    ```

    Se puede revisar la versión más reciente del plugin en el [repositorio de Maven](https://mvnrepository.com/artifact/org.sonarsource.scanner.maven/sonar-maven-plugin).

</Card>

<Card>
    
#### 2. Generar token de acceso.

    Se debe generar un token de acceso en SonarQube para el proyecto y configurarlo en el archivo `pom.xml`:

    - En el menú de administración de SonarQube, el icono de perfil y seleccionar "My Account", "Security" y luego configurar el token de acceso en "Generate Tokens".

</Card>

<Card>

#### 3. Configurar la dependencia.

    Se debe configurar el plugin de SonarQube en el archivo `pom.xml` del proyecto:

    ```code
    <properties>

        ... <!-- Otras propiedades -->

        <sonar.projectKey>SpringApp</sonar.projectKey> <!-- Llave del proyecto, debe ser única -->
        <sonar.projectName>SpringApp</sonar.projectName> <!-- Nombre del proyecto, puede ser el mismo que el projectKey o diferente -->
        <sonar.host.url>http://localhost:9000</sonar.host.url> <!-- URL del servidor de SonarQube -->
        <sonar.coverage.jacoco.xmlReportPaths>target/site/jacoco/jacoco.xml</sonar.coverage.jacoco.xmlReportPaths> <!-- Ruta del archivo jacoco.xml -->
        <sonar.coverage.exclusions>src/**/entity/*, src/**/SpringAppApplication.java</sonar.coverage.exclusions> <!-- Exclusiones de cobertura de código --> 
        
        <sonar.login>(Token generado en el paso anterior)</sonar.login> <!-- Token de acceso generado en SonarQube -->

    </properties>
    ```

:::danger
Es importante no subir el token de autenticación a un repositorio público, para evitar esto se puede configurar el token como una variable de entorno o pasar directamente el token en el de ejecución del análisis.
:::

</Card>

</TabItem>

</Tabs>

<Card>
    
### Ejecución del análisis

Ejecutar el análisis de SonarQube en el proyecto:

<Tabs>
    
<TabItem value='Pasando el token de acceso como argumento' label='Pasando el token de acceso como argumento'>

Si el token de acceso no se ha configurado en el archivo `pom.xml`, se puede ejecutar el análisis pasando el token como argumento:

```java
mvn sonar:sonar -D sonar.login=(Token generado en SonarQube)
```
</TabItem>

<TabItem value='Sin pasar el token de acceso como argumento' label='Sin pasar el token de acceso como argumento'>

Si el token de acceso se ha configurado en el archivo `pom.xml`, se puede ejecutar el análisis sin pasar el token como argumento:

```java
mvn sonar:sonar
```
</TabItem>
    
</Tabs>

</Card>

</Card>
