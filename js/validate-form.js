"use strict";

// Get the form
const form = document.forms["subscribe-form"];

// Add event listener to the form
form.addEventListener("submit", function (event) {
  // clean up input
  const email = this.email.value.trim().toLowerCase();
  // create a test regex pattern
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  // test email against regex pattern
  if (email.match(pattern)) {
    // TEST PASSED

    // Remove error styles from container
    document
      .getElementById("email-input__container")
      .classList.remove("email-input__container--error");

    // Hide error icon
    document
      .getElementById("error-icon__email")
      .classList.remove("error-icon__email");

    // Hide error message
    document
      .getElementById("error-message__email")
      .classList.remove("error-message__email");
  } else {
    // TEST FAILED

    // prevent the form from submitting
    event.preventDefault();

    // add error styles to input container
    document
      .getElementById("email-input__container")
      .classList.add("email-input__container--error");

    // display error icon
    document
      .getElementById("error-icon__email")
      .classList.add("error-icon__email");

    // display error message
    document
      .getElementById("error-message__email")
      .classList.add("error-message__email");
  }
});
