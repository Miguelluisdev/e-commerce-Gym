
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

// // Função para exibir o alert de confirmação de cadastro
// function exibirAlertCadastro() {
//   const alertCadastro = document.getElementById('cadastroConcluidoAlert');
//   alertCadastro.style.display = 'block';

//   setTimeout(function () {
//     alertCadastro.style.display = 'none';
//   }, 5000); // O alert será ocultado automaticamente após 5 segundos
// }

// Chame a função exibirAlertCadastro após o cadastro ser realizado com sucesso
// Por exemplo, após chamar a função cadastrarUsuario() no seu código de cadastro
