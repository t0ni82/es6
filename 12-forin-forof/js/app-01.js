/* Bucles:
- while
- do while
- for
- Meñtodos de arrays: foreach, map, filter...

- for in
- for of
*/

const persona = {
  nombre: "Juan",
  apodo: "El trinchador asesino",
  edad: 30,
  profesion: "herrero",
  meritos: ["Ganador de forjado a fuego 2023", "sus cuchillos cortan mucho"],
};

for (let prop in persona) {
  console.log(`Propiedad: ${prop} es ${persona[prop]}`);
}

//for of
const cars = ["BMW", "Volvo", "Mini"];
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(car);
}

for (let car of cars) {
  console.log(car);
}
