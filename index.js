//Header Responsive

const navTogle = document.querySelector(".nav-toogle");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.querySelectorAll(".nav-menu-link");

navTogle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu_visible");
    //document.body.classList.toggle("overflow");


    if(navMenu.classList.contains("nav-menu_visible")){
        navTogle.setAttribute("aria-lable","Cerrar menú");
    }else{
        navTogle.setAttribute("aria-lable","Abrir menú");
    }

});

for (var i = 0; i<menuItem.length ; i++){
  menuItem[i].addEventListener("click",() => {
  navMenu.classList.toggle("nav-menu_visible");
  //document.body.classList.toggle("overflow");

})
};