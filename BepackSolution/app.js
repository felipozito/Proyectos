const btn = document.querySelector("label");
const menu = document.querySelector(".list");
const item = document.querySelectorAll(".item");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

btn.addEventListener("click", () => {
      menu.classList.toggle("show");
});

item.forEach((element) => {
      element.addEventListener("click", () => menu.classList.toggle("show"));
});

let slideIndex = 0;
SlideShow();

function SlideShow() {
      for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
            slideIndex = 1;
      }
      for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(SlideShow, 3000); // Change image every 2 seconds
}
