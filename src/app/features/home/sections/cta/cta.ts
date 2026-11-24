import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BRAND, CONTACT, CTA } from '../../../../core/data/site-content';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-cta',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class CtaComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly cta = CTA;
  readonly primaryPhone = CONTACT.phones[0];
  readonly whatsappHref = this.whatsapp.link(CTA.whatsappMessage);
}
