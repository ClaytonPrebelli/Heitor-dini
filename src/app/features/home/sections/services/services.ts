import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PERICIAS, SERVICE_AREAS } from '../../../../core/data/site-content';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [IconComponent, SectionTitleComponent, ServiceCardComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly areas = SERVICE_AREAS;
  readonly pericias = PERICIAS;

  whatsappHref(message: string): string {
    return this.whatsapp.link(message);
  }
}
