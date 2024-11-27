//Estrucuturas condicionales
let haceSol = true;

if (haceSol) {
  //console.log("Voy a la playa!");
} else {
  //console.log("Me quedo en casa");
}

haceSol = false;
let haceCalor = true;

if (haceSol || haceCalor) {
  //console.log("Voy a la playa!");
} else {
  //console.log("Me quedo en casa");
}

haceSol = true;
tengoHambre = true;
if (haceSol) {
  console.log("Voy a la playa!");
} else if (tengoHambre) {
  console.log("Hago palomitas");
} else {
  console.log("No sé que hacer...");
}

//Se pueden anidar
if (haceSol) {
  console.log("Voy a la playa!");
  if (tengoHambre) {
    console.log("Como un bocadillo");
  }
}

//Operadores aritméticos + - * / % ++ --
//Operadores de comparación == != === !== > < >= <=
//Operadoles lógicos && || !

//operador ternario
let accion = "";
if (haceSol) {
  accion = "Voy a la playa!";
} else {
  accion = "Me quedo en casa";
}

let accion2 = haceSol ? "Voy a la playa!" : "Me quedo en casa";
console.log(accion2);

console.log("Fin del script");
