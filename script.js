// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const formTitle = document.getElementById('formTitle');
    const toggleFormLink = document.getElementById('toggleForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            valid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        }

        if (valid) {
            // Handle form submission, e.g., send data to a server
            alert('Form submitted successfully!');
        }
    });

    toggleFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (formTitle.textContent === 'Sign In') {
            formTitle.textContent = 'Sign Up';
            toggleFormLink.textContent = 'Already have an account? Sign In';
        } else {
            formTitle.textContent = 'Sign In';
            toggleFormLink.textContent = 'Don\'t have an account? Sign Up';
        }
    });
});
