//Sintasis de clase
class Motor {
  constructor(tipo, cilindrada, combustible, consumo) {
    this.tipo = tipo;
    this.cilindrada = cilindrada;
    this.combustible = combustible;
    this.consumo = consumo;
    console.log("Contruyendo un Motor");
  }
}

const motorGasolinaA = new Motor("Gasolina", "1.8L", 50, 0.4);
const motorDieselA = new Motor("Diesel", "2L", 80, 0.2);
console.log(motorDieselA);
console.log(motorGasolinaA);

class Coche {
  constructor(marca, modelo, motor, ruedas) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.ruedas = ruedas;
    this.kilometraje = 0;
  }
  desplazar(kilometros) {
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
  }
}
