// =========================
// WEBSITE LOADED
// =========================

const VERSION = "v1.1.0";

console.log(`I Have Your Back website loaded successfully (${VERSION})`);


// =========================
// HEADER SHADOW
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }

});


// =========================
// REVEAL ON SCROLL
// =========================

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

} else {

  // fallback
  revealElements.forEach(el => {
    el.classList.add("active");
  });

}


// =========================
// CARD STAGGER EFFECT
// =========================

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 120}ms`;
  });

}


// =========================
// BUTTON CLICK EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.96)";

    setTimeout(() => {
      button.style.transform = "";
    }, 120);

  });

});


// =========================
// ACTIVE NAV LINK
// =========================

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


// =========================
// HERO FADE IN
// =========================

window.addEventListener("DOMContentLoaded", () => {

  const heroContent = document.querySelector(".hero-content");

  if (!heroContent) return;

  setTimeout(() => {
    heroContent.classList.add("active");
  }, 250);

});


// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {

  // TOGGLE MENU
  hamburger.addEventListener("click", (e) => {

    nav.classList.toggle("active");
    hamburger.classList.toggle("active");

    e.stopPropagation();

  });

  // CLOSE MENU WHEN LINK CLICKED
  document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");
      hamburger.classList.remove("active");

    });

  });

  // CLOSE WHEN CLICKING OUTSIDE
  document.addEventListener("click", (e) => {

    const clickedInsideNav = nav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideNav && !clickedHamburger) {

      nav.classList.remove("active");
      hamburger.classList.remove("active");

    }

  });

}


// =========================
// DARK MODE TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

  // LOAD SAVED THEME
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";

  }

  // TOGGLE THEME
  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

  });

}


// =========================
// SMOOTH SCROLL FIX
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {

      const target = document.querySelector(targetId);

      if (target) {

        e.preventDefault();

        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth"
        });

      }

    }

  });

});


// =========================
// CURRENT YEAR AUTO UPDATE
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {

  const currentYear = new Date().getFullYear();

  footerText.innerHTML =
    `© ${currentYear} I Have Your Back A Nonprofit Corporation — All Rights Reserved`;

}

const donateBtn = document.getElementById("donateBtn");
const donateWrapper = document.querySelector(".donate-wrapper");

donateBtn.addEventListener("click", () => {
  donateWrapper.classList.toggle("active");
});

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!donateWrapper.contains(e.target)) {
    donateWrapper.classList.remove("active");
  }
});
