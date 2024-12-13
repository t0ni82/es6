//Más sobre callbacks
//Muestra de datos
const recetaChipirones = {
  nombre: "Chipirones al pil-pil",
  ingredientes: "chipirones",
  tiempoCoccion: 5000,
};
const recetaPatatas = {
  nombre: "Patatas Fritas",
  ingredientes: "patatas",
  tiempoCoccion: 8000,
};
//Declaracion de funciones
function cocinar(receta, callback) {
  console.log(`Oido cocina: una de ${receta.nombre}...`);
  console.log(`Preparando ingredientes ${receta.ingredientes}`);
  setTimeout(() => {
    const plato = `Una ración de ${receta.nombre}`;
    callback(plato);
  }, receta.tiempoCoccion);
}

function servirPlato(plato) {
  console.log(`!Sirviendo el ${plato} en la mesa 10!`);
}

function paraLlevar(plato) {
  console.log(`!El ${plato} listo para Glovo`);
}

// console.log("Iniciando pedidos...");

cocinar(recetaPatatas, servirPlato); //8s
cocinar(recetaChipirones, paraLlevar); //5s

let segundos = 0;
// const incrementarSegundos = function () {
//   console.log("Segundo: " + segundos);
//   segundos++;
// };
// setInterval(incrementarSegundos, 1000);
setInterval(() => {
  console.log("Segundo: " + segundos);
  segundos++;
}, 1000);
