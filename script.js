const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//Toggle the nav (creating class of show-nav  in the <body>):
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

//Show the modal:
open.addEventListener("click", () => modal.classList.add("show-modal"));

//Hide the modal:
close.addEventListener("click", () => modal.classList.remove("show-modal"));

//Hide the modal when you click outside the box:
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
