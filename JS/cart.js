// Sample products array to represent cart items
let cartItems = [
    { name: "Lindt Lindor Assorted Chocolate Gift Box", price: 47.95, quantity: 1, image: "/PICTURES/Products/Featured Products/Lindt Lindor.jpg" },
    { name: "Holiday Cheer Mug Set", price: 28.75, quantity: 1, image: "/PICTURES/Products/Featured Products/Mug Set.jpg" },
    { name: "Disney Stitch Christmas Women’s T-Shirt", price: 50.00, quantity: 1, image: "/PICTURES/Products/New Arrivals/Stitch.jpg" },
    { name: "Wooden Christmas Nutcracker Soldiers (Set of 2)", price: 80.00, quantity: 1, image: "/PICTURES/Products/New Arrivals/Nutcrackers.jpg" },
    { name: "Barnetts Christmas Cookie Gift Box", price: 132.15, quantity: 1, image: "/PICTURES/Products/New Arrivals/Barnetts.jpg" }
];

// Function to render the cart items as table rows
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = ''; // Clear existing content

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" onclick="deleteItem(${index})"><i class="fa-solid fa-circle-xmark"></i></a></td>
            <td><img src="${item.image}" alt="${item.name}" style="width: 80px;"></td>
            <td>${item.name}</td>
            <td>AED ${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td>AED ${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
    });

    updateTotal();
}

// Function to update the quantity
function updateQuantity(index, value) {
    cartItems[index].quantity = parseInt(value) || 1; // Ensure quantity is at least 1
    renderCart();
}

// Function to delete an item from the cart
function deleteItem(index) {
    cartItems.splice(index, 1); // Remove item from the array
    renderCart(); // Re-render the cart
}

// Function to calculate and update the total bill
function updateTotal() {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('cartSubtotal').innerText = `AED ${subtotal.toFixed(2)}`;
    document.getElementById('cartTotal').innerText = `AED ${subtotal.toFixed(2)}`;
}

// Initial render
renderCart();