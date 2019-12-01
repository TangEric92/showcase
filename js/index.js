const changeTheme = document.querySelector(".change-theme");

const header = document.querySelector("header");
const theme = document.querySelector(".shipping-bar");
const box = document.querySelector(".box");
const footer = document.querySelector(".footer");
const label = document.querySelectorAll(".label");
const badge = document.querySelector(".product-badge");
const hero = document.querySelector(".hero");
const progress = document.querySelector(".progress-bar");
const body = document.querySelector("body");

// add class change on h1 click
changeTheme.addEventListener("click", () => {
  [].forEach.call(label, function(label) {
    // do whatever
    label.classList.toggle("dark");
  });

  hero.classList.toggle("dark");
  badge.classList.toggle("dark");
  theme.classList.toggle("dark");
  header.classList.toggle("dark");
  box.classList.toggle("dark");
  footer.classList.toggle("dark");
});

const navMobile = document.querySelector(".nav-mobile");
const menuMobile = document.querySelector(".menu-mobile");
navMobile.addEventListener("click", () => {
  header.classList.toggle("open");
});

//
// Progress bar
document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  const pageHeight = body.getBoundingClientRect().height;
  const totalScroll = pageHeight - window.innerHeight;
  const percentage = pixels / totalScroll;
  progress.style.width = `${100 * percentage}%`;
});
