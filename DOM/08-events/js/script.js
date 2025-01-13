//https://developer.mozilla.org/es/docs/Web/Events

//eventos de los input
// const input = document.querySelector("#item-input");
// //change, focus, blur ...
// input.addEventListener("blur", (evt) => console.log(evt));

//A veces insteresa bloquear el comportamiento por defecto de algunos eventos
//Por ejemplo el submit de los formularios y el click de los enlaces
// const form = document.querySelector("#item-form");
// form.addEventListener("submit", (evt) => {
//   console.log(evt);
//   evt.preventDefault();
// });

// document.querySelector("a").addEventListener("click", (evt) => {
//   evt.preventDefault();
//   alert("No vayas a google!!!!");
// });

//Propagación de eventos bubbling
// const button = document.querySelector("form button");
// const div = document.querySelector(".form-control");
// const form = document.querySelector("form");

// button.addEventListener("click", (evento) => {
//   alert("Has clicado el Botón");
//   evento.stopPropagation();
// });

// div.addEventListener("click", (evento) => {
//   alert("Has clicado en el div");
// });

// form.addEventListener("click", (evento) => {
//   alert("Has clicado en el FORM!!");
// });

// document.body.addEventListener("click", (evento) => {
//   alert("Has clicado en el body!!");
// });

//Sin Delegación de eventos
//Obtener una referencia a la coleccion de li
// const listaItems = document.querySelectorAll(".item");

// //usando un foreach añadir un evento click a cada li
// listaItems.forEach((item) => {
//   item.addEventListener("click", (evt) => {
//     console.log(evt);
//     // evt.target.style.backgroundColor = "green";
//     //usando la propiedad currenttarget del evento eliminar el li con remove()
//     evt.target.remove();
//   });
// });

//Con Delegación de eventos
// const lista = document.querySelector("#item-list"); //ul
// lista.addEventListener("click", (evt) => {
//   // console.log(evt.currentTarget);
//   console.log(evt.target);
//   if (evt.target.tagName === "LI") {
//     evt.target.remove();
//   }
// });

/********* Window events *********/
