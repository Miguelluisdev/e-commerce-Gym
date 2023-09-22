


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

// imc calc
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Seleção de elementos
const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");

const backBtn = document.querySelector("#back-btn");

// Funções
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imcTable.appendChild(div);
  });
}

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

function calcImc(height, weight) {
  const imc = (weight / (height * height)).toFixed(1);
  return imc;
}

function cleanInputs() {
  heightInput.value = "";
  weightInput.value = "";
  imcNumber.className = "";
  imcInfo.className = "";
}

function showOrHideResults() {
  calcContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");
}

// Init
createTable(data);

// Eventos
[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;
  });
});

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = +weightInput.value.replace(",", ".");
  const height = +heightInput.value.replace(",", ".");

  console.log(weight, height);

  if (!weight || !height) return;

  const imc = calcImc(height, weight);
  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  imcNumber.innerText = imc;
  imcInfo.innerText = info;

  switch (info) {
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;
    case "Sobrepeso":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Obesidade":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;
    case "Obesidade grave":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;
  }

  showOrHideResults();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  cleanInputs();
});

backBtn.addEventListener("click", (e) => {
  cleanInputs();
  showOrHideResults();
});

// personal cards

const paineis = document.querySelectorAll(".painel");

paineis.forEach((painel) => {
  painel.addEventListener("click", () => {
    removeActiveClasses()
  })
})

function removeActiveClasses(){
  paineis.forEach(painel => {
    painel.classList.remove("active")
  })
}
// depoiment cards
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Avançar automaticamente os slides a cada 5 segundos
setInterval(nextSlide, 5000);

// btn location
document.getElementById("btn-mod").addEventListener("click", function(){
  window.location = "./src/modalidades.html"
})

// contact form
function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Verifique se os campos obrigatórios estão preenchidos
  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false; // Impede o envio do formulário
  }

  // Valide o formato do email usando regex
  if (!email.match(emailRegex)) {
    alert("Por favor, insira um endereço de email válido.");
    return false; // Impede o envio do formulário
  }


}