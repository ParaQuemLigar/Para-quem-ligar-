// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  // Animação de carregamento na introdução
  const intro = document.querySelector(".intro");
  intro.style.opacity = 0;
  intro.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    intro.style.opacity = 1;
  }, 500);

  // Mensagem de boas-vindas
  setTimeout(() => {
    alert("Bem-vindo ao Para Quem Ligar! Saiba como agir em emergências.");
  }, 1000);

  // Rolagem suave para links do menu
  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").replace("../", "").replace("index.html", "");
      const targetElement = document.querySelector(`.${targetId}`);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      } else {
        // Redireciona caso o link seja externo à página inicial
        window.location.href = link.getAttribute("href");
      }
    });
  });
});
