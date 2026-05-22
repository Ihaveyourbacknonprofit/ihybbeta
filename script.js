// WEBSITE LOADED
console.log("I Have Your Back website loaded successfully.");


// APPLY SAVED THEME OR SYSTEM THEME
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}


// GET SAVED THEME OR SYSTEM DEFAULT
function initTheme() {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
    updateButton(savedTheme);
    return;
  }

  // system preference fallback
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    applyTheme("dark");
    updateButton("dark");
  } else {
    applyTheme("light");
    updateButton("light");
  }
}


// UPDATE BUTTON TEXT
function updateButton(theme) {
  const btn = document.querySelector(".theme-toggle");

  if (!btn) return;

  if (theme === "dark") {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}


// TOGGLE THEME
function toggleTheme() {

  const isDark = document.body.classList.toggle("dark");

  const theme = isDark ? "dark" : "light";

  localStorage.setItem("theme", theme);
console.log("I Have Your Back website loaded successfully.");

  updateButton(theme);
}

// CARD FADE-IN ANIMATION

// RUN ON LOAD
window.addEventListener("load", () => {

  initTheme();

  // CARD ANIMATION
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
@@ -77,9 +15,12 @@ window.addEventListener("load", () => {
    card.style.transform = "translateY(25px)";

    setTimeout(() => {

      card.style.transition = "0.5s ease";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }, index * 200);

  });
@@ -88,14 +29,40 @@ window.addEventListener("load", () => {


// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 10) {

    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

  } else {

    header.style.boxShadow = "none";

  }

});


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.96)";

    setTimeout(() => {

      button.style.transform = "";

    }, 120);

  });

});
