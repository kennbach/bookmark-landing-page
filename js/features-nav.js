"use strict";

// Get the features-nav links
const featureNavLinks = document.querySelectorAll(".features-nav a");

featureNavLinks.forEach((navLink) => {
  // add click event listener to all links
  navLink.addEventListener("click", function () {
    // onclick, remove active state from all links
    featureNavLinks.forEach((link) => {
      link.classList.remove("features-nav__item-link--active");
    });
    // onclick, add active state to clicked link
    this.classList.add("features-nav__item-link--active");

    // display/hide feature-graphic
    const activeID = this.getAttribute("id");
    let activeClass = "";

    switch (activeID) {
      case "feature-nav__bookmarking":
        activeClass = "feature-bookmarking";
        break;
      case "feature-nav__searching":
        activeClass = "feature-searching";
        break;
      case "feature-nav__sharing":
        activeClass = "feature-sharing";
        break;
      default:
        break;
    }

    // Get the feature-graphic imgs
    const featureGraphics = document.querySelectorAll(".feature-graphic img");
    // show/hide feature images
    featureGraphics.forEach((img) => {
      if (img.classList.contains(activeClass)) {
        img.classList.remove("display--none");
      } else {
        img.classList.add("display--none");
      }
    });

    // Get the feature headline
    const featureHeadlines = document.querySelectorAll(".feature-content h3");
    // show/hide feature headlines
    featureHeadlines.forEach((headline) => {
      if (headline.classList.contains(activeClass)) {
        headline.classList.remove("display--none");
      } else {
        headline.classList.add("display--none");
      }
    });

    // Get the feature text
    const featureText = document.querySelectorAll(".feature-content p");
    // show/hide feature content
    featureText.forEach((text) => {
      if (text.classList.contains(activeClass)) {
        text.classList.remove("display--none");
      } else {
        text.classList.add("display--none");
      }
    });
  });
});
