// Örnek veriler
const products = [
    { name: 'Car Battery', brand: 'Brand A', model: 'Model X', price: 100, rating: 4.5, seller: 'Seller 1' },
    { name: 'Oil Filter', brand: 'Brand B', model: 'Model Y', price: 20, rating: 4.0, seller: 'Seller 2' },
    { name: 'Brake Pads', brand: 'Brand C', model: 'Model Z', price: 50, rating: 4.8, seller: 'Seller 3' },
    { name: 'Car Tire', brand: 'Brand D', model: 'Model W', price: 75, rating: 4.7, seller: 'Seller 4' }
];

const users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'password456' }
];

const orders = [
    { orderId: 1, user: 'user1@example.com', items: ['Car Battery', 'Oil Filter'], status: 'Delivered' },
    { orderId: 2, user: 'user2@example.com', items: ['Brake Pads'], status: 'In Transit' }
];

const cartItems = [
    { name: 'Car Battery', quantity: 1 },
    { name: 'Oil Filter', quantity: 2 }
];

// Basit bir arama işlevi
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsSection = document.getElementById('search-results');
    resultsSection.innerHTML = '';

    // Arama kriterlerine göre ürünleri filtrele
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    // Filtrelenmiş ürünleri göster
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Brand: ${product.brand}</p>
                <p>Model: ${product.model}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Seller: ${product.seller}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            `;
            resultsSection.appendChild(productElement);
        });
    } else {
        resultsSection.innerHTML = '<p>No products found.</p>';
    }
});

// Filtre butonları için örnek işlev
function applyFilter(filter) {
    console.log('Filter applied:', filter);
    const resultsSection = document.getElementById('search-results');
    resultsSection.innerHTML = '';

    // Örnek olarak, tüm ürünleri göstermek için kullanabilirsiniz.
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Model: ${product.model}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Seller: ${product.seller}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        resultsSection.appendChild(productElement);
    });
}

// Kullanıcı kaydı ve girişi işlevleri
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    users.push({ email: email, password: password });
    console.log('User registered with email:', email);
    alert('Registration successful for ' + email);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log('User logged in:', email);
        alert('Login successful for ' + email);
    } else {
        alert('Invalid email or password');
    }
});

// Sosyal medya ile giriş işlevi
document.getElementById('social-login').addEventListener('click', function() {
    console.log('Social media login clicked');
    alert('Social media login not implemented yet.');
});

// Alışveriş sepeti işlevleri
function addToCart(itemName) {
    console.log('Item added to cart:', itemName);
    const item = cartItems.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity++;
    } else {
        cartItems.push({ name: itemName, quantity: 1 });
    }
    displayCartItems();
}

function displayCartItems() {
    const cartItemsSection = document.getElementById('cart-items');
    cartItemsSection.innerHTML = '';

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.name} (x${item.quantity})</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartItemsSection.appendChild(itemElement);
        });
    } else {
        cartItemsSection.innerHTML = '<p>No items in cart.</p>';
    }
}

function removeFromCart(itemName) {
    console.log('Item removed from cart:', itemName);
    const itemIndex = cartItems.findIndex(cartItem => cartItem.name === itemName);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
    }
    displayCartItems();
}

// Ödeme işlevi
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    console.log('Payment processed with card number:', cardNumber);
    alert('Payment processed successfully.');
});

// Sipariş takibi ve geçmişi işlevleri
function loadOrderHistory() {
    console.log('Order history loaded');
    const orderHistory = document.getElementById('order-history');
    orderHistory.innerHTML = '';

    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order';
        orderElement.innerHTML = `
            <h3>Order ID: ${order.orderId}</h3>
            <p>User: ${order.user}</p>
            <p>Items: ${order.items.join(', ')}</p>
            <p>Status: ${order.status}</p>
        `;
        orderHistory.appendChild(orderElement);
    });
}

document.getElementById('order-search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const orderHistory = document.getElementById('order-history');
    orderHistory.innerHTML = '';

    const filteredOrders = orders.filter(order => order.items.some(item => item.toLowerCase().includes(query)));

    if (filteredOrders.length > 0) {
        filteredOrders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order';
            orderElement.innerHTML = `
                <h3>Order ID: ${order.orderId}</h3>
                <p>User: ${order.user}</p>
                <p>Items: ${order.items.join(', ')}</p>
                <p>Status: ${order.status}</p>
            `;
            orderHistory.appendChild(orderElement);
        });
    } else {
        orderHistory.innerHTML = '<p>No orders found.</p>';
    }
});

// Sayfa yüklendiğinde verileri yükle
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    loadOrderHistory();
});
