export interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface CalendarLoadedEvent {
  username: string;
  totalCount: number;
}

export interface CalendarErrorEvent {
  message: string;
}

export class GitHubCalendar extends HTMLElement {
  /**
   * GitHub Username
   */
  username: string;

  /**
   * Year to display ('last' by default)
   */
  year?: string | number;

  /**
   * Enable Shadow DOM encapsulation. (Light DOM is used by default).
   */
  shadow?: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'github-calendar': GitHubCalendar;
  }
  
  interface GlobalEventHandlersEventMap {
    'calendar-loaded': CustomEvent<CalendarLoadedEvent>;
    'calendar-error': CustomEvent<CalendarErrorEvent>;
  }
}
