import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BRAND, CONTACT, CONTACT_SECTION } from '../../../../core/data/site-content';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, SectionTitleComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly contact = CONTACT;
  readonly section = CONTACT_SECTION;

  whatsappHref(phone: string): string {
    return this.whatsapp.link(CONTACT.defaultWhatsappMessage, phone);
  }
}
