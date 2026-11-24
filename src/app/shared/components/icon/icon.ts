import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IconName } from '../../../core/models/site.models';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      class="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('flame') {
          <path
            d="M12 22a7 7 0 0 0 7-7c0-2.1-1-3.9-2.6-5.6C14.9 7.8 13.4 5.8 12 2c-.4 3.1-2.6 4.6-4.1 6.1S5 11.6 5 15a7 7 0 0 0 7 7Z"
          ></path>
          <path
            d="M12 22a3 3 0 0 0 3-3c0-1.6-1.6-2.4-2.1-4.3-.9 1.4-2.9 2.2-2.9 4.3a3 3 0 0 0 2 3Z"
          ></path>
        }
        @case ('shield-check') {
          <path d="M12 22s8-3.7 8-9.6V5.4L12 2 4 5.4v7C4 18.3 12 22 12 22Z"></path>
          <path d="m8.8 11.8 2.2 2.2 4.2-4.2"></path>
        }
        @case ('file-text') {
          <path
            d="M14 2H6.8A1.8 1.8 0 0 0 5 3.8v16.4A1.8 1.8 0 0 0 6.8 22h10.4a1.8 1.8 0 0 0 1.8-1.8V7Z"
          ></path>
          <path d="M14 2v5h5M8.5 13h7M8.5 17h4.5"></path>
        }
        @case ('file-check') {
          <path
            d="M14 2H6.8A1.8 1.8 0 0 0 5 3.8v16.4A1.8 1.8 0 0 0 6.8 22h10.4a1.8 1.8 0 0 0 1.8-1.8V7Z"
          ></path>
          <path d="M14 2v5h5"></path>
          <path d="m8.5 14.5 2 2 4-4"></path>
        }
        @case ('siren') {
          <path d="M7 18v-5a5 5 0 0 1 10 0v5"></path>
          <path d="M5 21h14M12 3v2M4.9 6.9l1.4 1.4M19.1 6.9l-1.4 1.4"></path>
          <path d="M9.5 18h5"></path>
        }
        @case ('clipboard-check') {
          <path
            d="M16 4h1.8A1.2 1.2 0 0 1 19 5.2v15.6A1.2 1.2 0 0 1 17.8 22H6.2A1.2 1.2 0 0 1 5 20.8V5.2A1.2 1.2 0 0 1 6.2 4H8"
          ></path>
          <path d="M9 2h6v4H9z"></path>
          <path d="m9 13.5 2 2 4-4.2"></path>
        }
        @case ('chart') {
          <path d="M4 20V4M4 20h16"></path>
          <path d="m7.5 15.5 3.5-4 3 3 4.5-6"></path>
        }
        @case ('home') {
          <path d="M3 10.6 12 3l9 7.6"></path>
          <path d="M5.5 9.2V21h13V9.2"></path>
          <path d="M9.5 21v-6h5v6"></path>
        }
        @case ('key') {
          <circle cx="7.5" cy="15.5" r="3.5"></circle>
          <path d="m10 13 9.5-9.5M16.5 4 20 7.5M13.5 7l3 3"></path>
        }
        @case ('award') {
          <circle cx="12" cy="8.5" r="5.5"></circle>
          <path d="M8.5 13.2 7 22l5-2.5L17 22l-1.5-8.8"></path>
        }
        @case ('layers') {
          <path d="m12 2.5 9.5 5-9.5 5-9.5-5z"></path>
          <path d="m2.5 12 9.5 5 9.5-5M2.5 16.5 12 21.5l9.5-5"></path>
        }
        @case ('split') {
          <path d="M12 2.5V8"></path>
          <path d="M12 8c0 3.2-4.2 3.6-4.2 7.2V21M12 8c0 3.2 4.2 3.6 4.2 7.2V21"></path>
          <path d="M5.5 18 7.8 20.5 10 18M14 18l2.2 2.5L18.5 18"></path>
        }
        @case ('scale') {
          <path d="M12 3v18M8 21h8M4.5 7h15"></path>
          <path d="M6.5 7 4 13.5a3 3 0 0 0 5 0L6.5 7ZM17.5 7 15 13.5a3 3 0 0 0 5 0L17.5 7Z"></path>
        }
        @case ('stamp') {
          <path d="M5 21h14M6 17h12v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 6 15.5V17Z"></path>
          <path d="M9.5 11V7a2.5 2.5 0 0 1 5 0v4"></path>
        }
        @case ('plane') {
          <path d="M21.5 2.5 11 13"></path>
          <path d="m21.5 2.5-6.8 19-3.7-8.5-8.5-3.7 19-6.8Z"></path>
        }
        @case ('landmark') {
          <path d="M3 21h18M4.5 18h15M6 18V9.5M10 18V9.5M14 18V9.5M18 18V9.5"></path>
          <path d="M3.5 9.5 12 3l8.5 6.5z"></path>
        }
        @case ('wall') {
          <path d="M3 5h18v14H3z"></path>
          <path
            d="M3 9.7h18M3 14.3h18M8 5v4.7M16 5v4.7M8 14.3V19M16 14.3V19M12 9.7v4.6"
          ></path>
        }
        @case ('stethoscope') {
          <path d="M6 3v5.5a4 4 0 0 0 8 0V3"></path>
          <path d="M4.5 3H7M13 3h2.5"></path>
          <path d="M10 12.5v2a4 4 0 0 0 8 0v-2.5"></path>
          <circle cx="18" cy="9.5" r="2"></circle>
        }
        @case ('calculator') {
          <path
            d="M5.5 3h13A1.5 1.5 0 0 1 20 4.5v15A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-15A1.5 1.5 0 0 1 5.5 3Z"
          ></path>
          <path
            d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"
          ></path>
        }
        @case ('phone') {
          <path
            d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.6 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
          ></path>
        }
        @case ('mail') {
          <path
            d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11A1.5 1.5 0 0 1 20.5 19h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Z"
          ></path>
          <path d="m3 7 9 6 9-6"></path>
        }
        @case ('whatsapp') {
          <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.6Z"></path>
          <path
            d="M9.2 8.3c.3 2.9 3.6 6.2 6.5 6.5l.9-1.5-1.9-1-.9.9c-1-.4-2.4-1.8-2.8-2.8l.9-.9-1-1.9-1.7.7Z"
          ></path>
        }
        @case ('arrow-right') {
          <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5"></path>
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M8.5 7H17v8.5"></path>
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16"></path>
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18"></path>
        }
        @case ('check') {
          <path d="m4.5 12.5 4.5 4.5L19.5 6.5"></path>
        }
        @case ('chevron-down') {
          <path d="m6 9.5 6 6 6-6"></path>
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="9"></circle>
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path>
        }
        @case ('search') {
          <circle cx="10.5" cy="10.5" r="6.5"></circle>
          <path d="m20 20-4.8-4.8"></path>
        }
        @case ('users') {
          <circle cx="9" cy="8" r="3.5"></circle>
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
          <path d="M16.5 5.2a3.5 3.5 0 0 1 0 5.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6"></path>
        }
        @case ('building') {
          <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5V21"></path>
          <path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5V21M3 21h18"></path>
          <path
            d="M7.5 8h1M11 8h1M7.5 12h1M11 12h1M7.5 16h1M11 16h1"
          ></path>
        }
        @case ('briefcase') {
          <path
            d="M3.5 8h17A1.5 1.5 0 0 1 22 9.5v9A1.5 1.5 0 0 1 20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-9A1.5 1.5 0 0 1 3.5 8Z"
          ></path>
          <path d="M8.5 8V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V8M2 13h20"></path>
        }
        @case ('sparkle') {
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
          <path d="m18.5 16.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"></path>
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      line-height: 0;
    }

    .icon {
      width: 1em;
      height: 1em;
      flex: none;
    }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
