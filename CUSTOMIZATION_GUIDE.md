# 🎨 Guía Avanzada de Personalización y Diseño (Beginner Friendly)

Esta librería fue diseñada para ser lo más amigable posible con principiantes. No tienes que saber configuraciones complejas de JavaScript, todo el diseño y su estructura visual se maneja a través de **CSS moderno, HTML semántico y un diseño Mobile-First**.

A continuación, te explicamos cómo modificar su estilo, entender su estructura para repararla, y personalizarla al 100%.

---

## 🏗️ 1. Estructura Semántica (HTML)

El componente `<github-calendar>` genera internamente una estructura HTML limpia y con sentido (HTML5 semántico), sin abusar de `<div>` innecesarios. Esto ayuda a la accesibilidad y a leer el código fácilmente:

```html
<section class="github-calendar-wrapper">
  
  <!-- Cabecera con el total de contribuciones -->
  <header class="calendar-header">
    <h3 class="calendar-title">...</h3>
  </header>
  
  <!-- La cuadrícula principal (Grid) -->
  <div class="calendar-grid" role="grid" aria-label="GitHub Contributions Calendar">
    <div class="calendar-day" role="gridcell" data-level="1" data-tooltip="..."></div>
    <!-- ... más días ... -->
  </div>
  
  <!-- Pie de página con los enlaces y la leyenda -->
  <footer class="calendar-footer">
    <a href="...">Learn how we count contributions</a>
    <div class="legend" aria-hidden="true">...</div>
  </footer>

</section>
```

---

## 📱 2. Mobile-First y Responsividad

Uno de los retos de un calendario anual es que tiene **365 cuadritos**. En la pantalla de un móvil, no caben todos a lo ancho de forma natural sin volverse microscópicos.

**¿Cómo lo resolvimos de forma nativa?**
En lugar de comprimirlos, el diseño es **Mobile-First**. La clase `.calendar-grid` tiene estas propiedades clave en `styles.css`:

```css
.calendar-grid {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  gap: 3px;
  /* 👇 Estas tres propiedades hacen la magia en móviles 👇 */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}
```

### 🛠️ ¿Qué tocar si quieres cambiar la responsividad?
- **Si no quieres que se haga scroll horizontal**: Quita `overflow-x: auto`. Pero ten en cuenta que tendrás que reducir el tamaño de `.calendar-day` drásticamente usando Media Queries (`@media (max-width: 600px) { .calendar-day { width: 5px; height: 5px; } }`).
- **Si el scroll en iPhone/Android se siente tosco**: Asegúrate de nunca borrar `-webkit-overflow-scrolling: touch;`, esto permite el deslizamiento inercial suave.
- **Modificar la barra espaciadora (Scrollbar)**: Si no te gusta la barra gris, puedes modificar `.calendar-grid::-webkit-scrollbar-thumb` en tu CSS.

---

## 🎨 3. Cambiar de Colores (Custom Themes)

¡Olvídate de pasar variables complicadas a Javascript! Esta librería aprovecha las **Variables CSS (Custom Properties)**. 

El componente original de GitHub tiene 5 niveles de color. Para cambiar los colores en tu página web, sólo tienes que envolver el `<github-calendar>` en un `<div>` con tu propia clase, o ponerle las variables directamente en el CSS de tu página.

### Ejemplo Práctico: Tema Púrpura (Purple Theme)

En el CSS de tu página añade esto:

```css
.mi-tema-morado {
  /* Fondo cuando no hay contribuciones (vacío) */
  --gh-calendar-level-0: #f4e8fb; 
  
  /* Gradiente de menos a más actividad */
  --gh-calendar-level-1: #e1b4f4;
  --gh-calendar-level-2: #c57de9;
  --gh-calendar-level-3: #a34bcf;
  --gh-calendar-level-4: #7925a8;
  
  /* Color de fondo de los textos flotantes (tooltips) */
  --gh-calendar-tooltip-bg: #4c116d;
  
  /* Color del texto (opcional) */
  --gh-calendar-text-color: #24292f;
}
```

Y en tu HTML lo aplicas súper fácil:

```html
<div class="mi-tema-morado">
  <github-calendar username="moonhuntercode"></github-calendar>
</div>
```

Las variables CSS atraviesan el **Shadow DOM** mágicamente. Puedes inventar el color que quieras (Azul, Rojo Oscuro tipo "Matrix", Naranja de Halloween, etc) copiando la estructura de los niveles `1` al `4`.
