// 1- Escribe un programa en una sola línea que haga aparecer en pantalla un alert que diga
// "Hello World".
// alert("Hello World");

// 2- Escribe un programa en una sola línea que escriba en la pantalla un texto que diga "Hello
// World" (document.write).
// document.write("Hello world");

// 3- Escribe un programa en una sola línea que escriba en la pantalla el resultado de sumar 3
// + 5.
// document.write(3 + 5);

// 4- Escribe un prog pida el nombre del usuario con un prompt yrama de dos líneas que
// escriba un texto que diga "Hola nombre_usuario".
// let userName = prompt("Dime tu nombre: ");
// document.write("Hola " + userName);

// 5- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el
// resultado de sumar estos dos números.
/* let num1 = prompt("Primer número: "); //convertir a numero
let num2 = prompt("Segundo número"); //convertir a numero

let suma = num1 + num2;
document.write(suma); */

// 6- Escribe un programa que pida dos números
// y escriba en la pantalla cuál es el mayor.

// let num1 = parseFloat(prompt("Número 1: "));
// let num2 = parseFloat(prompt("Número 2: "));
// let numMayor = num1;

// if (num2 > numMayor) {
//   numMayor = num2;
// }

// console.log("El numero " + numMayor + "es el mayor");

// 7- Escribe un programa que pida 3 números
// y escriba en la pantalla el mayor de los tres.

// let a = parseFloat(prompt("Escribe un numero:"));
// let b = parseFloat(prompt("Escribe otro numero:"));
// let c = parseFloat(prompt("Escribe otro numero:"));

// let cartera = a;

// if (b > cartera) {
//   cartera = b;
// }

// if (c > cartera) {
//   cartera = c;
// }
// console.log("LLevas " + cartera + "€ en la cartera");

// 8- Escribe un programa que pida un número
// y diga si es divisible por 2.
// let a = parseFloat(prompt("Escribe un numero:"));

// ("si (a % 2 === 0) -> es par sinó es impar");
// if (a % 2 === 0) {
//   alert("Par");
// } else {
//   alert("Impar");
// }

// 9- Escribe un programa que pida una frase y
//escriba cuántas veces aparece la letra "a".

// const frase = prompt("Escribe una frase");
// // const frase = "hola mundo";
// let numAes = 0;

// for (let i = 0; i < frase.length; i++) {
//   const letra = frase[i];
//   if (letra === "a") {
//     numAes++;
//   }
// }
// alert(`La frase tiene ${numAes} aes`);
// 10- Escribe un programa que pida una frase y
//escriba las vocales que aparecen.
/* 
const frase = prompt("Escribe una frase");
let numVocales = 0;

for (let i = 0; i < frase.length; i++) {
  const letra = frase[i];
  //solo sumar si es a, e, i, o,u
  //if ese
  if (letra === "a") {
    numVocales++;
  } else if (letra === "e") {
    numVocales++;
  } else if (letra === "i") {
    numVocales++;
  } else if (letra === "o") {
    numVocales++;
  } else if (letra === "u") {
    numVocales++;
  }

  //Operadores lógicos
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    numVocales++;
  }
  //switch case
  switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      numVocales++;
      break;
  }
}
alert(`La frase tiene ${numVocales} vocales`);
*/

// const frase = prompt("Escribe una frase");
const frase = "ayer fue domingo";
let numVocales = 0;
const vocales = "aeiouAEIOU";

for (let i = 0; i < frase.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
      numVocales++;
      break;
    }
  }
}
alert(`La frase tiene ${numVocales} vocales`);

// 11- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son
// vocales.
// 12- Escribe un programa que pida una frase y escriba cuántas veces aparece cada una de
// las vocales.
// 13- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (solo
// hace falta comprobar si lo es por uno de los cuatro).
// 14- Añade al ejercicio anterior que nos diga por cuál de los cuatro es divisible (debe decir
// todos aquellos por los que sea divisible).
// 15- Escribe un programa que escriba en pantalla los divisores de un número dado.
// 16- Escribe un programa que escriba en pantalla los divisores comunes de dos números
// dados.
// 17- Escribe un programa que nos diga si un número dado es primo (no
