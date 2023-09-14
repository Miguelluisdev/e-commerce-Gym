
const toggle = document.querySelector(".toggle");
const input = document.querySelector("#senha");

toggle.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    toggle.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    input.type = "password";
    toggle.classList.replace("bi-eye-slash", "bi-eye");
  }
});



//  validação form login- cadastro usando poo com ajuda


// Função para validar o cadastro e salvar os dados no localStorage
function cadastrarUsuario() {
  const nome = document.getElementById('nome').value;
  const emailCadastro = document.getElementById('emailCadastro').value;
  const senhaCadastro = document.getElementById('senhaCadastro').value;

  // Validação básica - você pode adicionar validações mais robustas
  if (!nome || !emailCadastro || !senhaCadastro) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Criar um objeto de usuário
  const usuario = {
    nome: nome,
    email: emailCadastro,
    senha: senhaCadastro,
  };

  // Salvar o usuário no localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  // Fechar o modal de cadastro automaticamente (não é mais necessário remover classes manualmente)
  document.getElementById('cadastroConcluidoModal').classList.add('show');
}


// Evento de clique no botão de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  cadastrarUsuario();
});

// Função para validar o login
function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

  if (!usuarioSalvo || email !== usuarioSalvo.email || senha !== usuarioSalvo.senha) {
    alert('Credenciais de login inválidas.');
    return;
  }

  // Preencher o nome do usuário no ícone de usuário
  document.querySelector('.users .nav-link i').textContent = usuarioSalvo.nome;

  // Fechar o modal de login automaticamente
  document.getElementById('loginModal').classList.remove('show');
  document.body.classList.remove('modal-open');
  document.querySelector('.modal-backdrop').remove();
}

// Evento de clique no botão de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  fazerLogin();
  alert("clique no seu nome para voltar a usar o site")
});


// Seletor do botão e do documento
const scrollToTopButton = document.querySelector('.scrollTop');
const rootElement = document.documentElement;

// Função para rolar para o topo da página
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


window.addEventListener('scroll', () => {
  if (rootElement.scrollTop > 100) {
    // Exibir o botão quando o usuário rolar mais de 100px da parte superior
    scrollToTopButton.classList.add('show');
  } else {
    // Ocultar o botão se o usuário estiver no topo da página
    scrollToTopButton.classList.remove('show');
  }
});


scrollToTopButton.addEventListener('click', scrollToTop);

//  para tentar corrigir o problema do scroll top com o carrosel
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const carousel = document.getElementById("carouselExampleCaptions");

  // Função para verificar se o cursor está sobre o carrossel
  function isCursorOverCarousel(event) {
    const carouselRect = carousel.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    return (
      mouseX >= carouselRect.left &&
      mouseX <= carouselRect.right &&
      mouseY >= carouselRect.top &&
      mouseY <= carouselRect.bottom
    );
  }

  // Função para alternar a classe do botão "scrollTop"
  function toggleScrollTopButton() {
    if (isCursorOverCarousel(event)) {
      scrollToTopButton.classList.add("hidden");
    } else {
      scrollToTopButton.classList.remove("hidden");
    }
  }

  // Adicione um ouvinte de eventos de mousemove ao documento
  document.addEventListener("mousemove", toggleScrollTopButton);

  // O botão "scrollTop" deve ser inicialmente visível
  scrollToTopButton.classList.remove("hidden");
});

// Função para rolar suavemente para o topo da página quando o botão é clicado
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
