# Progresso — Landing Page Heitor Camargo Dini

Documento de acompanhamento criado em 24/11/2026 para permitir retomar o trabalho sem perder contexto.
Atualizar a seção **Registro de alterações** sempre que uma nova tarefa for concluída.

---

## 1. Estado atual

**Concluído:** landing page Angular 21 standalone, completa, responsiva, com build e testes passando.

- Projeto: `C:\Users\Clayton Prebelli\Projetos\heitor-camargo-dini`
- Briefing origem: `C:\Users\Clayton Prebelli\Downloads\briefing_landing_page_heitor_camargo_dini.md`
- Logo origem: `C:\Users\Clayton Prebelli\Downloads\Emblema Dourado de Atena em Engrenagem.png`
- Repositório Git: **não inicializado** (não foi solicitado commit).

---

## 2. Ambiente e decisões técnicas

| Item | Valor / decisão |
| --- | --- |
| Node | v22.22.2 |
| npm | 10.9.7 |
| Angular CLI | 21.2.x (`@angular/cli@21`) |
| Por que Angular 21 | Angular CLI 22 exige Node `^22.22.3`; o ambiente tem `22.22.2`. Angular 21 é compatível. |
| Scaffold | `npx @angular/cli@21 new heitor-camargo-dini --style=scss --routing=false --ssr=false --skip-git --defaults --skip-install` |
| Instalação | `npm install --legacy-peer-deps --no-audit --no-fund` |
| Por que `--legacy-peer-deps` | `npm install` normal falhou com `Cannot read properties of null (reading 'edgesOut')` no arborist (npm 10.9.7) ao resolver peers do `vitest`. Com a flag, 470 pacotes instalaram OK. |
| Arquitetura | Standalone components, OnPush, SCSS, signals, `@if`/`@for`, sem bibliotecas de ícones externas (SVG inline próprio). |
| Backend | Nenhum. Contato apenas por WhatsApp/e-mail. |

---

## 3. Assets

- `src/assets/images/logo-heitor-camargo-dini.png` — cópia integral do emblema fornecido (1277 × 1231 px, 1.812.122 bytes), sem alteração, transparência preservada.
- `src/assets/images/blueprint-lines.svg` — desenho technical/arquitetônico vetorial criado para compor o hero e a área "Sobre" (sem foto fictícia).
- `public/favicon.ico` — permanece o padrão do scaffold, mas `index.html` usa o PNG do emblema como `icon` e `apple-touch-icon`.

`angular.json` foi ajustado para copiar `src/assets/**` para `/assets` no build (além do `public/` padrão).

---

## 4. Estrutura de código implementada

```text
src/
  app/
    core/
      models/site.models.ts          # types: IconName, ServiceArea, Education, etc.
      data/site-content.ts           # TODO o texto do site (editar aqui)
      services/whatsapp.service.ts   # wa.me com encodeURIComponent
    shared/
      components/
        header/                      # sticky, menu mobile, CTA WhatsApp
        footer/                      # logo, navegação, contatos, ano dinâmico
        whatsapp-float/              # botão flutuante (label só >= 768px)
        icon/                        # 33 ícones SVG lineares, sem dependência
        section-title/
        service-card/
      directives/reveal.directive.ts # IntersectionObserver + prefers-reduced-motion
    features/home/
      home.ts / home.html
      sections/
        hero/                        # #inicio
        credentials/                 # faixa de credenciais
        services/                    # #servicos (3 áreas + perícias)
        about/                       # #sobre
        formation/                   # #formacao
        benefits/                    # #beneficios
        cta/
        contact/                     # #contato
    app.ts / app.html / app.scss / app.spec.ts
  assets/images/                     # logo + blueprint
  styles.scss                        # tokens de design, reset, .btn, reveal
  index.html                         # SEO, OG, Twitter, fontes, favicon
```

---

## 5. Conteúdo e serviços

Textos centralizados em `src/app/core/data/site-content.ts`: BRAND, NAV_LINKS, CONTACT, HERO, HIGHLIGHTS, ABOUT, EDUCATION, SERVICE_AREAS, PERICIAS, BENEFITS, CTA, CONTACT_SECTION, FOOTER.

### Áreas de atuação (conforme briefing + serviços adicionais informados)

1. **Segurança contra incêndio** (painel escuro, 6 cards): projetos; AVCB/CLCB; plano de emergência; inspeção técnica; avaliação de equipamentos/sistemas; relatórios e laudos.
2. **Regularização imobiliária** (8 cards): regularização em geral; Habite-se; certidões de conclusão de obras; averbações e retificação; CND/CNO; unificação e desmembramento de lotes; usucapião administrativo e judicial; assessoria cartorária.
3. **Projetos, aprovações e consultoria técnica** (4 cards): DECEA/Aeronáutica; parecer sobre tombamentos; muros de arrimo e divisas; clínicas/consultórios na vigilância sanitária.
4. **Avaliações e perícias** — bloco complementar com CTA contextual.

### Dados confirmados

- Nome: Heitor Camargo Dini · Engenheiro Civil · CREA nº 5062233794
- E-mail: heitordini@gmail.com
- WhatsApp: (15) 99773-6128 → `5515997736128`; (15) 97401-4464 → `5515974014464`
- Formação: pós-graduação concluída em Combate a Incêndios e em Avaliações/Perícias; pós-graduação **em andamento** em Segurança do Trabalho.

### CTAs

- Hero, header, areas, cards, perícias, about, rodapé e botão flutuante: links `https://wa.me/<numero>?text=<mensagem codificada>`.
- Cada CTA usa mensagem contextual (ex.: segurança contra incêndio, regularização, perícias).
- Botão flutuante usa o número principal; o segundo número aparece em Contato e Rodapé.
- E-mail usa `mailto:heitordini@gmail.com`.

### Cuidados editoriais respeitados

Nada de biografia inventada, clientes, depoimentos, números de projetos, anos de experiência, cidade, endereço, horário ou redes sociais. Sem promessa de aprovação ou prazo. Sem formulário falso.

---

## 6. Visual / UX

- Paleta: azul-marinho `#10243A`, institucional `#173B5E`, dourado `#C9A24A`, dourado claro `#E4C879`, grafite `#252B32`, cinza `#66717D`, fundo `#F6F7F8`, vinho reservado (`#5A1720` definido mas pouco usado).
- Tipografia: Plus Jakarta Sans (títulos) + Inter (texto), via Google Fonts. O build inlines o CSS das fontes no `index.html`.
- Grid técnico sutil, cantoneiras douradas, cards com sombra discreta, sem gradientes chamativos.
- Header fixo: transparente com texto claro sobre o hero; fica branco com texto navy após rolagem; menu hambúrguer acessível (`aria-expanded`, `aria-controls`, Escape, fechar ao clicar, bloqueio de scroll no mobile).
- Reveal animation com IntersectionObserver e suporte a `prefers-reduced-motion`.
- Skip link "Ir para o conteúdo", foco visível, um único H1, HTML semântico (`header`, `nav`, `main`, `section`, `footer`).

---

## 7. Verificações já executadas

| Comando | Resultado |
| --- | --- |
| `npm run build` | OK, sem avisos. Initial total: 203,76 kB raw / 52,21 kB transfer. Saída: `dist/heitor-camargo-dini/browser`. |
| `CI=true npm test -- --watch=false` (no PowerShell: `$env:CI='true'; npm test -- --watch=false`) | 2 testes passaram (criação do App + H1 do hero). |
| `npx ng serve --port 4300 --host 127.0.0.1` | HTTP 200 e `<app-root>` presente. Servidor encerrado após o teste; porta 4300 livre. |
| Assets no build | `assets/images/logo-heitor-camargo-dini.png` e `assets/images/blueprint-lines.svg` presentes no `dist`. |

### Correções feitas durante o desenvolvimento

1. Imports relativos dos sections tinham `../../../` em vez de `../../../../` → corrigidos nos 8 componentes de seção.
2. `app.spec.ts` ainda testava o texto padrão do scaffold → atualizado para testar o H1 real.
3. `hero.scss` (5,5 kB) estourava o limite de aviso de 4 kB → orçamento `anyComponentStyle` ajustado para 8 kB warning / 16 kB error; build limpo.
4. Instalação npm com falha de peer resolution resolvida com `--legacy-peer-deps`.

---

## 8. Como rodar

```powershell
cd "C:\Users\Clayton Prebelli\Projetos\heitor-camargo-dini"
npm start                      # http://localhost:4200
npm run build                  # produção em dist/heitor-camargo-dini/browser
$env:CI='true'; npm test -- --watch=false
```

Para publicar em host estático, subir o conteúdo de `dist/heitor-camargo-dini/browser` (já contém `index.html`, JS, CSS e assets). Se a aplicação for servida em subpasta, ajustar o `<base href="/">` no `index.html` ou buildar com `--base-href`.

---

## 9. Pendências / próximos passos sugeridos

1. **QA visual responsivo** nas larguras 360, 390, 768, 1024 e 1440 px (não foi feito com navegador automatizado; o layout foi escrito com breakpoints para esses tamanhos).
2. **Otimização opcional do logo**: o PNG original tem ~1,8 MB. Converter para WebP com transparência reduziria bastante o peso; manter o PNG como fonte. Não há ferramenta (`magick`, `cwebp`, `ffmpeg`) instalada no ambiente.
3. **Favicon**: hoje é o PNG do emblema; gerar `.ico`/multi-resolução se desejado.
4. **Conteúdos a confirmar com o cliente** (já previstos, mas não inventados): biografia aprovada, foto profissional, cidade/região de atendimento, portfólio autorizado, depoimentos reais, redes sociais, modalidades específicas de perícias, horários.
5. **Deploy**: escolher host estático e configurar base href/domínio para OG absoluto (hoje `og:image` é relativo).

---

## 10. Registro de alterações

| Data | Tarefa | Status |
| --- | --- | --- |
| 24/11/2026 | Leitura do briefing e inspeção do ambiente | Concluído |
| 24/11/2026 | Scaffold Angular 21, instalação de dependências, cópia do logo | Concluído |
| 24/11/2026 | Design system global, SEO, assets vetoriais | Concluído |
| 24/11/2026 | Componentes compartilhados (header, footer, float, ícones, cards, título, reveal) | Concluído |
| 24/11/2026 | Seções da home + conteúdo centralizado em `site-content.ts` | Concluído |
| 24/11/2026 | Correção de imports, spec e orçamento SCSS | Concluído |
| 24/11/2026 | Build, testes e smoke test do servidor local | Concluído |
| 24/11/2026 | Criação deste documento de progresso | Concluído |
