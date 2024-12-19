class Vehiculo {
  constructor(matricula, horaEntrada) {
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
  }
}

class Plaza {
  constructor(zona, numero) {
    this.zona = zona;
    this.numero = numero;
    this.ocupada = false;
  }
  ocupar() {
    this.ocupada = true;
  }
  liberar() {
    this.ocupada = false;
  }
}

class Parking {
  constructor(totalPlazas, precioPorHora = 1) {
    this.plazas = [];
    this.precioPorHora = precioPorHora;
    this.vehiculos = new Map();

    //crear las plazas del parking
    for (let i = 1; i <= totalPlazas; i++) {
      //TODO plazas pares zona B impares zona A
      let letra = "A";
      if (i % 2 === 0) {
        letra = "B";
      }
      const newPlaza = new Plaza(letra, i);
      this.plazas.push(newPlaza);
    }
  }
  registrarVehiculo(matricula) {
    //La matricula no puede repetirse
    if (this.vehiculos.has(matricula)) {
      console.log(`La matricula ${matricula} va está registrada`);
      return; //if else vs early return
    }
    //Buscar plaza libre
    const plazaLibre = this.plazas.find((plaza) => !plaza.ocupada);
    if (!plazaLibre) {
      console.log(`El parquin está lleno!!`);
      return;
    }

    //TODO sinó hay plazas no se puede aparcar
    const horaEntrada = new Date();
    const vehiculo = new Vehiculo(matricula, horaEntrada);
    plazaLibre.ocupar();

    this.vehiculos.set(matricula, { vehiculo, plaza: plazaLibre });
    console.log(
      `Vehículo ${vehiculo.matricula} registrado en la plaza ${
        plazaLibre.zona + plazaLibre.numero
      }`
    );
  }
}

const parking = new Parking(4, 6);

//zona testing
function registroVehiculos() {
  const matriculas = ["1234ABC", "1111AAA", "2222BBB"];
  matriculas.forEach((matricula) => {
    parking.registrarVehiculo(matricula);
  });
}
