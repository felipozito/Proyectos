const navbar = document.querySelector(".navbar");
const navbarItem = document.querySelector(".navbar_item");
const navResponsive = document.querySelector(".ico");
window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
});
navResponsive.addEventListener("click", (e) => {
      navbarItem.classList.toggle("show");
      navbarItem.classList.forEach((item) => {
            if (item == "show") {
                  navResponsive.textContent = "x";
            } else {
                  navResponsive.textContent = "=";
            }
      });
});

window.onscroll = () => {
      navbarItem.classList.remove("show");
      navbarItem.classList.forEach((item) => {
            if (item == "show") {
                  navResponsive.textContent = "x";
            } else {
                  navResponsive.textContent = "=";
            }
      });
};
