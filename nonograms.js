"use strict";
(function () {
  function load() {
    clicker();
  }

  function clicker() {
    const box = document.querySelectorAll(".box");
    for (const boxes of box) {
      boxes.addEventListener("click", (event) => {
        window.alert("hi");
        boxes.classList.add("filled");
      });
    }
  }

  window.onload = load;
})();
