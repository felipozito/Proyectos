const navbar = document.querySelector(".navbar");
const navbarItem = document.querySelector(".navbar_item");
const navResponsive = document.querySelector(".ico");

window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
});
navResponsive.addEventListener("click", (e) => {
      navbarItem.classList.toggle("show");
});

window.onscroll = () => {
      navbarItem.classList.remove("show");
};
