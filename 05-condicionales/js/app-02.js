const operador = prompt("Escribe el operador: + ,- ,* ,/");
const a = parseFloat(prompt("Primer openado: "));
const b = parseFloat(prompt("Segundo openado: "));
let resultado;
switch (operador) {
  case "+":
    resultado = a + b;
    break;
  case "-":
    resultado = a - b;
    break;
  case "*":
    resultado = a * b;
    break;
  case "/":
    resultado = a / b;
    break;
  default:
    resultado = "Operador no válido";
    break;
}
//mostrar el resultado
alert("El resultado es: " + resultado);
