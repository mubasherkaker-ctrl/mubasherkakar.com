// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


// Automatic copyright year
document.getElementById("year").textContent =
  "© " + new Date().getFullYear() +
  " Mubasher Websites Agency. All Rights Reserved.";


// Smooth reveal animation
const revealItems = document.querySelectorAll(
  ".service-card, .price-card, .portfolio-item, .owner-photo, .owner-content, .about-content, .about-art, .contact-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => {
  item.classList.add("reveal");
  observer.observe(item);
});


// Package selection
document.querySelectorAll(".price-btn").forEach(button => {

  button.addEventListener("click", () => {

    const packageName =
      button.closest(".price-card")
      .querySelector("h3").textContent;

    console.log("Selected package:", packageName);

  });

});
