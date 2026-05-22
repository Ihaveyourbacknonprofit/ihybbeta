// WEBSITE LOADED

console.log("I Have Your Back website loaded successfully.");


// SIMPLE FADE-IN EFFECT

window.addEventListener("load", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

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
