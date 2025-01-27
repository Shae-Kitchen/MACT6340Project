(function () {
  "use strict";

  document
    .querySelector("contact-form-submit")
    .addEventListener("click", contactSubmit);

  function contactSubmit() {
    console.log("Thanks! We will be reaching out soon.");
  }
})();
