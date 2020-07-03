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
const navMobile = $(".nav-mobile");
const body = $("body");
let headerHeight;

const preloadImages = () => {
  let imgsToPreload = [
    "../assets/images/hero-image-1k.jpg",
    "../assets/images/hero-image-2k.jpg",
  ];
  imgsToPreload.forEach((image) => {
    let img = new Image();
    img.src = image;
  });
};

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("fa-bars");
  menuHamburger.classList.toggle("fa-times");
  menuUl.classList.toggle("hidden");
  navMobile.classList.toggle("pointer-events-none");
  // header.classList.toggle("overflow-visible");
  headerHeight = header.offsetHeight;
  headerHeight -= headerHeight * 0.4;
  if (window.scrollY > headerHeight) {
    if (menuHamburger.classList.contains("fa-bars")) {
      setTimeout(() => {
        navMobile.classList.toggle("invert");
      }, 1300);
    } else {
      navMobile.classList.toggle("invert");
    }
  }
});

const checkNavPosition = () => {
  let path = window.location.pathname.split("/");
  path = path[path.length - 1];
  if (path === "index.html") {
    scrollNavStyler(0.1);
  } else {
    scrollNavStyler(0.4);
  }
};

const scrollNavStyler = (offsetPercent) => {
  headerHeight = header.offsetHeight;
  headerHeight -= headerHeight * offsetPercent;
  if (window.scrollY > headerHeight) {
    if (menuUl.classList.contains("hidden")) {
      navMobile.classList.add("invert");
    }
    navDesktop.classList.add("invert");
    navDesktopLis.forEach((li) => {
      li.classList.remove("white-underline-hover");
      li.classList.add("gradient-underline-hover");
    });
  } else {
    navMobile.classList.remove("invert");
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
window.onload = () => {
  checkNavPosition();
  preloadImages();
};
