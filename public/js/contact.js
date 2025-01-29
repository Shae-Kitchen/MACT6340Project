// Wait for the DOM to fully load before attaching event listeners
// avoids issues caused by the script running too early when elements are not yet available in the DOM.

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Add an event listener to the submit button
    //querySelector finds the first instance of #contact-form-submit in the doc
    const submitButton = document.querySelector("#contact-form-submit");
    submitButton.addEventListener("click", (event) => {
      // Prevent the default form submission to handle it with JS
      event.preventDefault();
      event.stopPropagation();

      // Grab values from the form
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#mail").value;
      let message = document.querySelector("#msg").value;

      //return values to ensure functionality
      console.log("Thanks! We will be reaching out soon.");
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
  });
})();

//BELOW CODE KEPT FOR REFERRAL/REFRESH POTENTIAL. I KNOW THAT THIS CODE WORKS,
// BUT I WANT TO MAKE THE STYLE MORE EFFICIENT. COULD I MAKE A BRANCH IN GITHUB? YES.
// BUT FOR SOME REASON THIS MADE MORE SENSE IN MY BRAIN. BLAME THE ADHD.
// // Wait for the DOM to fully load before attaching event listeners
// // avoids issues caused by the script running too early when elements are not yet available in the DOM.
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded and parsed");

//   // Add an event listener to the submit button
//   //querySelector finds the first instance of #contact-form-submit in the doc
//   const submitButton = document.querySelector("#contact-form-submit");
//   if (submitButton) {
//     submitButton.addEventListener("click", function (event) {
//       // Prevent the default form submission to handle it with JS
//       event.preventDefault();
//       event.stopPropagation();

//       // Grab values from the form
//       const name = document.querySelector("#name").value;
//       const email = document.querySelector("#mail").value;
//       const message = document.querySelector("#msg").value;

//       // // Simple validation (optional)
//       // if (!name || !email || !message) {
//       //   console.log("All fields are required.");
//       //   return;
//       // }

//       console.log("Thanks! We will be reaching out soon.");
//       console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//     });
//   } else {
//     console.error("Submit button not found!");
//   }
// });
