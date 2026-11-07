
/* =========================================
   MOHAMED ASMAR - PORTFOLIO JAVASCRIPT
========================================= */

// 1. Typing animation

const typingElement = document.getElementById("typing-text");

const roles = [
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineering Graduate"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeAnimation, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeAnimation, speed);
}

typeAnimation();


// 2. Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// Close mobile menu after selecting a link

const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// 3. Scroll reveal animations

document.body.classList.add("js-enabled");

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// 4. Active navigation link while scrolling

const sections = document.querySelectorAll("main section");

const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navigationLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentId) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);

sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// 5. Console welcome message

console.log(
    "Welcome to Mohamed Asmar's Portfolio!"
);

console.log(
    "Portfolio website loaded successfully."
);
