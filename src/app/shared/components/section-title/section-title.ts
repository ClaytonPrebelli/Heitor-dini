import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="section-title"
      [class.section-title--center]="align() === 'center'"
      [class.section-title--dark]="theme() === 'dark'"
    >
      @if (eyebrow()) {
        <span class="eyebrow">{{ eyebrow() }}</span>
      }
      <h2>{{ title() }}</h2>
      @if (description()) {
        <p class="section-title__description">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .section-title {
      display: grid;
      gap: 0.9rem;
      max-width: 760px;
    }

    .section-title h2 {
      color: var(--navy);
    }

    .section-title__description {
      font-size: clamp(1rem, 1.2vw, 1.08rem);
      color: var(--gray);
    }

    .section-title--center {
      margin-inline: auto;
      text-align: center;
      justify-items: center;
    }

    .section-title--center .eyebrow::before {
      display: none;
    }

    .section-title--dark h2 {
      color: var(--white);
    }

    .section-title--dark .section-title__description {
      color: rgba(255, 255, 255, 0.72);
    }
  `,
})
export class SectionTitleComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input('');
  readonly description = input('');
  readonly align = input<'left' | 'center'>('left');
  readonly theme = input<'light' | 'dark'>('light');
}
