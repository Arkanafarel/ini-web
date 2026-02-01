document.addEventListener("DOMContentLoaded", function () {
    const text = "Arkan Afarel";
    const typingSpeed =150;
    const deletingSpeed = 100;
    const delayAfterTyping = 3000;

    let i = 0;
    let isDeleting = false;
    const target = document.getElementById("typing");

    function typeLoop() {
        if (!isDeleting) {
            // NGETIK
            target.innerHTML = text.substring(0, i + 1);
            i++;
            if (i === text.length) {
                setTimeout(() => isDeleting = true, delayAfterTyping);
            }
        } else {
            // MENGHAPUS
            target.innerHTML = text.substring(0, i - 1);
            i--;
            if (i === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeLoop();
});



const btn = document.getElementById("toggle-dark");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

