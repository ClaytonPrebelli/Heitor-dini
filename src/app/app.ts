import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from './features/home/home';
import { FooterComponent } from './shared/components/footer/footer';
import { HeaderComponent } from './shared/components/header/header';
import { WhatsAppFloatComponent } from './shared/components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, FooterComponent, WhatsAppFloatComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
