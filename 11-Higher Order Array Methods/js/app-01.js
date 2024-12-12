//foreach ejecuta una funcion callback
//para cada elemento del array

const nums = [2, 4, 65, 4, 5, 6, 9, 3, 5];

function suma3(num) {
  console.log(num + 3);
}

nums.forEach(suma3);

nums.forEach(function (item, index) {
  console.log(`Indice ${index} vale: ${item}`);
});

//Arrow functions en ES6
const resta3 = function (num) {
  return num - 3;
};

const resta4 = (num) => {
  return num - 4;
};

//Si solo hay una expresión el retun va implícito
//se pueden omitir las llaves
const resta5 = (num) => num - 5;

nums.forEach((element) => {
  console.log(element * 2);
});

//filter
const nums2 = [2, 4, 65, 4, 5, 6, 9, 3, 5];
//crear un nuevo array solo con los pares
const numsPares = nums2.filter(function (num) {
  return num % 2 === 0;
});
//Lo mismo pero con arrow function
const numsPares2 = nums2.filter((n) => n % 2 === 0);

const empresas = [
  { name: "Financiera Alpha", category: "Finanzas", start: 1981, end: 2004 },
  { name: "Tienda Beta", category: "Minorista", start: 1992, end: 2008 },
  { name: "Motores Gamma", category: "Automoción", start: 1999, end: 2007 },
  { name: "Retail Delta", category: "Minorista", start: 1989, end: 2010 },
  { name: "Tecno Epsilon", category: "Tecnología", start: 2009, end: 2014 },
  { name: "Inversiones Zeta", category: "Finanzas", start: 1987, end: 2010 },
  { name: "Autos Omega", category: "Automoción", start: 1986, end: 1996 },
  { name: "Innovación Sigma", category: "Tecnología", start: 2011, end: 2016 },
  { name: "Market Kappa", category: "Minorista", start: 1981, end: 1989 },
];
//Crear un array nuevo con solo las empresas Minorista (filter)
const minoristas = empresas.filter((emp) => {
  return emp.category === "Minorista";
});
console.log(minoristas);
//Obtener las empresas que empezaron en 1980 o después y cerraron en 2005 o antes
const empresas1 = empresas.filter((empresa) => {
  return empresa.start >= 1980 && empresa.end <= 2005;
});
console.log(empresas1);

// https://www.youtube.com/watch?v=qqR1enOceVg

//Obtener las empresas que tienen 10 años o más

// empresas.miFilter = function (callback) {
//   const array = [];
//   for (let i = 0; i < empresas.length; i++) {
//     if(callback(empresas[i])){
//       array.push(empresas[i])
//     }
//   }
//   return array;
// };

// empresas.miFilter((e) => {
//   return e.category === "Minorista";
// });
