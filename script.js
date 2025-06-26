// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load Theme on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Smooth Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Alert Before Print
window.onbeforeprint = function () {
  alert("Your resume is being prepared for printing or saving as PDF.");
};

// Auto Year Update in Footer (if added)
function updateYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
updateYear();
