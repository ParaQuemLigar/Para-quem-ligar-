// Função para criar uma animação suave de rolagem
function smoothScroll(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Compensa o cabeçalho fixo
      behavior: "smooth",
    });
  }
}

// Função para animação de introdução
function animateIntro() {
  const intro = document.querySelector(".intro");
  if (intro) {
    intro.style.opacity = 1;
  }
}

// Inicializar as funcionalidades
function init() {
  // Animação de introdução
  animateIntro();

  // Configurar a rolagem suave
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      smoothScroll(targetId);
    });
  });
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
