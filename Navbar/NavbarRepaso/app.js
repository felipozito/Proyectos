const navServicios = document.querySelector(".item-servicios");
const subTopic = document.querySelector(".subtopic");
const navbar = document.querySelector(".navbar");
console.log(navServicios);

navServicios.addEventListener("click", () => {
      subTopic.classList.toggle("show");
});

window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
});
