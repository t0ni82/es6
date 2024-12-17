//Reduce
const numbers = [1, 2, 3, 4, -5, -6, 7, -8, 9, 10];
//Queremos sumar todos los numeros del array
const total = () => {
  let acumulador = 0;
  for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];
  }
  return acumulador;
};

console.log(total());

const sumatorio = numbers.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);
console.log(sumatorio);

const cart = [
  { id: 1, name: "platanos", price: 1.8 },
  { id: 2, name: "manzanas", price: 0.98 },
  { id: 3, name: "kiwis", price: 2 },
];

//Calcular el total del carrito
let totalCarrito = 0;
// for (let i = 0; i < cart.length; i++) {
//   totalCarrito += cart[i].price;
// }

// cart.forEach((item) => {
//   totalCarrito += item.price;
// });
totalCarrito = cart.reduce((acc, producto) => acc + producto.price, 0);

console.log(totalCarrito);

//Some y Every
const arr1 = [1, 2, 3, 4, 8];
const arr2 = [1, 2, 3, 4, 5];

let testMayor5 = arr1.some((item) => item > 5);
console.log(testMayor5);
testMayor5 = arr2.some((item) => item > 5);
console.log(testMayor5);

//flat
const arr3 = [
  [1, 2, 3, 4],
  [44, 55, 6],
  [6, 7, 8, 9],
];

let tot = 0;
// for (let i = 0; i < arr3.length; i++) {
//   // console.log(arr3[i]);
//   for (let j = 0; j < arr3[i].length; j++) {
//     console.log(arr3[i][j]);
//     tot += arr3[i][j];
//   }
// }
//
// //con flat
tot = arr3.flat().reduce((acc, item) => acc + item);
// arr3.flatMap()
console.log(tot);

//sort
const cart2 = [
  { id: 1, name: "platanos", price: 1.8 },
  { id: 2, name: "manzanas", price: 0.98 },
  { id: 3, name: "kiwis", price: 2 },
];
//crear un array nuevo ordenado usando
//sort de menor a mayor precio
const testSort = [34, 75, 67, 7285, 5];
console.log(testSort);
const newTestSort = testSort.toSorted((a, b) => a - b);
console.log(testSort);
console.log(newTestSort);

const cart2Sorted = cart2.toSorted((a, b) => b.price - a.price); //Mayor a menor precio
console.log(cart2Sorted);
//find
const kiwis = cart2.find((item) => item.name === "kiwis");
console.log(kiwis.price);

const personas = [
  {
    id: 1,
    nombre: "Alice",
    edad: 28,
    direccion: {
      ciudad: "Nueva York",
      pais: "Estados Unidos",
    },
    hobbies: ["lectura", "pintura"],
  },
  {
    id: 2,
    nombre: "Bob",
    edad: 35,
    direccion: {
      ciudad: "Londres",
      pais: "Reino Unido",
    },
    hobbies: ["correr", "cocinar"],
  },
  {
    id: 3,
    nombre: "Charlie",
    edad: 22,
    direccion: {
      ciudad: "París",
      pais: "Francia",
    },
    hobbies: ["jardinería", "fotografía"],
  },
  {
    id: 4,
    nombre: "David",
    edad: 32,
    direccion: {
      ciudad: "Tokio",
      pais: "Japón",
    },
    hobbies: ["viajar", "programar"],
  },

  {
    id: 5,
    nombre: "Eve",
    edad: 29,
    direccion: {
      ciudad: "Sídney",
      pais: "Australia",
    },
    hobbies: ["ciclismo", "tocar música"],
  },
];
