//Funciones Contructoras
function Coche(marca, modelo, motor, ruedas) {
  this.marca = marca;
  this.modelo = modelo;
  this.motor = motor;
  this.ruedas = ruedas;
  this.kilometraje = 0;
}

Coche.prototype.desplazar = function (kilometros) {
  const combustibleNecesario = kilometros * this.motor.consumo;

  if (this.motor.combustible >= combustibleNecesario) {
    this.kilometraje += kilometros;
    this.motor.combustible -= combustibleNecesario;
    console.log("EL coche se ha desplazado " + kilometros + "km");
    console.log(
      `Combustible restante: ${this.motor.combustible.toFixed(2)} litros`
    );
  } else {
    `No hay suficiente combustible para desplazarse ${kilometros} kilómetros. Combustible actual: ${this.motor.combustible.toFixed(
      2
    )} litros.`;
  }
};

Coche.prototype.repostar = function (litros) {
  this.motor.combustible += litros;
  console.log(
    `Se han añadido ${litros} lts de combustible.Combustible actual: ${this.motor.combustible}`
  );
};

Coche.prototype.informacion = function () {
  console.log(
    `Marca: ${this.marca},Modelo: ${this.modelo},Combustile: ${this.motor.combustible} litros,Kilometraje: ${this.kilometraje}`
  );
};

function Motor(tipo, cilindrada, combustible, consumo) {
  this.tipo = tipo;
  this.cilindrada = cilindrada;
  this.combustible = combustible;
  this.consumo = consumo;
}

const motorGasolinaA = new Motor("Gasolina", "1.8L", 50, 0.4);
const motorDieselA = new Motor("Diesel", "2L", 80, 0.2);

const coche1 = new Coche("Toyota", "Corolla", motorGasolinaA, 4); //Crea una instancia de Coche
const coche2 = new Coche("Opel", "Corsa", motorDieselA, 4);
console.log(coche1);
console.log(coche2);
// coche1.informacion();
// coche2.informacion();
