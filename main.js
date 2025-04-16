const nav_menubtn = document.getElementById("navmenubtn");
const menu_links = document.getElementById("menulinks");
const menuBtnIcon = nav_menubtn.querySelector("i");

nav_menubtn.addEventListener("click", (e) => {
    menu_links.classList.toggle("open");

  const isOpen = menu_links.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

menu_links.addEventListener("click", (e) => {
    menu_links.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const duplicate = document.querySelector(".logosSlider").cloneNode(true);
document.querySelector(".logos").appendChild(duplicate);

 