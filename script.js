// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ================================
// Navbar Background On Scroll
// ================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,5,5,0.9)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(5,5,5,0.7)";
        navbar.style.boxShadow = "none";
    }
});

// ================================
// Scroll Reveal (Better Version)
// ================================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ================================
// FAQ Smooth Accordion
// ================================
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll(".faq-answer").forEach(a => {
                a.style.maxHeight = null;
            });
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// ================================
// Magnetic Button Effect
// ================================
document.querySelectorAll(".btn-primary").forEach(button => {

    button.addEventListener("mousemove", e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0,0)";
    });

});

// ================================
// Parallax Hero Background
// ================================
const hero = document.querySelector(".animated-bg");

window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    hero.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

// ================================
// Animated Counter
// ================================
function animateCounter(el, target) {
    let count = 0;
    const increment = target / 100;

    const update = () => {
        count += increment;
        if (count < target) {
            el.innerText = Math.floor(count).toLocaleString();
            requestAnimationFrame(update);
        } else {
            el.innerText = target.toLocaleString();
        }
    };

    update();
}

const counterEl = document.createElement("div");
counterEl.className = "live-counter";
counterEl.innerHTML = "$<span id='counter'>0</span>+ Generated";
document.querySelector(".hero-content").appendChild(counterEl);

animateCounter(document.getElementById("counter"), 2341920);

// ================================
// Card Tilt Effect
// ================================
document.querySelectorAll(".feature-card").forEach(card => {

    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });

});

// ================================
// Cursor Glow
// ================================
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
