# 📏 Guía Avanzada de Layout y Compatibilidad

Esta guía te enseñará cómo usar tu propio contenedor CSS de manera segura sin romper la estructura del componente, y te explicará los detalles de compatibilidad.

## 1. Comportamiento del Layout

El componente principal se encierra en una etiqueta `<section class="vghc-wrapper">`.
Por defecto, este contenedor hereda el ancho completo (`100%`) de su padre. 

### Usando Flexbox o CSS Grid

Si deseas centrar el calendario, restringir su tamaño o acomodarlo en un Dashboard, puedes envolver la etiqueta `<github-calendar>` en un contenedor nativo tuyo.

**No necesitas tocar el código de la librería.** Sólo haz esto en tu HTML:

```html
<style>
  /* Tu contenedor personalizado */
  .mi-dashboard-card {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
</style>

<div class="mi-dashboard-card">
  <github-calendar username="moonhuntercode"></github-calendar>
</div>
```

Debido a que usamos Light DOM y nuestras clases están estrictamente aisladas (`vghc-`), tu contenedor de Grid o Flex no romperá los estilos internos del calendario.

## 2. Compatibilidad de Navegadores

A pesar de que el código base está escrito con sintaxis moderna (ES Modules y Clases de Javascript), el empaquetador de la librería (Vite) está configurado para exportar hacia un **Target ES2015 (ES6)**.

### ¿Qué significa esto?
- **Soportado por el 99% de los navegadores**: Funciona perfectamente en versiones antiguas como Chrome 51+, Safari 10+, Edge 14+ y Firefox 54+.
- **Sin Babel**: Hemos eliminado dependencias pesadas como Babel. La transpilación se maneja mediante *Esbuild* (el motor súper rápido detrás de Vite).
- **Internet Explorer 11**: IE11 está oficialmente obsoleto. Los Web Components nativos (Custom Elements v1) no funcionan en IE11 sin usar polyfills muy agresivos que arruinarían el rendimiento para los usuarios modernos. Por ello, IE11 **no** está soportado.

## 3. Scoping Estricto (Light DOM Seguro)

Si miras el HTML generado, notarás que **todas** las clases de la librería tienen el prefijo `vghc-` (Vanilla GitHub Calendar).

- `vghc-wrapper`
- `vghc-header`
- `vghc-grid`
- `vghc-day`

Esto garantiza que si en tu página tienes un `<div class="error">` o `<header class="header">`, tus estilos globales jamás arruinarán accidentalmente la estructura visual de la librería. Esto es el equivalente moderno y ligero de usar módulos de CSS o Shadow DOM.
