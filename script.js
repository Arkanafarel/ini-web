document.addEventListener("DOMContentLoaded", function () {
    // Fungsi Typing Effect tetap sama
    const text = "Arkan Afarel";
    const target = document.getElementById("typing");
    let i = 0;
    let isDeleting = false;

    function typeLoop() {
        target.innerHTML = isDeleting ? text.substring(0, i - 1) : text.substring(0, i + 1);
        isDeleting ? i-- : i++;
        if (!isDeleting && i === text.length) setTimeout(() => isDeleting = true, 3000);
        if (isDeleting && i === 0) isDeleting = false;
        setTimeout(typeLoop, isDeleting ? 100 : 150);
    }
    typeLoop();

    // Fungsi Reveal yang diperbaiki agar langsung mengecek posisi saat dimuat
    const reveals = document.querySelectorAll(".reveal");
    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Panggil sekali saat start agar konten atas langsung muncul
});

window.addEventListener("load", revealOnScroll);