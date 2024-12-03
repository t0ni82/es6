//metodos de arrays
let x;
const arr = [28, 34, 56, 73, 890, 55];
//Añadir un elemento al final
/*arr.push(100, 20, 44);
arr.pop(); //Eliminia el ultimo elemento
arr.unshift(2000); //Añade al principio
arr.shift(); //Quita el primer elemeto

// arr.reverse();
x = arr.includes(103);
x = arr.indexOf(34);
x = arr.toString();
x = arr.join("-");
x = arr.slice(1, 4);
x = arr.splice(1, 4);*/
// x = arr;
//Podemos encadenar métodos dependiendo del valor devuelto
x = arr.slice(1, 4).reverse().toString().charAt(0);
//foreach, map, reduce, filter...
console.log(x);
