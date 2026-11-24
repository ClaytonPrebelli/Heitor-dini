import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BRAND, CONTACT, HERO } from '../../../../core/data/site-content';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly hero = HERO;
  readonly whatsappHref = this.whatsapp.link(CONTACT.defaultWhatsappMessage);
}
