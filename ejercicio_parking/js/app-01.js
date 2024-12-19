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
      console.log(`La matricula ${matricula} ya está registrada`);
      return; //if else vs early return salimos del método
    }
    //Buscar plaza libre
    const plazaLibre = this.plazas.find((plaza) => !plaza.ocupada);
    //Sinó hay plazas no se puede aparcar
    if (!plazaLibre) {
      console.log(`El parking está lleno!!`);
      return; //salimos del método
    }
    //Creamos un registro del vehiculo con la hora de entrada
    const horaEntrada = new Date();
    const vehiculo = new Vehiculo(matricula, horaEntrada);
    plazaLibre.ocupar(); //maracamos la plaza como ocupada

    //Añadimos el registro a la lista de vehiculos del parking
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
