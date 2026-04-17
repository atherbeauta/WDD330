// Thanks Page Logic - WDD 330 Final Project
// Student: Kazadi Athanase Muamba
// Purpose: Demonstrate data persistence and DOM manipulation between pages

(function() {
    "use strict";

    /**
     * Initializes the thanks page by retrieving data from LocalStorage
     * and updating the UI dynamically.
     */
    const initThanksPage = () => {
        const statsBox = document.querySelector('#stats-box');
        const welcomeMessage = document.querySelector('#welcome-message');

        // 1. Retrieve stored properties (Requirement: 3-5 properties)
        const email = localStorage.getItem('user_email');
        const status = localStorage.getItem('signup_status');
        const lastVisit = localStorage.getItem('last_visit');

        // 2. Check if data exists to prevent errors
        if (email && statsBox && welcomeMessage) {
            // Personalize the title using the first part of the email
            const userName = email.split('@')[0];
            welcomeMessage.textContent = `Welcome aboard, ${userName}!`;

            // 3. Dynamic Markup Generation (Requirement: Dynamic HTML)
            statsBox.innerHTML = `
                <div class="summary-card">
                    <p><strong>Account Status:</strong> <span class="highlight">${status}</span></p>
                    <p><strong>Registration Date:</strong> ${lastVisit}</p>
                    <p><strong>Confirmed Email:</strong> ${email}</p>
                    <hr>
                    <p class="note">This information was retrieved from your browser's LocalStorage to confirm your session.</p>
                </div>
            `;
            
            // Log for debugging during the video demo
            console.log("Data successfully retrieved from LocalStorage.");
        } else {
            // Fallback: If no data is found, redirect user to the home page
            console.warn("No user data found. Redirecting...");
            window.location.href = 'index.html';
        }
    };

    // Event: Wait for the DOM to be fully loaded before executing logic
    document.addEventListener('DOMContentLoaded', initThanksPage);

})();