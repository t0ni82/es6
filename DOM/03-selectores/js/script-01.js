//Selector de ID
const tituloPrincipal = document.getElementById("titulo-prinpical");
// console.log(tituloPrincipal.innerText);

//Con query selector
const tituloPrincipalQuery = document.querySelector("#titulo-prinpical");
// console.log(tituloPrincipalQuery.innerText);

//Ejemplo de leer input de texto
const itemInput = document.getElementById("item-input");
//Creamos un evento
itemInput.addEventListener("keyup", () => {
  console.log(itemInput.value);
  tituloPrincipal.innerText = itemInput.value;
});
