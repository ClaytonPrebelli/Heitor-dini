import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from './sections/about/about';
import { BenefitsComponent } from './sections/benefits/benefits';
import { ContactComponent } from './sections/contact/contact';
import { CredentialsComponent } from './sections/credentials/credentials';
import { CtaComponent } from './sections/cta/cta';
import { FormationComponent } from './sections/formation/formation';
import { HeroComponent } from './sections/hero/hero';
import { ServicesComponent } from './sections/services/services';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CredentialsComponent,
    ServicesComponent,
    AboutComponent,
    FormationComponent,
    BenefitsComponent,
    CtaComponent,
    ContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomeComponent {}
