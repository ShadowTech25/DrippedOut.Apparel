let cart = [];

function toggleCart() {
  const cartEl = document.getElementById('cart');
  cartEl.classList.toggle('active');
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItemsEl = document.getElementById('cart-items');
  cartItemsEl.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsEl.appendChild(li);
  });
}

function checkout() {
  alert('Order placed! Thank you for shopping Dripped Out.');
  cart = [];
  updateCart();
}
