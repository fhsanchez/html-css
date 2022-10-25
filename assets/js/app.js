function clickCart(){
    alert('Your cart is empty');
}

function hiddenPolicy(){
    document.querySelector(".footer").style.display = "none";
}


// Cambiar Imagenes
function changeImg1() {    
   document.querySelector(".col_2__img").src = "assets/succulents-2.jpg";
}

function changeImg2() {    
   document.querySelector(".col_2__img").src = "assets/succulents-1.jpg";
}


// Agregando evento para hacer click en carrito vacio
const elemento1 = document.querySelector(".carrito");
elemento1.addEventListener("click", clickCart);

// Agregando evento de ocultar footer o politicas
const elemento2 = document.querySelector(".footer");
elemento2.addEventListener("click", hiddenPolicy);


// Agregando evento para cambiar imagenes

const elemento3 = document.querySelector(".col_2__img");
elemento3.addEventListener("mouseover",changeImg1);

const elemento4 =document.querySelector(".col_2__img");
elemento4.addEventListener("mouseout",changeImg2);

