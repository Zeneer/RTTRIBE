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

document.addEventListener("DOMContentLoaded", function () {
    const giVideos = document.getElementById("gi-videos");
    const nogiVideos = document.getElementById("nogi-videos");

    // Simulación de carga dinámica desde backend
    const videos = [
        { title: "GI Video 1", src: "video1.mp4" },
        { title: "GI Video 2", src: "video2.mp4" },
        { title: "NO GI Video 1", src: "video3.mp4" },
        { title: "NO GI Video 2", src: "video4.mp4" }
    ];

    function loadVideos(container, filter) {
        container.innerHTML = "";
        videos.filter(v => v.title.includes(filter)).forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.classList.add("video-card");
            videoCard.innerHTML = `
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                </video>
                <p>${video.title}</p>
            `;
            container.appendChild(videoCard);
        });
    }

    loadVideos(giVideos, "GI");
    loadVideos(nogiVideos, "NO GI");
});

// Función para mover el carrusel
function scrollVideos(containerId, distance) {
    document.getElementById(containerId).scrollBy({ left: distance, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profileIcon");
    const profileDropdown = document.getElementById("profileDropdown");

    // Mostrar/Ocultar el menú de perfil al hacer clic
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague y cierre instantáneamente
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    });

    // Ocultar el menú si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = "none";
        }
    });
});
