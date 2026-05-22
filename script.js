
// =========================
// GLOBAL FUNCTIONS
// =========================

// THEME TOGGLE
window.toggleTheme = function () {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

};


// HAMBURGER MENU (FIXED + SAFE)
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
// INIT ON LOAD
// =========================
window.addEventListener("load", () => {

  // HIDE LOADER SAFELY
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "none";
  }

  // RESTORE THEME
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
  }

  // SCROLL REVEAL INIT
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
// HEADER SHADOW
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
