
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu' : 'Abrir menu'
  );
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

function aplicarTema(tema) {
  root.setAttribute('data-theme', tema);

  const modoClaro = tema === 'light';
  themeToggle.textContent = modoClaro ? '🌙' : '☀️';
  themeToggle.setAttribute(
    'aria-label',
    modoClaro ? 'Ativar modo escuro' : 'Ativar modo claro'
  );
  themeToggle.setAttribute(
    'title',
    modoClaro ? 'Ativar modo escuro' : 'Ativar modo claro'
  );
}

const temaSalvo = localStorage.getItem('tema') || 'dark';
aplicarTema(temaSalvo);

themeToggle.addEventListener('click', () => {
  const temaAtual = root.getAttribute('data-theme');
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

  aplicarTema(novoTema);
  localStorage.setItem('tema', novoTema);
});

document.getElementById('year').textContent = new Date().getFullYear();
