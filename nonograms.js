"use strict";
(function () {
  function load() {
    clicker();
    const btn = document.getElementById("btn");
    btn.addEventListener("click", button);
  }

  /* box click event */
  function clicker() {
    const box = document.querySelectorAll(".box");

    for (const boxes of box) {
      if (boxes.className == "filled") {
        boxes.addEventListener("click", (event) => {
          boxes.classList.add("crosses-out");
        });
      }
      boxes.addEventListener("click", (event) => {
        window.alert("You clicked a tile");
        boxes.classList.add("filled");
      });
    }
  }
  function button() {
    const rem = document.querySelectorAll(".box");
    const con = confirm("Do you want reset ALL??");
    if (con == true) {
      for (let index = 0; index < rem.length; index++) {
        rem[index].classList.remove("filled", "crosses-out");
      }
    }
  }
  window.onload = load;
})();
