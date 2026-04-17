// Thanks Page Logic - WDD 330
// Handles data retrieval from LocalStorage and UI population

(function() {
    "use strict";

    const populateDetails = () => {
        const statsBox = document.querySelector('#stats-box');
        const welcomeMessage = document.querySelector('#welcome-message');

        // 1. Retrieve the 3 required properties (Mastery Evidence)
        const email = localStorage.getItem('user_email');
        const status = localStorage.getItem('signup_status');
        const lastVisit = localStorage.getItem('last_visit');

        if (email && statsBox) {
            // Personalize greeting
            const user = email.split('@')[0];
            welcomeMessage.textContent = `Thank You, ${user}!`;

            // 2. Inject dynamic HTML with LocalStorage data
            statsBox.innerHTML = `
                <p><strong>Status:</strong> <span class="highlight">${status}</span></p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Last Visit:</strong> ${lastVisit}</p>
                <p style="font-size: 0.7rem; color: #999; margin-top: 10px;">
                    * This data was persisted via LocalStorage.
                </p>
            `;
        } else {
            // Safety redirection if no data exists
            window.location.href = 'index.html';
        }
    };

    document.addEventListener('DOMContentLoaded', populateDetails);
})();