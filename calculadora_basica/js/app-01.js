//Pedir un operador
const operador = prompt("Escribe el operador: + ,- ,* ,/");
//Pedir un numero
const a = parseFloat(prompt("Primer openado: "));
//Pedir otro numero
const b = parseFloat(prompt("Segundo openado: "));
//realizar el calculo según el operador
//(alert(eval("" + a + "" + operador + "" + b));Ojo, no usar nunca eval en producción
let resultado;
if (operador === "+") {
  resultado = a + b;
} else if (operador === "-") {
  resultado = a - b;
} else if (operador === "*") {
  resultado = a * b;
} else {
  resultado = a / b;
}
//mostrar el resultado
alert("El resultado es: " + resultado);
