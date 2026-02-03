document.addEventListener("DOMContentLoaded", function () {

    /* ===== TYPING EFFECT ===== */
    const text = "Arkan Afarel";
    const target = document.getElementById("typing");
    let i = 0;
    let isDeleting = false;

    function typeLoop() {
        target.innerHTML = isDeleting
            ? text.substring(0, i - 1)
            : text.substring(0, i + 1);

        isDeleting ? i-- : i++;

        if (!isDeleting && i === text.length) {
            setTimeout(() => isDeleting = true, 3000);
        }

        if (isDeleting && i === 0) {
            isDeleting = false;
        }

        setTimeout(typeLoop, isDeleting ? 100 : 150);
    }

    typeLoop();


    /* ===== REVEAL ON SCROLL ===== */
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
    revealOnScroll();


    /* ===== PORTFOLIO MODAL ===== */
    const modal = document.getElementById("portfolioModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".portofolio-content").forEach(card => {
        card.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = card.dataset.img;
            modalTitle.textContent = card.dataset.title;
            modalDesc.textContent = card.dataset.desc;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
