
let cart = [];

function addToCart(name, price) {
    console.log(name, "added to cart. Price: Rs.", price);
console.log("Total items in cart:", cart.length);
    cart.push({ name: name, price: price });

    document.getElementById("cart-count").textContent = cart.length;

    let total = 0;

    for (let item of cart) {
        total = total + item.price;
    }

    document.getElementById("cart-total").textContent = total;

    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    for (let item of cart) {
        cartItems.innerHTML += `
            <p>${item.name} - Rs. ${item.price}</p>
        `;
    }
}

function clearCart() {
    cart = [];

    document.getElementById("cart-count").textContent = 0;
    document.getElementById("cart-total").textContent = 0;
    document.getElementById("cart-items").innerHTML = "";
}

