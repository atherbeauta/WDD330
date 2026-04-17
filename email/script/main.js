// Final Project Script - WDD 330
(function() {
    const initApp = () => {
        const form = document.querySelector('#newsletter-form');
        const feedback = document.querySelector('#feedback-message');
        const quoteContainer = document.querySelector('#quote-container');

        // 1. Fetching a Random Quote (API #1)
        const getQuote = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random');
                const data = await response.json(); // Handling JSON data
                quoteContainer.innerHTML = `<p>"${data.content}" — <em>${data.author}</em></p>`;
            } catch (err) {
                console.error("API 1 Error:", err);
            }
        };

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = document.querySelector('#newsletter-email').value;

                // 2. Simulating User Verification (API #2 - JSONPlaceholder)
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({ title: 'New Subscriber', email: email }),
                        headers: { 'Content-type': 'application/json; charset=UTF-8' }
                    });
                    const result = await response.json(); // Handling JSON response

                    if (response.ok) {
                        // 3. Using LocalStorage (3 properties as required)
                        localStorage.setItem('user_email', email);
                        localStorage.setItem('signup_status', 'active');
                        localStorage.setItem('last_visit', new Date().toISOString());

                        feedback.textContent = "Success! Verified via API.";
                        feedback.style.color = "green";

                        // Dans main.js, à l'intérieur du "if (response.ok)"
localStorage.setItem('user_email', email);
localStorage.setItem('signup_status', 'Mastery_Confirmed');
localStorage.setItem('last_visit', new Date().toLocaleString());

// REDIRECTION (Ajoute cette ligne) :
setTimeout(() => {
    window.location.href = 'thanks.html';
}, 2000); // Attend 2 secondes pour que l'utilisateur voit le message de succès
                    }
                } catch (err) {
                    feedback.textContent = "Error connecting to validation server.";
                }
            });
        }
        getQuote();
    };
    document.addEventListener('DOMContentLoaded', initApp);
})();