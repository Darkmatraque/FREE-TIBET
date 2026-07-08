// Thème clair/sombre
const toggleTheme = () => {
  document.body.classList.toggle("light");
};

document.getElementById("themeToggle")?.addEventListener("click", () => {
  toggleTheme();
});

// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Simple log
console.log("Free Tibet – site chargé.");
