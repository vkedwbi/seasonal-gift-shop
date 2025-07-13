const cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}

function filterProducts(season) {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.style.display = card.classList.contains(season) ? "block" : "none";
  });
}