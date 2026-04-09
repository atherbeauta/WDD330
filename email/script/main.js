// Function to handle newsletter subscription
document.querySelector('#newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#newsletter-email').value;
    // Store in localStorage for persistence
    localStorage.setItem('newsletter_subscriber', email);
    alert('Thank you for subscribing to Sleep Outside!');
});