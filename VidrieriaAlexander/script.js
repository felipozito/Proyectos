//------------------ Navbar------------------------------//
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
//-----------------------Animaciones Scroll--------------------
const services = document.querySelectorAll(".card");
const gallery = document.querySelectorAll(".product");
console.log(gallery);
window.addEventListener("scroll", () => {
      //const heigth = window.innerHeight / 1.3
      console.log(services[0].getBoundingClientRect().top);
      services.forEach((item) => {
            if (480 > item.getBoundingClientRect().top) {
                  item.classList.add("apperd_card");
            } else if (660 < item.getBoundingClientRect().top) {
                  item.classList.remove("apperd_card");
            }
      });
      gallery.forEach((item) => {
            if (480 > item.getBoundingClientRect().top) {
                  item.classList.add("product_apperd");
            } else if (660 < item.getBoundingClientRect().top) {
                  item.classList.remove("product_apperd");
            }
      });
});
