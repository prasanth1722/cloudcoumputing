let cartItems = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    
    // Clear the cart
    cartList.innerHTML = '';
    
    // Populate the cart
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update total
    totalSpan.innerText = total.toFixed(2);
}

function checkout() {
    alert(`Total: $${total.toFixed(2)}\nThank you for your order!`);
    // Optionally, you can clear the cart and total here.
    cartItems = [];
    total = 0;
    updateCart();
}
