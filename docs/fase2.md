# ✅ Fase 2 — Concluída
> **Período:** 12 a 25 de maio de 2026  
> **Foco:** Desenvolvimento de todas as seções + integração + scripts JS

---

## 👥 Membros envolvidos

| Membro | O que fez | Arquivos |
|---|---|---|
| **Maria** | Hero com carrossel + Rodapé + WhatsApp flutuante | `hero.css` + `rodape.css` |
| **Silvia** | Cardápio com grid de produtos | `cardapio.css` |
| **Igor** | Depoimentos com cards animados e avatares | `depoimentos.css` |
| **Nicolas** | Galeria com hover + Contato com cards de info | `galeria.css` + `contato.css` |
| **Jonathan** | Integração de todas as seções + scripts | `index.html` completo + `js/main.js` |
| **Ronaldo** | Reuniões de acompanhamento | — |

---

## 📄 `index.html` completo — Jonathan

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Docci Amore — Confeitaria Artesanal</title>

  <!-- Fontes -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

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
</head>

<body>

  <!-- Barra de Anúncio -->
  <div class="barra-anuncio">
    🎂 <strong>Encomende com antecedência!</strong><br>
    Peça pelo <a href="https://instagram.com/confeitaria_docci_amore" target="_blank">Instagram</a>
    ou pelo <a href="https://wa.me/5511999999999" target="_blank">WhatsApp</a>
  </div>

  <!-- Navbar -->
  <header class="navbar">
    <div class="navbar-inner">
      <a href="#inicio" class="navbar-logo">
        <span class="logo-cursiva">Docci Amore</span>
        <span class="logo-divider"></span>
        <span class="logo-sub">Confeitaria Artesanal</span>
      </a>
      <button class="navbar-toggle" onclick="toggleMenu()" aria-label="Abrir menu">☰</button>
      <ul class="navbar-menu" id="navbar-menu">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#cardapio">Cardápio</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato" class="btn-destaque">Contato</a></li>
      </ul>
    </div>
    <div class="navbar-divider"></div>
  </header>

  <main>

    <!-- Hero Carrossel -->
    <section id="inicio" class="hero">
      <div class="hero-slides">
        <div class="hero-slide ativo"></div>
        <div class="hero-slide"></div>
        <div class="hero-slide"></div>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-conteudo">
        <p class="hero-slogan">Feito com amor, do início ao fim</p>
        <h1 class="hero-titulo">Docci Amore</h1>
        <p class="hero-subtitulo">Confeitaria artesanal para momentos inesquecíveis</p>
        <a href="#cardapio" class="hero-btn">Ver Cardápio</a>
      </div>
      <button class="hero-seta prev" onclick="moverSlide(-1)" aria-label="Anterior">&#8592;</button>
      <button class="hero-seta next" onclick="moverSlide(1)" aria-label="Próximo">&#8594;</button>
      <div class="hero-dots">
        <button class="hero-dot ativo" onclick="irParaSlide(0)"></button>
        <button class="hero-dot" onclick="irParaSlide(1)"></button>
        <button class="hero-dot" onclick="irParaSlide(2)"></button>
      </div>
    </section>

    <!-- Cardápio -->
    <section id="cardapio" class="cardapio">
      <div class="section-header">
        <div class="divisor">— ✦ —</div>
        <h2>Nosso Cardápio</h2>
        <p>Feitos com ingredientes selecionados e muito carinho</p>
      </div>
      <div class="cardapio-grid">

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80" alt="Bolo de Chocolate">
          </div>
          <div class="produto-info">
            <h3>Bolo de Chocolate</h3>
            <p class="produto-descricao">Massa fofinha com ganache de chocolate belga</p>
            <span class="produto-preco">R$ 40,00</span>
          </div>
        </article>

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80" alt="Bolo de Morango">
          </div>
          <div class="produto-info">
            <h3>Bolo de Morango</h3>
            <p class="produto-descricao">Camadas de pão de ló com creme e morangos frescos</p>
            <span class="produto-preco">R$ 45,00</span>
          </div>
        </article>

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80" alt="Bolo de Baunilha">
          </div>
          <div class="produto-info">
            <h3>Bolo de Baunilha</h3>
            <p class="produto-descricao">Clássico e delicado com cobertura de chantilly</p>
            <span class="produto-preco">R$ 42,00</span>
          </div>
        </article>

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80" alt="Cupcakes">
          </div>
          <div class="produto-info">
            <h3>Cupcakes</h3>
            <p class="produto-descricao">6 unidades decoradas com buttercream artesanal</p>
            <span class="produto-preco">R$ 35,00</span>
          </div>
        </article>

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80" alt="Torta de Limão">
          </div>
          <div class="produto-info">
            <h3>Torta de Limão</h3>
            <p class="produto-descricao">Base crocante com creme de limão siciliano</p>
            <span class="produto-preco">R$ 38,00</span>
          </div>
        </article>

        <article class="produto-card">
          <div class="produto-img">
            <img src="https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80" alt="Brigadeiros">
          </div>
          <div class="produto-info">
            <h3>Brigadeiros Gourmet</h3>
            <p class="produto-descricao">12 unidades com cobertura de chocolate belga</p>
            <span class="produto-preco">R$ 28,00</span>
          </div>
        </article>

      </div>
    </section>

    <!-- Galeria -->
    <section id="galeria" class="galeria">
      <div class="section-header">
        <div class="divisor">— ✦ —</div>
        <h2>Galeria</h2>
        <p>Cada detalhe feito com amor</p>
      </div>
      <div class="galeria-grid">

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80" alt="Bolo Floral">
          <div class="galeria-overlay"><span>Bolo Floral</span></div>
        </div>

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80" alt="Cupcakes">
          <div class="galeria-overlay"><span>Cupcakes</span></div>
        </div>

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=600&q=80" alt="Aniversário">
          <div class="galeria-overlay"><span>Aniversário</span></div>
        </div>

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&q=80" alt="Doces Finos">
          <div class="galeria-overlay"><span>Doces Finos</span></div>
        </div>

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80" alt="Festivo">
          <div class="galeria-overlay"><span>Festivo</span></div>
        </div>

        <div class="galeria-item">
          <img src="https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600&q=80" alt="Artesanal">
          <div class="galeria-overlay"><span>Artesanal</span></div>
        </div>

      </div>
    </section>

    <!-- Sobre -->
    <section class="sobre" id="sobre">
      <div class="sobre-container">
        <div class="sobre-img">
          <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=80" alt="Bolo artesanal">
        </div>
        <div class="sobre-texto">
          <div class="divisor" style="text-align:left; padding: 0 0 16px;">— ✦ —</div>
          <h2>Sobre Nós</h2>
          <p>Nossa confeitaria nasceu do amor por transformar momentos simples em memórias doces. Cada receita é preparada com carinho, ingredientes selecionados e um toque artesanal que faz toda a diferença.</p>
          <p>Acreditamos que um doce vai muito além do sabor — ele representa celebração, afeto e felicidade. Por isso, buscamos sempre criar experiências únicas em cada detalhe.</p>
          <p>Seja para um aniversário, casamento ou um momento especial, estamos aqui para tornar tudo ainda mais doce e inesquecível.</p>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos" class="depoimentos">
      <div class="section-header">
        <div class="divisor">— ✦ —</div>
        <h2>O que nossos clientes dizem</h2>
        <p>Cada sorriso é a nossa maior recompensa</p>
      </div>
      <div class="depoimentos-grid">

        <div class="depoimento-card">
          <div class="depoimento-estrelas">★★★★★</div>
          <p class="depoimento-texto">"O bolo de morango foi a estrela da festa! Todos amaram o sabor e a decoração. Com certeza voltarei a encomendar!"</p>
          <div class="depoimento-autor-info">
            <img class="depoimento-avatar" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&fit=crop&crop=face&q=80" alt="Ana Paula">
            <span class="depoimento-autor">— Ana Paula, São Paulo</span>
          </div>
        </div>

        <div class="depoimento-card">
          <div class="depoimento-estrelas">★★★★★</div>
          <p class="depoimento-texto">"Os brigadeiros gourmet são simplesmente irresistíveis. Pedi para o meu casamento e todos os convidados ficaram encantados!"</p>
          <div class="depoimento-autor-info">
            <img class="depoimento-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face&q=80" alt="Carla e Rodrigo">
            <span class="depoimento-autor">— Carla e Rodrigo, Santos</span>
          </div>
        </div>

        <div class="depoimento-card">
          <div class="depoimento-estrelas">★★★★★</div>
          <p class="depoimento-texto">"Atendimento incrível e bolo lindo! A qualidade dos ingredientes faz toda a diferença. Super recomendo a Docci Amore!"</p>
          <div class="depoimento-autor-info">
            <img class="depoimento-avatar" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&fit=crop&crop=face&q=80" alt="Fernanda Lima">
            <span class="depoimento-autor">— Fernanda Lima, Campinas</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="contato">
      <div class="section-header">
        <div class="divisor">— ✦ —</div>
        <h2>Fale Conosco</h2>
        <p>Adoramos receber encomendas e tirar dúvidas!</p>
      </div>
      <div class="contato-container">

        <div class="contato-info">
          <p>Entre em contato pelo formulário ou pelas nossas redes. Respondemos rapidinho! 🎂</p>
          <div class="contato-cards">

            <div class="contato-card-item">
              <div class="contato-card-icone">📸</div>
              <div class="contato-card-texto">
                <strong>Instagram</strong>
                <a href="https://instagram.com/confeitaria_docci_amore" target="_blank">@confeitaria_docci_amore</a>
              </div>
            </div>

            <div class="contato-card-item">
              <div class="contato-card-icone">📍</div>
              <div class="contato-card-texto">
                <strong>Localização</strong>
                <span>São Paulo, SP</span>
              </div>
            </div>

            <div class="contato-card-item">
              <div class="contato-card-icone">🕐</div>
              <div class="contato-card-texto">
                <strong>Horário de atendimento</strong>
                <span>Seg a Sáb: 9h às 18h</span>
              </div>
            </div>

          </div>
        </div>

        <form class="form-contato">
          <h3>Envie sua mensagem</h3>
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="Seu e-mail" required>
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>

      </div>
    </section>

  </main>

  <!-- Rodapé -->
  <footer class="rodape">
    <div class="rodape-container">

      <div class="rodape-col rodape-col-marca">
        <span class="logo-cursiva-rodape">Docci Amore</span>
        <p>Confeitaria artesanal feita com amor para tornar seus momentos mais doces e inesquecíveis.</p>
      </div>

      <div class="rodape-col">
        <h4>Navegação</h4>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div class="rodape-col rodape-col-info">
        <h4>Contato</h4>
        <div class="info-item">
          <span>📸</span>
          <a href="https://instagram.com/confeitaria_docci_amore" target="_blank">@confeitaria_docci_amore</a>
        </div>
        <div class="info-item">
          <span>🕐</span>
          <span>Seg a Sáb: 9h às 18h</span>
        </div>
        <div class="info-item">
          <span>📍</span>
          <span>São Paulo, SP</span>
        </div>
      </div>

    </div>
    <div class="rodape-bottom">
      <p>© 2026 Docci Amore · Todos os direitos reservados</p>
    </div>
  </footer>

  <!-- WhatsApp Flutuante -->
  <a class="whatsapp-btn" href="https://wa.me/5511999999999" target="_blank" aria-label="Fale pelo WhatsApp">
    <span class="whatsapp-tooltip">Fale conosco!</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  <!-- JavaScript -->
  <script src="js/main.js"></script>

</body>
</html>
```

---

## 🦸 `css/hero.css` — Maria

```css
/* ======================================================
   hero.css — Hero com carrossel
   Responsável: Maria
====================================================== */

.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

/* ===== SLIDES ===== */
.hero-slides {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}
.hero-slide.ativo { opacity: 1; }

.hero-slide:nth-child(1) {
  background-image: url('https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1600&q=80');
}
.hero-slide:nth-child(2) {
  background-image: url('https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&q=80');
}
.hero-slide:nth-child(3) {
  background-image: url('https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=1600&q=80');
}

/* ===== OVERLAY ===== */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(60, 25, 20, 0.58);
  z-index: 1;
}

/* ===== CONTEÚDO ===== */
.hero-conteudo {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}
.hero-slogan {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #F5D98A;
  margin-bottom: 12px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  animation: fadeDown 1s ease forwards;
}
.hero-titulo {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 16px;
  text-shadow: 0 3px 16px rgba(0,0,0,0.75), 0 1px 4px rgba(0,0,0,0.5);
  animation: fadeDown 1s ease 0.2s both;
}
.hero-subtitulo {
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 36px;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: rgba(0,0,0,0.28);
  padding: 8px 24px;
  border-radius: 30px;
  animation: fadeDown 1s ease 0.4s both;
}
.hero-btn {
  display: inline-block;
  background: var(--cor-escuro);
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 16px 44px;
  border-radius: 30px;
  letter-spacing: 1.5px;
  border: 2px solid var(--cor-destaque);
  transition: all 0.3s ease;
  animation: fadeDown 1s ease 0.6s both;
  text-transform: uppercase;
}
.hero-btn:hover {
  background: var(--cor-destaque);
  color: var(--cor-escuro);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}

/* ===== SETAS ===== */
.hero-seta {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(255,255,255,0.18);
  border: none;
  color: #fff;
  font-size: 1.6rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  backdrop-filter: blur(4px);
}
.hero-seta:hover { background: rgba(255,255,255,0.35); }
.hero-seta.prev { left: 24px; }
.hero-seta.next { right: 24px; }

/* ===== BOLINHAS ===== */
.hero-dots {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 10px;
}
.hero-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.hero-dot.ativo {
  background: var(--cor-destaque);
  transform: scale(1.3);
}

/* ===== ANIMAÇÃO ===== */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .hero { min-height: 65vh; }
  .hero-conteudo { min-height: 65vh; padding: 16px; }
  .hero-titulo { font-size: 2.4rem; }
  .hero-slogan { font-size: 1.8rem; }
  .hero-subtitulo { font-size: 0.95rem; padding: 6px 16px; }
  .hero-btn { padding: 14px 28px; font-size: 0.88rem; }
  .hero-seta { width: 38px; height: 38px; font-size: 1.2rem; }
  .hero-seta.prev { left: 12px; }
  .hero-seta.next { right: 12px; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .hero-titulo { font-size: 1.9rem; }
  .hero-slogan { font-size: 1.5rem; }
  .hero-subtitulo { font-size: 0.85rem; }
}
```

---

## 🛍️ `css/cardapio.css` — Silvia

```css
/* ======================================================
   cardapio.css — Seção Cardápio
   Responsável: Silvia
====================================================== */

.cardapio {
  background: var(--cor-branco);
  padding: 100px 20px;
}

.cardapio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

/* ===== CARD ===== */
.produto-card {
  background: var(--cor-branco);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 78, 68, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.produto-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(139, 78, 68, 0.15);
}

/* ===== IMAGEM ===== */
.produto-img img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

/* ===== INFORMAÇÕES ===== */
.produto-info { padding: 18px 20px; }
.produto-info h3 {
  font-size: 1.2rem;
  color: var(--cor-principal);
  margin-bottom: 6px;
}
.produto-descricao {
  font-size: 0.88rem;
  color: var(--cor-escuro);
  opacity: 0.75;
  margin-bottom: 12px;
}
.produto-preco {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--cor-destaque);
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .cardapio-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .produto-img img { height: 180px; }
  .produto-info { padding: 14px 16px; }
  .produto-info h3 { font-size: 1rem; }
  .produto-descricao { font-size: 0.82rem; }
  .produto-preco { font-size: 1rem; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .cardapio-grid { grid-template-columns: 1fr; }
  .produto-img img { height: 200px; }
}
```

---

## 🖼️ `css/galeria.css` — Nicolas

```css
/* ======================================================
   galeria.css — Seção Galeria
   Responsável: Nicolas
====================================================== */

.galeria {
  background: var(--cor-fundo);
  padding: 100px 20px;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
}

/* ===== ITEM ===== */
.galeria-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.galeria-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.galeria-item:hover img { transform: scale(1.07); }

/* ===== OVERLAY ===== */
.galeria-overlay {
  position: absolute;
  inset: 0;
  background: rgba(92, 46, 40, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.galeria-item:hover .galeria-overlay { opacity: 1; }
.galeria-overlay span {
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .galeria-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .galeria-item img { height: 180px; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .galeria-grid { grid-template-columns: 1fr; }
  .galeria-item img { height: 220px; }
}
```

---

## 💬 `css/depoimentos.css` — Igor

```css
/* ======================================================
   depoimentos.css — Seção Depoimentos
   Responsável: Igor
====================================================== */

.depoimentos {
  background: var(--cor-medio);
  padding: 100px 20px;
}

.depoimentos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

/* ===== CARD ===== */
.depoimento-card {
  background: var(--cor-branco);
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(139, 78, 68, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease, translate 0.6s ease;
  opacity: 0;
  translate: 0 30px;
}
.depoimento-card.visivel {
  opacity: 1;
  translate: 0 0;
}
.depoimento-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(139, 78, 68, 0.15);
}

/* ===== ESTRELAS ===== */
.depoimento-estrelas {
  color: var(--cor-destaque);
  font-size: 1.1rem;
  margin-bottom: 16px;
}

/* ===== TEXTO ===== */
.depoimento-texto {
  font-size: 0.97rem;
  color: var(--cor-escuro);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 0;
}

/* ===== AUTOR ===== */
.depoimento-autor-info {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
}
.depoimento-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--cor-destaque);
  flex-shrink: 0;
}
.depoimento-autor {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--cor-principal);
}

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .depoimentos-grid { grid-template-columns: 1fr; gap: 16px; max-width: 480px; }
  .depoimento-card { padding: 24px 20px; }
  .depoimento-texto { font-size: 0.92rem; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .depoimentos-grid { max-width: 100%; }
}
```

---

## 📬 `css/contato.css` — Nicolas

```css
/* ======================================================
   contato.css — Seção Contato
   Responsável: Nicolas
====================================================== */

.contato {
  background: var(--cor-fundo);
  padding: 100px 20px;
}

.contato-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

/* ===== INFO ===== */
.contato-info h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--cor-principal);
}
.contato-info > p {
  font-size: 1rem;
  color: var(--cor-escuro);
  margin-bottom: 32px;
  line-height: 1.8;
  opacity: 0.85;
}
.contato-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ===== CARDS DE CONTATO ===== */
.contato-card-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--cor-branco);
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 12px rgba(139,78,68,0.07);
}
.contato-card-icone {
  font-size: 1.4rem;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: var(--cor-medio);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contato-card-texto strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 0.85rem;
  color: var(--cor-principal);
  margin-bottom: 2px;
}
.contato-card-texto span,
.contato-card-texto a { font-size: 0.92rem; color: var(--cor-escuro); }
.contato-card-texto a { color: var(--cor-principal); font-weight: 700; }
.contato-card-texto a:hover { color: var(--cor-escuro); }

/* ===== FORMULÁRIO ===== */
.form-contato {
  background: var(--cor-branco);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(139,78,68,0.09);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;
  width: 100%;
}
.form-contato h3 {
  font-size: 1.4rem;
  color: var(--cor-principal);
  margin-bottom: 4px;
  text-align: center;
}
.form-contato input,
.form-contato textarea {
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid var(--cor-medio);
  border-radius: 10px;
  background: var(--cor-fundo);
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  color: var(--cor-escuro);
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  display: block;
}
.form-contato input:focus,
.form-contato textarea:focus { border-color: var(--cor-principal); }
.form-contato textarea { resize: vertical; min-height: 130px; }
.form-contato button {
  width: 100%;
  background: var(--cor-principal);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s;
  letter-spacing: 0.5px;
}
.form-contato button:hover { background: var(--cor-escuro); }

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .contato-container { grid-template-columns: 1fr; gap: 32px; }
  .contato-info h2 { font-size: 2rem; text-align: center; }
  .contato-info > p { text-align: center; }
  .contato-info { display: flex; flex-direction: column; align-items: center; }
  .contato-cards { width: 100%; }
  .form-contato { padding: 24px 16px; width: 100%; box-sizing: border-box; }
  .form-contato h3 { font-size: 1.2rem; text-align: center; }
  .form-contato input,
  .form-contato textarea { width: 100%; box-sizing: border-box; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .contato-card-item { padding: 12px 14px; }
  .contato-card-icone { width: 38px; height: 38px; font-size: 1.1rem; }
}
```

---

## 🦶 `css/rodape.css` — Maria

```css
/* ======================================================
   rodape.css — Rodapé e WhatsApp flutuante
   Responsável: Maria
====================================================== */

/* ===== RODAPÉ ===== */
.rodape {
  background: var(--cor-escuro);
  padding: 70px 20px 0;
}

.rodape-container {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

/* ===== COLUNA MARCA ===== */
.rodape-col-marca .logo-cursiva-rodape {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  color: var(--cor-destaque);
  display: block;
  margin-bottom: 12px;
}
.rodape-col-marca p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
  max-width: 280px;
}

/* ===== COLUNAS ===== */
.rodape-col h4 {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--cor-destaque);
  margin-bottom: 20px;
}
.rodape-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.rodape-col ul li a {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}
.rodape-col ul li a:hover { color: #fff; }

/* ===== COLUNA INFO ===== */
.rodape-col-info .info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
}
.rodape-col-info .info-item span { font-size: 1rem; }
.rodape-col-info .info-item a {
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}
.rodape-col-info .info-item a:hover { color: #fff; }

/* ===== BOTTOM ===== */
.rodape-bottom {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.28);
}

/* ===== WHATSAPP FLUTUANTE ===== */
.whatsapp-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  width: 58px;
  height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.whatsapp-btn:hover {
  transform: scale(1.12);
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.6);
}
.whatsapp-btn svg { width: 32px; height: 32px; fill: #fff; }
.whatsapp-tooltip {
  position: absolute;
  right: 68px;
  background: var(--cor-escuro);
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 0.82rem;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -6px;
  transform: translateY(-50%);
  border-width: 5px 0 5px 6px;
  border-style: solid;
  border-color: transparent transparent transparent var(--cor-escuro);
}
.whatsapp-btn:hover .whatsapp-tooltip { opacity: 1; }

/* ===== RESPONSIVO — 768px ===== */
@media (max-width: 768px) {
  .rodape { padding: 48px 20px 0; }
  .rodape-container { grid-template-columns: 1fr; gap: 32px; text-align: center; }
  .rodape-col-marca p { max-width: 100%; }
  .logo-cursiva-rodape { font-size: 1.8rem; }
  .rodape-col ul { align-items: center; padding: 0; }
  .rodape-col ul li { list-style: none; text-align: center; }
  .rodape-col ul li a { display: block; text-align: center; }
  .rodape-col-info { display: flex; flex-direction: column; align-items: center; }
  .rodape-col-info .info-item { justify-content: center; width: fit-content; }
  .rodape-bottom { text-align: center; }
  .whatsapp-btn { width: 50px; height: 50px; bottom: 20px; right: 20px; }
  .whatsapp-btn svg { width: 26px; height: 26px; }
  .whatsapp-tooltip { display: none; }
}

/* ===== RESPONSIVO — 480px ===== */
@media (max-width: 480px) {
  .rodape-bottom { font-size: 0.75rem; text-align: center; }
}
```

---

## ⚙️ `js/main.js` — Jonathan

```javascript
/* ======================================================
   main.js — Scripts do site Docci Amore
   Responsável: Jonathan
====================================================== */

/* ===== MENU MOBILE ===== */
function toggleMenu() {
  document.getElementById('navbar-menu').classList.toggle('aberto');
}

/* ===== SMOOTH SCROLL com offset da navbar ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (!alvo) return;
    const alturaNavbar = document.querySelector('.navbar').offsetHeight;
    const posicao = alvo.getBoundingClientRect().top + window.scrollY - alturaNavbar;
    window.scrollTo({ top: posicao, behavior: 'smooth' });
    document.getElementById('navbar-menu').classList.remove('aberto');
  });
});

/* ===== CARROSSEL HERO ===== */
let slideAtual = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.hero-dot');
let intervalo = setInterval(() => moverSlide(1), 5000);

function atualizarCarrossel() {
  slides.forEach(s => s.classList.remove('ativo'));
  dots.forEach(d => d.classList.remove('ativo'));
  slides[slideAtual].classList.add('ativo');
  dots[slideAtual].classList.add('ativo');
}

function moverSlide(direcao) {
  slideAtual = (slideAtual + direcao + slides.length) % slides.length;
  atualizarCarrossel();
  resetIntervalo();
}

function irParaSlide(index) {
  slideAtual = index;
  atualizarCarrossel();
  resetIntervalo();
}

function resetIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(() => moverSlide(1), 5000);
}

/* ===== ANIMAÇÃO DE ENTRADA — DEPOIMENTOS ===== */
const cards = document.querySelectorAll('.depoimento-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(cards).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visivel');
      }, index * 150);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));
```

---

## ✅ Checklist da Fase 2

- [x] `hero.css` — carrossel com 3 slides, setas e bolinhas
- [x] `cardapio.css` — 6 produtos com foto, nome, descrição e preço
- [x] `galeria.css` — 6 fotos com hover e overlay
- [x] `depoimentos.css` — 3 cards com avatares e animação de entrada
- [x] `contato.css` — cards de info + formulário
- [x] `rodape.css` — 3 colunas + botão WhatsApp flutuante
- [x] `js/main.js` — menu mobile, smooth scroll, carrossel e animações
- [x] `index.html` — todas as seções integradas

---

*Fase 2 — Docci Amore · 2026*
