// Wait for the DOM to fully load before attaching event listeners
// avoids issues caused by the script running too early when elements are not yet available in the DOM.

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Add an event listener to the submit button
    //querySelector finds the first instance of #contact-form-submit in the doc
    let submitButton = document.querySelector("#contact-form-submit");
    submitButton.addEventListener("click", (event) => {
      // Prevent the default form submission to handle it with JS
      event.preventDefault();
      event.stopPropagation();
      let formValid = true;
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#mail").value;
      let message = document.querySelector("#msg").value;

      if (!name || !email || !message) {
        console.log("All fields are required.");
        formValid = false;
        return;
      }

      if (formValid === true) {
        deliverMessage(name, email, message); // Pass values as arguments
        console.log("Thanks! We will be reaching out soon.");
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      }
    });
  });

  function deliverMessage(name, email, message) {
    let obj = {
      sub: "message received from NFT Mint",
      txt: `${name} ${email} ${message}`,
    };

    fetch("/contactSubmit", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((response) => {
        document.querySelector("#contact-button-response").innerHTML =
          response.result;
      })
      .then(() => {
        setTimeout(() => {
          document.querySelector("#contact-button-response").innerHTML = "";
        }, 5000); // Note: delay should be an integer, not a string
      });
  }
})();
