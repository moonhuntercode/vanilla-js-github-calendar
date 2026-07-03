# Usage & Theming Guide

The `vanilla-js-github-calendar` is built as a lightweight Web Component. 

## How to use it

To use the calendar in any project:

1. Import the script in your HTML:
```html
<script type="module" src="path/to/dist/vanilla-js-github-calendar.js"></script>
```

2. Add the custom element to your page, passing your GitHub username:
```html
<github-calendar username="moonhuntercode"></github-calendar>
```

### Available Attributes
- `username` (required): The GitHub username to fetch data for.
- `year` (optional): The year to show (e.g. `year="2023"`). Defaults to `"last"`.

*Note: The component fetches data from a community API proxy (`https://github-contributions-api.jogruber.de/v4/`) that transforms the GitHub GraphQL API into a JSON response. This works for any public GitHub account.*

## Theming & Colors

The component uses **CSS Variables** internally, making it extremely easy to customize the look without needing to pass JavaScript configuration objects.

By default, the colors mimic the standard GitHub green scale. To create your own theme, simply target the component (or a parent container) and override these variables:

### CSS Variables Available:
- `--gh-calendar-text-color`
- `--gh-calendar-level-0` (Empty day background)
- `--gh-calendar-level-1` (Lightest color)
- `--gh-calendar-level-2`
- `--gh-calendar-level-3`
- `--gh-calendar-level-4` (Darkest color)
- `--gh-calendar-tooltip-bg` (Tooltip background)
- `--gh-calendar-tooltip-color` (Tooltip text color)

### Example: Purple Theme

Here is a simple CSS snippet to create a purple variation:

```css
/* Create a class for your theme */
.purple-theme {
  --gh-calendar-level-1: #e1b4f4;
  --gh-calendar-level-2: #c57de9;
  --gh-calendar-level-3: #a34bcf;
  --gh-calendar-level-4: #7925a8;
  --gh-calendar-tooltip-bg: #4c116d;
}
```

Then apply the class to the calendar or its container:

```html
<div class="purple-theme">
  <github-calendar username="moonhuntercode"></github-calendar>
</div>
```

That's it! Because the web component uses CSS Variables, the changes will naturally pierce the Shadow DOM and apply to the internal SVG/Grid elements.
