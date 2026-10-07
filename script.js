const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");


// HEADER AO ROLAR

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// MENU MOBILE

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// FECHAR MENU AO CLICAR

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// ANIMAÇÃO SIMPLES

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {

    observer.observe(element);

});
