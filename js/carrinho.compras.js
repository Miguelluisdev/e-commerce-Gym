//  import fazerLogin from "./index.js";
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartList = document.getElementById("cart");
    const totalDisplay = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const price = parseFloat(button.getAttribute("data-price"));
        const plan = button.getAttribute("data-plan");
  
        cart.push({ plan, price });
        total += price;
  
        updateCart();
      });
    });
  
    checkoutButton.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
        return;
      }
  
      // Simule uma compra
      alert(`Total da compra: R$${total.toFixed(2)}. Redirecionando para a página principal.`);
      cart = []; // Limpa o carrinho após a compra
      total = 0;
      updateCart();
  
      // Redireciona para a página principal
      window.location = "../index.html";
    });
  
    // Função para atualizar o carrinho na página
    function updateCart() {
      cartList.innerHTML = "";
      cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.plan} - R$${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
      });
  
      totalDisplay.textContent = `R$${total.toFixed(2)}`;
  
      // Salva o carrinho no LocalStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    // Inicializa o carrinho na página
    updateCart();
    
      // fazerLogin = localStorage.getItem('usuario');
    
      // if (!fazerLogin) {
      //   alert("Você precisa estar logado para fazer compras.");
      //   window.location = "../index.html"; // Redireciona para a página de login
      // }
  });
  