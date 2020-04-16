"use strict";
(function () {
  function load() {
    /* clicker(); */
    const btn = document.getElementById("btn");
    btn.addEventListener("click", button);

    const box = document.querySelectorAll(".box");
    clicker(box);
    /* const remove = document.querySelectorAll(".filled");
    ximg(remove); */
  }

  /* box click event */
  function clicker(x) {
    for (const boxes of x) {
      
      boxes.addEventListener("click", (event) => {
        window.alert("You clicked a tile");
        boxes.classList.add("filled");
      });
    }
  }
  function ximg(y) {
    for (const boxrem of y) {
      boxrem.addEventListener("click", (event) => {
        boxrem.classList.remove("filled");
        boxrem.classList.add("crosses-out");
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
