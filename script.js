const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


// HEADER AO ROLAR
function updateHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// MENU MOBILE
menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


// FECHAR MENU AO CLICAR
document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


// ANIMAÇÃO AO ENTRAR NA TELA
const revealElements = document.querySelectorAll(
    ".reveal, .reveal-scale"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element, index) => {

    element.style.transitionDelay =
        `${Math.min(index * 0.04, 0.3)}s`;

    observer.observe(element);

});


// CURSOR
const cursor = document.querySelector(".cursor");

if (window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;

        cursor.style.top = `${event.clientY}px`;

    });


    const hoverElements = document.querySelectorAll(
        "a, button, .product-card, .gallery-image"
    );


    hoverElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("hover");

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("hover");

        });

    });

}


// PARALLAX SUAVE
window.addEventListener("scroll", () => {

    const heroImage = document.querySelector(".hero-background");

    if (!heroImage) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scroll * 0.15}px) scale(1.02)`;

    }

});


// LINK SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
