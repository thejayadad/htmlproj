const passwordInput = document.getElementById('password-input');
const toggleButton = document.getElementById('toggle-btn');

toggleButton.addEventListener('click', () => {
    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show Password';
    }
});