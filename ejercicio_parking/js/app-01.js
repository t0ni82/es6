class Vehiculo {
  constructor(matricula, horaEntrada) {
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
  }
}

class Plaza {
  constructor(numero) {
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
    for (let i = 1; i < totalPlazas; i++) {
      this.plazas.push(new Plaza(i));
    }
  }
  registrarVehiculo(matricula) {
    //Buscar plaza libre
    const plazaLibre = this.plazas.find((plaza) => !plaza.ocupada);
    //TODO sinó hay plazas no se puede aparcar

    const horaEntrada = new Date();
    const vehiculo = new Vehiculo(matricula, horaEntrada);

    plazaLibre.ocupar();

    this.vehiculos.set(matricula, { vehiculo, plaza: plazaLibre });
  }
}

const parking = new Parking(10, 6);
