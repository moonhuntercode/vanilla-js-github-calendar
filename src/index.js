import { transformData } from './lib.js';
import './styles.css'; // Imported to be extracted as an external CSS file

async function fetchCalendarData(username, year) {
  const apiUrl = 'https://github-contributions-api.jogruber.de/v4/';
  const response = await fetch(`${apiUrl}${username}?y=${year}`);
  const data = await response.json();

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${data.error}`,
    );
  }

  return data;
}

export class GitHubCalendar extends HTMLElement {
  constructor() {
    super();
    this.useShadow = this.hasAttribute('shadow');
    if (this.useShadow) {
      this.root = this.attachShadow({ mode: 'open' });
    } else {
      this.root = this;
    }
  }

  static get observedAttributes() {
    return ['username', 'year', 'shadow'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'shadow') {
        // Changing shadow dynamically is complex, usually it's set once, 
        // but for safety we can just trigger a re-render.
      } else {
        this.render();
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const username = this.getAttribute('username');
    const year = this.getAttribute('year') || 'last';

    if (!username) {
      this.root.innerHTML = `<div class="vghc-error">Username attribute is required</div>`;
      console.error('[GitHubCalendar] Error: Username attribute is required.');
      this.dispatchEvent(new CustomEvent('calendar-error', { detail: { message: 'Username is required' }, bubbles: true, composed: true }));
      return;
    }

    this.root.innerHTML = `<div class="vghc-loading">Loading contributions for ${username}...</div>`;

    try {
      const data = await fetchCalendarData(username, year);
      const contributions = transformData(data.contributions);

      const totalCount = Object.values(data.total)[0] || 0;
      const yearText = year === 'last' ? 'the last year' : year;

      let gridHtml = '<div class="vghc-grid" role="grid" aria-label="GitHub Contributions Calendar">';
      for (const day of contributions) {
        const dateObj = new Date(day.date);
        const dateStr = dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        const tooltip = `${day.count === 0 ? 'No contributions' : day.count + ' contributions'} on ${dateStr}`;
        gridHtml += `<div class="vghc-day" role="gridcell" aria-label="${tooltip}" data-level="${day.level}" data-tooltip="${tooltip}"></div>`;
      }
      gridHtml += '</div>';

      this.root.innerHTML = `
        <section class="vghc-wrapper">
          <header class="vghc-header">
            <h3 class="vghc-title">${totalCount} contributions in ${yearText}</h3>
          </header>
          
          ${gridHtml}
          
          <footer class="vghc-footer">
            <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">Learn how we count contributions</a>
            <div class="vghc-legend" aria-hidden="true">
              <span>Less</span>
              <div class="vghc-legend-item" data-level="0"></div>
              <div class="vghc-legend-item" data-level="1"></div>
              <div class="vghc-legend-item" data-level="2"></div>
              <div class="vghc-legend-item" data-level="3"></div>
              <div class="vghc-legend-item" data-level="4"></div>
              <span>More</span>
            </div>
          </footer>
        </section>
      `;

      console.info(`[GitHubCalendar] Successfully loaded data for ${username}`);
      this.dispatchEvent(new CustomEvent('calendar-loaded', { detail: { username, totalCount }, bubbles: true, composed: true }));

    } catch (err) {
      this.root.innerHTML = `<div class="vghc-error">${err.message || 'Error loading data'}</div>`;
      console.error(`[GitHubCalendar] Error: ${err.message}`);
      this.dispatchEvent(new CustomEvent('calendar-error', { detail: { message: err.message }, bubbles: true, composed: true }));
    }
  }
}

if (!customElements.get('github-calendar')) {
  customElements.define('github-calendar', GitHubCalendar);
}
