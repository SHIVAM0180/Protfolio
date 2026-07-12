// ===================================
// TYPING ANIMATION
// ===================================

const texts = [
    "Aspiring Data Scientist",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Data Analyst"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;
            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

if (typingElement) {
    typeEffect();
}

// ===================================
// NAVBAR BACKGROUND EFFECT
// ===================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.95)";

    } else {

        navbar.style.background =
            "rgba(5,8,22,0.75)";
    }
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(
    ".about-card, .education-card, .timeline-card, .skill-card, .project-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

    revealObserver.observe(element);
});

// ===================================
// COUNTER ANIMATION
// ===================================

const counters = document.querySelectorAll(".stat h3");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(counter.innerText);

                let count = 0;

                const speed =
                    Math.max(1, Math.floor(target / 20));

                const updateCounter = () => {

                    count += speed;

                    if (count >= target) {

                        counter.innerText =
                            target + "+";

                    } else {

                        counter.innerText =
                            count + "+";

                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            }
        });
    },
    {
        threshold: 0.5
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================

document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

// ===================================
// HERO IMAGE FLOAT EFFECT
// ===================================

const heroImage =
    document.querySelector(".hero-image img");

if (heroImage) {

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
            direction === 1
                ? "translateY(-10px)"
                : "translateY(10px)";

        direction *= -1;

    }, 2000);
}

// ===================================
// CURRENT YEAR AUTO UPDATE
// ===================================

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Shivam Vakani | Data Science Portfolio`;
}