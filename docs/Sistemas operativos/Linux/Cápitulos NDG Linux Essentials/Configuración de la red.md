---

title: Configuración de la red
sidebar_position: 12

---

## Configuración de la Red

### Conceptos Básicos

La configuración de la red en Linux implica ajustar varios parámetros para asegurar que los dispositivos puedan comunicarse de manera efectiva en una red local y a través de Internet. 

- Esta configuración puede realizarse mediante interfaces gráficas de usuario (GUI) o archivos de configuración específicos.

<Card>

### Terminología Básica de la Red

- **Red**: Conjunto de computadoras y otros dispositivos interconectados que pueden comunicarse y compartir recursos.
- **Host**: Dispositivo en una red, como una computadora o un servidor.
- **Nodo**: Punto de intersección dentro de una red.
- **Protocolo**: Conjunto de reglas que gobiernan la comunicación entre dispositivos en una red.

### Terminología de las Funciones de Redes

- **Gateway**: Dispositivo que actúa como punto de entrada o salida a otra red.
- **DNS (Domain Name Service)**: Sistema que traduce nombres de dominio a direcciones IP.
- **DHCP (Dynamic Host Configuration Protocol)**: Protocolo que asigna dinámicamente direcciones IP a dispositivos en una red.

### Las Direcciones IP

- **IPv4**: Dirección IP de 32 bits, comúnmente representada como cuatro octetos separados por puntos (e.g., 192.168.1.1).
- **IPv6**: Dirección IP de 128 bits, representada como ocho grupos de cuatro dígitos hexadecimales separados por dos puntos (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

<Card>
    
## Configurando los Dispositivos de Red

### Asignación Estática

Configurar manualmente la dirección IP, máscara de red, gateway y DNS.

### Asignación Dinámica

Utilizar **DHCP** para obtener automáticamente una dirección IP y otros parámetros de red.

### Configurar la Red usando una GUI

#### Network Manager

Herramienta GUI en muchas distribuciones de Linux para configurar la red. Permite configurar conexiones Ethernet, Wi-Fi, VPN y más.

### Configurar la Red usando el Archivo de Configuración

#### ifcfg

En distribuciones basadas en Red Hat, los archivos de configuración de red están ubicados en `/etc/sysconfig/network-scripts/`.

```bash
# /etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE=eth0
BOOTPROTO=static
IPADDR=192.168.1.100
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
DNS1=8.8.8.8
```

<Card>
    
#### El Archivo Primario de Configuración de IPv4

**ifcfg-eth0**: Contiene la configuración de una interfaz de red específica. Aquí se define la dirección IP, la máscara de red y otros parámetros.

</Card>

<Card>
    
#### El Archivo Primario de Configuración de IPv6

**ifcfg-eth0**: Similar al archivo de configuración de IPv4, pero incluye parámetros específicos de IPv6.

```bash  
# /etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE=eth0 # Nombre de la interfaz
BOOTPROTO=static # Protocolo de arranque
IPV6INIT=yes # Habilitar IPv6
IPV6ADDR=2001:db8::1/64 # Dirección IPv6
IPV6_DEFAULTGW=2001:db8::ff # Gateway IPv6
```

</Card>

<Card>
    

## Domain Name Service (DNS)

### Resolución de Nombres

Traduce nombres de dominio a direcciones IP. La configuración DNS se encuentra en `/etc/resolv.conf`.

```bash
# /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4
```

### Los Archivos Adicionales de Configuración de Red

**hosts:**

- Archivo ubicado en `/etc/hosts` que asocia nombres de dominio a direcciones IP.
</Card>

<Card>

## Reiniciar la Red

**Comando systemctl:**

Utilizado para reiniciar servicios de red en sistemas basados en systemd.

```bash
sudo systemctl restart network
```

### Las Herramientas de Red

**ifconfig**: Muestra información sobre las interfaces de red.

```bash
ifconfig eth0
ifconfig eth0 up
ifconfig eth0 down
```

---

**route**
Muestra o manipula la tabla de enrutamiento IP.

```bash
route -n
route add default gw 192.168.1.1
```

---

**ping**

El comando `ping` se utiliza para verificar la conectividad de red enviando paquetes a un host remoto y esperando una respuesta. 

- Si el host responde, la conectividad es exitosa.
- Si no hay respuesta, puede haber un problema de red.
- Se puede utilizar una dirección IP o un nombre de dominio.

```bash
ping 8.8.8.8
ping google.com
```

---

**netstat**
Muestra conexiones de red, tablas de enrutamiento y estadísticas de interfaz.

```bash
netstat -tuln
```

---

**dig**
Herramienta de línea de comandos para realizar consultas DNS, como buscar registros de DNS.

- Se puede utilizar una dirección IP o un nombre de dominio.
- Proporciona información detallada sobre la respuesta.
- Se puede utilizar para verificar la configuración de DNS.

```bash
dig google.com
```

---

**host**
Herramienta de línea de comandos para realizar consultas DNS, normalmente utilizada para buscar la dirección IP de un nombre de dominio.

```bash
host google.com
```

---

**ssh**

El comando `ssh` se utiliza para iniciar una sesión segura en un host remoto, permitiendo la ejecución de comandos en la máquina remota. 

- Se puede utilizar una dirección IP o un nombre de dominio.
- Se puede especificar un usuario y un puerto.
- Se puede utilizar para transferir archivos de forma segura.
- Utiliza el protocolo SSH (Secure Shell).

```bash
ssh user@hostname
Algoritmo RSA de Clave Pública
```

---

**Seguridad**
Utilizado SSH para asegurar la comunicación entre el cliente y el servidor.

```bash
ssh-keygen -t rsa
```

---

## Regresar a la Máquina Local

**Comando exit**
Finaliza la sesión SSH y regresa a la máquina local.

```bash
exit
```

</Card>

</Card>

</Card>