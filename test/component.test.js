import { describe, it, expect } from 'vitest';
// We need to import the component so it defines itself in the customElements registry
import '../src/index.js';

describe('GitHubCalendar Web Component', () => {
  it('should register the custom element', () => {
    expect(customElements.get('github-calendar')).toBeDefined();
  });

  it('should require a username attribute and show an error if missing', async () => {
    const el = document.createElement('github-calendar');
    document.body.appendChild(el);
    
    // Web component connects and renders synchronously for the missing username case
    const errorDiv = el.querySelector('.vghc-error');
    expect(errorDiv).not.toBeNull();
    expect(errorDiv.textContent).toContain('Username attribute is required');
    
    document.body.removeChild(el);
  });

  it('should show a loading state when username is provided', () => {
    const el = document.createElement('github-calendar');
    el.setAttribute('username', 'moonhuntercode');
    document.body.appendChild(el);
    
    const loadingDiv = el.querySelector('.vghc-loading');
    expect(loadingDiv).not.toBeNull();
    expect(loadingDiv.textContent).toContain('Loading contributions for moonhuntercode');
    
    document.body.removeChild(el);
  });
});
