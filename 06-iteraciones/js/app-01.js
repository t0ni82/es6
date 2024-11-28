//sirven para repetir pasos
//mientras se cumpla una condición
// let intentos = 0;
// while (intentos < 6) {
//   alert("Has clicado " + intentos + " veces!, pringao!!");
//   intentos++;
// }

//modificar el codigo para permitir solo 3
//intentos
const pin = "1234";
let respuesta = "";
let intentos = 3;

while (respuesta !== pin && intentos > 0) {
  respuesta = prompt("Escribe un pin");
  intentos--;
}

if (respuesta === pin) {
  alert("Has acertado!!");
} else {
  alert("No tiene más intentos");
}
