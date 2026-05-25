// WEBSITE LOADED
const VERSION = "v1.0.1";

console.log(`I Have Your Back website loaded successfully (${VERSION})`);

// HEADER SHADOW (SAFE)
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});


// REVEAL ON SCROLL (SAFE)
const revealElements = document.querySelectorAll(".reveal, .fade-up");

if ("IntersectionObserver" in window && revealElements.length > 0) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));
}


// CARD STAGGER (SAFE)
const cards = document.querySelectorAll(".card");

if (cards.length > 0) {
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 120}ms`;
  });
}


// BUTTON CLICK EFFECT (CLEAN)
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.96)";

    setTimeout(() => {
      button.style.transform = "";
    }, 120);
  });
});


// ACTIVE NAV LINK (FIXED)
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop - 220;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("nav-active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("nav-active");
    }
  });
});


// HERO FADE-IN (SAFE)
window.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");

  if (!heroContent) return;

  setTimeout(() => {
    heroContent.classList.add("active");
  }, 300);
});

// =========================
// HAMBURGER MENU (ADD-ON)
// =========================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {

  // toggle menu
  hamburger.addEventListener("click", (e) => {
    nav.classList.toggle("active");
    e.stopPropagation();
  });

  // close when clicking nav links
  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = nav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInside && !clickedHamburger) {
      nav.classList.remove("active");
    }
  });
}
