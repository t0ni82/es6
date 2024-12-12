//Declalarión de una función
function saludo() {
  console.log("Hola");
}

// saludoChachi();

//Expresión de función
const saludoChachi = function () {
  console.log("Aloha!!");
};

// const nuevoSaludo = saludoChachi;

//callback -> una funcion que se pasa como
//argumento a otra
/*
function preguntar(pregunta, funcSi, funcNo) {
  if (confirm(pregunta)) {
    funcSi(); //callback si es si
  } else {
    funcNo();
  }
}

function mostrarSI() {
  console.log("Has contestado que SI");
}

function mostrarNo() {
  console.log("Has contestado que NO");
}

preguntar("Quieres un café?", mostrarSI, mostrarNo);
preguntar(
  "Quieres una ensaimada?",
  function () {
    alert("Aqui tienes tu ensaimada");
  },
  function () {
    alert("Pues nada!!");
  }
);
*/

function crearMiCita(cita, callback) {
  const miCita = "Como yo siempre digo, " + cita;
  callback(miCita);
}

crearMiCita("En abril aguas mil", function (texto) {
  document.write(texto);
});

// function logCita(cita) {
//   console.log(cita);
// }

// function alertCita(cita) {
//   alert(cita);
// }

function calcular(a, b, calcFun) {
  const res = calcFun(a, b);
  console.log("El resultado es: " + res);
}

function suma(num1, num2) {
  return num1 + num2;
}
function resta(num1, num2) {
  return num1 - num2;
}
const mult = function (num1, num2) {
  return num1 * num2;
};
// calcular(2, 3, mult);
// calcular(2, 3, suma);
// calcular(2, 3, resta);
let respuesta = "No hay datos aún...";
//Ejemplo de callback con asincronia
function solicitudServidor(callback) {
  console.log("Consultando...");
  setTimeout(function () {
    respuesta = "Aqui tienes tus datos!!!";
    callback(respuesta);
  }, 5000);
}

solicitudServidor(function (res) {
  alert(res);
});

console.log("El script sigue");
console.log(respuesta);
