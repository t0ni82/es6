//Declaración de una funcion
function sumar() {
  console.log(2 + 3);
}

//Ejecutar la funcion o llamarla
sumar();

//Función con parametros
function suma(num1, num2) {
  console.log(num1 + num2);
}
suma(3, 4);

debugger;

// saludo("Mario", "Bross");

const nombre = prompt("Escribe tu nombre");
const apellido = prompt("Escribe tu apellido");
saludo(nombre, apellido);
//hoisting
function saludo(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}
