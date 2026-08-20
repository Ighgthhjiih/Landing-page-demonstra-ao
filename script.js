// =============================
// MENU MOBILE
// =============================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// =============================
// FECHAR MENU AO CLICAR
// =============================

const links = menu.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// =============================
// ANO AUTOMÁTICO
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// ANIMAÇÃO AO APARECER
// =============================

const elements = document.querySelectorAll(
    ".service-card, .testimonial, .gallery-item, .about-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});