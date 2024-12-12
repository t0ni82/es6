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
