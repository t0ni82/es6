//Seleccionar el boton, el h1 y el input
const miBoton = document.getElementById("mi-boton");
const tituloPrincipal = document.querySelector("#titulo-principal");
const itemInput = document.querySelector("#item-input");

//añadirle un evento onclick
miBoton.addEventListener("click", () => {
  //Actualizar el contenido del h1 con el value del input
  console.log("Has clicado en el botón");
  tituloPrincipal.innerText = itemInput.value;
  itemInput.value = ""; //Limpia el input de texto
});
