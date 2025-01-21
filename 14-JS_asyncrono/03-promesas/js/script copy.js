//Explicacion de las promesas con animaciones
//https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tarea asíncrona completada");
    resolve();
  }, 2000);
});

console.log("Antes de la promesa");
promesa.then(() => {
  console.log("Promesa terminada correctamente");
});
console.log("Después de la promesa");

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      reject("Algo ha ido mal");
    } else {
      resolve({ name: "Pepe", age: 30 });
    }
  }, 4000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("La promesa se ha resuelto o rechazado");
  });
