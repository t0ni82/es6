//Nos traemos una reféncia de
//los elementos que neceitamos modificar
const hour1 = document.getElementById("hour1");
const hour2 = document.getElementById("hour2");
const minute1 = document.getElementById("minute1");
const minute2 = document.getElementById("minute2");
const second1 = document.getElementById("second1");
const second2 = document.getElementById("second2");

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hour1.textContent = hours[0];
  hour2.textContent = hours[1];
  minute1.textContent = minutes[0];
  minute2.textContent = minutes[1];
  second1.textContent = seconds[0];
  second2.textContent = seconds[1];
}

setInterval(updateClock, 1000);
updateClock();
//Encapsular el codigo en una funcion
//llamar a la funcion cada segundo para refrescar
//el reloj
