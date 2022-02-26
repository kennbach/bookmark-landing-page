"use strict";

// Get the header-logo
const logoBlue = document.getElementById("header-logo--blue");
// Get the header-logo
const logoWhite = document.getElementById("header-logo--white");
// Get the header-nav__icon--hamburger
const openIcon = document.getElementById("header-nav__icon--hamburger");
// Get the header-nav__icon--close
const closeIcon = document.getElementById("header-nav__icon--close");
// Get the header-nav
const nav = document.getElementById("header-nav");

// Add event listener to openIcon
openIcon.addEventListener("click", function () {
  // Toggle the header-nav
  nav.classList.toggle("display--none");
  // Toggle the header logos
  logoBlue.classList.toggle("display--none");
  logoWhite.classList.toggle("display--none");
  // Toggle the header nav icons
  openIcon.classList.toggle("display--none");
  closeIcon.classList.toggle("display--none");
});

// Add event listener to closeIcon
closeIcon.addEventListener("click", function () {
  // Toggle the header-nav
  nav.classList.toggle("display--none");
  // Toggle the header logos
  logoBlue.classList.toggle("display--none");
  logoWhite.classList.toggle("display--none");
  // Toggle the header nav icons
  openIcon.classList.toggle("display--none");
  closeIcon.classList.toggle("display--none");
});
