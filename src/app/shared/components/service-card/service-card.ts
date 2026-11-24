import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import type { AreaVariant, ServiceItem } from '../../../core/models/site.models';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-service-card',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="service-card" [class.service-card--dark]="theme() === 'dark'">
      <span class="service-card__icon">
        <app-icon [name]="item().icon" />
      </span>
      <h4>{{ item().title }}</h4>
      <p>{{ item().description }}</p>
      <a
        class="service-card__link"
        [href]="whatsappHref()"
        target="_blank"
        rel="noopener noreferrer"
        [attr.aria-label]="'Quero saber mais sobre ' + item().title + ' pelo WhatsApp'"
      >
        Quero saber mais
        <app-icon name="arrow-up-right" />
      </a>
    </article>
  `,
  styles: `
    :host {
      display: flex;
    }

    .service-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      width: 100%;
      padding: 1.6rem 1.5rem 1.4rem;
      background: var(--white);
      border: 1px solid rgba(16, 36, 58, 0.08);
      border-radius: var(--radius-md);
      box-shadow: 0 1px 2px rgba(16, 36, 58, 0.04);
      transition:
        transform 0.3s var(--ease),
        box-shadow 0.3s var(--ease),
        border-color 0.3s var(--ease);
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), transparent);
      opacity: 0;
      transition: opacity 0.3s var(--ease);
    }

    .service-card:hover {
      transform: translateY(-4px);
      border-color: rgba(201, 162, 74, 0.45);
      box-shadow: var(--shadow-md);
    }

    .service-card:hover::before {
      opacity: 1;
    }

    .service-card__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      margin-bottom: 0.25rem;
      border-radius: 12px;
      background: var(--gold-soft);
      color: #9a7726;
      font-size: 1.45rem;
    }

    .service-card h4 {
      color: var(--navy);
    }

    .service-card p {
      font-size: 0.92rem;
      color: var(--gray);
    }

    .service-card__link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      margin-top: auto;
      padding-top: 0.8rem;
      font-family: var(--font-heading);
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--navy-700);
      transition: color 0.25s var(--ease);
    }

    .service-card__link app-icon {
      font-size: 0.95rem;
      transition: transform 0.25s var(--ease);
    }

    .service-card__link:hover {
      color: var(--gold);
    }

    .service-card__link:hover app-icon {
      transform: translate(2px, -2px);
    }

    .service-card--dark {
      background: rgba(255, 255, 255, 0.045);
      border-color: rgba(255, 255, 255, 0.12);
      box-shadow: none;
    }

    .service-card--dark:hover {
      background: rgba(255, 255, 255, 0.075);
      border-color: rgba(228, 200, 121, 0.5);
      box-shadow: 0 18px 40px rgba(4, 12, 20, 0.35);
    }

    .service-card--dark .service-card__icon {
      background: rgba(228, 200, 121, 0.14);
      color: var(--gold-light);
    }

    .service-card--dark h4 {
      color: var(--white);
    }

    .service-card--dark p {
      color: rgba(255, 255, 255, 0.68);
    }

    .service-card--dark .service-card__link {
      color: var(--gold-light);
    }

    .service-card--dark .service-card__link:hover {
      color: var(--white);
    }
  `,
})
export class ServiceCardComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly item = input.required<ServiceItem>();
  readonly message = input.required<string>();
  readonly theme = input<AreaVariant>('light');

  readonly whatsappHref = computed(() => this.whatsapp.link(this.message()));
}
