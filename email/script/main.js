// Newsletter functionality with validation and feedback
(function() {
    const initNewsletter = () => {
        const form = document.querySelector('#newsletter-form');
        const feedback = document.createElement('p'); // Create feedback message element
        form.appendChild(feedback);

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const emailInput = document.querySelector('#newsletter-email');
                const emailValue = emailInput.value.trim();

                // Simple Regex for email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailPattern.test(emailValue)) {
                    // Success: Save to LocalStorage
                    localStorage.setItem('subscribedEmail', emailValue);
                    
                    // Visual Feedback
                    feedback.textContent = "Thank you! You have been subscribed.";
                    feedback.style.color = "green";
                    emailInput.value = ""; // Clear input
                    
                    console.log("Email saved successfully:", emailValue);
                } else {
                    // Error Feedback
                    feedback.textContent = "Please enter a valid email address.";
                    feedback.style.color = "red";
                }
            });
        }
    };

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', initNewsletter);
})();