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
document.addEventListener('DOMContentLoaded', function () {
  const shopButton = document.querySelector('.cta');

  if (shopButton) {
    shopButton.addEventListener('click', function () {
      window.location.href = 'https://shadowtech25.github.io/DrippedOut.Apparel/shop.html';
    });
  }
});
function checkout() {
  alert('Order placed! Thank you for shopping Dripped Out.');
  cart = [];
  updateCart();
}
