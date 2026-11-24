import type {
  Benefit,
  Education,
  Highlight,
  NavLink,
  ServiceArea,
  SiteContact,
} from '../models/site.models';

export const BRAND = {
  name: 'Heitor Camargo Dini',
  role: 'Engenheiro Civil',
  crea: 'CREA nº 5062233794',
  creaShort: 'CREA 5062233794',
  logo: 'assets/images/logo-heitor-camargo-dini.png',
  logoAlt: 'Emblema dourado de Heitor Camargo Dini, engenheiro civil',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
];

export const CONTACT: SiteContact = {
  email: 'heitordini@gmail.com',
  defaultWhatsappMessage:
    'Olá, Heitor! Acessei seu site e gostaria de mais informações sobre seus serviços de engenharia.',
  phones: [
    { label: 'WhatsApp', display: '(15) 99773-6128', international: '5515997736128' },
    { label: 'WhatsApp', display: '(15) 97401-4464', international: '5515974014464' },
  ],
};

export const HERO = {
  eyebrow: 'Engenharia civil e consultoria técnica',
  title: 'Engenharia, segurança e regularização para',
  titleAccent: 'proteger seu patrimônio.',
  subtitle:
    'Consultoria técnica em segurança contra incêndio, regularização imobiliária, aprovação de projetos, avaliações e perícias de engenharia.',
  tags: [
    'Segurança contra incêndio',
    'Regularização imobiliária',
    'Avaliações e perícias',
  ],
  primaryCta: 'Solicitar atendimento pelo WhatsApp',
  secondaryCta: 'Conhecer os serviços',
} as const;

export const HIGHLIGHTS: readonly Highlight[] = [
  {
    icon: 'award',
    title: 'Engenheiro Civil',
    description: 'CREA 5062233794',
  },
  {
    icon: 'flame',
    title: 'Pós-graduação em Engenharia de Combate a Incêndios',
    description: 'Formação concluída',
  },
  {
    icon: 'calculator',
    title: 'Pós-graduação em Avaliações e Perícias de Engenharia',
    description: 'Formação concluída',
  },
  {
    icon: 'shield-check',
    title: 'Pós-graduação em Engenharia de Segurança do Trabalho',
    description: 'Formação em andamento',
  },
];

export const ABOUT = {
  title: 'Sobre o engenheiro',
  paragraphs: [
    'Heitor Camargo Dini é engenheiro civil, registrado no CREA sob o nº 5062233794, com formação de pós-graduação em Engenharia de Combate a Incêndios e em Avaliações e Perícias de Engenharia, além de estar em formação em Engenharia de Segurança do Trabalho.',
    'Sua atuação reúne serviços de segurança contra incêndio, regularização imobiliária e consultoria técnica, com foco em orientar cada cliente na busca por soluções adequadas às necessidades de seu imóvel.',
  ],
  focus: [
    'Orientação técnica próxima',
    'Análise criteriosa de cada caso',
    'Acompanhamento das etapas do processo',
  ],
  whatsappMessage:
    'Olá, Heitor! Acessei seu site e gostaria de saber mais sobre seu trabalho de engenharia.',
} as const;

export const EDUCATION: readonly Education[] = [
  {
    icon: 'flame',
    title: 'Engenharia de Combate a Incêndios',
    status: 'concluida',
    statusLabel: 'Pós-graduação concluída',
    description:
      'Especialização voltada à proteção contra incêndio, análise de risco e conformidade das edificações.',
  },
  {
    icon: 'calculator',
    title: 'Avaliações e Perícias de Engenharia',
    status: 'concluida',
    statusLabel: 'Pós-graduação concluída',
    description:
      'Especialização em avaliações e perícias, com análise criteriosa e elaboração de pareceres técnicos.',
  },
  {
    icon: 'shield-check',
    title: 'Engenharia de Segurança do Trabalho',
    status: 'andamento',
    statusLabel: 'Pós-graduação em andamento',
    description:
      'Formação em andamento, com foco na prevenção de riscos e na segurança dos ambientes de trabalho.',
  },
];

export const SERVICE_AREAS: readonly ServiceArea[] = [
  {
    id: 'seguranca-contra-incendio',
    eyebrow: 'Área de atuação',
    title: 'Segurança contra incêndio',
    description:
      'Orientação e consultoria técnica para adequar edificações às exigências de segurança contra incêndio, com atenção à proteção das pessoas e à regularização junto aos órgãos competentes.',
    icon: 'flame',
    variant: 'dark',
    columns: 3,
    whatsappMessage:
      'Olá, Heitor! Gostaria de informações sobre projeto e regularização de segurança contra incêndio.',
    items: [
      {
        icon: 'file-text',
        title: 'Projetos de segurança contra incêndio',
        description:
          'Elaboração e atualização de projetos de segurança contra incêndio, de acordo com as características da edificação.',
      },
      {
        icon: 'shield-check',
        title: 'Regularização AVCB e CLCB',
        description:
          'Consultoria e acompanhamento técnico nos processos de regularização de edificações junto ao Corpo de Bombeiros.',
      },
      {
        icon: 'siren',
        title: 'Plano de emergência e abandono',
        description:
          'Elaboração de planos de emergência e abandono, com orientações para uma evacuação segura.',
      },
      {
        icon: 'clipboard-check',
        title: 'Inspeção técnica de segurança',
        description:
          'Inspeção das condições de segurança das edificações contra incêndio.',
      },
      {
        icon: 'chart',
        title: 'Avaliação de equipamentos e sistemas',
        description:
          'Verificação de extintores, hidrantes, iluminação de emergência, sinalização e rotas de fuga.',
      },
      {
        icon: 'file-check',
        title: 'Relatórios e laudos técnicos',
        description:
          'Elaboração de relatórios e laudos técnicos sobre segurança contra incêndio.',
      },
    ],
  },
  {
    id: 'regularizacao-imobiliaria',
    eyebrow: 'Área de atuação',
    title: 'Regularização imobiliária',
    description:
      'Apoio técnico para regularização de imóveis e atualização de sua documentação, contribuindo para mais segurança jurídica e tranquilidade em negociações e processos administrativos.',
    icon: 'home',
    variant: 'light',
    columns: 4,
    whatsappMessage:
      'Olá, Heitor! Gostaria de informações sobre regularização de imóvel.',
    items: [
      {
        icon: 'home',
        title: 'Regularização de imóveis em geral',
        description:
          'Orientação técnica para colocar o imóvel em conformidade com a legislação e a documentação exigida.',
      },
      {
        icon: 'key',
        title: 'Habite-se',
        description:
          'Acompanhamento técnico das etapas necessárias para a obtenção do Habite-se.',
      },
      {
        icon: 'file-text',
        title: 'Certidões de conclusão de obras',
        description:
          'Apoio na análise e na organização da documentação para emissão das certidões de conclusão de obras.',
      },
      {
        icon: 'layers',
        title: 'Averbações e retificação',
        description:
          'Orientação para averbação de construções e retificação de informações junto aos órgãos competentes.',
      },
      {
        icon: 'award',
        title: 'CND/CNO',
        description:
          'Consultoria nos processos relacionados à Certidão Negativa de Débitos e ao Cadastro Nacional de Obras.',
      },
      {
        icon: 'split',
        title: 'Unificação e desmembramento de lotes',
        description:
          'Análise e acompanhamento técnico para unificação ou desmembramento de imóveis e lotes.',
      },
      {
        icon: 'scale',
        title: 'Usucapião administrativo e judicial',
        description:
          'Suporte técnico e documental em projetos de usucapião administrativo e judicial.',
      },
      {
        icon: 'stamp',
        title: 'Assessoria cartorária',
        description:
          'Orientação no relacionamento com cartórios e na organização de documentos para registros e averbações.',
      },
    ],
  },
  {
    id: 'projetos-aprovacoes',
    eyebrow: 'Área de atuação',
    title: 'Projetos, aprovações e consultoria técnica',
    description:
      'Apoio técnico em aprovações específicas e em análises que exigem parecer de engenharia, com atenção às particularidades de cada imóvel e de cada órgão competente.',
    icon: 'building',
    variant: 'light',
    columns: 2,
    whatsappMessage:
      'Olá, Heitor! Gostaria de informações sobre aprovação de projetos e consultoria técnica.',
    items: [
      {
        icon: 'plane',
        title: 'Aprovação de projetos junto ao DECEA/Aeronáutica',
        description:
          'Orientação e acompanhamento técnico de processos de aprovação de projetos junto ao DECEA.',
      },
      {
        icon: 'landmark',
        title: 'Parecer técnico sobre tombamentos',
        description:
          'Análise técnica e emissão de parecer sobre imóveis sujeitos a tombamento.',
      },
      {
        icon: 'wall',
        title: 'Muros de arrimo e divisas',
        description:
          'Parecer técnico sobre muros de arrimo, divisas e questões construtivas relacionadas.',
      },
      {
        icon: 'stethoscope',
        title: 'Clínicas e consultórios na vigilância sanitária',
        description:
          'Adaptação e legalização de clínicas e consultórios perante a vigilância sanitária.',
      },
    ],
  },
];

export const PERICIAS = {
  eyebrow: 'Atuação complementar',
  title: 'Avaliações e perícias de engenharia',
  description:
    'Atuação técnica em avaliações e perícias de engenharia, com análise criteriosa e elaboração de pareceres e documentos técnicos conforme a necessidade de cada caso.',
  points: [
    'Análise técnica detalhada',
    'Pareceres e documentos técnicos',
    'Atendimento conforme a necessidade de cada caso',
  ],
  whatsappMessage:
    'Olá, Heitor! Gostaria de informações sobre avaliações e perícias de engenharia.',
} as const;

export const BENEFITS: readonly Benefit[] = [
  {
    icon: 'compass',
    title: 'Clareza sobre as exigências',
    description:
      'Mais clareza sobre as exigências aplicáveis ao seu imóvel e sobre o que precisa ser feito.',
  },
  {
    icon: 'search',
    title: 'Orientação técnica',
    description:
      'Orientação técnica para os processos de regularização, com acompanhamento das etapas.',
  },
  {
    icon: 'shield-check',
    title: 'Atenção à segurança',
    description:
      'Atenção às condições de segurança da edificação e à proteção das pessoas.',
  },
  {
    icon: 'file-check',
    title: 'Organização documental',
    description:
      'Apoio na organização de documentos e etapas, reduzindo dúvidas ao longo do processo.',
  },
  {
    icon: 'users',
    title: 'Atendimento direcionado',
    description:
      'Atendimento direcionado à necessidade de cada cliente, com linguagem acessível.',
  },
];

export const CTA = {
  title: 'Seu imóvel precisa de regularização ou avaliação técnica?',
  text: 'Conte um pouco sobre sua necessidade e receba orientação sobre os próximos passos.',
  button: 'Conversar com o engenheiro',
  whatsappMessage:
    'Olá, Heitor! Gostaria de conversar sobre a regularização e a avaliação técnica do meu imóvel.',
} as const;

export const CONTACT_SECTION = {
  eyebrow: 'Contato',
  title: 'Fale diretamente com o engenheiro',
  description:
    'Atendimento por WhatsApp e e-mail. Escolha o canal de sua preferência para explicar sua necessidade.',
  note: 'Não há formulário neste site: o contato é feito diretamente com o engenheiro pelos canais abaixo.',
} as const;

export const FOOTER = {
  tagline:
    'Consultoria técnica em segurança contra incêndio, regularização imobiliária, aprovação de projetos, avaliações e perícias de engenharia.',
} as const;
