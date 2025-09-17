document.addEventListener("DOMContentLoaded", function() {
    const animatedTitle = document.querySelector(".animated-title");
    const animatedBio = document.querySelector(".animated-bio");

    // Animação de entrada para o título e a bio
    setTimeout(() => {
        animatedTitle.style.opacity = "1";
        animatedTitle.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        animatedBio.style.opacity = "1";
        animatedBio.style.transform = "translateY(0)";
    }, 1000);
});

