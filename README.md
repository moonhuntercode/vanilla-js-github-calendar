# 📅 Vanilla JS GitHub Calendar

[![NPM Version](https://img.shields.io/npm/v/vanilla-js-github-calendar.svg)](https://www.npmjs.com/package/vanilla-js-github-calendar)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://moonhuntercode.github.io/vanilla-js-github-calendar/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, dependency-free Web Component that displays a GitHub contributions calendar (heatmap) for any user. Built with pure Vanilla JS, HTML5, and CSS3.

🚀 **[View the Live Demo!](https://moonhuntercode.github.io/vanilla-js-github-calendar/)**

![Screenshot](preview.png)

## Features

- **No Dependencies**: Pure Vanilla JS Web Component (`<github-calendar>`).
- **Semantic HTML**: Built with accessible and clean HTML5 elements.
- **Mobile-First & Responsive**: Includes smooth touch horizontal scrolling for perfect display on phones.
- **Easy Customization**: Uses CSS Custom Properties for painless color themes (Purple, Blue, Dark Mode, etc.).
- **Vite Powered**: Blazing fast modern ESM tooling.

## Quick Start

### 1. Installation

```shell
npm install vanilla-js-github-calendar
```

### 2. Usage

You can use this library in several ways depending on your setup. In all cases, simply add the custom element with your username anywhere in your HTML:
```html
<github-calendar username="moonhuntercode"></github-calendar>
```

#### Option A: Using a CDN (Easiest, no build tools required)
The fastest way to use the library in plain HTML without installing anything locally:

```html
<head>
  <!-- Include the external stylesheet -->
  <link rel="stylesheet" href="https://unpkg.com/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.css">
</head>
<body>
  <!-- Include the script directly from CDN -->
  <script type="module" src="https://unpkg.com/vanilla-js-github-calendar"></script>
  
  <github-calendar username="moonhuntercode"></github-calendar>
</body>
```

#### Option B: Modern Bundlers (Vite, Webpack, React, Vue, etc.)
If you are using a modern frontend framework or a bundler, you split the usage between your HTML and your JavaScript entry point.

**1. In your JavaScript file (e.g., `main.js`):**
```javascript
// Import the component (automatically registers the <github-calendar> tag)
import 'vanilla-js-github-calendar';

// Import the CSS (if your bundler supports CSS imports)
import 'vanilla-js-github-calendar/styles.css';
```

**2. In your HTML file (e.g., `index.html`):**
```html
<body>
  <!-- Link your JavaScript file -->
  <script type="module" src="/main.js"></script>

  <!-- Add the component anywhere -->
  <github-calendar username="moonhuntercode"></github-calendar>
</body>
```

#### Option C: Local Files via Import Maps (Vanilla HTML)
If you installed the package via npm but want to use it in plain HTML without a bundler, you can use Import Maps to keep paths clean:

```html
<head>
  <!-- 1. Include the external stylesheet -->
  <link rel="stylesheet" href="./node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.css">

  <!-- 2. Define the import map -->
  <script type="importmap">
  {
    "imports": {
      "vanilla-js-github-calendar": "./node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.js"
    }
  }
  </script>
</head>
<body>
  <!-- 3. Import gracefully! -->
  <script type="module">
    import 'vanilla-js-github-calendar';
  </script>

  <!-- 4. Add the component -->
  <github-calendar username="moonhuntercode"></github-calendar>
</body>
```

#### Option D: Classic Local Files (Direct Script Tag)
If you prefer the classic method without import maps after running `npm install`:

```html
<head>
  <!-- 1. Include the external stylesheet -->
  <link rel="stylesheet" href="node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.css">
</head>
<body>
  <!-- 2. Include the script (ESM) -->
  <script type="module" src="node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.js"></script>

  <!-- 3. Add the custom element with your username -->
  <github-calendar username="moonhuntercode"></github-calendar>
</body>
```

## Documentation & Guides

We've designed this library to be incredibly beginner-friendly and robust. Please check out our dedicated guides:

- 📖 [Usage & Theming Guide](USAGE_AND_THEMING.md): Learn how to change colors, tooltips, and background themes effortlessly using pure CSS variables.
- 🎨 [Advanced Customization Guide](CUSTOMIZATION_GUIDE.md): Deep dive into how the component works internally, its semantic HTML structure, and how its Mobile-First responsive CSS works.
- 🏗️ [Architecture & Developer Experience (DX)](ARCHITECTURE_AND_DX.md): Learn about the Light DOM vs Shadow DOM, TypeScript typing, and Custom Events for error handling.
- 📏 [Advanced Layout & Browser Compatibility](ADVANCED_LAYOUT_AND_COMPATIBILITY.md): How to embed the calendar in Flex/Grid dashboards and the ES6+ browser support matrix.

## 🤝 Contributing

We welcome contributions from the community! If you'd like to help make this project better, please check out our repository on GitHub:

🐙 **[moonhuntercode/vanilla-js-github-calendar](https://github.com/moonhuntercode/vanilla-js-github-calendar)**

Please read our full **[Contributing Guide (CONTRIBUTING.md)](CONTRIBUTING.md)** for detailed instructions on how to set up the development environment, run the Vite server, and execute our Vitest test suite.
