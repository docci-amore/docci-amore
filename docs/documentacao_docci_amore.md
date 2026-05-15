# 🎂 Documentação do Site — Docci Amore
> **Confeitaria Artesanal** · One-Page · HTML & CSS · Inspirado na Sucrier

---

## 🔗 Repositório do Projeto

| | |
|---|---|
| **GitHub** | [https://github.com/docci-amore/docci-amore](https://github.com/docci-amore/docci-amore) |
| **Equipe** | 7 pessoas |
| **Prazo** | ~3 semanas e meia (entrega: primeira semana de junho de 2026) |
| **Hospedagem** | Hostinger |

> ⚠️ **Importante:** Todo o código deve ser enviado para este repositório. Nunca edite o arquivo do colega diretamente — cada um trabalha no seu próprio arquivo `.css` e faz o _push_ para o GitHub.

---

## 📌 Visão Geral

O site da **Docci Amore** é uma página única (_one-page_) com rolagem suave entre seções. A estrutura foi inspirada no site da [Sucrier](https://shop.sucrier.com.br), adaptada para uma linguagem mais artesanal, íntima e acolhedora — alinhada à identidade visual rosa e dourada já definida pela equipe.

**Ordem das seções na página:**

1. Barra de Anúncio *(já pronta — navbar.css)*
2. Navbar *(já pronta — navbar.css)*
3. 🦸 Hero
4. 🛍️ Cardápio
5. 🖼️ Galeria
6. 📖 Sobre Nós
7. 💬 Depoimentos
8. 📬 Contato
9. 🦶 Rodapé

---

## 🎨 Identidade Visual (referência global)

Todas as seções devem seguir rigorosamente estas definições já estabelecidas no `style.css`:

| Variável CSS | Cor | Uso |
|---|---|---|
| `--cor-fundo` | `#F9E4E1` | Fundo principal, hero, fundos de seção |
| `--cor-medio` | `#F2C9C4` | Fundos alternativos, barra de anúncio |
| `--cor-principal` | `#8B4E44` | Títulos, ícones, botões |
| `--cor-escuro` | `#5C2E28` | Textos, bordas, rodapé |
| `--cor-branco` | `#FFF8F6` | Cards, navbar, áreas limpas |
| `--cor-destaque` | `#C9A96E` | Detalhes dourados, divisores, hover |

**Fontes:**
- **Playfair Display** — títulos de seção
- **Great Vibes** — logo, frases de impacto
- **Lato** — textos corridos, descrições, menus

---

## 🦸 Seção 1 — Hero (`hero.css`)
> **Responsável:** Maria ✅

### O que é
Banner principal com carrossel de 3 slides, overlay escuro, textos centralizados e botão de chamada. Troca automática a cada 5 segundos com setas de navegação e bolinhas indicadoras.

---

## 🛍️ Seção 2 — Cardápio (`cardapio.css`)
> **Responsável:** Silvia ✅

### O que é
Grid de 6 cards com foto, nome, descrição e preço de cada produto. Hover com elevação suave.

---

## 🖼️ Seção 3 — Galeria (`galeria.css`)
> **Responsável:** Nicolas ✅

### O que é
Grade de 6 fotos em 3 colunas. Hover com zoom e overlay escuro com legenda.

---

## 📖 Seção 4 — Sobre Nós (`sobre.css`)
> **Responsável:** Igor ✅

### O que é
Foto + texto lado a lado, transmitindo a história e identidade da confeitaria.

---

## 💬 Seção 5 — Depoimentos (`depoimentos.css`)
> **Responsável:** Igor ✅

### O que é
3 cards de avaliação com estrelas, texto em itálico e avatar circular de cada cliente. Animação de entrada ao rolar a página.

---

## 📬 Seção 6 — Contato (`contato.css`)
> **Responsável:** Nicolas ✅

### O que é
Seção dividida em dois lados: cards de informações de contato (Instagram, localização e horário) à esquerda, e formulário de mensagem à direita.

---

## 🦶 Seção 7 — Rodapé (`rodape.css`)
> **Responsável:** Maria ✅

### O que é
Rodapé em 3 colunas — marca com logo cursiva, navegação e informações de contato — sobre fundo marrom escuro. Inclui botão flutuante do WhatsApp.

---

## 🗂️ Estrutura de Arquivos — Projeto Completo

```
docci-amore/
│
├── index.html
│
├── css/
│   ├── style.css          ✅ Fase 1 — variáveis globais e reset (Jonathan)
│   ├── navbar.css         ✅ Fase 1 — barra de anúncio + navbar (Pedro)
│   ├── hero.css           ✅ Fase 2 — carrossel hero (Maria)
│   ├── cardapio.css       ✅ Fase 2 — grid de produtos (Silvia)
│   ├── galeria.css        ✅ Fase 2 — grade de fotos (Nicolas)
│   ├── sobre.css          ✅ Fase 1 — seção sobre nós (Igor)
│   ├── depoimentos.css    ✅ Fase 2 — cards de avaliação (Igor)
│   ├── contato.css        ✅ Fase 2 — formulário e info (Nicolas)
│   └── rodape.css         ✅ Fase 2 — rodapé + WhatsApp (Maria)
│
├── js/
│   └── main.js            ✅ Fase 2 — todos os scripts (Jonathan)
│
├── docs/
│   ├── documentacao_docci_amore.md   — documentação geral do site
│   ├── cronograma_docci_amore.md     — cronograma e progresso da equipe
│   ├── fase1.md                      — detalhamento técnico da Fase 1
│   ├── fase2.md                      — detalhamento técnico da Fase 2
│   ├── fase3.md                      — checklist de testes e revisão
│   └── fase4.md                      — guia de publicação na Hostinger
│
└── imagens/
    ├── bolosobre.png      ✅ Já existe
    └── (demais fotos a adicionar)
```

---

## 📚 Documentos do Projeto (`docs/`)

A pasta `docs/` na raiz do repositório centraliza toda a documentação do projeto. Cada arquivo tem um propósito específico:

| Arquivo | Descrição |
|---|---|
| `documentacao_docci_amore.md` | Visão geral do site — identidade visual, seções, equipe e estrutura de arquivos |
| `cronograma_docci_amore.md` | Gestão do progresso — datas, tarefas por membro e status de cada fase |
| `fase1.md` | Detalhamento técnico da Fase 1 — estrutura base, `style.css`, `navbar.css` e `sobre.css` |
| `fase2.md` | Detalhamento técnico da Fase 2 — todas as seções implementadas com HTML e CSS reais |
| `fase3.md` | Checklist de testes, revisão de responsividade e pontos de atenção antes da publicação |
| `fase4.md` | Guia passo a passo para publicação na Hostinger e checklist final |

> 💡 **Dica:** Sempre que tiver dúvida sobre o código de uma seção, consulte o arquivo da fase correspondente — lá está o HTML e CSS real que foi implementado.

---

## 🔗 Links no `index.html` (ordem correta)

```html
<!-- CSS -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/hero.css">
<link rel="stylesheet" href="css/cardapio.css">
<link rel="stylesheet" href="css/galeria.css">
<link rel="stylesheet" href="css/sobre.css">
<link rel="stylesheet" href="css/depoimentos.css">
<link rel="stylesheet" href="css/contato.css">
<link rel="stylesheet" href="css/rodape.css">

<!-- JavaScript -->
<script src="js/main.js"></script>
```

---

*Documentação gerada para o projeto Docci Amore · 2026*

---

🔗 **Repositório:** [github.com/docci-amore/docci-amore](https://github.com/docci-amore/docci-amore)
