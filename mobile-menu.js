// ======================================================
// MOBILE MENU
// ======================================================

document.addEventListener("DOMContentLoaded", () => {


const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mainNav = document.querySelector(".main-nav");
const overlay = document.querySelector(".menu-overlay");


if(!menuToggle) return;


menuToggle.addEventListener("click", () => {

    mainNav.classList.add("active");
    overlay.classList.add("active");

});


menuClose.addEventListener("click", () => {

    mainNav.classList.remove("active");
    overlay.classList.remove("active");

});


overlay.addEventListener("click", () => {

    mainNav.classList.remove("active");
    overlay.classList.remove("active");

});


});
