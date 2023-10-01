// Aguarde o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 500);
  
  // Role suave para os links de navegação
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Ajuste de deslocamento
        behavior: "smooth",
      });
    });
  });

  // Destaque o link de navegação quando a seção estiver visível
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (
        scrollPosition >= targetSection.offsetTop - 50 &&
        scrollPosition < targetSection.offsetTop + targetSection.offsetHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
