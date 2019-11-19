console.log("it works");

const tag = document.querySelector(".change-theme");
const theme = document.querySelector(".promotion");
const header = document.querySelector("header");
// add class change on h1 click
tag.addEventListener("click", () => {
  theme.classList.toggle("dark");
  header.classList.toggle("dark");
});
