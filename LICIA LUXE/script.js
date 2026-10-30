// ===============================
// LICIA LUXE BEAUTY SHOPPING CART
// ===============================

let cart = JSON.parse(localStorage.getItem("liciaCart")) || [];

// Add product to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("liciaCart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " has been added to your cart! 💜");
}

// Update trolley/cart number
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    if (!cartItems || !totalElement) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += Number(item.price);

        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - R${item.price}
            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);
    });

    totalElement.textContent = "Total: R" + total;
}

// Remove product
function removeFromCart(index) {
    cart.splice(index, 1);

    localStorage.setItem("liciaCart", JSON.stringify(cart));

    updateCartCount();
    displayCart();
}

// Clear cart
function clearCart() {
    cart = [];

    localStorage.removeItem("liciaCart");

    updateCartCount();
    displayCart();
}

// Load cart when page opens
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    displayCart();
});