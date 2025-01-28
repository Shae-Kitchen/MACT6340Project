// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Add an event listener to the submit button
  const submitButton = document.querySelector("#contact-form-submit");
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      // Prevent the default form submission to handle it with JS
      event.preventDefault();

      // Grab values from the form
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#mail").value;
      const message = document.querySelector("#msg").value;

      // // Simple validation (optional)
      // if (!name || !email || !message) {
      //   console.log("All fields are required.");
      //   return;
      // }

      console.log("Thanks! We will be reaching out soon.");
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
  } else {
    console.error("Submit button not found!");
  }
});
