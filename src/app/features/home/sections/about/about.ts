import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ABOUT, BRAND } from '../../../../core/data/site-content';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly about = ABOUT;
  readonly whatsappHref = this.whatsapp.link(ABOUT.whatsappMessage);
}
