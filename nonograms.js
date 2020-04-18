"use strict";
(function () {
  function load() {
    /* clicker(); */
    const btn = document.getElementById("btn");
    btn.addEventListener("click", button);

    clicker();
  }

  /* box click event */
  function clicker() {
    const box = document.querySelectorAll(".box");

    for (const boxes of box) {
      boxes.addEventListener("click", (event) => {
        window.alert("You clicked a tile");
        if (boxes.classList.contains("filled")) {
          boxes.classList.remove("filled");
          boxes.classList.add("crosses-out");
        } else if (boxes.classList.contains("crosses-out")) {
          boxes.classList.remove("crosses-out");
        } else {
          boxes.classList.add("filled");
        }
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
