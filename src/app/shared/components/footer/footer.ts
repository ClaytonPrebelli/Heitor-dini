import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BRAND, CONTACT, FOOTER, NAV_LINKS } from '../../../core/data/site-content';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly contact = CONTACT;
  readonly footer = FOOTER;
  readonly navLinks = NAV_LINKS;
  readonly year = new Date().getFullYear();

  whatsappHref(phone: string): string {
    return this.whatsapp.link(CONTACT.defaultWhatsappMessage, phone);
  }
}
