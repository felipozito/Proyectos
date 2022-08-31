const toggleColors = document.getElementById("toggle-colors");
const rootStyle = document.documentElement.style;
const header = document.querySelector("header");
const text = document.querySelector(".name");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const icon = document.querySelectorAll("i");
const experience = [
      {
            company: "TurnKey Resource",
            job: "Analista",
            task: [
                  "-Supervisa y apoyar el óptimo funcionamiento de los sistemas que la empresa.",
                  "-Planificar, coordinar, dirigir y controlar las actividades de trabajo relacionadas a la creación, redacción, documentación y actualización.",
                  "-Elaborar, mantener actualizados y debidamente documentados los instructivos de los procesos realizados en la organización.",
                  "-Participar en el desarrollo de nuevos proyectos en materia de métodos, procedimientos y técnicas.",
            ],
            start: "Junio 2020",
            end: "Actual",
      },
      {
            company: "JassaTelecom",
            job: "Jefe Tecnico",
            task: [
                  "-Análisis y Diseño de red Gpon.",
                  "-Control y Análisis del personal de Campo para el levantamiento de la red de fibra óptica.",
                  "-Dibujante de los planos de la red de Fibra.",
                  "-Control de salida e ingreso de mercaderia.",
                  "-Gestionar el Rediseño de la red.",
                  "-Administracion de bodega.",
            ],
            start: "Septiembre 2020",
            end: "Enero 2021",
      },
      {
            company: "Tecnologia para Llevar",
            job: "Administrador",
            task: [
                  "-Servicio de help desk.",
                  "-Recepción y solución de problemas networking.",
                  "-Soporte en software y mantenimiento de Laptops y Computadores.",
                  "-Control de salida e ingreso de mercaderia.",
                  "-Uso y planificación con Kardex.",
                  "-Administración de Local y atención al cliente.",
            ],
            start: "Junio 2020",
            end: "Septiembre 2021",
      },
      {
            company: "CINNET",
            job: "Ingeniero de Planta",
            task: [
                  "-Actualización de planos en AutoCAD del cableado eléctrico,cableado de red, accesos, seguridades y sistema contraincendios en YAVIRAC.",
                  "-Control de calidad e Inspeccion de cableado de accesos y seguridades en talleres.",
                  "-Planificación y ejecucion de instalación de infraestructura de puntos de Datos.",
            ],
            start: "Marzo 2020",
            end: "Marzo 2021",
      },
      {
            company: "Fundacion Scorpius",
            job: "Help Desk",
            task: [
                  "-Gestión De Cms y administración de sitio web.",
                  "-Recepción y solución de problemas networking.",
                  "-Manejo de caja chica.",
                  "-Atención a clientes.",
                  "-Procesos de mantenimiento, respaldo de servidores.",
                  "-Mantenimiento y actualización de laptops y computadoras.",
            ],
            start: "Marzo 2020",
            end: "Marzo 2021",
      },
];
const education = [
      {
            name: "Academlo",
            title: "Fullstack Developer",
            icon: "./Assets/Academlo.png",
      },
      {
            name: "Universidad Politecnica Salesiana",
            title: "Ingeniero Electronico",
            icon: "./Assets/ups.png",
      },
];
window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
};
window.addEventListener("click", (e) => {
      //   console.log(e.target);
      if (e.target.classList.value.includes("bx bxs-moon") || e.target.classList.value.includes("bx bxs-sun")) {
            darkmode(e.target.classList.value);
      }
      if (e.target.dataset.color) {
            rootStyle.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("Portfolio-Color", e.target.dataset.color);
      }
      if (e.target.id.includes("menu-icon")) {
            openNavbar();
      }
      if (e.target.dataset.id) {
            const id = e.target.dataset.id;
            if (id == "Resumen") {
                  resumen();
            }
            if (id == "Experiencia") {
                  experiencia();
            }
            if (id == "Educacion") {
                  educacion();
            }
      }
});
//--------------------------Darkmode----------
function darkmode(event) {
      const iconTheme = document.querySelector("header i");
      if (event.includes("bx bxs-moon")) {
            iconTheme.classList.replace("bxs-moon", "bxs-sun");
            document.body.classList.remove("darkMode");
            localStorage.setItem("theme", "darkMode");
      } else {
            iconTheme.classList.replace("bxs-sun", "bxs-moon");
            document.body.classList.add("darkMode");
            localStorage.removeItem("theme");
      }
}
//-----------------------OpenNavbar------------
function openNavbar() {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
}
//?----------------------home-------------------
// ------------Effect type
let i = 0;
const str = text.innerHTML;
text.innerHTML = " ";
function typingName() {
      if (i < str.length) {
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typingName, 300);
      }
}
setTimeout(typingName, 200);

//*---------------------- About-------------------*//
function resumen() {
      let text =
            "I am a Front-End web Developer, I can provide clean code and pixel perfect design. I also make the website more & more intereactive with web animation. I can provide clean code and pixel perdect design. I also maje the website more & more interactive with web animations. A responsive desgin makes your website accesible to all users, regardless of their device.";
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      const content = document.querySelector(".topic");
      content.innerHTML = "";
      content.appendChild(paragraph);
}
function experiencia() {
      const content = document.querySelector(".topic");
      content.innerHTML = "";
      experience.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("topic_card");
            let title = document.createElement("h4");
            title.textContent = item.company;
            let years = document.createElement("span");
            const div = document.createElement("div");
            div.classList.add("job_text");
            div.appendChild(title);
            div.appendChild(years);
            years.textContent = `${item.start} - ${item.end}`;
            let description = document.createElement("ul");
            item.task.forEach((activity) => {
                  let li = document.createElement("li");
                  li.textContent = activity;
                  description.appendChild(li);
            });
            card.appendChild(div);
            card.appendChild(description);
            content.appendChild(card);
      });
}
function educacion() {
      const content = document.querySelector(".topic");
      content.innerHTML = "";
      education.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("education_card");
            const div = document.createElement("div");
            div.classList.add("education_text");
            let title = document.createElement("h4");
            title.textContent = item.name;
            let text = document.createElement("span");
            text.textContent = item.title;
            let img = document.createElement("img");
            img.src = item.icon;
            img.classList.add("education_img");
            card.appendChild(img);
            div.appendChild(title);
            div.appendChild(text);
            card.append(div);
            content.appendChild(card);
      });
}
