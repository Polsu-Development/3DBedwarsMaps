const hamburger = document.querySelector(".hamburger");
const year = document.querySelector("#current-year");
const navMenu = document.querySelectorAll(".nav-links");
const menu = document.querySelector("nav");

var isOpen = false;

// trigger the slide in
hamburger.addEventListener("click", () => {
    if (!isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
    isOpen = !isOpen;
    hamburger.classList.toggle("active");
    navMenu.forEach((item) => {
        item.classList.toggle("active");
    });
});

// checks to see if a link has been clicked to hide the nav
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        document.body.style.overflow = "unset";
        isOpen = false;
        hamburger.classList.remove("active");
        navMenu.forEach((item) => {
            item.classList.remove("active");
        });
    })
);

// runs all of the modules once the page has loaded
window.addEventListener("load", () => {
    if (document.documentElement.scrollTop > 0) {
        menu.classList.add("transparency");
    }
    else {
        menu.classList.remove("transparency");
    }
    year.innerHTML = new Date().getFullYear();
});

// checks to see if the user has scrolled to add transparency to the nav
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        menu.classList.add("transparency");
    }
    else {
        menu.classList.remove("transparency");
    }
});