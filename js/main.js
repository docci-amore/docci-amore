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