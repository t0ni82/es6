const miCoche = {
  //propiedades del objeto
  marca: "Toyota",
  modelo: "Corolla",
  motor: {
    tipo: "Gasolina",
    cilindrada: "1.8L",
    combustible: 50,
    consumo: 0.4,
  },
  ruedas: 4,
  kilometraje: 0,

  //métodos
  desplazar: function (kilometros) {
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
  },
  repostar: function (litros) {
    this.motor.combustible += litros;
    console.log(
      `Se han añadido ${litros} lts de combustible.Combustible actual: ${this.motor.combustible}`
    );
  },
  informacion: function () {
    console.log(
      `Marca: ${this.marca},Modelo: ${this.modelo},Combustile: ${this.motor.combustible} litros,Kilometraje: ${this.kilometraje}`
    );
  },
};

miCoche.informacion();
miCoche.desplazar(10);
miCoche.informacion();
miCoche.desplazar(200);
miCoche.repostar(100);
miCoche.desplazar(54);
miCoche.informacion();
