# 🏗️ Architecture & Developer Experience (DX)

This document details the architectural decisions regarding the DOM encapsulation (Light DOM vs Shadow DOM), how external styles work, our TypeScript support, and the Event System built into the component for better DX.

## 1. Light DOM by Default

Web Components typically use **Shadow DOM** to perfectly encapsulate styles so they don't leak out, and global styles don't leak in. However, for a simple calendar component, developers often *want* their global CSS rules (like fonts, text colors, margins) to cascade naturally into the component.

For this reason, `vanilla-js-github-calendar` uses **Light DOM by default**.

### How to use Shadow DOM instead
If you are placing this calendar in an environment where CSS conflicts are highly likely (e.g., inside a complex legacy app), you can explicitly opt-in to Shadow DOM by adding the `shadow` attribute:

```html
<github-calendar username="moonhuntercode" shadow></github-calendar>
```

*Note: If you use `shadow`, standard CSS variables will still pierce the boundary, but you will not be able to target internal classes like `.calendar-grid` from your global CSS.*

## 2. External CSS

Because we default to Light DOM, the CSS is intentionally kept external rather than dynamically injected via JavaScript. This provides the best performance and avoids "Flash of Unstyled Content" (FOUC).

When using the library in production, you **must** import the CSS file alongside the JS:

```html
<head>
  <!-- Load the stylesheet -->
  <link rel="stylesheet" href="node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.css">
</head>
<body>
  <!-- Load the script -->
  <script type="module" src="node_modules/vanilla-js-github-calendar/dist/vanilla-js-github-calendar.js"></script>
</body>
```

## 3. TypeScript Support

Although the source code is written in pure, beginner-friendly Vanilla JS, we distribute an `index.d.ts` definitions file.

If you are using TypeScript or an IDE like VSCode, you will automatically get:
- Autocomplete for the `<github-calendar>` HTML element.
- Type definitions for the `calendar-loaded` and `calendar-error` Custom Events.
- Property hints for `username`, `year`, and `shadow`.

## 4. Event System & Error Handling

To provide a robust Developer Experience (DX), the component doesn't fail silently. 

### Console Logs
- **Success**: When data loads successfully, an info log is printed: `[GitHubCalendar] Successfully loaded data for ...`
- **Error**: If the API fails or the username is missing, an explicit error is thrown in the console: `[GitHubCalendar] Error: ...`

### Custom Events
You can listen to lifecycle events directly on the DOM node to trigger other actions in your application (like hiding a global spinner, or showing a toast notification).

```javascript
const calendar = document.querySelector('github-calendar');

// 1. Success Event
calendar.addEventListener('calendar-loaded', (e) => {
  console.log(`Loaded ${e.detail.totalCount} contributions for ${e.detail.username}`);
});

// 2. Error Event
calendar.addEventListener('calendar-error', (e) => {
  console.error('Something went wrong:', e.detail.message);
});
```
