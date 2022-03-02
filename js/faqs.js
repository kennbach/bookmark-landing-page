"use strict";

// 1. Get all the FAQ  elements
const faqs = document.getElementsByClassName("faq-question");

// 2. Create an array of the elements
const faqsArray = Array.from(faqs);

// 3. Add "click" event listener to each FAQ <li>
faqsArray.forEach((faq) => {
  faq.addEventListener("click", function () {
    // 4. Add "click" callback to toggle the active class
    this.classList.toggle("faq-active");
    console.log("toggle");
    //    And to toggle show-answer on the faq-answer element
    this.nextElementSibling.classList.toggle("faq-show-answer");
  });
});
