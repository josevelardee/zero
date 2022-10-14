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

   if (tipoProyecto=="todos"){
    proyectosFunc(dataProyectos);
   } else{
    proyectosFunc(filtProyectos);
   }
   ScrollTrigger.refresh()

  });
};

//Funcion para insertar proyectos

function proyectosFunc(Array){
  const dataProyectos = Array;

  for(var i = 0 ; i < dataProyectos.length; i++){

    const divProyecto = document.createElement('div');    
    const divTexto = document.createElement('div');
    const divImg = document.createElement('a');

    divTexto.setAttribute('class', 'proyecto-item-texto')

    const titulo = document.createElement('h4');
    const descripcion = document.createElement('h5');
    const imagen = document.createElement('img');

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
    
    divProyecto.setAttribute('class', 'proyecto-item')
    if (i >= 4){
      divProyecto.setAttribute('class', 'proyecto-item proyecto-display')
    }
    divImg.setAttribute('class', 'proyecto-item-imagen')
    divProyecto.appendChild(divImg);
    divProyecto.appendChild(divTexto);
    listaProyectos.appendChild(divProyecto);  
  }
  
  if (dataProyectos.length >= 4){
    vermas.classList.remove("proyecto-display")
  }
  else{
    vermas.classList.add("proyecto-display")
  }

  gsap.utils.toArray(".proyecto-item").forEach((proyecto, i) => {
    gsap.from(proyecto, { 
      scrollTrigger: {
        trigger: proyecto,
        start: "top 90%",
        end: "bottom 20%",
        //markers: true,
        //toggleActions: "restart pause pause pause"
      },
      y: 50,
      opacity: 0,
      duration: 1
    })
  });
}


// Boton Mas proyectos

var vermas = document.querySelector(".boton-mas-proyectos");

vermas.addEventListener("click",() => {
  var proyectos  = document.querySelectorAll(".proyecto-display");
  for (var i=0; i<proyectos.length ;i++){
    if (proyectos.length <= 3){
      vermas.classList.add("proyecto-display")
    }
    if (i<3){
      proyectos[i].classList.remove("proyecto-display");
    }
  }
  ScrollTrigger.refresh()

  
});


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
const navIconH = document.querySelector(".bi-list");
const navIconX = document.querySelector(".bi-x");



navTogle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu_visible");
    document.body.classList.toggle("overflow");
    navIconH.classList.toggle("nav-toogle-show");
    navIconX.classList.toggle("nav-toogle-show");




    if(navMenu.classList.contains("nav-menu_visible")){
        navTogle.setAttribute("aria-lable","Cerrar menú");
    }else{
        navTogle.setAttribute("aria-lable","Abrir menú");
    }

});

for (var i = 0; i<menuItem.length ; i++){
  menuItem[i].addEventListener("click",() => {
  navMenu.classList.toggle("nav-menu_visible");
  document.body.classList.remove("overflow");

})
}

// //Scroll

// const header = document.querySelector(".header")

// const hero_container = document.querySelector(".hero");
// const proyecto_container = document.querySelector(".descripcion");

// const menutextColor = document.querySelectorAll(".color_letra");

// var heroPos = []
// var proyectoPos = []

  
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



//Animacion HERO

let tl = gsap.timeline()

tl.from(".nav-logo", { 
  y: -40,
  opacity: 0,
  duration: 1
})

tl.from(".nav-toogle", { 
  y: -40,
  opacity: 0,
  duration: 0.8
}, "<")

tl.from(".hero-container-texto", { 
  x: 20,
  opacity: 0,
  duration: 0.8
},"<0.4")

tl.from(".hero-container-bottom", { 
  y: 40,
  opacity: 0,
  duration: 0.8
},"<")

tl.to(".asim", { 
  y: -5,
  duration: 0.3
})

tl.to(".etric", { 
  y: 5,
  duration: 0.3
},"<")

//Animacion Descripcion

gsap.from(".descripcion-container-texto", { 
  scrollTrigger: {
    trigger: ".descripcion-container-texto",
    start: "top 90%",
    end: "bottom 20%",
    //markers: true,
    //toggleActions: "restart pause pause pause"
  },
  y: 40,
  opacity: 0,
  duration: 1.5
})

//Animacion Textos Grandes

gsap.utils.toArray(".texto-grande-izq").forEach((textoizq, i) => {

  gsap.fromTo(textoizq, { 
    x:-400},{ 
    scrollTrigger: {
      trigger: textoizq,
      start: "top 120%",
      scrub: 1,
    },
    x: 0,
  })

});

gsap.utils.toArray(".texto-grande-der").forEach((textoder, i) => {

  gsap.fromTo(textoder, { 
    x:100},{ 
    scrollTrigger: {
      trigger: textoder,
      start: "top 120%",
      scrub: 1,
      //markers:true
    },
    x: -300,
  })

});


//Animacion Servicios

gsap.from(".servicios-container h2", { 
  scrollTrigger: {
    trigger: ".servicios-container h2",
    start: "top 90%",
    end: "bottom 20%",

  },
  y: 40,
  opacity: 0,
  duration: 1
})

gsap.utils.toArray(".card-servicio").forEach((card, i) => {

  gsap.from(card, { 
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      end: "bottom 20%",
      //markers: true,
      //toggleActions: "restart pause pause pause"
    },
    y: 50,
    opacity: 0,
    duration: 1
  })

});

//Animacion Proyectos

gsap.from(".proyectos-container", { 
  scrollTrigger: {
    trigger: ".proyectos-container",
    start: "top 90%",
    end: "bottom 20%",
    //markers:true


  },
  y: 40,
  opacity: 0,
  duration: 1
})


//Animacion Clientes

gsap.from(".clientes-container", { 
  scrollTrigger: {
    trigger: ".clientes-container",
    start: "top 90%",
    end: "bottom 20%",
    //markers: true,
    //toggleActions: "restart pause pause pause"
  },
  y: 40,
  opacity: 0,
  duration: 1.5
})

//Animacion Pregunta

gsap.from(".pregunta-container", { 
  scrollTrigger: {
    trigger: ".pregunta-container",
    start: "top 90%",
    end: "bottom 20%",
    //toggleActions: "restart pause pause pause"
  },
  x: -10,
  opacity: 0,
  duration: 1
})


//Animacion Footer

gsap.from(".footer-container", { 
  scrollTrigger: {
    trigger: ".footer-container h4",
    start: "top 90%",
    end: "bottom 20%",
    //markers: true,
    //scrub: true,

    //toggleActions: "restart pause pause pause"
  },
  y: -40,
  opacity: 0,
  duration: 1.5
})