import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BENEFITS } from '../../../../core/data/site-content';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-benefits',
  imports: [IconComponent, SectionTitleComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class BenefitsComponent {
  readonly benefits = BENEFITS;
}
