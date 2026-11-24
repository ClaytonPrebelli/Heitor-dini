import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  readonly primaryNumber = '5515997736128';
  readonly secondaryNumber = '5515974014464';

  link(message: string, phone: string = this.primaryNumber): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
}
