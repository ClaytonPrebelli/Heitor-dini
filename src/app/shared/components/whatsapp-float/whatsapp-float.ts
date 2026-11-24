import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CONTACT } from '../../../core/data/site-content';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-whatsapp-float',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="wa-float"
      [href]="href"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o engenheiro pelo WhatsApp"
    >
      <span class="wa-float__icon">
        <app-icon name="whatsapp" />
      </span>
      <span class="wa-float__label">Fale com o engenheiro</span>
    </a>
  `,
  styleUrl: './whatsapp-float.scss',
})
export class WhatsAppFloatComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly href = this.whatsapp.link(CONTACT.defaultWhatsappMessage);
}
