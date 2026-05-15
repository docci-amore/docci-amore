# ✅ Fase 1 — Concluída
> **Período:** 02 a 09 de maio de 2026  
> **Foco:** Configuração inicial, estrutura base e primeiros arquivos CSS

---

## 👥 Membros envolvidos

| Membro | Papel | O que fez |
|---|---|---|
| **Alle** | Apoio inicial | Criou o repositório no GitHub e organizou a estrutura de pastas |
| **Jonathan** | Co-Líder Técnico | Criou o `index.html` base e o `style.css` |
| **Pedro** | Desenvolvedor | Criou o `navbar.css` completo |
| **Igor** | Desenvolvedor | Criou o `sobre.css` |
| **Ronaldo** | Co-Líder de Gestão | Conduziu reunião de alinhamento inicial |

---

## 🗂️ Estrutura de pastas criada (Alle)

```
docci-amore/
├── index.html
├── css/
├── js/
├── imagens/
└── docs/
```

---

## 📄 `index.html` — Jonathan

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Docci Amore — Confeitaria Artesanal</title>

  <!-- Fontes -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

  <!-- CSS — na ordem correta conforme documentação -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/navbar.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/cardapio.css">
  <link rel="stylesheet" href="css/galeria.css">
  <link rel="stylesheet" href="css/sobre.css">
  <link rel="stylesheet" href="css/depoimentos.css">
  <link rel="stylesheet" href="css/contato.css">
  <link rel="stylesheet" href="css/rodape.css">
</head>

<body>
  <!-- conteúdo das seções — ver fase2.md -->
  <script src="js/main.js"></script>
</body>
</html>
```

---

## 🎨 `css/style.css` — Jonathan

```css
/* ======================================================
   style.css — Estilos globais do projeto Docci Amore
   Responsável: Jonathan
   Variáveis CSS, reset, tipografia e estilos base
====================================================== */

/* ===== VARIÁVEIS ===== */
:root {
  --cor-fundo:      #F9E4E1;
  --cor-medio:      #F2C9C4;
  --cor-principal:  #8B4E44;
  --cor-escuro:     #5C2E28;
  --cor-branco:     #FFF8F6;
  --cor-destaque:   #C9A96E;
}

/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/* ===== BODY ===== */
body {
  font-family: 'Lato', sans-serif;
  background-color: var(--cor-fundo);
  color: var(--cor-escuro);
  line-height: 1.6;
}

a { text-decoration: none; color: inherit; }

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  color: var(--cor-principal);
}

/* ===== CONTAINER GLOBAL ===== */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== SEÇÕES ===== */
section {
  padding: 100px 20px;
}

/* ===== SECTION HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-header h2 {
  font-size: 2.5rem;
  color: var(--cor-principal);
  margin-bottom: 10px;
}
.section-header p {
  font-size: 1rem;
  color: var(--cor-escuro);
  opacity: 0.75;
}

/* ===== DIVISOR ===== */
.divisor {
  text-align: center;
  padding: 20px 0 0;
  color: var(--cor-destaque);
  font-size: 1.4rem;
  letter-spacing: 8px;
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  section { padding: 60px 16px; }
  .section-header { margin-bottom: 36px; }
  .section-header h2 { font-size: 2rem; }
  .section-header p { font-size: 0.9rem; }
}
```

---

## 🧭 `css/navbar.css` — Pedro

```css
/* ======================================================
   navbar.css — Navbar oficial do projeto Docci Amore
   Responsável: Pedro
   Padrão visual alinhado ao style.css global
====================================================== */

/* ===== BARRA DE ANÚNCIO ===== */
.barra-anuncio {
  width: 100%;
  background: var(--cor-medio);
  color: var(--cor-escuro);
  text-align: center;
  padding: 10px 20px;
  font-family: 'Lato', sans-serif;
  font-size: 0.85rem;
}
.barra-anuncio strong { font-weight: 700; }
.barra-anuncio a { color: var(--cor-principal); font-weight: 700; }
.barra-anuncio a:hover { color: var(--cor-escuro); }

/* ===== NAVBAR ===== */
.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--cor-branco);
  border-bottom: 1px solid var(--cor-medio);
  box-shadow: 0 2px 12px rgba(139, 78, 68, 0.08);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===== LOGO ===== */
.navbar-logo {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.logo-cursiva {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: var(--cor-principal);
  line-height: 1;
}
.logo-divider { display: none; }
.logo-sub {
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--cor-destaque);
  line-height: 1;
}

/* ===== MENU ===== */
.navbar-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
}
.navbar-menu li a {
  color: var(--cor-principal);
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  padding: 8px 14px;
  border-radius: 50px;
  transition: 0.3s ease;
}
.navbar-menu li a:hover {
  background: var(--cor-fundo);
  color: var(--cor-escuro);
}
.navbar-menu li a.btn-destaque {
  background: var(--cor-principal);
  color: var(--cor-branco);
  font-weight: 700;
}
.navbar-menu li a.btn-destaque:hover { background: var(--cor-escuro); }

/* ===== LINHA DOURADA ===== */
.navbar-divider {
  width: 100%;
  height: 2px;
  background: var(--cor-destaque);
  opacity: 0.4;
}

/* ===== BOTÃO MOBILE ===== */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--cor-principal);
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {

  .barra-anuncio {
    font-size: 0.82rem;
    padding: 6px 12px;
    line-height: 2;
  }
  .barra-anuncio br { display: block; }

  .navbar-inner { padding: 0 16px; height: 70px; display: flex; align-items: center; }
  .navbar-toggle { display: block; }

  .navbar-menu {
    display: none;
    position: absolute;
    top: 70px; left: 0; right: 0;
    background: var(--cor-branco);
    flex-direction: column;
    padding: 20px;
    border-top: 1px solid var(--cor-medio);
    gap: 8px;
    box-shadow: 0 8px 20px rgba(139,78,68,0.1);
  }
  .navbar-menu.aberto { display: flex; }
  .navbar-menu li a { width: 100%; text-align: center; display: block; }

  .navbar-logo {
    flex-direction: row;
    align-items: center;
    gap: 0;
    height: auto;
    align-self: center;
  }
  .logo-cursiva { font-size: 2.2rem; }
  .logo-divider {
    display: block;
    width: 1px;
    height: 28px;
    background: var(--cor-medio);
    margin: 0 12px;
    flex-shrink: 0;
  }
  .logo-sub {
    font-size: 0.6rem;
    letter-spacing: 1.5px;
    max-width: 80px;
    line-height: 1.6;
  }
}
```

---

## 📖 `css/sobre.css` — Igor

```css
/* ======================================================
   sobre.css — Seção Sobre Nós
   Responsável: Igor
====================================================== */

.sobre {
  background-color: var(--cor-branco);
  padding: 100px 20px;
}

.sobre-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

/* ===== IMAGEM ===== */
.sobre-img { flex: 1; text-align: center; }
.sobre-img img {
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(139, 78, 68, 0.1);
  transition: transform 0.3s ease;
}
.sobre-img img:hover { transform: scale(1.03); }

/* ===== TEXTO ===== */
.sobre-texto { flex: 1; max-width: 500px; }
.sobre-texto h2 { font-size: 2.5rem; margin-bottom: 20px; }
.sobre-texto p {
  font-size: 1rem;
  color: var(--cor-escuro);
  margin-bottom: 15px;
  line-height: 1.8;
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .sobre-container { flex-direction: column; text-align: center; gap: 32px; }
  .sobre-img img { max-width: 340px; }
  .sobre-texto h2 { font-size: 2rem; }
  .sobre-texto p { font-size: 0.95rem; }
}
```

---

## ✅ Checklist da Fase 1

- [x] Repositório criado no GitHub
- [x] Estrutura de pastas (`css/`, `js/`, `imagens/`, `docs/`) organizada
- [x] `style.css` com variáveis globais e reset
- [x] `navbar.css` completo e responsivo
- [x] `sobre.css` completo e responsivo
- [x] `index.html` com estrutura base e todos os links configurados
- [x] Reunião de alinhamento realizada

---

*Fase 1 — Docci Amore · 2026*
