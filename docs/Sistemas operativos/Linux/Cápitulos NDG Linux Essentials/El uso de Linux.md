---

title: El uso de Linux
sidebar_position: 3

---

<Row>

<img src="https://raw.githubusercontent.com/SanRM/notas-de-aprendizaje/main/docs/Sistemas%20operativos/Linux/img/3-LPI-Graphics.png" height="200" />

<p>

## ¿Cuál es la mejor posición de empleo de Linux que los Gerentes de Reclutamiento de TI están buscando?

Administradores de Sistemas

*- Reporte Laboral de Linux 2013, Linux Foundation & Dice*

</p>

</Row>

<Card>
    
## Modo gráfico vs Modo no gráfico

Linux se puede usar de dos maneras: modo gráfico y modo no gráfico.

|Característica	|Modo Gráfico|	Modo No Gráfico|
|---|---|---|
|Interfaz|	Basada en ventanas con menús y herramientas gráficas.	|Basada en texto, sin ventanas.|
|Inicio de sesión	|Interfaz gráfica para ingresar usuario y contraseña.	|Sesión de texto para ingresar usuario y contraseña.|
|Aplicaciones	|Navegadores web, editores gráficos, correos electrónicos con interfaz gráfica.|	Editores de texto, navegadores y correos electrónicos en formato de texto.|
|Shells	|Se pueden tener múltiples shells abiertos en ventanas.	|Se accede directamente al shell de texto.|
|Uso de recursos	|Requiere más recursos gráficos y de sistema.	|Más eficiente en el uso de recursos, ideal para servidores.|
|Visualización	|Ofrece un entorno visual con opciones de navegación.|	No hay navegación visual; solo texto.|
|Mensajes del día (MOTD)|	No visible directamente en la interfaz gráfica.	|Visible al iniciar sesión, muestra información del sistema.|
|Historial de comandos	|Los comandos pueden ser revisados en el historial de la terminal gráfica.|	La terminal mantiene el historial y permite desplazarse hacia arriba para ver comandos anteriores.|

:::info

El modo gráfico es más visual y accesible, mientras que el modo no gráfico es más eficiente para entornos de servidor y tareas basadas en texto.

:::

</Card>

<Card>
    
## Líneas de comandos

La línea de comandos es una interfaz de texto que permite a los usuarios interactuar con el sistema operativo mediante comandos.

Si se inicia sesión de forma gráfica, se puede acceder a la línea de comandos a través de una terminal. En el modo no gráfico, la línea de comandos es la interfaz principal.

</Card>

<Card>
    
## Virtualización y Cloud Computing

Linux es un sistema operativo multiusuario, esto permite que varios usuarios diferentes trabajen simultáneamente, pero puede haber problemas si un usuario consume demasiados recursos. Los usuarios suelen operar con permisos limitados, complicando la ejecución de servidores web individuales.

### Virtualización

La virtualización es un proceso donde un equipo físico, llamado **host**, ejecuta múltiples copias de un sistema operativo, cada una llamada **invitado**. El **host** ejecuta un software llamado **hipervisor** que cambia el control entre los diferentes **invitados**, tal como el kernel de Linux funciona para los procesos individuales.

La virtualización permite usar una CPU potente para crear varias máquinas virtuales en un solo servidor, distribuyendo los recursos de manera eficiente, aunque la memoria puede ser una limitación, los avances tecnológicos han mejorado la capacidad de los **hipervisores** para manejar más máquinas virtuales.

Cada máquina virtual recibe su propia CPU, RAM y almacenamiento, y no necesita saber que está en una máquina virtual. - Esto reduce la necesidad de hardware físico y permite crear y eliminar máquinas virtuales fácilmente.

El Cloud Computing usa esta tecnología para ofrecer recursos como servidores y almacenamiento en centros de datos remotos, permitiendo pagar solo por lo que se usa, esto es más económico que mantener hardware propio aunque la seguridad, el rendimiento, el costo y la funcionalidad son consideraciones importantes.

Linux es clave en el ***Cloud Computing***, ya que muchos servidores virtuales y servicios en la nube se basan en el kernel de Linux.

</Card>

<Card>
    
## Uso de Linux para el trabajo

Las herramientas básicas en oficinas incluyen procesadores de texto, hojas de cálculo, paquetes de presentación y navegadores web. **LibreOffice** maneja las tres primeras funciones:

1. **Procesador de textos** para editar documentos como informes y memos.
2. **Hojas de cálculo** para trabajar con números, crear gráficos y realizar cálculos.
3. **Paquete de presentación** para diseñar diapositivas con texto, gráficos y videos.

**LibreOffice** permite vincular documentos y hojas de cálculo para mantener actualizada la información, también es compatible con otros formatos de archivo, como Microsoft Office y PDF, y se puede integrar con software Wiki mediante extensiones.

En Linux, los navegadores como Firefox y Google Chrome reciben actualizaciones y correcciones de errores regularmente. Sin embargo, algunos complementos, como Adobe Flash, pueden tener problemas de compatibilidad debido a la dependencia de otras compañías.

</Card>

<Card>
    
## Proteger tu equipo con Linux

La seguridad en Linux es una preocupación importante, algunas medidas de seguridad incluyen:

1. **Contraseñas seguras**: Una buena contraseña tiene al menos 10 caracteres y contiene una mezcla de números y letras (tanto mayúsculas y minúsculas) y símbolos especiales. 

    - **KeePassX** Es un paquete de software de código abierto que almacena contraseñas de forma segura, protegiéndolas con una contraseña maestra. 
    
2. **Punto de comprobación de actualizaciones**: Las actualizaciones de seguridad son importantes para proteger el sistema contra vulnerabilidades. 

    - **Unattended-Upgrades** es un paquete que instala automáticamente las actualizaciones de seguridad en segundo plano.

3. **Firewall**: Un firewall protege el sistema de conexiones entrantes no deseadas. Firewall es un dispositivo que filtra el tráfico de red y Linux tiene uno integrado.

    - **gufw** es una interfaz gráfica para el firewall **ufw** *(Uncomplicated Firewall)* que facilita la configuración del firewall.

    - Bajo el capó se está usando **iptables** que es el sistema firewall integrado en el kernel de Linux, en lugar de introducir comandos iptables complejos, la **GUI** (Interfaz Gráfica de Usuario) de **gufw** simplifica la configuración del firewall.
 
</Card>

<Card>
    
| **Aspecto**|  **Descripción** |
|---|---|
| **Contraseñas**             | Usa contraseñas diferentes para cada sitio web. **KeePassX** puede ayudarte a gestionar contraseñas seguras y únicas.                                                                                                                                              |
| **Información personal**    | Proporciona solo la información esencial para evitar que se use para suplantación de identidad.                                                                                                                                                               |
| **Cookies y seguimiento**   | Las cookies permiten el seguimiento de la actividad del usuario. Los scripts de terceros pueden usar estas cookies para rastrear el comportamiento en varios sitios. Ajusta la configuración de cookies en el navegador para limitar el seguimiento.     |
| **Historial de búsqueda**   | Elimina el historial de búsqueda para mantener la privacidad de las visitas realizadas.                                                                                                                                                                        |
| **Navegador Tor**           | Utilizar el navegador Tor es una forma de navegar de forma anónima. Tor enmascara la dirección IP del usuario y enruta el tráfico a través de una red de servidores para proteger la privacidad.                                                                    |


</Card>