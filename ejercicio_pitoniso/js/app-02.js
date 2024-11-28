/**
 * Juego del pitoniso
 * versión con do while y break
 */

//generar numero aleatório
const secretNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 3;

do {
  let numeroJugador = parseInt(prompt("Introduce un número entre 1 y 100"));
  if (numeroJugador === secretNumber) {
    alert("Has ganado!!");
    break;
  }
  alert(numeroJugador < secretNumber ? "No llegas" : "Te has pasado");
} while (--intentos);

if (!intentos) alert("Has perdido");
