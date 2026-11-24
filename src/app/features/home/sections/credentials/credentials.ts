import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HIGHLIGHTS } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-credentials',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="credentials" aria-label="Credenciais e formação">
      <div class="container">
        <ul class="credentials__list" appReveal>
          @for (item of highlights; track item.title) {
            <li class="credentials__item">
              <span class="credentials__icon">
                <app-icon [name]="item.icon" />
              </span>
              <div class="credentials__text">
                <strong>{{ item.title }}</strong>
                <span>{{ item.description }}</span>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './credentials.scss',
})
export class CredentialsComponent {
  readonly highlights = HIGHLIGHTS;
}
