//Más sobre callbacks
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

console.log("Iniciando pedidos...");
cocinar(recetaChipirones, servirPlato);
cocinar(recetaPatatas, paraLlevar);
