
// =========================
// THEME TOGGLE (GLOBAL)
// =========================
window.toggleTheme = function () {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Move switch visually (optional safety sync)
  const thumb = document.querySelector(".switch-thumb");
  const track = document.querySelector(".switch-track");

  if (thumb && track) {
    if (isDark) {
      thumb.style.left = "33px";
      track.style.background = "#c40000";
    } else {
      thumb.style.left = "3px";
      track.style.background = "#ddd";
    }
  }

};


// =========================
// LOAD SAVED THEME
// =========================
function loadTheme() {

  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
  }

  // sync switch position on load
  const thumb = document.querySelector(".switch-thumb");
  const track = document.querySelector(".switch-track");

  if (thumb && track) {
    if (document.body.classList.contains("dark")) {
      thumb.style.left = "33px";
      track.style.background = "#c40000";
    } else {
      thumb.style.left = "3px";
      track.style.background = "#ddd";
    }
  }

}


// =========================
// LOADER
// =========================
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }

  loadTheme();
  revealOnScroll();

});


// =========================
// SCROLL REVEAL
// =========================
function revealOnScroll() {

  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {

    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);


// =========================
// HAMBURGER MENU
// =========================
window.toggleMenu = function () {

  const nav = document.getElementById("navLinks");

  if (!nav) return;

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

};


// =========================
// BUTTON CLICK FEEDBACK
// =========================
window.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".btn, .donate-btn, .contact-form button");

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      btn.style.transform = "scale(0.96)";

      setTimeout(() => {
        btn.style.transform = "";
      }, 120);

    });

  });

});


// =========================
// HEADER SHADOW ON SCROLL
// =========================
window.addEventListener("scroll", () => {

  const header = document.querySelector(".navbar");

  if (!header) return;

  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }

});
