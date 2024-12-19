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
  generarTicket(matricula) {
    //TODO cambiar la clave de identificaíon de entrada unica de matricula a un UUID
    const registro = this.vehiculos.get(matricula);
    if (!registro) {
      console.log(`No hay ningun registro con la matricula ${matricula}`);
      return;
    }
    //Registrar hora de salida
    console.log(registro);
    const { vehiculo, plaza } = registro; //usamos desestructuración
    //calcular importe
    const horaSalida = new Date();
    const coste = this.calcularCoste(vehiculo.horaEntrada, horaSalida);
    //Liberar el registro de la plaza
    plaza.liberar();
    this.vehiculos.delete(matricula);
    //Imprimir el tiket
    console.log("============ TIQUET ===========");
    console.log(`Matricula: ${vehiculo.matricula}`);
    console.log(`Plaza: ${plaza.zona + plaza.numero}`);
    console.log(`Hora de entrada: ${vehiculo.horaEntrada.toLocaleString()}`);
    console.log(`Hora de salida: ${horaSalida.toLocaleString()}`);
    console.log(`Coste total: ${coste}`);
    console.log("===============================");
  }
  calcularCoste(horaEntrada, horaSalida) {
    //restar las fechas y multiplicar por precioPorHora
    const tiempoEstacionado = (horaSalida - horaEntrada) / (1000 * 60 * 60);
    return (tiempoEstacionado * this.precioPorHora).toFixed(2);
  }
}

const parking = new Parking(10, 60);

/**
 *
 *
 * zona testing
 */
//Funcion para cargar vehiculos en el parking
function registroVehiculos() {
  const matriculas = ["1234ABC", "1111AAA", "2222BBB"];
  for (let m of matriculas) {
    parking.registrarVehiculo(m);
  }
}
registroVehiculos(); //Registramos 3 vehiculos

parking.registrarVehiculo("1111AAA"); //No permitido

setTimeout(() => {
  parking.generarTicket("1234ABC");
}, 10000); //simula 2 segundis de estacionamiento

setTimeout(() => {
  parking.generarTicket("2222BBB");
}, 20000); //simula 2 segundis de estacionamiento
