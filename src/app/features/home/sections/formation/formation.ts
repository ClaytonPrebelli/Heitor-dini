import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../../../core/data/site-content';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-formation',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './formation.html',
  styleUrl: './formation.scss',
})
export class FormationComponent {
  readonly education = EDUCATION;
}
