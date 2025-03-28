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

  let userAddress = null;
  let connect = document.querySelector("#wallet-connect");

  connectWallet();

  connect.addEventListener("click", async () => {
    connectWallet();
  });

  async function connectWallet() {
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((data) => {
        let userAddress = data[0];
        let walletString =
          userAddress.substring(0, 5) + "..." + userAddress.substring(38, 42);
        connect.innerHTML = walletString;
        return userAddress;
      })
      .catch((err) => {
        if (err.code === 4001) {
          console.log("Please connect a wallet.");
        } else {
          console.error(err);
        }
      });
  }
})();
