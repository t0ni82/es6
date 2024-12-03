//Arrays literal
const numberList = [12, 34, 56, 79, 98];
const mix = [12, "hola", true, null];

//Constructor
// const frutas = new Array("Manzana", "Pera", "Naranja");
const frutas = ["Manzana", "Pera", "Naranja"];
console.log(typeof frutas);

let x;
//Obtener el valor de un elemento del array
x = numberList[3];
x = numberList[1] + numberList[3];
x = `Mi fruta preferida es ${frutas[2]}`;
x = frutas.length;
frutas[0] = "fresa";
frutas[frutas.length] = "piña";
frutas[frutas.length] = "Cacahuetes";

let verdura = "col";
let verduraPreferida = verdura;
verdura = "patata";

console.log("verdura vale", verdura);
console.log("preferida vale", verduraPreferida);

const deportes = ["futbol", "padel", "baloncesto"];
const deportesFavoritos = deportes; //no podemos copiar arrays directamente
deportesFavoritos[0] = "golf";

console.log("Lista de deportes", deportes);
console.log("Lista de deportes favoritos", deportesFavoritos);
