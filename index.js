//Texto Hero

var app = document.getElementById('Hero-titulo');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursorClassName: "cursor-hero",
});

typewriter
  .pauseFor(1000)
  .typeString('internet de las cosas')
  .pauseFor(500)
  .deleteAll()
  .typeString('inteligencia artificial')
  .pauseFor(500)
  .deleteAll()
  .typeString('hardware')
  .pauseFor(500)
  .deleteAll()
  .typeString('software')
  .pauseFor(500)
  .deleteAll()
  .typeString('innovación')
  .pauseFor(500)
  .deleteAll()
  .start();

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

  
//HORA

showTime();

function showTime(){
var myDate = new Date();
var hours = myDate.getHours();
hours = ("0" + hours).slice(-2);
var minutes = myDate.getMinutes();
minutes = ("0" + minutes).slice(-2);
var seconds = myDate.getSeconds();
seconds = ("0" + seconds).slice(-2);
var time = hours + ":" + minutes + ":" + seconds;
document.getElementById("current_date").innerHTML = time;
}
setInterval(showTime, 1000);

