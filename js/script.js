//Obtener boton
let mybutton = document.getElementById("btn-back-to-top");

// Cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento, mostrar el botón
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Cuando el usuario hace clic en el botón, se desplaza hasta la parte superior del documento
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


