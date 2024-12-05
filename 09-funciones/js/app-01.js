//crea una funcion a la que se le pase un
//numero e imprima
//en la consola su tabla de multiplicar
/**
 * imprimirTabla(1);
 * 1 x 1 = 1
 * 1 x 2 = 2
 * 1 x 3 = 3
 * 1 x 4 = 4
 * 1 x 5 = 5
 * 1 x 6 = 6
 * 1 x 7 = 7
 * 1 x 8 = 8
 * 1 x 9 = 9
 * 1 x 10 = 10
 */
function imprimirTabla(num) {
  console.log("Tabla del " + num);
  for (let i = 1; i <= 10; i++) {
    //   console.log(`1 x ${i} = ${1 * i}`);
    let res = num * i;
    console.log(num + " x " + i + " = " + res);
  }
}

// let num = prompt("Escribe un número");
// imprimirTabla(num);

function suma(a, b) {
  let res = a + b;
  return res;
}

let resultado = suma(1, 3);
console.log(resultado);

//escibe una funcion que pase de euros a dolares
//1 euro es 1,05 USD

/**
 * @description funcion que convierte euros a USD
 * @param {number} cantidad en euros
 * @returns {number} cantidad en dólares
 */
function euroToDolar(cantidad) {
  const usd = cantidad * 1.05;
  return usd;
}

function pedirEuros() {
  let euros = prompt("Introduce la cantidad de euros");
  alert(euroToDolar(euros));
}
