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
}

//Scroll



const header = document.querySelector(".header")

const hero_container = document.querySelector(".hero");
const proyecto_container = document.querySelector(".descripcion");

const menutextColor = document.querySelectorAll(".color_letra");

var heroPos = []
var proyectoPos = []

  
window.addEventListener('scroll', function(){

    if((heroPos.top) < 0){
        header.style.top = "-80px";   
    }

    else{
        header.style.top = "0px"; 
        header.style.backgroundColor = "none";   
    }

})   
  