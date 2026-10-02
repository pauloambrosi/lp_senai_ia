# Landing Page — Cursos de Inteligência Artificial (SENAI)

Landing page dos cursos gratuitos de Inteligência Artificial do SENAI, portada
a partir do design no Figma Make
([Cursos Inteligência Artificial](https://www.figma.com/make/6SEf4bmT9PudIXUmQ9Ase2/Cursos-Intelig%C3%AAncia-Artificial)).

## Stack

- [Vite](https://vitejs.dev/) 7
- React 19 + TypeScript
- Tailwind CSS 4 (via `@tailwindcss/vite`)

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção
```

## Estrutura

```
index.html              documento base (título, meta tags, favicon)
src/main.tsx            ponto de entrada do React
src/App.tsx             a landing page inteira (todas as seções)
src/index.css           estilos globais e as classes do design system
public/assets/          imagens, ícones SVG e o vídeo de fundo do hero
scripts/pack-site.mjs   gera o .zip oferecido no rodapé (roda após o build)
```

### Seções

Navbar · Hero (vídeo de fundo) · Os Cursos · Por que aprender IA com o SENAI ·
Inscreva-se (formulário) · Tire suas dúvidas (contatos) · Rodapé

### Design system

As cores e os componentes recorrentes vivem como classes em `src/index.css`:

| Token | Valor |
| --- | --- |
| Azul de fundo | `#0f1d49` |
| Azul da seção de inscrição | `#0e5e8f` |
| Ciano (destaque) | `#1af0ff` |
| Amarelo (destaque) | `#d4db13` |
| Texto | `#efefef` |

Classes: `.btn-yellow`, `.btn-cyan`, `.btn-cyan-outline`, `.section-badge`,
`.hero-badge`, `.course-card`, `.feature-card`, `.contact-card`,
`.icon-box-cyan`, `.icon-box-yellow`, `.form-input`, `.form-select`, `.nav-link`.

### Animações

As entradas (`.fade-in`, `.fade-in-up`, `.scale-in`) são disparadas por um
`IntersectionObserver`, com atraso por elemento via `data-delay`. As camadas
decorativas com `data-parallax` se deslocam conforme o scroll. Tudo respeita
`prefers-reduced-motion`.

## Observações

- O formulário de inscrição ainda não envia dados: `handleSubmit` em
  `src/App.tsx` apenas exibe um `alert` de confirmação. Conectar a um backend,
  e-mail ou CRM é o próximo passo.
- O vídeo de fundo do hero é H.264/AAC, suportado por Chrome, Edge, Safari e
  Firefox. Builds do Chromium sem codecs proprietários (os usados por alguns
  ambientes de teste automatizado) não o reproduzem.
- O link "Baixar pacote completo do site (.zip)" no rodapé aponta para um
  arquivo gerado no build por `scripts/pack-site.mjs`, que compacta o conteúdo
  de `dist/`.

## Deploy

### GitHub Pages (automático)

O deploy é feito pelo workflow `.github/workflows/deploy.yml`, que roda a cada
push na branch padrão: ele instala as dependências, gera o build e publica a
pasta `dist/`.

**É preciso configurar isto uma vez no repositório:** em
*Settings → Pages → Build and deployment → Source*, escolha **GitHub Actions**.
Sem isso o Pages serve o código-fonte do repositório, e a página quebra com um
404 em `/src/main.tsx` — esse arquivo é TypeScript e só existe antes do build.

O site fica em `https://<usuario>.github.io/<repositorio>/`. Como ele não está
na raiz do domínio, o workflow passa o prefixo para o build via
`PUBLIC_BASE_URL`, e é isso que faz os caminhos dos assets apontarem para o
lugar certo.

### Outras hospedagens

O build é totalmente estático (`dist/`), e roda em qualquer hospedagem de
arquivos. Na raiz de um domínio não é preciso configurar nada:

```bash
npm run build
```

Para publicar em um subdiretório, informe o prefixo:

```bash
PUBLIC_BASE_URL=/meu-subdiretorio/ npm run build
```
