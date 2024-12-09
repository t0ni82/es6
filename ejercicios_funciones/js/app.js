//1- Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
  return a + b;
}
// alert(suma(8, 9));

//2- Crea una función que reciba un array de números y devuelva el mayor de ellos
function getMaxValue(numList) {
  let max = 0;
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] > max) {
      max = numList[i];
    }
  }
  return max;
}

const lista = [2, 5, 65, 34, 1];
let numMax = getMaxValue(lista);

//3- funcion que cuente las vocales de un string
function cuentaVocales(frase) {
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
  return numVocales;
}
console.log(cuentaVocales("calabaza"));

//4. Crea una función que reciba un array de strings
//y devuelva un nuevo array con las strings en mayúsculas

function minusToMayus(lista) {
  const mayus = [];
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    mayus.push(element.toUpperCase());
  }
  return mayus;
}

const deportes = ["futbol", "tenis", "padel"];
console.log(minusToMayus(deportes)); // ["FUTBOL", "TENIS", "PADEL"]

/**
 * 5. Crea una función que reciba un número y
 * devuelva true si es primo, y false en caso contrario
 */
function esPrimo(num) {
  //Si es menor o igual a 1 no se consideran primos
  if (num <= 1) {
    return false;
  }
  //buscamos los divisores desde 2 hasta num -1
  for (let i = 2; i < num; i++) {
    //si encontramos una no es primo
    if (num % i === 0) {
      return false;
    }
  }
  //si llegamos al final es primo
  return true;
}

esPrimo(-1); //false
esPrimo(7); //true
esPrimo(8); //false
/**
 *
 * 6. Crea una función que reciba dos arrays y devuelva
 * un nuevo array que contenga los elementos comunes entre ambos
 */
function getComunes(arrA, arrB) {
  //resolver con nun for y el método includes
  const comunes = [];
  //aqui el for
  for (let i = 0; i < arrA.length; i++) {
    const elemento = arrA[i];
    if (arrB.includes(elemento)) {
      comunes.push(elemento);
    }
  }
  return comunes;
}
//Hay dos tipos más de listas en JS, el Map y Set
const a = [2, 3, 5, 7];
const b = [3, 6, 9, 5];
console.log(getComunes(a, b)); //deberia devolver [3,5]

/**
 * 7. Crea una función que reciba un array de
 *  números y devuelva la suma de todos los números pares
 *
 */

//8. Crea una función que reciba un array de números y
//devuelva un nuevo array
//con cada número elevado al cuadrado
function numCuadrado(listaNum) {
  const listaNumCuadrado = [];
  for (let i = 0; i < listaNum.length; i++) {
    const element = listaNum[i];
    const cuadrado = element * element;
    listaNumCuadrado.push(cuadrado);
  }
  return listaNumCuadrado;
}

const nuevaLista = lista.map((n) => n * n);

//9. Crea una función que reciba una cadena de texto
//y devuelva la misma cadena con las palabras en orden inverso

//"este fin de semana hay puente" -> ["este", "fin", "de", "semana", "hay", "puente"]
//Hay algun metodo de strings que convierta a array por un delimitador? " "
//Hay algun metodo de array que invierta su orden?
//Hay algun metodo a array que lo convierta a string usando un conector?

//"puente hay semana de fin este"
function reverseWordsCool(text) {
  return text.split(" ").reverse().join(" ");
}

// 10. Crea una función que calcule el factorial de
// un número dado
//Función recursiva

function factorial(n) {
  //el factorial 0 o 1 es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

debugger;
const m = factorial(8);
alert("El factorial de 8 es: " + m);

function saludar() {
  console.log("Feliz Navidad");
  saludar();
}

debugger;
saludar(); //cuidado con las funciones recursivas, llenan la pila de memória rapidamente
