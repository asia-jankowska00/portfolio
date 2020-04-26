// const mobileMenu = document.getElementById('mobile-menu');
// const hamburger = document.getElementById('hamburger');
// const cross = document.getElementById('cross');
// const mobileNavMenus = document.getElementById('mobile-nav-menus');
// const mobileNavMenusUl = document.getElementById('mobile-nav-menus-ul');

// hamburger.addEventListener('click', function () {
//     mobileMenu.classList.toggle('mobile-menu-hidden');
//     this.classList.toggle('hidden');
//     cross.classList.toggle('hidden');
// })

// cross.addEventListener('click', function () {
//     mobileMenu.classList.toggle('mobile-menu-hidden');
//     this.classList.toggle('hidden');
//     hamburger.classList.toggle('hidden');
// })

// mobileNavMenus.addEventListener('click', function () {
//     mobileMenu.classList.toggle('mobile-menu-expanded')
//     mobileNavMenus.classList.toggle('menus-li-expanded')
// })

const menuHamburger = document.getElementById("menuHamburger");
const menuUl = document.getElementById("menuUl");

menuHamburger.addEventListener("click", () => {
  menuUl.classList.toggle("display-none");
});
