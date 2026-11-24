
// Product Details
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499
    },
    {
        id: 3,
        name: "Sports Shoes",
        price: 1999
    },
    {
        id: 4,
        name: "Digital Camera",
        price: 4999
    }
];

// Shopping Cart
let cart = [];

// Get HTML Elements
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

// Add to Cart Function
function addToCart(productId) {

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Remove from Cart Function
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Update Cart Function
function updateCart() {

    // Update Cart Count
    cartCount.innerText = cart.length;

    // Clear Previous Cart Items
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-message">Your cart is empty.</p>';
    }

    // Display Cart Products
    cart.forEach(function(item, index) {

        const div = document.createElement("div");
        div.classList.add("cart-item");

        const name = document.createElement("p");
        name.innerText = item.name + " - ₹" + item.price;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", function() {
            removeFromCart(index);
        });

        div.appendChild(name);
        div.appendChild(removeBtn);

        cartItems.appendChild(div);
    });

    // Calculate Total Price
    const total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);

    totalPrice.innerText = total.toLocaleString("en-IN");
}

// Add to Cart Button Events
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productId = Number(button.dataset.id);

        addToCart(productId);

    });

});

// Search Products
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const productCards =
        document.querySelectorAll(".product-card");

    let visibleCount = 0;

    productCards.forEach(function(card) {

        const productName =
            card.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    // Display No Results Message
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});

// Initial Cart Display
updateCart();
