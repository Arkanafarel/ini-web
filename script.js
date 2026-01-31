const btn = document.getElementById("toggle-dark");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
