// Add to cart function for Product Page
function addToCart() {
    alert('Item added to cart!');
}

// Handle form submission on Contact Page
function submitForm(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset(); // Reset the form
}
