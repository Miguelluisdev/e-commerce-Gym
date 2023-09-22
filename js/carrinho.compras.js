document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartList = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");
  const checkoutButton = document.getElementById("checkout");

  let cart = [];
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
   
      
      alert(`Total da compra: R$${total.toFixed(2)} redirecionando para a pagina principal`);
      window.location = "../index.html"
  });

  function updateCart() {
      cartList.innerHTML = "";
      cart.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.plan} - R$${item.price.toFixed(2)}`;
          cartList.appendChild(listItem);
      });

      totalDisplay.textContent = `R$${total.toFixed(2)}`;
  }
});