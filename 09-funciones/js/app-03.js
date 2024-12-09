//Dividir el código en funciones
debugger;
console.log("Antes de init APP");
initApp();
console.log("Después de init APP");

function initApp() {
  console.log("Inicializando app...");
  pedirDatosUsuario();
}

function pedirDatosUsuario() {
  console.log("Pidiendo datos al usuario...");
  autenticarUsuario("Papá Noel");
}

function autenticarUsuario(usuario) {
  console.log("Autenticando usuario...");
  console.log("Usuario " + usuario + " autenticado conéxito");
}
