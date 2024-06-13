// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Product Search and Filtering
    const searchBar = document.getElementById('search-bar');
    const voiceSearchButton = document.getElementById('voice-search');

    if (searchBar) {
        searchBar.addEventListener('input', function(event) {
            const query = event.target.value;
            updateSearchResults(query);
        });
    }

    if (voiceSearchButton) {
        voiceSearchButton.addEventListener('click', function() {
            startVoiceSearch();
        });
    }

    // User Registration and Authentication
    const registrationForm = document.getElementById('registration-form');
    const socialLoginButton = document.getElementById('social-login');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            registerUser(email, password);
        });
    }

    if (socialLoginButton) {
        socialLoginButton.addEventListener('click', function() {
            socialLogin();
        });
    }

    // Shopping Cart Management
    updateCartItems();

    // Payment Processing
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const cardNumber = event.target['card-number'].value;
            const expiryDate = event.target['expiry-date'].value;
            const cvv = event.target.cvv.value;
            processPayment(cardNumber, expiryDate, cvv);
        });
    }

    // Order Tracking and History
    loadOrderHistory();
});

function updateSearchResults(query) {
    // Simulate an API call to fetch search results
    console.log('Searching for:', query);

    // Example search results with car parts
    const searchResults = [
        { name: 'Brake Pads', image: 'brake_pads.jpg', price: '$25' },
        { name: 'Oil Filter', image: 'oil_filter.jpg', price: '$10' },
        { name: 'Air Filter', image: 'air_filter.jpg', price: '$15' }
    ];

    // Display search results
    const searchResultsDiv = document.getElementById('search-results');
    if (searchResultsDiv) {
        searchResultsDiv.innerHTML = searchResults.map(product => `
            <div class="search-result">
                <img src="${product.image}" alt="${product.name}" style="width:100%">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `).join('');
    }
}

function startVoiceSearch() {
    // Implement voice search functionality
    console.log('Voice search started');
}

function applyFilter(filter) {
    // Simulate applying a filter
    console.log('Applying filter:', filter);
}

function registerUser(email, password) {
    // Simulate user registration
    console.log('Registering user:', email);
}

function socialLogin() {
    // Simulate social media login
    console.log('Social media login');
}

function updateCartItems() {
    // Simulate updating cart items
    const cartItems = [
        { name: 'Brake Pads', quantity: 1, price: '$25' },
        { name: 'Oil Filter', quantity: 2, price: '$10' }
    ];

    const cartItemsDiv = document.getElementById('cart-items');
    if (cartItemsDiv) {
        cartItemsDiv.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ${item.price}</p>
            </div>
        `).join('');
    }
}

function processPayment(cardNumber, expiryDate, cvv) {
    // Simulate payment processing
    console.log('Processing payment with card number:', cardNumber);
}

function loadOrderHistory() {
    // Simulate loading order history
    const orderHistory = [
        { orderId: '1234', status: 'Shipped', items: ['Brake Pads', 'Oil Filter'] },
        { orderId: '5678', status: 'Delivered', items: ['Air Filter'] }
    ];

    const orderHistoryDiv = document.getElementById('order-history');
    if (orderHistoryDiv) {
        orderHistoryDiv.innerHTML = orderHistory.map(order => `
            <div class="order-item">
                <h3>Order ID: ${order.orderId}</h3>
                <p>Status: ${order.status}</p>
                <p>Items: ${order.items.join(', ')}</p>
            </div>
        `).join('');
    }
}
