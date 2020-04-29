const $ = (arg) => {
  return document.querySelector(arg);
};

const $$ = (arg) => {
  return document.querySelectorAll(arg);
};

const menuHamburger = $("#menuHamburger");
const menuUl = $("#menuUl");
const header = $("header");
const navDesktop = $(".nav-desktop");
const navDesktopLis = navDesktop.querySelectorAll("li");
const body = $("body");

menuHamburger.addEventListener("click", () => {
  menuUl.classList.toggle("display-none");
  header.classList.toggle("overflow-visible");
});

const checkNavPosition = () => {
  if (window.location.pathname === "/index.html") {
    scrollNavStyler(0.1);
  } else {
    scrollNavStyler(0.4);
  }
};

const scrollNavStyler = (offsetPercent) => {
  let headerHeight = header.offsetHeight;
  headerHeight -= headerHeight * offsetPercent;
  if (window.scrollY > headerHeight) {
    navDesktop.classList.add("invert");
    navDesktopLis.forEach((li) => {
      li.classList.remove("white-underline-hover");
      li.classList.add("gradient-underline-hover");
    });
  } else {
    navDesktop.classList.remove("invert");
    navDesktopLis.forEach((li) => {
      li.classList.remove("gradient-underline-hover");
      li.classList.add("white-underline-hover");
    });
  }
  if (window.scrollY > headerHeight * 1.15) {
    navDesktop.classList.add("width-100");
  } else {
    navDesktop.classList.remove("width-100");
  }
};

window.addEventListener("scroll", checkNavPosition);
