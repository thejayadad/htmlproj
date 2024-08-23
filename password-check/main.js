const passwordInput = document.getElementById('passwordInput');
const strengthValue = document.getElementById('strengthValue');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = calculateStrength(password);

    if (strength <= 2) {
        strengthValue.textContent = 'Too Weak';
        strengthValue.style.color = 'red';
    } else if (strength === 3) {
        strengthValue.textContent = 'Weak';
        strengthValue.style.color = 'orange';
    } else if (strength === 4) {
        strengthValue.textContent = 'Moderate';
        strengthValue.style.color = 'yellow';
    } else if (strength >= 5) {
        strengthValue.textContent = 'Strong';
        strengthValue.style.color = 'green';
    }
});

function calculateStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    return strength;
}
