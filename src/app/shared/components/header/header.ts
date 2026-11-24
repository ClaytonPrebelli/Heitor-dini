import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { BRAND, CONTACT, NAV_LINKS } from '../../../core/data/site-content';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private readonly whatsapp = inject(WhatsAppService);

  readonly brand = BRAND;
  readonly navLinks = NAV_LINKS;
  readonly phones = CONTACT.phones;
  readonly whatsappHref = this.whatsapp.link(CONTACT.defaultWhatsappMessage);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 960) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.classList.toggle('menu-open', next);
  }

  closeMenu(): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    document.body.classList.remove('menu-open');
  }
}
