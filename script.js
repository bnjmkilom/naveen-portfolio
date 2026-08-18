/* =========================================================
   MOBILE MENU
========================================================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuIcon) {

            const icon = menuIcon.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .timeline-item, .training-card, .strength-card, .contact-container"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        const name = contactForm.querySelector(
            'input[name="name"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[name="email"]'
        ).value.trim();

        const subject = contactForm.querySelector(
            'input[name="subject"]'
        ).value.trim();

        const message = contactForm.querySelector(
            'textarea[name="message"]'
        ).value.trim();


        if (!name || !email || !subject || !message) {

            event.preventDefault();

            alert("Please fill in all the fields.");

            return;

        }

    });

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.querySelector(".home-content h2");

if (typingElement) {

    const typingText = "Aspiring Software Developer";

    let typingIndex = 0;

    typingElement.textContent = "";

    function typeText() {

        if (typingIndex < typingText.length) {

            typingElement.textContent += typingText.charAt(
                typingIndex
            );

            typingIndex++;

            setTimeout(typeText, 80);

        }

    }

    typeText();

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${currentYear} Gadam Naveen. All Rights Reserved.`;

}