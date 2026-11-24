export type IconName =
  | 'flame'
  | 'shield-check'
  | 'file-text'
  | 'file-check'
  | 'siren'
  | 'clipboard-check'
  | 'chart'
  | 'home'
  | 'key'
  | 'award'
  | 'layers'
  | 'split'
  | 'scale'
  | 'stamp'
  | 'plane'
  | 'landmark'
  | 'wall'
  | 'stethoscope'
  | 'calculator'
  | 'phone'
  | 'mail'
  | 'whatsapp'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'check'
  | 'chevron-down'
  | 'compass'
  | 'search'
  | 'users'
  | 'building'
  | 'briefcase'
  | 'sparkle';

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface ServiceItem {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export type AreaVariant = 'dark' | 'light';

export interface ServiceArea {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly variant: AreaVariant;
  readonly columns: 2 | 3 | 4;
  readonly items: readonly ServiceItem[];
  readonly whatsappMessage: string;
}

export interface Highlight {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export interface Education {
  readonly icon: IconName;
  readonly title: string;
  readonly status: 'concluida' | 'andamento';
  readonly statusLabel: string;
  readonly description: string;
}

export interface Benefit {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export interface PhoneContact {
  readonly label: string;
  readonly display: string;
  readonly international: string;
}

export interface SiteContact {
  readonly email: string;
  readonly defaultWhatsappMessage: string;
  readonly phones: readonly PhoneContact[];
}
