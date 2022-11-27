let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
burger.addEventListener("click", function () {
    nav.classList.toggle("nav-height");
    ul.classList.toggle("v-con");
});