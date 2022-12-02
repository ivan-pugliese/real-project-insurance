/********** Activacion de Menu - Eventos **********/
((d) => {
  const btnMenu = d.querySelector(".menu-btn");
  const menu = d.querySelector(".nav");

  btnMenu.addEventListener("click", (e) => {
    btnMenu.firstElementChild.classList.toggle("none");
    btnMenu.lastElementChild.classList.toggle("none");
    menu.classList.toggle("menu-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".nav a")) return false; //si el selector que activa el evento no es un enlace dentro del menu no retorna nada.

    btnMenu.firstElementChild.classList.remove("none");
    btnMenu.lastElementChild.classList.add("none");
    menu.classList.remove("menu-active");
  });
})(document);

/********** Modo oscuro **********/
function darkTheme(btn) {
  const themeBtn = document.querySelector(btn);
  const selectors1 = document.querySelectorAll("[data-dark]");
  const selectors2 = document.querySelectorAll("[data-dark-features]");
  const selectors3 = document.querySelectorAll("[data-dark-shadow]");

  let moon = "🌙";
  let sun = "☀️";

  const lightMode = () => {
    selectors1.forEach((el) => el.classList.remove("dark-theme"));
    selectors2.forEach((el) => el.classList.remove("dark-theme-features"));
    selectors3.forEach((el) => el.classList.remove("dark-theme-shadow"));
    themeBtn.textContent = moon;
    localStorage.setItem("theme", "light");
  };
  const darkMode = () => {
    selectors1.forEach((el) => el.classList.add("dark-theme"));
    selectors2.forEach((el) => el.classList.add("dark-theme-features"));
    selectors3.forEach((el) => el.classList.add("dark-theme-shadow"));
    themeBtn.textContent = sun;
    localStorage.setItem("theme", "dark");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") lightMode();

    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}

darkTheme(".dark-theme-btn");
