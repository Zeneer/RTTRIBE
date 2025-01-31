// Fade-in effect for the login container
document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.opacity = 0;
    loginContainer.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        loginContainer.style.transition = "all 0.6s ease-in-out";
        loginContainer.style.opacity = 1;
        loginContainer.style.transform = "translateY(0)";
    }, 100);
});

// Button hover effect (light pulse)
const loginButton = document.querySelector(".btn-primary");
loginButton.addEventListener("mouseover", () => {
    loginButton.style.boxShadow = "0 0 10px #F41E23";
});
loginButton.addEventListener("mouseout", () => {
    loginButton.style.boxShadow = "none";
});

// Background color transition on focus
const inputs = document.querySelectorAll(".form-control");
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.transition = "background-color 0.3s ease-in-out";
        input.style.backgroundColor = "#333";
    });
    input.addEventListener("blur", () => {
        input.style.backgroundColor = "#2C2C2C";
    });
});

// Subtle animation for the logo
const logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.1)";
    logo.style.transition = "transform 0.3s ease-in-out";
});
logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1)";
});
