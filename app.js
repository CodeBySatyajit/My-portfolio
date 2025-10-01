const icon = document.querySelector(".bars-icon");
const ul = document.querySelector("ul");
const a = document.querySelectorAll("a");

// add function for click on bar icon

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  // for changing the icon of bar when open and close the ul

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// when the user click on any link of ul then ul will be closed

a.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    ul.classList.remove("showData");
    document.getElementById("bar").className = "fa-solid fa-bars";
  });
});

// Typing information animation

var typed = new Typed("#element", {
  strings: ["Web Developer", "App Developer", "Software Developer"],
  typeSpeed: 60,
});
