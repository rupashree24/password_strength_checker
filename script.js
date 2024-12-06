const password = document.querySelector('#password');
const overlay = document.querySelector('.overlay');

// Function to calculate password strength
function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength += 1; // Length check
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter check
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter check
    if (/[0-9]/.test(password)) strength += 1; // Number check
    if (/[\W_]/.test(password)) strength += 1; // Special character check

    return strength;
}

password.addEventListener('keyup', (e) => {
    const passwordValue = e.target.value;
    const strength = calculatePasswordStrength(passwordValue);

    // Map strength to blur value (5 levels of strength -> 30 to 0 blur)
    const blur_val = 30 - (strength * 6); // Adjust factor for smoother transition
    overlay.style.filter = `blur(${blur_val}px)`;

    console.log(`Password Strength: ${strength}, Blur Value: ${blur_val}px`);
});
