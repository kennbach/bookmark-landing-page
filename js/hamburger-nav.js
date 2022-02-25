"use strict";

// Get the header-nav__icon
const img = document.getElementById("header-nav__icon");
// Get the header-nav
const nav = document.getElementById("header-nav");

// Add event listener to header-nav__icon
img.addEventListener("click", function () {
  // Toggle the header-nav
  nav.classList.toggle("header-nav--inactive");
});
