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

  updateButton(theme);
}


// RUN ON LOAD
window.addEventListener("load", () => {

  initTheme();

  // CARD ANIMATION
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";

    setTimeout(() => {
      card.style.transition = "0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);

  });

});


// HEADER SHADOW ON SCROLL
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }

});
