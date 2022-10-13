const listaProyectos = document.querySelector('.lista-proyectos');
var tipoProyecto = 'mecatronica';

const requestURL = 'proyectos.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  cargarElementosInicio();
}

function cargarElementosInicio(){
  const jsonProyectos = request.response;
  const dataProyectos = jsonProyectos['Proyectos']
  proyectosFunc(dataProyectos);
  const proElim = document.querySelectorAll ('.proyecto-item');
  for(var j = 0 ;j<proElim.length;j++){
   listaProyectos.removeChild(proElim[j]);
  }
  const filtProyectos = dataProyectos.filter(function(dataProyectos){
    return dataProyectos.tipo == tipoProyecto;
   });
   proyectosFunc(filtProyectos);
}

function cargarElementos(){
  const jsonProyectos = request.response;
  const dataProyectos = jsonProyectos['Proyectos']
  const filtProyectos = dataProyectos.filter(function(dataProyectos){
    return dataProyectos.tipo == tipoProyecto;
   });
  proyectosFunc(filtProyectos);
}

//Tipo de Proyecto Active Element y Filtro

var proyectoTipo = document.getElementById("proyecto-tipo");
var proyectoLinks = proyectoTipo.getElementsByClassName("proyecto-tipo-link");
const proyectos = document.querySelectorAll(".proyecto-item")

for (var i = 0; i < proyectoLinks.length; i++) {
   proyectoLinks[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("proyecto-tipo-link_active");
   
   current[0].className = current[0].className.replace(" proyecto-tipo-link_active", "");
   this.className += " proyecto-tipo-link_active";
   
   tipoProyecto = current[0].id;
   
   const proElim = document.querySelectorAll ('.proyecto-item');
   for(var j = 0 ;j<proElim.length;j++){
    listaProyectos.removeChild(proElim[j]);
   }

   const jsonProyectos = request.response;
   const dataProyectos = jsonProyectos['Proyectos'];
   const filtProyectos = dataProyectos.filter(function(dataProyectos){
    return dataProyectos.tipo == tipoProyecto;
   });
    proyectosFunc(filtProyectos);

  });
};

//Texto Hero

var app = document.getElementById('Hero-titulo');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: ""
});

typewriter
  .pauseFor(1500)
  .typeString('internet de las cosas.')
  .pauseFor(1500)
  .deleteAll()

  .typeString('hardware.')
  .pauseFor(1500)
  .deleteAll()

  .typeString('inteligencia artificial.')
  .pauseFor(1500)
  .deleteAll()

  .typeString('software.')
  .pauseFor(1500)
  .deleteAll()

  .typeString('innovación.')
  .pauseFor(1500)
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


//Funcion para insertar proyectos

function proyectosFunc(Array){
    const dataProyectos = Array;
  
    for(var i = 0 ; i < dataProyectos.length; i++){
      const divProyecto = document.createElement('div');    
      const divTexto = document.createElement('div');
      const divImg = document.createElement('a');
      //const divTag = document.createElement('div');
  
      divTexto.setAttribute('class', 'proyecto-item-texto')
      //divTag.setAttribute('class', 'proyecto-tag')
  
      //const subtitulo = document.createElement('h4');
      const titulo = document.createElement('h4');
      const descripcion = document.createElement('h5');
      const imagen = document.createElement('img');
  
      //subtitulo.textContent = dataProyectos[i].subtitulo;
      titulo.textContent = dataProyectos[i].titulo;
      descripcion.textContent = dataProyectos[i].descripcion;
    
      imagen.setAttribute('src', dataProyectos[i].imagen);
      imagen.setAttribute('alt', dataProyectos[i].titulo);
      imagen.setAttribute('title', dataProyectos[i].titulo);
      imagen.setAttribute('class', 'img-proyecto hovered-proyecto');
      divImg.setAttribute('href', dataProyectos[i].url);
      divImg.setAttribute('target', "_blank");
      divImg.setAttribute('rel', "nofollow");
          
      //divTexto.appendChild(subtitulo);
      divTexto.appendChild(titulo);
      divTexto.appendChild(descripcion);
      //divTexto.appendChild(divTag);
      divImg.appendChild(imagen);
  
      //const tagProyecto= dataProyectos[i].tag.split(", ")
      
      divProyecto.setAttribute('class', 'proyecto-item inline-photo')
      divImg.setAttribute('class', 'proyecto-item-imagen')
      divProyecto.appendChild(divImg);
      divProyecto.appendChild(divTexto);
      

      listaProyectos.appendChild(divProyecto);       
  }
}

//Animation

let tl = gsap.timeline()

tl.from(".nav-logo", { 
  y: -40,
  opacity: 0,
  duration: 1
})

tl.from(".nav-toogle", { 
  y: -40,
  opacity: 0,
  duration: 1
}, "<")

tl.from(".hero-container-texto", { 
  x: -100,
  opacity: 0,
  duration: 1
},"<0.4")

tl.from(".hero-container-bottom", { 
  y: 40,
  opacity: 0,
  duration: 1
},"<0.4")

gsap.from(".descripcion-container-texto", { 
  scrollTrigger: {
    trigger: ".descripcion-container-texto",
    start: "top 80%",
    end: "bottom 20%",
    //markers: true,
    toggleActions: "restart pause pause pause"
  },
  y: 50,
  opacity: 0,
  duration: 1.5
})

gsap.fromTo(".texto-grande-izq", { 
  x:-400},{ 
  scrollTrigger: {
    trigger: ".texto-grande-izq",
    start: "top 100%",
    //markers: true,
    scrub: 1,
    toggleActions: "restart none none none"
  },
  x: 0,
})

gsap.fromTo(".texto-grande-der", {
  x:100},{ 
  scrollTrigger: {
    trigger: ".texto-grande-der",
    start: "top 100%",
    //markers: true,
    scrub: 1,
    toggleActions: "restart pause reverse pause"
  },
  x: -300,
})