(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-cover").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector(".title").style.display = "none";
        card.querySelector(".description").style.display = "block";
      });

      card.addEventListener("mouseleave", () => {
        card.querySelector(".title").style.display = "block";
        card.querySelector(".description").style.display = "none";
      });
    });
  });
})();
