const btn = document.querySelector("label");
const menu = document.querySelector(".list");
const item = document.querySelectorAll(".item");

btn.addEventListener("click", () => {
      menu.classList.toggle("show");
});

item.forEach((element) => {
      element.addEventListener("click", () => menu.classList.toggle("show"));
});
