const toggle = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".toggle_btn i");
const dropdown = document.querySelector(".dropdown");
const ham = document.querySelector(".fa-bars");
const closeHam = document.querySelector(".fa-x");

toggle.addEventListener("click", toggleDropdown);
function toggleDropdown() {
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  } else {
    dropdown.classList.add("open");
  }
}
