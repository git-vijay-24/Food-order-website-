let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some items.");
    } else {
        alert("Proceeding to checkout!");
        // Here, you could integrate a payment system, etc.
    }
}
