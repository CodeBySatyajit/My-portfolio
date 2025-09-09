const icon = document.querySelector(".bars-icon");
const ul = document.querySelector("ul");
const a = document.querySelectorAll("a");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

a.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    ul.classList.remove("showData");
    document.getElementById("bar").className = "fa-solid fa-bars";
  });
});

var typed = new Typed("#element", {
  strings: ["Web Developer", "App Developer", "Software Developer"],
  typeSpeed: 60,
});
