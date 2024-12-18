class Calculadora {
  constructor() {
    this.resultado = 0;
  }
  mostrarResultado() {
    console.log(this.resultado);
  }
  pedirNumero() {
    let numero;
    //pedir el numero con un promt,
    do {
      // Intentar parsear la entrada a número
      numero = Number.parseFloat(prompt("Ingresa el número"));
      if (Number.isNaN(numero)) {
        alert("Ingresa un número válido");
      }
    } while (Number.isNaN(numero)); //verificar si es un numero válido con isNaN
    //si es válido actualizar this.resultado sinó volver a pedir el numero
    return numero;
  }
  suma() {
    const n = this.pedirNumero();
    this.resultado += n;
    this.mostrarResultado();
  }
  resta() {
    const n = this.pedirNumero();
    this.resultado -= n;
    this.mostrarResultado();
  }
  mult() {
    const n = this.pedirNumero();
    this.resultado *= n;
    this.mostrarResultado();
  }
  div() {
    const n = this.pedirNumero();
    this.resultado /= n;
    this.mostrarResultado();
  }
  reiniciar() {
    this.resultado = 0;
    this.mostrarResultado();
  }
}

// Uso de la calculadora
const miCalculadora = new Calculadora();

miCalculadora.mostrarResultado();
