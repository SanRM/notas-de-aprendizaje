---
title: Hoja de Ayuda
slug: /ayuda
sidebar_position: 0
unlisted: true
tags: [docusaurus, ayuda]
---

# Hoja de ayuda de componentes docusaurus


## Ejecutar documentación localmente

```bash
npm run start
```

Luego diríjase a [http://localhost:3000](http://localhost:3000) en el navegador.

---


## Detalles desplegables

<details>
<summary>
  Sección desplegable
</summary>

- Detalle 1
- Detalle 2
- Detalle 3

</details>

```markdown
<details>
<summary>
  Sección desplegable
</summary>

- Detalle 1
- Detalle 2
- Detalle 3

</details>
```

---

## Pestañas

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Manzaja">
    Contenido de la pestaña Manzaja
  </TabItem>
  <TabItem value="Naranja">
    Contenido de la pestaña Naranja
  </TabItem>
</Tabs>

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Manzaja" label="Manzaja" default>
    Contenido de la pestaña Manzaja
  </TabItem>
  <TabItem value="orange" label="Orange">
    Contenido de la pestaña Orange
  </TabItem>
</Tabs>
```

---

## Tablas

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Fila 1    | Datos 1   | Datos 1   |
| Fila 2    | Datos 2   | Datos 2   |
| Fila 3    | Datos 3   | Datos 3   |

```markdown"
| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Fila 1    | Datos 1   | Datos 1   |
| Fila 2    | Datos 2   | Datos 2   |
| Fila 3    | Datos 3   | Datos 3   |
```

---

## Notas / Admonitions

### Nota
:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

```markdown"
:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

### Tip
:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

```markdown"
:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

### Info
:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```markdown"
:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

### Warning
:::warning
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```markdown"
:::warning
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

### Danger
:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```markdown"
:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

---

## Listas

### Lista de tareas
- [ ] Tarea pendiente
- [x] Tarea completada

```markdown"
- [ ] Tarea pendiente
- [x] Tarea completada
```

### Lista desordenada
* Elemento 1
* Elemento 2

```markdown"
* Elemento 1
* Elemento 2
```

### Lista ordenada
1. Primero
1. Segundo

```markdown"
1. Primero
1. Segundo
```

---

## Enlaces

Markdown text with [links](#Enlaces).

```markdown"
Markdown text with [links](#Enlaces)
```

---

## Imágenes

![Docusaurus logo](/img/docusaurus.png)

```markdown"
![Docusaurus logo](/img/docusaurus.png)
```

---

## Bloques de código

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

```markdown"
\```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return <h1>Hello, Docusaurus!</h1>;
}
\```
```

---

## Tarjetas

Este elemento personalizado permite crear tarjetas con diferentes colores.

<Card>

<Card color='default'>
### default
</Card>
<Card color='magenta'>
### magenta
</Card>
<Card color='pink'>
### pink
</Card>
<Card color='red'>
### red
</Card>
<Card color='darkBlue'>
### darkBlue
</Card>
<Card color='blue'>
### blue
</Card>
<Card color='cyan'>
### cyan
</Card>
<Card color='green'>
### green
</Card>
<Card color='yellow'>
### yellow
</Card>
<Card color='orange'>
### orange
</Card>

```markdown"
<Card color='default'>
  default
</Card>

<Card color='magenta'>
  magenta
</Card>

<Card color='pink'>
  pink
</Card>

<Card color='red'>
  red
</Card>

<Card color='darkBlue'>
  darkBlue
</Card>

<Card color='blue'>
  blue
</Card>

<Card color='cyan'>
  cyan
</Card>

<Card color='green'>
  green
</Card>

<Card color='yellow'>
  yellow
</Card>

<Card color='orange'>
  orange
</Card>
```
</Card>
---

## Inserción de videos

```markdown
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/_An9EsKPhp0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/_An9EsKPhp0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>